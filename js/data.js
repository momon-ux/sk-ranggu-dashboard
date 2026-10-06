/**
 * SISTEM DASHBOARD UNIT PENGURUSAN PENTADBIRAN & KURIKULUM
 * SEKOLAH KEBANGSAAN RANGGU, TAWAU, SABAH (XBA3037)
 * 
 * Data Induk Sistem & Senarai Guru Rasmi SK Ranggu
 * Pembangun: Mohammad Fikrey (Pentadbir Sistem)
 */

const DEFAULT_SYSTEM_DATA = {
  // PROFIL SEKOLAH
  school: {
    name: "Sekolah Kebangsaan Ranggu",
    shortName: "SK Ranggu",
    code: "XBA3037",
    gred: "Sekolah Kebangsaan Gred A",
    address: "Peti Surat 842, 91008 Tawau, Sabah",
    location: "KM16, Jalan Apas, Kampung Ranggu, Tawau",
    zone: "Zon Balung, PPD Tawau",
    state: "Sabah",
    phone: "089-925493",
    email: "xba3037@moe.edu.my",
    motto: "Cita, Usaha, Jaya",
    vision: "Kecemerlangan Dalam Semua Aspek Pendidikan",
    mission: "Melestarikan Sistem Pendidikan Yang Berkualiti Untuk Membangunkan Potensi Individu Bagi Memenuhi Aspirasi Negara",
    establishedYear: 1973,
    academicSession: "Sesi Persekolahan 2025 / 2026",
    logoKpm: "assets/kpm.png",
    logoSchool: "assets/skrg.jpeg"
  },

  // KREDIT PEMBANGUN SISTEM (SEDERHANA & EKSEKUTIF UNTUK PAPARAN AWAM)
  developer: {
    name: "Mohammad Fikrey",
    role: "Pentadbir Sistem & Pengurusan ICT",
    unit: "Unit Pengurusan Pentadbiran SK Ranggu"
  },

  // KONFIGURASI GOOGLE SHEETS
  googleSheets: {
    sheetId: "19BgxY06KSHSizUsnreZXnXNoUbf-ivhaVj9YVQ8hVdU",
    gid: "2057996103",
    fullUrl: "https://docs.google.com/spreadsheets/d/19BgxY06KSHSizUsnreZXnXNoUbf-ivhaVj9YVQ8hVdU/edit?gid=2057996103#gid=2057996103"
  },

  // STATISTIK SEKOLAH
  stats: {
    totalTeachers: 49,
    totalStaff: 6,
    totalStudents: 586,
    totalClasses: 18,
    preschoolClasses: 2,
    totalCommittees: 12,
    pbdMasteryPercent: 96.6,
    activeWeek: 28,
    currentTerm: "Penggal 2"
  },

  // PENGUMUMAN PENTADBIRAN
  announcements: [
    {
      id: "ann-1",
      title: "Penghantaran Rekod Pengajaran Harian (e-RPH) Minggu Ke-28",
      date: "2025-10-06",
      priority: "Tinggi",
      category: "Kurikulum",
      author: "PK Pentadbiran (Hjh. Rahmatiah)",
      content: "Semua guru diminta melengkapkan dan menghantar e-RPH sebelum jam 5.00 petang hari Jumaat melalui pautan rasmi DELIMa."
    },
    {
      id: "ann-2",
      title: "Mesyuarat Pengurusan Kurikulum & Panitia Bil 3/2025",
      date: "2025-10-12",
      priority: "Penting",
      category: "Mesyuarat",
      author: "Setiausaha Kurikulum (Ani binti Patola)",
      content: "Mesyuarat Kurikulum Bil 3 akan diadakan di Bilik Mesyuarat pada jam 1.30 petang. Kehadiran semua Ketua Panitia adalah diwajibkan."
    },
    {
      id: "ann-3",
      title: "Pengisian Tahap Penguasaan Pentaksiran Bilik Darjah (PBD)",
      date: "2025-10-20",
      priority: "Sederhana",
      category: "PBD",
      author: "Unit Pentadbiran",
      content: "Perekodan PBD dalam sistem idMe dibuka. Sila lengkapkan penilaian murid berpandukan DSKP mengikut tarikh yang ditetapkan."
    }
  ],

  // SENARAI BAHAN / DOKUMEN KURIKULUM (BOLEH DIMUAT NAIK OLEH ADMIN)
  documents: [
    {
      id: "doc-1",
      title: "Takwim Persekolahan & Jadual Aktiviti Kurikulum 2025/2026",
      category: "Takwim & Jadual",
      panitia: "Pentadbiran",
      date: "2025-01-15",
      type: "PDF",
      fileUrl: "#",
      size: "1.2 MB",
      uploader: "Hjh. Rahmatiah binti Mohd Juda"
    },
    {
      id: "doc-2",
      title: "Buku Panduan Pengurusan Kurikulum & MMI SK Ranggu",
      category: "Buku Panduan",
      panitia: "Kurikulum",
      date: "2025-02-10",
      type: "PDF",
      fileUrl: "#",
      size: "2.5 MB",
      uploader: "Ani binti Patola"
    },
    {
      id: "doc-3",
      title: "DSKP KSSR Semakan Bahasa Melayu Tahun 1 hingga Tahun 6",
      category: "DSKP & RPT",
      panitia: "Bahasa Melayu",
      date: "2025-03-01",
      type: "ZIP",
      fileUrl: "#",
      size: "4.8 MB",
      uploader: "Sabriah @ Habibah Abdul Sabar"
    },
    {
      id: "doc-4",
      title: "Format & Rubrik Pentaksiran Bilik Darjah (PBD) SK Ranggu",
      category: "PBD / Penilaian",
      panitia: "Kurikulum",
      date: "2025-03-15",
      type: "PDF",
      fileUrl: "#",
      size: "850 KB",
      uploader: "Ani binti Patola"
    },
    {
      id: "doc-5",
      title: "Jadual Waktu Induk & Agihan Tugas Guru Sesi 2025/2026",
      category: "Takwim & Jadual",
      panitia: "Pentadbiran",
      date: "2025-03-20",
      type: "PDF",
      fileUrl: "#",
      size: "1.5 MB",
      uploader: "Hjh. Rahmatiah binti Mohd Juda"
    }
  ],

  // CARTA ORGANISASI RASMI SK RANGGU (100% TEPAT & SAHIH)
  organizationChart: [
    // TIER 1: GURU BESAR
    {
      id: "org-1",
      tier: 1,
      role: "Guru Besar (Pengerusi)",
      name: "Yunus bin Patarai",
      grade: "DG48",
      category: "Pengurusan Tertinggi",
      phone: "089-925493",
      email: "gb.xba3037@moe.edu.my",
      avatarBg: "from-amber-500 to-amber-700",
      duties: "Peneraju Kepimpinan Instruksional & Pengurusan Strategik Sekolah"
    },
    
    // TIER 2: BARISAN PENOLONG KANAN
    {
      id: "org-2",
      tier: 2,
      role: "Penolong Kanan Pentadbiran & Kurikulum",
      name: "Hjh. Rahmatiah binti Mohd Juda",
      grade: "DG44",
      category: "Pentadbiran & Kurikulum",
      phone: "089-925493",
      email: "pk1.xba3037@moe.edu.my",
      avatarBg: "from-blue-600 to-indigo-800",
      duties: "Pengurusan Kurikulum, Jadual Waktu, Pencerapan PdPc, Penilaian & MMI"
    },
    {
      id: "org-3",
      tier: 2,
      role: "Penolong Kanan Hal Ehwal Murid (PK HEM)",
      name: "Komala binti Joseph",
      grade: "DG44",
      category: "Hal Ehwal Murid",
      phone: "089-925493",
      email: "pkhem.xba3037@moe.edu.my",
      avatarBg: "from-emerald-600 to-teal-800",
      duties: "Pengurusan Disiplin Murid, Kebajikan, SPBT, Bantuan & APDM"
    },
    {
      id: "org-4",
      tier: 2,
      role: "Penolong Kanan Kokurikulum (PK KOKU)",
      name: "Warnah binti Sira",
      grade: "DG44",
      category: "Kokurikulum",
      phone: "089-925493",
      email: "pkkoku.xba3037@moe.edu.my",
      avatarBg: "from-rose-600 to-red-800",
      duties: "Pengurusan Aktiviti Sukan, Unit Beruniform, Kelab/Persatuan & PAJSK"
    },
    {
      id: "org-5",
      tier: 2,
      role: "Penolong Kanan Petang (PK Petang)",
      name: "Emran bin Hj. Selamat",
      grade: "DG44",
      category: "Pengurusan Petang",
      phone: "089-925493",
      email: "pkpetang.xba3037@moe.edu.my",
      avatarBg: "from-purple-600 to-indigo-900",
      duties: "Penyeliaan Sesi Petang (Tahap 1), Kawalan Murid & Guru Bertugas"
    },

    // TIER 3: PEGAWAI KHAS PENTADBIRAN & KURIKULUM
    {
      id: "org-6",
      tier: 3,
      role: "Setiausaha Kurikulum",
      name: "Ani binti Patola",
      grade: "DG44",
      category: "Jawatankuasa Kurikulum",
      email: "ani.patola@moe-dl.edu.my",
      duties: "Dokumentasi Minit Mesyuarat Kurikulum, Takwim & Penyelarasan Panitia"
    },
    {
      id: "org-7",
      tier: 3,
      role: "Setiausaha Hal Ehwal Murid",
      name: "Norlina binti Bagwas",
      grade: "DG44",
      category: "Hal Ehwal Murid",
      email: "norlina.bagwas@moe-dl.edu.my",
      duties: "Pengurusan Dokumentasi Unit Hal Ehwal Murid & Kebajikan"
    },
    {
      id: "org-8",
      tier: 3,
      role: "Setiausaha Kokurikulum",
      name: "Evalorena binti Laminsin",
      grade: "DG41",
      category: "Kokurikulum",
      email: "evalorena@moe-dl.edu.my",
      duties: "Pengurusan Perekodan PAJSK & Aktiviti Kokurikulum Mingguan"
    },
    {
      id: "org-9",
      tier: 3,
      role: "Guru Data Sekolah",
      name: "Al Faizal bin Daud",
      grade: "DG41",
      category: "ICT & Pengurusan Data",
      email: "alfaizal.daud@moe-dl.edu.my",
      duties: "Pengurusan EMIS, APDM, e-Operasi & Data Rasmi Sekolah"
    },
    {
      id: "org-10",
      tier: 3,
      role: "Guru Perpustakaan & Media (GPM)",
      name: "Rosminah binti Sapar",
      grade: "DG44",
      category: "Pusat Sumber Sekolah",
      email: "rosminah.sapar@moe-dl.edu.my",
      duties: "Pusat Sumber Sekolah, Program NILAM & Bahan Bantu Mengajar"
    },
    {
      id: "org-11",
      tier: 3,
      role: "Guru Bimbingan & Kaunseling",
      name: "Siti Naurin Fadzillah binti Abdul Jalal",
      grade: "DG44",
      category: "Bimbingan & Kaunseling",
      email: "naurin.jalal@moe-dl.edu.my",
      duties: "Perkhidmatan Kaunseling, Psikometrik & Pembangunan Sahsiah Murid"
    },
    {
      id: "org-12",
      tier: 3,
      role: "Guru Bimbingan & Kaunseling",
      name: "Darmawati binti Lokkong",
      grade: "DG44",
      category: "Bimbingan & Kaunseling",
      email: "darmawati.lokkong@moe-dl.edu.my",
      duties: "Bimbingan Kerjaya Murid & Program Motivasi Akademik"
    },
    {
      id: "org-13",
      tier: 3,
      role: "Guru Pemulihan Khas",
      name: "Muhamadian bin Suaibu",
      grade: "DG44",
      category: "Program Khas",
      email: "muhamadian@moe-dl.edu.my",
      duties: "Program Literasi & Numerasi Pemulihan Khas Tahap 1"
    },
    {
      id: "org-14",
      tier: 3,
      role: "Guru Prasekolah",
      name: "Yusni binti Wahjudin",
      grade: "DG44",
      category: "Program Khas",
      email: "yusni.pra@moe-dl.edu.my",
      duties: "Pengurusan Kurikulum Standard Prasekolah Kebangsaan (KSPK)"
    },

    // TIER 4: KETUA-KETUA PANITIA MATA PELAJARAN
    {
      id: "org-15",
      tier: 4,
      role: "Ketua Panitia Bahasa Melayu",
      name: "Sabriah @ Habibah Abdul Sabar",
      grade: "DG44",
      category: "Ketua Panitia",
      email: "sabriah.bm@moe-dl.edu.my",
      duties: "Penyelarasan DSKP, Rancangan Pengajaran Tahunan & MBMMBI"
    },
    {
      id: "org-16",
      tier: 4,
      role: "Ketua Panitia Bahasa Inggeris",
      name: "Hamsiah binti Hamid",
      grade: "DG44",
      category: "Ketua Panitia",
      email: "hamsiah.bi@moe-dl.edu.my",
      duties: "Penyelarasan CEFR, Program HIP (Highly Immersive Programme)"
    },
    {
      id: "org-17",
      tier: 4,
      role: "Ketua Panitia Matematik",
      name: "Masturah binti Tuda",
      grade: "DG44",
      category: "Ketua Panitia",
      email: "masturah.math@moe-dl.edu.my",
      duties: "Penyelarasan Kurikulum Matematik & Penguasaan Fakta Asas"
    },
    {
      id: "org-18",
      tier: 4,
      role: "Ketua Panitia Sains",
      name: "Junaid bin Nurdin",
      grade: "DG44",
      category: "Ketua Panitia",
      email: "junaid.sains@moe-dl.edu.my",
      duties: "Penyelarasan Pengajaran Sains, Bilik Sains & Program STEM"
    },
    {
      id: "org-19",
      tier: 4,
      role: "Ketua Panitia Pendidikan Islam",
      name: "Hasnan bin Mat Zin",
      grade: "DG44",
      category: "Ketua Panitia",
      email: "hasnan.pai@moe-dl.edu.my",
      duties: "Penyelarasan Pendidikan Islam, Program j-QAF & Dakwah Sekolah"
    },
    {
      id: "org-20",
      tier: 4,
      role: "Ketua Panitia Bahasa Arab",
      name: "Sunarti binti Tappa",
      grade: "DG41",
      category: "Ketua Panitia",
      email: "sunarti.ba@moe-dl.edu.my",
      duties: "Penyelarasan Kurikulum Bahasa Arab & Kem Bestari Solat"
    },
    {
      id: "org-21",
      tier: 4,
      role: "Ketua Panitia Sejarah",
      name: "Rini binti Daud",
      grade: "DG44",
      category: "Ketua Panitia",
      email: "rini.sej@moe-dl.edu.my",
      duties: "Penyelarasan Kurikulum Sejarah & Bulan Kebangsaan"
    },
    {
      id: "org-22",
      tier: 4,
      role: "Ketua Panitia Pendidikan Jasmani & Kesihatan",
      name: "Wafa Farhana binti Abd Kadir",
      grade: "DG41",
      category: "Ketua Panitia",
      email: "wafafarhana.pjpk@moe-dl.edu.my",
      duties: "Penyelarasan PJPK, Ujian SEGAK & Kesihatan Murid"
    },
    {
      id: "org-23",
      tier: 4,
      role: "Ketua Panitia Reka Bentuk & Teknologi",
      name: "Roni bin Bacho",
      grade: "DG44",
      category: "Ketua Panitia",
      email: "roni.rbt@moe-dl.edu.my",
      duties: "Penyelarasan Modul RBT & Pengurusan Bengkel RBT"
    },
    {
      id: "org-24",
      tier: 4,
      role: "Ketua Panitia Pendidikan Seni Visual",
      name: "Siti Jawara binti Lukman",
      grade: "DG41",
      category: "Ketua Panitia",
      email: "sitijawara.psv@moe-dl.edu.my",
      duties: "Penyelarasan Pendidikan Seni Visual & Bakat Kreatif Murid"
    },
    {
      id: "org-25",
      tier: 4,
      role: "Ketua Panitia Pendidikan Moral",
      name: "Faridah binti Sunu",
      grade: "DG44",
      category: "Ketua Panitia",
      email: "faridah.moral@moe-dl.edu.my",
      duties: "Penyelarasan Kurikulum Pendidikan Moral"
    },

    // GURU AKADEMIK BIASA (TERMASUK MOHAMMAD FIKREY)
    {
      id: "org-26",
      tier: 4,
      role: "Guru Akademik Biasa / Pentadbir Sistem",
      name: "Mohammad Fikrey bin Abdul Gapar",
      grade: "DG41",
      category: "Guru Akademik",
      email: "fikrey.gapar@moe-dl.edu.my",
      duties: "Guru Akademik & Penyelarasan Pembangunan Sistem Digital Sekolah"
    }
  ],

  // DATA JAWATANKUASA KURIKULUM & PANITIA
  committees: [
    {
      id: "pan-bm",
      name: "Panitia Bahasa Melayu",
      head: "Sabriah @ Habibah Abdul Sabar",
      secretary: "Guru Panitia BM",
      membersCount: 8,
      status: "Aktif",
      kpi: "96% Murid Menguasai TP3-TP6",
      dskpStatus: "Lengkap (Tahun 1-6)"
    },
    {
      id: "pan-bi",
      name: "Panitia Bahasa Inggeris",
      head: "Hamsiah binti Hamid",
      secretary: "Guru Panitia BI",
      membersCount: 7,
      status: "Aktif",
      kpi: "CEFR Alignment & HIP Programme",
      dskpStatus: "Lengkap (Tahun 1-6)"
    },
    {
      id: "pan-mat",
      name: "Panitia Matematik",
      head: "Masturah binti Tuda",
      secretary: "Guru Panitia Matematik",
      membersCount: 7,
      status: "Aktif",
      kpi: "Penguasaan Fakta Asas 95%",
      dskpStatus: "Lengkap (Tahun 1-6)"
    },
    {
      id: "pan-sn",
      name: "Panitia Sains",
      head: "Junaid bin Nurdin",
      secretary: "Guru Panitia Sains",
      membersCount: 6,
      status: "Aktif",
      kpi: "Amali Berfokus STEM 100%",
      dskpStatus: "Lengkap (Tahun 1-6)"
    },
    {
      id: "pan-pai",
      name: "Panitia Pendidikan Islam",
      head: "Hasnan bin Mat Zin",
      secretary: "Guru Panitia Pend Islam",
      membersCount: 9,
      status: "Aktif",
      kpi: "Khatam Al-Quran & Kem Solat",
      dskpStatus: "Lengkap (Tahun 1-6)"
    },
    {
      id: "pan-ba",
      name: "Panitia Bahasa Arab",
      head: "Sunarti binti Tappa",
      secretary: "Guru Panitia B. Arab",
      membersCount: 3,
      status: "Aktif",
      kpi: "Kemahiran Berkomunikasi Asas",
      dskpStatus: "Lengkap (Tahun 1-6)"
    },
    {
      id: "pan-sej",
      name: "Panitia Sejarah",
      head: "Rini binti Daud",
      secretary: "Guru Panitia Sejarah",
      membersCount: 4,
      status: "Aktif",
      kpi: "Kajian Kes Sejarah 100%",
      dskpStatus: "Lengkap (Tahun 4-6)"
    },
    {
      id: "pan-pjpk",
      name: "Panitia PJPK",
      head: "Wafa Farhana binti Abd Kadir",
      secretary: "Guru Panitia PJPK",
      membersCount: 6,
      status: "Aktif",
      kpi: "Ujian SEGAK 100% Selesai",
      dskpStatus: "Lengkap (Tahun 1-6)"
    },
    {
      id: "pan-rbt",
      name: "Panitia RBT",
      head: "Roni bin Bacho",
      secretary: "Guru Panitia RBT",
      membersCount: 4,
      status: "Aktif",
      kpi: "Projek Reka Cipta Berasaskan Modul",
      dskpStatus: "Lengkap (Tahun 4-6)"
    },
    {
      id: "pan-psv",
      name: "Panitia Seni Visual",
      head: "Siti Jawara binti Lukman",
      secretary: "Guru Panitia PSV",
      membersCount: 5,
      status: "Aktif",
      kpi: "Portfolio Seni Visual Lengkap",
      dskpStatus: "Lengkap (Tahun 1-6)"
    },
    {
      id: "pan-moral",
      name: "Panitia Pendidikan Moral",
      head: "Faridah binti Sunu",
      secretary: "Guru Panitia Moral",
      membersCount: 3,
      status: "Aktif",
      kpi: "Amalan Nilai Murni Berterusan",
      dskpStatus: "Lengkap (Tahun 1-6)"
    },
    {
      id: "pan-khas",
      name: "Unit Pemulihan Khas & Prasekolah",
      head: "Muhamadian bin Suaibu & Yusni binti Wahjudin",
      secretary: "Guru Unit Khas",
      membersCount: 4,
      status: "Aktif",
      kpi: "Sifar Buta Huruf Tahap 1",
      dskpStatus: "Lengkap"
    }
  ],

  // DATA TAKWIM & PERISTIWA KURIKULUM
  takwimEvents: [
    {
      id: "tak-1",
      title: "Mesyuarat Pengurusan Kurikulum Bil 3/2025",
      date: "2025-10-15",
      time: "01:30 PM",
      venue: "Bilik Mesyuarat",
      inCharge: "Ani binti Patola (SU Kurikulum)",
      status: "Akan Datang"
    },
    {
      id: "tak-2",
      title: "Verifikasi PBD & UASA Pertengahan Sesi",
      date: "2025-10-22",
      time: "Sepanjang Hari",
      venue: "Bilik Data",
      inCharge: "PK Pentadbiran & Penyelaras PBD",
      status: "Akan Datang"
    },
    {
      id: "tak-3",
      title: "Dialog Prestasi Akademik Bersama Ibu Bapa",
      date: "2025-11-05",
      time: "08:00 AM - 12:00 PM",
      venue: "Dewan Terbuka SK Ranggu",
      inCharge: "Semua Guru Kelas",
      status: "Dalam Perancangan"
    },
    {
      id: "tak-4",
      title: "Ujian SEGAK Fasa 2 (Tahun 4, 5, 6)",
      date: "2025-11-12",
      time: "Waktu PJPK",
      venue: "Padang Sekolah",
      inCharge: "Panitia PJPK",
      status: "Dalam Perancangan"
    },
    {
      id: "tak-5",
      title: "Ujian Akhir Sesi Akademik (UASA) 2025/2026",
      date: "2025-12-08",
      time: "07:30 AM - 01:00 PM",
      venue: "Kelas Tahun 4, 5 & 6",
      inCharge: "Jawatankuasa Peperiksaan",
      status: "Dalam Perancangan"
    }
  ],

  // DATA JADUAL GURU BERTUGAS MINGGUAN
  weeklyDutyTeachers: [
    {
      weekNumber: 28,
      dateRange: "06 Okt 2025 - 10 Okt 2025",
      theme: "Kebersihan Diri & Adab Menghormati Guru",
      leader: "Sabriah @ Habibah Abdul Sabar",
      members: [
        "Hamsiah binti Hamid",
        "Masturah binti Tuda",
        "Junaid bin Nurdin",
        "Mohammad Fikrey bin Abdul Gapar"
      ],
      venueGates: "Pintu Masuk Utama A (Pengawasan 06:40 - 07:15 Pagi)",
      venueCanteen: "Kantin Sekolah (Rehat Tahap 1 & Tahap 2)"
    }
  ],

  // DATA STATISTIK PBD
  pbdSummary: {
    labels: ["TP1", "TP2", "TP3", "TP4", "TP5", "TP6"],
    data: [2, 18, 142, 210, 154, 60],
    percentageMastered: 96.6,
    bySubjects: [
      { subject: "Bahasa Melayu", tp1_2: 3, tp3_4: 65, tp5_6: 32 },
      { subject: "Bahasa Inggeris", tp1_2: 6, tp3_4: 68, tp5_6: 26 },
      { subject: "Matematik", tp1_2: 5, tp3_4: 63, tp5_6: 32 },
      { subject: "Sains", tp1_2: 2, tp3_4: 60, tp5_6: 38 },
      { subject: "Pendidikan Islam", tp1_2: 1, tp3_4: 52, tp5_6: 47 },
      { subject: "Sejarah", tp1_2: 1, tp3_4: 55, tp5_6: 44 }
    ]
  },

  // PAUTAN INTEGRASI PORTAL KPM
  portalLinks: [
    { name: "idMe / MOEIS", desc: "Sistem Pengurusan ID Awam KPM & PBD", url: "https://idme.moe.gov.my", badge: "Utama" },
    { name: "DELIMa KPM", desc: "Portal Pembelajaran Digital & e-RPH", url: "https://d2.delima.edu.my", badge: "PdPc" },
    { name: "APDM", desc: "Aplikasi Pangkalan Data Murid & Kehadiran", url: "https://apdm.moe.gov.my", badge: "HEM" },
    { name: "e-Operasi", desc: "Pengurusan Guru & Staf Sokongan", url: "https://eoperasi.moe.gov.my", badge: "Guru" },
    { name: "SPLKPM", desc: "Latihan & Pembangunan Profesionalisme", url: "https://splkpm.moe.gov.my", badge: "Latihan" },
    { name: "SSDM", desc: "Sistem Sahsiah Diri Murid & Amalan Baik", url: "https://ssdm.moe.gov.my", badge: "Disiplin" }
  ]
};

// SIMPAN ATAU AMBIL DATA DARI LOCAL STORAGE
function getStoredData() {
  try {
    const stored = localStorage.getItem("SK_RANGGU_DASHBOARD_DATA_V2");
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (err) {
    console.warn("Gagal membaca LocalStorage:", err);
  }
  return DEFAULT_SYSTEM_DATA;
}

function saveStoredData(data) {
  try {
    localStorage.setItem("SK_RANGGU_DASHBOARD_DATA_V2", JSON.stringify(data));
    return true;
  } catch (err) {
    console.error("Gagal simpan LocalStorage:", err);
    return false;
  }
}

function resetToDefaultData() {
  localStorage.removeItem("SK_RANGGU_DASHBOARD_DATA_V2");
  return DEFAULT_SYSTEM_DATA;
}

window.SKR_DATA = getStoredData();
window.SKR_DEFAULT_DATA = DEFAULT_SYSTEM_DATA;
window.saveStoredData = saveStoredData;
window.resetToDefaultData = resetToDefaultData;
