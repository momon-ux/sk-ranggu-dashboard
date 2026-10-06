/**
 * SISTEM DASHBOARD UNIT PENGURUSAN PENTADBIRAN & KURIKULUM
 * SEKOLAH KEBANGSAAN RANGGU, TAWAU, SABAH (XBA3037)
 * 
 * Pangkalan Data Induk Rasmi - Berdasarkan Carta Organisasi Pentadbiran 2026
 * & Senarai 60 Staf SK Ranggu (08.06.2026)
 * Pembangun: MOHAMMAD FIKREY BIN ABDUL GAPAR (Pentadbir Sistem)
 */

const DEFAULT_SYSTEM_DATA = {
  // PROFIL SEKOLAH
  school: {
    name: "PAPAN INDUK UTAMA SEKOLAH KEBANGSAAN RANGGU",
    shortName: "SK Ranggu",
    code: "XBA3037",
    gred: "Sekolah Kebangsaan Gred A",
    address: "Peti Surat 842, 91008 Tawau, Sabah",
    location: "KM16, Jalan Apas, Kampung Ranggu, Tawau",
    zone: "Zon Balung, PPD Tawau",
    state: "Sabah",
    phone: "089-925493",
    email: "xba3037@moe.edu.my",
    motto: "Berusaha, Berilmu, Berbakti",
    vision: "Kecemerlangan Dalam Semua Aspek Pendidikan",
    mission: "Melestarikan Sistem Pendidikan Yang Berkualiti Untuk Membangunkan Potensi Individu Bagi Memenuhi Aspirasi Negara",
    establishedYear: 1973,
    academicSession: "Sesi Persekolahan 2025 / 2026",
    logoKpm: "assets/kpm.png",
    logoSchool: "assets/skrg.png",
    posterCarta: "assets/carta-organisasi-2026.png",
    infografikEnrolmen: "assets/infografik-enrolmen-5okt2026.png"
  },

  // KREDIT PEMBANGUN
  developer: {
    name: "MOHAMMAD FIKREY BIN ABDUL GAPAR",
    role: "Pentadbir Sistem & Penyelaras ICT (Guru Kelas 6 Jayyid)",
    unit: "Unit Pengurusan Pentadbiran SK Ranggu"
  },

  // STATISTIK RASMI KESELURUHAN (DATA APDM / MOEIS & TELEGRAM 5 OKT 2026)
  stats: {
    totalTeachers: 54,
    totalStaff: 6,
    totalAllStaff: 60,
    morningSession: 30,
    afternoonSession: 24,
    totalStudents: 890,
    muridPerdana: 816,
    muridPrasekolah: 74,
    maleStudents: 466,
    femaleStudents: 424,
    perdanaLelaki: 423,
    perdanaPerempuan: 393,
    muridIslam: 801,
    muridBukanIslam: 15,
    muridWarganegara: 799,
    muridBukanWarganegara: 17,
    sukuKaumMelayu: 84,
    sukuKaumCina: 1,
    sukuKaumBumiSabah: 307,
    sukuKaumLain: 424,
    tarikhKemaskiniEnrolmen: "5 Oktober 2026",
    totalClasses: 27,
    perdanaClasses: 24,
    preschoolClasses: 3,
    totalCommittees: 12,
    okuStudents: 3,
    yatimStudents: 15,
    pbdMasteryPercent: 96.6,
    activeWeek: 28,
    currentTerm: "Penggal 2"
  },

  // DATA DEMOGRAFI & 27 KELAS RASMI SK RANGGU 2026 (APDM / MOEIS & TELEGRAM RASMI)
  studentDemographics: {
    tarikhKemaskini: "5 Oktober 2026",
    sumberData: "APDM / MOEIS & Hebahan Rasmi Telerasmi SKRG",
    infografikPoster: "assets/infografik-enrolmen-5okt2026.png",
    totalStudents: 890,
    perdanaTotal: 816,
    praTotal: 74,
    maleStudents: 466,
    femaleStudents: 424,
    perdanaLelaki: 423,
    perdanaPerempuan: 393,
    praLelaki: 43,
    praPerempuan: 31,
    agamaIslam: 801,
    agamaBukanIslam: 15,
    warganegara: 799,
    bukanWarganegara: 17,
    sukuKaum: {
      melayu: 84,
      cina: 1,
      bumiputeraSabah: 307,
      lainLain: 424
    },
    totalClasses: 27,
    praClasses: 3,
    perdanaClasses: 24,
    okuStudents: 3,
    yatimStudents: 15,
    yearSummary: {
      "PRASEKOLAH": { total: 74, lelaki: 43, perempuan: 31 },
      "TAHUN SATU": { total: 126, lelaki: 61, perempuan: 65 },
      "TAHUN DUA": { total: 134, lelaki: 67, perempuan: 67 },
      "TAHUN TIGA": { total: 135, lelaki: 68, perempuan: 67 },
      "TAHUN EMPAT": { total: 139, lelaki: 79, perempuan: 60 },
      "TAHUN LIMA": { total: 143, lelaki: 76, perempuan: 67 },
      "TAHUN ENAM": { total: 139, lelaki: 72, perempuan: 67 }
    },
    classList: [
      { tahun: "PRASEKOLAH", kelas: "MUTIARA HATI", guru: "YUSNI BINTI WAHJUDIN", total: 25, lelaki: 15, perempuan: 10 },
      { tahun: "PRASEKOLAH", kelas: "MUTIARA KASIH", guru: "RAHMATIA BINTI MOHAMAD", total: 24, lelaki: 13, perempuan: 11 },
      { tahun: "PRASEKOLAH", kelas: "PERMATA HATI", guru: "MARIANA BINTI KASSIM", total: 25, lelaki: 15, perempuan: 10 },
      { tahun: "TAHUN SATU", kelas: "ILTIZAM", guru: "NOOR SYAFIQAH NADHIRAH BINTI JAMALUDDIN", total: 32, lelaki: 17, perempuan: 15 },
      { tahun: "TAHUN SATU", kelas: "JAYYID", guru: "NORLINA BINTI BAGWAS", total: 31, lelaki: 14, perempuan: 17 },
      { tahun: "TAHUN SATU", kelas: "KHOIR", guru: "FARIDAH BINTI SUNU", total: 32, lelaki: 16, perempuan: 16 },
      { tahun: "TAHUN SATU", kelas: "MUMTAZ", guru: "RASMAWATI BINTI TAUSE", total: 31, lelaki: 14, perempuan: 17 },
      { tahun: "TAHUN DUA", kelas: "ILTIZAM", guru: "MOHAMMAD IKHWAN BIN ABDURAIS", total: 35, lelaki: 19, perempuan: 16 },
      { tahun: "TAHUN DUA", kelas: "JAYYID", guru: "MARINI BINTI LADI", total: 35, lelaki: 18, perempuan: 17 },
      { tahun: "TAHUN DUA", kelas: "KHOIR", guru: "S LILI BINTI LADI", total: 32, lelaki: 17, perempuan: 15 },
      { tahun: "TAHUN DUA", kelas: "MUMTAZ", guru: "SITI JAWARA BINTI LUKMAN", total: 32, lelaki: 13, perempuan: 19 },
      { tahun: "TAHUN TIGA", kelas: "ILTIZAM", guru: "JAINAH BINTI SULAIMAN", total: 33, lelaki: 17, perempuan: 16 },
      { tahun: "TAHUN TIGA", kelas: "JAYYID", guru: "AINATUN NADHIRAH BINTI DHARMAWI", total: 34, lelaki: 17, perempuan: 17 },
      { tahun: "TAHUN TIGA", kelas: "KHOIR", guru: "RUHAYA BINTI AHMAD", total: 34, lelaki: 16, perempuan: 18 },
      { tahun: "TAHUN TIGA", kelas: "MUMTAZ", guru: "NUR FAEZAH BINTI BANTALANI", total: 34, lelaki: 18, perempuan: 16 },
      { tahun: "TAHUN EMPAT", kelas: "ILTIZAM", guru: "ROSIDIAN BIN IDRIS", total: 34, lelaki: 19, perempuan: 15 },
      { tahun: "TAHUN EMPAT", kelas: "JAYYID", guru: "NOZE BINTI TUKIJAN", total: 35, lelaki: 20, perempuan: 15 },
      { tahun: "TAHUN EMPAT", kelas: "KHOIR", guru: "MASTURAH BINTI TUDA", total: 35, lelaki: 21, perempuan: 14 },
      { tahun: "TAHUN EMPAT", kelas: "MUMTAZ", guru: "NURUL ANISA BINTI SAPARUDIN", total: 35, lelaki: 19, perempuan: 16 },
      { tahun: "TAHUN LIMA", kelas: "ILTIZAM", guru: "WAN MUHAMAD YUSUF BIN WAN ABDUL AZIZ", total: 36, lelaki: 19, perempuan: 17 },
      { tahun: "TAHUN LIMA", kelas: "JAYYID", guru: "RINI BINTI DAUD", total: 36, lelaki: 20, perempuan: 16 },
      { tahun: "TAHUN LIMA", kelas: "KHOIR", guru: "TANJANG BIN TURE", total: 36, lelaki: 17, perempuan: 19 },
      { tahun: "TAHUN LIMA", kelas: "MUMTAZ", guru: "HAMSIAH BINTI HAMID", total: 35, lelaki: 20, perempuan: 15 },
      { tahun: "TAHUN ENAM", kelas: "ILTIZAM", guru: "AGKU KEMAINDDRA BIN PG MOHD TAIB", total: 35, lelaki: 18, perempuan: 17 },
      { tahun: "TAHUN ENAM", kelas: "JAYYID", guru: "MOHAMMAD FIKREY BIN ABDUL GAPAR", total: 35, lelaki: 18, perempuan: 17 },
      { tahun: "TAHUN ENAM", kelas: "KHOIR", guru: "MOHD ALFAIZAL BIN DAUD", total: 34, lelaki: 17, perempuan: 17 },
      { tahun: "TAHUN ENAM", kelas: "MUMTAZ", guru: "BAJAM BINTI LADUNG", total: 35, lelaki: 19, perempuan: 16 }
    ],
    topRaces: [
      { kaum: "Bugis", count: 369 },
      { kaum: "Bajau", count: 135 },
      { kaum: "Melayu", count: 87 },
      { kaum: "Suluk", count: 48 },
      { kaum: "Tidung", count: 32 },
      { kaum: "Banjar", count: 25 },
      { kaum: "Jawa", count: 20 },
      { kaum: "Iban", count: 18 }
    ]
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

  // =========================================================================
  // PENGURUSAN UNIT HAL EHWAL MURID (HEM) 2026
  // =========================================================================
  hemHierarchy2026: {
    title: "CARTA ORGANISASI UNIT HAL EHWAL MURID (HEM) 2026",
    penasihat: "YUNUS BIN PATARAI (Guru Besar)",
    pengerusi: "KOMALA BINTI JOSEPH (Penolong Kanan HEM)",
    timbPengerusi1: "RAHMATIAH BINTI MOHD JUDA (PK Pentadbiran)",
    timbPengerusi2: "WARNAH BINTI SIRA (PK Kokurikulum)",
    timbPengerusi3: "EMRAN BIN HJ SELAMAT (PK Petang)",
    setiausaha: "NORLINA BINTI BAGWAS",
    penolongSetiausaha: "DARMAWATI BTE LOKKONG",
    motto: "Sahsiah Terpuji, Murid Berkualiti, Sekolah Harmoni",
    kpi: [
      { label: "Sasaran Kehadiran Murid", value: "95%+", icon: "📈" },
      { label: "Kadar Salah Laku Disiplin", value: "< 0.5%", icon: "🛡️" },
      { label: "Penerima Buku Teks (SPBT)", value: "100% (890 Murid)", icon: "📖" },
      { label: "Murid Layak RMT & Susu", value: "184 Murid", icon: "🥛" }
    ],
    units: [
      { id: "hem-disiplin", name: "Lembaga Disiplin & Pengawas Sekolah", head: "ASMADI BIN LAJJAKASI", icon: "🛡️", badge: "Sahsiah", desc: "Pengurusan peraturan sekolah, pembentukan watak pemimpin murid & perekodan amalan baik serta salah laku dalam SSDM." },
      { id: "hem-spbt", name: "Skim Pinjaman Buku Teks (SPBT)", head: "FARIDAH BINTI SUNU", icon: "📖", badge: "Buku Teks", desc: "Pengurusan Bilik Operasi SPBT (BOSS), penerimaan bekalan, pengagihan 100% dan pemulangan buku teks murid." },
      { id: "hem-ubk", name: "Bimbingan & Kaunseling (UBK) / Minda Sihat", head: "SITI NAURIN FADZILAH BINTI JALAL", icon: "🤝", badge: "Kaunseling", desc: "Program Guru Penyayang, Minda Sihat KPM, Pembimbing Rakan Sebaya (PRS) dan intervensi psikososial emosi murid." },
      { id: "hem-rmt", name: "Rancangan Makanan Tambahan (RMT) & PSS", head: "SITI JAWARA BINTI LUKMAN", icon: "🥛", badge: "Pemakanan", desc: "Penyeliaan menu seimbang murid RMT, pematuhan SOP kebersihan dan pengagihan bekalan Program Susu Sekolah." },
      { id: "hem-kebajikan", name: "Kebajikan Murid, BAP & KWAPM", head: "DARMAWATI BTE LOKKONG", icon: "❤️", badge: "Bantuan", desc: "Penyelarasan Bantuan Awal Persekolahan (BAP), KWAPM, bantuan pakaian seragam serta santunan murid yatim & asnaf." },
      { id: "hem-kesihatan", name: "Kesihatan, Rawatan & Pergigian", head: "WAFA FARHANA BINTI ABD KADIR", icon: "🩺", badge: "Kesihatan", desc: "Pemeriksaan berkala kesihatan, rekod imunisasi KKM, rawatan klinik pergigian bergerak dan pengurusan bilik isolasi." },
      { id: "hem-3k", name: "Program 3K (Keselamatan, Kebersihan, Kesihatan)", head: "WAN MUHAMAD YUSUF BIN WAN ABDUL AZIZ", icon: "🦺", badge: "3K", desc: "Pelan kecemasan kebakaran (fire drill), penarafan tandas bersih bertaraf bintang dan kawalan keselamatan zon sekolah." },
      { id: "hem-kantin", name: "Jawatankuasa Kantin Sekolah", head: "YUSNI BINTI WAHJUDIN", icon: "🍽️", badge: "Kantin", desc: "Pemantauan gred kebersihan premis kantin, sampel makanan harian dan penetapan tanda harga berpatutan." },
      { id: "hem-apdm", name: "Kehadiran Murid & Sifar Cicir (APDM)", head: "MOHD ALFAIZAL BIN DAUD", icon: "📋", badge: "e-Kehadiran", desc: "Pengesahan harian e-Kehadiran sistem APDM sebelum 9.00 pagi, analisis bulanan dan tindakan murid berisiko cicir." },
      { id: "hem-pendaftaran", name: "Pendaftaran & Pertukaran Murid (MOEIS)", head: "MARIANA BINTI KASSIM", icon: "📝", badge: "Data Murid", desc: "Pengurusan kemasukan murid Prasekolah dan Tahun 1, rekod pertukaran sekolah dalam/luar negeri melalui MOEIS." }
    ]
  },

  // =========================================================================
  // PENGURUSAN UNIT KOKURIKULUM 2026
  // =========================================================================
  kokoHierarchy2026: {
    title: "CARTA ORGANISASI UNIT KOKURIKULUM 2026",
    penasihat: "YUNUS BIN PATARAI (Guru Besar)",
    pengerusi: "WARNAH BINTI SIRA (Penolong Kanan Kokurikulum)",
    timbPengerusi1: "RAHMATIAH BINTI MOHD JUDA (PK Pentadbiran)",
    timbPengerusi2: "KOMALA BINTI JOSEPH (PK HEM)",
    timbPengerusi3: "EMRAN BIN HJ SELAMAT (PK Petang)",
    setiausaha: "EVALORENNA BINTI LAMINSIN",
    penolongSetiausaha: "MOHAMMAD IKHWAN BIN ABDURAIS",
    penyelarasPajsk: "ROSIDIAN BIN IDRIS",
    motto: "Kecergasan Fizikal, Ketahanan Mental, Kecemerlangan Modal Insan",
    uniformUnits: [
      { name: "Persekutuan Pengakap Kanak-Kanak", head: "ASMADI BIN LAJJAKASI", icon: "🏕️", members: "Tahap 2 (Tahun 4, 5, 6)", badge: "Beruniform" },
      { name: "Tunas Kadet Remaja Sekolah (TKRS)", head: "JUNAID BIN NURDIN", icon: "🎖️", members: "Tahap 2 (Tahun 4, 5, 6)", badge: "Beruniform" },
      { name: "Bulan Sabit Merah Malaysia (BSMM)", head: "HAMSIAH BINTI HAMID", icon: "🚑", members: "Tahap 2 (Tahun 4, 5, 6)", badge: "Beruniform" },
      { name: "Pergerakan Puteri Islam Malaysia (PPIM)", head: "BAJAM BINTI LADUNG", icon: "🌸", members: "Tahap 2 (Tahun 4, 5, 6)", badge: "Beruniform" },
      { name: "Pandu Puteri Tunas", head: "RINI BINTI DAUD", icon: "🍀", members: "Tahap 2 (Tahun 4, 5, 6)", badge: "Beruniform" }
    ],
    clubUnits: [
      { name: "Persatuan Bahasa Melayu", head: "SABRIAH @ HABIBAH BINTI ABDUL SABAR", icon: "📚", field: "Bahasa & Sastera", badge: "Akademik" },
      { name: "English Club", head: "JAINAH BINTI SULAIMAN", icon: "🔤", field: "Language & HIP", badge: "Akademik" },
      { name: "Kelab STEM & Inovasi Sains", head: "RONI BIN BACHO", icon: "🔬", field: "Sains & RBT", badge: "Inovasi" },
      { name: "Persatuan Pendidikan Islam & J-QAF", head: "HASNAN BIN MAT ZIN", icon: "🕌", field: "Kerohanian & Dakwah", badge: "Agama" },
      { name: "Kelab Komputer & Media Digital", head: "MOHAMMAD FIKREY BIN ABDUL GAPAR", icon: "💻", field: "Literasi Digital & AI", badge: "Teknologi" },
      { name: "Kelab Seni Visual & Muzik Kebudayaan", head: "TANJANG BIN TURE", icon: "🎨", field: "Kesenian & Warisan", badge: "Kesenian" },
      { name: "Kelab Rukun Negara & Doktor Muda", head: "NOZE BINTI TUKIJAN", icon: "🇲🇾", field: "Patriotisme & Kesihatan", badge: "Sosial" }
    ],
    sportsUnits: [
      { name: "Kelab Bola Sepak", head: "WAN MUHAMAD YUSUF BIN WAN ABDUL AZIZ", icon: "⚽", field: "Padang", badge: "1M1S" },
      { name: "Kelab Bola Jaring", head: "WAFA FARHANA BINTI ABD KADIR", icon: "🏐", field: "Gelanggang", badge: "1M1S" },
      { name: "Kelab Badminton", head: "MASTURAH BINTI TUDA", icon: "🏸", field: "Dewan / Raket", badge: "1M1S" },
      { name: "Kelab Sepak Takraw", head: "MOHAMMADIAN BIN SUAIBU", icon: "🥏", field: "Gelanggang", badge: "1M1S" },
      { name: "Kelab Olahraga & Balapan", head: "ROSIDIAN BIN IDRIS", icon: "🏃", field: "Balapan", badge: "1M1S" }
    ],
    sportHouses: [
      { name: "Rumah Merah", color: "red", hex: "#df3f47", head: "HJH. MASTURAH BINTI TUDA (K)", motto: "Semangat Juang Membara", teachersCount: 10, standing: 1, points: 178 },
      { name: "Rumah Ungu", color: "purple", hex: "#6d36d8", head: "HALIM BIN BIDI (K)", motto: "Keazaman Menjana Kejuaraan", teachersCount: 11, standing: 2, points: 162 },
      { name: "Rumah Biru", color: "blue", hex: "#246bfd", head: "MUHAMADIAN BIN SUAIBU (K)", motto: "Gagah Perkasa Di Gelanggang", teachersCount: 11, standing: 3, points: 156 },
      { name: "Rumah Kuning", color: "amber", hex: "#e5ad00", head: "NORLINA BINTI BAGWAS (K)", motto: "Menyinari Arena Kejayaan", teachersCount: 11, standing: 4, points: 139 }
    ],
    achievements: [
      { title: "Kejohanan TASCAR 3.0 Peringkat Kebangsaan", badge: "Kebangsaan 🥇", level: "Kebangsaan", date: "2026", desc: "Penyampaian pingat dan sijil pencapaian cemerlang peringkat kebangsaan, dibimbing dan dilatih oleh MOHAMMAD FIKREY BIN ABDUL GAPAR." },
      { title: "White Bridge Unichamp", badge: "Daerah / Negeri 🥈", level: "Daerah / Negeri", date: "2026", desc: "Pengiktirafan dan penganugerahan kepada barisan murid dan guru pembimbing peserta kejohanan White Bridge Unichamp." },
      { title: "Minggu Kokurikulum Unit Beruniform (Pengakap)", badge: "Peringkat Sekolah", level: "Sekolah", date: "September 2026", desc: "Aktiviti kemahiran ikatan, perkhemahan, dan disiplin baris yang dikendalikan oleh Persekutuan Pengakap Kanak-Kanak SK Ranggu." }
    ]
  },

  // =========================================================================
  // SK RANGGU SPORTSYNC • KEJOHANAN OLAHRAGA TAHUNAN 2026 (KOT 26)
  // Rujukan Rasmi: fikreyxcode.github.io/kejohanan-olahraga-skrg/index.html?tahun=2026
  // =========================================================================
  sportsyncKOT26: {
    title: "SK RANGGU SPORTSYNC (KOT 26)",
    subtitle: "Sistem Pengurusan Kejohanan Olahraga Tahunan Sekolah",
    tagline: "Sukan Wadah Perpaduan & Kecemerlangan",
    year: "2026",
    referenceUrl: "https://fikreyxcode.github.io/kejohanan-olahraga-skrg/index.html?tahun=2026",
    scoringRules: "Emas (1): 7 mata • Perak (2): 5 mata • Gangsa (3): 3 mata • Ke-4: 1 mata",
    leadership: {
      penaung: "YUNUS BIN PATARAI (Guru Besar)",
      pengerusi: "WARNAH BINTI SIRA (PK Kokurikulum)",
      timbPengerusi1: "RAHMATIAH BINTI MOHD JUDA (PK Pentadbiran)",
      timbPengerusi2: "KOMALA BINTI JOSEPH (PK HEM)",
      timbPengerusi3: "EMRAN BIN HJ SELAMAT (PK Petang)",
      setiausahaSukan: "ROSIDIAN BIN IDRIS",
      penolongSetiausahaSukan: "MOHAMMAD IKHWAN BIN ABDURAIS"
    },
    houses: [
      {
        id: "Merah",
        name: "Rumah Merah",
        color: "#df3f47",
        badgeColor: "rose",
        motto: "Semangat Juang Membara",
        leadTeacher: "HJH. MASTURAH BINTI TUDA (K)",
        teachers: ["Hjh. Masturah binti Tuda (K)", "Tanjang Ture", "Zamrie bin Omar Ali", "Hj. Wan Muhamad Yusuf", "Sabriah @ Habibah binti Abdul Sabar", "Rini Daud", "Darmawati binti Lokkong", "S. Lili binti Ladi", "Nur Faezah binti Bantalani", "Rabiatul Aidawiyah binti Abdullah"],
        gold: 14,
        silver: 10,
        bronze: 8,
        fourth: 6,
        points: 178,
        standing: 1,
        status: "JUARA KESELURUHAN 🏆"
      },
      {
        id: "Ungu",
        name: "Rumah Ungu",
        color: "#6d36d8",
        badgeColor: "purple",
        motto: "Keazaman Menjana Kejuaraan",
        leadTeacher: "HALIM BIN BIDI (K)",
        teachers: ["Halim bin Bidi (K)", "Ag. Ku Kemaindra Pg. Mohd. Taib", "MOHAMMAD FIKREY BIN ABDUL GAPAR", "Jainah binti Sulaiman", "Siti Naurin Fadzilah binti Jalal", "Ani binti Patola", "Mariana binti Kassim", "Rosminah bte Sapar", "Marini binti Ladi", "Ainatun Nadhirah bt. Dharmawi", "Salsabilah binti Shahruddin"],
        gold: 11,
        silver: 12,
        bronze: 9,
        fourth: 8,
        points: 162,
        standing: 2,
        status: "NAIB JUARA 🥈"
      },
      {
        id: "Biru",
        name: "Rumah Biru",
        color: "#246bfd",
        badgeColor: "blue",
        motto: "Gagah Perkasa Di Gelanggang",
        leadTeacher: "MUHAMADIAN BIN SUAIBU (K)",
        teachers: ["Muhamadian bin Suaibu (K)", "Hj. Junaid bin Nurdin", "Roni bin Bacho", "Asmadi bin Lajjakasi", "Noze binti Tukijan", "Bajam binti Ladung", "Siti Rabia binti Ibrahim", "Nurul Anisa binti Saparudin", "Siti Jawara binti Lukman", "Faridah binti Sunu", "Rasmawati binti Tause"],
        gold: 10,
        silver: 11,
        bronze: 12,
        fourth: 7,
        points: 156,
        standing: 3,
        status: "TEMPAT KETIGA 🥉"
      },
      {
        id: "Kuning",
        name: "Rumah Kuning",
        color: "#e5ad00",
        badgeColor: "amber",
        motto: "Menyinari Arena Kejayaan",
        leadTeacher: "NORLINA BINTI BAGWAS (K)",
        teachers: ["Norlina binti Bagwas (K)", "Mohd. Ikhwan bin Abdurais", "Hasnan bin Mat Zin", "Hamsiah binti Hamid", "Wafa Farhana binti Abd. Kadir", "Evalorenna binti Laminsin", "Noor Syafiqah Nadhirah binti", "Ruhaya binti Ahmad", "Nechi binti Serunai", "Yusni binti Wahjudin", "Sunarti binti Tappa"],
        gold: 8,
        silver: 9,
        bronze: 11,
        fourth: 9,
        points: 139,
        standing: 4,
        status: "TEMPAT KEEMPAT"
      }
    ],
    awards: [
      {
        category: "Olahragawan Terbaik",
        athlete: "Muhammad Danish Rayyan bin Azman",
        cohort: "Tahun 6 Jayyid • Kategori L12",
        house: "Rumah Merah",
        houseColor: "#df3f47",
        achievements: "3 Emas (100m, 200m, 4×100m) • Rekod Kejohanan 100m (12.4s)",
        points: 21,
        icon: "👑"
      },
      {
        category: "Olahragawati Terbaik",
        athlete: "Nur Syamimi Batrisya binti Hamdan",
        cohort: "Tahun 6 Mumtaz • Kategori P12",
        house: "Rumah Biru",
        houseColor: "#246bfd",
        achievements: "3 Emas (100m, Lompat Jauh, 4×100m) • Lompat Jauh 3.92m",
        points: 21,
        icon: "👸"
      },
      {
        category: "Olahragawan Harapan",
        athlete: "Mohd Farhan bin Rosli",
        cohort: "Tahun 5 Jayyid • Kategori L10",
        house: "Rumah Ungu",
        houseColor: "#6d36d8",
        achievements: "2 Emas (80m Berpagar, 200m), 1 Perak (Lompat Jauh)",
        points: 19,
        icon: "🌟"
      },
      {
        category: "Olahragawati Harapan",
        athlete: "Siti Aisyah binti Ridzwan",
        cohort: "Tahun 5 Mumtaz • Kategori P10",
        house: "Rumah Kuning",
        houseColor: "#e5ad00",
        achievements: "2 Emas (100m, Lompat Tinggi), 1 Gangsa (4×100m)",
        points: 17,
        icon: "⭐"
      }
    ],
    categories: [
      { stage: "Prasekolah", code: "PRA", cohort: "Prasekolah", events: ["50 meter (L/P)", "4 × 50 meter (L/P)"] },
      { stage: "Tahap 1", code: "T1-A", cohort: "Tahun 1 Sahaja", events: ["50 meter (L/P)", "80 meter (L/P)", "4 × 50 meter (L/P)", "4 × 80 meter (L/P)"] },
      { stage: "Tahap 1", code: "T1-B", cohort: "Tahun 2 & Tahun 3", events: ["50 meter (L/P)", "80 meter (L/P)", "4 × 50 meter (L/P)", "4 × 80 meter (L/P)"] },
      { stage: "Tahap 2", code: "T2-A", cohort: "Tahun 4 & Tahun 5", events: ["100 meter", "200 meter", "4 × 100 meter", "4 × 200 meter", "Lompat Jauh", "Lompat Tinggi", "Lontar Peluru"] },
      { stage: "Tahap 2", code: "T2-B", cohort: "Tahun 6 Sahaja", events: ["100 meter", "200 meter", "80 meter Lari Berpagar", "4 × 100 meter", "4 × 200 meter", "Lompat Jauh", "Lompat Tinggi", "Lontar Peluru"] }
    ]
  },

  // =========================================================================
  // PENGURUSAN UNIT SIDANG PETANG 2026
  // =========================================================================
  petangHierarchy2026: {
    title: "CARTA PENGURUSAN SESI PERSEKOLAHAN PETANG 2026",
    penasihat: "YUNUS BIN PATARAI (Guru Besar)",
    pengerusi: "EMRAN BIN HJ SELAMAT (Penolong Kanan Petang)",
    penyelarasTahap1: "RASMAWATI BINTI TAUSE (Penyelaras Tahap 1)",
    penyelarasJadual: "AINATUN NADHIRAH BINTI DHARMAWI (Jadual Waktu Petang)",
    penyelarasDisiplin: "MOHAMMAD IKHWAN BIN ABDURAIS (Disiplin & Keselamatan)",
    penyelarasTransisi: "MARIANA BINTI KASSIM & YUSNI BINTI WAHJUDIN (Transisi Tahun 1)",
    totalClasses: 12,
    totalPupils: 412,
    totalTeachers: 24,
    cohorts: [
      { level: "Tahun 1", classes: 4, pupils: 148, session: "Petang", icon: "🌱" },
      { level: "Tahun 2", classes: 4, pupils: 132, session: "Petang", icon: "🌿" },
      { level: "Tahun 3", classes: 4, pupils: 132, session: "Petang", icon: "🌳" }
    ],
    operatingHours: [
      { item: "Waktu Kehadiran & Perhimpunan Awal", time: "12.30 tengah hari – 1.00 petang", notes: "Murid berkumpul di Dewan Terbuka / Laman Menunggu" },
      { item: "PdP Sesi Petang Bermula", time: "1.00 petang", notes: "PdP mengikut jadual waktu kelas masing-masing" },
      { item: "Waktu Rehat Tahun 1", time: "2.30 petang – 2.50 petang", notes: "Kantin sekolah dengan pemantauan guru bertugas" },
      { item: "Waktu Rehat Tahun 2 & Tahun 3", time: "3.00 petang – 3.20 petang", notes: "Kantin sekolah dengan pemantauan guru bertugas" },
      { item: "Waktu Tamat PdP (Isnin – Khamis)", time: "5.30 petang", notes: "Kawalan pintu pagar A & B bersama pengawal keselamatan" },
      { item: "Waktu Tamat PdP (Jumaat)", time: "5.00 petang", notes: "Pelepasan murid secara teratur mengikut zon laluan" }
    ],
    sopSafety: [
      "Kawalan pintu pagar utama semasa pertukaran sesi pagi dan petang (12.30 – 1.00 petang) bagi mengelak kesesakan lalulintas.",
      "Program Guru Penyayang: Menyambut kehadiran murid petang dengan senyuman dan sapaan mesra di pintu pagar sekolah.",
      "Pemeriksaan kebersihan bilik darjah dan pematuhan penjimatan elektrik sebelum murid dibenarkan bersurai."
    ]
  },

  // =========================================================================
  // PILAR INSPIRASI & KERANGKA STRATEGIK (DARIPADA PROTOTAIP)
  // =========================================================================
  inspiration: {
    tawauLeads: "TAWAU LEADS : IKHLAS MEMACU KECEMERLANGAN",
    digitalForward: "SK RANGGU MELANGKAH BERSAMA, MEMACU MASA DEPAN",
    quoteHeader: "INSPIRASI WARGA PENDIDIK",
    quoteText: "Teknologi Membuka Peluang. Guru Memberi Arah. Pendidikan Membentuk Masa Depan.",
    quoteFooter: "SK RANGGU • BERUSAHA • BERILMU • BERBAKTI"
  },

  // =========================================================================
  // SALURAN MEDIA SOSIAL, TELEGRAM & KOMUNITI DIGITAL RASMI
  // =========================================================================
  socialLinks: [
    { 
      id: "soc-telegram", 
      platform: "Telegram Rasmi", 
      name: "Telerasmi SKRG (64 Ahli)", 
      url: "https://web.telegram.org/k/#-317568302", 
      icon: "📢", 
      badge: "Saluran Utama", 
      color: "blue", 
      desc: "Saluran hebahan rasmi Telegram 64 warga pendidik & staf SK Ranggu bagi makluman pantas pentadbiran, dokumen dan takwim sekolah." 
    },
    { 
      id: "soc-fb", 
      platform: "Facebook", 
      name: "SK Ranggu Tawau", 
      url: "https://www.facebook.com/profile.php?id=61590002833471", 
      icon: "📘", 
      badge: "Laman Rasmi", 
      color: "blue", 
      desc: "Saluran media sosial rasmi hebahan aktiviti, takwim dan pencapaian sekolah." 
    },
    { 
      id: "soc-tt", 
      platform: "TikTok", 
      name: "@rangguathleticsclub", 
      url: "https://www.tiktok.com/@rangguathleticsclub", 
      icon: "🎵", 
      badge: "Kelab Sukan", 
      color: "slate", 
      desc: "Kompilasi video aktiviti kokurikulum, latihan dan kejohanan olahraga murid SK Ranggu." 
    },
    { 
      id: "soc-gallery", 
      platform: "Telegram Arkib", 
      name: "Gallery SK Ranggu", 
      url: "https://web.telegram.org/k/#-317568302", 
      icon: "📸", 
      badge: "Arkib Foto", 
      color: "blue", 
      desc: "Arkib visual dan album foto dokumentasi rasmi pelbagai program, sambutan dan aktiviti murid." 
    },
    { 
      id: "soc-ipad", 
      platform: "Digital Inovasi", 
      name: "iPad Creative Challenge & Apple Teacher", 
      url: "https://web.telegram.org/k/#-317568302", 
      icon: "🍎", 
      badge: "Inovasi Pembelajaran", 
      color: "blue", 
      desc: "Inisiatif pemerkasaan murid dan guru celik digital menggunakan peranti iPad dan ekosistem Apple Education." 
    },
    { 
      id: "soc-canva", 
      platform: "Digital Inovasi", 
      name: "Canva Education & STEM Hub (MY-Future)", 
      url: "https://web.telegram.org/k/#-317568302", 
      icon: "🚀", 
      badge: "STEM Hub", 
      color: "blue", 
      desc: "Pusat kolaborasi reka bentuk grafik, modul STEM dan penyertaan pertandingan reka cipta sains digital." 
    },
    { 
      id: "soc-sportsync", 
      platform: "Sistem Sukan", 
      name: "Portal Kejohanan Olahraga SK Ranggu (KOT 26)", 
      url: "https://fikreyxcode.github.io/kejohanan-olahraga-skrg/index.html?tahun=2026", 
      icon: "🏃‍♂️", 
      badge: "KOT 2026", 
      color: "blue", 
      desc: "Portal papan markah rasmi 4 rumah sukan (Merah, Ungu, Biru, Kuning) dan keputusan atlet terbaik." 
    },
    { 
      id: "soc-kehadiran", 
      platform: "Sistem Pentadbiran", 
      name: "Sistem Kehadiran Bersepadu SKRG (v20)", 
      url: "https://fikreyxcode.github.io/sistemkehadiranskrg/?v=20#utama", 
      icon: "📱", 
      badge: "Ts.FIKREY37", 
      color: "blue", 
      desc: "Sistem rekod kehadiran harian murid bersepadu berasaskan web dengan kawalan akses admin." 
    },
    { 
      id: "soc-sites", 
      platform: "Google Sites", 
      name: "Prototaip Portal Pengurusan SK Ranggu", 
      url: "https://sites.google.com/view/skranggutawau/utama", 
      icon: "🌐", 
      badge: "Prototaip Asal", 
      color: "slate", 
      desc: "Rujukan bersejarah prototaip portal pengurusan sekolah yang mengandungi asas struktur maklumat induk." 
    }
  ],

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
      id: "doc-rpm-2035",
      title: "Rancangan Pendidikan Malaysia 2026–2035",
      category: "Dasar Pendidikan",
      panitia: "KPM",
      date: "2026-01-01",
      type: "PDF",
      fileUrl: "https://drive.google.com/file/d/1XttuaxCwlewzxdMtNxm8ZhpYKvKpp3NO/view?usp=drivesdk",
      size: "Google Drive PDF",
      uploader: "Kementerian Pendidikan Malaysia"
    },
    {
      id: "doc-jpn-sabah",
      title: "Prakarsa Impak Segera JPN Sabah 2026–2027",
      category: "Inisiatif Negeri",
      panitia: "JPN Sabah",
      date: "2026-01-01",
      type: "PDF",
      fileUrl: "https://drive.google.com/file/d/1Oyn1Chlbu1wzznwkV4ijYiPtCeiSANPB/view?usp=drivesdk",
      size: "Google Drive PDF",
      uploader: "Jabatan Pendidikan Negeri Sabah"
    },
    {
      id: "doc-ppd-tawau",
      title: "Prakarsa Impak Segera PPD Tawau 2026 (Tawau Leads)",
      category: "Inisiatif Daerah",
      panitia: "PPD Tawau",
      date: "2026-01-01",
      type: "PDF",
      fileUrl: "https://drive.google.com/file/d/10bXZC4ft-V3xspNcTAubdETfVC0z9FGg/view?usp=drivesdk",
      size: "Google Drive PDF",
      uploader: "Pejabat Pendidikan Daerah Tawau"
    },
    {
      id: "doc-pbs-2025",
      title: "Panduan Pengurusan Pentaksiran Berasaskan Sekolah (PBS) Edisi 1 2025",
      category: "Pentaksiran",
      panitia: "Lembaga Peperiksaan",
      date: "2025-01-01",
      type: "PDF",
      fileUrl: "https://drive.google.com/file/d/1VCeuW3fex25n-nB5suHCcjeIwmrUiC8d/view?usp=drivesdk",
      size: "Google Drive PDF",
      uploader: "Kementerian Pendidikan Malaysia"
    },
    {
      id: "doc-pelan-strategik",
      title: "Pelan Strategik KPM 2024–2030",
      category: "Pelan Strategik",
      panitia: "KPM",
      date: "2024-01-01",
      type: "PDF",
      fileUrl: "https://drive.google.com/file/d/1O_Q8U9vS7pl_Y3kZsVsBFFisLJWrwPPH/view?usp=drivesdk",
      size: "Google Drive PDF",
      uploader: "Kementerian Pendidikan Malaysia"
    },
    {
      id: "doc-sgm-20",
      title: "Standard Guru Malaysia 2.0 (SGM 2.0)",
      category: "Kompetensi",
      panitia: "BPG KPM",
      date: "2024-01-01",
      type: "PDF",
      fileUrl: "https://drive.google.com/file/d/19HqqtL0u5FGdUb1FDug4_Jex0xDy68G7/view?usp=drivesdk",
      size: "Google Drive PDF",
      uploader: "Bahagian Profesionalisme Guru KPM"
    },
    {
      id: "doc-buku-pengurusan",
      title: "Dokumen Rujukan Pengurusan Pendidikan SK Ranggu Tawau",
      category: "Buku Pengurusan",
      panitia: "Pentadbiran",
      date: "2026-01-01",
      type: "PDF",
      fileUrl: "https://drive.google.com/file/d/1HNNlnOhx8jYLkHnrws0-E-BMdCH3SZDN/view",
      size: "Google Drive PDF",
      uploader: "SK Ranggu Tawau"
    },
    {
      id: "doc-murid-xlsx",
      title: "Pangkalan Data Rasmi Enrolmen & 890 Murid SK Ranggu 2026 (APDM/MOEIS)",
      category: "Data Murid",
      panitia: "Pengurusan Data",
      date: "2026-06-08",
      type: "XLSX",
      fileUrl: "assets/senarai-murid-2026.xlsx",
      size: "217 KB",
      uploader: "Penyelaras Data & APDM"
    },
    {
      id: "doc-murid-csv",
      title: "Senarai Keseluruhan 890 Murid SK Ranggu 2026 (Format CSV)",
      category: "Data Murid",
      panitia: "Pengurusan Data",
      date: "2026-06-08",
      type: "CSV",
      fileUrl: "assets/senarai-murid-2026.csv",
      size: "437 KB",
      uploader: "Penyelaras Data & APDM"
    },
    {
      id: "doc-kurikulum",
      title: "Poster Rasmi HD Carta Organisasi Kurikulum SK Ranggu 2026",
      category: "Carta Organisasi",
      panitia: "Kurikulum",
      date: "2026-06-08",
      type: "PNG HD",
      fileUrl: "assets/carta-organisasi-kurikulum-2026.png",
      size: "394 KB",
      uploader: "Unit Kurikulum"
    },
    {
      id: "doc-admin",
      title: "Poster Rasmi HD Carta Organisasi Pentadbiran SK Ranggu 2026",
      category: "Carta Organisasi",
      panitia: "Pentadbiran",
      date: "2026-06-08",
      type: "PNG HD",
      fileUrl: "assets/carta-organisasi-2026.png",
      size: "388 KB",
      uploader: "Unit Media / Digital (MOHAMMAD FIKREY BIN ABDUL GAPAR)"
    },
    {
      id: "doc-peg-teknikal-mdesa-26",
      title: "Senarai Pegawai Teknikal Kejohanan Merentas Desa 2026 (PEG.TEKNIKAL M.DESA '26)",
      category: "Kokurikulum & Sukan",
      panitia: "Unit Sukan & Kokurikulum",
      date: "2026-10-05",
      type: "PDF",
      fileUrl: "https://web.telegram.org/k/#-317568302",
      size: "412 KB",
      uploader: "HJ. ROSIDIAN BIN HJ. IDRIS (Setiausaha Sukan)"
    },
    {
      id: "doc-prestasi-kerja-pptx",
      title: "Slaid Pembentangan Prestasi Kerja Staf & SKT SK Ranggu (6.Prestasi kerja.pptx)",
      category: "Buku Pengurusan & Pentadbiran",
      panitia: "Pengurusan Pentadbiran",
      date: "2026-10-05",
      type: "PPTX",
      fileUrl: "https://web.telegram.org/k/#-317568302",
      size: "Mesej Disematkan (Pinned)",
      uploader: "Pentadbir Sistem SK Ranggu"
    },
    {
      id: "doc-apdm-keseluruhan-5okt",
      title: "Data Keseluruhan Murid SK Ranggu APDM Kemaskini 5 Oktober 2026 (XBA3037 Keseluruhan Murid 2026-10-05.xlsx)",
      category: "Data Murid APDM",
      panitia: "Pengurusan Hal Ehwal Murid & Data",
      date: "2026-10-05",
      type: "XLSX",
      fileUrl: "assets/senarai-murid-2026.xlsx",
      size: "217 KB",
      uploader: "Penyelaras Data & APDM"
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
    { id: "p1", name: "IdMe KPM", cat: "SISTEM GURU", desc: "Identiti digital guru, murid & akses perkhidmatan KPM", url: "https://idme.moe.gov.my/login", badge: "Utama", icon: "🆔" },
    { id: "p2", name: "BPK KPM", cat: "KURIKULUM", desc: "Bahagian Pembangunan Kurikulum, DSKP & Dokumen Penjajaran", url: "https://bpk.moe.gov.my", badge: "Kurikulum", icon: "📖" },
    { id: "p3", name: "Portal Rasmi KPM", cat: "KEMENTERIAN", desc: "Laman sesawang rasmi Kementerian Pendidikan Malaysia", url: "https://www.moe.gov.my", badge: "Kementerian", icon: "🏛️" },
    { id: "p4", name: "JPN Sabah", cat: "JABATAN PENDIDIKAN", desc: "Portal rasmi Jabatan Pendidikan Negeri Sabah", url: "https://jpnsabah.moe.gov.my", badge: "Negeri", icon: "🏖️" },
    { id: "p5", name: "PPD Tawau", cat: "PEJABAT PENDIDIKAN", desc: "Portal pendidikan daerah Tawau (Tawau Leads)", url: "https://sites.google.com/moe-dl.edu.my/websiteppdtawauv2/utama", badge: "Daerah", icon: "📍" },
    { id: "p6", name: "MySG 2026", cat: "GURU 2026", desc: "Sistem pengurusan perjawatan & penempatan warga guru", url: "https://sgmy.moe.gov.my/sgmy_2026/", badge: "Perjawatan", icon: "👨‍🏫" },
    { id: "p7", name: "DELIMa KPM", cat: "PEMBELAJARAN", desc: "Portal Pembelajaran Digital, Google Classroom & e-RPH", url: "https://d2.delima.edu.my", badge: "PdPc", icon: "💻" },
    { id: "p8", name: "APDM", cat: "HAL EHWAL MURID", desc: "Aplikasi Pangkalan Data Murid & e-Kehadiran Harian", url: "https://apdm.moe.gov.my", badge: "Kehadiran", icon: "📋" },
    { id: "p9", name: "e-Operasi", cat: "PENTADBIRAN", desc: "Modul pengurusan data guru dan staf sokongan KPM", url: "https://eoperasi.moe.gov.my", badge: "Staf", icon: "👥" },
    { id: "p10", name: "SPLKPM", cat: "LATIHAN GURU", desc: "Sistem Pengurusan Latihan Kementerian Pendidikan Malaysia", url: "https://splkpm.moe.gov.my", badge: "Kompetensi", icon: "🎓" },
    { id: "p11", name: "SSDM", cat: "DISIPLIN", desc: "Sistem Sahsiah Diri Murid & Amalan Baik KPM", url: "https://ssdm.moe.gov.my", badge: "Sahsiah", icon: "🛡️" }
  ],

  // SALURAN TELEGRAM & INOVASI DIGITAL WARGA SK RANGGU
  communityChannels: [
    {
      id: "ch-telegram",
      title: "Telerasmi SKRG (Saluran Hebahan Rasmi)",
      desc: "Saluran hebahan rasmi Telegram 64 warga pendidik dan staf SK Ranggu untuk makluman pentadbiran pantas, pekeliling, dan takwim terkini.",
      members: "64 Ahli",
      badge: "Saluran Utama",
      badgeColor: "bg-sky-500/20 text-sky-300 border-sky-400/30",
      icon: "📢",
      url: "https://web.telegram.org/k/#-317568302",
      type: "Telegram"
    },
    {
      id: "ch-gallery",
      title: "Gallery SK Ranggu (Arkib Foto & Aktiviti)",
      desc: "Arkib album bergambar rasmi, dokumentasi acara sekolah, sambutan hari guru, kejohanan sukan dan aktiviti kokurikulum murid.",
      members: "Dokumentasi HD",
      badge: "Arkib Visual",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
      icon: "📸",
      url: "https://web.telegram.org/k/#-317568302",
      type: "Telegram"
    },
    {
      id: "ch-ipad",
      title: "iPad Creative Challenge SK Ranggu & Apple Teacher",
      desc: "Pusat inisiatif pembelajaran digital berasaskan peranti iPad, animasi murid, penerokaan Keynote, Pages & pemerkasaan komuniti Apple Teacher.",
      members: "Inovasi Pembelajaran",
      badge: "Apple Teacher",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-400/30",
      icon: "🍎",
      url: "https://web.telegram.org/k/#-317568302",
      type: "Komuniti Digital"
    },
    {
      id: "ch-canva-stem",
      title: "Canva & STEM Hub SK Ranggu (MY-Future STEM)",
      desc: "Hab perkongsian templat Canva for Education, modul pertandingan MY-Future STEM, projek reka cipta sains dan literasi digital.",
      members: "STEM & Rekabentuk",
      badge: "Canva & STEM",
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-400/30",
      icon: "🚀",
      url: "https://web.telegram.org/k/#-317568302",
      type: "Komuniti Digital"
    },
    {
      id: "ch-sportsync",
      title: "Portal Kejohanan Olahraga SK Ranggu (KOT 26)",
      desc: "Portal rasmi pemarkahan masa nyata Kejohanan Olahraga Tahunan SK Ranggu merangkumi Rumah Merah, Ungu, Biru & Kuning.",
      members: "Sukan & Olahraga",
      badge: "KOT 26",
      badgeColor: "bg-red-500/20 text-red-300 border-red-400/30",
      icon: "🏃‍♂️",
      url: "https://fikreyxcode.github.io/kejohanan-olahraga-skrg/index.html?tahun=2026",
      type: "Sistem Sukan"
    },
    {
      id: "ch-kehadiran",
      title: "Sistem Kehadiran Bersepadu SKRG (v20)",
      desc: "Sistem pengurusan kehadiran murid dan warga sekolah SK Ranggu berasaskan web dengan kawalan keselamatan Ts.FIKREY37.",
      members: "Kehadiran Murid",
      badge: "v20",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-400/30",
      icon: "📱",
      url: "https://fikreyxcode.github.io/sistemkehadiranskrg/?v=20#utama",
      type: "Sistem Kehadiran"
    },
    {
      id: "ch-google-sites",
      title: "Prototaip Portal Pengurusan SK Ranggu (Google Sites)",
      desc: "Rujukan asas portal pengurusan sekolah SK Ranggu terdahulu yang mengandungi maklumat awal sejarah, organisasi dan kurikulum.",
      members: "Arkib Rujukan",
      badge: "Prototaip",
      badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-400/30",
      icon: "🌐",
      url: "https://sites.google.com/view/skranggutawau/utama",
      type: "Google Sites"
    }
  ],

  googleSheets: {
    sheetId: "19BgxY06KSHSizUsnreZXnXNoUbf-ivhaVj9YVQ8hVdU",
    gid: "2057996103",
    fullUrl: "https://docs.google.com/spreadsheets/d/19BgxY06KSHSizUsnreZXnXNoUbf-ivhaVj9YVQ8hVdU/edit?gid=2057996103#gid=2057996103"
  }
};

const CURRENT_STORAGE_KEY = "SK_RANGGU_DASHBOARD_DATA_V11";

function getStoredData() {
  try {
    // Purge legacy caches
    ["SK_RANGGU_DASHBOARD_DATA", "SK_RANGGU_DASHBOARD_DATA_V2", "SK_RANGGU_DASHBOARD_DATA_V9", "SK_RANGGU_DASHBOARD_DATA_V10"].forEach(k => {
      try { localStorage.removeItem(k); } catch(e){}
    });
    const stored = localStorage.getItem(CURRENT_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed && parsed.school) {
        parsed.school.name = DEFAULT_SYSTEM_DATA.school.name;
        parsed.school.address = DEFAULT_SYSTEM_DATA.school.address;
        parsed.school.motto = DEFAULT_SYSTEM_DATA.school.motto;
        parsed.school.infografikEnrolmen = DEFAULT_SYSTEM_DATA.school.infografikEnrolmen;
      }
      return parsed;
    }
  } catch (err) {
    console.warn("Gagal membaca LocalStorage:", err);
  }
  return DEFAULT_SYSTEM_DATA;
}

function saveStoredData(data) {
  try {
    localStorage.setItem(CURRENT_STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch (err) {
    console.error("Gagal simpan LocalStorage:", err);
    return false;
  }
}

function resetToDefaultData() {
  localStorage.removeItem(CURRENT_STORAGE_KEY);
  return DEFAULT_SYSTEM_DATA;
}

window.SKR_DATA = getStoredData();
window.SKR_DEFAULT_DATA = DEFAULT_SYSTEM_DATA;
window.saveStoredData = saveStoredData;
window.resetToDefaultData = resetToDefaultData;
