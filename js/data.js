/**
 * SISTEM DASHBOARD UNIT PENGURUSAN PENTADBIRAN & KURIKULUM
 * SEKOLAH KEBANGSAAN RANGGU, TAWAU, SABAH (XBA3037)
 * 
 * Pangkalan Data Induk Rasmi - Berdasarkan Senarai Staf SK Ranggu (08.06.2026)
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

  // KREDIT PEMBANGUN SISTEM (RASMI & RINGKAS)
  developer: {
    name: "Mohammad Fikrey",
    role: "Pentadbir Sistem & Pengurusan ICT",
    unit: "Unit Pengurusan Pentadbiran SK Ranggu"
  },

  // STATISTIK RASMI SK RANGGU
  stats: {
    totalTeachers: 54,        // 19 Lelaki, 35 Perempuan
    totalStaff: 6,            // AKP (6 Perempuan)
    totalAllStaff: 60,        // Jumlah Staf Keseluruhan
    morningSession: 30,       // Sesi Pagi (13 L, 17 P)
    afternoonSession: 24,     // Sesi Petang (6 L, 18 P)
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
      author: "PK Pentadbiran (Puan Rahmatiah)",
      content: "Semua guru diminta melengkapkan dan menghantar e-RPH sebelum jam 5.00 petang hari Jumaat melalui pautan rasmi DELIMa."
    },
    {
      id: "ann-2",
      title: "Mesyuarat Pengurusan Kurikulum & Panitia Bil 3/2025",
      date: "2025-10-12",
      priority: "Penting",
      category: "Mesyuarat",
      author: "Setiausaha Kurikulum (Puan Ani binti Patola)",
      content: "Mesyuarat Kurikulum Bil 3 akan diadakan di Bilik Mesyuarat pada jam 1.30 petang. Kehadiran semua Ketua Panitia adalah diwajibkan."
    },
    {
      id: "ann-3",
      title: "Perekodan Tahap Penguasaan Pentaksiran Bilik Darjah (PBD)",
      date: "2025-10-20",
      priority: "Sederhana",
      category: "PBD",
      author: "Unit Kurikulum",
      content: "Modul pengisian PBD dalam portal idMe dibuka. Sila kemas kini penilaian murid berpandukan rubrik DSKP."
    }
  ],

  // DOKUMEN & BAHAN KURIKULUM (BOLEH DIMUAT NAIK OLEH ADMIN)
  documents: [
    {
      id: "doc-1",
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
      id: "doc-2",
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
      id: "doc-3",
      title: "DSKP KSSR Semakan Bahasa Melayu Tahun 1 hingga 6",
      category: "DSKP & RPT",
      panitia: "Bahasa Melayu",
      date: "2025-03-01",
      type: "ZIP",
      fileUrl: "#",
      size: "4.8 MB",
      uploader: "Sabriah @ Habibah (KP BM)"
    },
    {
      id: "doc-4",
      title: "Jadual Waktu Induk & Agihan Waktu Mengajar Sesi 2025/2026",
      category: "Takwim & Jadual",
      panitia: "Pentadbiran",
      date: "2025-03-15",
      type: "PDF",
      fileUrl: "#",
      size: "1.8 MB",
      uploader: "Rahmatiah binti Mohd Juda"
    }
  ],

  // SENARAI PENUH 60 STAF SK RANGGU (54 PPP + 6 AKP)
  staffList: [
    // 1. PENTADBIRAN TERTINGGI (PENGURUSAN SEKOLAH)
    { id: 1, name: "YUNUS BIN PATARAI", ic: "721005-12-5911", role: "Guru Besar (Pengerusi)", grade: "DG10", type: "PPP", session: "Pagi", category: "Pengurusan Tertinggi", tier: 1 },
    { id: 2, name: "RAHMATIAH BINTI MOHD JUDA", ic: "751212-12-5962", role: "Penolong Kanan Pentadbiran & Kurikulum (PK 1)", grade: "DG10", type: "PPP", session: "Pagi", category: "Pentadbiran & Kurikulum", tier: 2 },
    { id: 3, name: "KOMALA BINTI JOSEPH", ic: "730914-12-5884", role: "Penolong Kanan Hal Ehwal Murid (PK HEM)", grade: "DG12", type: "PPP", session: "Pagi", category: "Hal Ehwal Murid", tier: 2 },
    { id: 4, name: "WARNAH BINTI SIRA", ic: "700207-12-5618", role: "Penolong Kanan Kokurikulum (PK KOKU)", grade: "DG10", type: "PPP", session: "Pagi", category: "Kokurikulum", tier: 2 },
    { id: 5, name: "EMRAN BIN HJ SELAMAT", ic: "691017-12-5279", role: "Penolong Kanan Petang (PK Petang)", grade: "DG10", type: "PPP", session: "Petang", category: "Pengurusan Petang", tier: 2 },

    // 2. SETIAUSAHA & PEGAWAI KHAS
    { id: 9, name: "ANI BINTI PATOLA", ic: "840229-12-5496", role: "Setiausaha Kurikulum", grade: "DG10", type: "PPP", session: "Pagi", category: "Jawatankuasa Kurikulum", tier: 3 },
    { id: 32, name: "NORLINA BINTI BAGWAS", ic: "730926-12-5494", role: "Setiausaha Hal Ehwal Murid", grade: "DG10", type: "PPP", session: "Pagi", category: "Hal Ehwal Murid", tier: 3 },
    { id: 13, name: "EVALORENNA BINTI LAMINSIN", ic: "900201-12-5306", role: "Setiausaha Kokurikulum", grade: "DG10", type: "PPP", session: "Pagi", category: "Kokurikulum", tier: 3 },
    { id: 26, name: "MOHD ALFAIZAL BIN DAUD", ic: "820403-12-6243", role: "Guru Data Sekolah", grade: "DG12", type: "PPP", session: "Pagi", category: "ICT & Pengurusan Data", tier: 3 },
    { id: 41, name: "ROSMINAH BINTI SAPAR", ic: "701026-12-5760", role: "Guru Perpustakaan & Media (GPM)", grade: "DG10", type: "PPP", session: "Pagi", category: "Pusat Sumber Sekolah", tier: 3 },
    { id: 47, name: "SITI NAURIN FADZILAH BINTI JALAL", ic: "790718-01-5164", role: "Guru Bimbingan & Kaunseling", grade: "DG12", type: "PPP", session: "Pagi", category: "Bimbingan & Kaunseling", tier: 3 },
    { id: 12, name: "DARMAWATI BTE LOKKONG", ic: "850603-12-6042", role: "Guru Bimbingan & Kaunseling", grade: "DG10", type: "PPP", session: "Pagi", category: "Bimbingan & Kaunseling", tier: 3 },
    { id: 28, name: "MUHAMADIAN BIN SUAIBU", ic: "790313-12-5859", role: "Guru Pemulihan Khas", grade: "DG10", type: "PPP", session: "Pagi", category: "Program Khas", tier: 3 },
    { id: 53, name: "YUSNI BINTI WAHJUDIN", ic: "800624-12-5676", role: "Guru Prasekolah", grade: "DG10", type: "PPP", session: "Pagi", category: "Program Khas", tier: 3 },

    // 3. KETUA-KETUA PANITIA MATA PELAJARAN
    { id: 44, name: "SABRIAH @ HABIBAH BINTI ABDUL SABAR", ic: "691228-12-5594", role: "Ketua Panitia Bahasa Melayu", grade: "DG12", type: "PPP", session: "Pagi", category: "Ketua Panitia", tier: 4 },
    { id: 16, name: "HAMSIAH BINTI HAMID", ic: "831119-12-5538", role: "Ketua Panitia Bahasa Inggeris", grade: "DG10", type: "PPP", session: "Pagi", category: "Ketua Panitia", tier: 4 },
    { id: 23, name: "MASTURAH BINTI TUDA", ic: "750803-12-5900", role: "Ketua Panitia Matematik", grade: "DG12", type: "PPP", session: "Pagi", category: "Ketua Panitia", tier: 4 },
    { id: 20, name: "JUNAID BIN NURDIN", ic: "750625-12-5755", role: "Ketua Panitia Sains", grade: "DG12", type: "PPP", session: "Pagi", category: "Ketua Panitia", tier: 4 },
    { id: 37, name: "RINI BINTI DAUD", ic: "740707-12-5282", role: "Ketua Panitia Sejarah", grade: "DG12", type: "PPP", session: "Pagi", category: "Ketua Panitia", tier: 4 },
    { id: 17, name: "HASNAN BIN MAT ZIN", ic: "750209-03-5259", role: "Ketua Panitia Pendidikan Islam", grade: "DG12", type: "PPP", session: "Pagi", category: "Ketua Panitia", tier: 4 },
    { id: 49, name: "SUNARTI BINTI TAPPA", ic: "841008-12-5470", role: "Ketua Panitia Bahasa Arab", grade: "DG10", type: "PPP", session: "Pagi", category: "Ketua Panitia", tier: 4 },
    { id: 51, name: "WAFA FARHANA BINTI ABD KADIR", ic: "931108-12-5530", role: "Ketua Panitia PJPK", grade: "DG10", type: "PPP", session: "Pagi", category: "Ketua Panitia", tier: 4 },
    { id: 39, name: "RONI BIN BACHO", ic: "840509-12-6215", role: "Ketua Panitia RBT", grade: "DG12", type: "PPP", session: "Pagi", category: "Ketua Panitia", tier: 4 },
    { id: 46, name: "SITI JAWARA BINTI LUKMAN", ic: "730126-12-5584", role: "Ketua Panitia Seni Visual", grade: "DG10", type: "PPP", session: "Pagi", category: "Ketua Panitia", tier: 4 },
    { id: 14, name: "FARIDAH BINTI SUNU", ic: "741020-12-6072", role: "Ketua Panitia Pendidikan Moral", grade: "DG10", type: "PPP", session: "Pagi", category: "Ketua Panitia", tier: 4 },

    // 4. GURU AKADEMIK BIASA (SESI PAGI & PETANG)
    { id: 24, name: "MOHAMMAD FIKREY BIN ABDUL GAPAR", ic: "910528-12-5411", role: "Guru Akademik / Pentadbir Sistem", grade: "DG10", type: "PPP", session: "Pagi", category: "Guru Akademik", tier: 4 },
    { id: 6, name: "AG KU KEMAINDDRA BIN PG MOHD TAIB", ic: "711026-12-5153", role: "Guru Akademik", grade: "DG10", type: "PPP", session: "Pagi", category: "Guru Akademik", tier: 4 },
    { id: 7, name: "AHAD BIN JAAFAR", ic: "660717-12-5251", role: "Guru Akademik", grade: "DG7", type: "PPP", session: "Pagi", category: "Guru Akademik", tier: 4 },
    { id: 8, name: "AINATUN NADHIRAH BINTI DHARMAWI", ic: "971008-12-5118", role: "Guru Akademik", grade: "DG9", type: "PPP", session: "Petang", category: "Guru Akademik", tier: 4 },
    { id: 10, name: "ASMADI BIN LAJJAKASI", ic: "830602-12-6093", role: "Guru Akademik", grade: "DG10", type: "PPP", session: "Pagi", category: "Guru Akademik", tier: 4 },
    { id: 11, name: "BAJAM BINTI LADUNG", ic: "820324-12-5314", role: "Guru Akademik", grade: "DG12", type: "PPP", session: "Pagi", category: "Guru Akademik", tier: 4 },
    { id: 15, name: "HALIM BIN BIDI", ic: "690322-08-6291", role: "Guru Akademik", grade: "DG12", type: "PPP", session: "Petang", category: "Guru Akademik", tier: 4 },
    { id: 18, name: "JAIBY BIN JULIAN", ic: "660707-12-5901", role: "Guru Akademik", grade: "DG7", type: "PPP", session: "Petang", category: "Guru Akademik", tier: 4 },
    { id: 19, name: "JAINAH BINTI SULAIMAN", ic: "720515-12-5554", role: "Guru Akademik", grade: "DG10", type: "PPP", session: "Petang", category: "Guru Akademik", tier: 4 },
    { id: 21, name: "MARIANA BINTI KASSIM", ic: "730807-12-5766", role: "Guru Akademik", grade: "DG12", type: "PPP", session: "Petang", category: "Guru Akademik", tier: 4 },
    { id: 22, name: "MARINI BINTI LADI", ic: "810914-12-5278", role: "Guru Akademik", grade: "DG10", type: "PPP", session: "Petang", category: "Guru Akademik", tier: 4 },
    { id: 25, name: "MOHAMMAD IKHWAN BIN ABDURAIS", ic: "940502-12-5701", role: "Guru Akademik", grade: "DG9", type: "PPP", session: "Petang", category: "Guru Akademik", tier: 4 },
    { id: 27, name: "MOHD MUEMIN BIN MOHD AMIN JAPAR", ic: "870131-49-5381", role: "Guru Akademik", grade: "DG9", type: "PPP", session: "Petang", category: "Guru Akademik", tier: 4 },
    { id: 29, name: "NECHI BINTI SERUNAI", ic: "681103-12-5540", role: "Guru Akademik", grade: "DG12", type: "PPP", session: "Petang", category: "Guru Akademik", tier: 4 },
    { id: 30, name: "NOOR SYAFIQAH NADHIRAH BINTI JAMALUDDIN", ic: "980221-03-6426", role: "Guru Akademik", grade: "DG9", type: "PPP", session: "Petang", category: "Guru Akademik", tier: 4 },
    { id: 31, name: "NORIMAH BINTI JOYO REJO", ic: "740526-12-5080", role: "Guru Akademik", grade: "DG10", type: "PPP", session: "Petang", category: "Guru Akademik", tier: 4 },
    { id: 33, name: "NOZE BINTI TUKIJAN", ic: "761202-12-5810", role: "Guru Akademik", grade: "DG9", type: "PPP", session: "Petang", category: "Guru Akademik", tier: 4 },
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
    { id: 52, name: "WAN MUHAMAD YUSUF BIN WAN ABDUL AZIZ", ic: "870519-08-6373", role: "Guru Akademik", grade: "DG10", type: "PPP", session: "Pagi", category: "Guru Akademik", tier: 4 },
    { id: 54, name: "ZAMRIE BIN OMAR ALI", ic: "780807-12-5809", role: "Guru Akademik", grade: "DG6", type: "PPP", session: "Petang", category: "Guru Akademik", tier: 4 },

    // 5. ANGGOTA KUMPULAN PELAKSANA (AKP - 6 ORANG)
    { id: 101, name: "HANISAH BINTI MANSOR", ic: "750614-12-5450", role: "Pembantu Tadbir (Perkeranian/Operasi)", grade: "N2", type: "AKP", session: "Pagi", category: "Kumpulan Pelaksana (AKP)", tier: 4 },
    { id: 102, name: "NURAIDA BINTI KAIMUDIN", ic: "890626-12-5508", role: "Pembantu Tadbir (Kewangan)", grade: "N1", type: "AKP", session: "Pagi", category: "Kumpulan Pelaksana (AKP)", tier: 4 },
    { id: 103, name: "MULYANTI BINTI MIKIL @ MOHAMED ISHAK", ic: "840815-12-5704", role: "Pembantu Operasi (PKA)", grade: "H1", type: "AKP", session: "Pagi", category: "Kumpulan Pelaksana (AKP)", tier: 4 },
    { id: 104, name: "RAPIDAH BINTI KARIM", ic: "831002-12-5788", role: "Pembantu Pengurusan Murid (PPM Prasekolah)", grade: "N2", type: "AKP", session: "Pagi", category: "Kumpulan Pelaksana (AKP)", tier: 4 },
    { id: 105, name: "YENNY BINTI SANAUDI", ic: "801027-12-6026", role: "Pembantu Pengurusan Murid (PPM Prasekolah)", grade: "N2", type: "AKP", session: "Pagi", category: "Kumpulan Pelaksana (AKP)", tier: 4 },
    { id: 106, name: "FARIDAH BINTI ACHO", ic: "950807-12-5832", role: "Pembantu Pengurusan Murid (PPM)", grade: "N1 (COS)", type: "AKP", session: "Pagi", category: "Kumpulan Pelaksana (AKP)", tier: 4 }
  ],

  // DATA JAWATANKUASA KURIKULUM & PANITIA
  committees: [
    { id: "pan-bm", name: "Panitia Bahasa Melayu", head: "SABRIAH @ HABIBAH BINTI ABDUL SABAR", membersCount: 8, status: "Aktif", kpi: "96% Murid Menguasai TP3-TP6", dskpStatus: "Lengkap (Tahun 1-6)" },
    { id: "pan-bi", name: "Panitia Bahasa Inggeris", head: "HAMSIAH BINTI HAMID", membersCount: 7, status: "Aktif", kpi: "CEFR Alignment & HIP Programme", dskpStatus: "Lengkap (Tahun 1-6)" },
    { id: "pan-mat", name: "Panitia Matematik", head: "MASTURAH BINTI TUDA", membersCount: 7, status: "Aktif", kpi: "Penguasaan Fakta Asas 95%", dskpStatus: "Lengkap (Tahun 1-6)" },
    { id: "pan-sn", name: "Panitia Sains", head: "JUNAID BIN NURDIN", membersCount: 6, status: "Aktif", kpi: "Amali Berfokus STEM 100%", dskpStatus: "Lengkap (Tahun 1-6)" },
    { id: "pan-pai", name: "Panitia Pendidikan Islam", head: "HASNAN BIN MAT ZIN", membersCount: 9, status: "Aktif", kpi: "Khatam Al-Quran & Kem Solat", dskpStatus: "Lengkap (Tahun 1-6)" },
    { id: "pan-ba", name: "Panitia Bahasa Arab", head: "SUNARTI BINTI TAPPA", membersCount: 3, status: "Aktif", kpi: "Kemahiran Berkomunikasi Asas", dskpStatus: "Lengkap (Tahun 1-6)" },
    { id: "pan-sej", name: "Panitia Sejarah", head: "RINI BINTI DAUD", membersCount: 4, status: "Aktif", kpi: "Kajian Kes Sejarah 100%", dskpStatus: "Lengkap (Tahun 4-6)" },
    { id: "pan-pjpk", name: "Panitia PJPK", head: "WAFA FARHANA BINTI ABD KADIR", membersCount: 6, status: "Aktif", kpi: "Ujian SEGAK 100% Selesai", dskpStatus: "Lengkap (Tahun 1-6)" },
    { id: "pan-rbt", name: "Panitia RBT", head: "RONI BIN BACHO", membersCount: 4, status: "Aktif", kpi: "Projek Reka Cipta Berasaskan Modul", dskpStatus: "Lengkap (Tahun 4-6)" },
    { id: "pan-psv", name: "Panitia Seni Visual", head: "SITI JAWARA BINTI LUKMAN", membersCount: 5, status: "Aktif", kpi: "Portfolio Seni Visual Lengkap", dskpStatus: "Lengkap (Tahun 1-6)" },
    { id: "pan-moral", name: "Panitia Pendidikan Moral", head: "FARIDAH BINTI SUNU", membersCount: 3, status: "Aktif", kpi: "Amalan Nilai Murni Berterusan", dskpStatus: "Lengkap (Tahun 1-6)" },
    { id: "pan-khas", name: "Unit Pemulihan Khas & Prasekolah", head: "MUHAMADIAN BIN SUAIBU & YUSNI BINTI WAHJUDIN", membersCount: 4, status: "Aktif", kpi: "Sifar Buta Huruf Tahap 1", dskpStatus: "Lengkap" }
  ],

  // DATA TAKWIM KURIKULUM
  takwimEvents: [
    { id: "tak-1", title: "Mesyuarat Pengurusan Kurikulum Bil 3/2025", date: "2025-10-15", time: "01:30 PM", venue: "Bilik Mesyuarat", inCharge: "ANI BINTI PATOLA (SU Kurikulum)", status: "Akan Datang" },
    { id: "tak-2", title: "Verifikasi PBD & UASA Pertengahan Sesi", date: "2025-10-22", time: "Sepanjang Hari", venue: "Bilik Data", inCharge: "RAHMATIAH BINTI MOHD JUDA (PK1)", status: "Akan Datang" },
    { id: "tak-3", title: "Dialog Prestasi Akademik Bersama Ibu Bapa", date: "2025-11-05", time: "08:00 AM - 12:00 PM", venue: "Dewan Terbuka SK Ranggu", inCharge: "Semua Guru Kelas", status: "Dalam Perancangan" },
    { id: "tak-4", title: "Ujian SEGAK Fasa 2 (Tahun 4, 5, 6)", date: "2025-11-12", time: "Waktu PJPK", venue: "Padang Sekolah", inCharge: "Panitia PJPK", status: "Dalam Perancangan" },
    { id: "tak-5", title: "Ujian Akhir Sesi Akademik (UASA) 2025/2026", date: "2025-12-08", time: "07:30 AM - 01:00 PM", venue: "Kelas Tahun 4, 5 & 6", inCharge: "Jawatankuasa Peperiksaan", status: "Dalam Perancangan" }
  ],

  // DATA GURU BERTUGAS MINGGUAN
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

  // DATA ANALISIS PBD
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
  ],

  // GOOGLE SHEETS
  googleSheets: {
    sheetId: "19BgxY06KSHSizUsnreZXnXNoUbf-ivhaVj9YVQ8hVdU",
    gid: "2057996103",
    fullUrl: "https://docs.google.com/spreadsheets/d/19BgxY06KSHSizUsnreZXnXNoUbf-ivhaVj9YVQ8hVdU/edit?gid=2057996103#gid=2057996103"
  }
};

// SIMPAN ATAU AMBIL DATA DARI LOCAL STORAGE
function getStoredData() {
  try {
    const stored = localStorage.getItem("SK_RANGGU_DASHBOARD_DATA_V3");
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
    localStorage.setItem("SK_RANGGU_DASHBOARD_DATA_V3", JSON.stringify(data));
    return true;
  } catch (err) {
    console.error("Gagal simpan LocalStorage:", err);
    return false;
  }
}

function resetToDefaultData() {
  localStorage.removeItem("SK_RANGGU_DASHBOARD_DATA_V3");
  return DEFAULT_SYSTEM_DATA;
}

window.SKR_DATA = getStoredData();
window.SKR_DEFAULT_DATA = DEFAULT_SYSTEM_DATA;
window.saveStoredData = saveStoredData;
window.resetToDefaultData = resetToDefaultData;
