/**
 * MODUL PENTADBIR & TETAPAN SISTEM (ADMIN PORTAL)
 * Sistem Dashboard Pengurusan Pentadbiran & Kurikulum SK Ranggu
 * Pembangun: Momon (Lead System Architect)
 */

class AdminManager {
  constructor() {
    this.isAuthenticated = false;
    this.storageKey = "SK_RANGGU_ADMIN_AUTH";
    this.pinKey = "SK_RANGGU_ADMIN_PIN";
    this.defaultPin = "1234";
  }

  // Semak status pengesahan sedia ada
  checkAuth() {
    this.isAuthenticated = sessionStorage.getItem(this.storageKey) === "true";
    return this.isAuthenticated;
  }

  // Dapatkan PIN semasa
  getPin() {
    return localStorage.getItem(this.pinKey) || this.defaultPin;
  }

  // Tetapkan PIN baru
  setPin(newPin) {
    if (!newPin || newPin.length < 4) return false;
    localStorage.setItem(this.pinKey, newPin);
    return true;
  }

  // Log masuk
  login(inputPin) {
    const currentPin = this.getPin();
    if (inputPin === currentPin) {
      this.isAuthenticated = true;
      sessionStorage.setItem(this.storageKey, "true");
      return { success: true };
    }
    return { success: false, error: "Kata laluan PIN pentadbir tidak tepat. Sila cuba lagi." };
  }

  // Log keluar
  logout() {
    this.isAuthenticated = false;
    sessionStorage.removeItem(this.storageKey);
  }

  // Kemaskini Profil Sekolah
  updateSchoolProfile(profileData) {
    if (!this.checkAuth()) return false;
    window.SKR_DATA.school = { ...window.SKR_DATA.school, ...profileData };
    saveStoredData(window.SKR_DATA);
    return true;
  }

  // Kemaskini Kredit Pembangun Sistem (Momon)
  updateDeveloperInfo(devData) {
    if (!this.checkAuth()) return false;
    window.SKR_DATA.developer = { ...window.SKR_DATA.developer, ...devData };
    saveStoredData(window.SKR_DATA);
    return true;
  }

  // Kemaskini Konfigurasi Google Sheets
  updateGoogleSheetConfig(sheetConfig) {
    if (!this.checkAuth()) return false;
    window.SKR_DATA.googleSheets = { ...window.SKR_DATA.googleSheets, ...sheetConfig };
    if (window.googleSheetManager) {
      window.googleSheetManager.sheetId = sheetConfig.sheetId;
      window.googleSheetManager.gid = sheetConfig.gid;
    }
    saveStoredData(window.SKR_DATA);
    return true;
  }

  // Pengurusan Carta Organisasi: Tambah Ahli
  addOrgMember(member) {
    if (!this.checkAuth()) return false;
    const newMember = {
      id: "org-" + Date.now(),
      tier: parseInt(member.tier) || 3,
      role: member.role || "Ahli Jawatankuasa",
      name: member.name || "Nama Guru",
      grade: member.grade || "DG41",
      category: member.category || "Jawatankuasa Kurikulum",
      email: member.email || "guru@moe-dl.edu.my",
      phone: member.phone || "089-925493",
      avatarBg: member.avatarBg || "from-slate-600 to-slate-800",
      duties: member.duties || "Tugas pentadbiran dan kurikulum"
    };
    window.SKR_DATA.organizationChart.push(newMember);
    saveStoredData(window.SKR_DATA);
    return newMember;
  }

  // Pengurusan Carta Organisasi: Kemas kini Ahli
  updateOrgMember(id, updatedFields) {
    if (!this.checkAuth()) return false;
    const index = window.SKR_DATA.organizationChart.findIndex(m => m.id === id);
    if (index !== -1) {
      window.SKR_DATA.organizationChart[index] = {
        ...window.SKR_DATA.organizationChart[index],
        ...updatedFields
      };
      saveStoredData(window.SKR_DATA);
      return true;
    }
    return false;
  }

  // Pengurusan Carta Organisasi: Padam Ahli
  deleteOrgMember(id) {
    if (!this.checkAuth()) return false;
    window.SKR_DATA.organizationChart = window.SKR_DATA.organizationChart.filter(m => m.id !== id);
    saveStoredData(window.SKR_DATA);
    return true;
  }

  // Tambah Pengumuman Baru
  addAnnouncement(announcement) {
    if (!this.checkAuth()) return false;
    const newAnn = {
      id: "ann-" + Date.now(),
      title: announcement.title,
      date: announcement.date || new Date().toISOString().split("T")[0],
      priority: announcement.priority || "Sederhana",
      category: announcement.category || "Pentadbiran",
      author: announcement.author || "Unit Pentadbiran SK Ranggu",
      content: announcement.content
    };
    window.SKR_DATA.announcements.unshift(newAnn);
    saveStoredData(window.SKR_DATA);
    return newAnn;
  }

  // Padam Pengumuman
  deleteAnnouncement(id) {
    if (!this.checkAuth()) return false;
    window.SKR_DATA.announcements = window.SKR_DATA.announcements.filter(a => a.id !== id);
    saveStoredData(window.SKR_DATA);
    return true;
  }

  // Tambah Acara Takwim
  addTakwimEvent(event) {
    if (!this.checkAuth()) return false;
    const newEvent = {
      id: "tak-" + Date.now(),
      title: event.title,
      date: event.date,
      time: event.time || "08:00 AM",
      venue: event.venue || "Bilik Mesyuarat",
      inCharge: event.inCharge || "Setiausaha Kurikulum",
      status: event.status || "Akan Datang"
    };
    window.SKR_DATA.takwimEvents.push(newEvent);
    // Susun mengikut tarikh
    window.SKR_DATA.takwimEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
    saveStoredData(window.SKR_DATA);
    return newEvent;
  }

  // Padam Acara Takwim
  deleteTakwimEvent(id) {
    if (!this.checkAuth()) return false;
    window.SKR_DATA.takwimEvents = window.SKR_DATA.takwimEvents.filter(e => e.id !== id);
    saveStoredData(window.SKR_DATA);
    return true;
  }

  // Eksport Sandaran Penuh (JSON)
  exportFullBackup() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(window.SKR_DATA, null, 2));
    const downloadAnchor = document.createElement("a");
    const dateStr = new Date().toISOString().split("T")[0];
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `sandaran-sk-ranggu-dashboard-${dateStr}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  }

  // Import Sandaran Fail (JSON)
  importBackupFile(jsonString) {
    if (!this.checkAuth()) return { success: false, error: "Akses pentadbir diperlukan" };
    try {
      const parsed = JSON.parse(jsonString);
      if (!parsed.school || !parsed.organizationChart) {
        throw new Error("Format fail sandaran tidak sah. Tiada struktur data SK Ranggu yang lengkap.");
      }
      window.SKR_DATA = parsed;
      saveStoredData(window.SKR_DATA);
      return { success: true };
    } catch (e) {
      return { success: false, error: e.message };
    }
  }

  // Tetapkan semula ke lalai kilang
  resetSystem() {
    if (!this.checkAuth()) return false;
    window.SKR_DATA = resetToDefaultData();
    return true;
  }
}

// Inisialisasi global
window.adminManager = new AdminManager();
