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
  renderCommittees();
  renderTakwimEvents();
  renderDutyTeachers();
  renderDocumentsList();
  renderDeveloperCredits();
  renderPortalLinks();

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

  const clockEl = document.getElementById("liveClock");
  const dateEl = document.getElementById("liveDate");
  
  if (clockEl) clockEl.textContent = timeStr.toUpperCase();
  if (dateEl) dateEl.textContent = dateStr;
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

  if (elTeachers) elTeachers.textContent = stats.totalTeachers;
  if (elStudents) elStudents.textContent = stats.totalStudents;
  if (elClasses) elClasses.textContent = `${stats.totalClasses} (+${stats.preschoolClasses} Pra)`;
  if (elCommittees) elCommittees.textContent = stats.totalCommittees;
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
          ${doc.fileUrl && doc.fileUrl !== '#' ? `
            <a href="${doc.fileUrl}" target="_blank" download class="px-3.5 py-1.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-semibold shadow-sm transition flex items-center gap-1.5">
              <span>📥</span> Muat Turun
            </a>
          ` : `
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
   RENDER CARTA ORGANISASI RASMI SK RANGGU
   ========================================================================== */
function renderOrganizationChart(filterCategory = "Semua", searchQuery = "") {
  const container = document.getElementById("orgChartContainer");
  if (!container) return;

  let members = window.SKR_DATA.organizationChart || [];

  if (filterCategory !== "Semua") {
    members = members.filter(m => m.category === filterCategory || (filterCategory === "Pengurusan Tertinggi" && m.tier <= 2));
  }

  if (searchQuery.trim() !== "") {
    const q = searchQuery.toLowerCase();
    members = members.filter(m => 
      m.name.toLowerCase().includes(q) || 
      m.role.toLowerCase().includes(q)
    );
  }

  const isFiltered = filterCategory !== "Semua" || searchQuery.trim() !== "";

  if (isFiltered) {
    if (members.length === 0) {
      container.innerHTML = `
        <div class="text-center py-12 bg-white rounded-2xl border border-slate-200">
          <p class="text-slate-500 font-medium">Tiada padanan nama atau jawatan ditemui.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        ${members.map(m => createMemberCard(m)).join("")}
      </div>
    `;
    return;
  }

  // Hierarki Rasmi Mengikut Barisan Sebenar SK Ranggu
  const tier1 = members.filter(m => m.tier === 1); // Guru Besar
  const tier2 = members.filter(m => m.tier === 2); // Barisan PK
  const tier3 = members.filter(m => m.tier === 3); // Setiausaha & Pegawai Khas
  const tier4 = members.filter(m => m.tier === 4); // Ketua Panitia & Guru

  container.innerHTML = `
    <!-- TIER 1: GURU BESAR -->
    <div class="flex flex-col items-center mb-8">
      <div class="text-xs font-bold tracking-widest uppercase text-amber-700 bg-amber-100/90 px-4 py-1 rounded-full mb-3 border border-amber-300">
        Peneraju Kepimpinan Tertinggi Sekolah
      </div>
      <div class="w-full max-w-md org-tree-line">
        ${tier1.map(m => createMemberCard(m, true)).join("")}
      </div>
    </div>

    <!-- TIER 2: BARISAN PENOLONG KANAN -->
    <div class="mb-10">
      <div class="text-center mb-4">
        <span class="text-xs font-bold tracking-widest uppercase text-blue-800 bg-blue-100/90 px-4 py-1 rounded-full border border-blue-300">
          Barisan Penolong Kanan Pentadbiran
        </span>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        ${tier2.map(m => createMemberCard(m)).join("")}
      </div>
    </div>

    <!-- TIER 3: SETIAUSAHA & PEGAWAI KHAS -->
    <div class="mb-10">
      <div class="text-center mb-4">
        <span class="text-xs font-bold tracking-widest uppercase text-emerald-800 bg-emerald-100/90 px-4 py-1 rounded-full border border-emerald-300">
          Setiausaha Kurikulum, Hal Ehwal Murid & Kokurikulum
        </span>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
        ${tier3.map(m => createMemberCard(m)).join("")}
      </div>
    </div>

    <!-- TIER 4: KETUA-KETUA PANITIA -->
    <div>
      <div class="text-center mb-4">
        <span class="text-xs font-bold tracking-widest uppercase text-indigo-800 bg-indigo-100/90 px-4 py-1 rounded-full border border-indigo-300">
          Ketua-Ketua Panitia Mata Pelajaran & Akademik
        </span>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        ${tier4.map(m => createMemberCard(m)).join("")}
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
  const member = window.SKR_DATA.organizationChart.find(m => m.id === id);
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
