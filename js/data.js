/**
 * SISTEM DASHBOARD UNIT PENGURUSAN PENTADBIRAN & KURIKULUM
 * SEKOLAH KEBANGSAAN RANGGU, TAWAU, SABAH (XBA3037)
 * 
 * Data Induk Sistem & Konfigurasi Lalai
 * Pembangun: Momon (Lead System Architect)
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
    logoKpm: "assets/logo-kpm.svg",
    logoSchool: "assets/logo-sk-ranggu.svg"
  },

  // KREDIT PEMBANGUN SISTEM
  developer: {
    name: "Mohammad Fikrey bin Abdul Gapar (Momon)",
    role: "Lead System Architect & Senior Developer",
    unit: "Unit Pengurusan Pentadbiran & ICT SK Ranggu",
    badge: "Pembangun Rasmi Sistem",
    githubUser: "momon",
    githubRepo: "https://github.com/momon/sk-ranggu-dashboard",
    systemVersion: "v2.5.0 Prestige Edition",
    buildDate: "2025/2026",
    creditStatement: "Sistem ini direka bentuk dan dibangunkan oleh Mohammad Fikrey bin Abdul Gapar (Momon) khas untuk Bahagian Unit Pengurusan Pentadbiran & Kurikulum SK Ranggu bagi membolehkan pemantauan berpusat yang responsif, dinamik dan berprestij tinggi pada semua peranti awam dan warga pendidik."
  },

  // KONFIGURASI GOOGLE SHEETS
  googleSheets: {
    sheetId: "19BgxY06KSHSizUsnreZXnXNoUbf-ivhaVj9YVQ8hVdU",
    gid: "2057996103",
    fullUrl: "https://docs.google.com/spreadsheets/d/19BgxY06KSHSizUsnreZXnXNoUbf-ivhaVj9YVQ8hVdU/edit?gid=2057996103#gid=2057996103",
    sheetName: "Data Kurikulum Utama",
    autoSync: true,
    syncIntervalMinutes: 10,
    lastSynced: null
  },

  // STATISTIK SEKOLAH
  stats: {
    totalTeachers: 42,
    totalStaff: 6,
    totalStudents: 586,
    totalClasses: 18,
    preschoolClasses: 2,
    totalCommittees: 12,
    pbdMasteryPercent: 94.8,
    skpmRating: "Cemerlang (92.4%)",
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
      author: "Penolong Kanan Pentadbiran",
      content: "Semua guru diminta melengkapkan dan menghantar e-RPH sebelum jam 5.00 petang hari Jumaat melalui pautan rasmi DELIMa."
    },
    {
      id: "ann-2",
      title: "Mesyuarat Pengurusan Kurikulum & Panitia Bil 3/2025",
      date: "2025-10-12",
      priority: "Penting",
      category: "Mesyuarat",
      author: "Setiausaha Kurikulum",
      content: "Mesyuarat Kurikulum Bil 3 akan diadakan di Bilik Mesyuarat Al-Khawarizmi pada jam 1.30 petang. Kehadiran semua Ketua Panitia adalah diwajibkan."
    },
    {
      id: "ann-3",
      title: "Pengisian Tahap Penguasaan Pentaksiran Bilik Darjah (PBD) Pertengahan Sesi",
      date: "2025-10-20",
      priority: "Sederhana",
      category: "PBD / Peperiksaan",
      author: "Penyelaras PBD",
      content: "Modul pengisian PBD dalam portal idMe telah dibuka. Guru matapelajaran diminta mengemaskini data penilaian murid mengikut rubrik DSKP."
    }
  ],

  // CARTA ORGANISASI PENTADBIRAN & KURIKULUM
  organizationChart: [
    // PENGURUSAN TERTINGGI (TIER 1)
    {
      id: "org-1",
      tier: 1,
      role: "Guru Besar (Pengerusi)",
      name: "Tuan Haji Ahmad bin Ismail",
      grade: "DG48 (Hakiki)",
      category: "Pengurusan Tertinggi",
      phone: "089-925493 (Ext 101)",
      email: "gb.xba3037@moe.edu.my",
      avatarBg: "from-amber-500 to-amber-700",
      duties: "Peneraju Kepimpinan Instruksional & Pengurusan Strategik Sekolah"
    },
    
    // PENOLONG KANAN (TIER 2)
    {
      id: "org-2",
      tier: 2,
      role: "Penolong Kanan Pentadbiran & Kurikulum (PK 1)",
      name: "Encik Ramlan bin Mohd Salleh",
      grade: "DG44",
      category: "Pentadbiran & Kurikulum",
      phone: "089-925493 (Ext 102)",
      email: "pk1.xba3037@moe.edu.my",
      avatarBg: "from-blue-600 to-indigo-800",
      duties: "Pengurusan Kurikulum, Jadual Waktu, Pencerapan PdPc, Penilaian & MMI"
    },
    {
      id: "org-3",
      tier: 2,
      role: "Penolong Kanan Hal Ehwal Murid (PK HEM)",
      name: "Puan Zaleha binti Abdul Rashid",
      grade: "DG44",
      category: "Hal Ehwal Murid",
      phone: "089-925493 (Ext 103)",
      email: "pkhem.xba3037@moe.edu.my",
      avatarBg: "from-emerald-600 to-teal-800",
      duties: "Disiplin Murid, Kebajikan, SPBT, Bantuan, APDM & Sahsiah"
    },
    {
      id: "org-4",
      tier: 2,
      role: "Penolong Kanan Kokurikulum (PK KOKU)",
      name: "Encik Jasni bin Awang Besar",
      grade: "DG44",
      category: "Kokurikulum",
      phone: "089-925493 (Ext 104)",
      email: "pkkoku.xba3037@moe.edu.my",
      avatarBg: "from-rose-600 to-red-800",
      duties: "Pengurusan Sukan, Unit Beruniform, Kelab/Persatuan & PAJSK"
    },
    {
      id: "org-5",
      tier: 2,
      role: "Penolong Kanan Petang (PK Petang)",
      name: "Puan Norhidayah binti Kassim",
      grade: "DG42",
      category: "Pengurusan Petang",
      phone: "089-925493 (Ext 105)",
      email: "pkpetang.xba3037@moe.edu.my",
      avatarBg: "from-purple-600 to-indigo-900",
      duties: "Penyeliaan Sesi Petang (Tahap 1), Guru Bertugas & Keselamatan Murid"
    },

    // PEGAWAI KHAS KURIKULUM & PENTADBIRAN (TIER 3)
    {
      id: "org-6",
      tier: 3,
      role: "Setiausaha Kurikulum",
      name: "Puan Siti Aminah binti Osman",
      grade: "DG44",
      category: "Jawatankuasa Kurikulum",
      email: "siti.aminah@moe-dl.edu.my",
      duties: "Dokumentasi Takwim, Minit Mesyuarat Kurikulum & Penyelarasan Panitia"
    },
    {
      id: "org-7",
      tier: 3,
      role: "Penolong Setiausaha Kurikulum",
      name: "Cik Norfazilah binti Jamil",
      grade: "DG41",
      category: "Jawatankuasa Kurikulum",
      email: "norfazilah@moe-dl.edu.my",
      duties: "Membantu Penyelarasan Pelaporan & Fail Induk Kurikulum"
    },
    {
      id: "org-8",
      tier: 3,
      role: "Penyelaras PBD & Pentaksiran",
      name: "Encik Farhan bin Zulhasnan",
      grade: "DG44",
      category: "Jawatankuasa Kurikulum",
      email: "farhan.zulhasnan@moe-dl.edu.my",
      duties: "Penyelarasan Tahap Penguasaan TP1-TP6, Verifikasi & Pelaporan idMe"
    },
    {
      id: "org-9",
      tier: 3,
      role: "Setiausaha Peperiksaan Awam / UASA",
      name: "Puan Rosnah binti Dullah",
      grade: "DG44",
      category: "Jawatankuasa Kurikulum",
      email: "rosnah.dullah@moe-dl.edu.my",
      duties: "Pengurusan Ujian Akhir Sesi Akademik (UASA) & Analisis Gred"
    },
    {
      id: "org-10",
      tier: 3,
      role: "Setiausaha Jadual Waktu & MMI",
      name: "Encik Mohd Nazri bin Bakar",
      grade: "DG41",
      category: "Jawatankuasa Kurikulum",
      email: "nazri.bakar@moe-dl.edu.my",
      duties: "Penyediaan Jadual Waktu Induk, Jadual Guru Ganti (Relief) & MMI"
    },
    {
      id: "org-11",
      tier: 3,
      role: "Guru Perpustakaan & Media (GPM)",
      name: "Puan Salmah binti Ariffin",
      grade: "DG44",
      category: "Pusat Sumber Sekolah",
      email: "salmah.ariffin@moe-dl.edu.my",
      duties: "Pusat Sumber Sekolah (PSS), Program NILAM & Bahan Bantu Mengajar"
    },
    {
      id: "org-12",
      tier: 3,
      role: "Guru Data & Maklumat (GDM)",
      name: "Encik Shamsul bin Kamaruddin",
      grade: "DG41",
      category: "ICT & Pengurusan Data",
      email: "shamsul.kamaruddin@moe-dl.edu.my",
      duties: "Pengurusan EMIS, APDM, e-Operasi & Verifikasi Data Rasmi Sekolah"
    },
    {
      id: "org-13",
      tier: 3,
      role: "Penyelaras ICT & DELIMa",
      name: "Encik Ridzuan bin Mahmud",
      grade: "DG41",
      category: "ICT & Pengurusan Data",
      email: "ridzuan.mahmud@moe-dl.edu.my",
      duties: "Penyenggaraan Makmal Komputer, Akaun DELIMa Murid & Guru"
    },

    // KETUA PANITIA MATA PELAJARAN (TIER 4)
    {
      id: "org-14",
      tier: 4,
      role: "Ketua Panitia Bahasa Melayu",
      name: "Puan Mariana binti Abdullah",
      grade: "DG44",
      category: "Ketua Panitia",
      email: "mariana.bm@moe-dl.edu.my",
      duties: "Ketua Panitia Bahasa Melayu & Penyelaras MBMMBI"
    },
    {
      id: "org-15",
      tier: 4,
      role: "Ketua Panitia Bahasa Inggeris",
      name: "Puan Jessica Lim",
      grade: "DG44",
      category: "Ketua Panitia",
      email: "jessica.lim@moe-dl.edu.my",
      duties: "Ketua Panitia Bahasa Inggeris & Penyelaras HIP (Highly Immersive Programme)"
    },
    {
      id: "org-16",
      tier: 4,
      role: "Ketua Panitia Matematik",
      name: "Encik Azman bin Sulaiman",
      grade: "DG44",
      category: "Ketua Panitia",
      email: "azman.math@moe-dl.edu.my",
      duties: "Ketua Panitia Matematik & Penyelaras STEM Sekolah"
    },
    {
      id: "org-17",
      tier: 4,
      role: "Ketua Panitia Sains",
      name: "Puan Noraini binti Mustapha",
      grade: "DG44",
      category: "Ketua Panitia",
      email: "noraini.sains@moe-dl.edu.my",
      duties: "Ketua Panitia Sains & Penyelaras Bilik Sains"
    },
    {
      id: "org-18",
      tier: 4,
      role: "Ketua Panitia Pendidikan Islam",
      name: "Ustaz Mohd Khairul bin Idris",
      grade: "DG44",
      category: "Ketua Panitia",
      email: "khairul.pai@moe-dl.edu.my",
      duties: "Ketua Panitia Pend. Islam, Penyelaras Dakwah & j-QAF"
    },
    {
      id: "org-19",
      tier: 4,
      role: "Ketua Panitia Bahasa Arab",
      name: "Ustazah Nurul Huda binti Hassan",
      grade: "DG41",
      category: "Ketua Panitia",
      email: "nurulhuda.ba@moe-dl.edu.my",
      duties: "Ketua Panitia Bahasa Arab & Kem Bestari Solat"
    },
    {
      id: "org-20",
      tier: 4,
      role: "Ketua Panitia Sejarah",
      name: "Encik Kamaruzaman bin Othman",
      grade: "DG44",
      category: "Ketua Panitia",
      email: "kamaruzaman.sej@moe-dl.edu.my",
      duties: "Ketua Panitia Sejarah & Sambutan Bulan Kemerdekaan"
    },
    {
      id: "org-21",
      tier: 4,
      role: "Ketua Panitia Reka Bentuk & Teknologi (RBT)",
      name: "Encik Zainal bin Hamdan",
      grade: "DG42",
      category: "Ketua Panitia",
      email: "zainal.rbt@moe-dl.edu.my",
      duties: "Ketua Panitia RBT & Penyelaras Bengkel RBT"
    },
    {
      id: "org-22",
      tier: 4,
      role: "Ketua Panitia Pendidikan Seni Visual (PSV)",
      name: "Puan Rohaya binti Daud",
      grade: "DG41",
      category: "Ketua Panitia",
      email: "rohaya.psv@moe-dl.edu.my",
      duties: "Ketua Panitia PSV & Pameran Bakat Seni Murid"
    },
    {
      id: "org-23",
      tier: 4,
      role: "Ketua Panitia Pendidikan Jasmani & Kesihatan (PJPK)",
      name: "Encik Razali bin Mat Amin",
      grade: "DG44",
      category: "Ketua Panitia",
      email: "razali.pjpk@moe-dl.edu.my",
      duties: "Ketua Panitia PJPK & Penyelaras SEGAK"
    },
    {
      id: "org-24",
      tier: 4,
      role: "Ketua Panitia Pendidikan Muzik",
      name: "Cik Dayang Suzana binti Awang",
      grade: "DG41",
      category: "Ketua Panitia",
      email: "suzana.muzik@moe-dl.edu.my",
      duties: "Ketua Panitia Muzik & Kumpulan Koir Sekolah"
    },
    {
      id: "org-25",
      tier: 4,
      role: "Penyelaras Program Pemulihan Khas",
      name: "Puan Asniza binti Johari",
      grade: "DG44",
      category: "Program Khas",
      email: "asniza.pemulihan@moe-dl.edu.my",
      duties: "Guru Pemulihan Khas (Literasi & Numerasi)"
    },
    {
      id: "org-26",
      tier: 4,
      role: "Penyelaras Prasekolah",
      name: "Puan Hafizah binti Zainuddin",
      grade: "DG44",
      category: "Program Khas",
      email: "hafizah.pra@moe-dl.edu.my",
      duties: "Penyelaras Pengurusan & Kurikulum Prasekolah (2 Kelas)"
    }
  ],

  // DATA JAWATANKUASA KURIKULUM & PANITIA
  committees: [
    {
      id: "pan-bm",
      name: "Panitia Bahasa Melayu",
      head: "Puan Mariana binti Abdullah",
      secretary: "Encik Faisal bin Tahir",
      membersCount: 8,
      status: "Aktif",
      kpi: "96% Murid Menguasai TP3-TP6",
      dskpStatus: "Lengkap (Tahun 1-6)",
      lastMeeting: "Mesyuarat Panitia Bil 2/2025"
    },
    {
      id: "pan-bi",
      name: "Panitia Bahasa Inggeris",
      head: "Puan Jessica Lim",
      secretary: "Cik Aisyah binti Hamzah",
      membersCount: 7,
      status: "Aktif",
      kpi: "CEFR Alignment & 92% Lulus PBD",
      dskpStatus: "Lengkap (Tahun 1-6)",
      lastMeeting: "Mesyuarat Panitia Bil 2/2025"
    },
    {
      id: "pan-mat",
      name: "Panitia Matematik",
      head: "Encik Azman bin Sulaiman",
      secretary: "Puan Norhaliza binti Yunus",
      membersCount: 7,
      status: "Aktif",
      kpi: "Penguasaan Fakta Asas 95%",
      dskpStatus: "Lengkap (Tahun 1-6)",
      lastMeeting: "Mesyuarat Panitia Bil 2/2025"
    },
    {
      id: "pan-sn",
      name: "Panitia Sains",
      head: "Puan Noraini binti Mustapha",
      secretary: "Encik Hilmi bin Zakaria",
      membersCount: 6,
      status: "Aktif",
      kpi: "Amali Berfokus 100% Tercapai",
      dskpStatus: "Lengkap (Tahun 1-6)",
      lastMeeting: "Mesyuarat Panitia Bil 2/2025"
    },
    {
      id: "pan-pai",
      name: "Panitia Pendidikan Islam",
      head: "Ustaz Mohd Khairul bin Idris",
      secretary: "Ustazah Mardhiah binti Yusof",
      membersCount: 9,
      status: "Aktif",
      kpi: "Khatam Al-Quran 98% Tahun 6",
      dskpStatus: "Lengkap (Tahun 1-6)",
      lastMeeting: "Mesyuarat Panitia Bil 2/2025"
    },
    {
      id: "pan-ba",
      name: "Panitia Bahasa Arab",
      head: "Ustazah Nurul Huda binti Hassan",
      secretary: "Ustaz Luqman bin Hakim",
      membersCount: 3,
      status: "Aktif",
      kpi: "Kemahiran Berkomunikasi Asas 90%",
      dskpStatus: "Lengkap (Tahun 1-6)",
      lastMeeting: "Mesyuarat Panitia Bil 2/2025"
    },
    {
      id: "pan-sej",
      name: "Panitia Sejarah",
      head: "Encik Kamaruzaman bin Othman",
      secretary: "Puan Sharifah binti Wan Ali",
      membersCount: 4,
      status: "Aktif",
      kpi: "Kajian Kes Sejarah 100% Siap",
      dskpStatus: "Lengkap (Tahun 4-6)",
      lastMeeting: "Mesyuarat Panitia Bil 2/2025"
    },
    {
      id: "pan-rbt",
      name: "Panitia Reka Bentuk & Teknologi",
      head: "Encik Zainal bin Hamdan",
      secretary: "Encik Bakri bin Senawi",
      membersCount: 4,
      status: "Aktif",
      kpi: "Projek Reka Cipta Berasaskan Modul",
      dskpStatus: "Lengkap (Tahun 4-6)",
      lastMeeting: "Mesyuarat Panitia Bil 2/2025"
    },
    {
      id: "pan-pjpk",
      name: "Panitia Pendidikan Jasmani & Kesihatan",
      head: "Encik Razali bin Mat Amin",
      secretary: "Encik Sufian bin Daud",
      membersCount: 6,
      status: "Aktif",
      kpi: "Ujian SEGAK 100% Dilaksanakan",
      dskpStatus: "Lengkap (Tahun 1-6)",
      lastMeeting: "Mesyuarat Panitia Bil 2/2025"
    },
    {
      id: "pan-psv",
      name: "Panitia Pendidikan Seni Visual",
      head: "Puan Rohaya binti Daud",
      secretary: "Cik Nur Izzati binti Mazlan",
      membersCount: 5,
      status: "Aktif",
      kpi: "Portfolio Seni Visual Lengkap",
      dskpStatus: "Lengkap (Tahun 1-6)",
      lastMeeting: "Mesyuarat Panitia Bil 2/2025"
    },
    {
      id: "pan-muzik",
      name: "Panitia Pendidikan Muzik",
      head: "Cik Dayang Suzana binti Awang",
      secretary: "Puan Melissa Wong",
      membersCount: 3,
      status: "Aktif",
      kpi: "Penguasaan Notasi & Nyanyian 90%",
      dskpStatus: "Lengkap (Tahun 1-6)",
      lastMeeting: "Mesyuarat Panitia Bil 2/2025"
    },
    {
      id: "pan-pemulihan",
      name: "Unit Pemulihan Khas & Prasekolah",
      head: "Puan Asniza binti Johari",
      secretary: "Puan Hafizah binti Zainuddin",
      membersCount: 4,
      status: "Aktif",
      kpi: "Sifar Buta Huruf Tahap 1",
      dskpStatus: "Lengkap",
      lastMeeting: "Mesyuarat Unit Bil 2/2025"
    }
  ],

  // DATA TAKWIM & PERISTIWA KURIKULUM
  takwimEvents: [
    {
      id: "tak-1",
      title: "Mesyuarat Pengurusan Kurikulum Bil 3/2025",
      date: "2025-10-15",
      time: "01:30 PM",
      venue: "Bilik Gerakan Al-Ghazali",
      inCharge: "SU Kurikulum",
      status: "Akan Datang"
    },
    {
      id: "tak-2",
      title: "Verifikasi Skor PBD Pertengahan Sesi",
      date: "2025-10-22",
      time: "Sepanjang Hari",
      venue: "Bilik Data / DELIMa",
      inCharge: "Penyelaras PBD",
      status: "Akan Datang"
    },
    {
      id: "tak-3",
      title: "Program Dialog Prestasi Bersama Ibu Bapa (PBD)",
      date: "2025-11-05",
      time: "08:00 AM - 12:00 PM",
      venue: "Dewan Terbuka Sri Ranggu",
      inCharge: "Semua Guru Kelas",
      status: "Dalam Perancangan"
    },
    {
      id: "tak-4",
      title: "Ujian SEGAK Fasa 2 (Tahun 4, 5, 6)",
      date: "2025-11-12",
      time: "Waktu PJPK",
      venue: "Padang Sekolah & Dewan",
      inCharge: "Panitia PJPK",
      status: "Dalam Perancangan"
    },
    {
      id: "tak-5",
      title: "Minggu Semakan Buku Latihan Murid (Fasa 2)",
      date: "2025-11-17",
      time: "Mengikut Jadual Agihan",
      venue: "Bilik Pentadbiran",
      inCharge: "Guru Besar & Barisan PK",
      status: "Dalam Perancangan"
    },
    {
      id: "tak-6",
      title: "Ujian Akhir Sesi Akademik (UASA) 2025/2026",
      date: "2025-12-08",
      time: "07:30 AM - 01:00 PM",
      venue: "Kelas Tahun 4, 5 & 6",
      inCharge: "SU Peperiksaan Dalaman",
      status: "Dalam Perancangan"
    }
  ],

  // DATA JADUAL GURU BERTUGAS MINGGUAN (CONTOH MINGGU SEMASA)
  weeklyDutyTeachers: [
    {
      weekNumber: 28,
      dateRange: "06 Okt 2025 - 10 Okt 2025",
      theme: "Kebersihan Diri & Adab Menghormati Guru",
      leader: "Encik Farhan bin Zulhasnan",
      members: [
        "Puan Mariana binti Abdullah",
        "Ustazah Nurul Huda binti Hassan",
        "Encik Zainal bin Hamdan",
        "Cik Dayang Suzana binti Awang"
      ],
      venueGates: "Pintu Masuk Utama A (Pengawasan Kehadiran 06:40 - 07:15 Pagi)",
      venueCanteen: "Kantin Sekolah (Rehat Tahap 1 & Tahap 2)"
    },
    {
      weekNumber: 29,
      dateRange: "13 Okt 2025 - 17 Okt 2025",
      theme: "Menepati Masa Budaya Cemerlang",
      leader: "Encik Azman bin Sulaiman",
      members: [
        "Puan Jessica Lim",
        "Puan Rohaya binti Daud",
        "Ustaz Mohd Khairul bin Idris",
        "Puan Asniza binti Johari"
      ],
      venueGates: "Pintu Masuk Utama A & B",
      venueCanteen: "Kantin Sekolah"
    }
  ],

  // DATA STATISTIK PBD MENGIKUT TAHAP PENGUASAAN (TP1 - TP6)
  pbdSummary: {
    labels: ["Tahap Penguasaan 1 (TP1)", "Tahap Penguasaan 2 (TP2)", "Tahap Penguasaan 3 (TP3)", "Tahap Penguasaan 4 (TP4)", "Tahap Penguasaan 5 (TP5)", "Tahap Penguasaan 6 (TP6)"],
    data: [2, 18, 142, 210, 154, 60],
    percentageMastered: 96.6, // TP3 hingga TP6
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
    {
      name: "idMe / MOEIS",
      desc: "Sistem Pengurusan ID Pengguna Awam KPM & Pengisian PBD",
      url: "https://idme.moe.gov.my",
      badge: "Utama"
    },
    {
      name: "DELIMa KPM",
      desc: "Portal Digital Educational Learning Initiative Malaysia & Google Classroom",
      url: "https://d2.delima.edu.my",
      badge: "PdPc"
    },
    {
      name: "APDM",
      desc: "Aplikasi Pangkalan Data Murid & Kehadiran Harian",
      url: "https://apdm.moe.gov.my",
      badge: "HEM"
    },
    {
      name: "e-Operasi",
      desc: "Sistem Maklumat Pengurusan Guru & Staf Sokongan",
      url: "https://eoperasi.moe.gov.my",
      badge: "Guru"
    },
    {
      name: "SPLKPM",
      desc: "Sistem Pengurusan Latihan Guru Kementerian Pendidikan Malaysia",
      url: "https://splkpm.moe.gov.my",
      badge: "Latihan"
    },
    {
      name: "SSDM",
      desc: "Sistem Sahsiah Diri Murid & Perekodan Amalan Baik",
      url: "https://ssdm.moe.gov.my",
      badge: "Disiplin"
    }
  ]
};

// SIMPAN ATAU AMBIL DATA DARI LOCAL STORAGE JIKA ADA
function getStoredData() {
  try {
    const stored = localStorage.getItem("SK_RANGGU_DASHBOARD_DATA");
    if (stored) {
      const parsed = JSON.parse(stored);
      // Gabungkan dengan default sekiranya ada medan baru
      return { ...DEFAULT_SYSTEM_DATA, ...parsed };
    }
  } catch (err) {
    console.warn("Gagal membaca LocalStorage, menggunakan data lalai:", err);
  }
  return DEFAULT_SYSTEM_DATA;
}

function saveStoredData(data) {
  try {
    localStorage.setItem("SK_RANGGU_DASHBOARD_DATA", JSON.stringify(data));
    return true;
  } catch (err) {
    console.error("Gagal menyimpan ke LocalStorage:", err);
    return false;
  }
}

function resetToDefaultData() {
  localStorage.removeItem("SK_RANGGU_DASHBOARD_DATA");
  return DEFAULT_SYSTEM_DATA;
}

// Eksport pemboleh ubah global untuk kegunaan skrip
window.SKR_DATA = getStoredData();
window.SKR_DEFAULT_DATA = DEFAULT_SYSTEM_DATA;
window.getStoredData = getStoredData;
window.saveStoredData = saveStoredData;
window.resetToDefaultData = resetToDefaultData;
