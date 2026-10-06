/**
 * MODUL INTEGRASI & PENYELARASAN GOOGLE SHEETS
 * Sistem Dashboard Pengurusan Pentadbiran & Kurikulum SK Ranggu
 * Pembangun: Momon
 */

class GoogleSheetManager {
  constructor(config = {}) {
    this.sheetId = config.sheetId || "19BgxY06KSHSizUsnreZXnXNoUbf-ivhaVj9YVQ8hVdU";
    this.gid = config.gid || "2057996103";
    this.data = [];
    this.headers = [];
    this.isLoading = false;
    this.lastError = null;
    this.lastSyncTime = null;
  }

  // Bina URL GViz JSON
  getGvizUrl() {
    return `https://docs.google.com/spreadsheets/d/${this.sheetId}/gviz/tq?tqx=out:json&gid=${this.gid}`;
  }

  // Bina URL CSV
  getCsvUrl() {
    return `https://docs.google.com/spreadsheets/d/${this.sheetId}/export?format=csv&gid=${this.gid}`;
  }

  // Bina URL Iframe Web Embed
  getEmbedUrl() {
    return `https://docs.google.com/spreadsheets/d/${this.sheetId}/htmlembed?gid=${this.gid}&widget=true&chrome=false`;
  }

  // Fetch data secara langsung
  async fetchSheetData() {
    this.isLoading = true;
    this.lastError = null;

    try {
      // Cuba kaedah 1: GViz JSON endpoint
      const gvizUrl = this.getGvizUrl();
      const response = await fetch(gvizUrl, { cache: "no-store" });
      
      if (!response.ok) {
        throw new Error(`Ralat respons server Google (${response.status}): Sila pastikan pautan perkongsian ditetapkan kepada 'Sesiapa sahaja dengan pautan boleh melihat'`);
      }

      const text = await response.text();
      // GViz mengembalikan teks dengan pembungkus: /*O_o*/ google.visualization.Query.setResponse({...});
      const jsonMatch = text.match(/google\.visualization\.Query\.setResponse\(([\s\S]*)\);/);
      
      if (!jsonMatch || !jsonMatch[1]) {
        throw new Error("Format respons Google Sheets tidak sah atau fail memerlukan log masuk akaun Google.");
      }

      const gvizData = JSON.parse(jsonMatch[1]);
      if (gvizData.status === "error") {
        throw new Error(gvizData.errors?.[0]?.detailed_message || "Akses ke Google Sheet ditolak.");
      }

      const table = gvizData.table;
      this.headers = table.cols.map(col => col.label || col.id);
      
      this.data = table.rows.map(row => {
        const rowData = {};
        row.c.forEach((cell, idx) => {
          const headerName = this.headers[idx] || `Kolum ${idx + 1}`;
          rowData[headerName] = cell ? (cell.f !== undefined ? cell.f : cell.v) : "";
        });
        return rowData;
      });

      this.lastSyncTime = new Date();
      this.cacheData();
      this.isLoading = false;
      return { success: true, headers: this.headers, data: this.data };

    } catch (err) {
      this.isLoading = false;
      this.lastError = err.message;
      console.warn("Ralat penyelarasan automatik Google Sheets:", err);

      // Cuba semak jika ada cache tersimpan
      const cached = this.getCachedData();
      if (cached && cached.data && cached.data.length > 0) {
        this.headers = cached.headers;
        this.data = cached.data;
        this.lastSyncTime = cached.timestamp;
        return { success: true, fromCache: true, headers: this.headers, data: this.data, warning: this.lastError };
      }

      return { success: false, error: this.lastError };
    }
  }

  // Parse fail CSV atau teks tampalan (Fallback manual import)
  parseCsvText(csvText) {
    try {
      const lines = csvText.split(/\r?\n/).filter(line => line.trim().length > 0);
      if (lines.length === 0) throw new Error("Tiada data dijumpai dalam teks CSV.");

      // Parse baris pertama sebagai pengepala
      const rawHeaders = this.splitCsvRow(lines[0]);
      this.headers = rawHeaders.map((h, i) => h.trim() || `Kolum ${i+1}`);

      const result = [];
      for (let i = 1; i < lines.length; i++) {
        const values = this.splitCsvRow(lines[i]);
        if (values.length === 0) continue;
        const row = {};
        this.headers.forEach((h, idx) => {
          row[h] = values[idx] !== undefined ? values[idx].trim() : "";
        });
        result.push(row);
      }

      this.data = result;
      this.lastSyncTime = new Date();
      this.cacheData();
      return { success: true, headers: this.headers, data: this.data };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }

  // Pembahagi nilai CSV mengendalikan petikan pembuka & penutup
  splitCsvRow(rowText) {
    const values = [];
    let insideQuote = false;
    let entry = "";
    
    for (let i = 0; i < rowText.length; i++) {
      const char = rowText[i];
      if (char === '"' || char === "'") {
        insideQuote = !insideQuote;
      } else if ((char === ',' || char === '\t') && !insideQuote) {
        values.push(entry);
        entry = "";
      } else {
        entry += char;
      }
    }
    values.push(entry);
    return values;
  }

  // Cache ke LocalStorage
  cacheData() {
    try {
      const cacheObj = {
        headers: this.headers,
        data: this.data,
        timestamp: this.lastSyncTime
      };
      localStorage.setItem("SK_RANGGU_SHEET_CACHE", JSON.stringify(cacheObj));
    } catch (e) {
      console.warn("Gagal simpan cache sheet:", e);
    }
  }

  getCachedData() {
    try {
      const raw = localStorage.getItem("SK_RANGGU_SHEET_CACHE");
      if (raw) return JSON.parse(raw);
    } catch (e) {
      return null;
    }
    return null;
  }

  // Eksport data ke format CSV muat turun
  exportToCsv(filename = "data-kurikulum-sk-ranggu.csv") {
    if (!this.data || this.data.length === 0) return false;
    
    const headers = this.headers.length > 0 ? this.headers : Object.keys(this.data[0]);
    const csvRows = [headers.map(h => `"${h.replace(/"/g, '""')}"`).join(",")];

    for (const row of this.data) {
      const values = headers.map(h => {
        const val = row[h] !== undefined ? String(row[h]) : "";
        return `"${val.replace(/"/g, '""')}"`;
      });
      csvRows.push(values.join(","));
    }

    const blob = new Blob([csvRows.join("\n")], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return true;
  }
}

// Inisialisasi global
window.googleSheetManager = new GoogleSheetManager(window.SKR_DATA?.googleSheets || {});
