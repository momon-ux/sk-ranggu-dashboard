/**
 * PENGENDALI UTAMA APLIKASI (APP CONTROLLER)
 * Sistem Dashboard Pengurusan Pentadbiran & Kurikulum SK Ranggu
 * Pembangun: MOHAMMAD FIKREY BIN ABDUL GAPAR (Pentadbir Sistem)
 */

function startApplication() {
  try {
    initSystem();
  } catch (err) {
    console.error("Ralat memulakan aplikasi:", err);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startApplication);
} else {
  startApplication();
}

let pbdChartInstance = null;
let pbdSubjectChartInstance = null;

// Semakan Keselamatan: Adakah Mod Suntingan Pentadbir Aktif? (Hanya Ts.FIKREY37)
function isAdminEditActive() {
  return typeof window.adminManager !== "undefined" && window.adminManager.isEditModeActive();
}
window.isAdminEditActive = isAdminEditActive;

// Penjana Butang Suntingan Pentadbir Pada Kad (Hanya Muncul Apabila Admin Log Masuk)
function renderCardEditButton({ targetType, targetId, subId, name, role, extra, photo }) {
  if (!isAdminEditActive()) return "";
  const safeName = (name || "").replace(/'/g, "\\'");
  const safeRole = (role || "").replace(/'/g, "\\'");
  const safeExtra = (extra || "").replace(/'/g, "\\'");
  const safePhoto = (photo || "").replace(/'/g, "\\'");
  return `
    <button type="button" 
            onclick="event.stopPropagation(); window.openLiveEditModal({
              targetType: '${targetType}',
              targetId: '${targetId || ''}',
              subId: '${subId || ''}',
              name: '${safeName}',
              role: '${safeRole}',
              extra: '${safeExtra}',
              photo: '${safePhoto}'
            })"
            class="admin-edit-btn absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-[11px] shadow border border-amber-500 z-30 transition flex items-center gap-1 hover:scale-105"
            title="Sunting Maklumat & Foto (Mod Pentadbir)">
      <span>✏️</span> Sunting
    </button>
  `;
}
window.renderCardEditButton = renderCardEditButton;

// RENDER GERBANG 4 BAHAGIAN PENGURUSAN INDUK (TAB UTAMA)
function renderGateways() {
  const container = document.getElementById("gatewaysGridContainer");
  if (!container) return;

  const gw = window.SKR_DATA.gateways;
  if (!gw) return;

  const isEdit = isAdminEditActive();
  const keys = ["kurikulum", "hem", "koko", "petang"];
  const themeMap = {
    kurikulum: {
      border: "border-blue-200 hover:border-blue-600 bg-gradient-to-br from-white via-white to-blue-50/70",
      iconGrad: "from-blue-600 to-indigo-700",
      badge: "bg-blue-100 text-blue-800 border-blue-200",
      btn: "bg-blue-700 hover:bg-blue-800",
      subText: "text-blue-700"
    },
    hem: {
      border: "border-emerald-200 hover:border-emerald-600 bg-gradient-to-br from-white via-white to-emerald-50/70",
      iconGrad: "from-emerald-600 to-teal-700",
      badge: "bg-emerald-100 text-emerald-800 border-emerald-200",
      btn: "bg-emerald-700 hover:bg-emerald-800",
      subText: "text-emerald-700"
    },
    koko: {
      border: "border-rose-200 hover:border-rose-600 bg-gradient-to-br from-white via-white to-rose-50/70",
      iconGrad: "from-rose-600 to-red-700",
      badge: "bg-rose-100 text-rose-800 border-rose-200",
      btn: "bg-rose-700 hover:bg-rose-800",
      subText: "text-rose-700"
    },
    petang: {
      border: "border-amber-200 hover:border-amber-600 bg-gradient-to-br from-white via-white to-amber-50/70",
      iconGrad: "from-amber-500 to-yellow-600",
      badge: "bg-amber-100 text-amber-800 border-amber-200",
      btn: "bg-amber-600 hover:bg-amber-700",
      subText: "text-amber-800"
    }
  };

  container.innerHTML = keys.map(k => {
    const item = gw[k];
    if (!item) return "";
    const theme = themeMap[k] || themeMap.kurikulum;
    const photo = item.photo || (window.getStaffPhoto ? window.getStaffPhoto(item.head) : "assets/photos/default.jpg");

    return `
      <div class="${theme.border} p-5 rounded-2xl border-2 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
        ${renderCardEditButton({ targetType: 'gateway', targetId: k, name: item.head, role: item.role, extra: item.desc, photo: item.photo })}
        <div>
          <div class="flex items-center justify-between mb-3.5">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-br ${theme.iconGrad} text-white flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform">
              ${item.icon || '🏛️'}
            </div>
            <span class="text-[10px] font-extrabold px-2.5 py-1 rounded-full ${theme.badge} border tracking-wide uppercase">
              ${item.badge}
            </span>
          </div>

          <h4 class="text-base font-extrabold text-royal-900 group-hover:text-blue-700 transition-colors">
            ${item.title}
          </h4>
          <p class="text-xs text-slate-600 mt-1 line-clamp-2">
            ${item.desc}
          </p>

          <div class="mt-4 pt-3 border-t border-black/10 flex items-center gap-3">
            <div class="w-12 h-12 rounded-xl overflow-hidden shrink-0 shadow-sm border border-slate-300 bg-slate-100">
              <img src="${photo}" alt="${item.head}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='assets/photos/default.jpg'">
            </div>
            <div class="min-w-0 flex-1">
              <span class="text-[10px] font-bold ${theme.subText} uppercase block">Ketua Bahagian:</span>
              <strong class="text-slate-900 font-extrabold text-xs block truncate">${item.head}</strong>
              <span class="text-[11px] text-slate-500 font-semibold block">${item.role}</span>
            </div>
          </div>

          <div class="mt-3 pt-2 border-t border-black/5 space-y-1.5 text-xs">
            <div class="flex items-center justify-between text-slate-500">
              <span class="text-[11px]">${item.stat1Label}</span>
              <span class="font-bold text-slate-800 text-[11px]">${item.stat1Val}</span>
            </div>
            <div class="flex items-center justify-between text-slate-500">
              <span class="text-[11px]">${item.stat2Label}</span>
              <span class="font-bold text-emerald-600 text-[11px]">${item.stat2Val}</span>
            </div>
          </div>
        </div>

        <div class="mt-5 space-y-2">
          <button onclick="window.switchToTab('${item.targetTab}')" class="w-full py-2.5 px-3 rounded-xl ${theme.btn} text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition">
            <span>Buka Papan ${item.title.replace('Pengurusan ', '')}</span>
            <span>→</span>
          </button>
          ${k === 'hem' ? `
            <div class="grid grid-cols-2 gap-2">
              <button type="button" onclick="event.stopPropagation(); window.openHemSmartTrackModal('attendance')" class="w-full py-2 px-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-extrabold text-[11px] sm:text-xs flex items-center justify-center gap-1 transition cursor-pointer" title="Buka e-JKM Kehadiran Murid">
                <span>🛡️</span>
                <span>HEM SmartTrack</span>
              </button>
              <button type="button" onclick="event.stopPropagation(); window.openSmartDisiplinModal()" class="w-full py-2 px-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 font-extrabold text-[11px] sm:text-xs flex items-center justify-center gap-1 transition cursor-pointer" title="Buka HEM SmartDisiplin">
                <span>⚖️</span>
                <span>SmartDisiplin</span>
              </button>
            </div>
          ` : k === 'koko' ? `
            <button type="button" onclick="event.stopPropagation(); window.openKotPreviewModal('dashboard')" class="w-full py-2 px-3 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-900 border border-indigo-300 font-extrabold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer" title="Buka Portal Sportsync KOT 26">
              <span>🏆</span>
              <span>Portal Sportsync KOT 26</span>
            </button>
          ` : ''}
        </div>
      </div>
    `;
  }).join("");
}
window.renderGateways = renderGateways;

function initSystem() {
  console.log("Memulakan Sistem Dashboard SK Ranggu...");

  // 1. DAHULUKAN NAVIGASI & PENDENGAR PERISTIWA (PASTIKAN SEMUA BUTANG AKTIF SERTA-MERTA)
  try { setupNavigation(); } catch(e) { console.warn("Ralat setupNavigation:", e); }
  try { setupSearchAndFilters(); } catch(e) { console.warn("Ralat setupSearchAndFilters:", e); }
  try { setupAdminListeners(); } catch(e) { console.warn("Ralat setupAdminListeners:", e); }
  try { setupPwaInstallHandlers(); } catch(e) { console.warn("Ralat setupPwaInstallHandlers:", e); }

  // 2. JAM & STATUS SISTEM
  try {
    updateLiveClock();
    setInterval(updateLiveClock, 1000);
    updateAdminUIState();
  } catch(e) {
    console.warn("Ralat jam/status:", e);
  }

  // 3. RENDER KOMPONEN UTAMA DASHBOARD
  try { renderSchoolHeader(); } catch(e) { console.warn("Ralat renderSchoolHeader:", e); }
  try { renderGateways(); } catch(e) { console.warn("Ralat renderGateways:", e); }
  try { renderExecutiveStats(); } catch(e) { console.warn("Ralat renderExecutiveStats:", e); }
  try { renderAnnouncements(); } catch(e) { console.warn("Ralat renderAnnouncements:", e); }
  try { renderOrganizationChart(); } catch(e) { console.warn("Ralat renderOrganizationChart:", e); }
  try { renderStudentDemographics(); } catch(e) { console.warn("Ralat renderStudentDemographics:", e); }
  try { renderCommittees(); } catch(e) { console.warn("Ralat renderCommittees:", e); }
  try { renderTakwimEvents(); } catch(e) { console.warn("Ralat renderTakwimEvents:", e); }
  try { renderDutyTeachers(); } catch(e) { console.warn("Ralat renderDutyTeachers:", e); }
  try { renderDocumentsList(); } catch(e) { console.warn("Ralat renderDocumentsList:", e); }
  try { renderDeveloperCredits(); } catch(e) { console.warn("Ralat renderDeveloperCredits:", e); }
  try { renderPortalLinks(); } catch(e) { console.warn("Ralat renderPortalLinks:", e); }

  // 4. RENDER INDUK BESAR & PROTOTYPE
  try { renderHemHierarchy(); } catch(e) { console.warn("Ralat renderHemHierarchy:", e); }
  try { renderKokoHierarchy(); } catch(e) { console.warn("Ralat renderKokoHierarchy:", e); }
  try { renderSportsyncSection(); } catch(e) { console.warn("Ralat renderSportsyncSection:", e); }
  try { syncWithKOT26(); } catch(e) { console.warn("Ralat syncWithKOT26:", e); }
  try { renderPetangHierarchy(); } catch(e) { console.warn("Ralat renderPetangHierarchy:", e); }
  try { renderPortalAndSocial(); } catch(e) { console.warn("Ralat renderPortalAndSocial:", e); }

  // 5. INISIALISASI PBD & SPREADSHEET
  try { initGoogleSheetsViewer(); } catch(e) { console.warn("Ralat initGoogleSheetsViewer:", e); }
  try { initPbdCharts(); } catch(e) { console.warn("Ralat initPbdCharts:", e); }

  // 6. SERVICE WORKER PWA
  try { initPwaServiceWorker(); } catch(e) { console.warn("Ralat initPwaServiceWorker:", e); }

  console.log("Sistem Dashboard SK Ranggu sedia sepenuhnya & semua butang interaktif.");
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

  // Pastikan penjenamaan rasmi Papan Induk Utama terpelihara
  if (!s.name || !s.name.includes("PAPAN INDUK UTAMA")) {
    s.name = "PAPAN INDUK UTAMA SEKOLAH KEBANGSAAN RANGGU";
  }
  if (!s.motto || s.motto.includes("Cita") || s.motto.includes("Jaya")) {
    s.motto = "Berusaha, Berilmu, Berbakti";
  }
  document.title = "PAPAN INDUK UTAMA SEKOLAH KEBANGSAAN RANGGU PETI SURAT 842, 91008 TAWAU SABAH";

  document.querySelectorAll(".school-name-text").forEach(el => el.textContent = s.name);
  document.querySelectorAll(".school-code-text").forEach(el => el.textContent = s.code);
  document.querySelectorAll(".school-address-text").forEach(el => el.textContent = `${s.address} • Tel: ${s.phone}`);
  document.querySelectorAll(".school-motto-text").forEach(el => el.textContent = `"${s.motto.toUpperCase()}"`);
  document.querySelectorAll(".school-session-text").forEach(el => el.textContent = s.academicSession);

  if (s.logoUrl && !s.logoUrl.includes("skrg.png") && !s.logoUrl.includes("skrg.jpeg")) {
    document.querySelectorAll(".school-logo-img").forEach(el => el.src = s.logoUrl);
  } else {
    document.querySelectorAll(".school-logo-img").forEach(el => el.src = "assets/logo-skrg-cutout.png?v=20261007_v27");
  }
  if (s.kpmLogoUrl && !s.kpmLogoUrl.includes("logo-kpm.svg")) {
    document.querySelectorAll(".kpm-logo-img").forEach(el => el.src = s.kpmLogoUrl);
  } else {
    document.querySelectorAll(".kpm-logo-img").forEach(el => el.src = "assets/logo-kpm-cutout.png?v=20261007_v27");
  }

  // Refresh favicon untuk Safari dan Chrome
  refreshFavicon();
}

function refreshFavicon() {
  const v = "20261007_v27";
  const iconUrls = [
    { rel: "icon", type: "image/png", sizes: "64x64", href: `assets/pwa/favicon-64.png?v=${v}` },
    { rel: "icon", type: "image/png", sizes: "32x32", href: `assets/pwa/favicon-32.png?v=${v}` },
    { rel: "icon", type: "image/png", sizes: "192x192", href: `assets/pwa/icon-192.png?v=${v}` },
    { rel: "icon", type: "image/png", sizes: "512x512", href: `assets/pwa/icon-512.png?v=${v}` },
    { rel: "apple-touch-icon", sizes: "180x180", href: `assets/pwa/apple-touch-icon.png?v=${v}` },
    { rel: "shortcut icon", type: "image/x-icon", href: `favicon.ico?v=${v}` }
  ];
  iconUrls.forEach(cfg => {
    let selector = `link[rel='${cfg.rel}']`;
    if (cfg.sizes) selector += `[sizes='${cfg.sizes}']`;
    let el = document.querySelector(selector);
    if (!el) {
      el = document.createElement("link");
      el.rel = cfg.rel;
      if (cfg.type) el.type = cfg.type;
      if (cfg.sizes) el.sizes = cfg.sizes;
      document.head.appendChild(el);
    }
    el.href = cfg.href;
  });
}

/* ==========================================================================
   RENDER STATISTIK EKSEKUTIF
   ========================================================================== */
function renderExecutiveStats() {
  const stats = window.SKR_DATA.stats || {};
  const staff = window.SKR_DATA.staffList || [];
  const activeStaff = staff.filter(s => s.isActive !== false && s.status !== "Nyahaktif" && s.status !== "Bersara / Pencen");
  const activeTeachers = activeStaff.filter(s => s.type !== "AKP");
  const activeAkp = activeStaff.filter(s => s.type === "AKP");
  
  const elTeachers = document.getElementById("statTotalTeachers");
  const elTeachersBreakdown = document.getElementById("statTeachersBreakdown");
  const elStudents = document.getElementById("statTotalStudents");
  const elClasses = document.getElementById("statTotalClasses");
  const elCommittees = document.getElementById("statTotalCommittees");
  const elPbd = document.getElementById("statPbdPercent");
  const elWeek = document.getElementById("statActiveWeek");

  if (elTeachers) elTeachers.textContent = activeStaff.length || stats.totalAllStaff || 58;
  if (elTeachersBreakdown) elTeachersBreakdown.textContent = `${activeTeachers.length || 52} Guru + ${activeAkp.length || 6} AKP`;
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

    const isTelegram = (item.category && item.category.toLowerCase().includes("telegram")) ||
                       (item.author && item.author.toLowerCase().includes("telerasmi")) ||
                       (item.id && item.id.includes("tele"));

    return `
      <div class="p-4 rounded-xl bg-white border ${isTelegram ? 'border-sky-300 bg-sky-50/20' : 'border-slate-200/80'} executive-card flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div class="flex items-start gap-3">
          <div class="w-10 h-10 rounded-lg ${isTelegram ? 'bg-sky-50 text-sky-600 border border-sky-200' : 'bg-blue-50 text-blue-800 border border-blue-100'} flex items-center justify-center shrink-0 font-bold text-lg">
            ${isTelegram ? '✈️' : '📢'}
          </div>
          <div>
            <div class="flex items-center gap-2 flex-wrap">
              <span class="text-xs px-2.5 py-0.5 rounded-full border font-semibold ${priorityBadge}">${item.priority}</span>
              ${isTelegram ? '<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 border border-sky-300">✈️ TELERASMI SKRG</span>' : ''}
              <span class="text-xs font-medium text-slate-500">${item.category} • ${item.date}</span>
              <span class="text-xs text-slate-400">| ${item.author}</span>
            </div>
            <h4 class="font-bold text-slate-900 mt-1">${item.title}</h4>
            <p class="text-sm text-slate-600 mt-0.5 leading-relaxed">${item.content}</p>
          </div>
        </div>
        ${isTelegram ? `
          <div class="self-end md:self-center shrink-0">
            <a href="https://web.telegram.org/k/#-317568302" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs inline-flex items-center gap-1.5 transition shadow-2xs">
              <span>✈️ Buka di Telegram</span>
              <span>↗</span>
            </a>
          </div>
        ` : ''}
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

  const allStaff = window.SKR_DATA.staffList || [];
  const staff = allStaff.filter(m => m.isActive !== false && m.status !== "Nyahaktif" && m.status !== "Bersara / Pencen");
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
    } else if (actualFilter === "Pengurusan Tertinggi") {
      filtered = filtered.filter(m => m.tier <= 2 || m.category === "Pengurusan Tertinggi");
    } else if (actualFilter === "Guru Kelas") {
      filtered = filtered.filter(m => Boolean(m.classAssigned) || (m.role && m.role.toLowerCase().includes("guru kelas")));
    } else if (actualFilter === "Ketua Panitia") {
      filtered = filtered.filter(m => (m.role && m.role.toLowerCase().includes("ketua panitia")) || m.category === "Ketua Panitia");
    } else if (actualFilter === "HEM") {
      filtered = filtered.filter(m => (m.category && m.category.includes("Hal Ehwal Murid")) || (m.category && m.category.includes("Bimbingan")) || (m.role && (m.role.includes("HEM") || m.role.includes("Disiplin") || m.role.includes("Kaunseling") || m.role.includes("SPBT") || m.role.includes("RMT") || m.role.includes("Kesihatan"))));
    } else if (actualFilter === "Kokurikulum") {
      filtered = filtered.filter(m => (m.category && (m.category.includes("Kokurikulum") || m.category.includes("Sukan"))) || (m.role && (m.role.includes("Kokurikulum") || m.role.includes("Sukan") || m.role.includes("Rumah") || m.role.includes("Merentas Desa") || m.role.includes("SEGAK") || m.role.includes("PAJSK"))));
    } else if (actualFilter !== "Semua") {
      filtered = filtered.filter(m => m.category === actualFilter || (actualFilter === "Pengurusan Tertinggi" && m.tier <= 2));
    }

    if (actualQuery.trim() !== "") {
      const q = actualQuery.toLowerCase();
      filtered = filtered.filter(m => 
        (m.name && m.name.toLowerCase().includes(q)) || 
        (m.role && m.role.toLowerCase().includes(q)) ||
        (m.grade && m.grade.toLowerCase().includes(q)) ||
        (m.ic && m.ic.toLowerCase().includes(q)) ||
        (m.classAssigned && m.classAssigned.toLowerCase().includes(q)) ||
        (m.category && m.category.toLowerCase().includes(q)) ||
        (m.duties && m.duties.toLowerCase().includes(q))
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
          <p class="text-slate-500 font-medium">Tiada padanan staf dijumpai bagi tapisan/carian tersebut.</p>
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
        <div class="w-full max-w-sm bg-white rounded-2xl border-2 border-blue-600 shadow-md overflow-hidden text-center executive-card relative">
          ${renderCardEditButton({ targetType: 'curriculum_leader', targetId: 'leader', name: c.leader.name, role: c.leader.role, extra: c.leader.badge, photo: c.leader.photo })}
          <div class="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-1.5 px-4 text-xs font-extrabold tracking-wider uppercase">
            ${c.leader.role}
          </div>
          <div class="p-3.5 flex flex-col items-center">
            <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500 shadow mb-2 bg-slate-100">
              <img src="${c.leader.photo || window.getStaffPhoto(c.leader.name)}" alt="${c.leader.name}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='assets/photos/default.jpg'">
            </div>
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
        <div class="w-full max-w-sm bg-white rounded-2xl border-2 border-blue-600 shadow-md overflow-hidden text-center executive-card relative">
          ${renderCardEditButton({ targetType: 'curriculum_leader', targetId: 'deputyAdmin', name: c.deputyAdmin.name, role: c.deputyAdmin.role, extra: c.deputyAdmin.badge, photo: c.deputyAdmin.photo })}
          <div class="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-1.5 px-4 text-xs font-extrabold tracking-wider uppercase">
            ${c.deputyAdmin.role}
          </div>
          <div class="p-3.5 flex flex-col items-center">
            <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500 shadow mb-2 bg-slate-100">
              <img src="${c.deputyAdmin.photo || window.getStaffPhoto(c.deputyAdmin.name)}" alt="${c.deputyAdmin.name}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='assets/photos/default.jpg'">
            </div>
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
        <div class="w-full max-w-sm bg-white rounded-2xl border-2 border-blue-600 shadow-md overflow-hidden text-center executive-card relative">
          ${renderCardEditButton({ targetType: 'curriculum_leader', targetId: 'deputyPetang', name: c.deputyPetang.name, role: c.deputyPetang.role, extra: c.deputyPetang.badge, photo: c.deputyPetang.photo })}
          <div class="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-1.5 px-4 text-xs font-extrabold tracking-wider uppercase">
            ${c.deputyPetang.role}
          </div>
          <div class="p-3.5 flex flex-col items-center">
            <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500 shadow mb-2 bg-slate-100">
              <img src="${c.deputyPetang.photo || window.getStaffPhoto(c.deputyPetang.name)}" alt="${c.deputyPetang.name}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='assets/photos/default.jpg'">
            </div>
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
        <div class="w-full max-w-sm bg-white rounded-2xl border-2 border-blue-600 shadow-md overflow-hidden text-center executive-card relative">
          ${renderCardEditButton({ targetType: 'curriculum_leader', targetId: 'secretary', name: c.secretary.name, role: c.secretary.role, extra: c.secretary.badge, photo: c.secretary.photo })}
          <div class="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-1.5 px-4 text-xs font-extrabold tracking-wider uppercase">
            ${c.secretary.role}
          </div>
          <div class="p-3.5 flex flex-col items-center">
            <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500 shadow mb-2 bg-slate-100">
              <img src="${c.secretary.photo || window.getStaffPhoto(c.secretary.name)}" alt="${c.secretary.name}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='assets/photos/default.jpg'">
            </div>
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
              ${c.panitia.map((p, idx) => `
                <div class="bg-white rounded-xl border border-sky-300/80 shadow-sm overflow-hidden executive-card relative hover:border-sky-500 transition">
                  ${renderCardEditButton({ targetType: 'curriculum_panitia', targetId: idx, name: p.head, role: p.subject, photo: p.photo })}
                  <div class="bg-sky-600 text-white py-1 px-3 text-[10px] font-extrabold tracking-wider uppercase flex items-center justify-between">
                    <span>${p.subject}</span>
                    <span>${p.icon || '📘'}</span>
                  </div>
                  <div class="p-2 flex items-center gap-2.5 text-left">
                    <div class="w-10 h-10 rounded-lg overflow-hidden shrink-0 shadow-2xs border border-sky-200 bg-slate-100">
                      <img src="${p.photo || window.getStaffPhoto(p.head)}" alt="${p.head}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='assets/photos/default.jpg'">
                    </div>
                    <div class="min-w-0 flex-1">
                      <h5 class="font-extrabold text-slate-900 text-xs tracking-wide leading-tight line-clamp-2">
                        ${p.head}
                      </h5>
                      <span class="text-[10px] text-sky-700 font-semibold block mt-0.5">Ketua Panitia</span>
                    </div>
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
              ${c.penyelaras.map((py, idx) => `
                <div class="bg-white rounded-xl border border-cyan-300/80 shadow-sm overflow-hidden executive-card relative hover:border-cyan-500 transition">
                  ${renderCardEditButton({ targetType: 'curriculum_penyelaras', targetId: idx, name: py.officer, role: py.portfolio, photo: py.photo })}
                  <div class="bg-cyan-600 text-white py-1 px-3 text-[10px] font-extrabold tracking-wider uppercase flex items-center justify-between">
                    <span>${py.portfolio}</span>
                    <span>${py.icon || '📌'}</span>
                  </div>
                  <div class="p-2 flex items-center gap-2.5 text-left">
                    <div class="w-10 h-10 rounded-lg overflow-hidden shrink-0 shadow-2xs border border-cyan-200 bg-slate-100">
                      <img src="${py.photo || window.getStaffPhoto(py.officer)}" alt="${py.officer}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='assets/photos/default.jpg'">
                    </div>
                    <div class="min-w-0 flex-1">
                      <h5 class="font-extrabold text-slate-900 text-xs tracking-wide leading-tight line-clamp-2">
                        ${py.officer}
                      </h5>
                      <span class="text-[10px] text-cyan-700 font-semibold block mt-0.5">Pegawai Penyelaras</span>
                    </div>
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
              ${c.unitKurikulum.map((uk, idx) => `
                <div class="bg-white rounded-xl border border-indigo-300/80 shadow-sm overflow-hidden executive-card relative hover:border-indigo-500 transition">
                  ${renderCardEditButton({ targetType: 'curriculum_unit_khas', targetId: idx, name: uk.officer, role: uk.unit, photo: uk.photo })}
                  <div class="bg-indigo-700 text-white py-1 px-3 text-[10px] font-extrabold tracking-wider uppercase flex items-center justify-between">
                    <span>${uk.unit}</span>
                    <span>${uk.icon || '📋'}</span>
                  </div>
                  <div class="p-2 flex items-center gap-2.5 text-left">
                    <div class="w-10 h-10 rounded-lg overflow-hidden shrink-0 shadow-2xs border border-indigo-200 bg-slate-100">
                      <img src="${uk.photo || window.getStaffPhoto(uk.officer)}" alt="${uk.officer}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='assets/photos/default.jpg'">
                    </div>
                    <div class="min-w-0 flex-1">
                      <h5 class="font-extrabold text-slate-900 text-xs tracking-wide leading-tight line-clamp-2">
                        ${uk.officer}
                      </h5>
                      <span class="text-[10px] text-indigo-700 font-semibold block mt-0.5">Penyelaras Unit</span>
                    </div>
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
        <div class="w-full max-w-sm bg-white rounded-2xl border-2 border-red-500 shadow-md overflow-hidden text-center executive-card relative">
          ${renderCardEditButton({ targetType: 'admin_leader', targetId: 'leader', name: h.leader.name, role: h.leader.role, extra: h.leader.badge, photo: h.leader.photo })}
          <div class="bg-gradient-to-r from-red-600 to-rose-600 text-white py-1.5 px-4 text-xs font-extrabold tracking-wider uppercase">
            ${h.leader.role}
          </div>
          <div class="p-3.5 flex flex-col items-center">
            <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-red-500 shadow mb-2 bg-slate-100">
              <img src="${h.leader.photo || window.getStaffPhoto(h.leader.name)}" alt="${h.leader.name}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='assets/photos/default.jpg'">
            </div>
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
        <div class="w-full max-w-sm bg-white rounded-2xl border-2 border-red-500 shadow-md overflow-hidden text-center executive-card relative">
          ${renderCardEditButton({ targetType: 'admin_leader', targetId: 'deputy', name: h.deputy.name, role: h.deputy.role, extra: h.deputy.badge, photo: h.deputy.photo })}
          <div class="bg-gradient-to-r from-red-600 to-rose-600 text-white py-1.5 px-4 text-xs font-extrabold tracking-wider uppercase">
            ${h.deputy.role}
          </div>
          <div class="p-3.5 flex flex-col items-center">
            <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-red-500 shadow mb-2 bg-slate-100">
              <img src="${h.deputy.photo || window.getStaffPhoto(h.deputy.name)}" alt="${h.deputy.name}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='assets/photos/default.jpg'">
            </div>
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
        <div class="w-full max-w-sm bg-white rounded-2xl border-2 border-red-500 shadow-md overflow-hidden text-center executive-card relative">
          ${renderCardEditButton({ targetType: 'admin_leader', targetId: 'secretary', name: h.secretary.name, role: h.secretary.role, extra: h.secretary.badge, photo: h.secretary.photo })}
          <div class="bg-gradient-to-r from-red-600 to-rose-600 text-white py-1.5 px-4 text-xs font-extrabold tracking-wider uppercase">
            ${h.secretary.role}
          </div>
          <div class="p-3.5 flex flex-col items-center">
            <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-red-500 shadow mb-2 bg-slate-100">
              <img src="${h.secretary.photo || window.getStaffPhoto(h.secretary.name)}" alt="${h.secretary.name}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='assets/photos/default.jpg'">
            </div>
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
            ${h.leftWing.map((item, idx) => createPosterStyleCard(item, "leftWing", idx)).join("")}
          </div>

          <!-- SAYAP KANAN: DIGITAL, ICT, DATA & PEMBANGUNAN -->
          <div class="space-y-3.5">
            <div class="text-xs font-extrabold text-slate-700 tracking-wider uppercase border-b-2 border-red-500 pb-1 flex items-center justify-between">
              <span>💻 Unit Digital, ICT, Data & Pembangunan</span>
              <span class="text-[10px] bg-red-100 text-red-800 px-2 py-0.5 rounded font-mono">8 Portfolio</span>
            </div>
            ${h.rightWing.map((item, idx) => createPosterStyleCard(item, "rightWing", idx)).join("")}
          </div>

        </div>
      </div>

    </div>
  `;
}

// Kad Gaya Poster Rasmi Pentadbiran SK Ranggu
function createPosterStyleCard(item, wing = "leftWing", idx = 0) {
  const isUser = item.officer && item.officer.includes("FIKREY");
  const mainPhoto = item.photo || (window.getStaffPhoto ? window.getStaffPhoto(item.officer) : "assets/photos/default.jpg");

  return `
    <div class="bg-white rounded-xl border border-red-300/80 shadow-sm overflow-hidden executive-card relative hover:border-red-500 transition ${isUser ? 'ring-2 ring-amber-400' : ''}">
      ${renderCardEditButton({ targetType: 'admin_wing', targetId: wing, subId: idx, name: item.officer, role: item.portfolio, extra: item.title, photo: item.photo })}
      <div class="bg-gradient-to-r from-red-600 via-rose-600 to-red-500 text-white py-1 px-3 text-[11px] font-extrabold tracking-wider uppercase flex items-center justify-between">
        <span>${item.portfolio}</span>
        ${isUser ? '<span class="text-[10px] bg-amber-400 text-slate-900 px-1.5 py-0.2 rounded font-bold">Pentadbir Sistem</span>' : ''}
      </div>
      <div class="p-2.5">
        <div class="flex items-center gap-2.5 text-left">
          <div class="w-11 h-11 rounded-xl overflow-hidden shrink-0 shadow-2xs border border-red-200 bg-slate-100">
            <img src="${mainPhoto}" alt="${item.officer}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='assets/photos/default.jpg'">
          </div>
          <div class="min-w-0 flex-1">
            <h5 class="font-extrabold text-slate-900 text-xs sm:text-sm tracking-wide leading-tight">
              ${item.officer}
            </h5>
            <span class="text-[10px] text-rose-700 font-semibold block mt-0.5">Pegawai Penyelaras</span>
          </div>
        </div>
        ${item.extraOfficers && item.extraOfficers.length > 0 ? `
          <div class="mt-2 pt-2 border-t border-slate-100 space-y-1.5">
            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Pegawai / Staf Bersama:</span>
            ${item.extraOfficers.map(eo => {
              const eoName = typeof eo === "string" ? eo : eo.name;
              const eoPhoto = (typeof eo === "object" && eo.photo) ? eo.photo : (window.getStaffPhoto ? window.getStaffPhoto(eoName) : "assets/photos/default.jpg");
              return `
                <div class="flex items-center gap-2 text-left bg-slate-50 p-1.5 rounded-lg border border-slate-100">
                  <div class="w-7 h-7 rounded-lg overflow-hidden shrink-0 border border-slate-200 bg-white">
                    <img src="${eoPhoto}" alt="${eoName}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='assets/photos/default.jpg'">
                  </div>
                  <div class="min-w-0 flex-1">
                    <div class="text-[11px] font-bold text-slate-800 leading-tight truncate">${eoName}</div>
                  </div>
                </div>
              `;
            }).join("")}
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

  const photoUrl = member.photo || (window.getStaffPhoto ? window.getStaffPhoto(member.name) : "assets/photos/default.jpg");

  return `
    <div class="bg-white rounded-2xl p-4 border ${borderHighlight} executive-card flex flex-col justify-between relative overflow-hidden group">
      ${renderCardEditButton({ targetType: 'staff', targetId: member.id, name: member.name, role: member.role, extra: member.duties, photo: member.photo })}
      <div class="absolute top-0 left-0 right-0 h-1.5 ${isPrincipal ? 'bg-amber-500' : (member.tier === 2 ? 'bg-blue-600' : 'bg-slate-400')}"></div>

      <div>
        <div class="flex items-start gap-3">
          <div class="w-12 h-12 rounded-xl overflow-hidden shrink-0 shadow-sm border border-slate-200 bg-slate-100 flex items-center justify-center">
            <img src="${photoUrl}" alt="${member.name}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='assets/photos/default.jpg'">
          </div>

          <div class="min-w-0 flex-1">
            <div class="flex items-center gap-1.5 flex-wrap mb-1">
              <span class="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${badgeClass}">
                ${member.grade || 'DG41'}
              </span>
              <span class="inline-block text-[9px] font-bold px-1.5 py-0.5 rounded ${member.session === 'Petang' ? 'bg-amber-100 text-amber-800 border border-amber-200' : 'bg-sky-50 text-sky-700 border border-sky-200'}">
                Sesi ${member.session || 'Pagi'}
              </span>
              ${member.classAssigned ? `
                <span class="inline-block text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 truncate max-w-[140px]" title="Guru Kelas ${member.classAssigned}">
                  🏫 ${member.classAssigned}
                </span>
              ` : ''}
            </div>
            <h4 class="font-extrabold text-slate-900 text-sm leading-snug group-hover:text-blue-900 transition-colors">
              ${member.name}
            </h4>
            <p class="text-xs font-bold text-blue-800 mt-1 leading-snug line-clamp-2">
              ${member.role}
            </p>
          </div>
        </div>

        <div class="mt-3 pt-2.5 border-t border-slate-100 text-xs text-slate-600 leading-relaxed">
          <p class="line-clamp-2">${member.duties || 'Pengurusan pentadbiran dan pengajaran pembelajaran.'}</p>
        </div>
      </div>

      <div class="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
        <span class="truncate font-mono text-[10px] text-slate-600">
          ✉️ ${member.email || 'xba3037@moe.edu.my'}
        </span>
        <button onclick="showMemberModal('${member.id}')" class="px-2.5 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold rounded-lg border border-blue-200 shrink-0 ml-1 transition hover:underline">
          Profil Lengkap
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

  const photoUrl = member.photo || (window.getStaffPhoto ? window.getStaffPhoto(member.name) : "assets/photos/default.jpg");

  modalContent.innerHTML = `
    <div class="p-6">
      <div class="flex items-center justify-between border-b pb-4 mb-4">
        <div>
          <h3 class="font-bold text-lg text-slate-900">Maklumat Pegawai & Guru SK Ranggu</h3>
          <p class="text-xs text-slate-500">Pangkalan Data Rasmi Berdasarkan Dokumen 2026 & Carta Pengurusan</p>
        </div>
        <button onclick="closeGenericModal()" class="text-slate-400 hover:text-slate-700 text-2xl font-bold leading-none">&times;</button>
      </div>
      <div class="space-y-4">
        <div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center gap-4">
          <div class="w-16 h-16 rounded-2xl overflow-hidden shrink-0 shadow border border-white bg-slate-100">
            <img src="${photoUrl}" alt="${member.name}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='assets/photos/default.jpg'">
          </div>
          <div class="min-w-0">
            <h4 class="font-extrabold text-slate-900 text-base leading-tight">${member.name}</h4>
            <p class="text-xs font-bold text-blue-700 mt-1 leading-snug">${member.role}</p>
            <div class="flex items-center gap-1.5 flex-wrap mt-2">
              <span class="text-[11px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-mono font-bold">${member.grade}</span>
              <span class="text-[11px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-medium">${member.type || 'PPP'} • Sesi ${member.session}</span>
              <span class="text-[11px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-medium">${member.category}</span>
              ${member.classAssigned ? `<span class="text-[11px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">🏫 Guru Kelas: ${member.classAssigned}</span>` : ''}
            </div>
          </div>
        </div>

        <div class="space-y-2 text-xs text-slate-700">
          <div class="flex justify-between py-2 border-b border-slate-100">
            <span class="text-slate-500 font-semibold">No. Kad Pengenalan:</span>
            <span class="font-mono font-bold text-slate-800">${member.ic || '-'}</span>
          </div>
          <div class="flex justify-between py-2 border-b border-slate-100">
            <span class="text-slate-500 font-semibold">Gred Perkhidmatan:</span>
            <span class="font-bold text-blue-900">${member.grade} (${member.type === 'AKP' ? 'Anggota Kumpulan Pelaksana' : 'Pegawai Perkhidmatan Pendidikan'})</span>
          </div>
          <div class="flex justify-between py-2 border-b border-slate-100">
            <span class="text-slate-500 font-semibold">Sesi Persekolahan:</span>
            <span class="font-bold text-slate-800">Sesi ${member.session}</span>
          </div>
          ${member.classAssigned ? `
            <div class="flex justify-between py-2 border-b border-slate-100">
              <span class="text-slate-500 font-semibold">Tanggungjawab Guru Kelas:</span>
              <span class="font-bold text-emerald-700">Kelas ${member.classAssigned} (APDM Rasmi)</span>
            </div>
          ` : ''}
          <div class="flex justify-between py-2 border-b border-slate-100">
            <span class="text-slate-500 font-semibold">Emel DELIMa / Rasmi:</span>
            <span class="font-mono text-blue-700">${member.email || 'xba3037@moe.edu.my'}</span>
          </div>
          <div class="flex justify-between py-2 border-b border-slate-100">
            <span class="text-slate-500 font-semibold">Telefon Pejabat:</span>
            <span class="font-medium">${member.phone || '089-925493'}</span>
          </div>
          <div class="pt-2">
            <span class="text-slate-500 font-bold block mb-1">Bidang Tugas & Tanggungjawab Rasmi:</span>
            <p class="p-3 bg-white border border-slate-200 rounded-xl text-slate-700 text-xs leading-relaxed font-medium">
              ${member.duties || 'Menjalankan amanah pengurusan instruksional, pentadbiran dan kebajikan murid sekolah.'}
            </p>
          </div>
        </div>
      </div>
      <div class="mt-6 flex justify-end">
        <button onclick="closeGenericModal()" class="px-5 py-2 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-xl text-xs transition">
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
   RENDER PANITIA KURIKULUM (12 PANITIA BERSAMA FOTO KETUA PANITIA)
   ========================================================================== */
function renderCommittees() {
  const container = document.getElementById("committeesContainer");
  if (!container) return;

  const panitiaList = (window.SKR_DATA.curriculumHierarchy2026 && window.SKR_DATA.curriculumHierarchy2026.panitia) || [];
  if (panitiaList.length > 0) {
    container.innerHTML = panitiaList.map(p => {
      const photo = p.photo || (window.getStaffPhoto ? window.getStaffPhoto(p.head) : "assets/photos/default.jpg");
      return `
        <div class="bg-white rounded-2xl p-4 border border-slate-200 executive-card flex flex-col justify-between hover:border-blue-400 hover:shadow-md transition">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                Panitia Mata Pelajaran
              </span>
              <span class="text-2xl">${p.icon || '📘'}</span>
            </div>
            <h4 class="font-extrabold text-slate-900 text-sm sm:text-base leading-snug mb-3">${p.subject}</h4>
            
            <div class="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
              <div class="w-12 h-12 rounded-xl overflow-hidden shrink-0 shadow-2xs border border-blue-300 bg-white">
                <img src="${photo}" alt="${p.head}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='assets/photos/default.jpg'">
              </div>
              <div class="min-w-0 flex-1">
                <span class="text-[10px] text-blue-700 font-bold uppercase block">Ketua Panitia:</span>
                <strong class="text-slate-900 font-extrabold text-xs block leading-tight line-clamp-2">${p.head}</strong>
              </div>
            </div>
          </div>

          <div class="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span class="text-[11px] font-semibold text-emerald-700">🎯 Sasaran TP3 - TP6</span>
            <span class="text-[10px] font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-600">DSKP KSSR Semakan</span>
          </div>
        </div>
      `;
    }).join("");
    return;
  }

  const list = window.SKR_DATA.committees || [];
  container.innerHTML = list.map(c => `
    <div class="bg-white rounded-xl p-4 border border-slate-200 executive-card flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-bold text-blue-800 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
            ${c.membersCount || 10} Guru
          </span>
          <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> ${c.status || 'Aktif'}
          </span>
        </div>
        <h4 class="font-bold text-slate-900 text-base mb-1">${c.name}</h4>
        <div class="space-y-1 text-xs text-slate-600 mt-2">
          <p><span class="text-slate-400">Ketua:</span> <strong class="text-slate-800">${c.head || c.chairperson}</strong></p>
        </div>
      </div>

      <div class="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
        <span class="text-slate-500 text-[11px]">🎯 KPI: ${c.kpi || 'Pencapaian Cemerlang'}</span>
        <span class="text-slate-400 text-[10px] font-mono">${c.dskpStatus || 'KSSR'}</span>
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

  const events = window.SKR_DATA.takwimEvents || window.SKR_DATA.takwim || [];
  container.innerHTML = events.map(e => {
    const rawDate = e.date || e.startDate || "2026-10-01";
    const d = new Date(rawDate);
    const mStr = !isNaN(d.getTime()) ? d.toLocaleDateString("ms-MY", { month: "short" }) : "OKT";
    const dayStr = !isNaN(d.getTime()) ? d.getDate() : "—";
    const isCompleted = e.status === "Selesai";
    const statusBadge = isCompleted ? "bg-slate-100 text-slate-600 border-slate-200" : "bg-emerald-100 text-emerald-800 border-emerald-300";

    return `
      <div class="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 executive-card">
        <div class="bg-royal-900 text-white rounded-xl p-3 text-center shrink-0 w-16 shadow-sm">
          <div class="text-[10px] font-bold uppercase tracking-wider text-amber-300">
            ${mStr}
          </div>
          <div class="text-xl font-extrabold">
            ${dayStr}
          </div>
        </div>

        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 flex-wrap mb-1">
            <span class="text-[11px] font-semibold text-blue-800 bg-blue-100 px-2 py-0.5 rounded">
              ${e.time || e.category || 'Program'}
            </span>
            <span class="text-[11px] text-slate-500">📍 ${e.venue || e.location || 'SK Ranggu'}</span>
          </div>
          <h4 class="font-bold text-slate-900 text-sm">${e.title}</h4>
          <p class="text-xs text-slate-500 mt-0.5">Tindakan / Penganjur: <strong class="text-slate-700">${e.inCharge || e.organizer || 'Pengurusan Sekolah'}</strong></p>
        </div>

        <div class="shrink-0 hidden sm:block">
          <span class="text-xs font-semibold px-2.5 py-1 rounded-full ${statusBadge} border">
            ${e.status || 'Akan Datang'}
          </span>
        </div>
      </div>
    `;
  }).join("");
}

function renderDutyTeachers() {
  const container = document.getElementById("dutyTeachersContainer");
  if (!container) return;

  const duties = window.SKR_DATA.dutyTeachers || window.SKR_DATA.weeklyDutyTeachers || [];
  const activeDuty = duties[0] || {};
  const teachers = activeDuty.teachers || [];

  container.innerHTML = `
    <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm executive-card relative">
      ${renderCardEditButton({ targetType: 'duty', targetId: 0, name: activeDuty.leader || '', role: 'Ketua Guru Bertugas', extra: activeDuty.theme || '' })}
      <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 gap-2">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Minggu Ke-${activeDuty.week || activeDuty.weekNumber || 28}
          </span>
          <h4 class="font-extrabold text-slate-900 text-base mt-2">${activeDuty.dateRange || '06 Okt 2026 - 10 Okt 2026'}</h4>
        </div>
        <div class="flex items-center gap-2.5 flex-wrap sm:justify-end">
          <div class="text-xs text-slate-500">
            Tema: <strong class="text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200 inline-block">${activeDuty.theme || 'Kebersihan Diri & Persekitaran Sekolah'}</strong>
          </div>
          <button type="button" onclick="window.openHemSmartTrackModal()" class="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition" title="Buka e-JKM & Rekod Kehadiran Harian">
            <span>🛡️</span>
            <span>HEM SmartTrack (e-JKM) ↗</span>
          </button>
        </div>
      </div>

      <div class="mt-4">
        <h5 class="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">Senarai Guru Bertugas Mingguan:</h5>
        ${teachers.length > 0 ? `
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            ${teachers.map(t => {
              const tName = typeof t === "string" ? t : t.name;
              const tRole = (typeof t === "object" && t.role) ? t.role : "Guru Bertugas";
              const tPhoto = (typeof t === "object" && t.photo) ? t.photo : (window.getStaffPhoto ? window.getStaffPhoto(tName) : "assets/photos/default.jpg");
              return `
                <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
                  <div class="w-11 h-11 rounded-xl overflow-hidden shrink-0 shadow-2xs border border-blue-200 bg-white">
                    <img src="${tPhoto}" alt="${tName}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='assets/photos/default.jpg'">
                  </div>
                  <div class="min-w-0 flex-1">
                    <span class="text-[10px] font-bold text-blue-700 uppercase block truncate">${tRole}</span>
                    <strong class="text-xs text-slate-900 font-extrabold block truncate">${tName}</strong>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        ` : `
          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Ketua Guru Bertugas:</span>
            <p class="font-bold text-slate-900 text-sm">⭐ ${activeDuty.leader || '—'}</p>
          </div>
        `}
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

  const links = window.SKR_DATA.portalLinks || window.SKR_DATA.externalPortals || [];
  container.innerHTML = links.map(l => {
    const isHem = (l.id && l.id.includes("hemsmarttrack")) || (l.url && l.url.includes("sistemkehadiranskrg") && !l.url.includes("guru-bertugas")) || (l.name && l.name.includes("HEM SMARTTRACK"));
    const isDisiplin = (l.id && l.id.includes("smartdisiplin")) || (l.url && l.url.includes("guru-bertugas")) || (l.name && l.name.includes("SMARTDISIPLIN"));
    const isKot = (l.id && (l.id.includes("sportsync") || l.id.includes("kot"))) || (l.url && l.url.includes("kejohanan-olahraga-skrg")) || (l.name && l.name.includes("KOT"));

    let clickHandler = '';
    let badgeColor = 'bg-blue-100 text-blue-800';
    let borderColor = 'border-slate-200';
    let modalActionText = '';

    if (isHem) {
      clickHandler = 'onclick="if(!event.ctrlKey&&!event.metaKey){event.preventDefault();window.openHemSmartTrackModal(\'attendance\');}"';
      badgeColor = 'bg-emerald-100 text-emerald-800';
      borderColor = 'border-emerald-400 ring-2 ring-emerald-500/20';
      modalActionText = '<span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-300">Papan Induk</span>';
    } else if (isDisiplin) {
      clickHandler = 'onclick="if(!event.ctrlKey&&!event.metaKey){event.preventDefault();window.openSmartDisiplinModal();}"';
      badgeColor = 'bg-amber-100 text-amber-900';
      borderColor = 'border-amber-400 ring-2 ring-amber-500/20';
      modalActionText = '<span class="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-300">Papan Induk</span>';
    } else if (isKot) {
      clickHandler = 'onclick="if(!event.ctrlKey&&!event.metaKey){event.preventDefault();window.openKotPreviewModal(\'dashboard\');}"';
      badgeColor = 'bg-indigo-100 text-indigo-800';
      borderColor = 'border-indigo-400 ring-2 ring-indigo-500/20';
      modalActionText = '<span class="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-300">Papan Induk</span>';
    } else {
      clickHandler = `onclick="window.notifyExternalTabOpen('${(l.name || 'Portal').replace(/'/g, "\\'")}')"`;
    }

    return `
      <a href="${l.url}" ${clickHandler} target="_blank" rel="noopener noreferrer" class="p-4 bg-white rounded-xl border ${borderColor} executive-card flex items-start justify-between group hover:border-blue-400 transition cursor-pointer">
        <div>
          <div class="flex items-center gap-2 mb-1 flex-wrap">
            <span class="text-[10px] font-bold px-2 py-0.5 rounded ${badgeColor}">${l.badge || 'Portal'}</span>
            <h4 class="font-bold text-slate-900 group-hover:text-blue-700 transition">${l.name}</h4>
            ${modalActionText}
          </div>
          <p class="text-xs text-slate-500 leading-snug">${l.desc || l.description || ''}</p>
        </div>
        <span class="text-slate-400 group-hover:text-blue-600 transition text-sm">↗</span>
      </a>
    `;
  }).join("");
}

/* ==========================================================================
   RENDER INDUK BESAR HEM 2026 (15 PORTFOLIO BERSAMA FOTO RASMI)
   ========================================================================== */
function renderHemHierarchy() {
  const container = document.getElementById("hemUnitsGrid");
  const hem = window.SKR_DATA.hemHierarchy2026;
  if (!hem) return;

  // Header Kepimpinan HEM (PK HEM & Setiausaha)
  const leadersContainer = document.getElementById("hemHeaderLeadersContainer");
  if (leadersContainer) {
    const pkPhoto = hem.pengerusiPhoto || (window.getStaffPhoto ? window.getStaffPhoto(hem.pengerusi) : "assets/photos/komala-binti-joseph.jpg");
    const suPhoto = hem.setiausahaPhoto || (window.getStaffPhoto ? window.getStaffPhoto(hem.setiausaha) : "assets/photos/norlina-binti-bagwas.jpg");
    leadersContainer.innerHTML = `
      <div class="bg-white/10 backdrop-blur-sm p-3 rounded-2xl border border-white/15 flex items-center gap-3 min-w-[160px] relative">
        ${renderCardEditButton({ targetType: 'hem_leader', targetId: 'pengerusi', name: hem.pengerusi, role: 'Penolong Kanan HEM', extra: 'Pengerusi HEM', photo: hem.pengerusiPhoto })}
        <div class="w-11 h-11 rounded-xl overflow-hidden shrink-0 border border-emerald-400/50 bg-slate-800">
          <img src="${pkPhoto}" alt="${hem.pengerusi}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='assets/photos/default.jpg'">
        </div>
        <div>
          <span class="text-[10px] uppercase font-bold text-emerald-300 block">PK HEM</span>
          <strong class="text-xs sm:text-sm font-extrabold text-white block mt-0.5 truncate max-w-[150px]">${hem.pengerusi}</strong>
          <span class="text-[9px] text-slate-300">Pengerusi HEM</span>
        </div>
      </div>
      <div class="bg-white/10 backdrop-blur-sm p-3 rounded-2xl border border-white/15 flex items-center gap-3 min-w-[160px] relative">
        ${renderCardEditButton({ targetType: 'hem_leader', targetId: 'setiausaha', name: hem.setiausaha, role: 'Setiausaha HEM', extra: 'Penyelaras Induk', photo: hem.setiausahaPhoto })}
        <div class="w-11 h-11 rounded-xl overflow-hidden shrink-0 border border-amber-400/50 bg-slate-800">
          <img src="${suPhoto}" alt="${hem.setiausaha}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='assets/photos/default.jpg'">
        </div>
        <div>
          <span class="text-[10px] uppercase font-bold text-amber-300 block">Setiausaha HEM</span>
          <strong class="text-xs sm:text-sm font-extrabold text-white block mt-0.5 truncate max-w-[150px]">${hem.setiausaha}</strong>
          <span class="text-[9px] text-slate-300">Penyelaras Induk</span>
        </div>
      </div>
    `;
  }

  if (!container || !hem.units) return;

  container.innerHTML = hem.units.map((u, idx) => {
    const headPhoto = u.photo || (window.getStaffPhoto ? window.getStaffPhoto(u.head) : "assets/photos/default.jpg");
    const extraPhoto = u.extraOfficerPhoto || (u.extraOfficer && window.getStaffPhoto ? window.getStaffPhoto(u.extraOfficer) : null);

    return `
      <div class="p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-md transition executive-card flex flex-col justify-between relative">
        ${renderCardEditButton({ targetType: 'hem_unit', targetId: idx, name: u.head, role: u.name, extra: u.badge, photo: u.photo })}
        <div>
          <div class="flex items-center justify-between mb-2.5">
            <span class="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
              ${u.badge}
            </span>
            <span class="text-xl">${u.icon || '🛡️'}</span>
          </div>
          <h4 class="font-extrabold text-slate-900 text-sm sm:text-base leading-snug">${u.name}</h4>
          <p class="text-xs text-slate-600 mt-2 leading-relaxed">${u.desc}</p>
        </div>

        <div class="mt-4 pt-3 border-t border-slate-100 space-y-2">
          <!-- KETUA / PENYELARAS -->
          <div class="flex items-center gap-3">
            <div class="w-11 h-11 rounded-xl overflow-hidden shrink-0 shadow-sm border border-emerald-200 bg-slate-100">
              <img src="${headPhoto}" alt="${u.head}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='assets/photos/default.jpg'">
            </div>
            <div class="min-w-0 flex-1">
              <span class="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block">Penyelaras / Ketua:</span>
              <strong class="text-slate-900 font-extrabold text-xs sm:text-sm block truncate">${u.head}</strong>
            </div>
          </div>

          ${u.extraOfficer ? `
            <div class="flex items-center gap-2.5 pt-1.5 border-t border-slate-50 bg-slate-50/70 p-2 rounded-xl">
              <div class="w-8 h-8 rounded-lg overflow-hidden shrink-0 shadow-2xs border border-slate-200 bg-white">
                <img src="${extraPhoto || 'assets/photos/default.jpg'}" alt="${u.extraOfficer}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='assets/photos/default.jpg'">
              </div>
              <div class="min-w-0 flex-1">
                <span class="text-[9px] font-bold text-slate-500 uppercase block">Jawatankuasa Kerja:</span>
                <span class="text-xs font-bold text-slate-800 block truncate">${u.extraOfficer}</span>
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }).join("");
}

/* ==========================================================================
   RENDER INDUK BESAR KOKURIKULUM 2026 (UNIFORM, KELAB, SUKAN, RUMAH BERSAMA FOTO)
   ========================================================================== */
function renderKokoHierarchy() {
  const koko = window.SKR_DATA.kokoHierarchy2026;
  if (!koko) return;

  // Header Kepimpinan Kokurikulum (PK Koko, SU KOKU, SU Sukan)
  const leadersContainer = document.getElementById("kokoHeaderLeadersContainer");
  if (leadersContainer) {
    const pkPhoto = koko.pengerusiPhoto || (window.getStaffPhoto ? window.getStaffPhoto(koko.pengerusi) : "assets/photos/warnah-binti-sira.jpg");
    const suPhoto = koko.setiausahaPhoto || (window.getStaffPhoto ? window.getStaffPhoto(koko.setiausaha) : "assets/photos/evalorenna-binti-laminsin.jpg");
    const suSukanPhoto = koko.setiausahaSukanPhoto || (window.getStaffPhoto ? window.getStaffPhoto(koko.setiausahaSukan) : "assets/photos/rosidian-bin-idris.jpg");
    leadersContainer.innerHTML = `
      <div class="bg-white/10 backdrop-blur-sm p-3 rounded-2xl border border-white/15 flex items-center gap-3 min-w-[150px] relative">
        ${renderCardEditButton({ targetType: 'koko_leader', targetId: 'pengerusi', name: koko.pengerusi, role: 'Penolong Kanan Kokurikulum', extra: 'Pengerusi KOKU', photo: koko.pengerusiPhoto })}
        <div class="w-11 h-11 rounded-xl overflow-hidden shrink-0 border border-amber-400/50 bg-slate-800">
          <img src="${pkPhoto}" alt="${koko.pengerusi}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='assets/photos/default.jpg'">
        </div>
        <div>
          <span class="text-[10px] uppercase font-bold text-amber-300 block">PK Kokurikulum</span>
          <strong class="text-xs sm:text-sm font-extrabold text-white block mt-0.5 truncate max-w-[150px]">${koko.pengerusi}</strong>
          <span class="text-[9px] text-slate-300">Pengerusi KOKU</span>
        </div>
      </div>
      <div class="bg-white/10 backdrop-blur-sm p-3 rounded-2xl border border-white/15 flex items-center gap-3 min-w-[150px] relative">
        ${renderCardEditButton({ targetType: 'koko_leader', targetId: 'setiausaha', name: koko.setiausaha, role: 'Setiausaha KOKU', extra: 'Penyelaras Induk', photo: koko.setiausahaPhoto })}
        <div class="w-11 h-11 rounded-xl overflow-hidden shrink-0 border border-sky-400/50 bg-slate-800">
          <img src="${suPhoto}" alt="${koko.setiausaha}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='assets/photos/default.jpg'">
        </div>
        <div>
          <span class="text-[10px] uppercase font-bold text-sky-300 block">Setiausaha KOKU</span>
          <strong class="text-xs sm:text-sm font-extrabold text-white block mt-0.5 truncate max-w-[150px]">${koko.setiausaha}</strong>
          <span class="text-[9px] text-slate-300">Penyelaras Induk</span>
        </div>
      </div>
      <div class="bg-white/10 backdrop-blur-sm p-3 rounded-2xl border border-white/15 flex items-center gap-3 min-w-[150px] relative">
        ${renderCardEditButton({ targetType: 'koko_leader', targetId: 'setiausahaSukan', name: koko.setiausahaSukan || 'ROSIDIAN BIN IDRIS', role: 'Setiausaha Sukan', extra: 'Pegawai Teknikal Sukan', photo: koko.setiausahaSukanPhoto })}
        <div class="w-11 h-11 rounded-xl overflow-hidden shrink-0 border border-emerald-400/50 bg-slate-800">
          <img src="${suSukanPhoto}" alt="${koko.setiausahaSukan || 'ROSIDIAN BIN IDRIS'}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='assets/photos/default.jpg'">
        </div>
        <div>
          <span class="text-[10px] uppercase font-bold text-emerald-300 block">Setiausaha Sukan</span>
          <strong class="text-xs sm:text-sm font-extrabold text-white block mt-0.5 truncate max-w-[150px]">${koko.setiausahaSukan || 'ROSIDIAN BIN IDRIS'}</strong>
          <span class="text-[9px] text-slate-300">Pegawai Teknikal</span>
        </div>
      </div>
    `;
  }

  // 1. Unit Beruniform
  const uniformContainer = document.getElementById("kokoUniformGrid");
  if (uniformContainer && koko.uniformUnits) {
    uniformContainer.innerHTML = koko.uniformUnits.map((u, idx) => {
      const photo = u.photo || (window.getStaffPhoto ? window.getStaffPhoto(u.head) : "assets/photos/default.jpg");
      return `
        <div class="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-3 executive-card shadow-2xs hover:border-emerald-300 transition relative">
          ${renderCardEditButton({ targetType: 'koko_sub', targetId: 'uniformUnits', subId: idx, name: u.head, role: u.name, extra: u.members, photo: u.photo })}
          <div class="flex items-center gap-3 min-w-0">
            <div class="w-11 h-11 rounded-xl overflow-hidden shrink-0 shadow-sm border border-emerald-200 bg-slate-100">
              <img src="${photo}" alt="${u.head}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='assets/photos/default.jpg'">
            </div>
            <div class="min-w-0">
              <div class="flex items-center gap-1.5">
                <span class="text-sm">${u.icon}</span>
                <h5 class="font-extrabold text-slate-900 text-xs sm:text-sm truncate">${u.name}</h5>
              </div>
              <p class="text-[11px] text-slate-500 truncate">${u.members}</p>
            </div>
          </div>
          <div class="text-right shrink-0">
            <span class="text-[10px] text-emerald-700 block font-bold uppercase tracking-wider">Ketua Guru:</span>
            <strong class="text-xs text-slate-900 font-extrabold block truncate max-w-[140px]">${u.head}</strong>
          </div>
        </div>
      `;
    }).join("");
  }

  // 2. Kelab & Persatuan
  const clubsContainer = document.getElementById("kokoClubsGrid");
  if (clubsContainer && koko.clubUnits) {
    clubsContainer.innerHTML = koko.clubUnits.map((c, idx) => {
      const photo = c.photo || (window.getStaffPhoto ? window.getStaffPhoto(c.head) : "assets/photos/default.jpg");
      return `
        <div class="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-3 executive-card shadow-2xs hover:border-blue-300 transition relative">
          ${renderCardEditButton({ targetType: 'koko_sub', targetId: 'clubUnits', subId: idx, name: c.head, role: c.name, extra: c.field, photo: c.photo })}
          <div class="flex items-center gap-3 min-w-0">
            <div class="w-11 h-11 rounded-xl overflow-hidden shrink-0 shadow-sm border border-blue-200 bg-slate-100">
              <img src="${photo}" alt="${c.head}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='assets/photos/default.jpg'">
            </div>
            <div class="min-w-0">
              <div class="flex items-center gap-1.5">
                <span class="text-sm">${c.icon}</span>
                <h5 class="font-extrabold text-slate-900 text-xs sm:text-sm truncate">${c.name}</h5>
              </div>
              <p class="text-[11px] text-slate-500 truncate">${c.field}</p>
            </div>
          </div>
          <div class="text-right shrink-0">
            <span class="text-[10px] text-blue-700 block font-bold uppercase tracking-wider">Ketua Guru:</span>
            <strong class="text-xs text-slate-900 font-extrabold block truncate max-w-[140px]">${c.head}</strong>
          </div>
        </div>
      `;
    }).join("");
  }

  // 3. Sukan & Permainan (1M1S)
  const sportsContainer = document.getElementById("kokoSportsGrid");
  if (sportsContainer && koko.sportsUnits) {
    sportsContainer.innerHTML = koko.sportsUnits.map((s, idx) => {
      const photo = s.photo || (window.getStaffPhoto ? window.getStaffPhoto(s.head) : "assets/photos/default.jpg");
      return `
        <div class="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-3 executive-card shadow-2xs hover:border-amber-300 transition relative">
          ${renderCardEditButton({ targetType: 'koko_sub', targetId: 'sportsUnits', subId: idx, name: s.head, role: s.name, extra: s.field, photo: s.photo })}
          <div class="flex items-center gap-3 min-w-0">
            <div class="w-11 h-11 rounded-xl overflow-hidden shrink-0 shadow-sm border border-amber-200 bg-slate-100">
              <img src="${photo}" alt="${s.head}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='assets/photos/default.jpg'">
            </div>
            <div class="min-w-0">
              <div class="flex items-center gap-1.5">
                <span class="text-sm">${s.icon}</span>
                <h5 class="font-extrabold text-slate-900 text-xs sm:text-sm truncate">${s.name}</h5>
              </div>
              <p class="text-[11px] text-slate-500 truncate">${s.field}</p>
            </div>
          </div>
          <div class="text-right shrink-0">
            <span class="text-[10px] text-amber-700 block font-bold uppercase tracking-wider">Ketua Guru:</span>
            <strong class="text-xs text-slate-900 font-extrabold block truncate max-w-[140px]">${s.head}</strong>
          </div>
        </div>
      `;
    }).join("");
  }

  // 4. Rumah Sukan
  const housesContainer = document.getElementById("kokoHousesGrid");
  if (housesContainer && koko.sportHouses) {
    const colorMap = {
      blue: "border-blue-300 bg-blue-50/50 text-blue-900",
      red: "border-rose-300 bg-rose-50/50 text-rose-900",
      purple: "border-purple-300 bg-purple-50/50 text-purple-900",
      amber: "border-amber-300 bg-amber-50/50 text-amber-900",
      emerald: "border-emerald-300 bg-emerald-50/50 text-emerald-900"
    };
    housesContainer.innerHTML = koko.sportHouses.map((h, idx) => {
      const photo = h.photo || (window.getStaffPhoto ? window.getStaffPhoto(h.head) : "assets/photos/default.jpg");
      return `
        <div class="p-3.5 rounded-xl border ${colorMap[h.color] || 'border-slate-200 bg-slate-50'} executive-card flex flex-col justify-between shadow-2xs relative">
          ${renderCardEditButton({ targetType: 'koko_sub', targetId: 'sportHouses', subId: idx, name: h.head, role: h.name, extra: h.motto, photo: h.photo })}
          <div>
            <div class="flex items-center justify-between mb-1">
              <h5 class="font-extrabold text-sm">${h.name}</h5>
              <span class="text-xs font-mono font-bold">🚩</span>
            </div>
            <p class="text-[11px] text-slate-600 italic">“${h.motto}”</p>
          </div>
          <div class="mt-3 pt-2.5 border-t border-black/10 flex items-center justify-between gap-2">
            <div class="flex items-center gap-2 min-w-0">
              <div class="w-9 h-9 rounded-lg overflow-hidden shrink-0 shadow-2xs border border-slate-300 bg-white">
                <img src="${photo}" alt="${h.head}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='assets/photos/default.jpg'">
              </div>
              <div class="min-w-0">
                <span class="text-[9px] text-slate-500 block font-bold uppercase">Ketua Rumah:</span>
                <strong class="font-extrabold text-xs block truncate">${h.head}</strong>
              </div>
            </div>
            <div class="text-right shrink-0">
              <span class="text-[10px] text-slate-500 block font-medium">Kedudukan:</span>
              <span class="font-black text-sm text-amber-700">${h.standing && h.standing !== '—' ? '#' + h.standing : '—'}</span>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }
}

/* ==========================================================================
   PENYELARASAN LANGSUNG KOT 26 (SK RANGGU SPORTSYNC)
   Rujukan Rasmi: https://fikreyxcode.github.io/kejohanan-olahraga-skrg/data.json
   Formula Mata: Emas (7) • Perak (5) • Gangsa (3) • Ke-4 (1)
   ========================================================================== */
async function syncWithKOT26(forceReload = false) {
  const syncBadge = document.getElementById("kotSyncStatusText");
  const syncBtn = document.getElementById("kotSyncRefreshBtn");

  if (syncBadge) {
    syncBadge.innerHTML = `<span class="inline-block animate-spin mr-1">🔄</span> Menghubungkan ke portal KOT 26...`;
    syncBadge.className = "text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-300";
  }
  if (syncBtn) {
    syncBtn.disabled = true;
    syncBtn.classList.add("opacity-50");
  }

  try {
    const url = "https://fikreyxcode.github.io/kejohanan-olahraga-skrg/data.json" + (forceReload ? `?t=${Date.now()}` : `?t=${Date.now()}`);
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP status: ${response.status}`);
    const liveData = await response.json();

    const year2026 = liveData?.years?.["2026"] || {};
    const results = Array.isArray(year2026.results) ? year2026.results : [];
    const housesData = year2026.houses || {};

    // Kira murid berdaftar & penyertaan dari portal KOT 26
    let totalMembers = 0;
    let totalParticipants = 0;
    Object.values(housesData).forEach(h => {
      if (Array.isArray(h.members)) totalMembers += h.members.length;
      if (Array.isArray(h.participants)) totalParticipants += h.participants.length;
    });

    // Susunan rasmi KOT 26: Biru, Kuning, Ungu, Merah
    const houseStats = {
      Biru: { id: "Biru", name: "Rumah Biru", color: "#246bfd", gold: 0, silver: 0, bronze: 0, fourth: 0, points: 0 },
      Kuning: { id: "Kuning", name: "Rumah Kuning", color: "#e5ad00", gold: 0, silver: 0, bronze: 0, fourth: 0, points: 0 },
      Ungu: { id: "Ungu", name: "Rumah Ungu", color: "#6d36d8", gold: 0, silver: 0, bronze: 0, fourth: 0, points: 0 },
      Merah: { id: "Merah", name: "Rumah Merah", color: "#df3f47", gold: 0, silver: 0, bronze: 0, fourth: 0, points: 0 }
    };

    // Kira pungutan pingat jika acara telah direkodkan dalam portal rasmi KOT 26
    results.forEach(res => {
      const hId = (res.house || res.houseName || "").toString().trim().toLowerCase();
      const matchedKey = Object.keys(houseStats).find(k => hId.includes(k.toLowerCase()));
      if (matchedKey) {
        const place = parseInt(res.place || res.position || res.kedudukan, 10);
        if (place === 1) houseStats[matchedKey].gold += 1;
        else if (place === 2) houseStats[matchedKey].silver += 1;
        else if (place === 3) houseStats[matchedKey].bronze += 1;
        else if (place === 4) houseStats[matchedKey].fourth += 1;
      }
    });

    let overallPoints = 0;
    Object.values(houseStats).forEach(h => {
      h.points = (h.gold * 7) + (h.silver * 5) + (h.bronze * 3) + (h.fourth * 1);
      overallPoints += h.points;
    });

    const hasAnyPoints = Object.values(houseStats).some(h => h.points > 0);

    const sortedHouses = Object.values(houseStats).sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.gold !== a.gold) return b.gold - a.gold;
      if (b.silver !== a.silver) return b.silver - a.silver;
      return b.bronze - a.bronze;
    });

    // Kemas kini ke dalam struktur data sportsyncKOT26
    if (!window.SKR_DATA.sportsyncKOT26) window.SKR_DATA.sportsyncKOT26 = {};
    if (!window.SKR_DATA.sportsyncKOT26.stats) window.SKR_DATA.sportsyncKOT26.stats = {};

    window.SKR_DATA.sportsyncKOT26.stats.registeredStudents = totalMembers;
    window.SKR_DATA.sportsyncKOT26.stats.officialResults = results.length;
    window.SKR_DATA.sportsyncKOT26.stats.completedEntries = totalParticipants;
    window.SKR_DATA.sportsyncKOT26.stats.totalPoints = overallPoints;
    window.SKR_DATA.sportsyncKOT26.liveSyncedWithKOT26 = true;

    if (window.SKR_DATA?.sportsyncKOT26?.houses) {
      window.SKR_DATA.sportsyncKOT26.houses.forEach(h => {
        const stat = houseStats[h.id];
        if (stat) {
          h.gold = stat.gold;
          h.silver = stat.silver;
          h.bronze = stat.bronze;
          h.fourth = stat.fourth;
          h.points = stat.points;
          if (hasAnyPoints) {
            const rank = sortedHouses.findIndex(item => item.id === h.id) + 1;
            h.standing = rank;
            h.status = rank === 1 ? "MENDAHULUI 🏆" : (rank === 2 ? "TEMPAT KE-2 🥈" : (rank === 3 ? "TEMPAT KE-3 🥉" : "TEMPAT KE-4"));
          } else {
            h.standing = "—";
            h.status = "MENANTI KEPUTUSAN ACARA";
          }
        }
      });
    }

    // Kemas kini ke dalam struktur sportHouses
    if (window.SKR_DATA?.sportHouses) {
      window.SKR_DATA.sportHouses.forEach(sh => {
        const matchKey = Object.keys(houseStats).find(k => sh.name.toLowerCase().includes(k.toLowerCase()));
        if (matchKey) {
          const stat = houseStats[matchKey];
          sh.points = stat.points;
          sh.standing = hasAnyPoints ? (sortedHouses.findIndex(item => item.id === matchKey) + 1) : "—";
        }
      });
    }

    // Simpan data terselaras ke LocalStorage
    saveStoredData(window.SKR_DATA);

    renderSportsyncSection();
    if (typeof renderKokoHierarchy === "function") renderKokoHierarchy();

    if (syncBadge) {
      const timeStr = new Date().toLocaleTimeString("ms-MY");
      if (hasAnyPoints) {
        syncBadge.innerHTML = `🟢 KOT 26 Terselaras: ${results.length} Acara Dikemas Kini (${timeStr})`;
        syncBadge.className = "text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300";
      } else {
        syncBadge.innerHTML = `🟢 Terselaras dengan KOT 26: 0 Keputusan • 0 Mata (${timeStr})`;
        syncBadge.className = "text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 border border-blue-300";
      }
    }
  } catch (err) {
    console.warn("Penyelarasan KOT 26 mod luar talian:", err);
    if (syncBadge) {
      syncBadge.innerHTML = `🟢 KOT 26: Data Rasmi 0 Mata (Menanti Temasya 2026)`;
      syncBadge.className = "text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200";
    }
  } finally {
    if (syncBtn) {
      syncBtn.disabled = false;
      syncBtn.classList.remove("opacity-50");
    }
  }
}
window.syncWithKOT26 = syncWithKOT26;

/* ==========================================================================
   RENDER SEKSYEN SK RANGGU SPORTSYNC • KEJOHANAN OLAHRAGA TAHUNAN 2026 (KOT 26)
   ========================================================================== */
function renderSportsyncSection() {
  const kot = window.SKR_DATA.sportsyncKOT26;
  if (!kot) return;

  // 0. Kemas kini 4 kad ringkasan statistik rasmi KOT 26
  const kotMemberEl = document.getElementById("kotMemberCount");
  const kotResultEl = document.getElementById("kotResultCount");
  const kotPartEl = document.getElementById("kotParticipantCount");
  const kotTotalPtsEl = document.getElementById("kotTotalPointsCount");
  if (kotMemberEl) kotMemberEl.textContent = kot.stats?.registeredStudents ?? 0;
  if (kotResultEl) kotResultEl.textContent = kot.stats?.officialResults ?? 0;
  if (kotPartEl) kotPartEl.textContent = kot.stats?.completedEntries ?? 0;
  if (kotTotalPtsEl) kotTotalPtsEl.textContent = `${kot.stats?.totalPoints ?? 0} Mata`;

  // 1. Kad Kedudukan 4 Rumah Sukan
  const medalsGrid = document.getElementById("kotMedalsGridContainer");
  if (medalsGrid && kot.houses) {
    const borderStyles = {
      Merah: "border-rose-300 bg-gradient-to-br from-white via-white to-rose-50/70 text-slate-800",
      Ungu: "border-purple-300 bg-gradient-to-br from-white via-white to-purple-50/70 text-slate-800",
      Biru: "border-blue-300 bg-gradient-to-br from-white via-white to-blue-50/70 text-slate-800",
      Kuning: "border-amber-300 bg-gradient-to-br from-white via-white to-amber-50/70 text-slate-800"
    };
    const badgeColors = {
      Merah: "bg-rose-100 text-rose-800 border-rose-300",
      Ungu: "bg-purple-100 text-purple-800 border-purple-300",
      Biru: "bg-blue-100 text-blue-800 border-blue-300",
      Kuning: "bg-amber-100 text-amber-800 border-amber-300"
    };
    const pillGradients = {
      Merah: "from-rose-600 to-red-700",
      Ungu: "from-purple-600 to-indigo-700",
      Biru: "from-blue-600 to-cyan-700",
      Kuning: "from-amber-500 to-yellow-600"
    };

    medalsGrid.innerHTML = kot.houses.map((h, idx) => {
      const bColor = badgeColors[h.id] || "bg-slate-100 text-slate-700 border-slate-200";
      const bStyle = borderStyles[h.id] || "border-slate-200 bg-white";
      const grad = pillGradients[h.id] || "from-slate-700 to-slate-900";
      const hasRank = h.standing && h.standing !== "—";

      return `
        <div class="p-5 rounded-2xl border-2 ${bStyle} shadow-sm hover:shadow-md transition flex flex-col justify-between executive-card relative">
          ${renderCardEditButton({ targetType: 'koko_sub', targetId: 'sportHouses', subId: idx, name: h.leadTeacher, role: h.name, extra: h.motto, photo: h.leadPhoto })}
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs font-black px-2.5 py-0.5 rounded-full ${hasRank ? bColor : 'bg-slate-100 text-slate-600 border-slate-200'} border">
                ${hasRank ? `KEDUDUKAN #${h.standing}` : 'MENANTI ACARA'}
              </span>
              <span class="text-[11px] font-bold text-slate-500">${h.status}</span>
            </div>

            <div class="flex items-center gap-2.5">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br ${grad} text-white flex items-center justify-center font-bold text-sm shadow">
                ${h.name.replace("Rumah ", "").substring(0, 1)}
              </div>
              <div>
                <h4 class="font-extrabold text-base text-slate-900">${h.name}</h4>
                <p class="text-[11px] text-slate-500 italic">“${h.motto}”</p>
              </div>
            </div>

            <div class="mt-4 p-3 rounded-xl bg-white/90 border border-slate-200/80 shadow-2xs">
              <div class="flex items-center justify-between text-xs mb-2">
                <span class="text-slate-500 font-medium">Jumlah Mata:</span>
                <span class="text-lg font-extrabold text-slate-900 font-mono">${h.points || 0} mata</span>
              </div>
              <div class="grid grid-cols-4 gap-1 text-center text-[10px] pt-2 border-t border-slate-100">
                <div class="p-1 rounded bg-amber-50 text-amber-800 font-bold">🥇 ${h.gold || 0}</div>
                <div class="p-1 rounded bg-slate-100 text-slate-700 font-bold">🥈 ${h.silver || 0}</div>
                <div class="p-1 rounded bg-amber-100 text-amber-900 font-bold">🥉 ${h.bronze || 0}</div>
                <div class="p-1 rounded bg-slate-50 text-slate-500 font-medium">4️⃣ ${h.fourth || 0}</div>
              </div>
            </div>
          </div>

          <div class="mt-4 pt-2.5 border-t border-black/10 text-xs flex items-center gap-2.5">
            <img src="${h.leadPhoto || (window.getStaffPhoto ? window.getStaffPhoto(h.leadTeacher) : 'assets/photos/default.jpg')}" 
                 alt="${h.leadTeacher}" 
                 class="w-10 h-10 rounded-full object-cover border-2 border-slate-300 shadow-2xs shrink-0" 
                 onerror="this.onerror=null;this.src='assets/photos/default.jpg'">
            <div class="min-w-0 flex-1">
              <span class="text-[10px] text-slate-500 block font-medium">Ketua Guru:</span>
              <strong class="text-slate-900 font-bold text-xs truncate block">${h.leadTeacher}</strong>
              <span class="text-[10px] text-slate-500 mt-0.5 block">${h.teachers ? h.teachers.length : 10} Guru Pembimbing</span>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  // 2. Jadual Pungutan Pingat Lengkap
  const tableBody = document.getElementById("kotMedalTableBody");
  if (tableBody && kot.houses) {
    tableBody.innerHTML = kot.houses.map(h => {
      const totalMedals = (h.gold || 0) + (h.silver || 0) + (h.bronze || 0);
      const isJuara = h.standing === 1 && (h.points > 0);
      const hasRank = h.standing && h.standing !== "—";

      return `
        <tr class="hover:bg-slate-50 transition ${isJuara ? 'bg-amber-50/50 font-semibold' : ''}">
          <td class="py-3 px-4 text-center font-bold">
            ${isJuara ? '👑 1' : (hasRank ? h.standing : '—')}
          </td>
          <td class="py-3 px-4">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full" style="background-color: ${h.color};"></span>
              <strong class="text-slate-900">${h.name}</strong>
            </div>
          </td>
          <td class="py-3 px-4 text-slate-700 text-xs">
            <div class="flex items-center gap-2">
              <img src="${h.leadPhoto || (window.getStaffPhoto ? window.getStaffPhoto(h.leadTeacher) : 'assets/photos/default.jpg')}" 
                   alt="${h.leadTeacher}" 
                   class="w-7 h-7 rounded-full object-cover border border-slate-200 shrink-0" 
                   onerror="this.onerror=null;this.src='assets/photos/default.jpg'">
              <span>${h.leadTeacher}</span>
            </div>
          </td>
          <td class="py-3 px-4 text-center font-bold text-amber-600 bg-amber-50/40">${h.gold || 0}</td>
          <td class="py-3 px-4 text-center font-bold text-slate-600 bg-slate-100/50">${h.silver || 0}</td>
          <td class="py-3 px-4 text-center font-bold text-amber-800 bg-amber-100/40">${h.bronze || 0}</td>
          <td class="py-3 px-4 text-center text-slate-500">${h.fourth || 0}</td>
          <td class="py-3 px-4 text-center font-mono font-bold text-slate-800">${totalMedals}</td>
          <td class="py-3 px-4 text-right font-mono font-extrabold text-blue-900 text-sm">${h.points || 0}</td>
          <td class="py-3 px-4 text-center">
            <span class="px-2 py-0.5 rounded text-[10px] font-bold ${isJuara ? 'bg-amber-400 text-slate-950 shadow-sm' : 'bg-slate-100 text-slate-600'}">
              ${h.status}
            </span>
          </td>
        </tr>
      `;
    }).join("");
  }

  // 3. Anugerah Olahragawan & Olahragawati
  const awardsContainer = document.getElementById("kotAwardsContainer");
  if (awardsContainer && kot.awards) {
    awardsContainer.innerHTML = kot.awards.map(a => `
      <div class="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 flex flex-col justify-between hover:bg-white/15 transition">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-2xl">${a.icon}</span>
            <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${a.points > 0 ? 'bg-amber-500/30 text-amber-300 border border-amber-400/30' : 'bg-white/20 text-slate-200 border border-white/20'}">
              ${a.points > 0 ? `${a.points} Mata` : 'Menanti Acara'}
            </span>
          </div>
          <span class="text-[10px] uppercase font-bold tracking-wider text-amber-300 block">${a.category}</span>
          <h4 class="font-extrabold text-sm text-white mt-0.5 leading-snug">${a.athlete}</h4>
          <p class="text-xs text-slate-300 mt-1">${a.cohort}</p>
          <div class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-bold mt-2 text-white shadow-2xs" style="background-color: ${a.houseColor || '#475569'};">
            <span>🏟️</span> ${a.house}
          </div>
        </div>
        <div class="mt-3 pt-2.5 border-t border-white/10 text-xs text-slate-300 font-medium">
          ${a.achievements}
        </div>
      </div>
    `).join("");
  }

  // 4. Struktur Acara Balapan & Padang
  const eventsContainer = document.getElementById("kotEventsGridContainer");
  if (eventsContainer && kot.categories) {
    eventsContainer.innerHTML = kot.categories.map(c => `
      <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5 executive-card">
        <div class="flex items-center justify-between border-b border-slate-200/80 pb-2">
          <div>
            <span class="text-[10px] font-extrabold uppercase text-slate-500 tracking-wider">${c.code} • ${c.stage}</span>
            <h5 class="font-bold text-sm text-royal-900">${c.cohort}</h5>
          </div>
          <span class="text-xs font-mono font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
            ${c.events.length} Acara
          </span>
        </div>
        <div class="flex flex-wrap gap-1.5 pt-1">
          ${c.events.map(ev => `
            <span class="text-[11px] px-2 py-1 rounded bg-white border border-slate-200 text-slate-700 font-medium shadow-2xs">
              🏃 ${ev}
            </span>
          `).join("")}
        </div>
      </div>
    `).join("");
  }
}

/* ==========================================================================
   MODAL SUPER-VIEWER & PUSAT NAVIGASI PORTAL LUARAN DENGAN JAMINAN KEMBALI
   (HEM SMARTTRACK, HEM SMARTDISIPLIN, KOT 26 SPORTSYNC)
   ========================================================================== */

function switchHemModalTab(view = 'attendance') {
  const iframe = document.getElementById("hemSmartTrackIframe");
  if (!iframe) return;

  const btnEjkm = document.getElementById("hemTabEjkm");
  const btnDisiplin = document.getElementById("hemTabDisiplin");
  const btnStaff = document.getElementById("hemTabStaff");
  const btnHome = document.getElementById("hemTabHome");

  const normalClass = "px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-bold transition bg-white/10 hover:bg-white/20 text-slate-200 flex items-center gap-1 whitespace-nowrap cursor-pointer";
  const activeEjkmClass = "px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-bold transition bg-emerald-600 text-white shadow-sm flex items-center gap-1 whitespace-nowrap cursor-pointer ring-2 ring-emerald-400/50";
  const activeDisiplinClass = "px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-bold transition bg-amber-500 text-slate-950 shadow-sm flex items-center gap-1 whitespace-nowrap cursor-pointer ring-2 ring-amber-300/80 font-black";

  [btnEjkm, btnDisiplin, btnStaff, btnHome].forEach(b => {
    if (b) b.className = normalClass;
  });

  let targetUrl = "https://fikreyxcode.github.io/sistemkehadiranskrg/#e-jkm";

  if (view === "duty" || view === "disiplin" || view === "smartdisiplin") {
    targetUrl = "https://fikreyxcode.github.io/sistemkehadiranskrg/#guru-bertugas";
    if (btnDisiplin) btnDisiplin.className = activeDisiplinClass;
  } else if (view === "staff" || view === "keberadaan") {
    targetUrl = "https://fikreyxcode.github.io/sistemkehadiranskrg/#keberadaan-guru-akp";
    if (btnStaff) btnStaff.className = activeEjkmClass;
  } else if (view === "home" || view === "utama") {
    targetUrl = "https://fikreyxcode.github.io/sistemkehadiranskrg/#utama";
    if (btnHome) btnHome.className = activeEjkmClass;
  } else {
    targetUrl = "https://fikreyxcode.github.io/sistemkehadiranskrg/#e-jkm";
    if (btnEjkm) btnEjkm.className = activeEjkmClass;
  }

  if (iframe.src !== targetUrl) {
    iframe.src = targetUrl;
  }
}

function reloadHemIframe() {
  const iframe = document.getElementById("hemSmartTrackIframe");
  if (iframe) {
    const cur = iframe.src || "https://fikreyxcode.github.io/sistemkehadiranskrg/";
    iframe.src = "about:blank";
    setTimeout(() => { iframe.src = cur; }, 120);
    if (window.showToastNotification) {
      window.showToastNotification("Memuat semula paparan HEM SmartTrack...", "info");
    }
  }
}

function openHemSmartTrackModal(view = 'attendance') {
  const modal = document.getElementById("hemSmartTrackModal");
  if (modal) {
    modal.classList.remove("hidden");
    modal.style.display = "flex";
    document.body.classList.add("overflow-hidden");

    switchHemModalTab(view);

    try {
      history.pushState({ modalOpen: 'hemSmartTrackModal' }, '', view === 'duty' ? '#portal-smartdisiplin' : '#portal-hemsmarttrack');
    } catch(e) {}
  }
}

function closeHemSmartTrackModal() {
  const modal = document.getElementById("hemSmartTrackModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.style.display = "none";
    document.body.classList.remove("overflow-hidden");

    if (window.location.hash.includes('portal-')) {
      try {
        history.replaceState(null, '', window.location.pathname + window.location.search);
      } catch(e) {}
    }

    if (window.showToastNotification) {
      window.showToastNotification("← Anda kembali ke Papan Induk Utama SK Ranggu", "success");
    }
  }
}

function openSmartDisiplinModal() {
  openHemSmartTrackModal('duty');
}

function switchKotModalTab(view = 'dashboard') {
  const iframe = document.getElementById("kotPreviewIframe");
  if (!iframe) return;

  const btnDash = document.getElementById("kotTabDashboard");
  const btnPingat = document.getElementById("kotTabPingat");
  const btnSaringan = document.getElementById("kotTabSaringan");
  const btnRumah = document.getElementById("kotTabRumah");

  const normalClass = "px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-bold transition bg-white/10 hover:bg-white/20 text-slate-200 flex items-center gap-1 whitespace-nowrap cursor-pointer";
  const activeClass = "px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-bold transition bg-indigo-600 text-white shadow-sm flex items-center gap-1 whitespace-nowrap cursor-pointer ring-2 ring-indigo-400/50 font-black";

  [btnDash, btnPingat, btnSaringan, btnRumah].forEach(b => {
    if (b) b.className = normalClass;
  });

  let targetUrl = "https://fikreyxcode.github.io/kejohanan-olahraga-skrg/index.html?tahun=2026";

  if (view === "pingat" || view === "medals") {
    targetUrl = "https://fikreyxcode.github.io/kejohanan-olahraga-skrg/pingat.html?tahun=2026";
    if (btnPingat) btnPingat.className = activeClass;
  } else if (view === "saringan" || view === "carta") {
    targetUrl = "https://fikreyxcode.github.io/kejohanan-olahraga-skrg/saringan.html?tahun=2026";
    if (btnSaringan) btnSaringan.className = activeClass;
  } else if (view === "rumah" || view === "houses") {
    targetUrl = "https://fikreyxcode.github.io/kejohanan-olahraga-skrg/rumah-sukan.html?tahun=2026";
    if (btnRumah) btnRumah.className = activeClass;
  } else {
    targetUrl = "https://fikreyxcode.github.io/kejohanan-olahraga-skrg/index.html?tahun=2026";
    if (btnDash) btnDash.className = activeClass;
  }

  if (iframe.src !== targetUrl) {
    iframe.src = targetUrl;
  }
}

function reloadKotIframe() {
  const iframe = document.getElementById("kotPreviewIframe");
  if (iframe) {
    const cur = iframe.src || "https://fikreyxcode.github.io/kejohanan-olahraga-skrg/index.html?tahun=2026";
    iframe.src = "about:blank";
    setTimeout(() => { iframe.src = cur; }, 120);
    if (window.showToastNotification) {
      window.showToastNotification("Memuat semula portal KOT 26...", "info");
    }
  }
}

function openKotPreviewModal(view = 'dashboard') {
  const modal = document.getElementById("kotPreviewModal");
  if (modal) {
    modal.classList.remove("hidden");
    modal.style.display = "flex";
    document.body.classList.add("overflow-hidden");

    switchKotModalTab(view);

    try {
      history.pushState({ modalOpen: 'kotPreviewModal' }, '', '#portal-kot26');
    } catch(e) {}
  }
}

function closeKotPreviewModal() {
  const modal = document.getElementById("kotPreviewModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.style.display = "none";
    document.body.classList.remove("overflow-hidden");

    if (window.location.hash.includes('portal-')) {
      try {
        history.replaceState(null, '', window.location.pathname + window.location.search);
      } catch(e) {}
    }

    if (window.showToastNotification) {
      window.showToastNotification("← Anda kembali ke Papan Induk Utama SK Ranggu", "success");
    }
  }
}

function notifyExternalTabOpen(portalName) {
  let toast = document.getElementById("externalTabNoticeToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "externalTabNoticeToast";
    toast.className = "fixed bottom-5 left-1/2 transform -translate-x-1/2 z-[100] max-w-xl w-[94%] bg-slate-950/95 text-white p-4 rounded-2xl border-2 border-amber-400 shadow-2xl backdrop-blur-md flex items-start gap-3 animate-fadeIn";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <div class="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-xl shrink-0">
      <span>ℹ️</span>
    </div>
    <div class="flex-1 text-xs">
      <div class="flex items-center gap-2">
        <h4 class="font-extrabold text-amber-300 text-sm">Portal ${portalName || 'Luaran'} Dibuka di Tab Baharu</h4>
        <span class="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">Papan Induk Kekal Aktif</span>
      </div>
      <p class="text-slate-300 mt-1 leading-relaxed">
        Anda sedang melihat portal luaran. Tab Papan Induk Utama SK Ranggu (<strong class="text-amber-200 font-mono">momon-ux.github.io/sk-ranggu-dashboard</strong>) sentiasa aktif dalam tab penyemak imbas ini untuk anda kembali pada bila-bila masa.
      </p>
      <div class="mt-2.5 flex items-center gap-2">
        <button type="button" onclick="this.closest('#externalTabNoticeToast').remove()" class="px-3 py-1 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300 transition cursor-pointer">
          Faham & Teruskan
        </button>
      </div>
    </div>
    <button type="button" onclick="this.closest('#externalTabNoticeToast').remove()" class="text-slate-400 hover:text-white p-1 text-base cursor-pointer">✕</button>
  `;
  setTimeout(() => {
    if (toast && toast.parentElement) toast.remove();
  }, 9000);
}

window.switchHemModalTab = switchHemModalTab;
window.reloadHemIframe = reloadHemIframe;
window.openHemSmartTrackModal = openHemSmartTrackModal;
window.closeHemSmartTrackModal = closeHemSmartTrackModal;
window.openSmartDisiplinModal = openSmartDisiplinModal;
window.switchKotModalTab = switchKotModalTab;
window.reloadKotIframe = reloadKotIframe;
window.openKotPreviewModal = openKotPreviewModal;
window.closeKotPreviewModal = closeKotPreviewModal;
window.notifyExternalTabOpen = notifyExternalTabOpen;

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
      { key: "pengerusi", role: "Penolong Kanan Petang", name: petang.pengerusi, photo: petang.pengerusiPhoto, badge: "Peneraju Petang", icon: "👑" },
      { key: "penyelarasTahap1", role: "Penyelaras Tahap 1", name: petang.penyelarasTahap1, photo: petang.penyelarasTahap1Photo, badge: "Akademik Tahap 1", icon: "🧒" },
      { key: "penyelarasJadual", role: "Penyelaras Jadual Waktu", name: petang.penyelarasJadual, photo: petang.penyelarasJadualPhoto, badge: "Jadual Petang", icon: "📅" },
      { key: "penyelarasDisiplin", role: "Penyelaras Disiplin & Keselamatan", name: petang.penyelarasDisiplin, photo: petang.penyelarasDisiplinPhoto, badge: "Disiplin & Pintu Pagar", icon: "🛡️" },
      { key: "penyelarasTransisi", role: "Penyelaras Transisi Tahun 1", name: petang.penyelarasTransisi, photo: petang.penyelarasTransisiPhoto, badge: "Transisi Murid", icon: "🌱" }
    ];

    officersContainer.innerHTML = officers.map(o => {
      const photoSrc = o.photo || (window.getStaffPhoto ? window.getStaffPhoto(o.name) : 'assets/photos/default.jpg');
      return `
      <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 executive-card relative">
        ${renderCardEditButton({ targetType: 'petang_officer', targetId: o.key, name: o.name, role: o.role, extra: o.badge, photo: o.photo })}
        <div class="flex items-center gap-3 min-w-0">
          <img src="${photoSrc}" 
               alt="${o.name}" 
               class="w-11 h-11 rounded-full object-cover border-2 border-amber-400 shadow-2xs shrink-0" 
               onerror="this.onerror=null;this.src='assets/photos/default.jpg'">
          <div class="min-w-0">
            <span class="text-[10px] font-bold uppercase tracking-wider text-amber-800 block">${o.icon} ${o.role}</span>
            <h5 class="font-bold text-slate-900 text-xs sm:text-sm truncate">${o.name}</h5>
          </div>
        </div>
        <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 shrink-0">
          ${o.badge}
        </span>
      </div>
    `;
    }).join("");
  }
}

/* ==========================================================================
   RENDER PORTAL DIGITAL & MEDIA SOSIAL RASMI
   ========================================================================== */
function renderPortalAndSocial() {
  const portalsContainer = document.getElementById("portalsGridContainer");
  if (portalsContainer) {
    const portals = window.SKR_DATA.externalPortals || window.SKR_DATA.portalLinks || [];
    portalsContainer.innerHTML = portals.map(p => {
      const isHem = (p.id && (p.id.includes("kehadiran") || p.id.includes("hemsmarttrack"))) || (p.name && p.name.includes("HEM SMARTTRACK"));
      const isDisiplin = (p.id && p.id.includes("smartdisiplin")) || (p.name && p.name.includes("SMARTDISIPLIN"));
      const isKot = (p.id && (p.id.includes("sportsync") || p.id.includes("kot"))) || (p.name && p.name.includes("KOT"));

      let borderStyle = 'border-slate-200 bg-slate-50';
      let badgeStyle = 'bg-blue-100 text-blue-800';
      if (isHem) {
        borderStyle = 'border-emerald-400 ring-2 ring-emerald-500/20 bg-emerald-50/30';
        badgeStyle = 'bg-emerald-100 text-emerald-800 border border-emerald-300';
      } else if (isDisiplin) {
        borderStyle = 'border-amber-400 ring-2 ring-amber-500/20 bg-amber-50/30';
        badgeStyle = 'bg-amber-100 text-amber-900 border border-amber-300';
      } else if (isKot) {
        borderStyle = 'border-indigo-400 ring-2 ring-indigo-500/20 bg-indigo-50/30';
        badgeStyle = 'bg-indigo-100 text-indigo-900 border border-indigo-300';
      }

      return `
        <div class="p-4 rounded-2xl border ${borderStyle} hover:border-blue-300 transition shadow-sm executive-card flex flex-col justify-between group">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded ${badgeStyle}">${p.badge || p.cat || 'Portal'}</span>
              <span class="text-xl">${p.icon || '🌐'}</span>
            </div>
            <h4 class="font-extrabold text-slate-900 group-hover:text-blue-700 transition text-sm">${p.name}</h4>
            <p class="text-xs text-slate-500 mt-1 leading-snug">${p.desc || p.description || ''}</p>
          </div>
          <div class="mt-3 pt-2 border-t border-slate-200/80 flex items-center justify-between gap-2 flex-wrap">
            <a href="${p.url}" target="_blank" rel="noopener noreferrer" onclick="window.notifyExternalTabOpen('${(p.name || 'Portal').replace(/'/g, "\\'")}')" class="text-xs text-blue-700 font-bold hover:underline flex items-center gap-1">
              <span>Buka Tab Asing</span>
              <span class="text-sm">↗</span>
            </a>
            ${isHem ? `
              <button type="button" onclick="window.openHemSmartTrackModal('attendance')" class="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] shadow-sm transition cursor-pointer">
                Papan Induk
              </button>
            ` : isDisiplin ? `
              <button type="button" onclick="window.openSmartDisiplinModal()" class="px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-[11px] shadow-sm transition cursor-pointer">
                Papan Induk
              </button>
            ` : isKot ? `
              <button type="button" onclick="window.openKotPreviewModal('dashboard')" class="px-2.5 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-[11px] shadow-sm transition cursor-pointer">
                Papan Induk
              </button>
            ` : ''}
          </div>
        </div>
      `;
    }).join("");
  }

  const socialContainer = document.getElementById("socialLinksGrid");
  if (socialContainer) {
    const socials = window.SKR_DATA.socialLinks || [];
    socialContainer.innerHTML = socials.map(s => {
      const isHem = s.id && (s.id.includes("kehadiran") || s.id.includes("hemsmarttrack"));
      const isDisiplin = s.id && s.id.includes("smartdisiplin");
      const isKot = s.id && (s.id.includes("sportsync") || s.id.includes("kot"));

      let borderStyle = 'border-slate-200 bg-slate-50';
      let iconBg = s.color === 'blue' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-white';
      let badgeStyle = 'bg-slate-200 text-slate-700';

      if (isHem) {
        borderStyle = 'border-emerald-400 bg-emerald-50/40';
        iconBg = 'bg-emerald-600 text-white';
        badgeStyle = 'bg-emerald-100 text-emerald-800';
      } else if (isDisiplin) {
        borderStyle = 'border-amber-400 bg-amber-50/40';
        iconBg = 'bg-amber-500 text-slate-950 font-bold';
        badgeStyle = 'bg-amber-100 text-amber-900';
      } else if (isKot) {
        borderStyle = 'border-indigo-400 bg-indigo-50/40';
        iconBg = 'bg-indigo-700 text-white';
        badgeStyle = 'bg-indigo-100 text-indigo-800';
      }

      return `
        <div class="p-5 rounded-2xl border ${borderStyle} hover:border-blue-400 hover:bg-white transition shadow-sm executive-card flex items-start gap-4 group">
          <div class="w-12 h-12 rounded-2xl ${iconBg} flex items-center justify-center text-2xl shrink-0 shadow-md">
            ${s.icon}
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-1 flex-wrap">
              <span class="text-[10px] font-bold px-2 py-0.5 rounded ${badgeStyle} uppercase">${s.badge}</span>
              <span class="text-xs text-slate-400 font-medium">${s.platform}</span>
            </div>
            <h4 class="font-extrabold text-slate-900 group-hover:text-blue-700 transition text-base">${s.name}</h4>
            <p class="text-xs text-slate-500 mt-1 leading-relaxed">${s.desc}</p>
            <div class="mt-3 flex items-center gap-3 flex-wrap">
              ${isHem ? `
                <button type="button" onclick="window.openHemSmartTrackModal('attendance')" class="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition cursor-pointer">
                  Buka Dalam Papan Induk
                </button>
              ` : isDisiplin ? `
                <button type="button" onclick="window.openSmartDisiplinModal()" class="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-sm transition cursor-pointer">
                  Buka Dalam Papan Induk
                </button>
              ` : isKot ? `
                <button type="button" onclick="window.openKotPreviewModal('dashboard')" class="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition cursor-pointer">
                  Buka Dalam Papan Induk
                </button>
              ` : ''}
              <a href="${s.url}" target="_blank" rel="noopener noreferrer" onclick="window.notifyExternalTabOpen('${(s.name || 'Saluran').replace(/'/g, "\\'")}')" class="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-blue-600 hover:underline">
                <span>Tab Asing</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      `;
    }).join("");
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
   NAVIGASI TAB & PENUKARAN PAPARAN
   ========================================================================== */
function switchToTab(targetId) {
  if (!targetId) return;
  const tabButtons = document.querySelectorAll("[data-tab-target]");
  const tabSections = document.querySelectorAll(".tab-content-section");

  tabButtons.forEach(b => {
    if (b.getAttribute("data-tab-target") === targetId) {
      b.classList.add("bg-blue-900", "text-white", "font-bold", "shadow-sm");
      b.classList.remove("text-slate-600", "hover:bg-slate-100", "font-medium");
    } else {
      b.classList.remove("bg-blue-900", "text-white", "font-bold", "shadow-sm");
      b.classList.add("text-slate-600", "hover:bg-slate-100", "font-medium");
    }
  });

  tabSections.forEach(sec => {
    if (sec.id === targetId) {
      sec.classList.remove("hidden");
      sec.style.display = "block";
      try {
        if (targetId === "tab-murid") renderStudentDemographics();
        if (targetId === "tab-carta") renderOrganizationChart();
        if (targetId === "tab-hem") renderHemHierarchy();
        if (targetId === "tab-kokurikulum") renderKokoHierarchy();
        if (targetId === "tab-petang") renderPetangHierarchy();
        if (targetId === "tab-portal") renderPortalAndSocial();
        if (targetId === "tab-bahan") renderDocumentsList();
      } catch (err) {
        console.warn("Ralat lazy render tab:", err);
      }
    } else {
      sec.classList.add("hidden");
      sec.style.display = "none";
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}
window.switchToTab = switchToTab;

function setupNavigation() {
  const tabButtons = document.querySelectorAll("[data-tab-target]");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-tab-target");
      switchToTab(targetId);
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

  // Pendengar Modal HEM SmartTrack & KOT 26 (Tutup bila klik backdrop)
  const hemModal = document.getElementById("hemSmartTrackModal");
  if (hemModal) {
    hemModal.addEventListener("click", (e) => {
      if (e.target === hemModal) closeHemSmartTrackModal();
    });
  }

  const kotModal = document.getElementById("kotPreviewModal");
  if (kotModal) {
    kotModal.addEventListener("click", (e) => {
      if (e.target === kotModal) closeKotPreviewModal();
    });
  }

  // Pendengar butang 'Back' telefon bimbit / penyemak imbas (popstate)
  window.addEventListener("popstate", () => {
    if (hemModal && !hemModal.classList.contains("hidden") && hemModal.style.display !== "none") {
      closeHemSmartTrackModal();
      return;
    }
    if (kotModal && !kotModal.classList.contains("hidden") && kotModal.style.display !== "none") {
      closeKotPreviewModal();
      return;
    }
  });

  // Pendengar kekunci Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (hemModal && !hemModal.classList.contains("hidden") && hemModal.style.display !== "none") {
        closeHemSmartTrackModal();
      }
      if (kotModal && !kotModal.classList.contains("hidden") && kotModal.style.display !== "none") {
        closeKotPreviewModal();
      }
    }
  });
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
      adminModal.style.display = "flex";
      document.body.classList.add("overflow-hidden");
      if (window.adminManager.checkAuth()) {
        showAdminControlPanel();
      } else {
        showAdminLoginForm();
      }
    });
  }

  const closeAdminBtn = document.getElementById("btnCloseAdminModal");
  if (closeAdminBtn && adminModal) {
    closeAdminBtn.addEventListener("click", () => {
      adminModal.classList.add("hidden");
      adminModal.style.display = "none";
      document.body.classList.remove("overflow-hidden");
    });
  }

  if (adminLoginForm) {
    adminLoginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const pin = adminPinInput.value.trim();
      const result = window.adminManager.login(pin);
      if (result.success) {
        showAdminControlPanel();
        updateAdminUIState();
        refreshAllDashboardViews();
        showToastNotification("Selamat datang Pentadbir Ts.FIKREY37! Mod Suntingan Paparan telah Diaktifkan.", "success");
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
      updateAdminUIState();
      refreshAllDashboardViews();
      showToastNotification("Log keluar pentadbir berjaya.", "info");
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
  const s = window.SKR_DATA.school || {};
  const dt = (window.SKR_DATA.weeklyDutyTeachers && window.SKR_DATA.weeklyDutyTeachers[0]) || {};

  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val || "";
  };

  // 1. Profil Sekolah
  setVal("admSchoolName", s.name);
  setVal("admSchoolCode", s.code);
  setVal("admSchoolAddress", s.address);
  setVal("admSchoolPhone", s.phone);
  setVal("admSchoolEmail", s.email);
  setVal("admSchoolMotto", s.motto);
  setVal("admSchoolSession", s.academicSession);
  setVal("admSchoolLogoUrl", s.logoUrl || "");
  setVal("admKpmLogoUrl", s.kpmLogoUrl || "");

  const logoPreview = document.getElementById("admSchoolLogoPreview");
  if (logoPreview && s.logoUrl) logoPreview.src = s.logoUrl;
  const kpmPreview = document.getElementById("admKpmLogoPreview");
  if (kpmPreview && s.kpmLogoUrl) kpmPreview.src = s.kpmLogoUrl;

  // 2. Guru Bertugas
  setVal("admDutyWeek", dt.weekNumber || 28);
  setVal("admDutyDateRange", dt.dateRange || "");
  setVal("admDutyLeader", dt.leader || "");
  setVal("admDutyTheme", dt.theme || "");
  setVal("admDutyMembers", (dt.members || []).join(", "));

  // Render senarai berkaitan
  renderAdminStaffList();
  renderAdminDocList();
  renderAdminAnnounceList();
  renderAdminTakwimList();
}

/* ==========================================================================
   SUIS TAB PANEL ADMIN
   ========================================================================== */
window.toggleAdminPinVisibility = function() {
  const pinInput = document.getElementById("adminPinInput");
  if (!pinInput) return;
  pinInput.type = pinInput.type === "password" ? "text" : "password";
};

window.switchAdminTab = function(tabName) {
  // Padam aktif daripada semua butang
  document.querySelectorAll(".adm-subtab-btn").forEach(btn => {
    btn.classList.remove("bg-white", "text-royal-900", "shadow-sm", "font-bold");
    btn.classList.add("text-slate-600");
  });

  const activeBtn = document.getElementById(`admTabBtn-${tabName}`);
  if (activeBtn) {
    activeBtn.classList.add("bg-white", "text-royal-900", "shadow-sm", "font-bold");
    activeBtn.classList.remove("text-slate-600");
  }

  // Sembunyi semua seksyen
  document.querySelectorAll(".adm-section-pane").forEach(sec => sec.classList.add("hidden"));

  const activeSec = document.getElementById(`admSec-${tabName}`);
  if (activeSec) activeSec.classList.remove("hidden");

  if (tabName === "staff") renderAdminStaffList();
  if (tabName === "docs") renderAdminDocList();
  if (tabName === "announce") renderAdminAnnounceList();
  if (tabName === "takwim") renderAdminTakwimList();
};

/* ==========================================================================
   PENGURUSAN STAF / GURU OLEH ADMIN
   ========================================================================== */
window.filterAdminStaffList = function() {
  const query = document.getElementById("admStaffSearchInput")?.value || "";
  renderAdminStaffList(query);
};

window.toggleAddNewStaffForm = function() {
  const formBox = document.getElementById("addNewStaffCollapse");
  if (formBox) formBox.classList.toggle("hidden");
};

window.adminStaffFilterTab = "semua";

window.setAdminStaffFilterTab = function(tab) {
  window.adminStaffFilterTab = tab;
  const tabs = ["semua", "aktif", "nyahaktif"];
  tabs.forEach(t => {
    const btn = document.getElementById(`btnAdmFilterStaff-${t}`);
    if (btn) {
      if (t === tab) {
        btn.className = "px-3 py-1.5 rounded-lg bg-white text-royal-900 shadow-2xs font-bold transition whitespace-nowrap";
      } else {
        btn.className = "px-3 py-1.5 rounded-lg text-slate-600 hover:text-royal-900 transition font-medium whitespace-nowrap";
      }
    }
  });
  renderAdminStaffList(document.getElementById("admStaffSearchInput")?.value || "");
};

function renderAdminStaffList(filterText = "") {
  const listContainer = document.getElementById("admStaffListWrapper");
  const countBadge = document.getElementById("admStaffCountBadge");
  if (!listContainer) return;

  const staff = window.SKR_DATA.staffList || [];
  const activeStaff = staff.filter(s => s.isActive !== false && s.status !== "Nyahaktif" && s.status !== "Bersara / Pencen");
  const inactiveStaff = staff.filter(s => s.isActive === false || s.status === "Nyahaktif" || s.status === "Bersara / Pencen");

  // Kemas kini pembilang tab
  const elCountAll = document.getElementById("admCountAll");
  const elCountActive = document.getElementById("admCountActive");
  const elCountInactive = document.getElementById("admCountInactive");
  if (elCountAll) elCountAll.textContent = staff.length;
  if (elCountActive) elCountActive.textContent = activeStaff.length;
  if (elCountInactive) elCountInactive.textContent = inactiveStaff.length;

  let filtered = staff;
  if (window.adminStaffFilterTab === "aktif") {
    filtered = activeStaff;
  } else if (window.adminStaffFilterTab === "nyahaktif") {
    filtered = inactiveStaff;
  }

  if (filterText.trim() !== "") {
    const q = filterText.toLowerCase();
    filtered = filtered.filter(s => 
      (s.name && s.name.toLowerCase().includes(q)) ||
      (s.role && s.role.toLowerCase().includes(q)) ||
      (s.grade && s.grade.toLowerCase().includes(q)) ||
      (s.category && s.category.toLowerCase().includes(q)) ||
      (s.status && s.status.toLowerCase().includes(q))
    );
  }

  if (countBadge) {
    countBadge.textContent = `${filtered.length} Staf (${window.adminStaffFilterTab === 'aktif' ? 'Aktif' : (window.adminStaffFilterTab === 'nyahaktif' ? 'Nyahaktif' : 'Semua')})`;
  }

  if (filtered.length === 0) {
    listContainer.innerHTML = `<div class="p-6 text-center text-slate-400 bg-slate-50 rounded-xl border border-slate-200 text-xs">Tiada rekod staf sepadan dengan tapisan ini.</div>`;
    return;
  }

  listContainer.innerHTML = filtered.map(m => {
    const isInactive = m.isActive === false || m.status === "Bersara / Pencen" || m.status === "Nyahaktif";

    const initials = m.name
      .split(" ")
      .filter(n => !["bin", "binti", "hjh.", "haji", "encik", "puan", "cik"].includes(n.toLowerCase()))
      .slice(0, 2)
      .map(n => n[0])
      .join("")
      .toUpperCase() || "SK";

    const hasPhoto = m.photo && m.photo.trim() !== "";
    const thumbHtml = hasPhoto ? `
      <img src="${m.photo}" alt="${m.name}" class="w-10 h-10 rounded-xl object-cover shrink-0 border ${isInactive ? 'border-rose-300 opacity-60 grayscale' : 'border-slate-200'}">
    ` : `
      <div class="w-10 h-10 rounded-xl ${isInactive ? 'bg-slate-400' : 'bg-gradient-to-tr from-blue-700 to-indigo-900'} text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
        ${initials}
      </div>
    `;

    return `
      <div class="p-3 ${isInactive ? 'bg-rose-50/40 border-rose-200' : 'bg-white border-slate-200'} border rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs hover:border-blue-300 transition shadow-sm">
        <div class="flex items-center gap-3 min-w-0">
          ${thumbHtml}
          <div class="min-w-0">
            <div class="flex items-center gap-1.5 flex-wrap">
              <h5 class="font-extrabold text-slate-900 truncate">${m.name}</h5>
              ${isInactive ? `
                <span class="px-1.5 py-0.5 rounded text-[9px] font-black bg-rose-100 text-rose-800 border border-rose-300">
                  🔴 ${m.status || 'BERSARA / NYAHAKTIF'}
                </span>
              ` : `
                <span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                  🟢 AKTIF
                </span>
              `}
            </div>
            <p class="text-blue-700 font-semibold text-[11px] truncate">${m.role}</p>
            <div class="flex items-center gap-2 text-[10px] text-slate-500 mt-0.5">
              <span class="font-mono bg-slate-100 px-1.5 py-0.5 rounded font-bold">${m.grade || 'DG41'}</span>
              <span>•</span>
              <span>${m.category}</span>
              <span>•</span>
              <span class="${m.session === 'Petang' ? 'text-amber-700 font-bold' : 'text-slate-600'}">${m.session || 'Pagi'}</span>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-2 shrink-0 self-end sm:self-auto">
          ${isInactive ? `
            <button type="button" onclick="toggleDeactivateStaff('${m.id}')" title="Aktifkan Semula Staf" class="px-2.5 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-lg border border-emerald-300 font-bold text-xs transition flex items-center gap-1">
              <span>▶️</span> Aktifkan
            </button>
          ` : `
            <button type="button" onclick="toggleDeactivateStaff('${m.id}')" title="Nyahaktifkan / Bersara" class="px-2.5 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-800 rounded-lg border border-amber-300 font-bold text-xs transition flex items-center gap-1">
              <span>⏸️</span> Nyahaktif
            </button>
          `}
          <button type="button" onclick="openEditStaffModal('${m.id}')" class="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-800 rounded-lg border border-blue-200 font-bold text-xs transition flex items-center gap-1">
            <span>✏️</span> Sunting & Foto
          </button>
          <button type="button" onclick="deleteStaffMember('${m.id}')" title="Padamkan Rekod" class="px-2.5 py-1.5 bg-red-50 hover:bg-red-100 text-red-700 rounded-lg border border-red-200 font-bold text-xs transition">
            🗑️
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// BUKA MODAL SUNTING STAF
window.openEditStaffModal = function(id) {
  const member = window.adminManager.getStaffById(id);
  if (!member) {
    alert("Maklumat pegawai/guru tidak dijumpai.");
    return;
  }

  const setVal = (fid, v) => {
    const el = document.getElementById(fid);
    if (el) el.value = v || "";
  };

  setVal("editStaffId", member.id);
  setVal("editStaffName", member.name);
  setVal("editStaffRole", member.role);
  setVal("editStaffGrade", member.grade || "DG41");
  setVal("editStaffCategory", member.category || "Guru Akademik");
  setVal("editStaffSession", member.session || "Pagi");
  setVal("editStaffStatus", member.status || (member.isActive === false ? "Bersara / Pencen" : "Aktif"));
  setVal("editStaffEmail", member.email || "xba3037@moe.edu.my");
  setVal("editStaffPhone", member.phone || "089-925493");
  setVal("editStaffDuties", member.duties || "");
  setVal("editStaffPhotoUrl", member.photo || "");

  // Kemas kini foto preview
  const photoImg = document.getElementById("editStaffPhotoImg");
  const fallback = document.getElementById("editStaffPhotoFallback");
  const fileInput = document.getElementById("editStaffPhotoFile");
  if (fileInput) fileInput.value = "";

  if (member.photo && member.photo.trim() !== "") {
    if (photoImg) {
      photoImg.src = member.photo;
      photoImg.classList.remove("hidden");
    }
    if (fallback) fallback.classList.add("hidden");
  } else {
    if (photoImg) photoImg.classList.add("hidden");
    if (fallback) {
      fallback.textContent = member.name[0] || "📷";
      fallback.classList.remove("hidden");
    }
  }

  const modal = document.getElementById("editStaffModal");
  if (modal) {
    modal.classList.remove("hidden");
    modal.style.display = "flex";
    document.body.classList.add("overflow-hidden");
  }
};

window.closeEditStaffModal = function() {
  const modal = document.getElementById("editStaffModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.style.display = "none";
    document.body.classList.remove("overflow-hidden");
  }
};

// Pengendali Muat Naik Foto Staf
window.handleStaffPhotoUpload = function(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const dataUrl = e.target.result;
    const photoImg = document.getElementById("editStaffPhotoImg");
    const fallback = document.getElementById("editStaffPhotoFallback");
    const urlInput = document.getElementById("editStaffPhotoUrl");

    if (photoImg) {
      photoImg.src = dataUrl;
      photoImg.classList.remove("hidden");
    }
    if (fallback) fallback.classList.add("hidden");
    if (urlInput) urlInput.value = dataUrl;
  };
  reader.readAsDataURL(file);
};

window.handleStaffPhotoUrlInput = function(event) {
  const url = event.target.value.trim();
  const photoImg = document.getElementById("editStaffPhotoImg");
  const fallback = document.getElementById("editStaffPhotoFallback");

  if (url) {
    if (photoImg) {
      photoImg.src = url;
      photoImg.classList.remove("hidden");
    }
    if (fallback) fallback.classList.add("hidden");
  } else {
    if (photoImg) photoImg.classList.add("hidden");
    if (fallback) fallback.classList.remove("hidden");
  }
};

window.removeStaffPhoto = function() {
  const photoImg = document.getElementById("editStaffPhotoImg");
  const fallback = document.getElementById("editStaffPhotoFallback");
  const urlInput = document.getElementById("editStaffPhotoUrl");
  const fileInput = document.getElementById("editStaffPhotoFile");

  if (photoImg) photoImg.classList.add("hidden");
  if (fallback) fallback.classList.remove("hidden");
  if (urlInput) urlInput.value = "";
  if (fileInput) fileInput.value = "";
};

// Simpan Suntingan Staf
window.saveEditedStaff = function(event) {
  event.preventDefault();
  const getVal = id => document.getElementById(id)?.value || "";
  const staffId = getVal("editStaffId");
  if (!staffId) return;

  const statusVal = getVal("editStaffStatus") || "Aktif";
  const isActive = statusVal === "Aktif";

  const updatedFields = {
    name: getVal("editStaffName").toUpperCase().trim(),
    role: getVal("editStaffRole").trim(),
    grade: getVal("editStaffGrade").trim(),
    category: getVal("editStaffCategory"),
    session: getVal("editStaffSession"),
    status: statusVal,
    isActive: isActive,
    email: getVal("editStaffEmail").trim(),
    phone: getVal("editStaffPhone").trim(),
    duties: getVal("editStaffDuties").trim(),
    photo: getVal("editStaffPhotoUrl").trim() || null
  };

  const success = window.adminManager.updateStaffMember(staffId, updatedFields);
  if (success) {
    if (window.SKR_DATA.stats) {
      const activeCount = (window.SKR_DATA.staffList || []).filter(s => s.isActive !== false && s.status !== "Nyahaktif" && s.status !== "Bersara / Pencen").length;
      window.SKR_DATA.stats.totalAllStaff = activeCount;
      saveStoredData(window.SKR_DATA);
    }
    renderOrganizationChart();
    renderAdminStaffList();
    renderExecutiveStats();
    renderSchoolHeader();
    closeEditStaffModal();
    alert("Profil dan status staf berjaya dikemaskini!");
  } else {
    alert("Gagal mengemaskini maklumat staf. Sila pastikan sesi pentadbir aktif.");
  }
};

window.addNewStaffMemberFromAdmin = function() {
  const getVal = id => document.getElementById(id)?.value || "";
  const name = getVal("newStaffName").trim();
  const role = getVal("newStaffRole").trim();

  if (!name || !role) {
    alert("Sila masukkan Nama dan Jawatan staf!");
    return;
  }

  const newStaff = {
    name: name,
    role: role,
    grade: getVal("newStaffGrade") || "DG41",
    category: getVal("newStaffCategory") || "Guru Akademik",
    session: getVal("newStaffSession") || "Pagi",
    status: "Aktif",
    isActive: true,
    tier: 4,
    email: "xba3037@moe.edu.my",
    phone: "089-925493",
    duties: "Pengurusan PdPc dan kurikulum sekolah."
  };

  window.adminManager.addStaffMember(newStaff);
  renderOrganizationChart();
  renderAdminStaffList();
  renderExecutiveStats();
  toggleAddNewStaffForm();

  document.getElementById("newStaffName").value = "";
  document.getElementById("newStaffRole").value = "";
  alert("Pegawai/Guru baharu berjaya didaftarkan ke dalam sistem!");
};

window.toggleDeactivateStaff = function(id) {
  const staff = window.adminManager.getStaffById(id);
  if (!staff) return;

  const isCurrentlyActive = staff.isActive !== false && staff.status !== "Nyahaktif" && staff.status !== "Bersara / Pencen";

  if (isCurrentlyActive) {
    const reason = prompt(`Nyahaktifkan staf "${staff.name}" daripada sistem?\n\nSila pilih status:\n1. Bersara / Pencen\n2. Pindah Sekolah\n3. Nyahaktif Rekod\n\n(Taip 1, 2, atau nama status):`, "Bersara / Pencen");
    if (reason === null) return;

    let chosen = reason.trim();
    if (chosen === "1") chosen = "Bersara / Pencen";
    else if (chosen === "2") chosen = "Pindah Sekolah";
    else if (chosen === "3") chosen = "Nyahaktif";
    else if (!chosen) chosen = "Bersara / Pencen";

    window.adminManager.deactivateStaffMember(id, chosen);
    renderOrganizationChart();
    renderAdminStaffList();
    renderExecutiveStats();
    alert(`Rekod "${staff.name}" telah berjaya dinyahaktifkan (${chosen}) dan tidak lagi dipaparkan dalam direktori awam.`);
  } else {
    if (confirm(`Aktifkan semula "${staff.name}" ke dalam direktori bertugas aktif sekolah?`)) {
      window.adminManager.activateStaffMember(id);
      renderOrganizationChart();
      renderAdminStaffList();
      renderExecutiveStats();
      alert(`Staf "${staff.name}" telah diaktifkan semula!`);
    }
  }
};

window.deleteStaffMember = function(id) {
  if (confirm("Padamkan maklumat pegawai/guru ini daripada direktori sekolah?")) {
    window.adminManager.deleteStaffMember(id);
    renderOrganizationChart();
    renderAdminStaffList();
    renderExecutiveStats();
  }
};

/* ==========================================================================
   PENGURUSAN PROFIL & LOGO SEKOLAH
   ========================================================================== */
window.handleSchoolLogoUpload = function(event, type) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const dataUrl = e.target.result;
    if (type === "school") {
      const prev = document.getElementById("admSchoolLogoPreview");
      if (prev) prev.src = dataUrl;
      const urlIn = document.getElementById("admSchoolLogoUrl");
      if (urlIn) urlIn.value = dataUrl;
    } else {
      const prev = document.getElementById("admKpmLogoPreview");
      if (prev) prev.src = dataUrl;
      const urlIn = document.getElementById("admKpmLogoUrl");
      if (urlIn) urlIn.value = dataUrl;
    }
  };
  reader.readAsDataURL(file);
};

window.handleSchoolLogoUrlInput = function(event, type) {
  const val = event.target.value.trim();
  if (type === "school") {
    const prev = document.getElementById("admSchoolLogoPreview");
    if (prev && val) prev.src = val;
  } else {
    const prev = document.getElementById("admKpmLogoPreview");
    if (prev && val) prev.src = val;
  }
};

window.saveSchoolProfileFromAdmin = function() {
  const getVal = id => document.getElementById(id)?.value || "";
  
  const updated = {
    name: getVal("admSchoolName"),
    code: getVal("admSchoolCode"),
    address: getVal("admSchoolAddress"),
    phone: getVal("admSchoolPhone"),
    email: getVal("admSchoolEmail"),
    motto: getVal("admSchoolMotto"),
    academicSession: getVal("admSchoolSession"),
    logoUrl: getVal("admSchoolLogoUrl") || null,
    kpmLogoUrl: getVal("admKpmLogoUrl") || null
  };

  window.adminManager.updateSchoolProfile(updated);
  renderSchoolHeader();
  alert("Maklumat profil dan logo sekolah berjaya disimpan!");
};

/* ==========================================================================
   PENGURUSAN BAHAN & DOKUMEN
   ========================================================================== */
function renderAdminDocList() {
  const container = document.getElementById("admDocListWrapper");
  if (!container) return;

  const docs = window.SKR_DATA.documents || [];
  if (docs.length === 0) {
    container.innerHTML = `<div class="p-4 text-center text-slate-400 bg-white rounded-xl border border-slate-200 text-xs">Tiada bahan dimuat naik.</div>`;
    return;
  }

  container.innerHTML = docs.map(d => `
    <div class="flex items-center justify-between p-2.5 bg-white border border-slate-200 rounded-xl text-xs hover:border-blue-300 transition">
      <div class="min-w-0 pr-2">
        <h5 class="font-bold text-slate-900 truncate">${d.title}</h5>
        <p class="text-slate-500 text-[11px] truncate">${d.category} • ${d.panitia} (${d.size})</p>
      </div>
      <button onclick="deleteDocItem('${d.id}')" class="text-red-600 hover:text-red-800 font-semibold px-2 py-1 bg-red-50 hover:bg-red-100 rounded-md border border-red-200 shrink-0">
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

  window.adminManager.addDocument({
    title: title,
    category: category,
    panitia: panitia,
    type: "PDF",
    fileUrl: linkUrl || "#",
    size: linkUrl && linkUrl.includes("drive.google.com") ? "Google Drive" : "Pautan Luar",
    uploader: "Pentadbir SK Ranggu"
  });

  renderDocumentsList();
  renderAdminDocList();
  resetDocInputs();
  alert("Pautan bahan berjaya ditambah!");
};

function resetDocInputs() {
  if (document.getElementById("newDocTitle")) document.getElementById("newDocTitle").value = "";
  if (document.getElementById("newDocPanitia")) document.getElementById("newDocPanitia").value = "";
  if (document.getElementById("newDocLinkUrl")) document.getElementById("newDocLinkUrl").value = "";
  if (document.getElementById("newDocFileInput")) document.getElementById("newDocFileInput").value = "";
}

/* ==========================================================================
   PENGURUSAN PENGUMUMAN
   ========================================================================== */
function renderAdminAnnounceList() {
  const container = document.getElementById("admAnnounceListWrapper");
  if (!container) return;

  const list = window.SKR_DATA.announcements || [];
  if (list.length === 0) {
    container.innerHTML = `<div class="p-4 text-center text-slate-400 bg-white rounded-xl border border-slate-200 text-xs">Tiada pengumuman disiarkan.</div>`;
    return;
  }

  container.innerHTML = list.map(a => `
    <div class="flex items-center justify-between p-2.5 bg-white border border-slate-200 rounded-xl text-xs hover:border-blue-300 transition">
      <div class="min-w-0 pr-2">
        <h5 class="font-bold text-slate-900 truncate">${a.title}</h5>
        <p class="text-slate-500 text-[11px] truncate">${a.category} • ${a.date} (${a.priority})</p>
      </div>
      <button onclick="deleteAnnounceItem('${a.id}')" class="text-red-600 hover:text-red-800 font-semibold px-2 py-1 bg-red-50 hover:bg-red-100 rounded-md border border-red-200 shrink-0">
        Padam
      </button>
    </div>
  `).join("");
}

window.addNewAnnouncementFromAdmin = function() {
  const getVal = id => document.getElementById(id)?.value || "";
  const title = getVal("newAnnTitle").trim();
  const content = getVal("newAnnContent").trim();

  if (!title || !content) {
    alert("Sila masukkan tajuk dan kandungan pengumuman!");
    return;
  }

  window.adminManager.addAnnouncement({
    title: title,
    content: content,
    priority: getVal("newAnnPriority") || "Sederhana",
    category: getVal("newAnnCategory") || "Pentadbiran",
    author: getVal("newAnnAuthor") || "Unit Pentadbiran",
    date: getVal("newAnnDate") || new Date().toISOString().split("T")[0]
  });

  renderAnnouncements();
  renderAdminAnnounceList();

  document.getElementById("newAnnTitle").value = "";
  document.getElementById("newAnnContent").value = "";
  alert("Pengumuman berjaya disiarkan!");
};

window.deleteAnnounceItem = function(id) {
  if (confirm("Padamkan pengumuman ini?")) {
    window.adminManager.deleteAnnouncement(id);
    renderAnnouncements();
    renderAdminAnnounceList();
  }
};

/* ==========================================================================
   PENGURUSAN TAKWIM & GURU BERTUGAS
   ========================================================================== */
function renderAdminTakwimList() {
  const container = document.getElementById("admTakwimListWrapper");
  if (!container) return;

  const events = window.SKR_DATA.takwimEvents || [];
  if (events.length === 0) {
    container.innerHTML = `<div class="p-4 text-center text-slate-400 bg-white rounded-xl border border-slate-200 text-xs">Tiada acara takwim berdaftar.</div>`;
    return;
  }

  container.innerHTML = events.map(e => `
    <div class="flex items-center justify-between p-2.5 bg-white border border-slate-200 rounded-xl text-xs hover:border-blue-300 transition">
      <div class="min-w-0 pr-2">
        <h5 class="font-bold text-slate-900 truncate">${e.title}</h5>
        <p class="text-slate-500 text-[11px] truncate">${e.date} • ${e.venue} (${e.inCharge})</p>
      </div>
      <button onclick="deleteTakwimItem('${e.id}')" class="text-red-600 hover:text-red-800 font-semibold px-2 py-1 bg-red-50 hover:bg-red-100 rounded-md border border-red-200 shrink-0">
        Padam
      </button>
    </div>
  `).join("");
}

window.addNewTakwimFromAdmin = function() {
  const getVal = id => document.getElementById(id)?.value || "";
  const title = getVal("newTakwimTitle").trim();
  const date = getVal("newTakwimDate");

  if (!title || !date) {
    alert("Sila masukkan nama acara dan tarikh!");
    return;
  }

  window.adminManager.addTakwimEvent({
    title: title,
    date: date,
    time: getVal("newTakwimTime") || "Sepanjang Hari",
    venue: getVal("newTakwimVenue") || "SK Ranggu",
    inCharge: getVal("newTakwimInCharge") || "Pentadbiran"
  });

  renderTakwimEvents();
  renderAdminTakwimList();

  document.getElementById("newTakwimTitle").value = "";
  alert("Acara berjaya ditambah ke dalam takwim!");
};

window.deleteTakwimItem = function(id) {
  if (confirm("Padamkan acara takwim ini?")) {
    window.adminManager.deleteTakwimEvent(id);
    renderTakwimEvents();
    renderAdminTakwimList();
  }
};

window.saveDutyTeachersFromAdmin = function() {
  const getVal = id => document.getElementById(id)?.value || "";
  const membersRaw = getVal("admDutyMembers");
  const membersArr = membersRaw.split(",").map(m => m.trim()).filter(m => m.length > 0);

  const updatedDuty = {
    weekNumber: parseInt(getVal("admDutyWeek")) || 28,
    dateRange: getVal("admDutyDateRange"),
    leader: getVal("admDutyLeader"),
    theme: getVal("admDutyTheme"),
    members: membersArr
  };

  window.adminManager.updateWeeklyDuty(updatedDuty);
  renderDutyTeachers();
  alert("Jadual guru bertugas mingguan berjaya disimpan!");
};

/* ==========================================================================
   KESELAMATAN & SANDARAN
   ========================================================================== */
window.changeAdminPasscode = function() {
  const cur = document.getElementById("admCurrentPin")?.value.trim();
  const newPin = document.getElementById("admNewPin")?.value.trim();

  if (!newPin || newPin.length < 4) {
    alert("Sila masukkan Kod Akses Baharu (sekurang-kurangnya 4 aksara)!");
    return;
  }

  const activePin = window.adminManager.getPin();
  if (cur !== activePin && cur.toLowerCase() !== activePin.toLowerCase()) {
    alert("Kod akses semasa tidak tepat!");
    return;
  }

  window.adminManager.setPin(newPin);
  document.getElementById("admCurrentPin").value = "";
  document.getElementById("admNewPin").value = "";
  alert(`Kod akses pentadbir berjaya ditukar kepada: ${newPin}`);
};

window.handleImportBackup = function(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const result = window.adminManager.importBackupFile(e.target.result);
    if (result.success) {
      alert("Data sandaran berjaya dipulihkan! Sistem akan disegarkan.");
      location.reload();
    } else {
      alert("Ralat semasa memulihkan fail sandaran: " + result.error);
    }
  };
  reader.readAsText(file);
};

window.handleResetSystemData = function() {
  if (confirm("AMARAN: Anda pasti untuk menetapkan semula semua data ke tetapan asal kilang? Semua perubahan tersimpan akan dipadam.")) {
    window.adminManager.resetSystem();
    alert("Sistem telah ditetapkan semula ke data asal.");
    location.reload();
  }
};

/* ==========================================================================
   MODAL SUNTINGAN PAPARAN LANGSUNG (UNIVERSAL LIVE EDIT MODAL)
   Eksklusif untuk Pentadbir dengan Kod Akses Ts.FIKREY37
   ========================================================================== */

// 1. Buka Modal Suntingan
function openLiveEditModal(config) {
  if (!isAdminEditActive()) {
    alert("Hanya pentadbir yang sah (Ts.FIKREY37) dibenarkan membuat suntingan.");
    return;
  }

  const modal = document.getElementById("universalLiveEditModal");
  if (!modal) return;

  const targetType = config.targetType || "staff";
  const targetId = config.targetId !== undefined ? config.targetId : "";
  const subId = config.subId !== undefined ? config.subId : "";
  const name = config.name || "";
  const role = config.role || "";
  const extra = config.extra || "";
  const photo = config.photo || "";

  // Set nilai input tersembunyi & borang
  const setElVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val;
  };

  setElVal("liveEditTargetType", targetType);
  setElVal("liveEditTargetId", targetId);
  setElVal("liveEditTargetSubId", subId);
  setElVal("liveEditNameInput", name);
  setElVal("liveEditRoleInput", role);
  setElVal("liveEditExtraInput", extra);
  setElVal("liveEditPhotoUrlInput", photo);

  const fileIn = document.getElementById("liveEditFileInput");
  if (fileIn) fileIn.value = "";

  // Pratonton Foto
  const previewImg = document.getElementById("liveEditPhotoPreview");
  if (previewImg) {
    const effectivePhoto = photo || (window.getStaffPhoto ? window.getStaffPhoto(name) : "assets/photos/default.jpg");
    previewImg.src = effectivePhoto || "assets/photos/default.jpg";
  }

  // Tajuk Modal Berdasarkan Kategori
  const titleEl = document.getElementById("liveEditModalTitle");
  if (titleEl) {
    let typeName = "Pegawai / Jawatan";
    if (targetType === "admin_wing") typeName = "Portfolio Sayap Pentadbiran";
    else if (targetType === "admin_leader") typeName = "Kepimpinan Pentadbiran";
    else if (targetType === "curriculum_leader") typeName = "Kepimpinan Kurikulum";
    else if (targetType === "curriculum_panitia") typeName = "Ketua Panitia Mata Pelajaran";
    else if (targetType === "curriculum_penyelaras") typeName = "Penyelaras Bilik / Program Khas";
    else if (targetType === "curriculum_unit_khas") typeName = "Unit Khas Kurikulum";
    else if (targetType === "hem_leader") typeName = "Kepimpinan Hal Ehwal Murid (HEM)";
    else if (targetType === "hem_unit") typeName = "Portfolio Jawatankuasa HEM";
    else if (targetType === "koko_leader") typeName = "Kepimpinan Kokurikulum";
    else if (targetType === "koko_sub") typeName = "Unit Kokurikulum / Sukan / Rumah";
    else if (targetType === "petang_officer") typeName = "Penyelaras Sidang Petang";
    else if (targetType === "gateway") typeName = "Gerbang 4 Bahagian Utama";
    else if (targetType === "staff") typeName = "Direktori Staf / Guru";
    else if (targetType === "duty") typeName = "Jadual Guru Bertugas";

    titleEl.textContent = `Sunting ${typeName}: ${name || role}`;
  }

  modal.classList.remove("hidden");
  modal.style.display = "flex";
  document.body.classList.add("overflow-hidden");
}
window.openLiveEditModal = openLiveEditModal;

// 2. Tutup Modal Suntingan
function closeLiveEditModal() {
  const modal = document.getElementById("universalLiveEditModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.style.display = "none";
    document.body.classList.remove("overflow-hidden");
  }
}
window.closeLiveEditModal = closeLiveEditModal;

// 3. Mampatkan Gambar Menggunakan HTML5 Canvas (Resolusi Optimum ~30KB)
function resizeImageToDataUrl(file, maxWidth = 400, maxHeight = 500, quality = 0.85) {
  return new Promise((resolve, reject) => {
    if (!file || !file.type.match(/image.*/)) {
      return reject(new Error("Fail bukan imej yang sah."));
    }

    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Gagal membaca fail imej."));
    reader.onload = (readerEvent) => {
      const img = new Image();
      img.onerror = () => reject(new Error("Gagal memproses fail imej."));
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL("image/jpeg", quality);
        resolve(dataUrl);
      };
      img.src = readerEvent.target.result;
    };
    reader.readAsDataURL(file);
  });
}

// 4. Muat Naik Gambar dari PC / Telefon
window.handleLiveEditFileUpload = async function(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  try {
    const dataUrl = await resizeImageToDataUrl(file);
    const previewImg = document.getElementById("liveEditPhotoPreview");
    if (previewImg) previewImg.src = dataUrl;

    const urlInput = document.getElementById("liveEditPhotoUrlInput");
    if (urlInput) urlInput.value = dataUrl;

    showToastNotification("Imej berjaya dimampatkan dan sedia untuk disimpan.", "info");
  } catch (err) {
    console.error("Ralat muat naik imej:", err);
    alert("Ralat semasa memproses fail imej: " + err.message);
  }
};

// 5. Input URL Gambar Manual
window.handleLiveEditUrlInput = function(event) {
  const url = event.target.value.trim();
  const previewImg = document.getElementById("liveEditPhotoPreview");
  if (previewImg) {
    previewImg.src = url || "assets/photos/default.jpg";
  }
};

// 6. Reset Foto ke Asal
window.resetLiveEditPhoto = function() {
  const previewImg = document.getElementById("liveEditPhotoPreview");
  const urlInput = document.getElementById("liveEditPhotoUrlInput");
  const fileInput = document.getElementById("liveEditFileInput");

  if (urlInput) urlInput.value = "";
  if (fileInput) fileInput.value = "";
  if (previewImg) previewImg.src = "assets/photos/default.jpg";
  showToastNotification("Foto ditetapkan semula kepada gambar lalai.", "info");
};

// 7. Simpan Perubahan Suntingan Pentadbir
window.handleSaveLiveEdit = function(event) {
  if (event) event.preventDefault();

  if (!isAdminEditActive()) {
    alert("Sesi pentadbir tidak aktif. Sila masukkan Kod Akses Ts.FIKREY37.");
    return;
  }

  const getVal = (id) => (document.getElementById(id)?.value || "").trim();
  const targetType = getVal("liveEditTargetType");
  const targetId = getVal("liveEditTargetId");
  const subId = getVal("liveEditTargetSubId");
  const name = getVal("liveEditNameInput");
  const role = getVal("liveEditRoleInput");
  const extra = getVal("liveEditExtraInput");
  const photo = getVal("liveEditPhotoUrlInput");
  const syncStaff = document.getElementById("liveEditSyncStaffCheck")?.checked !== false;

  if (!name && !role) {
    alert("Sila masukkan sekurang-kurangnya nama atau peranan!");
    return;
  }

  const result = window.adminManager.updateEntity({
    targetType,
    targetId,
    subId,
    name,
    role,
    extra,
    photo,
    syncStaff
  });

  if (result.success) {
    closeLiveEditModal();
    refreshAllDashboardViews();
    showToastNotification("Maklumat & foto berjaya dikemaskini ke dalam paparan!", "success");
  } else {
    alert("Ralat menyimpan maklumat: " + (result.error || "Ralat sistem."));
  }
};

// 8. Segarkan Semua Bahagian Papan Pemuka Secara Dinamik
function refreshAllDashboardViews() {
  renderSchoolHeader();
  renderGateways();

  // Carta Interaktif Kurikulum & Pentadbiran
  if (window.SKR_DATA.curriculumHierarchy2026 && typeof renderDigitalCurriculumChart === "function") {
    renderDigitalCurriculumChart(window.SKR_DATA.curriculumHierarchy2026);
  }
  if (window.SKR_DATA.adminHierarchy2026 && typeof renderDigitalAdminChart === "function") {
    renderDigitalAdminChart(window.SKR_DATA.adminHierarchy2026);
  }

  // Induk HEM, Koko, Sidang Petang, dan Sukan
  renderHemHierarchy();
  renderKokoHierarchy();
  renderSportsyncSection();
  renderPetangHierarchy();

  // Direktori dan Carta Organisasi
  renderOrganizationChart();
  renderDutyTeachers();
  renderExecutiveStats();

  // Kemas kini status butang
  updateAdminUIState();
}
window.refreshAllDashboardViews = refreshAllDashboardViews;

// 9. Togol Mod Suntingan Pentadbir
window.toggleAdminEditMode = function() {
  if (!window.adminManager.checkAuth()) {
    promptAdminLogin();
    return;
  }

  const isActive = window.adminManager.toggleEditMode();
  updateAdminUIState();
  refreshAllDashboardViews();

  showToastNotification(
    isActive ? "Mod Suntingan Paparan DIAKTIFKAN. Klik ikon [✏️ Sunting] pada kad untuk mengedit." : "Mod Suntingan Paparan DIMATIKAN. Paparan kini dalam tatapan umum.",
    isActive ? "success" : "info"
  );
};

// 10. Log Keluar Terus Pentadbir
window.handleAdminDirectLogout = function() {
  window.adminManager.logout();
  updateAdminUIState();
  refreshAllDashboardViews();
  showToastNotification("Log keluar pentadbir Ts.FIKREY37 berjaya.", "info");
};

// 11. Buka Dialog Log Masuk Pentadbir
function promptAdminLogin() {
  const modal = document.getElementById("adminModal");
  if (modal) {
    modal.classList.remove("hidden");
    const pinIn = document.getElementById("adminPinInput");
    if (pinIn) {
      pinIn.value = "";
      setTimeout(() => pinIn.focus(), 150);
    }
  }
}
window.promptAdminLogin = promptAdminLogin;

// 12. Kemas Kini Status UI Pentadbir di Seluruh Halaman
function updateAdminUIState() {
  const isAuth = typeof window.adminManager !== "undefined" && window.adminManager.checkAuth();
  const isEdit = typeof window.adminManager !== "undefined" && window.adminManager.isEditModeActive();

  // Bar Terapung Bawah
  const floatingBar = document.getElementById("adminFloatingBar");
  if (floatingBar) {
    if (isAuth) {
      floatingBar.classList.remove("hidden");
      floatingBar.classList.add("flex");
    } else {
      floatingBar.classList.add("hidden");
      floatingBar.classList.remove("flex");
    }
  }

  // Butang Mod Suntingan Pada Bar Terapung
  const btnToggle = document.getElementById("btnToggleEditMode");
  const editIcon = document.getElementById("editModeIcon");
  const editLabel = document.getElementById("editModeLabel");
  if (btnToggle && editLabel) {
    if (isEdit) {
      btnToggle.className = "px-3 py-1 rounded-xl text-xs font-bold bg-amber-400 text-slate-950 hover:bg-amber-300 transition shrink-0 flex items-center gap-1 shadow";
      if (editIcon) editIcon.textContent = "✏️";
      editLabel.textContent = "Mod Sunting: AKTIF";
    } else {
      btnToggle.className = "px-3 py-1 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition shrink-0 flex items-center gap-1 border border-slate-700";
      if (editIcon) editIcon.textContent = "👁️";
      editLabel.textContent = "Mod Paparan Sahaja";
    }
  }

  // Ikon & Label Status Pentadbir di Bar Atas
  const topIcon = document.getElementById("topAdminStatusIcon");
  const topLabel = document.getElementById("topAdminStatusLabel");
  const topBtn = document.getElementById("btnOpenAdminModal");

  if (topIcon && topLabel) {
    if (isAuth) {
      topIcon.textContent = "👑";
      topLabel.textContent = "Mod Pentadbir (Ts.FIKREY37)";
      if (topBtn) {
        topBtn.classList.add("border-amber-400", "bg-amber-500/10", "text-amber-300");
      }
    } else {
      topIcon.textContent = "🔐";
      topLabel.textContent = "Log Masuk Pentadbir";
      if (topBtn) {
        topBtn.classList.remove("border-amber-400", "bg-amber-500/10", "text-amber-300");
      }
    }
  }
}
window.updateAdminUIState = updateAdminUIState;

// 13. Notifikasi Toast Terapung Cantik
function showToastNotification(message, type = "info") {
  let toast = document.getElementById("skrLiveToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "skrLiveToast";
    document.body.appendChild(toast);
  }

  const colors = {
    success: "bg-emerald-950/95 text-emerald-200 border-emerald-500 shadow-emerald-900/30",
    error: "bg-rose-950/95 text-rose-200 border-rose-500 shadow-rose-900/30",
    info: "bg-slate-950/95 text-amber-200 border-amber-400 shadow-slate-900/40"
  };

  const icons = {
    success: "✅",
    error: "❌",
    info: "🔔"
  };

  toast.className = `fixed top-5 right-5 z-[9999] max-w-sm px-4 py-3 rounded-2xl shadow-2xl border text-xs font-bold transition-all duration-300 transform flex items-center gap-2.5 ${colors[type] || colors.info}`;
  toast.innerHTML = `<span>${icons[type] || '🔔'}</span><div class="flex-1">${message}</div>`;

  // Animate in
  requestAnimationFrame(() => {
    toast.style.transform = "translateY(0)";
    toast.style.opacity = "1";
  });

  // Auto dismiss
  clearTimeout(window.__skrToastTimeout);
  window.__skrToastTimeout = setTimeout(() => {
    toast.style.transform = "translateY(-20px)";
    toast.style.opacity = "0";
  }, 4000);
}
window.showToastNotification = showToastNotification;

/* ==========================================================================
   14. PENGURUSAN PROGRESSIVE WEB APP (PWA) & SERVICE WORKER
   Ikon & Lambang 3D Rasmi SK Ranggu Dipaparkan pada Semua Peranti
   ========================================================================== */
let deferredPwaPrompt = null;

function initPwaServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("./sw.js?v=20261006_v25")
        .then((reg) => {
          console.log("PWA Service Worker SK Ranggu V25 didaftarkan:", reg.scope);
          // Paksa semak versi terkini serta-merta
          try { reg.update(); } catch(e){}
          reg.onupdatefound = () => {
            const installingWorker = reg.installing;
            if (installingWorker) {
              installingWorker.onstatechange = () => {
                if (installingWorker.state === "installed" && navigator.serviceWorker.controller) {
                  console.log("Versi terkini PWA SK Ranggu tersedia.");
                }
              };
            }
          };
        })
        .catch((err) => {
          console.warn("Pendaftaran Service Worker PWA gagal:", err);
        });
    });
  }
}
window.initPwaServiceWorker = initPwaServiceWorker;

function setupPwaInstallHandlers() {
  // Tangkap event pemasangan pelayar natif (Chrome/Edge/Android)
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPwaPrompt = e;
    console.log("PWA beforeinstallprompt ditangkap.");

    const triggerBtn = document.getElementById("btnPwaTriggerNative");
    const label = document.getElementById("pwaTriggerBtnLabel");
    if (label) label.textContent = "Pasang Sekarang ke Peranti (Satu Klik)";
    if (triggerBtn) {
      triggerBtn.classList.remove("opacity-80");
      triggerBtn.classList.add("animate-pulse");
    }

    const topPwaBtn = document.getElementById("btnPwaInstall");
    if (topPwaBtn) {
      topPwaBtn.classList.add("bg-sky-500/30", "text-white", "animate-pulse");
    }
  });

  window.addEventListener("appinstalled", () => {
    deferredPwaPrompt = null;
    console.log("PWA SK Ranggu berjaya dipasang pada peranti!");
    showToastNotification("Tahniah! Papan Induk Utama SK Ranggu telah dipasang pada peranti anda.", "success");
    closePwaInstallModal();
  });
}
window.setupPwaInstallHandlers = setupPwaInstallHandlers;

function openPwaInstallModal() {
  const modal = document.getElementById("pwaInstallModal");
  if (modal) {
    modal.classList.remove("hidden");
    modal.style.display = "flex";
    document.body.classList.add("overflow-hidden");
  }
}
window.openPwaInstallModal = openPwaInstallModal;

function closePwaInstallModal() {
  const modal = document.getElementById("pwaInstallModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.style.display = "none";
    document.body.classList.remove("overflow-hidden");
  }
}
window.closePwaInstallModal = closePwaInstallModal;

async function triggerPwaInstallPrompt() {
  if (deferredPwaPrompt) {
    deferredPwaPrompt.prompt();
    const { outcome } = await deferredPwaPrompt.userChoice;
    console.log("Respon pemasangan PWA:", outcome);
    if (outcome === "accepted") {
      showToastNotification("Memasang PWA SK Ranggu dengan logo rasmi...", "success");
      closePwaInstallModal();
    }
    deferredPwaPrompt = null;
  } else {
    // Panduan untuk peranti iOS Safari atau pelayar yang tidak menyokong prompt natif
    const isIos = /iphone|ipad|ipod/i.test(navigator.userAgent);
    if (isIos) {
      alert("Untuk memasang pada iPhone/iPad:\n1. Tekan ikon Kongsi (Share) di bar bawah Safari.\n2. Pilih 'Tambah ke Skrin Utama' (Add to Home Screen).\n3. Logo rasmi SK Ranggu akan terpapar pada skrin utama anda!");
    } else {
      alert("Untuk memasang aplikasi ini:\n• Di Android: Buka menu pelayar (tiga titik ⋮) dan pilih 'Pasang Aplikasi' atau 'Tambah ke Skrin Utama'.\n• Di Komputer: Klik ikon Pasang (⊕) di bar alamat pelayar Chrome/Edge.\n\nLogo lambang 3D rasmi SK Ranggu akan menjadi ikon aplikasi!");
    }
  }
}
window.triggerPwaInstallPrompt = triggerPwaInstallPrompt;


