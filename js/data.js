/**
 * SISTEM DASHBOARD UNIT PENGURUSAN PENTADBIRAN & KURIKULUM
 * SEKOLAH KEBANGSAAN RANGGU, TAWAU, SABAH (XBA3037)
 * 
 * Pangkalan Data Induk Rasmi - Berdasarkan Carta Organisasi Pentadbiran 2026
 * & Senarai 60 Staf SK Ranggu (08.06.2026)
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
    logoSchool: "assets/skrg.jpeg",
    posterCarta: "assets/carta-organisasi-2026.png"
  },

  // KREDIT PEMBANGUN
  developer: {
    name: "Mohammad Fikrey",
    role: "Pentadbir Sistem & Pengurusan ICT",
    unit: "Unit Pengurusan Pentadbiran SK Ranggu"
  },

  // STATISTIK RASMI
  stats: {
    totalTeachers: 54,
    totalStaff: 6,
    totalAllStaff: 60,
    morningSession: 30,
    afternoonSession: 24,
    totalStudents: 586,
    totalClasses: 18,
    preschoolClasses: 2,
    totalCommittees: 12,
    pbdMasteryPercent: 96.6,
    activeWeek: 28,
    currentTerm: "Penggal 2"
  },

  // CARTA ORGANISASI PENGURUSAN PENTADBIRAN 2026 (SEPADAN 100% POSTER RASMI)
  adminHierarchy2026: {
    leader: {
      role: "GURU BESAR",
      name: "YUNUS BIN PATARAI",
      badge: "Peneraju Sekolah"
    },
    deputy: {
      role: "PENOLONG KANAN PENTADBIRAN",
      name: "RAHMATIAH BT MOHD JUDA",
      badge: "PK 1 Pentadbiran"
    },
    managementField: "BIDANG PENGURUSAN",
    secretary: {
      role: "SETIAUSAHA",
      name: "BAJAM BINTI LADUNG",
      badge: "Setiausaha Pentadbiran"
    },
    // KOLUM KIRI (PENTADBIRAN, KEWANGAN & PERKHIDMATAN)
    leftWing: [
      { portfolio: "KEWANGAN", officer: "NURAIDA BT KAIMUDIN", color: "from-rose-500 to-red-600" },
      { portfolio: "AUDIT DALAMAN", officer: "SITI NAURIN FADZILAH BT ABDUL JALAL", color: "from-rose-500 to-red-600" },
      { portfolio: "SUMBER MANUSIA / HRMIS", officer: "HANISAH BT MANSOR", color: "from-rose-500 to-red-600" },
      { portfolio: "PEMBANTU KHIDMAT AM", officer: "MULYANTI BT MIKIL", color: "from-rose-500 to-red-600" },
      { portfolio: "e-PANGKAT/ e-PRESTASI", officer: "HANISAH BT MANSOR", color: "from-rose-500 to-red-600" },
      { 
        portfolio: "PPM (PRASEKOLAH)", 
        officer: "RAPIDAH BT KARIM",
        extraOfficers: ["YENNY BT SANAUDI", "FARIDAH BT ACHO"],
        color: "from-rose-500 to-red-600" 
      },
      { portfolio: "E-OPERASI", officer: "RAHMATIAH BT MOHD JUDA", color: "from-rose-500 to-red-600" }
    ],
    // KOLUM KANAN (DIGITAL, ICT, DATA & PEMBANGUNAN)
    rightWing: [
      { portfolio: "ICT", officer: "RONI BIN BACHO", color: "from-rose-500 to-red-600" },
      { portfolio: "SK@S", officer: "NOZE BT TUKIJAN", color: "from-rose-500 to-red-600" },
      { portfolio: "DATA SEKOLAH / IDME", officer: "MOHD ALFAIZAL BIN DAUD", color: "from-rose-500 to-red-600" },
      { portfolio: "LDP / KOMPETENSI", officer: "EVALORENNA LAMINSIN", color: "from-rose-500 to-red-600" },
      { 
        portfolio: "PEMBANGUNAN", 
        officer: "WAN MUHAMMAD YUSUF BIN WAN ABDUL AZIZ", 
        extraOfficers: ["MOHAMMAD IKHWAN BIN ABDURAIS"],
        color: "from-rose-500 to-red-600" 
      },
      { portfolio: "CARTA SEKOLAH", officer: "BAJAM BT LADUNG", color: "from-rose-500 to-red-600" },
      { portfolio: "ASET / MAKLUMAT SEKOLAH", officer: "ASMADI BIN LAJJAKASI", color: "from-rose-500 to-red-600" },
      { portfolio: "MEDIA / DIGITAL", officer: "MOHAMMAD FIKREY BIN ABDUL GAPAR", color: "from-rose-500 to-red-600" }
    ]
  },

  // CARTA ORGANISASI KURIKULUM 2026 (SEPADAN 100% POSTER RASMI KURIKULUM)
  curriculumHierarchy2026: {
    title: "CARTA ORGANISASI KURIKULUM SK RANGGU TAWAU TAHUN 2026",
    year: "2026",
    posterImage: "assets/carta-organisasi-kurikulum-2026.png",
    leader: {
      role: "GURU BESAR",
      name: "YUNUS BIN PATARAI",
      badge: "Peneraju Sekolah"
    },
    deputyAdmin: {
      role: "PENOLONG KANAN PENTADBIRAN",
      name: "RAHMATIAH BT MOHD JUDA",
      badge: "PK 1 Pentadbiran & Kurikulum"
    },
    deputyPetang: {
      role: "PENOLONG KANAN PETANG",
      name: "EMRAN BIN SELAMAT",
      badge: "PK Petang"
    },
    secretary: {
      role: "SETIAUSAHA",
      name: "ANI BT PATOLA",
      badge: "Setiausaha Kurikulum"
    },
    // LAJUR 1: PANITIA (12 PANITIA)
    panitia: [
      { subject: "BAHASA MELAYU", head: "SABRIAH BT ABDUL SABAR", icon: "📖" },
      { subject: "BAHASA INGGERIS", head: "HAMSIAH BT HAMID", icon: "🔤" },
      { subject: "MATEMATIK", head: "MASTURAH BT TUDA", icon: "📐" },
      { subject: "SAINS", head: "JUNAID BIN NURDIN", icon: "🔬" },
      { subject: "SEJARAH", head: "RINI BT DAUD", icon: "🏛️" },
      { subject: "PENDIDIKAN ISLAM", head: "HASNAN BIN MAT ZIN", icon: "🕌" },
      { subject: "PENDIDIKAN MORAL", head: "FARIDAH BT SUNU", icon: "⚖️" },
      { subject: "BAHASA ARAB", head: "SUNARTI BT TAPAH", icon: "🌙" },
      { subject: "REKA BENTUK TEKNOLOGI", head: "RONI BIN BACHO", icon: "⚙️" },
      { subject: "PENDIDIKAN JASMANI & KESIHATAN", head: "WAFA FARHANA BT ABD KADIR", icon: "🏃" },
      { subject: "PENDIDIKAN SENI VISUAL", head: "SITI JAWARA BINTI", icon: "🎨" },
      { subject: "PENDIDIKAN MUZIK", head: "TANJANG BIN TURE", icon: "🎵" }
    ],
    // LAJUR 2: PENYELARAS (4 PORTFOLIO)
    penyelaras: [
      { portfolio: "PENYELARAS TAHAP 1", officer: "RASMAWATI BT TAUSE", icon: "🧒" },
      { portfolio: "PENYELARAS TAHAP 2", officer: "HASNAN BIN MAT ZAIN", icon: "🧑" },
      { portfolio: "JADUAL WAKTU PAGI", officer: "NURUL ANISA BT SAPARUDIN", icon: "🌅" },
      { portfolio: "JADUAL WAKTU PETANG", officer: "AINATUN NADHIRAH BT DHARMAWI", icon: "🌇" }
    ],
    // LAJUR 3: UNIT KURIKULUM (11 UNIT)
    unitKurikulum: [
      { unit: "PEPERIKSAAN DALAMAN", officer: "ASMADI BIN LAJJAKASI", icon: "📝" },
      { unit: "PENTAKSIRAN BILIK DARJAH", officer: "BAJAM BT LADUNG", icon: "📊" },
      { unit: "PUSAT SUMBER", officer: "ROSMINAH BT SAPAR", icon: "📚" },
      { unit: "PRASEKOLAH", officer: "MARIANA BT KASSIM", icon: "🧸" },
      { unit: "PEMULIHAN KHAS", officer: "MOHAMMADIAN BIN SUAIBU", icon: "🎯" },
      { unit: "INTERVENSI", officer: "S.LILI BT LADI", icon: "💡" },
      { unit: "BMI", officer: "RASMAWATI TAUSE", icon: "⚖️" },
      { unit: "SEGAK", officer: "ROSIDIAN BIN IDRIS", icon: "🏅" },
      { unit: "PLC", officer: "MARINI BT LADI", icon: "🤝" },
      { unit: "HIP", officer: "JAINAH BT SULAIMAN", icon: "🗣️" },
      { unit: "DELIMA", officer: "RONI BIN BACHO", icon: "💻" }
    ]
  },

  // PENGUMUMAN PENTADBIRAN
  announcements: [
    {
      id: "ann-1",
      title: "Penghantaran Rekod Pengajaran Harian (e-RPH) Minggu Ke-28",
      date: "2025-10-06",
      priority: "Tinggi",
      category: "Kurikulum",
      author: "PK Pentadbiran (Puan Rahmatiah)",
      content: "Semua guru diminta melengkapkan dan menghantar e-RPH sebelum jam 5.00 petang hari Jumaat melalui portal DELIMa."
    },
    {
      id: "ann-2",
      title: "Mesyuarat Pengurusan Kurikulum & Panitia Bil 3/2025",
      date: "2025-10-12",
      priority: "Penting",
      category: "Mesyuarat",
      author: "Setiausaha Pentadbiran (Puan Bajam binti Ladung)",
      content: "Mesyuarat Kurikulum Bil 3 akan diadakan di Bilik Mesyuarat pada jam 1.30 petang. Kehadiran semua Ketua Panitia adalah diwajibkan."
    },
    {
      id: "ann-3",
      title: "Perekodan Tahap Penguasaan Pentaksiran Bilik Darjah (PBD)",
      date: "2025-10-20",
      priority: "Sederhana",
      category: "PBD",
      author: "Unit Pentadbiran",
      content: "Perekodan PBD dalam sistem idMe dibuka. Sila kemas kini penilaian murid berpandukan rubrik DSKP."
    }
  ],

  // DOKUMEN & BAHAN KURIKULUM (BOLEH DIMUAT NAIK OLEH ADMIN)
  documents: [
    {
      id: "doc-kurikulum",
      title: "Poster Rasmi Carta Organisasi Kurikulum SK Ranggu 2026",
      category: "Carta Organisasi",
      panitia: "Kurikulum",
      date: "2026-06-08",
      type: "PNG",
      fileUrl: "assets/carta-organisasi-kurikulum-2026.png",
      size: "397 KB",
      uploader: "Unit Kurikulum (Mohammad Fikrey)"
    },
    {
      id: "doc-1",
      title: "Poster Rasmi Carta Organisasi Pentadbiran SK Ranggu 2026",
      category: "Carta Organisasi",
      panitia: "Pentadbiran",
      date: "2026-06-08",
      type: "PNG",
      fileUrl: "assets/carta-organisasi-2026.png",
      size: "388 KB",
      uploader: "Unit Media / Digital (Mohammad Fikrey)"
    },
    {
      id: "doc-2",
      title: "Takwim Persekolahan & Jadual Aktiviti Kurikulum Sesi 2025/2026",
      category: "Takwim & Jadual",
      panitia: "Pentadbiran",
      date: "2025-01-15",
      type: "PDF",
      fileUrl: "#",
      size: "1.2 MB",
      uploader: "Rahmatiah binti Mohd Juda (PK1)"
    },
    {
      id: "doc-3",
      title: "Buku Panduan Pengurusan Kurikulum & MMI SK Ranggu",
      category: "Buku Panduan",
      panitia: "Kurikulum",
      date: "2025-02-10",
      type: "PDF",
      fileUrl: "#",
      size: "2.5 MB",
      uploader: "Ani binti Patola (SU Kurikulum)"
    },
    {
      id: "doc-4",
      title: "DSKP KSSR Semakan Bahasa Melayu Tahun 1 hingga 6",
      category: "DSKP & RPT",
      panitia: "Bahasa Melayu",
      date: "2025-03-01",
      type: "ZIP",
      fileUrl: "#",
      size: "4.8 MB",
      uploader: "Sabriah @ Habibah (KP BM)"
    }
  ],

  // SENARAI PENUH 60 STAF SK RANGGU (54 PPP + 6 AKP)
  staffList: [
    { id: 1, name: "YUNUS BIN PATARAI", ic: "721005-12-5911", role: "Guru Besar (Pengerusi)", grade: "DG10", type: "PPP", session: "Pagi", category: "Pengurusan Tertinggi", tier: 1 },
    { id: 2, name: "RAHMATIAH BINTI MOHD JUDA", ic: "751212-12-5962", role: "Penolong Kanan Pentadbiran (PK 1)", grade: "DG10", type: "PPP", session: "Pagi", category: "Pentadbiran & Kurikulum", tier: 2 },
    { id: 3, name: "KOMALA BINTI JOSEPH", ic: "730914-12-5884", role: "Penolong Kanan Hal Ehwal Murid (PK HEM)", grade: "DG12", type: "PPP", session: "Pagi", category: "Hal Ehwal Murid", tier: 2 },
    { id: 4, name: "WARNAH BINTI SIRA", ic: "700207-12-5618", role: "Penolong Kanan Kokurikulum (PK KOKU)", grade: "DG10", type: "PPP", session: "Pagi", category: "Kokurikulum", tier: 2 },
    { id: 5, name: "EMRAN BIN HJ SELAMAT", ic: "691017-12-5279", role: "Penolong Kanan Petang (PK Petang)", grade: "DG10", type: "PPP", session: "Petang", category: "Pengurusan Petang", tier: 2 },
    { id: 11, name: "BAJAM BINTI LADUNG", ic: "820324-12-5314", role: "Setiausaha Pentadbiran / Carta Sekolah", grade: "DG12", type: "PPP", session: "Pagi", category: "Pentadbiran", tier: 3 },
    { id: 9, name: "ANI BINTI PATOLA", ic: "840229-12-5496", role: "Setiausaha Kurikulum", grade: "DG10", type: "PPP", session: "Pagi", category: "Jawatankuasa Kurikulum", tier: 3 },
    { id: 32, name: "NORLINA BINTI BAGWAS", ic: "730926-12-5494", role: "Setiausaha Hal Ehwal Murid", grade: "DG10", type: "PPP", session: "Pagi", category: "Hal Ehwal Murid", tier: 3 },
    { id: 13, name: "EVALORENNA BINTI LAMINSIN", ic: "900201-12-5306", role: "Setiausaha Kokurikulum / LDP Kompetensi", grade: "DG10", type: "PPP", session: "Pagi", category: "Kokurikulum", tier: 3 },
    { id: 26, name: "MOHD ALFAIZAL BIN DAUD", ic: "820403-12-6243", role: "Data Sekolah / idMe", grade: "DG12", type: "PPP", session: "Pagi", category: "ICT & Pengurusan Data", tier: 3 },
    { id: 39, name: "RONI BIN BACHO", ic: "840509-12-6215", role: "Penyelaras ICT / Ketua Panitia RBT", grade: "DG12", type: "PPP", session: "Pagi", category: "ICT & Pengurusan Data", tier: 3 },
    { id: 33, name: "NOZE BINTI TUKIJAN", ic: "761202-12-5810", role: "Penyelaras SK@S (SKPM Kualiti)", grade: "DG9", type: "PPP", session: "Petang", category: "Pentadbiran", tier: 3 },
    { id: 10, name: "ASMADI BIN LAJJAKASI", ic: "830602-12-6093", role: "Penyelaras Aset / Maklumat Sekolah", grade: "DG10", type: "PPP", session: "Pagi", category: "Pentadbiran", tier: 3 },
    { id: 24, name: "MOHAMMAD FIKREY BIN ABDUL GAPAR", ic: "910528-12-5411", role: "Penyelaras Media / Digital (Pentadbir Sistem)", grade: "DG10", type: "PPP", session: "Pagi", category: "ICT & Pengurusan Data", tier: 3 },
    { id: 52, name: "WAN MUHAMAD YUSUF BIN WAN ABDUL AZIZ", ic: "870519-08-6373", role: "Penyelaras Pembangunan", grade: "DG10", type: "PPP", session: "Pagi", category: "Pembangunan", tier: 3 },
    { id: 25, name: "MOHAMMAD IKHWAN BIN ABDURAIS", ic: "940502-12-5701", role: "Penyelaras Pembangunan", grade: "DG9", type: "PPP", session: "Petang", category: "Pembangunan", tier: 3 },
    { id: 41, name: "ROSMINAH BINTI SAPAR", ic: "701026-12-5760", role: "Guru Perpustakaan & Media (GPM)", grade: "DG10", type: "PPP", session: "Pagi", category: "Pusat Sumber Sekolah", tier: 3 },
    { id: 47, name: "SITI NAURIN FADZILAH BINTI JALAL", ic: "790718-01-5164", role: "Audit Dalaman / Guru Kaunseling", grade: "DG12", type: "PPP", session: "Pagi", category: "Bimbingan & Kaunseling", tier: 3 },
    { id: 12, name: "DARMAWATI BTE LOKKONG", ic: "850603-12-6042", role: "Guru Bimbingan & Kaunseling", grade: "DG10", type: "PPP", session: "Pagi", category: "Bimbingan & Kaunseling", tier: 3 },
    { id: 28, name: "MUHAMADIAN BIN SUAIBU", ic: "790313-12-5859", role: "Guru Pemulihan Khas", grade: "DG10", type: "PPP", session: "Pagi", category: "Program Khas", tier: 3 },
    { id: 53, name: "YUSNI BINTI WAHJUDIN", ic: "800624-12-5676", role: "Guru Prasekolah", grade: "DG10", type: "PPP", session: "Pagi", category: "Program Khas", tier: 3 },
    { id: 44, name: "SABRIAH @ HABIBAH BINTI ABDUL SABAR", ic: "691228-12-5594", role: "Ketua Panitia Bahasa Melayu", grade: "DG12", type: "PPP", session: "Pagi", category: "Ketua Panitia", tier: 4 },
    { id: 16, name: "HAMSIAH BINTI HAMID", ic: "831119-12-5538", role: "Ketua Panitia Bahasa Inggeris", grade: "DG10", type: "PPP", session: "Pagi", category: "Ketua Panitia", tier: 4 },
    { id: 23, name: "MASTURAH BINTI TUDA", ic: "750803-12-5900", role: "Ketua Panitia Matematik", grade: "DG12", type: "PPP", session: "Pagi", category: "Ketua Panitia", tier: 4 },
    { id: 20, name: "JUNAID BIN NURDIN", ic: "750625-12-5755", role: "Ketua Panitia Sains", grade: "DG12", type: "PPP", session: "Pagi", category: "Ketua Panitia", tier: 4 },
    { id: 37, name: "RINI BINTI DAUD", ic: "740707-12-5282", role: "Ketua Panitia Sejarah", grade: "DG12", type: "PPP", session: "Pagi", category: "Ketua Panitia", tier: 4 },
    { id: 17, name: "HASNAN BIN MAT ZIN", ic: "750209-03-5259", role: "Ketua Panitia Pendidikan Islam", grade: "DG12", type: "PPP", session: "Pagi", category: "Ketua Panitia", tier: 4 },
    { id: 49, name: "SUNARTI BINTI TAPPA", ic: "841008-12-5470", role: "Ketua Panitia Bahasa Arab", grade: "DG10", type: "PPP", session: "Pagi", category: "Ketua Panitia", tier: 4 },
    { id: 51, name: "WAFA FARHANA BINTI ABD KADIR", ic: "931108-12-5530", role: "Ketua Panitia PJPK", grade: "DG10", type: "PPP", session: "Pagi", category: "Ketua Panitia", tier: 4 },
    { id: 46, name: "SITI JAWARA BINTI LUKMAN", ic: "730126-12-5584", role: "Ketua Panitia Seni Visual", grade: "DG10", type: "PPP", session: "Pagi", category: "Ketua Panitia", tier: 4 },
    { id: 14, name: "FARIDAH BINTI SUNU", ic: "741020-12-6072", role: "Ketua Panitia Pendidikan Moral", grade: "DG10", type: "PPP", session: "Pagi", category: "Ketua Panitia", tier: 4 },
    { id: 6, name: "AG KU KEMAINDDRA BIN PG MOHD TAIB", ic: "711026-12-5153", role: "Guru Akademik", grade: "DG10", type: "PPP", session: "Pagi", category: "Guru Akademik", tier: 4 },
    { id: 7, name: "AHAD BIN JAAFAR", ic: "660717-12-5251", role: "Guru Akademik", grade: "DG7", type: "PPP", session: "Pagi", category: "Guru Akademik", tier: 4 },
    { id: 8, name: "AINATUN NADHIRAH BINTI DHARMAWI", ic: "971008-12-5118", role: "Guru Akademik", grade: "DG9", type: "PPP", session: "Petang", category: "Guru Akademik", tier: 4 },
    { id: 15, name: "HALIM BIN BIDI", ic: "690322-08-6291", role: "Guru Akademik", grade: "DG12", type: "PPP", session: "Petang", category: "Guru Akademik", tier: 4 },
    { id: 18, name: "JAIBY BIN JULIAN", ic: "660707-12-5901", role: "Guru Akademik", grade: "DG7", type: "PPP", session: "Petang", category: "Guru Akademik", tier: 4 },
    { id: 19, name: "JAINAH BINTI SULAIMAN", ic: "720515-12-5554", role: "Guru Akademik", grade: "DG10", type: "PPP", session: "Petang", category: "Guru Akademik", tier: 4 },
    { id: 21, name: "MARIANA BINTI KASSIM", ic: "730807-12-5766", role: "Guru Akademik", grade: "DG12", type: "PPP", session: "Petang", category: "Guru Akademik", tier: 4 },
    { id: 22, name: "MARINI BINTI LADI", ic: "810914-12-5278", role: "Guru Akademik", grade: "DG10", type: "PPP", session: "Petang", category: "Guru Akademik", tier: 4 },
    { id: 27, name: "MOHD MUEMIN BIN MOHD AMIN JAPAR", ic: "870131-49-5381", role: "Guru Akademik", grade: "DG9", type: "PPP", session: "Petang", category: "Guru Akademik", tier: 4 },
    { id: 29, name: "NECHI BINTI SERUNAI", ic: "681103-12-5540", role: "Guru Akademik", grade: "DG12", type: "PPP", session: "Petang", category: "Guru Akademik", tier: 4 },
    { id: 30, name: "NOOR SYAFIQAH NADHIRAH BINTI JAMALUDDIN", ic: "980221-03-6426", role: "Guru Akademik", grade: "DG9", type: "PPP", session: "Petang", category: "Guru Akademik", tier: 4 },
    { id: 31, name: "NORIMAH BINTI JOYO REJO", ic: "740526-12-5080", role: "Guru Akademik", grade: "DG10", type: "PPP", session: "Petang", category: "Guru Akademik", tier: 4 },
    { id: 34, name: "NUR FAEZAH BINTI BANTALANI", ic: "931220-12-6058", role: "Guru Akademik", grade: "DG10", type: "PPP", session: "Petang", category: "Guru Akademik", tier: 4 },
    { id: 35, name: "NURUL ANISA BINTI SAPARUDIN", ic: "920918-12-5918", role: "Guru Akademik", grade: "DG10", type: "PPP", session: "Petang", category: "Guru Akademik", tier: 4 },
    { id: 36, name: "RASMAWATI BINTI TAUSE", ic: "811217-12-5250", role: "Guru Akademik", grade: "DG10", type: "PPP", session: "Petang", category: "Guru Akademik", tier: 4 },
    { id: 38, name: "ROBIATUL AIDAWYAH", ic: "981115-02-5736", role: "Guru Akademik", grade: "DG9", type: "PPP", session: "Petang", category: "Guru Akademik", tier: 4 },
    { id: 40, name: "ROSIDIAN BIN IDRIS", ic: "670415-12-5343", role: "Guru Akademik", grade: "DG7", type: "PPP", session: "Petang", category: "Guru Akademik", tier: 4 },
    { id: 42, name: "RUHAYA BINTI AHMAD", ic: "690623-12-5434", role: "Guru Akademik", grade: "DG10", type: "PPP", session: "Petang", category: "Guru Akademik", tier: 4 },
    { id: 43, name: "S.LILI BINTI LADI", ic: "700605-12-5592", role: "Guru Akademik", grade: "DG7", type: "PPP", session: "Petang", category: "Guru Akademik", tier: 4 },
    { id: 45, name: "SALSABILA BINTI SHAHRUDDIN", ic: "981025-02-6452", role: "Guru Akademik", grade: "DG9", type: "PPP", session: "Petang", category: "Guru Akademik", tier: 4 },
    { id: 48, name: "SITI RABIA BIN IBRAHIM", ic: "710908-12-5812", role: "Guru Akademik", grade: "DG10", type: "PPP", session: "Petang", category: "Guru Akademik", tier: 4 },
    { id: 50, name: "TANJANG BIN TURE", ic: "720403-12-5699", role: "Guru Akademik", grade: "DG10", type: "PPP", session: "Pagi", category: "Guru Akademik", tier: 4 },
    { id: 54, name: "ZAMRIE BIN OMAR ALI", ic: "780807-12-5809", role: "Guru Akademik", grade: "DG6", type: "PPP", session: "Petang", category: "Guru Akademik", tier: 4 },
    // AKP
    { id: 101, name: "HANISAH BINTI MANSOR", ic: "750614-12-5450", role: "Sumber Manusia (HRMIS) / e-Pangkat", grade: "PT N2", type: "AKP", session: "Pagi", category: "Kumpulan Pelaksana (AKP)", tier: 4 },
    { id: 102, name: "NURAIDA BINTI KAIMUDIN", ic: "890626-12-5508", role: "Pengurusan Kewangan", grade: "PT N1", type: "AKP", session: "Pagi", category: "Kumpulan Pelaksana (AKP)", tier: 4 },
    { id: 103, name: "MULYANTI BINTI MIKIL @ MOHAMED ISHAK", ic: "840815-12-5704", role: "Pembantu Khidmat Am (PKA)", grade: "PKA H1", type: "AKP", session: "Pagi", category: "Kumpulan Pelaksana (AKP)", tier: 4 },
    { id: 104, name: "RAPIDAH BINTI KARIM", ic: "831002-12-5788", role: "Pembantu Pengurusan Murid (PPM)", grade: "PPM N2", type: "AKP", session: "Pagi", category: "Kumpulan Pelaksana (AKP)", tier: 4 },
    { id: 105, name: "YENNY BINTI SANAUDI", ic: "801027-12-6026", role: "Pembantu Pengurusan Murid (PPM)", grade: "PPM N2", type: "AKP", session: "Pagi", category: "Kumpulan Pelaksana (AKP)", tier: 4 },
    { id: 106, name: "FARIDAH BINTI ACHO", ic: "950807-12-5832", role: "Pembantu Pengurusan Murid (PPM)", grade: "PPM N1 (COS)", type: "AKP", session: "Pagi", category: "Kumpulan Pelaksana (AKP)", tier: 4 }
  ],

  // DATA JAWATANKUASA KURIKULUM & PANITIA
  committees: [
    { id: "pan-bm", name: "Panitia Bahasa Melayu", head: "SABRIAH @ HABIBAH BINTI ABDUL SABAR", membersCount: 8, status: "Aktif", kpi: "96% Murid Menguasai TP3-TP6", dskpStatus: "Lengkap" },
    { id: "pan-bi", name: "Panitia Bahasa Inggeris", head: "HAMSIAH BINTI HAMID", membersCount: 7, status: "Aktif", kpi: "CEFR Alignment & HIP Programme", dskpStatus: "Lengkap" },
    { id: "pan-mat", name: "Panitia Matematik", head: "MASTURAH BINTI TUDA", membersCount: 7, status: "Aktif", kpi: "Penguasaan Fakta Asas 95%", dskpStatus: "Lengkap" },
    { id: "pan-sn", name: "Panitia Sains", head: "JUNAID BIN NURDIN", membersCount: 6, status: "Aktif", kpi: "Amali Berfokus STEM 100%", dskpStatus: "Lengkap" },
    { id: "pan-pai", name: "Panitia Pendidikan Islam", head: "HASNAN BIN MAT ZIN", membersCount: 9, status: "Aktif", kpi: "Khatam Al-Quran & Kem Solat", dskpStatus: "Lengkap" },
    { id: "pan-ba", name: "Panitia Bahasa Arab", head: "SUNARTI BINTI TAPPA", membersCount: 3, status: "Aktif", kpi: "Kemahiran Berkomunikasi Asas", dskpStatus: "Lengkap" },
    { id: "pan-sej", name: "Panitia Sejarah", head: "RINI BINTI DAUD", membersCount: 4, status: "Aktif", kpi: "Kajian Kes Sejarah 100%", dskpStatus: "Lengkap" },
    { id: "pan-pjpk", name: "Panitia PJPK", head: "WAFA FARHANA BINTI ABD KADIR", membersCount: 6, status: "Aktif", kpi: "Ujian SEGAK 100% Selesai", dskpStatus: "Lengkap" },
    { id: "pan-rbt", name: "Panitia RBT", head: "RONI BIN BACHO", membersCount: 4, status: "Aktif", kpi: "Projek Reka Cipta Berasaskan Modul", dskpStatus: "Lengkap" },
    { id: "pan-psv", name: "Panitia Seni Visual", head: "SITI JAWARA BINTI LUKMAN", membersCount: 5, status: "Aktif", kpi: "Portfolio Seni Visual Lengkap", dskpStatus: "Lengkap" },
    { id: "pan-moral", name: "Panitia Pendidikan Moral", head: "FARIDAH BINTI SUNU", membersCount: 3, status: "Aktif", kpi: "Amalan Nilai Murni Berterusan", dskpStatus: "Lengkap" },
    { id: "pan-muzik", name: "Panitia Pendidikan Muzik", head: "TANJANG BIN TURE", membersCount: 3, status: "Aktif", kpi: "Apresiasi Muzik & Seni Suara", dskpStatus: "Lengkap" }
  ],

  // DATA TAKWIM KURIKULUM
  takwimEvents: [
    { id: "tak-1", title: "Mesyuarat Pengurusan Kurikulum Bil 3/2025", date: "2025-10-15", time: "01:30 PM", venue: "Bilik Mesyuarat", inCharge: "ANI BINTI PATOLA (SU Kurikulum)", status: "Akan Datang" },
    { id: "tak-2", title: "Verifikasi PBD & UASA Pertengahan Sesi", date: "2025-10-22", time: "Sepanjang Hari", venue: "Bilik Data", inCharge: "RAHMATIAH BINTI MOHD JUDA (PK1)", status: "Akan Datang" },
    { id: "tak-3", title: "Dialog Prestasi Akademik Bersama Ibu Bapa", date: "2025-11-05", time: "08:00 AM - 12:00 PM", venue: "Dewan Terbuka SK Ranggu", inCharge: "Semua Guru Kelas", status: "Dalam Perancangan" },
    { id: "tak-4", title: "Ujian SEGAK Fasa 2 (Tahun 4, 5, 6)", date: "2025-11-12", time: "Waktu PJPK", venue: "Padang Sekolah", inCharge: "Panitia PJPK", status: "Dalam Perancangan" },
    { id: "tak-5", title: "Ujian Akhir Sesi Akademik (UASA) 2025/2026", date: "2025-12-08", time: "07:30 AM - 01:00 PM", venue: "Kelas Tahun 4, 5 & 6", inCharge: "Jawatankuasa Peperiksaan", status: "Dalam Perancangan" }
  ],

  // GURU BERTUGAS MINGGUAN
  weeklyDutyTeachers: [
    {
      weekNumber: 28,
      dateRange: "06 Okt 2025 - 10 Okt 2025",
      theme: "Kebersihan Diri & Adab Menghormati Guru",
      leader: "SABRIAH @ HABIBAH BINTI ABDUL SABAR",
      members: [
        "HAMSIAH BINTI HAMID",
        "MASTURAH BINTI TUDA",
        "JUNAID BIN NURDIN",
        "MOHAMMAD FIKREY BIN ABDUL GAPAR"
      ],
      venueGates: "Pintu Masuk Utama A (Pengawasan Kehadiran 06:40 - 07:15 Pagi)",
      venueCanteen: "Kantin Sekolah (Rehat Tahap 1 & Tahap 2)"
    }
  ],

  // PBD SUMMARY
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

  // PORTAL KPM
  portalLinks: [
    { name: "idMe / MOEIS", desc: "Sistem Pengurusan ID Awam KPM & PBD", url: "https://idme.moe.gov.my", badge: "Utama" },
    { name: "DELIMa KPM", desc: "Portal Pembelajaran Digital & e-RPH", url: "https://d2.delima.edu.my", badge: "PdPc" },
    { name: "APDM", desc: "Aplikasi Pangkalan Data Murid & Kehadiran", url: "https://apdm.moe.gov.my", badge: "HEM" },
    { name: "e-Operasi", desc: "Pengurusan Guru & Staf Sokongan", url: "https://eoperasi.moe.gov.my", badge: "Guru" },
    { name: "SPLKPM", desc: "Latihan & Pembangunan Profesionalisme", url: "https://splkpm.moe.gov.my", badge: "Latihan" },
    { name: "SSDM", desc: "Sistem Sahsiah Diri Murid & Amalan Baik", url: "https://ssdm.moe.gov.my", badge: "Disiplin" }
  ],

  googleSheets: {
    sheetId: "19BgxY06KSHSizUsnreZXnXNoUbf-ivhaVj9YVQ8hVdU",
    gid: "2057996103",
    fullUrl: "https://docs.google.com/spreadsheets/d/19BgxY06KSHSizUsnreZXnXNoUbf-ivhaVj9YVQ8hVdU/edit?gid=2057996103#gid=2057996103"
  }
};

function getStoredData() {
  try {
    const stored = localStorage.getItem("SK_RANGGU_DASHBOARD_DATA_V5");
    if (stored) return JSON.parse(stored);
  } catch (err) {
    console.warn("Gagal membaca LocalStorage:", err);
  }
  return DEFAULT_SYSTEM_DATA;
}

function saveStoredData(data) {
  try {
    localStorage.setItem("SK_RANGGU_DASHBOARD_DATA_V5", JSON.stringify(data));
    return true;
  } catch (err) {
    console.error("Gagal simpan LocalStorage:", err);
    return false;
  }
}

function resetToDefaultData() {
  localStorage.removeItem("SK_RANGGU_DASHBOARD_DATA_V5");
  return DEFAULT_SYSTEM_DATA;
}

window.SKR_DATA = getStoredData();
window.SKR_DEFAULT_DATA = DEFAULT_SYSTEM_DATA;
window.saveStoredData = saveStoredData;
window.resetToDefaultData = resetToDefaultData;
