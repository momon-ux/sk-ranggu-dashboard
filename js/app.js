/**
 * PENGENDALI UTAMA APLIKASI (APP CONTROLLER)
 * Sistem Dashboard Pengurusan Pentadbiran & Kurikulum SK Ranggu
 * Pembangun: Mohammad Fikrey (Pentadbir Sistem)
 */

document.addEventListener("DOMContentLoaded", () => {
  initSystem();
});

let pbdChartInstance = null;
let pbdSubjectChartInstance = null;

function initSystem() {
  updateLiveClock();
  setInterval(updateLiveClock, 1000);

  // Render komponen utama
  renderSchoolHeader();
  renderExecutiveStats();
  renderAnnouncements();
  renderOrganizationChart();
  renderStudentDemographics();
  renderCommittees();
  renderTakwimEvents();
  renderDutyTeachers();
  renderDocumentsList();
  renderDeveloperCredits();
  renderPortalLinks();

  // Render Induk Besar & Prototaip
  renderHemHierarchy();
  renderKokoHierarchy();
  renderPetangHierarchy();
  renderPortalAndSocial();

  // Inisialisasi Google Sheets
  initGoogleSheetsViewer();

  // Inisialisasi Carta PBD
  initPbdCharts();

  // Navigasi & Pendengar Peristiwa
  setupNavigation();
  setupSearchAndFilters();
  setupAdminListeners();

  console.log("Sistem Dashboard SK Ranggu dimuatkan.");
}

/* ==========================================================================
   JAM & TARIKH MALAYSIA
   ========================================================================== */
function updateLiveClock() {
  const now = new Date();
  
  const timeStr = now.toLocaleTimeString("ms-MY", { 
    hour: "2-digit", 
    minute: "2-digit", 
    second: "2-digit", 
    hour12: true 
  });
  
  const dateStr = now.toLocaleDateString("ms-MY", { 
    weekday: "long", 
    year: "numeric", 
    month: "long", 
    day: "numeric" 
  });

  const hour = now.getHours();
  let greeting = "Selamat Datang";
  if (hour >= 5 && hour < 12) greeting = "Selamat Pagi";
  else if (hour >= 12 && hour < 14) greeting = "Selamat Tengah Hari";
  else if (hour >= 14 && hour < 19) greeting = "Selamat Petang";
  else greeting = "Selamat Malam";

  const clockEl = document.getElementById("liveClock");
  const dateEl = document.getElementById("liveDate");
  const greetingEl = document.getElementById("liveGreeting");
  const fullDateEl = document.getElementById("liveFullDate");
  const digitalTimeEl = document.getElementById("liveDigitalTime");
  
  if (clockEl) clockEl.textContent = timeStr.toUpperCase();
  if (dateEl) dateEl.textContent = dateStr;
  if (greetingEl) greetingEl.innerHTML = `<span>☀️</span> ${greeting} • Warga Pendidik & Staf`;
  if (fullDateEl) fullDateEl.textContent = dateStr;
  if (digitalTimeEl) digitalTimeEl.textContent = timeStr.toUpperCase();
}

/* ==========================================================================
   RENDER MAKLUMAT KEPALA & PROFIL SEKOLAH
   ========================================================================== */
function renderSchoolHeader() {
  const s = window.SKR_DATA.school;

  document.querySelectorAll(".school-name-text").forEach(el => el.textContent = s.name);
  document.querySelectorAll(".school-code-text").forEach(el => el.textContent = s.code);
  document.querySelectorAll(".school-address-text").forEach(el => el.textContent = `${s.address} • Tel: ${s.phone}`);
  document.querySelectorAll(".school-motto-text").forEach(el => el.textContent = `"${s.motto}"`);
  document.querySelectorAll(".school-session-text").forEach(el => el.textContent = s.academicSession);
}

/* ==========================================================================
   RENDER STATISTIK EKSEKUTIF
   ========================================================================== */
function renderExecutiveStats() {
  const stats = window.SKR_DATA.stats;
  
  const elTeachers = document.getElementById("statTotalTeachers");
  const elStudents = document.getElementById("statTotalStudents");
  const elClasses = document.getElementById("statTotalClasses");
  const elCommittees = document.getElementById("statTotalCommittees");
  const elPbd = document.getElementById("statPbdPercent");
  const elWeek = document.getElementById("statActiveWeek");

  if (elTeachers) elTeachers.textContent = stats.totalAllStaff || 60;
  if (elStudents) elStudents.textContent = stats.totalStudents || 890;
  if (elClasses) elClasses.textContent = `${stats.totalClasses || 27} Kelas`;
  if (elCommittees) elCommittees.textContent = stats.totalCommittees || 12;
  if (elPbd) elPbd.textContent = `${stats.pbdMasteryPercent}%`;
  if (elWeek) elWeek.textContent = `Minggu ${stats.activeWeek}`;
}

/* ==========================================================================
   RENDER PENGUMUMAN PENTADBIRAN
   ========================================================================== */
function renderAnnouncements() {
  const container = document.getElementById("announcementsContainer");
  if (!container) return;

  const list = window.SKR_DATA.announcements || [];
  if (list.length === 0) {
    container.innerHTML = `<div class="p-4 text-center text-slate-400">Tiada pengumuman baharu buat masa ini.</div>`;
    return;
  }

  container.innerHTML = list.map(item => {
    let priorityBadge = "bg-blue-100 text-blue-800 border-blue-300";
    if (item.priority === "Tinggi") priorityBadge = "bg-red-100 text-red-800 border-red-300";
    if (item.priority === "Penting") priorityBadge = "bg-amber-100 text-amber-800 border-amber-300";

    return `
      <div class="p-4 rounded-xl bg-white border border-slate-200/80 executive-card flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div class="flex items-start gap-3">
          <div class="w-10 h-10 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center shrink-0 border border-blue-100 font-bold text-lg">
            📢
          </div>
          <div>
            <div class="flex items-center gap-2 flex-wrap">
              <span class="text-xs px-2.5 py-0.5 rounded-full border font-semibold ${priorityBadge}">${item.priority}</span>
              <span class="text-xs font-medium text-slate-500">${item.category} • ${item.date}</span>
              <span class="text-xs text-slate-400">| ${item.author}</span>
            </div>
            <h4 class="font-bold text-slate-900 mt-1">${item.title}</h4>
            <p class="text-sm text-slate-600 mt-0.5 leading-relaxed">${item.content}</p>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

/* ==========================================================================
   RENDER DOKUMEN & BAHAN KURIKULUM (PUSAT SUMBER BAHAN)
   ========================================================================== */
function renderDocumentsList() {
  const container = document.getElementById("documentsContainer");
  if (!container) return;

  const docs = window.SKR_DATA.documents || [];
  if (docs.length === 0) {
    container.innerHTML = `
      <div class="p-8 text-center text-slate-400 bg-white rounded-2xl border border-slate-200">
        Belum ada bahan atau dokumen dimuat naik.
      </div>
    `;
    return;
  }

  container.innerHTML = docs.map(doc => {
    let fileIcon = "📄";
    if (doc.type === "PDF") fileIcon = "📕";
    if (doc.type === "ZIP") fileIcon = "🗂️";
    if (doc.type === "DOCX" || doc.type === "DOC") fileIcon = "📘";
    if (doc.type === "XLSX" || doc.type === "CSV") fileIcon = "📊";

    return `
      <div class="p-4 bg-white rounded-xl border border-slate-200 executive-card flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div class="flex items-start gap-3">
          <div class="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center text-2xl shrink-0 border border-slate-200">
            ${fileIcon}
          </div>
          <div>
            <div class="flex items-center gap-2 flex-wrap mb-1">
              <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">${doc.category}</span>
              <span class="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">${doc.panitia}</span>
              <span class="text-[10px] text-slate-400">${doc.date}</span>
            </div>
            <h4 class="font-bold text-slate-900 text-sm leading-snug">${doc.title}</h4>
            <p class="text-[11px] text-slate-500 mt-0.5">Dimuat naik oleh: <span class="font-semibold text-slate-700">${doc.uploader}</span> (${doc.size})</p>
          </div>
        </div>

        <div class="shrink-0 flex items-center gap-2">
          ${doc.fileUrl && doc.fileUrl !== '#' ? (
            doc.fileUrl.includes("drive.google.com") ? `
              <a href="${doc.fileUrl}" target="_blank" rel="noopener noreferrer" class="px-3.5 py-1.5 bg-indigo-700 hover:bg-indigo-800 text-white rounded-lg text-xs font-semibold shadow-sm transition flex items-center gap-1.5">
                <span>👁️</span> Buka di Drive ↗
              </a>
            ` : `
              <a href="${doc.fileUrl}" target="_blank" download class="px-3.5 py-1.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-semibold shadow-sm transition flex items-center gap-1.5">
                <span>📥</span> Muat Turun Fail
              </a>
            `
          ) : `
            <button onclick="alert('Bahan ini boleh dimuat turun melalui arkib Pejabat Pentadbiran SK Ranggu.')" class="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition border border-slate-300 flex items-center gap-1.5">
              <span>👁️</span> Buka Bahan
            </button>
          `}
        </div>
      </div>
    `;
  }).join("");
}

/* ==========================================================================
   RENDER ENROLMEN & DEMOGRAFI 890 MURID & 27 KELAS
   ========================================================================== */
function renderStudentDemographics() {
  const d = window.SKR_DATA.studentDemographics;
  if (!d) return;

  // 1. Render Taburan 7 Cohort (Prasekolah hingga Tahun 6)
  const cohortContainer = document.getElementById("cohortBreakdownContainer");
  if (cohortContainer && d.yearSummary) {
    const years = [
      { key: "PRASEKOLAH", label: "Pra", icon: "🧸" },
      { key: "TAHUN SATU", label: "Thn 1", icon: "🌱" },
      { key: "TAHUN DUA", label: "Thn 2", icon: "🌿" },
      { key: "TAHUN TIGA", label: "Thn 3", icon: "🌳" },
      { key: "TAHUN EMPAT", label: "Thn 4", icon: "⭐" },
      { key: "TAHUN LIMA", label: "Thn 5", icon: "🌟" },
      { key: "TAHUN ENAM", label: "Thn 6", icon: "🎓" }
    ];

    cohortContainer.innerHTML = years.map(y => {
      const data = d.yearSummary[y.key] || { total: 0, lelaki: 0, perempuan: 0 };
      const lPercent = data.total > 0 ? Math.round((data.lelaki / data.total) * 100) : 50;
      return `
        <div class="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-center executive-card">
          <div class="text-xs font-bold text-slate-700 uppercase flex items-center justify-center gap-1">
            <span>${y.icon}</span> <span>${y.label}</span>
          </div>
          <div class="text-xl font-extrabold text-royal-900 mt-1">${data.total} <span class="text-[10px] font-normal text-slate-500">murid</span></div>
          <div class="w-full bg-rose-200 h-1.5 rounded-full overflow-hidden my-2 flex">
            <div class="bg-blue-600 h-full" style="width: ${lPercent}%"></div>
          </div>
          <div class="text-[10px] text-slate-600 font-medium flex justify-between">
            <span class="text-blue-700 font-bold">L: ${data.lelaki}</span>
            <span class="text-rose-700 font-bold">P: ${data.perempuan}</span>
          </div>
        </div>
      `;
    }).join("");
  }

  // 2. Render 27 Buah Kelas
  renderClassListGrid();
}

function renderClassListGrid(cohortFilter = "Semua") {
  const gridContainer = document.getElementById("classListGridContainer");
  if (!gridContainer) return;

  const d = window.SKR_DATA.studentDemographics;
  if (!d || !d.classList) return;

  let filtered = d.classList;
  if (cohortFilter !== "Semua") {
    filtered = filtered.filter(c => c.tahun === cohortFilter);
  }

  gridContainer.innerHTML = filtered.map(c => {
    const isUserClass = c.guru && c.guru.includes("FIKREY");
    const isPrasekolah = c.tahun === "PRASEKOLAH";

    return `
      <div class="bg-white rounded-2xl p-4 border ${isUserClass ? 'border-amber-400 ring-2 ring-amber-300 shadow-md' : 'border-slate-200 shadow-sm'} executive-card flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${isPrasekolah ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800'}">
              ${c.tahun}
            </span>
            ${isUserClass ? '<span class="text-[9px] font-bold bg-amber-400 text-slate-900 px-2 py-0.5 rounded-full">Kelas Anda</span>' : ''}
          </div>

          <h4 class="font-extrabold text-slate-900 text-base leading-tight">
            ${c.kelas}
          </h4>

          <div class="mt-2.5 pt-2 border-t border-slate-100 text-xs">
            <span class="text-[11px] text-slate-400 block font-medium">Guru Kelas:</span>
            <strong class="text-slate-800 font-semibold text-xs leading-snug block mt-0.5">
              ${c.guru}
            </strong>
          </div>
        </div>

        <div class="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
          <div class="font-extrabold text-royal-900 text-sm">
            ${c.total} <span class="text-[10px] font-normal text-slate-500">Orang</span>
          </div>
          <div class="text-[11px] font-medium space-x-1.5">
            <span class="text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">👦 ${c.lelaki}</span>
            <span class="text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200">👧 ${c.perempuan}</span>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

window.filterClassCards = function() {
  const sel = document.getElementById("filterClassCohort");
  const val = sel ? sel.value : "Semua";
  renderClassListGrid(val);
};

/* ==========================================================================
   RENDER CARTA ORGANISASI RASMI SK RANGGU 2026 (KURIKULUM & PENTADBIRAN)
   ========================================================================== */
window.activeChartType = "kurikulum"; // 'kurikulum' | 'pentadbiran' | 'direktori'
window.activeChartMode = "digital";   // 'digital' | 'poster'

window.setChartType = function(type) {
  window.activeChartType = type;
  window.activeChartMode = "digital";
  renderOrganizationChart();
};

window.toggleChartMode = function(mode) {
  window.activeChartMode = mode;
  renderOrganizationChart();
};

function renderChartTypeTabs() {
  const isKurikulum = window.activeChartType === "kurikulum";
  const isPentadbiran = window.activeChartType === "pentadbiran";
  const isDirektori = window.activeChartType === "direktori";

  return `
    <div class="flex items-center justify-center gap-2 sm:gap-3 mb-6 flex-wrap no-print">
      <button onclick="setChartType('kurikulum')" class="px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 ${isKurikulum ? 'bg-royal-900 text-white shadow-md ring-2 ring-blue-500' : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100'}">
        <span>📚</span> Carta Kurikulum 2026
      </button>
      <button onclick="setChartType('pentadbiran')" class="px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 ${isPentadbiran ? 'bg-royal-900 text-white shadow-md ring-2 ring-red-500' : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100'}">
        <span>🏛️</span> Carta Pentadbiran 2026
      </button>
      <button onclick="setChartType('direktori')" class="px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 ${isDirektori ? 'bg-royal-900 text-white shadow-md ring-2 ring-emerald-500' : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100'}">
        <span>👥</span> Direktori Warga Sekolah (60 Staf)
      </button>
    </div>
  `;
}

function renderOrganizationChart(filterCategory = "Semua", searchQuery = "") {
  const container = document.getElementById("orgChartContainer");
  if (!container) return;

  const staff = window.SKR_DATA.staffList || [];
  const currH = window.SKR_DATA.curriculumHierarchy2026;
  const adminH = window.SKR_DATA.adminHierarchy2026;

  const searchInput = document.getElementById("orgSearchInput");
  const actualQuery = searchQuery || (searchInput ? searchInput.value : "");
  const filterSelect = document.getElementById("orgFilterSelect");
  const actualFilter = filterCategory !== "Semua" ? filterCategory : (filterSelect ? filterSelect.value : "Semua");

  // Jika pengguna menaip carian atau menapis unit khusus
  if (window.activeChartType === "direktori" || actualQuery.trim() !== "" || actualFilter !== "Semua") {
    let filtered = staff;
    if (actualFilter === "AKP") {
      filtered = filtered.filter(m => m.type === "AKP");
    } else if (actualFilter === "Pagi") {
      filtered = filtered.filter(m => m.session === "Pagi");
    } else if (actualFilter === "Petang") {
      filtered = filtered.filter(m => m.session === "Petang");
    } else if (actualFilter !== "Semua") {
      filtered = filtered.filter(m => m.category === actualFilter || (actualFilter === "Pengurusan Tertinggi" && m.tier <= 2));
    }

    if (actualQuery.trim() !== "") {
      const q = actualQuery.toLowerCase();
      filtered = filtered.filter(m => 
        m.name.toLowerCase().includes(q) || 
        m.role.toLowerCase().includes(q) ||
        (m.grade && m.grade.toLowerCase().includes(q))
      );
    }

    container.innerHTML = `
      ${renderChartTypeTabs()}

      <div class="mb-4 text-xs font-semibold text-slate-500 flex items-center justify-between">
        <span>Menunjukkan ${filtered.length} orang staf mengikut carian/tapisan:</span>
        <button onclick="if(document.getElementById('orgSearchInput')) document.getElementById('orgSearchInput').value=''; if(document.getElementById('orgFilterSelect')) document.getElementById('orgFilterSelect').value='Semua'; window.activeChartType='kurikulum'; renderOrganizationChart();" class="text-blue-600 hover:underline">
          Kembali ke Carta Organisasi
        </button>
      </div>

      ${filtered.length === 0 ? `
        <div class="text-center py-12 bg-white rounded-2xl border border-slate-200">
          <p class="text-slate-500 font-medium">Tiada padanan staf dijumpai.</p>
        </div>
      ` : `
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          ${filtered.map(m => createMemberCard(m)).join("")}
        </div>
      `}
    `;
    return;
  }

  // JIKA MEMILIH CARTA KURIKULUM 2026 (DEFAULT)
  if (window.activeChartType === "kurikulum") {
    container.innerHTML = `
      ${renderChartTypeTabs()}

      <!-- SUIS MOD DIGITAL / POSTER -->
      <div class="flex items-center justify-center gap-3 mb-6 no-print">
        <button onclick="toggleChartMode('digital')" class="px-5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${window.activeChartMode === 'digital' ? 'bg-blue-900 text-white shadow-sm' : 'text-slate-600 bg-white border border-slate-300 hover:bg-slate-50'}">
          <span>📊</span> Paparan Carta Digital
        </button>
        <button onclick="toggleChartMode('poster')" class="px-5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${window.activeChartMode === 'poster' ? 'bg-blue-900 text-white shadow-sm' : 'text-slate-600 bg-white border border-slate-300 hover:bg-slate-50'}">
          <span>🖼️</span> Poster Asal Kurikulum 2026 (HD)
        </button>
      </div>

      ${window.activeChartMode === 'poster' ? `
        <div class="text-center bg-white p-5 rounded-3xl border border-slate-200 shadow-md max-w-2xl mx-auto">
          <div class="flex justify-between items-center pb-3 border-b mb-4">
            <div>
              <h4 class="font-bold text-slate-900 text-sm">Poster Rasmi Kurikulum SK Ranggu 2026</h4>
              <p class="text-[11px] text-slate-500">Kementerian Pendidikan Malaysia • SK Ranggu Tawau</p>
            </div>
            <a href="assets/carta-organisasi-kurikulum-2026.png" target="_blank" download class="px-3.5 py-1.5 bg-blue-700 text-white text-xs font-semibold rounded-lg hover:bg-blue-800 transition">
              📥 Muat Turun Poster HD
            </a>
          </div>
          <img src="assets/carta-organisasi-kurikulum-2026.png" alt="Carta Organisasi Kurikulum SK Ranggu 2026" class="w-full h-auto rounded-2xl shadow-lg border border-slate-100 mx-auto">
        </div>
      ` : renderDigitalCurriculumChart(currH)}
    `;
    return;
  }

  // JIKA MEMILIH CARTA PENTADBIRAN 2026
  if (window.activeChartType === "pentadbiran") {
    container.innerHTML = `
      ${renderChartTypeTabs()}

      <!-- SUIS MOD DIGITAL / POSTER -->
      <div class="flex items-center justify-center gap-3 mb-6 no-print">
        <button onclick="toggleChartMode('digital')" class="px-5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${window.activeChartMode === 'digital' ? 'bg-rose-900 text-white shadow-sm' : 'text-slate-600 bg-white border border-slate-300 hover:bg-slate-50'}">
          <span>🏛️</span> Paparan Carta Digital
        </button>
        <button onclick="toggleChartMode('poster')" class="px-5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${window.activeChartMode === 'poster' ? 'bg-rose-900 text-white shadow-sm' : 'text-slate-600 bg-white border border-slate-300 hover:bg-slate-50'}">
          <span>🖼️</span> Poster Asal Pentadbiran 2026 (HD)
        </button>
      </div>

      ${window.activeChartMode === 'poster' ? `
        <div class="text-center bg-white p-5 rounded-3xl border border-slate-200 shadow-md max-w-2xl mx-auto">
          <div class="flex justify-between items-center pb-3 border-b mb-4">
            <div>
              <h4 class="font-bold text-slate-900 text-sm">Poster Rasmi Pentadbiran SK Ranggu 2026</h4>
              <p class="text-[11px] text-slate-500">Unit Pengurusan Pentadbiran SK Ranggu Tawau</p>
            </div>
            <a href="assets/carta-organisasi-2026.png" target="_blank" download class="px-3.5 py-1.5 bg-rose-700 text-white text-xs font-semibold rounded-lg hover:bg-rose-800 transition">
              📥 Muat Turun Poster HD
            </a>
          </div>
          <img src="assets/carta-organisasi-2026.png" alt="Carta Organisasi Pentadbiran SK Ranggu 2026" class="w-full h-auto rounded-2xl shadow-lg border border-slate-100 mx-auto">
        </div>
      ` : renderDigitalAdminChart(adminH)}
    `;
    return;
  }
}

// 1. PAPARAN CARTA KURIKULUM 2026 (SEPADAN 100% POSTER RASMI)
function renderDigitalCurriculumChart(c) {
  if (!c) return '<div class="text-center text-slate-400 py-6">Data kurikulum tiada.</div>';

  return `
    <div class="space-y-6 max-w-6xl mx-auto">
      
      <!-- TAJUK UTAMA POSTER -->
      <div class="text-center bg-gradient-to-r from-blue-900 via-indigo-900 to-sky-900 text-white p-4 rounded-2xl shadow-md border border-white/20">
        <span class="text-[10px] font-bold tracking-widest uppercase bg-white/20 px-3 py-0.5 rounded-full text-amber-300">KEMENTERIAN PENDIDIKAN</span>
        <h3 class="text-base sm:text-xl font-extrabold mt-1 tracking-wide">${c.title}</h3>
      </div>

      <!-- 1. GURU BESAR -->
      <div class="flex flex-col items-center">
        <div class="w-full max-w-sm bg-white rounded-2xl border-2 border-blue-600 shadow-md overflow-hidden text-center executive-card">
          <div class="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-1.5 px-4 text-xs font-extrabold tracking-wider uppercase">
            ${c.leader.role}
          </div>
          <div class="p-3">
            <h4 class="font-extrabold text-slate-900 text-base tracking-wide">${c.leader.name}</h4>
            <span class="text-[11px] font-semibold text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 inline-block mt-1">
              ${c.leader.badge}
            </span>
          </div>
        </div>
        <div class="w-0.5 h-5 bg-blue-300"></div>
      </div>

      <!-- 2. PENOLONG KANAN PENTADBIRAN -->
      <div class="flex flex-col items-center">
        <div class="w-full max-w-sm bg-white rounded-2xl border-2 border-blue-600 shadow-md overflow-hidden text-center executive-card">
          <div class="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-1.5 px-4 text-xs font-extrabold tracking-wider uppercase">
            ${c.deputyAdmin.role}
          </div>
          <div class="p-3">
            <h4 class="font-extrabold text-slate-900 text-base tracking-wide">${c.deputyAdmin.name}</h4>
            <span class="text-[11px] font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200 inline-block mt-1">
              ${c.deputyAdmin.badge}
            </span>
          </div>
        </div>
        <div class="w-0.5 h-5 bg-blue-300"></div>
      </div>

      <!-- 3. PENOLONG KANAN PETANG -->
      <div class="flex flex-col items-center">
        <div class="w-full max-w-sm bg-white rounded-2xl border-2 border-blue-600 shadow-md overflow-hidden text-center executive-card">
          <div class="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-1.5 px-4 text-xs font-extrabold tracking-wider uppercase">
            ${c.deputyPetang.role}
          </div>
          <div class="p-3">
            <h4 class="font-extrabold text-slate-900 text-base tracking-wide">${c.deputyPetang.name}</h4>
            <span class="text-[11px] font-semibold text-cyan-700 bg-cyan-50 px-2.5 py-0.5 rounded-full border border-cyan-200 inline-block mt-1">
              ${c.deputyPetang.badge}
            </span>
          </div>
        </div>
        <div class="w-0.5 h-5 bg-blue-300"></div>
      </div>

      <!-- 4. SETIAUSAHA -->
      <div class="flex flex-col items-center">
        <div class="w-full max-w-sm bg-white rounded-2xl border-2 border-blue-600 shadow-md overflow-hidden text-center executive-card">
          <div class="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-1.5 px-4 text-xs font-extrabold tracking-wider uppercase">
            ${c.secretary.role}
          </div>
          <div class="p-3">
            <h4 class="font-extrabold text-slate-900 text-base tracking-wide">${c.secretary.name}</h4>
            <span class="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 inline-block mt-1">
              ${c.secretary.badge}
            </span>
          </div>
        </div>
        <div class="w-0.5 h-8 bg-blue-400"></div>
      </div>

      <!-- 5. TIGA LAJUR BESAR SEPERTI DALAM POSTER RASMI (PANITIA | PENYELARAS | UNIT KURIKULUM) -->
      <div class="relative pt-2">
        <div class="hidden md:block absolute top-0 left-16 right-16 h-0.5 bg-blue-300"></div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          
          <!-- LAJUR 1: PANITIA (12 PANITIA) -->
          <div class="space-y-3">
            <div class="bg-gradient-to-r from-sky-600 to-blue-700 text-white py-2.5 px-4 rounded-xl font-extrabold text-xs uppercase tracking-wider text-center shadow flex items-center justify-between">
              <span>📖 PANITIA</span>
              <span class="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-mono">${c.panitia.length} Panitia</span>
            </div>
            <div class="space-y-2">
              ${c.panitia.map(p => `
                <div class="bg-white rounded-xl border border-sky-300/80 shadow-sm overflow-hidden executive-card">
                  <div class="bg-sky-600 text-white py-1 px-3 text-[10px] font-extrabold tracking-wider uppercase flex items-center justify-between">
                    <span>${p.subject}</span>
                    <span>${p.icon || '📘'}</span>
                  </div>
                  <div class="p-2.5 text-center">
                    <h5 class="font-extrabold text-slate-900 text-xs sm:text-sm tracking-wide leading-tight">
                      ${p.head}
                    </h5>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- LAJUR 2: PENYELARAS (4 PORTFOLIO) -->
          <div class="space-y-3">
            <div class="bg-gradient-to-r from-cyan-600 to-sky-700 text-white py-2.5 px-4 rounded-xl font-extrabold text-xs uppercase tracking-wider text-center shadow flex items-center justify-between">
              <span>🎯 PENYELARAS</span>
              <span class="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-mono">${c.penyelaras.length} Portfolio</span>
            </div>
            <div class="space-y-2">
              ${c.penyelaras.map(py => `
                <div class="bg-white rounded-xl border border-cyan-300/80 shadow-sm overflow-hidden executive-card">
                  <div class="bg-cyan-600 text-white py-1 px-3 text-[10px] font-extrabold tracking-wider uppercase flex items-center justify-between">
                    <span>${py.portfolio}</span>
                    <span>${py.icon || '📌'}</span>
                  </div>
                  <div class="p-2.5 text-center">
                    <h5 class="font-extrabold text-slate-900 text-xs sm:text-sm tracking-wide leading-tight">
                      ${py.officer}
                    </h5>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- LAJUR 3: UNIT KURIKULUM (11 UNIT) -->
          <div class="space-y-3">
            <div class="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-2.5 px-4 rounded-xl font-extrabold text-xs uppercase tracking-wider text-center shadow flex items-center justify-between">
              <span>📑 UNIT KURIKULUM</span>
              <span class="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-mono">${c.unitKurikulum.length} Unit</span>
            </div>
            <div class="space-y-2">
              ${c.unitKurikulum.map(uk => `
                <div class="bg-white rounded-xl border border-indigo-300/80 shadow-sm overflow-hidden executive-card">
                  <div class="bg-indigo-700 text-white py-1 px-3 text-[10px] font-extrabold tracking-wider uppercase flex items-center justify-between">
                    <span>${uk.unit}</span>
                    <span>${uk.icon || '📋'}</span>
                  </div>
                  <div class="p-2.5 text-center">
                    <h5 class="font-extrabold text-slate-900 text-xs sm:text-sm tracking-wide leading-tight">
                      ${uk.officer}
                    </h5>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>

        </div>
      </div>

    </div>
  `;
}

// 2. PAPARAN CARTA PENTADBIRAN 2026 (SEPADAN POSTER PENTADBIRAN)
function renderDigitalAdminChart(h) {
  if (!h) return '<div class="text-center text-slate-400 py-6">Data pentadbiran tiada.</div>';

  return `
    <div class="space-y-6 max-w-5xl mx-auto">
      
      <!-- 1. GURU BESAR -->
      <div class="flex flex-col items-center">
        <div class="w-full max-w-sm bg-white rounded-2xl border-2 border-red-500 shadow-md overflow-hidden text-center executive-card">
          <div class="bg-gradient-to-r from-red-600 to-rose-600 text-white py-1.5 px-4 text-xs font-extrabold tracking-wider uppercase">
            ${h.leader.role}
          </div>
          <div class="p-3">
            <h4 class="font-extrabold text-slate-900 text-base tracking-wide">${h.leader.name}</h4>
            <span class="text-[11px] font-semibold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200 inline-block mt-1">
              ${h.leader.badge}
            </span>
          </div>
        </div>
        <div class="w-0.5 h-6 bg-slate-300"></div>
      </div>

      <!-- 2. PENOLONG KANAN PENTADBIRAN -->
      <div class="flex flex-col items-center">
        <div class="w-full max-w-sm bg-white rounded-2xl border-2 border-red-500 shadow-md overflow-hidden text-center executive-card">
          <div class="bg-gradient-to-r from-red-600 to-rose-600 text-white py-1.5 px-4 text-xs font-extrabold tracking-wider uppercase">
            ${h.deputy.role}
          </div>
          <div class="p-3">
            <h4 class="font-extrabold text-slate-900 text-base tracking-wide">${h.deputy.name}</h4>
            <span class="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 inline-block mt-1">
              ${h.deputy.badge}
            </span>
          </div>
        </div>
        <div class="w-0.5 h-6 bg-slate-300"></div>
      </div>

      <!-- 3. BIDANG PENGURUSAN -->
      <div class="flex flex-col items-center">
        <div class="px-6 py-1.5 rounded-full bg-gradient-to-r from-red-700 to-rose-700 text-white text-xs font-extrabold tracking-widest uppercase shadow">
          ${h.managementField}
        </div>
        <div class="w-0.5 h-6 bg-slate-300"></div>
      </div>

      <!-- 4. SETIAUSAHA PENTADBIRAN -->
      <div class="flex flex-col items-center">
        <div class="w-full max-w-sm bg-white rounded-2xl border-2 border-red-500 shadow-md overflow-hidden text-center executive-card">
          <div class="bg-gradient-to-r from-red-600 to-rose-600 text-white py-1.5 px-4 text-xs font-extrabold tracking-wider uppercase">
            ${h.secretary.role}
          </div>
          <div class="p-3">
            <h4 class="font-extrabold text-slate-900 text-base tracking-wide">${h.secretary.name}</h4>
            <span class="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 inline-block mt-1">
              ${h.secretary.badge}
            </span>
          </div>
        </div>
        <div class="w-0.5 h-8 bg-slate-300"></div>
      </div>

      <!-- 5. DUA SAYAP BESAR (KIRI & KANAN) SEPERTI DALAM POSTER -->
      <div class="relative pt-2">
        <div class="hidden md:block absolute top-0 left-1/4 right-1/4 h-0.5 bg-slate-300"></div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          
          <!-- SAYAP KIRI: PENTADBIRAN, KEWANGAN & PERKHIDMATAN -->
          <div class="space-y-3.5">
            <div class="text-xs font-extrabold text-slate-700 tracking-wider uppercase border-b-2 border-red-500 pb-1 flex items-center justify-between">
              <span>🏛️ Unit Pentadbiran & Kewangan</span>
              <span class="text-[10px] bg-red-100 text-red-800 px-2 py-0.5 rounded font-mono">7 Portfolio</span>
            </div>
            ${h.leftWing.map(item => createPosterStyleCard(item)).join("")}
          </div>

          <!-- SAYAP KANAN: DIGITAL, ICT, DATA & PEMBANGUNAN -->
          <div class="space-y-3.5">
            <div class="text-xs font-extrabold text-slate-700 tracking-wider uppercase border-b-2 border-red-500 pb-1 flex items-center justify-between">
              <span>💻 Unit Digital, ICT, Data & Pembangunan</span>
              <span class="text-[10px] bg-red-100 text-red-800 px-2 py-0.5 rounded font-mono">8 Portfolio</span>
            </div>
            ${h.rightWing.map(item => createPosterStyleCard(item)).join("")}
          </div>

        </div>
      </div>

    </div>
  `;
}

// Kad Gaya Poster Rasmi Pentadbiran SK Ranggu
function createPosterStyleCard(item) {
  const isUser = item.officer && item.officer.includes("FIKREY");

  return `
    <div class="bg-white rounded-xl border border-red-300/80 shadow-sm overflow-hidden executive-card ${isUser ? 'ring-2 ring-amber-400' : ''}">
      <div class="bg-gradient-to-r from-red-600 via-rose-600 to-red-500 text-white py-1 px-3 text-[11px] font-extrabold tracking-wider uppercase flex items-center justify-between">
        <span>${item.portfolio}</span>
        ${isUser ? '<span class="text-[10px] bg-amber-400 text-slate-900 px-1.5 py-0.2 rounded font-bold">Pentadbir Sistem</span>' : ''}
      </div>
      <div class="p-2.5 text-center">
        <h5 class="font-extrabold text-slate-900 text-xs sm:text-sm tracking-wide leading-tight">
          ${item.officer}
        </h5>
        ${item.extraOfficers && item.extraOfficers.length > 0 ? `
          <div class="mt-1 pt-1 border-t border-slate-100 text-xs font-bold text-slate-800 space-y-0.5">
            ${item.extraOfficers.map(name => `<div>${name}</div>`).join("")}
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

function createMemberCard(member, isPrincipal = false) {
  let badgeClass = "badge-tier-4";
  let borderHighlight = "border-indigo-200";
  
  if (member.tier === 1) {
    badgeClass = "badge-tier-1";
    borderHighlight = "border-amber-400 border-2 gold-glow";
  } else if (member.tier === 2) {
    badgeClass = "badge-tier-2";
    borderHighlight = "border-blue-300";
  } else if (member.tier === 3) {
    badgeClass = "badge-tier-3";
    borderHighlight = "border-emerald-300";
  }

  const initials = member.name
    .split(" ")
    .filter(n => !["bin", "binti", "hjh.", "haji", "encik", "puan", "cik"].includes(n.toLowerCase()))
    .slice(0, 2)
    .map(n => n[0])
    .join("")
    .toUpperCase() || "SK";

  return `
    <div class="bg-white rounded-2xl p-4 border ${borderHighlight} executive-card flex flex-col justify-between relative overflow-hidden group">
      <div class="absolute top-0 left-0 right-0 h-1.5 ${isPrincipal ? 'bg-amber-500' : (member.tier === 2 ? 'bg-blue-600' : 'bg-slate-400')}"></div>

      <div>
        <div class="flex items-start gap-3">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-tr from-royal-800 to-blue-900 text-white flex items-center justify-center font-bold text-base shadow-sm shrink-0 border border-white">
            ${initials}
          </div>

          <div class="min-w-0 flex-1">
            <span class="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${badgeClass} mb-1">
              ${member.grade || 'DG41'}
            </span>
            <h4 class="font-bold text-slate-900 text-sm leading-snug group-hover:text-blue-900 transition-colors">
              ${member.name}
            </h4>
            <p class="text-xs font-semibold text-blue-700 mt-0.5 line-clamp-2">
              ${member.role}
            </p>
          </div>
        </div>

        <div class="mt-3 pt-2.5 border-t border-slate-100 text-xs text-slate-500 leading-relaxed">
          <p class="line-clamp-2">${member.duties || 'Pengurusan pentadbiran dan pengajaran pembelajaran.'}</p>
        </div>
      </div>

      <div class="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
        <span class="truncate font-mono text-[10px] text-slate-600">
          ✉️ ${member.email || 'xba3037@moe.edu.my'}
        </span>
        <button onclick="showMemberModal('${member.id}')" class="text-blue-600 hover:text-blue-800 font-semibold shrink-0 ml-1 hover:underline">
          Profil
        </button>
      </div>
    </div>
  `;
}

window.showMemberModal = function(id) {
  const member = (window.SKR_DATA.staffList || []).find(m => String(m.id) === String(id));
  if (!member) return;

  const modal = document.getElementById("genericDetailModal");
  const modalContent = document.getElementById("genericDetailModalContent");
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="p-6">
      <div class="flex items-center justify-between border-b pb-4 mb-4">
        <h3 class="font-bold text-lg text-slate-900">Maklumat Pegawai & Guru</h3>
        <button onclick="closeGenericModal()" class="text-slate-400 hover:text-slate-700 text-xl font-bold">&times;</button>
      </div>
      <div class="space-y-4">
        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-4">
          <div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-700 to-indigo-900 text-white flex items-center justify-center font-bold text-2xl shadow">
            ${member.name[0]}
          </div>
          <div>
            <h4 class="font-bold text-slate-900 text-base">${member.name}</h4>
            <p class="text-sm font-semibold text-blue-700">${member.role}</p>
            <span class="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-mono font-medium">${member.grade} • ${member.category}</span>
          </div>
        </div>

        <div class="space-y-2 text-sm text-slate-700">
          <div class="flex justify-between py-1.5 border-b border-slate-100">
            <span class="text-slate-500 font-medium">Emel DELIMa / Rasmi:</span>
            <span class="font-mono text-blue-700">${member.email || 'xba3037@moe.edu.my'}</span>
          </div>
          <div class="flex justify-between py-1.5 border-b border-slate-100">
            <span class="text-slate-500 font-medium">Telefon Pejabat:</span>
            <span class="font-medium">${member.phone || '089-925493'}</span>
          </div>
          <div class="pt-2">
            <span class="text-slate-500 font-medium block mb-1">Bidang Tugas:</span>
            <p class="p-3 bg-white border border-slate-200 rounded-lg text-slate-600 text-xs leading-relaxed">
              ${member.duties || 'Menjalankan amanah pengurusan instruksional dan pentadbiran sekolah.'}
            </p>
          </div>
        </div>
      </div>
      <div class="mt-6 flex justify-end">
        <button onclick="closeGenericModal()" class="px-5 py-2 bg-slate-800 hover:bg-slate-900 text-white font-semibold rounded-xl text-sm transition">
          Tutup
        </button>
      </div>
    </div>
  `;
  modal.classList.remove("hidden");
};

window.closeGenericModal = function() {
  const modal = document.getElementById("genericDetailModal");
  if (modal) modal.classList.add("hidden");
};

/* ==========================================================================
   RENDER PANITIA KURIKULUM
   ========================================================================== */
function renderCommittees() {
  const container = document.getElementById("committeesContainer");
  if (!container) return;

  const list = window.SKR_DATA.committees || [];
  container.innerHTML = list.map(c => `
    <div class="bg-white rounded-xl p-4 border border-slate-200 executive-card flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-bold text-blue-800 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
            ${c.membersCount} Guru
          </span>
          <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> ${c.status}
          </span>
        </div>
        <h4 class="font-bold text-slate-900 text-base mb-1">${c.name}</h4>
        <div class="space-y-1 text-xs text-slate-600 mt-2">
          <p><span class="text-slate-400">Ketua Panitia:</span> <strong class="text-slate-800">${c.head}</strong></p>
        </div>
      </div>

      <div class="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
        <span class="text-slate-500 text-[11px]">🎯 KPI: ${c.kpi}</span>
        <span class="text-slate-400 text-[10px] font-mono">${c.dskpStatus}</span>
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   RENDER TAKWIM & GURU BERTUGAS
   ========================================================================== */
function renderTakwimEvents() {
  const container = document.getElementById("takwimEventsContainer");
  if (!container) return;

  const events = window.SKR_DATA.takwimEvents || [];
  container.innerHTML = events.map(e => `
    <div class="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 executive-card">
      <div class="bg-royal-900 text-white rounded-xl p-3 text-center shrink-0 w-16 shadow-sm">
        <div class="text-[10px] font-bold uppercase tracking-wider text-amber-300">
          ${new Date(e.date).toLocaleDateString("ms-MY", { month: "short" })}
        </div>
        <div class="text-xl font-extrabold">
          ${new Date(e.date).getDate()}
        </div>
      </div>

      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 flex-wrap mb-1">
          <span class="text-[11px] font-semibold text-blue-800 bg-blue-100 px-2 py-0.5 rounded">
            ${e.time}
          </span>
          <span class="text-[11px] text-slate-500">📍 ${e.venue}</span>
        </div>
        <h4 class="font-bold text-slate-900 text-sm">${e.title}</h4>
        <p class="text-xs text-slate-500 mt-0.5">Tindakan: <strong class="text-slate-700">${e.inCharge}</strong></p>
      </div>

      <div class="shrink-0 hidden sm:block">
        <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
          ${e.status}
        </span>
      </div>
    </div>
  `).join("");
}

function renderDutyTeachers() {
  const container = document.getElementById("dutyTeachersContainer");
  if (!container) return;

  const duties = window.SKR_DATA.weeklyDutyTeachers || [];
  const activeDuty = duties[0] || {};

  container.innerHTML = `
    <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm executive-card">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 gap-2">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Minggu Ke-${activeDuty.weekNumber || 28}
          </span>
          <h4 class="font-bold text-slate-900 text-base mt-2">${activeDuty.dateRange}</h4>
        </div>
        <div class="text-xs text-slate-500 sm:text-right">
          Tema: <strong class="text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200 inline-block mt-1 sm:mt-0">${activeDuty.theme}</strong>
        </div>
      </div>

      <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-3 bg-slate-50 rounded-xl border border-slate-200">
          <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Ketua Guru Bertugas:</span>
          <p class="font-bold text-slate-900 text-sm">⭐ ${activeDuty.leader}</p>
          <div class="mt-3">
            <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Guru-Guru Ahli:</span>
            <ul class="text-xs space-y-1 text-slate-700 font-medium">
              ${(activeDuty.members || []).map(m => `<li>• ${m}</li>`).join("")}
            </ul>
          </div>
        </div>

        <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col justify-between">
          <div>
            <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Lokasi Kawalan:</span>
            <p class="text-xs text-slate-700 mb-2">🚪 ${activeDuty.venueGates}</p>
            <p class="text-xs text-slate-700">🍽️ ${activeDuty.venueCanteen}</p>
          </div>
          <div class="mt-3 pt-2 border-t border-slate-200 text-[11px] text-slate-500">
            Sila lengkapkan buku laporan bertugas harian di Pejabat Am.
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderDeveloperCredits() {
  const dev = window.SKR_DATA.developer || {};

  document.querySelectorAll(".developer-name-text").forEach(el => el.textContent = dev.name);
  document.querySelectorAll(".developer-role-text").forEach(el => el.textContent = dev.role);
  document.querySelectorAll(".developer-unit-text").forEach(el => el.textContent = dev.unit);
}

function renderPortalLinks() {
  const container = document.getElementById("portalLinksContainer");
  if (!container) return;

  const links = window.SKR_DATA.portalLinks || [];
  container.innerHTML = links.map(l => `
    <a href="${l.url}" target="_blank" rel="noopener noreferrer" class="p-4 bg-white rounded-xl border border-slate-200 executive-card flex items-start justify-between group">
      <div>
        <div class="flex items-center gap-2 mb-1">
          <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">${l.badge}</span>
          <h4 class="font-bold text-slate-900 group-hover:text-blue-700 transition">${l.name}</h4>
        </div>
        <p class="text-xs text-slate-500 leading-snug">${l.desc}</p>
      </div>
      <span class="text-slate-400 group-hover:text-blue-600 transition text-sm">↗</span>
    </a>
  `).join("");
}

/* ==========================================================================
   RENDER INDUK BESAR HEM 2026 (10 PORTFOLIO)
   ========================================================================== */
function renderHemHierarchy() {
  const container = document.getElementById("hemUnitsGrid");
  if (!container) return;

  const hem = window.SKR_DATA.hemHierarchy2026;
  if (!hem || !hem.units) return;

  container.innerHTML = hem.units.map(u => `
    <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/30 transition shadow-sm executive-card flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
            ${u.badge}
          </span>
          <span class="text-xl">${u.icon || '🛡️'}</span>
        </div>
        <h4 class="font-extrabold text-slate-900 text-sm leading-snug">${u.name}</h4>
        <p class="text-xs text-slate-600 mt-1.5 leading-relaxed">${u.desc}</p>
      </div>
      <div class="mt-3.5 pt-2.5 border-t border-slate-200/80 flex items-center justify-between text-xs">
        <span class="text-[11px] text-slate-500 font-medium">Ketua / Penyelaras:</span>
        <strong class="text-slate-900 font-bold text-xs truncate ml-2 text-right">${u.head}</strong>
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   RENDER INDUK BESAR KOKURIKULUM 2026 (UNIFORM, KELAB, SUKAN, RUMAH)
   ========================================================================== */
function renderKokoHierarchy() {
  const koko = window.SKR_DATA.kokoHierarchy2026;
  if (!koko) return;

  // 1. Unit Beruniform
  const uniformContainer = document.getElementById("kokoUniformGrid");
  if (uniformContainer && koko.uniformUnits) {
    uniformContainer.innerHTML = koko.uniformUnits.map(u => `
      <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 executive-card">
        <div class="flex items-center gap-2.5 min-w-0">
          <span class="text-xl">${u.icon}</span>
          <div class="min-w-0">
            <h5 class="font-bold text-slate-900 text-xs sm:text-sm truncate">${u.name}</h5>
            <p class="text-[11px] text-slate-500">${u.members}</p>
          </div>
        </div>
        <div class="text-right shrink-0">
          <span class="text-[10px] text-slate-400 block font-medium">Ketua Guru:</span>
          <strong class="text-xs text-emerald-700 font-bold">${u.head}</strong>
        </div>
      </div>
    `).join("");
  }

  // 2. Kelab & Persatuan
  const clubsContainer = document.getElementById("kokoClubsGrid");
  if (clubsContainer && koko.clubUnits) {
    clubsContainer.innerHTML = koko.clubUnits.map(c => `
      <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 executive-card">
        <div class="flex items-center gap-2.5 min-w-0">
          <span class="text-xl">${c.icon}</span>
          <div class="min-w-0">
            <h5 class="font-bold text-slate-900 text-xs sm:text-sm truncate">${c.name}</h5>
            <p class="text-[11px] text-slate-500">${c.field}</p>
          </div>
        </div>
        <div class="text-right shrink-0">
          <span class="text-[10px] text-slate-400 block font-medium">Ketua Guru:</span>
          <strong class="text-xs text-blue-700 font-bold">${c.head}</strong>
        </div>
      </div>
    `).join("");
  }

  // 3. Sukan & Permainan (1M1S)
  const sportsContainer = document.getElementById("kokoSportsGrid");
  if (sportsContainer && koko.sportsUnits) {
    sportsContainer.innerHTML = koko.sportsUnits.map(s => `
      <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 executive-card">
        <div class="flex items-center gap-2.5 min-w-0">
          <span class="text-xl">${s.icon}</span>
          <div class="min-w-0">
            <h5 class="font-bold text-slate-900 text-xs sm:text-sm truncate">${s.name}</h5>
            <p class="text-[11px] text-slate-500">${s.field}</p>
          </div>
        </div>
        <div class="text-right shrink-0">
          <span class="text-[10px] text-slate-400 block font-medium">Ketua Guru:</span>
          <strong class="text-xs text-amber-700 font-bold">${s.head}</strong>
        </div>
      </div>
    `).join("");
  }

  // 4. Rumah Sukan
  const housesContainer = document.getElementById("kokoHousesGrid");
  if (housesContainer && koko.sportHouses) {
    const colorMap = {
      blue: "border-blue-300 bg-blue-50/50 text-blue-900",
      red: "border-rose-300 bg-rose-50/50 text-rose-900",
      amber: "border-amber-300 bg-amber-50/50 text-amber-900",
      emerald: "border-emerald-300 bg-emerald-50/50 text-emerald-900"
    };
    housesContainer.innerHTML = koko.sportHouses.map(h => `
      <div class="p-3.5 rounded-xl border ${colorMap[h.color] || 'border-slate-200 bg-slate-50'} executive-card flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-1">
            <h5 class="font-extrabold text-sm">${h.name}</h5>
            <span class="text-xs font-mono font-bold">🚩</span>
          </div>
          <p class="text-[11px] text-slate-600 italic">“${h.motto}”</p>
        </div>
        <div class="mt-2.5 pt-2 border-t border-black/10 text-xs">
          <span class="text-[10px] text-slate-500 block font-medium">Ketua Rumah:</span>
          <strong class="font-bold text-xs">${h.head}</strong>
        </div>
      </div>
    `).join("");
  }
}

/* ==========================================================================
   RENDER INDUK BESAR SIDANG PETANG 2026 (JADUAL & PENYELARAS)
   ========================================================================== */
function renderPetangHierarchy() {
  const petang = window.SKR_DATA.petangHierarchy2026;
  if (!petang) return;

  // Jadual Waktu Operasi
  const hoursContainer = document.getElementById("petangHoursGrid");
  if (hoursContainer && petang.operatingHours) {
    hoursContainer.innerHTML = petang.operatingHours.map((h, idx) => `
      <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 executive-card">
        <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
          ${idx + 1}
        </span>
        <div class="flex-1 min-w-0">
          <div class="flex items-center justify-between gap-2 flex-wrap">
            <h5 class="font-bold text-slate-900 text-xs sm:text-sm">${h.item}</h5>
            <span class="text-xs font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">${h.time}</span>
          </div>
          <p class="text-[11px] text-slate-500 mt-1">${h.notes}</p>
        </div>
      </div>
    `).join("");
  }

  // Pegawai Penyelaras Khas
  const officersContainer = document.getElementById("petangOfficersGrid");
  if (officersContainer) {
    const officers = [
      { role: "Penolong Kanan Petang", name: petang.pengerusi, badge: "Peneraju Petang", icon: "👑" },
      { role: "Penyelaras Tahap 1", name: petang.penyelarasTahap1, badge: "Akademik Tahap 1", icon: "🧒" },
      { role: "Penyelaras Jadual Waktu", name: petang.penyelarasJadual, badge: "Jadual Petang", icon: "📅" },
      { role: "Penyelaras Disiplin & Keselamatan", name: petang.penyelarasDisiplin, badge: "Disiplin & Pintu Pagar", icon: "🛡️" },
      { role: "Penyelaras Transisi Tahun 1", name: petang.penyelarasTransisi, badge: "Transisi Murid", icon: "🌱" }
    ];

    officersContainer.innerHTML = officers.map(o => `
      <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 executive-card">
        <div class="flex items-center gap-2.5 min-w-0">
          <span class="text-lg">${o.icon}</span>
          <div class="min-w-0">
            <span class="text-[10px] font-bold uppercase tracking-wider text-amber-800 block">${o.role}</span>
            <h5 class="font-bold text-slate-900 text-xs sm:text-sm truncate">${o.name}</h5>
          </div>
        </div>
        <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 shrink-0">
          ${o.badge}
        </span>
      </div>
    `).join("");
  }
}

/* ==========================================================================
   RENDER PORTAL DIGITAL & MEDIA SOSIAL RASMI
   ========================================================================== */
function renderPortalAndSocial() {
  const portalsContainer = document.getElementById("portalsGridContainer");
  if (portalsContainer) {
    const portals = window.SKR_DATA.portalLinks || [];
    portalsContainer.innerHTML = portals.map(p => `
      <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="p-4 bg-slate-50 hover:bg-blue-50/50 rounded-2xl border border-slate-200 hover:border-blue-300 transition shadow-sm executive-card flex flex-col justify-between group">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-blue-100 text-blue-800">${p.cat}</span>
            <span class="text-xl">${p.icon || '🌐'}</span>
          </div>
          <h4 class="font-extrabold text-slate-900 group-hover:text-blue-700 transition text-sm">${p.name}</h4>
          <p class="text-xs text-slate-500 mt-1 leading-snug">${p.desc}</p>
        </div>
        <div class="mt-3 pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs text-blue-700 font-semibold group-hover:underline">
          <span>Buka Portal</span>
          <span class="text-sm">↗</span>
        </div>
      </a>
    `).join("");
  }

  const socialContainer = document.getElementById("socialLinksGrid");
  if (socialContainer) {
    const socials = window.SKR_DATA.socialLinks || [];
    socialContainer.innerHTML = socials.map(s => `
      <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="p-5 rounded-2xl border border-slate-200 hover:border-blue-400 bg-slate-50 hover:bg-white transition shadow-sm executive-card flex items-start gap-4 group">
        <div class="w-12 h-12 rounded-2xl ${s.color === 'blue' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-white'} flex items-center justify-center text-2xl shrink-0 shadow-md">
          ${s.icon}
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 mb-1">
            <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-700 uppercase">${s.badge}</span>
            <span class="text-xs text-slate-400 font-medium">${s.platform}</span>
          </div>
          <h4 class="font-extrabold text-slate-900 group-hover:text-blue-700 transition text-base">${s.name}</h4>
          <p class="text-xs text-slate-500 mt-1 leading-relaxed">${s.desc}</p>
          <div class="mt-2.5 inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:underline">
            <span>Layari Saluran</span>
            <span>↗</span>
          </div>
        </div>
      </a>
    `).join("");
  }
}

/* ==========================================================================
   PBD CHARTS
   ========================================================================== */
function initPbdCharts() {
  const pbdData = window.SKR_DATA.pbdSummary;
  if (!pbdData || !window.Chart) return;

  const ctxDonut = document.getElementById("pbdDonutChart");
  if (ctxDonut) {
    if (pbdChartInstance) pbdChartInstance.destroy();
    pbdChartInstance = new Chart(ctxDonut, {
      type: "doughnut",
      data: {
        labels: ["TP1", "TP2", "TP3", "TP4", "TP5", "TP6"],
        datasets: [{
          data: pbdData.data,
          backgroundColor: ["#ef4444", "#f97316", "#eab308", "#3b82f6", "#10b981", "#8b5cf6"],
          borderWidth: 2,
          borderColor: "#ffffff"
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "bottom", labels: { boxWidth: 12, font: { size: 11 } } }
        },
        cutout: "68%"
      }
    });
  }

  const ctxBar = document.getElementById("pbdSubjectBarChart");
  if (ctxBar) {
    if (pbdSubjectChartInstance) pbdSubjectChartInstance.destroy();
    pbdSubjectChartInstance = new Chart(ctxBar, {
      type: "bar",
      data: {
        labels: pbdData.bySubjects.map(s => s.subject),
        datasets: [
          { label: "TP 5 - 6 (Cemerlang)", data: pbdData.bySubjects.map(s => s.tp5_6), backgroundColor: "#10b981" },
          { label: "TP 3 - 4 (Menguasai)", data: pbdData.bySubjects.map(s => s.tp3_4), backgroundColor: "#3b82f6" },
          { label: "TP 1 - 2 (Intervensi)", data: pbdData.bySubjects.map(s => s.tp1_2), backgroundColor: "#ef4444" }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { x: { stacked: true }, y: { stacked: true, max: 100 } },
        plugins: { legend: { position: "bottom", labels: { boxWidth: 12, font: { size: 11 } } } }
      }
    });
  }
}

/* ==========================================================================
   GOOGLE SHEETS VIEWER
   ========================================================================== */
async function initGoogleSheetsViewer() {
  const syncBtn = document.getElementById("btnSyncSheet");
  loadSheetDataAndRender();

  if (syncBtn) {
    syncBtn.addEventListener("click", () => loadSheetDataAndRender(true));
  }
}

async function loadSheetDataAndRender(forceAlert = false) {
  const tableContainer = document.getElementById("sheetTableWrapper");
  const sheetStatusEl = document.getElementById("sheetSyncStatus");
  if (!tableContainer) return;

  tableContainer.innerHTML = `
    <div class="p-8 text-center text-slate-500">
      <div class="inline-block animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mb-3"></div>
      <p class="font-medium text-sm">Menyemak pangkalan data Google Sheets...</p>
    </div>
  `;

  const result = await window.googleSheetManager.fetchSheetData();

  if (result.success && result.data && result.data.length > 0) {
    renderSheetTable(result.headers, result.data);
    if (sheetStatusEl) {
      sheetStatusEl.innerHTML = `<span class="inline-flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 text-xs font-semibold">
        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Data Terkini Disegerakkan
      </span>`;
    }
  } else {
    renderSheetPermissionGuide(result.error);
    if (sheetStatusEl) {
      sheetStatusEl.innerHTML = `<span class="inline-flex items-center gap-1.5 text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 text-xs font-semibold">
        ⚠️ Memerlukan Kebenaran Pautan
      </span>`;
    }
  }
}

function renderSheetTable(headers, rows) {
  const tableContainer = document.getElementById("sheetTableWrapper");
  if (!tableContainer) return;

  const rowCountEl = document.getElementById("sheetRowCount");
  if (rowCountEl) rowCountEl.textContent = `${rows.length} rekod dijumpai`;

  let html = `
    <div class="overflow-x-auto rounded-xl border border-slate-200 max-h-[500px]">
      <table class="w-full text-left text-xs prestige-table">
        <thead class="sticky top-0 z-10">
          <tr>
            <th class="w-12 text-center">#</th>
            ${headers.map(h => `<th>${h}</th>`).join("")}
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-200 bg-white">
          ${rows.map((row, idx) => `
            <tr class="hover:bg-slate-50 transition-colors">
              <td class="text-center font-mono text-slate-400 font-semibold py-2.5 px-3">${idx + 1}</td>
              ${headers.map(h => `<td class="py-2.5 px-4 text-slate-700 whitespace-nowrap">${row[h] || '-'}</td>`).join("")}
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
  tableContainer.innerHTML = html;
}

function renderSheetPermissionGuide(errorMessage) {
  const tableContainer = document.getElementById("sheetTableWrapper");
  if (!tableContainer) return;

  const currentSheetUrl = window.SKR_DATA.googleSheets.fullUrl;

  tableContainer.innerHTML = `
    <div class="p-6 bg-amber-50 rounded-2xl border border-amber-200">
      <div class="flex items-start gap-4">
        <div class="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center text-2xl shrink-0 border border-amber-300">
          🔒
        </div>
        <div class="flex-1">
          <h4 class="font-bold text-slate-900 text-base">Tetapan Kebenaran Google Spreadsheet</h4>
          <p class="text-xs text-slate-600 mt-1 leading-relaxed">
            Sila pastikan perkongsian pautan ditetapkan kepada <strong>"Sesiapa sahaja dengan pautan boleh melihat"</strong> (Anyone with the link can view) di Google Drive agar data dapat dimuat turun terus.
          </p>
          <div class="mt-3 flex items-center gap-3">
            <a href="${currentSheetUrl}" target="_blank" class="px-4 py-2 bg-blue-700 text-white font-semibold rounded-xl text-xs shadow-sm hover:bg-blue-800 transition">
              Buka di Google Drive ↗
            </a>
            <button onclick="loadSheetDataAndRender(true)" class="px-4 py-2 bg-white text-slate-700 font-semibold rounded-xl text-xs border border-slate-300 hover:bg-slate-50">
              Segerak Semula
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ==========================================================================
   NAVIGASI TAB
   ========================================================================== */
function setupNavigation() {
  const tabButtons = document.querySelectorAll("[data-tab-target]");
  const tabSections = document.querySelectorAll(".tab-content-section");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-tab-target");

      tabButtons.forEach(b => {
        b.classList.remove("bg-blue-900", "text-white", "font-bold", "shadow-sm");
        b.classList.add("text-slate-600", "hover:bg-slate-100", "font-medium");
      });

      btn.classList.add("bg-blue-900", "text-white", "font-bold", "shadow-sm");
      btn.classList.remove("text-slate-600", "hover:bg-slate-100", "font-medium");

      tabSections.forEach(sec => {
        if (sec.id === targetId) {
          sec.classList.remove("hidden");
          if (targetId === "tab-murid") renderStudentDemographics();
          if (targetId === "tab-carta") renderOrganizationChart();
          if (targetId === "tab-hem") renderHemHierarchy();
          if (targetId === "tab-kokurikulum") renderKokoHierarchy();
          if (targetId === "tab-petang") renderPetangHierarchy();
          if (targetId === "tab-portal") renderPortalAndSocial();
          if (targetId === "tab-bahan") renderDocumentsList();
        } else {
          sec.classList.add("hidden");
        }
      });

      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  const mobileMenuBtn = document.getElementById("mobileMenuToggle");
  const mobileNavDrawer = document.getElementById("mobileNavDrawer");
  if (mobileMenuBtn && mobileNavDrawer) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileNavDrawer.classList.toggle("hidden");
    });

    mobileNavDrawer.querySelectorAll("[data-tab-target]").forEach(link => {
      link.addEventListener("click", () => mobileNavDrawer.classList.add("hidden"));
    });
  }

  const printBtn = document.getElementById("btnPrintPage");
  if (printBtn) {
    printBtn.addEventListener("click", () => window.print());
  }
}

function setupSearchAndFilters() {
  const searchInput = document.getElementById("orgSearchInput");
  const filterSelect = document.getElementById("orgFilterSelect");

  function triggerOrgFilter() {
    const q = searchInput ? searchInput.value : "";
    const cat = filterSelect ? filterSelect.value : "Semua";
    renderOrganizationChart(cat, q);
  }

  if (searchInput) searchInput.addEventListener("input", triggerOrgFilter);
  if (filterSelect) filterSelect.addEventListener("change", triggerOrgFilter);
}

/* ==========================================================================
   PORTAL PENTADBIR (ADMIN SETTINGS)
   ========================================================================== */
function setupAdminListeners() {
  const adminOpenBtn = document.getElementById("btnOpenAdminModal");
  const adminModal = document.getElementById("adminModal");
  const adminLoginForm = document.getElementById("adminLoginForm");
  const adminPanelContent = document.getElementById("adminPanelContent");
  const adminLoginBox = document.getElementById("adminLoginBox");
  const adminPinInput = document.getElementById("adminPinInput");
  const adminLogoutBtn = document.getElementById("btnAdminLogout");

  if (adminOpenBtn && adminModal) {
    adminOpenBtn.addEventListener("click", () => {
      adminModal.classList.remove("hidden");
      if (window.adminManager.checkAuth()) {
        showAdminControlPanel();
      } else {
        showAdminLoginForm();
      }
    });
  }

  const closeAdminBtn = document.getElementById("btnCloseAdminModal");
  if (closeAdminBtn && adminModal) {
    closeAdminBtn.addEventListener("click", () => adminModal.classList.add("hidden"));
  }

  if (adminLoginForm) {
    adminLoginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const pin = adminPinInput.value.trim();
      const result = window.adminManager.login(pin);
      if (result.success) {
        showAdminControlPanel();
      } else {
        alert(result.error);
        adminPinInput.value = "";
        adminPinInput.focus();
      }
    });
  }

  if (adminLogoutBtn) {
    adminLogoutBtn.addEventListener("click", () => {
      window.adminManager.logout();
      showAdminLoginForm();
    });
  }

  function showAdminLoginForm() {
    if (adminLoginBox) adminLoginBox.classList.remove("hidden");
    if (adminPanelContent) adminPanelContent.classList.add("hidden");
    if (adminPinInput) adminPinInput.value = "";
  }

  function showAdminControlPanel() {
    if (adminLoginBox) adminLoginBox.classList.add("hidden");
    if (adminPanelContent) adminPanelContent.classList.remove("hidden");
    loadAdminFormData();
  }
}

function loadAdminFormData() {
  const s = window.SKR_DATA.school;
  const gs = window.SKR_DATA.googleSheets;

  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val || "";
  };

  setVal("admSchoolName", s.name);
  setVal("admSchoolCode", s.code);
  setVal("admSchoolAddress", s.address);
  setVal("admSchoolPhone", s.phone);
  setVal("admSchoolEmail", s.email);
  setVal("admSchoolMotto", s.motto);
  setVal("admSchoolSession", s.academicSession);
  setVal("admSheetId", gs.sheetId);

  renderAdminStaffList();
  renderAdminDocList();
}

// Render Senarai Staf untuk Dikelola Admin
function renderAdminStaffList() {
  const listContainer = document.getElementById("admStaffListWrapper");
  if (!listContainer) return;

  const members = window.SKR_DATA.organizationChart || [];
  listContainer.innerHTML = members.map(m => `
    <div class="flex items-center justify-between p-2.5 bg-white border border-slate-200 rounded-xl text-xs">
      <div>
        <h5 class="font-bold text-slate-900">${m.name}</h5>
        <p class="text-slate-500">${m.role} • <span class="font-mono">${m.grade}</span></p>
      </div>
      <button onclick="deleteStaffMember('${m.id}')" class="text-red-600 hover:text-red-800 font-semibold px-2 py-1 bg-red-50 hover:bg-red-100 rounded-md border border-red-200">
        Padam
      </button>
    </div>
  `).join("");
}

window.deleteStaffMember = function(id) {
  if (confirm("Padamkan ahli ini daripada Carta Organisasi?")) {
    window.adminManager.deleteOrgMember(id);
    renderOrganizationChart();
    renderAdminStaffList();
  }
};

// Render Senarai Bahan di Admin
function renderAdminDocList() {
  const container = document.getElementById("admDocListWrapper");
  if (!container) return;

  const docs = window.SKR_DATA.documents || [];
  container.innerHTML = docs.map(d => `
    <div class="flex items-center justify-between p-2.5 bg-white border border-slate-200 rounded-xl text-xs">
      <div>
        <h5 class="font-bold text-slate-900">${d.title}</h5>
        <p class="text-slate-500">${d.category} • ${d.panitia} (${d.size})</p>
      </div>
      <button onclick="deleteDocItem('${d.id}')" class="text-red-600 hover:text-red-800 font-semibold px-2 py-1 bg-red-50 hover:bg-red-100 rounded-md border border-red-200">
        Padam
      </button>
    </div>
  `).join("");
}

window.deleteDocItem = function(id) {
  if (confirm("Padamkan bahan/dokumen ini?")) {
    window.adminManager.deleteDocument(id);
    renderDocumentsList();
    renderAdminDocList();
  }
};

// Tambah Dokumen / Bahan Baru oleh Admin
window.addNewDocumentFromAdmin = function() {
  const title = document.getElementById("newDocTitle")?.value.trim();
  const category = document.getElementById("newDocCategory")?.value;
  const panitia = document.getElementById("newDocPanitia")?.value.trim() || "Kurikulum";
  const fileInput = document.getElementById("newDocFileInput");
  const linkUrl = document.getElementById("newDocLinkUrl")?.value.trim();

  if (!title) {
    alert("Sila masukkan tajuk bahan!");
    return;
  }

  // Jika pengguna memuat naik fail fizikal
  if (fileInput && fileInput.files && fileInput.files[0]) {
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
      const dataUrl = e.target.result;
      const sizeStr = (file.size / 1024 / 1024).toFixed(1) + " MB";
      const fileExt = file.name.split('.').pop().toUpperCase();

      window.adminManager.addDocument({
        title: title,
        category: category,
        panitia: panitia,
        type: fileExt,
        fileUrl: dataUrl,
        size: sizeStr,
        uploader: "Pentadbir SK Ranggu"
      });

      renderDocumentsList();
      renderAdminDocList();
      resetDocInputs();
      alert("Bahan berjaya dimuat naik ke dalam sistem!");
    };
    reader.readAsDataURL(file);
    return;
  }

  // Jika pengguna memasukkan pautan URL
  window.adminManager.addDocument({
    title: title,
    category: category,
    panitia: panitia,
    type: "PDF",
    fileUrl: linkUrl || "#",
    size: "Pautan Luar",
    uploader: "Pentadbir SK Ranggu"
  });

  renderDocumentsList();
  renderAdminDocList();
  resetDocInputs();
  alert("Pautan bahan berjaya ditambah!");
};

function resetDocInputs() {
  document.getElementById("newDocTitle").value = "";
  document.getElementById("newDocPanitia").value = "";
  if (document.getElementById("newDocLinkUrl")) document.getElementById("newDocLinkUrl").value = "";
  if (document.getElementById("newDocFileInput")) document.getElementById("newDocFileInput").value = "";
}

window.saveSchoolProfileFromAdmin = function() {
  const getVal = id => document.getElementById(id)?.value || "";
  
  const updated = {
    name: getVal("admSchoolName"),
    code: getVal("admSchoolCode"),
    address: getVal("admSchoolAddress"),
    phone: getVal("admSchoolPhone"),
    email: getVal("admSchoolEmail"),
    motto: getVal("admSchoolMotto"),
    academicSession: getVal("admSchoolSession")
  };

  window.adminManager.updateSchoolProfile(updated);
  renderSchoolHeader();
  alert("Maklumat profil sekolah berjaya dikemaskini!");
};

window.addNewStaffMemberFromAdmin = function() {
  const getVal = id => document.getElementById(id)?.value || "";

  const name = getVal("newStaffName");
  const role = getVal("newStaffRole");
  if (!name || !role) {
    alert("Sila masukkan Nama dan Jawatan!");
    return;
  }

  const member = {
    name: name,
    role: role,
    tier: parseInt(getVal("newStaffTier")) || 3,
    grade: getVal("newStaffGrade") || "DG41",
    category: getVal("newStaffCategory") || "Ketua Panitia",
    email: getVal("newStaffEmail") || "xba3037@moe.edu.my",
    phone: "089-925493",
    duties: getVal("newStaffDuties") || "Tugas akademik dan kurikulum"
  };

  window.adminManager.addOrgMember(member);
  renderOrganizationChart();
  renderAdminStaffList();

  document.getElementById("newStaffName").value = "";
  document.getElementById("newStaffRole").value = "";
  alert("Pegawai/Guru berjaya ditambah ke dalam Carta Organisasi!");
};
