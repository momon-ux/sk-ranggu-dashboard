/**
 * MODUL PENTADBIR & PENGURUSAN TETAPAN (ADMIN PORTAL)
 * Sistem Dashboard Pengurusan Pentadbiran & Kurikulum SK Ranggu
 * Pembangun: Mohammad Fikrey (Pentadbir Sistem)
 */

class AdminManager {
  constructor() {
    this.isAuthenticated = false;
    this.storageKey = "SK_RANGGU_ADMIN_AUTH";
    this.pinKey = "SK_RANGGU_ADMIN_PIN";
    this.defaultPin = "1234";
  }

  checkAuth() {
    this.isAuthenticated = sessionStorage.getItem(this.storageKey) === "true";
    return this.isAuthenticated;
  }

  getPin() {
    return localStorage.getItem(this.pinKey) || this.defaultPin;
  }

  setPin(newPin) {
    if (!newPin || newPin.length < 4) return false;
    localStorage.setItem(this.pinKey, newPin);
    return true;
  }

  login(inputPin) {
    const currentPin = this.getPin();
    if (inputPin === currentPin) {
      this.isAuthenticated = true;
      sessionStorage.setItem(this.storageKey, "true");
      return { success: true };
    }
    return { success: false, error: "Kata laluan PIN pentadbir tidak tepat. Sila cuba lagi." };
  }

  logout() {
    this.isAuthenticated = false;
    sessionStorage.removeItem(this.storageKey);
  }

  // Pengurusan Profil Sekolah
  updateSchoolProfile(profileData) {
    if (!this.checkAuth()) return false;
    window.SKR_DATA.school = { ...window.SKR_DATA.school, ...profileData };
    saveStoredData(window.SKR_DATA);
    return true;
  }

  // Pengurusan Dokumen / Muat Naik Bahan Kurikulum
  addDocument(doc) {
    if (!this.checkAuth()) return false;
    if (!window.SKR_DATA.documents) window.SKR_DATA.documents = [];

    const newDoc = {
      id: "doc-" + Date.now(),
      title: doc.title,
      category: doc.category || "Umum",
      panitia: doc.panitia || "Kurikulum",
      date: new Date().toISOString().split("T")[0],
      type: doc.type || "PDF",
      fileUrl: doc.fileUrl || "#",
      size: doc.size || "1.0 MB",
      uploader: doc.uploader || "Pentadbir Sistem"
    };

    window.SKR_DATA.documents.unshift(newDoc);
    saveStoredData(window.SKR_DATA);
    return newDoc;
  }

  deleteDocument(id) {
    if (!this.checkAuth()) return false;
    if (!window.SKR_DATA.documents) return false;
    window.SKR_DATA.documents = window.SKR_DATA.documents.filter(d => d.id !== id);
    saveStoredData(window.SKR_DATA);
    return true;
  }

  // Pengurusan Carta Organisasi
  addOrgMember(member) {
    if (!this.checkAuth()) return false;
    const newMember = {
      id: "org-" + Date.now(),
      tier: parseInt(member.tier) || 3,
      role: member.role || "Guru",
      name: member.name || "Nama Guru",
      grade: member.grade || "DG41",
      category: member.category || "Ketua Panitia",
      email: member.email || "guru@moe-dl.edu.my",
      phone: member.phone || "089-925493",
      avatarBg: "from-blue-600 to-indigo-800",
      duties: member.duties || "Pengurusan akademik dan kurikulum"
    };
    window.SKR_DATA.organizationChart.push(newMember);
    saveStoredData(window.SKR_DATA);
    return newMember;
  }

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

  deleteOrgMember(id) {
    if (!this.checkAuth()) return false;
    window.SKR_DATA.organizationChart = window.SKR_DATA.organizationChart.filter(m => m.id !== id);
    saveStoredData(window.SKR_DATA);
    return true;
  }

  // Pengumuman
  addAnnouncement(announcement) {
    if (!this.checkAuth()) return false;
    const newAnn = {
      id: "ann-" + Date.now(),
      title: announcement.title,
      date: announcement.date || new Date().toISOString().split("T")[0],
      priority: announcement.priority || "Sederhana",
      category: announcement.category || "Pentadbiran",
      author: announcement.author || "Unit Pentadbiran",
      content: announcement.content
    };
    window.SKR_DATA.announcements.unshift(newAnn);
    saveStoredData(window.SKR_DATA);
    return newAnn;
  }

  deleteAnnouncement(id) {
    if (!this.checkAuth()) return false;
    window.SKR_DATA.announcements = window.SKR_DATA.announcements.filter(a => a.id !== id);
    saveStoredData(window.SKR_DATA);
    return true;
  }

  // Google Sheets
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

  // Sandaran Penuh (JSON)
  exportFullBackup() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(window.SKR_DATA, null, 2));
    const downloadAnchor = document.createElement("a");
    const dateStr = new Date().toISOString().split("T")[0];
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `sandaran-sk-ranggu-${dateStr}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  }

  importBackupFile(jsonString) {
    if (!this.checkAuth()) return { success: false, error: "Akses pentadbir diperlukan" };
    try {
      const parsed = JSON.parse(jsonString);
      if (!parsed.school || !parsed.organizationChart) {
        throw new Error("Fail sandaran tidak mengandungi data SK Ranggu yang sah.");
      }
      window.SKR_DATA = parsed;
      saveStoredData(window.SKR_DATA);
      return { success: true };
    } catch (e) {
      return { success: false, error: e.message };
    }
  }

  resetSystem() {
    if (!this.checkAuth()) return false;
    window.SKR_DATA = resetToDefaultData();
    return true;
  }
}

window.adminManager = new AdminManager();
