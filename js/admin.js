/**
 * MODUL PENTADBIR & PENGURUSAN SISTEM (ADMIN PORTAL)
 * Sistem Dashboard Pengurusan Bersepadu SK Ranggu Tawau
 * Pembangun: MOHAMMAD FIKREY BIN ABDUL GAPAR (Pentadbir Sistem)
 */

class AdminManager {
  constructor() {
    this.isAuthenticated = false;
    this.storageKey = "SK_RANGGU_ADMIN_AUTH";
    this.editModeKey = "SK_RANGGU_LIVE_EDIT_MODE";
    this.pinKey = "SK_RANGGU_ADMIN_PIN";
    this.defaultPin = "Ts.FIKREY37";
  }

  checkAuth() {
    this.isAuthenticated = sessionStorage.getItem(this.storageKey) === "true" || localStorage.getItem(this.storageKey) === "true";
    return this.isAuthenticated;
  }

  isEditModeActive() {
    if (!this.checkAuth()) return false;
    const mode = sessionStorage.getItem(this.editModeKey);
    return mode !== "false";
  }

  toggleEditMode() {
    if (!this.checkAuth()) return false;
    const current = this.isEditModeActive();
    const next = !current;
    sessionStorage.setItem(this.editModeKey, next ? "true" : "false");
    return next;
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
    // Sokong padanan tepat atau padanan tanpa peka huruf besar/kecil (Ts.FIKREY37)
    if (cleanInput === currentPin || cleanInput.toLowerCase() === currentPin.toLowerCase()) {
      this.isAuthenticated = true;
      sessionStorage.setItem(this.storageKey, "true");
      localStorage.setItem(this.storageKey, "true");
      sessionStorage.setItem(this.editModeKey, "true");
      return { success: true };
    }
    return { success: false, error: "Kod akses pentadbir tidak sah. Sila masukkan 'Ts.FIKREY37'." };
  }

  logout() {
    this.isAuthenticated = false;
    sessionStorage.removeItem(this.storageKey);
    localStorage.removeItem(this.storageKey);
    sessionStorage.removeItem(this.editModeKey);
  }

  // ==========================================
  // SUNTINGAN PAPARAN LANGSUNG (UNIVERSAL LIVE EDIT)
  // ==========================================
  updateEntity({ targetType, targetId, subId, name, role, extra, photo, syncStaff = true }) {
    if (!this.checkAuth()) return { success: false, error: "Akses pentadbir diperlukan." };

    const data = window.SKR_DATA;
    if (!data) return { success: false, error: "Data sistem tidak tersedia." };

    const cleanName = (name || "").trim().toUpperCase();
    const cleanRole = (role || "").trim();
    const cleanExtra = (extra || "").trim();

    let targetUpdated = false;

    // 1. STAF DIREKTORI (60 STAF)
    if (targetType === "staff") {
      const staffList = data.staffList || [];
      const index = staffList.findIndex(s => String(s.id) === String(targetId));
      if (index !== -1) {
        if (cleanName) staffList[index].name = cleanName;
        if (cleanRole) staffList[index].role = cleanRole;
        if (cleanExtra) staffList[index].grade = cleanExtra;
        if (photo !== undefined && photo !== null) staffList[index].photo = photo;
        targetUpdated = true;
      }
    }

    // 2. KEPIMPINAN UTAMA KURIKULUM
    else if (targetType === "curriculum_leader") {
      const cur = data.curriculumHierarchy2026;
      if (cur && cur[targetId]) {
        if (cleanName) cur[targetId].name = cleanName;
        if (cleanRole) cur[targetId].role = cleanRole;
        if (cleanExtra) cur[targetId].badge = cleanExtra;
        if (photo) cur[targetId].photo = photo;
        targetUpdated = true;
      }
    }

    // 3. PANITIA MATA PELAJARAN (12 PANITIA)
    else if (targetType === "curriculum_panitia") {
      const panitia = (data.curriculumHierarchy2026 && data.curriculumHierarchy2026.panitia) || [];
      const item = panitia[parseInt(targetId)] || panitia.find(p => p.subject === targetId);
      if (item) {
        if (cleanName) item.head = cleanName;
        if (cleanRole) item.subject = cleanRole;
        if (photo) item.photo = photo;
        targetUpdated = true;
      }
    }

    // 4. PENYELARAS KURIKULUM (4 BIDANG)
    else if (targetType === "curriculum_penyelaras") {
      const penyelaras = (data.curriculumHierarchy2026 && data.curriculumHierarchy2026.penyelaras) || [];
      const item = penyelaras[parseInt(targetId)];
      if (item) {
        if (cleanName) item.name = cleanName;
        if (cleanRole) item.unit = cleanRole;
        if (cleanExtra) item.badge = cleanExtra;
        if (photo) item.photo = photo;
        targetUpdated = true;
      }
    }

    // 5. UNIT KHAS KURIKULUM (11 UNIT)
    else if (targetType === "curriculum_unit_khas") {
      const units = (data.curriculumHierarchy2026 && data.curriculumHierarchy2026.unitKhas) || [];
      const item = units[parseInt(targetId)];
      if (item) {
        if (cleanName) item.name = cleanName;
        if (cleanRole) item.unit = cleanRole;
        if (cleanExtra) item.badge = cleanExtra;
        if (photo) item.photo = photo;
        targetUpdated = true;
      }
    }

    // 6. KEPIMPINAN UTAMA PENTADBIRAN
    else if (targetType === "admin_leader") {
      const adm = data.adminHierarchy2026;
      if (adm && adm[targetId]) {
        if (cleanName) adm[targetId].name = cleanName;
        if (cleanRole) adm[targetId].role = cleanRole;
        if (cleanExtra) adm[targetId].badge = cleanExtra;
        if (photo) adm[targetId].photo = photo;
        targetUpdated = true;
      }
    }

    // 7. SAYAP PENTADBIRAN (LEFT / RIGHT WING)
    else if (targetType === "admin_wing") {
      const wing = (data.adminHierarchy2026 && data.adminHierarchy2026[targetId]) || [];
      const item = wing[parseInt(subId)];
      if (item) {
        if (cleanName) item.officer = cleanName;
        if (cleanRole) item.title = cleanRole;
        if (cleanExtra) item.unit = cleanExtra;
        if (photo) item.photo = photo;
        targetUpdated = true;
      }
    }

    // 8. KEPIMPINAN HEM (PK HEM / SU HEM)
    else if (targetType === "hem_leader") {
      const hem = data.hemHierarchy2026;
      if (hem) {
        if (targetId === "pengerusi") {
          if (cleanName) hem.pengerusi = cleanName;
          if (photo) hem.pengerusiPhoto = photo;
        } else if (targetId === "setiausaha") {
          if (cleanName) hem.setiausaha = cleanName;
          if (photo) hem.setiausahaPhoto = photo;
        }
        targetUpdated = true;
      }
    }

    // 9. UNIT PORTFOLIO HEM (15 PORTFOLIO)
    else if (targetType === "hem_unit") {
      const units = (data.hemHierarchy2026 && data.hemHierarchy2026.units) || [];
      const item = units[parseInt(targetId)] || units.find(u => String(u.id) === String(targetId));
      if (item) {
        if (cleanName) {
          item.head = cleanName;
          item.leader = cleanName;
        }
        if (cleanRole) item.name = cleanRole;
        if (cleanExtra) item.badge = cleanExtra;
        if (photo) item.photo = photo;
        targetUpdated = true;
      }
    }

    // 10. KEPIMPINAN KOKURIKULUM
    else if (targetType === "koko_leader") {
      const koko = data.kokoHierarchy2026;
      if (koko) {
        if (targetId === "pengerusi") {
          if (cleanName) koko.pengerusi = cleanName;
          if (photo) koko.pengerusiPhoto = photo;
        } else if (targetId === "setiausaha") {
          if (cleanName) koko.setiausaha = cleanName;
          if (photo) koko.setiausahaPhoto = photo;
        } else if (targetId === "setiausahaSukan") {
          if (cleanName) koko.setiausahaSukan = cleanName;
          if (photo) koko.setiausahaSukanPhoto = photo;
        }
        targetUpdated = true;
      }
    }

    // 11. UNIT SUB-KOKURIKULUM (UNIFORM / KELAB / 1M1S / RUMAH SUKAN)
    else if (targetType === "koko_sub") {
      const catList = (data.kokoHierarchy2026 && data.kokoHierarchy2026[targetId]) || [];
      const item = catList[parseInt(subId)];
      if (item) {
        if (targetId === "sportHouses") {
          if (cleanName) {
            item.head = cleanName;
            item.leadTeacher = cleanName;
          }
          if (cleanRole) item.name = cleanRole;
          if (cleanExtra) item.motto = cleanExtra;
          if (photo) {
            item.photo = photo;
            item.leadPhoto = photo;
          }
          if (data.sportsyncKOT26 && data.sportsyncKOT26.houses) {
            const kotHouse = data.sportsyncKOT26.houses[parseInt(subId)] || data.sportsyncKOT26.houses.find(kh => kh.name === item.name);
            if (kotHouse) {
              if (cleanName) kotHouse.leadTeacher = cleanName;
              if (photo) kotHouse.leadPhoto = photo;
            }
          }
        } else {
          if (cleanName) {
            item.head = cleanName;
            item.leadTeacher = cleanName;
          }
          if (cleanRole) item.name = cleanRole;
          if (photo) item.photo = photo;
        }
        targetUpdated = true;
      }
    }

    // 12. SIDANG PETANG
    else if (targetType === "petang_officer") {
      const petang = data.petangHierarchy2026;
      if (petang) {
        if (targetId === "pengerusi") {
          if (cleanName) petang.pengerusi = cleanName;
          if (photo) petang.pengerusiPhoto = photo;
        } else if (targetId === "penyelarasTahap1") {
          if (cleanName) petang.penyelarasTahap1 = cleanName;
          if (photo) petang.penyelarasTahap1Photo = photo;
        } else if (targetId === "penyelarasJadual") {
          if (cleanName) petang.penyelarasJadual = cleanName;
          if (photo) petang.penyelarasJadualPhoto = photo;
        } else if (targetId === "penyelarasDisiplin") {
          if (cleanName) petang.penyelarasDisiplin = cleanName;
          if (photo) petang.penyelarasDisiplinPhoto = photo;
        } else if (targetId === "penyelarasTransisi") {
          if (cleanName) petang.penyelarasTransisi = cleanName;
          if (photo) petang.penyelarasTransisiPhoto = photo;
        }
        targetUpdated = true;
      }
    }

    // 13. GERBANG 4 BAHAGIAN INDUK (TAB UTAMA)
    else if (targetType === "gateway") {
      if (data.gateways && data.gateways[targetId]) {
        const gw = data.gateways[targetId];
        if (cleanName) gw.head = cleanName;
        if (cleanRole) gw.role = cleanRole;
        if (cleanExtra) gw.desc = cleanExtra;
        if (photo) gw.photo = photo;
        targetUpdated = true;
      }
    }

    // 14. GURU BERTUGAS MINGGUAN
    else if (targetType === "duty") {
      const duty = (data.weeklyDutyTeachers && data.weeklyDutyTeachers[0]);
      if (duty) {
        if (cleanName) duty.leader = cleanName;
        if (cleanRole) duty.theme = cleanRole;
        targetUpdated = true;
      }
    }

    // PENYEGERAKAN AUTOMATIK KE DIREKTORI STAF
    if (syncStaff && cleanName) {
      const staffList = data.staffList || [];
      const staff = staffList.find(s => s.name === cleanName || cleanName.includes(s.name) || s.name.includes(cleanName));
      if (staff) {
        if (photo) staff.photo = photo;
      }
    }

    if (targetUpdated) {
      saveStoredData(data);
      return { success: true };
    }
    return { success: false, error: "Entiti sasaran tidak ditemui." };
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
      classAssigned: staffData.classAssigned || null,
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
