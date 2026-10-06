/**
 * MODUL PENTADBIR & PENGURUSAN SISTEM (ADMIN PORTAL)
 * Sistem Dashboard Pengurusan Bersepadu SK Ranggu Tawau
 * Pembangun: MOHAMMAD FIKREY BIN ABDUL GAPAR (Pentadbir Sistem)
 */

class AdminManager {
  constructor() {
    this.isAuthenticated = false;
    this.storageKey = "SK_RANGGU_ADMIN_AUTH";
    this.pinKey = "SK_RANGGU_ADMIN_PIN";
    this.defaultPin = "Ts.FIKREY37";
  }

  checkAuth() {
    this.isAuthenticated = sessionStorage.getItem(this.storageKey) === "true";
    return this.isAuthenticated;
  }

  getPin() {
    const stored = localStorage.getItem(this.pinKey);
    // Jika belum ditetapkan atau jika sebelum ini guna default lama '1234', kemas kini ke Ts.FIKREY37
    if (!stored || stored === "1234") {
      localStorage.setItem(this.pinKey, "Ts.FIKREY37");
      return "Ts.FIKREY37";
    }
    return stored;
  }

  setPin(newPin) {
    if (!newPin || newPin.trim().length < 4) return false;
    localStorage.setItem(this.pinKey, newPin.trim());
    return true;
  }

  login(inputPin) {
    const currentPin = this.getPin();
    const cleanInput = (inputPin || "").trim();
    // Sokong padanan tepat atau padanan tanpa peka huruf besar/kecil
    if (cleanInput === currentPin || cleanInput.toLowerCase() === currentPin.toLowerCase()) {
      this.isAuthenticated = true;
      sessionStorage.setItem(this.storageKey, "true");
      return { success: true };
    }
    return { success: false, error: "Kod akses pentadbir tidak sah. Sila masukkan 'Ts.FIKREY37'." };
  }

  logout() {
    this.isAuthenticated = false;
    sessionStorage.removeItem(this.storageKey);
  }

  // ==========================================
  // PENGURUSAN WARGA STAF & GURU (60 STAF)
  // ==========================================
  getStaffList() {
    return window.SKR_DATA.staffList || [];
  }

  getStaffById(id) {
    return (window.SKR_DATA.staffList || []).find(s => String(s.id) === String(id));
  }

  updateStaffMember(id, updatedFields) {
    if (!this.checkAuth()) return false;
    const list = window.SKR_DATA.staffList || [];
    const index = list.findIndex(s => String(s.id) === String(id));
    if (index !== -1) {
      list[index] = { ...list[index], ...updatedFields };
      saveStoredData(window.SKR_DATA);
      return true;
    }
    return false;
  }

  addStaffMember(staffData) {
    if (!this.checkAuth()) return false;
    if (!window.SKR_DATA.staffList) window.SKR_DATA.staffList = [];
    
    const newStaff = {
      id: "staf-" + Date.now(),
      name: (staffData.name || "Nama Guru").toUpperCase(),
      role: staffData.role || "Guru Akademik",
      grade: staffData.grade || "DG41",
      category: staffData.category || "Guru Akademik",
      session: staffData.session || "Pagi",
      tier: parseInt(staffData.tier) || 4,
      email: staffData.email || "guru@moe-dl.edu.my",
      phone: staffData.phone || "089-925493",
      ic: staffData.ic || "-",
      type: staffData.type || "PPP",
      duties: staffData.duties || "Menjalankan tugas pengajaran dan pembelajaran serta pengurusan sekolah.",
      photo: staffData.photo || null
    };

    window.SKR_DATA.staffList.push(newStaff);
    if (window.SKR_DATA.stats) {
      window.SKR_DATA.stats.totalAllStaff = window.SKR_DATA.staffList.length;
    }
    saveStoredData(window.SKR_DATA);
    return newStaff;
  }

  deleteStaffMember(id) {
    if (!this.checkAuth()) return false;
    if (!window.SKR_DATA.staffList) return false;
    window.SKR_DATA.staffList = window.SKR_DATA.staffList.filter(s => String(s.id) !== String(id));
    if (window.SKR_DATA.stats) {
      window.SKR_DATA.stats.totalAllStaff = window.SKR_DATA.staffList.length;
    }
    saveStoredData(window.SKR_DATA);
    return true;
  }

  // ==========================================
  // PENGURUSAN PROFIL SEKOLAH & LOGO
  // ==========================================
  updateSchoolProfile(profileData) {
    if (!this.checkAuth()) return false;
    window.SKR_DATA.school = { ...window.SKR_DATA.school, ...profileData };
    saveStoredData(window.SKR_DATA);
    return true;
  }

  // ==========================================
  // PENGURUSAN DOKUMEN & BAHAN
  // ==========================================
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
    window.SKR_DATA.documents = window.SKR_DATA.documents.filter(d => String(d.id) !== String(id));
    saveStoredData(window.SKR_DATA);
    return true;
  }

  // ==========================================
  // PENGURUSAN PENGUMUMAN
  // ==========================================
  addAnnouncement(announcement) {
    if (!this.checkAuth()) return false;
    if (!window.SKR_DATA.announcements) window.SKR_DATA.announcements = [];
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
    if (!window.SKR_DATA.announcements) return false;
    window.SKR_DATA.announcements = window.SKR_DATA.announcements.filter(a => String(a.id) !== String(id));
    saveStoredData(window.SKR_DATA);
    return true;
  }

  // ==========================================
  // PENGURUSAN TAKWIM ACARA
  // ==========================================
  addTakwimEvent(event) {
    if (!this.checkAuth()) return false;
    if (!window.SKR_DATA.takwimEvents) window.SKR_DATA.takwimEvents = [];
    const newEvt = {
      id: "tak-" + Date.now(),
      title: event.title,
      date: event.date || new Date().toISOString().split("T")[0],
      time: event.time || "Sepanjang Hari",
      venue: event.venue || "SK Ranggu",
      inCharge: event.inCharge || "Pentadbiran",
      status: event.status || "Akan Datang"
    };
    window.SKR_DATA.takwimEvents.push(newEvt);
    saveStoredData(window.SKR_DATA);
    return newEvt;
  }

  deleteTakwimEvent(id) {
    if (!this.checkAuth()) return false;
    if (!window.SKR_DATA.takwimEvents) return false;
    window.SKR_DATA.takwimEvents = window.SKR_DATA.takwimEvents.filter(t => String(t.id) !== String(id));
    saveStoredData(window.SKR_DATA);
    return true;
  }

  // ==========================================
  // PENGURUSAN GURU BERTUGAS MINGGUAN
  // ==========================================
  updateWeeklyDuty(duty) {
    if (!this.checkAuth()) return false;
    if (!window.SKR_DATA.weeklyDutyTeachers) window.SKR_DATA.weeklyDutyTeachers = [];
    window.SKR_DATA.weeklyDutyTeachers[0] = {
      ...window.SKR_DATA.weeklyDutyTeachers[0],
      ...duty
    };
    saveStoredData(window.SKR_DATA);
    return true;
  }

  // ==========================================
  // SANDARAN & PEMULIHAN DATA
  // ==========================================
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
      if (!parsed.school || !parsed.staffList) {
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
