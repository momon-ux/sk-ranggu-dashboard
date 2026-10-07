/**
 * SISTEM DASHBOARD PENGURUSAN PENTADBIRAN & KURIKULUM
 * PAPAN INDUK UTAMA SEKOLAH KEBANGSAAN RANGGU, TAWAU, SABAH (XBA3037)
 * 
 * Pangkalan Data Induk Rasmi - Berdasarkan:
 * 1. Carta Organisasi Pentadbiran 2026 (Rasmi)
 * 2. Carta Organisasi Kurikulum 2026 (Rasmi)
 * 3. Carta Organisasi HEM & Sistem Kehadiran 2026 (Rasmi)
 * 4. Senarai 60 Staf SK Ranggu (54 PPP + 6 AKP)
 * 
 * Pembangun Sistem: MOHAMMAD FIKREY BIN ABDUL GAPAR (Pentadbir Sistem)
 * Kod Akses Admin: Ts.FIKREY37
 */

const DEFAULT_SYSTEM_DATA = {
  // PROFIL SEKOLAH RASMI
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
    motto: "BERUSAHA • BERILMU • BERBAKTI",
    vision: "Kecemerlangan Dalam Semua Aspek Pendidikan",
    mission: "Melestarikan Sistem Pendidikan Yang Berkualiti Untuk Membangunkan Potensi Individu Bagi Memenuhi Aspirasi Negara",
    establishedYear: 1973,
    academicSession: "Sesi Persekolahan 2026",
    logoKpm: "assets/logo-kpm-cutout.png?v=20261007_v27",
    logoSchool: "assets/logo-skrg-cutout.png?v=20261007_v27",
    posterCarta: "assets/carta-organisasi-2026.png",
    posterKurikulum: "assets/carta-organisasi-kurikulum-2026.png",
    infografikEnrolmen: "assets/infografik-enrolmen-5okt2026.png"
  },

  // GERBANG 4 BAHAGIAN PENGURUSAN INDUK (TAB UTAMA)
  gateways: {
    kurikulum: {
      id: "kurikulum",
      badge: "BAHAGIAN 1",
      icon: "📚",
      colorClass: "blue",
      title: "Pengurusan Kurikulum",
      desc: "Penyelarasan 12 Panitia, Pentaksiran PBD & UASA, e-RPH, jadual waktu dan pemerkasaan akademik bermakna.",
      head: "RAHMATIAH BINTI MOHD JUDA",
      role: "PK Pentadbiran & Kurikulum",
      photo: "assets/photos/rahmatiah-binti-mohd-juda.jpg",
      stat1Label: "Panitia Mata Pelajaran:",
      stat1Val: "12 Panitia Aktif",
      stat2Label: "Penguasaan PBD:",
      stat2Val: "96.6% (TP3 - TP6)",
      targetTab: "tab-kurikulum"
    },
    hem: {
      id: "hem",
      badge: "BAHAGIAN 2",
      icon: "🤝",
      colorClass: "emerald",
      title: "Pengurusan HEM",
      desc: "Disiplin, kebajikan & bantuan (RMT, KWAPM, SPBT), keselamatan, kesihatan (3K) dan e-Kehadiran murid.",
      head: "KOMALA BINTI JOSEPH",
      role: "PK Hal Ehwal Murid",
      photo: "assets/photos/komala-binti-joseph.jpg",
      stat1Label: "Enrolmen Murid:",
      stat1Val: "890 Murid (APDM)",
      stat2Label: "Sistem Digital:",
      stat2Val: "HEM SMARTTRACK",
      targetTab: "tab-hem"
    },
    koko: {
      id: "koko",
      badge: "BAHAGIAN 3",
      icon: "🏆",
      colorClass: "rose",
      title: "Pengurusan Kokurikulum",
      desc: "5 Beruniform, 7 Kelab, 5 Sukan 1M1S, 4 Rumah Sukan dan Kejohanan Olahraga (KOT 26 / Sportsync).",
      head: "WARNAH BINTI SIRA",
      role: "PK Kokurikulum",
      photo: "assets/photos/warnah-binti-sira.jpg",
      stat1Label: "4 Rumah Sukan:",
      stat1Val: "Merah, Ungu, Biru, Kuning",
      stat2Label: "Kejohanan Sukan:",
      stat2Val: "Sportsync KOT 26",
      targetTab: "tab-kokurikulum"
    },
    petang: {
      id: "petang",
      badge: "BAHAGIAN 4",
      icon: "🌇",
      colorClass: "amber",
      title: "Pengurusan Sidang Petang",
      desc: "Operasi Tahap 1 (Tahun 1, 2, 3), program transisi, SOP keselamatan pintu pagar dan penyelarasan jadual.",
      head: "EMRAN BIN HJ SELAMAT",
      role: "PK Petang",
      photo: "assets/photos/emran-bin-hj-selamat.jpg",
      stat1Label: "Sesi Persekolahan:",
      stat1Val: "Tahap 1 (Thn 1, 2, 3)",
      stat2Label: "Jumlah Murid Petang:",
      stat2Val: "412 Murid",
      targetTab: "tab-petang"
    }
  },

  // KREDIT PEMBANGUN
  developer: {
    name: "MOHAMMAD FIKREY BIN ABDUL GAPAR",
    role: "Pentadbir Sistem & Penyelaras ICT (Guru Kelas 6 Jayyid)",
    unit: "Unit Pengurusan Pentadbiran & ICT SK Ranggu",
    passcode: "Ts.FIKREY37"
  },

  // STATISTIK RASMI KESELURUHAN (DATA APDM / MOEIS & TELEGRAM 5 OKT 2026)
  stats: {
    totalTeachers: 52,
    totalStaff: 6,
    totalAllStaff: 58,
    retiredStaff: 2,
    morningSession: 28,
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
      { tahun: "PRASEKOLAH", kelas: "MUTIARA HATI", guru: "YUSNI BINTI WAHJUDIN", total: 25, lelaki: 15, perempuan: 10, photo: "assets/photos/yusni-binti-wahjudin.jpg" },
      { tahun: "PRASEKOLAH", kelas: "MUTIARA KASIH", guru: "FARIDAH BINTI ACHO", total: 24, lelaki: 13, perempuan: 11, photo: "assets/photos/faridah-binti-acho.jpg" },
      { tahun: "PRASEKOLAH", kelas: "PERMATA HATI", guru: "MARIANA BINTI KASSIM", total: 25, lelaki: 15, perempuan: 10, photo: "assets/photos/mariana-binti-kassim.jpg" },
      { tahun: "TAHUN SATU", kelas: "ILTIZAM", guru: "NOOR SYAFIQAH NADHIRAH BINTI JAMALUDDIN", total: 32, lelaki: 17, perempuan: 15, photo: "assets/photos/noor-syafiqah-nadhirah-binti-jamaluddin.jpg" },
      { tahun: "TAHUN SATU", kelas: "JAYYID", guru: "NORLINA BINTI BAGWAS", total: 31, lelaki: 14, perempuan: 17, photo: "assets/photos/norlina-binti-bagwas.jpg" },
      { tahun: "TAHUN SATU", kelas: "KHOIR", guru: "FARIDAH BINTI SUNU", total: 32, lelaki: 16, perempuan: 16, photo: "assets/photos/faridah-binti-sunu.jpg" },
      { tahun: "TAHUN SATU", kelas: "MUMTAZ", guru: "RASMAWATI BINTI TAUSE", total: 31, lelaki: 14, perempuan: 17, photo: "assets/photos/rasmawati-binti-tause.jpg" },
      { tahun: "TAHUN DUA", kelas: "ILTIZAM", guru: "MOHAMMAD IKHWAN BIN ABDURAIS", total: 35, lelaki: 19, perempuan: 16, photo: "assets/photos/mohammad-ikhwan-bin-abdurais.jpg" },
      { tahun: "TAHUN DUA", kelas: "JAYYID", guru: "MARINI BINTI LADI", total: 35, lelaki: 18, perempuan: 17, photo: "assets/photos/marini-binti-ladi.jpg" },
      { tahun: "TAHUN DUA", kelas: "KHOIR", guru: "S.LILI BINTI LADI", total: 32, lelaki: 17, perempuan: 15, photo: "assets/photos/slili-binti-ladi.jpg" },
      { tahun: "TAHUN DUA", kelas: "MUMTAZ", guru: "SITI JAWARA BINTI LUKMAN", total: 32, lelaki: 13, perempuan: 19, photo: "assets/photos/siti-jawara-binti-lukman.jpg" },
      { tahun: "TAHUN TIGA", kelas: "ILTIZAM", guru: "JAINAH BINTI SULAIMAN", total: 33, lelaki: 17, perempuan: 16, photo: "assets/photos/jainah-binti-sulaiman.jpg" },
      { tahun: "TAHUN TIGA", kelas: "JAYYID", guru: "AINATUN NADHIRAH BINTI DHARMAWI", total: 34, lelaki: 17, perempuan: 17, photo: "assets/photos/ainatun-nadhirah-binti-dharmawi.jpg" },
      { tahun: "TAHUN TIGA", kelas: "KHOIR", guru: "RUHAYA BINTI AHMAD", total: 34, lelaki: 16, perempuan: 18, photo: "assets/photos/ruhaya-binti-ahmad.jpg" },
      { tahun: "TAHUN TIGA", kelas: "MUMTAZ", guru: "NUR FAEZAH BINTI BANTALANI", total: 34, lelaki: 18, perempuan: 16, photo: "assets/photos/nur-faezah-binti-bantalani.jpg" },
      { tahun: "TAHUN EMPAT", kelas: "ILTIZAM", guru: "ROSIDIAN BIN IDRIS", total: 34, lelaki: 19, perempuan: 15, photo: "assets/photos/rosidian-bin-idris.jpg" },
      { tahun: "TAHUN EMPAT", kelas: "JAYYID", guru: "NOZE BINTI TUKIJAN", total: 35, lelaki: 20, perempuan: 15, photo: "assets/photos/noze-binti-tukijan.jpg" },
      { tahun: "TAHUN EMPAT", kelas: "KHOIR", guru: "MASTURAH BINTI TUDA", total: 35, lelaki: 21, perempuan: 14, photo: "assets/photos/masturah-binti-tuda.jpg" },
      { tahun: "TAHUN EMPAT", kelas: "MUMTAZ", guru: "NURUL ANISA BINTI SAPARUDIN", total: 35, lelaki: 19, perempuan: 16, photo: "assets/photos/nurul-anisa-binti-saparudin.jpg" },
      { tahun: "TAHUN LIMA", kelas: "ILTIZAM", guru: "WAN MUHAMAD YUSUF BIN WAN ABDUL AZIZ", total: 36, lelaki: 19, perempuan: 17, photo: "assets/photos/wan-muhamad-yusuf.jpg" },
      { tahun: "TAHUN LIMA", kelas: "JAYYID", guru: "RINI BINTI DAUD", total: 36, lelaki: 20, perempuan: 16, photo: "assets/photos/rini-binti-daud.jpg" },
      { tahun: "TAHUN LIMA", kelas: "KHOIR", guru: "TANJANG BIN TURE", total: 36, lelaki: 17, perempuan: 19, photo: "assets/photos/tanjang-bin-ture.jpg" },
      { tahun: "TAHUN LIMA", kelas: "MUMTAZ", guru: "HAMSIAH BINTI HAMID", total: 35, lelaki: 20, perempuan: 15, photo: "assets/photos/hamsiah-binti-hamid.jpg" },
      { tahun: "TAHUN ENAM", kelas: "ILTIZAM", guru: "AG KU KEMAINDDRA BIN PG MOHD TAIB", total: 35, lelaki: 18, perempuan: 17, photo: "assets/photos/ag-ku-kemainddra-bin-pg-mohd-taib.jpg" },
      { tahun: "TAHUN ENAM", kelas: "JAYYID", guru: "MOHAMMAD FIKREY BIN ABDUL GAPAR", total: 35, lelaki: 18, perempuan: 17, photo: "assets/photos/mohammad-fikrey-bin-abdul-gapar.jpg" },
      { tahun: "TAHUN ENAM", kelas: "KHOIR", guru: "MOHD ALFAIZAL BIN DAUD", total: 34, lelaki: 17, perempuan: 17, photo: "assets/photos/mohd-alfaizal-bin-daud.jpg" },
      { tahun: "TAHUN ENAM", kelas: "MUMTAZ", guru: "BAJAM BINTI LADUNG", total: 35, lelaki: 19, perempuan: 16, photo: "assets/photos/bajam-binti-ladung.jpg" }
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

  // CARTA ORGANISASI PENGURUSAN PENTADBIRAN 2026 (SEPADAN 100% POSTER RASMI PENTADBIRAN)
  adminHierarchy2026: {
    leader: {
      role: "GURU BESAR",
      name: "YUNUS BIN PATARAI",
      badge: "Peneraju Sekolah",
      photo: "assets/photos/yunus-bin-patarai.jpg"
    },
    deputy: {
      role: "PENOLONG KANAN PENTADBIRAN",
      name: "RAHMATIAH BINTI MOHD JUDA",
      badge: "PK 1 Pentadbiran",
      photo: "assets/photos/rahmatiah-binti-mohd-juda.jpg"
    },
    managementField: "BIDANG PENGURUSAN",
    secretary: {
      role: "SETIAUSAHA",
      name: "BAJAM BINTI LADUNG",
      badge: "Setiausaha Pentadbiran",
      photo: "assets/photos/bajam-binti-ladung.jpg"
    },
    // KOLUM KIRI (PENTADBIRAN, KEWANGAN & PERKHIDMATAN)
    leftWing: [
      { portfolio: "KEWANGAN", officer: "NURAIDA BINTI KAIMUDIN", color: "from-rose-500 to-red-600", photo: "assets/photos/nuraida-binti-kaimudin.jpg" },
      { portfolio: "AUDIT DALAMAN", officer: "SITI NAURIN FADZILAH BINTI JALAL", color: "from-rose-500 to-red-600", photo: "assets/photos/siti-naurin-fadzilah-binti-jalal.jpg" },
      { portfolio: "SUMBER MANUSIA / HRMIS", officer: "HANISAH BINTI MANSOR", color: "from-rose-500 to-red-600", photo: "assets/photos/hanisah-binti-mansor.jpg" },
      { portfolio: "PEMBANTU KHIDMAT AM", officer: "MULYANTI BINTI MIKIL @ MOHAMED ISHAK", color: "from-rose-500 to-red-600", photo: "assets/photos/mulyanti-binti-mikil.jpg" },
      { portfolio: "e-PANGKAT/ e-PRESTASI", officer: "HANISAH BINTI MANSOR", color: "from-rose-500 to-red-600", photo: "assets/photos/hanisah-binti-mansor.jpg" },
      { 
        portfolio: "PPM (PRASEKOLAH)", 
        officer: "RAPIDAH BINTI KARIM",
        photo: "assets/photos/rapidah-binti-karim.jpg",
        extraOfficers: [
          { name: "YENNY BINTI SANAUDI", photo: "assets/photos/yenny-binti-sanaudi.jpg" },
          { name: "FARIDAH BINTI ACHO", photo: "assets/photos/faridah-binti-acho.jpg" }
        ],
        color: "from-rose-500 to-red-600" 
      },
      { portfolio: "E-OPERASI", officer: "RAHMATIAH BINTI MOHD JUDA", color: "from-rose-500 to-red-600", photo: "assets/photos/rahmatiah-binti-mohd-juda.jpg" }
    ],
    // KOLUM KANAN (DIGITAL, ICT, DATA & PEMBANGUNAN)
    rightWing: [
      { portfolio: "ICT", officer: "RONI BIN BACHO", color: "from-rose-500 to-red-600", photo: "assets/photos/roni-bin-bacho.jpg" },
      { portfolio: "SK@S", officer: "NOZE BINTI TUKIJAN", color: "from-rose-500 to-red-600", photo: "assets/photos/noze-binti-tukijan.jpg" },
      { portfolio: "DATA SEKOLAH / IDME", officer: "MOHD ALFAIZAL BIN DAUD", color: "from-rose-500 to-red-600", photo: "assets/photos/mohd-alfaizal-bin-daud.jpg" },
      { portfolio: "LDP / KOMPETENSI", officer: "EVALORENNA BINTI LAMINSIN", color: "from-rose-500 to-red-600", photo: "assets/photos/evalorenna-binti-laminsin.jpg" },
      { 
        portfolio: "PEMBANGUNAN", 
        officer: "WAN MUHAMAD YUSUF BIN WAN ABDUL AZIZ",
        photo: "assets/photos/wan-muhamad-yusuf.jpg",
        extraOfficers: [
          { name: "MOHAMMAD IKHWAN BIN ABDURAIS", photo: "assets/photos/mohammad-ikhwan-bin-abdurais.jpg" }
        ],
        color: "from-rose-500 to-red-600" 
      },
      { portfolio: "CARTA SEKOLAH", officer: "BAJAM BINTI LADUNG", color: "from-rose-500 to-red-600", photo: "assets/photos/bajam-binti-ladung.jpg" },
      { portfolio: "ASET / MAKLUMAT SEKOLAH", officer: "ASMADI BIN LAJJAKASI", color: "from-rose-500 to-red-600", photo: "assets/photos/asmadi-bin-lajjakasi.jpg" },
      { portfolio: "MEDIA / DIGITAL", officer: "MOHAMMAD FIKREY BIN ABDUL GAPAR", color: "from-rose-500 to-red-600", photo: "assets/photos/mohammad-fikrey-bin-abdul-gapar.jpg" }
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
      badge: "Peneraju Sekolah",
      photo: "assets/photos/yunus-bin-patarai.jpg"
    },
    deputyAdmin: {
      role: "PENOLONG KANAN PENTADBIRAN",
      name: "RAHMATIAH BINTI MOHD JUDA",
      badge: "PK 1 Pentadbiran & Kurikulum",
      photo: "assets/photos/rahmatiah-binti-mohd-juda.jpg"
    },
    deputyPetang: {
      role: "PENOLONG KANAN PETANG",
      name: "EMRAN BIN HJ SELAMAT",
      badge: "PK Petang",
      photo: "assets/photos/emran-bin-hj-selamat.jpg"
    },
    secretary: {
      role: "SETIAUSAHA",
      name: "ANI BINTI PATOLA",
      badge: "Setiausaha Kurikulum",
      photo: "assets/photos/ani-binti-patola.jpg"
    },
    // LAJUR 1: PANITIA (12 PANITIA)
    panitia: [
      { subject: "BAHASA MELAYU", head: "SABRIAH @ HABIBAH BINTI ABDUL SABAR", icon: "📖", photo: "assets/photos/sabriah--habibah-binti-abdul-sabar.jpg" },
      { subject: "BAHASA INGGERIS", head: "HAMSIAH BINTI HAMID", icon: "🔤", photo: "assets/photos/hamsiah-binti-hamid.jpg" },
      { subject: "MATEMATIK", head: "MASTURAH BINTI TUDA", icon: "📐", photo: "assets/photos/masturah-binti-tuda.jpg" },
      { subject: "SAINS", head: "JUNAID BIN NURDIN", icon: "🔬", photo: "assets/photos/junaid-bin-nurdin.jpg" },
      { subject: "SEJARAH", head: "RINI BINTI DAUD", icon: "🏛️", photo: "assets/photos/rini-binti-daud.jpg" },
      { subject: "PENDIDIKAN ISLAM", head: "HASNAN BIN MAT ZIN", icon: "🕌", photo: "assets/photos/hasnan-bin-mat-zin.jpg" },
      { subject: "PENDIDIKAN MORAL", head: "FARIDAH BINTI SUNU", icon: "⚖️", photo: "assets/photos/faridah-binti-sunu.jpg" },
      { subject: "BAHASA ARAB", head: "SUNARTI BINTI TAPPA", icon: "🌙", photo: "assets/photos/sunarti-binti-tappa.jpg" },
      { subject: "REKA BENTUK TEKNOLOGI", head: "RONI BIN BACHO", icon: "⚙️", photo: "assets/photos/roni-bin-bacho.jpg" },
      { subject: "PENDIDIKAN JASMANI & KESIHATAN", head: "WAFA FARHANA BINTI ABD KADIR", icon: "🏃", photo: "assets/photos/wafa-farhana-binti-abd-kadir.jpg" },
      { subject: "PENDIDIKAN SENI VISUAL", head: "SITI JAWARA BINTI LUKMAN", icon: "🎨", photo: "assets/photos/siti-jawara-binti-lukman.jpg" },
      { subject: "PENDIDIKAN MUZIK", head: "TANJANG BIN TURE", icon: "🎵", photo: "assets/photos/tanjang-bin-ture.jpg" }
    ],
    // LAJUR 2: PENYELARAS (4 PORTFOLIO)
    penyelaras: [
      { portfolio: "PENYELARAS TAHAP 1", officer: "RASMAWATI BINTI TAUSE", icon: "🧒", photo: "assets/photos/rasmawati-binti-tause.jpg" },
      { portfolio: "PENYELARAS TAHAP 2", officer: "HASNAN BIN MAT ZIN", icon: "🧑", photo: "assets/photos/hasnan-bin-mat-zin.jpg" },
      { portfolio: "JADUAL WAKTU PAGI", officer: "NURUL ANISA BINTI SAPARUDIN", icon: "🌅", photo: "assets/photos/nurul-anisa-binti-saparudin.jpg" },
      { portfolio: "JADUAL WAKTU PETANG", officer: "AINATUN NADHIRAH BINTI DHARMAWI", icon: "🌇", photo: "assets/photos/ainatun-nadhirah-binti-dharmawi.jpg" }
    ],
    // LAJUR 3: UNIT KURIKULUM (11 UNIT)
    unitKurikulum: [
      { unit: "PEPERIKSAAN DALAMAN", officer: "ASMADI BIN LAJJAKASI", icon: "📝", photo: "assets/photos/asmadi-bin-lajjakasi.jpg" },
      { unit: "PENTAKSIRAN BILIK DARJAH", officer: "BAJAM BINTI LADUNG", icon: "📊", photo: "assets/photos/bajam-binti-ladung.jpg" },
      { unit: "PUSAT SUMBER", officer: "ROSMINAH BINTI SAPAR", icon: "📚", photo: "assets/photos/rosminah-binti-sapar.jpg" },
      { unit: "PRASEKOLAH", officer: "MARIANA BINTI KASSIM", icon: "🧸", photo: "assets/photos/mariana-binti-kassim.jpg" },
      { unit: "PEMULIHAN KHAS", officer: "MUHAMADIAN BIN SUAIBU", icon: "🎯", photo: "assets/photos/muhamadian-bin-suaibu.jpg" },
      { unit: "INTERVENSI", officer: "S.LILI BINTI LADI", icon: "💡", photo: "assets/photos/slili-binti-ladi.jpg" },
      { unit: "BMI", officer: "RASMAWATI BINTI TAUSE", icon: "⚖️", photo: "assets/photos/rasmawati-binti-tause.jpg" },
      { unit: "SEGAK", officer: "ROSIDIAN BIN IDRIS", icon: "🏅", photo: "assets/photos/rosidian-bin-idris.jpg" },
      { unit: "PLC", officer: "MARINI BINTI LADI", icon: "🤝", photo: "assets/photos/marini-binti-ladi.jpg" },
      { unit: "HIP", officer: "JAINAH BINTI SULAIMAN", icon: "🗣️", photo: "assets/photos/jainah-binti-sulaiman.jpg" },
      { unit: "DELIMA", officer: "RONI BIN BACHO", icon: "💻", photo: "assets/photos/roni-bin-bacho.jpg" }
    ]
  },

  // =========================================================================
  // PENGURUSAN UNIT HAL EHWAL MURID (HEM) 2026 (SEPADAN 100% SUMBER RASMI HEM)
  // =========================================================================
  hemHierarchy2026: {
    title: "CARTA ORGANISASI UNIT HAL EHWAL MURID (HEM) 2026",
    penasihat: "YUNUS BIN PATARAI (Guru Besar)",
    leaderPhoto: "assets/photos/yunus-bin-patarai.jpg",
    pengerusi: "KOMALA BINTI JOSEPH (Penolong Kanan HEM)",
    pengerusiPhoto: "assets/photos/komala-binti-joseph.jpg",
    timbPengerusi1: "RAHMATIAH BINTI MOHD JUDA (PK Pentadbiran)",
    timbPengerusi2: "WARNAH BINTI SIRA (PK Kokurikulum)",
    timbPengerusi3: "EMRAN BIN HJ SELAMAT (PK Petang)",
    setiausaha: "NORLINA BINTI BAGWAS",
    setiausahaPhoto: "assets/photos/norlina-binti-bagwas.jpg",
    penolongSetiausaha: "DARMAWATI BTE LOKKONG",
    penolongSetiausahaPhoto: "assets/photos/darmawati-bte-lokkong.jpg",
    motto: "Sahsiah Terpuji, Murid Berkualiti, Sekolah Harmoni",
    kpi: [
      { label: "Sasaran Kehadiran Murid", value: "95%+", icon: "📈" },
      { label: "Kadar Salah Laku Disiplin", value: "< 0.5%", icon: "🛡️" },
      { label: "Penerima Buku Teks (SPBT)", value: "100% (890 Murid)", icon: "📖" },
      { label: "Murid Layak RMT & Susu", value: "184 Murid", icon: "🥛" }
    ],
    units: [
      { 
        id: "hem-disiplin", 
        name: "Lembaga Disiplin & Pengawas Sekolah", 
        head: "NOZE BINTI TUKIJAN", 
        photo: "assets/photos/noze-binti-tukijan.jpg",
        icon: "🛡️", 
        badge: "Disiplin & SSDM", 
        desc: "Pengurusan undang-undang sekolah, pemerkasaan watak kepimpinan pengawas serta pemantauan rekod amalan baik & sahsiah dalam SSDM KPM." 
      },
      { 
        id: "hem-ubk", 
        name: "Bimbingan & Kaunseling (UBK) / Minda Sihat", 
        head: "SITI NAURIN FADZILAH BINTI JALAL", 
        photo: "assets/photos/siti-naurin-fadzilah-binti-jalal.jpg",
        icon: "🤝", 
        badge: "Kaunseling & Minda Sihat", 
        desc: "Pelaksanaan Program Guru Penyayang, saringan psikometrik & Minda Sihat KPM, Pembimbing Rakan Sebaya (PRS) dan intervensi psikososial emosi murid." 
      },
      { 
        id: "hem-bap", 
        name: "Bantuan Awal Persekolahan (BAP)", 
        head: "SABRIAH @ HABIBAH BINTI ABDUL SABAR", 
        photo: "assets/photos/sabriah--habibah-binti-abdul-sabar.jpg",
        icon: "💰", 
        badge: "BAP KPM", 
        desc: "Penyelarasan semakan kelayakan, dokumentasi dan agihan bantuan tunai RM150 BAP KPM kepada semua murid yang layak secara telus dan tepat." 
      },
      { 
        id: "hem-susu", 
        name: "Program Susu Sekolah (PSS)", 
        head: "FARIDAH BINTI SUNU", 
        photo: "assets/photos/faridah-binti-sunu.jpg",
        icon: "🥛", 
        badge: "Susu Sekolah", 
        desc: "Pengurusan penerimaan bekalan susu segar, kawalan kualiti tarikh luput, penyimpanan selamat dan jadual minum susu berkala murid." 
      },
      { 
        id: "hem-ys", 
        name: "Bantuan Yayasan Sabah", 
        head: "JUNAID BIN NURDIN", 
        photo: "assets/photos/junaid-bin-nurdin.jpg",
        icon: "🏛️", 
        badge: "Yayasan Sabah", 
        desc: "Penyelarasan permohonan biasiswa dan bantuan pendidikan Yayasan Sabah bagi anak-anak negeri Sabah yang berkelayakan." 
      },
      { 
        id: "hem-spbt", 
        name: "Skim Pinjaman Buku Teks (SPBT / BOSS)", 
        head: "ANI BINTI PATOLA", 
        photo: "assets/photos/ani-binti-patola.jpg",
        icon: "📖", 
        badge: "SPBT 100%", 
        desc: "Pengurusan Bilik Operasi SPBT Sekolah (BOSS), semakan stok buku teks, agihan 100% kepada semua 890 murid dan pemulangan akhir sesi." 
      },
      { 
        id: "hem-pendaftaran-ting1", 
        name: "Pendaftaran Murid Tingkatan 1", 
        head: "AG KU KEMAINDDRA BIN PG MOHD TAIB", 
        photo: "assets/photos/ag-ku-kemainddra-bin-pg-mohd-taib.jpg",
        icon: "🎓", 
        badge: "Kemasukan Menengah", 
        desc: "Pengurusan data penempatan murid Tahun 6 ke Sekolah Menengah (Tingkatan 1 / Kelas Peralihan) serta urusan permohonan ke Sekolah Khusus / SBP / SMKA." 
      },
      { 
        id: "hem-kebajikan", 
        name: "Kebajikan Murid & Asnaf", 
        head: "HALIM BIN BIDI", 
        photo: "assets/photos/halim-bin-bidi.jpg",
        icon: "❤️", 
        badge: "Kebajikan & Prihatin", 
        desc: "Santunan kebajikan murid yatim, murid asnaf dan keluarga B40 melalui tabung kilat kebajikan, bantuan pakaian seragam dan sumbangan komuniti." 
      },
      { 
        id: "hem-rmt", 
        name: "Rancangan Makanan Tambahan (RMT)", 
        head: "NURUL ANISA BINTI SAPARUDIN", 
        photo: "assets/photos/nurul-anisa-binti-saparudin.jpg",
        extraOfficer: "NECHI BINTI SERUNAI (AJK)",
        extraOfficerPhoto: "assets/photos/nechi-binti-serunai.jpg",
        icon: "🍱", 
        badge: "Pemakanan Seimbang", 
        desc: "Penyeliaan menu seimbang 184 murid penerima RMT mengikut jadual KPM, pemantauan buku log kehadiran harian dan kebersihan sajian kantin." 
      },
      { 
        id: "hem-transisi", 
        name: "Program Transisi Tahun 1", 
        head: "DARMAWATI BTE LOKKONG", 
        photo: "assets/photos/darmawati-bte-lokkong.jpg",
        icon: "🌱", 
        badge: "Transisi Tahun 1", 
        desc: "Pelaksanaan Modul Orientasi dan Modul PdP Transisi Tahun 1 KPM bagi memastikan penyesuaian sosioemosi dan fizikal murid baharu ke alam persekolahan perdana." 
      },
      { 
        id: "hem-kantin", 
        name: "Jawatankuasa Kantin Sekolah", 
        head: "RINI BINTI DAUD", 
        photo: "assets/photos/rini-binti-daud.jpg",
        extraOfficer: "MARINI BINTI LADI (AJK)",
        extraOfficerPhoto: "assets/photos/marini-binti-ladi.jpg",
        icon: "🍽️", 
        badge: "Kantin Sihat", 
        desc: "Pemantauan gred kebersihan premis kantin sekolah, pengambilan sampel makanan harian, kawalan mutu makanan halal dan tanda harga berpatutan." 
      },
      { 
        id: "hem-keselamatan", 
        name: "Keselamatan Sekolah & Kawalan Bencana", 
        head: "ZAMRIE BIN OMAR ALI", 
        photo: "assets/photos/zamrie-bin-omar-ali.jpg",
        icon: "🚨", 
        badge: "Keselamatan", 
        desc: "Penyelarasan latihan kebakaran (fire drill), kawalan keselamatan pintu pagar utama waktu pagi/petang dan pelan kontingensi bencana alam." 
      },
      { 
        id: "hem-ppda", 
        name: "Pendidikan Pencegahan Dadah (PPDa)", 
        head: "SITI JAWARA BINTI LUKMAN", 
        photo: "assets/photos/siti-jawara-binti-lukman.jpg",
        extraOfficer: "S.LILI BINTI LADI (AJK)",
        extraOfficerPhoto: "assets/photos/slili-binti-ladi.jpg",
        icon: "🚭", 
        badge: "PPDa & Bebas Rokok", 
        desc: "Penyelaras Lorong/Sudut PPDa, kempen kesedaran bahaya rokok, vape, dadah, inhalan, HIV dan alkohol dalam kalangan murid sekolah rendah." 
      },
      { 
        id: "hem-kwamp", 
        name: "KWAMP & eKasih", 
        head: "EVALORENNA BINTI LAMINSIN", 
        photo: "assets/photos/evalorenna-binti-laminsin.jpg",
        icon: "🤝", 
        badge: "KWAMP / eKasih", 
        desc: "Semakan data murid berstatus miskin tegar melalui sistem eKasih dan APDM bagi menyalurkan Kumpulan Wang Amanah Pelajar Miskin (KWAMP)." 
      },
      { 
        id: "hem-3k", 
        name: "Program 3K (Kebersihan, Kesihatan, Keselamatan)", 
        head: "NORIMAH BINTI JOYO REJO", 
        photo: "assets/photos/norimah-binti-joyo-rejo.jpg",
        icon: "🦺", 
        badge: "Penarafan 3K", 
        desc: "Penyelarasan penarafan bintang kebersihan tandas, pencegahan denggi (COMBI), rawatan suntikan dan pergigian KKM serta keceriaan persekitaran sekolah." 
      }
    ]
  },

  // =========================================================================
  // PENGURUSAN UNIT KOKURIKULUM 2026
  // =========================================================================
  kokoHierarchy2026: {
    title: "CARTA ORGANISASI UNIT KOKURIKULUM 2026",
    penasihat: "YUNUS BIN PATARAI (Guru Besar)",
    leaderPhoto: "assets/photos/yunus-bin-patarai.jpg",
    pengerusi: "WARNAH BINTI SIRA (Penolong Kanan Kokurikulum)",
    pengerusiPhoto: "assets/photos/warnah-binti-sira.jpg",
    timbPengerusi1: "RAHMATIAH BINTI MOHD JUDA (PK Pentadbiran)",
    timbPengerusi2: "KOMALA BINTI JOSEPH (PK HEM)",
    timbPengerusi3: "EMRAN BIN HJ SELAMAT (PK Petang)",
    setiausaha: "ROSIDIAN BIN IDRIS (Setiausaha Sukan & Pegawai Teknikal)",
    setiausahaPhoto: "assets/photos/rosidian-bin-idris.jpg",
    penolongSetiausaha: "MOHAMMAD IKHWAN BIN ABDURAIS",
    penolongSetiausahaPhoto: "assets/photos/mohammad-ikhwan-bin-abdurais.jpg",
    penyelarasPajsk: "ROSIDIAN BIN IDRIS",
    motto: "Kecergasan Fizikal, Ketahanan Mental, Kecemerlangan Modal Insan",
    uniformUnits: [
      { name: "Persekutuan Pengakap Kanak-Kanak", head: "ASMADI BIN LAJJAKASI", icon: "🏕️", members: "Tahap 2 (Tahun 4, 5, 6)", badge: "Beruniform", photo: "assets/photos/asmadi-bin-lajjakasi.jpg" },
      { name: "Tunas Kadet Remaja Sekolah (TKRS)", head: "JUNAID BIN NURDIN", icon: "🎖️", members: "Tahap 2 (Tahun 4, 5, 6)", badge: "Beruniform", photo: "assets/photos/junaid-bin-nurdin.jpg" },
      { name: "Bulan Sabit Merah Malaysia (BSMM)", head: "HAMSIAH BINTI HAMID", icon: "🚑", members: "Tahap 2 (Tahun 4, 5, 6)", badge: "Beruniform", photo: "assets/photos/hamsiah-binti-hamid.jpg" },
      { name: "Pergerakan Puteri Islam Malaysia (PPIM)", head: "BAJAM BINTI LADUNG", icon: "🌸", members: "Tahap 2 (Tahun 4, 5, 6)", badge: "Beruniform", photo: "assets/photos/bajam-binti-ladung.jpg" },
      { name: "Pandu Puteri Tunas", head: "RINI BINTI DAUD", icon: "🍀", members: "Tahap 2 (Tahun 4, 5, 6)", badge: "Beruniform", photo: "assets/photos/rini-binti-daud.jpg" }
    ],
    clubUnits: [
      { name: "Kelab Komputer & Media Digital", head: "MOHAMMAD FIKREY BIN ABDUL GAPAR", icon: "💻", field: "Literasi Digital & AI", badge: "Teknologi", photo: "assets/photos/mohammad-fikrey-bin-abdul-gapar.jpg" },
      { name: "Kelab STEM & Inovasi Sains", head: "RONI BIN BACHO", icon: "🔬", field: "Sains & RBT", badge: "Inovasi", photo: "assets/photos/roni-bin-bacho.jpg" },
      { name: "Persatuan Bahasa Melayu", head: "SABRIAH @ HABIBAH BINTI ABDUL SABAR", icon: "📚", field: "Bahasa & Sastera", badge: "Akademik", photo: "assets/photos/sabriah--habibah-binti-abdul-sabar.jpg" },
      { name: "English Club & HIP", head: "JAINAH BINTI SULAIMAN", icon: "🔤", field: "Language & HIP", badge: "Akademik", photo: "assets/photos/jainah-binti-sulaiman.jpg" },
      { name: "Persatuan Pendidikan Islam & J-QAF", head: "HASNAN BIN MAT ZIN", icon: "🕌", field: "Kerohanian & Dakwah", badge: "Agama", photo: "assets/photos/hasnan-bin-mat-zin.jpg" },
      { name: "Kelab Seni Visual & Muzik Kebudayaan", head: "TANJANG BIN TURE", icon: "🎨", field: "Kesenian & Warisan", badge: "Kesenian", photo: "assets/photos/tanjang-bin-ture.jpg" },
      { name: "Kelab Rukun Negara & Doktor Muda", head: "NOZE BINTI TUKIJAN", icon: "🇲🇾", field: "Patriotisme & Kesihatan", badge: "Sosial", photo: "assets/photos/noze-binti-tukijan.jpg" }
    ],
    sportsUnits: [
      { name: "Kelab Bola Sepak", head: "WAN MUHAMAD YUSUF BIN WAN ABDUL AZIZ", icon: "⚽", field: "Padang", badge: "1M1S", photo: "assets/photos/wan-muhamad-yusuf.jpg" },
      { name: "Kelab Bola Jaring", head: "WAFA FARHANA BINTI ABD KADIR", icon: "🏐", field: "Gelanggang", badge: "1M1S", photo: "assets/photos/wafa-farhana-binti-abd-kadir.jpg" },
      { name: "Kelab Badminton", head: "MASTURAH BINTI TUDA", icon: "🏸", field: "Dewan / Raket", badge: "1M1S", photo: "assets/photos/masturah-binti-tuda.jpg" },
      { name: "Kelab Sepak Takraw", head: "MUHAMADIAN BIN SUAIBU", icon: "🥏", field: "Gelanggang", badge: "1M1S", photo: "assets/photos/muhamadian-bin-suaibu.jpg" },
      { name: "Kelab Olahraga & Balapan", head: "ROSIDIAN BIN IDRIS", icon: "🏃", field: "Balapan", badge: "1M1S", photo: "assets/photos/rosidian-bin-idris.jpg" }
    ],
    sportHouses: [
      { name: "Rumah Merah", color: "red", hex: "#df3f47", head: "HJH. MASTURAH BINTI TUDA (K)", photo: "assets/photos/masturah-binti-tuda.jpg", motto: "Semangat Juang Membara", teachersCount: 10, standing: "—", points: 0 },
      { name: "Rumah Ungu", color: "purple", hex: "#6d36d8", head: "HALIM BIN BIDI (K)", photo: "assets/photos/halim-bin-bidi.jpg", motto: "Keazaman Menjana Kejuaraan", teachersCount: 11, standing: "—", points: 0 },
      { name: "Rumah Biru", color: "blue", hex: "#246bfd", head: "MUHAMADIAN BIN SUAIBU (K)", photo: "assets/photos/muhamadian-bin-suaibu.jpg", motto: "Gagah Perkasa Di Gelanggang", teachersCount: 11, standing: "—", points: 0 },
      { name: "Rumah Kuning", color: "amber", hex: "#e5ad00", head: "NORLINA BINTI BAGWAS (K)", photo: "assets/photos/norlina-binti-bagwas.jpg", motto: "Menyinari Arena Kejayaan", teachersCount: 11, standing: "—", points: 0 }
    ],
    achievements: [
      { title: "Kejohanan TASCAR 3.0 Peringkat Kebangsaan", badge: "Kebangsaan 🥇", level: "Kebangsaan", date: "2026", desc: "Penyampaian pingat dan sijil pencapaian cemerlang peringkat kebangsaan, dibimbing dan dilatih oleh MOHAMMAD FIKREY BIN ABDUL GAPAR." },
      { title: "White Bridge Unichamp", badge: "Daerah / Negeri 🥈", level: "Daerah / Negeri", date: "2026", desc: "Pengiktirafan dan penganugerahan kepada barisan murid dan guru pembimbing peserta kejohanan White Bridge Unichamp." },
      { title: "Minggu Kokurikulum Unit Beruniform (Pengakap)", badge: "Peringkat Sekolah", level: "Sekolah", date: "September 2026", desc: "Aktiviti kemahiran ikatan, perkhemahan, dan disiplin baris yang dikendalikan oleh Persekutuan Pengakap Kanak-Kanak SK Ranggu." }
    ]
  },

  // =========================================================================
  // SK RANGGU SPORTSYNC • KEJOHANAN OLAHRAGA TAHUNAN 2026 (KOT 26)
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
    stats: {
      registeredStudents: 0,
      officialResults: 0,
      completedEntries: 0,
      totalPoints: 0
    },
    houses: [
      {
        id: "Biru",
        name: "Rumah Biru",
        color: "#246bfd",
        badgeColor: "blue",
        motto: "Gagah Perkasa Di Gelanggang",
        leadTeacher: "MUHAMADIAN BIN SUAIBU (K)",
        leadPhoto: "assets/photos/muhamadian-bin-suaibu.jpg",
        teachers: ["Muhamadian bin Suaibu (K)", "Hj. Junaid bin Nurdin", "Roni bin Bacho", "Asmadi bin Lajjakasi", "Noze binti Tukijan", "Bajam binti Ladung", "Siti Rabia binti Ibrahim", "Nurul Anisa binti Saparudin", "Siti Jawara binti Lukman", "Faridah binti Sunu", "Rasmawati binti Tause"],
        gold: 0,
        silver: 0,
        bronze: 0,
        fourth: 0,
        points: 0,
        standing: "—",
        status: "MENANTI KEPUTUSAN ACARA"
      },
      {
        id: "Kuning",
        name: "Rumah Kuning",
        color: "#e5ad00",
        badgeColor: "amber",
        motto: "Menyinari Arena Kejayaan",
        leadTeacher: "NORLINA BINTI BAGWAS (K)",
        leadPhoto: "assets/photos/norlina-binti-bagwas.jpg",
        teachers: ["Norlina binti Bagwas (K)", "Mohd. Ikhwan bin Abdurais", "Hasnan bin Mat Zin", "Hamsiah binti Hamid", "Wafa Farhana binti Abd. Kadir", "Evalorenna binti Laminsin", "Noor Syafiqah Nadhirah binti Jamaluddin", "Ruhaya binti Ahmad", "Nechi binti Serunai", "Yusni binti Wahjudin", "Sunarti binti Tappa"],
        gold: 0,
        silver: 0,
        bronze: 0,
        fourth: 0,
        points: 0,
        standing: "—",
        status: "MENANTI KEPUTUSAN ACARA"
      },
      {
        id: "Ungu",
        name: "Rumah Ungu",
        color: "#6d36d8",
        badgeColor: "purple",
        motto: "Keazaman Menjana Kejuaraan",
        leadTeacher: "HALIM BIN BIDI (K)",
        leadPhoto: "assets/photos/halim-bin-bidi.jpg",
        teachers: ["Halim bin Bidi (K)", "Ag Ku Kemainddra bin Pg Mohd Taib", "MOHAMMAD FIKREY BIN ABDUL GAPAR", "Jainah binti Sulaiman", "Siti Naurin Fadzilah binti Jalal", "Ani binti Patola", "Mariana binti Kassim", "Rosminah binti Sapar", "Marini binti Ladi", "Ainatun Nadhirah binti Dharmawi", "Salsabila binti Shahruddin"],
        gold: 0,
        silver: 0,
        bronze: 0,
        fourth: 0,
        points: 0,
        standing: "—",
        status: "MENANTI KEPUTUSAN ACARA"
      },
      {
        id: "Merah",
        name: "Rumah Merah",
        color: "#df3f47",
        badgeColor: "rose",
        motto: "Semangat Juang Membara",
        leadTeacher: "HJH. MASTURAH BINTI TUDA (K)",
        leadPhoto: "assets/photos/masturah-binti-tuda.jpg",
        teachers: ["Hjh. Masturah binti Tuda (K)", "Tanjang bin Ture", "Zamrie bin Omar Ali", "Hj. Wan Muhamad Yusuf", "Sabriah @ Habibah binti Abdul Sabar", "Rini binti Daud", "Darmawati binti Lokkong", "S. Lili binti Ladi", "Nur Faezah binti Bantalani", "Robiatul Aidawyah"],
        gold: 0,
        silver: 0,
        bronze: 0,
        fourth: 0,
        points: 0,
        standing: "—",
        status: "MENANTI KEPUTUSAN ACARA"
      }
    ],
    awards: [
      {
        category: "Olahragawan Terbaik",
        athlete: "Menanti Keputusan Rasmi",
        cohort: "Kategori L12 • Sesi 2026",
        house: "Semua Rumah Sukan",
        houseColor: "#64748b",
        achievements: "Kejohanan KOT 26 dijadualkan berlangsung pada 24 - 25 Okt 2026",
        points: 0,
        icon: "👑"
      },
      {
        category: "Olahragawati Terbaik",
        athlete: "Menanti Keputusan Rasmi",
        cohort: "Kategori P12 • Sesi 2026",
        house: "Semua Rumah Sukan",
        houseColor: "#64748b",
        achievements: "Kejohanan KOT 26 dijadualkan berlangsung pada 24 - 25 Okt 2026",
        points: 0,
        icon: "👸"
      },
      {
        category: "Olahragawan Harapan",
        athlete: "Menanti Keputusan Rasmi",
        cohort: "Kategori L10 • Sesi 2026",
        house: "Semua Rumah Sukan",
        houseColor: "#64748b",
        achievements: "Kejohanan KOT 26 dijadualkan berlangsung pada 24 - 25 Okt 2026",
        points: 0,
        icon: "🌟"
      },
      {
        category: "Olahragawati Harapan",
        athlete: "Menanti Keputusan Rasmi",
        cohort: "Kategori P10 • Sesi 2026",
        house: "Semua Rumah Sukan",
        houseColor: "#64748b",
        achievements: "Kejohanan KOT 26 dijadualkan berlangsung pada 24 - 25 Okt 2026",
        points: 0,
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
    leaderPhoto: "assets/photos/yunus-bin-patarai.jpg",
    pengerusi: "EMRAN BIN HJ SELAMAT (Penolong Kanan Petang)",
    pengerusiPhoto: "assets/photos/emran-bin-hj-selamat.jpg",
    penyelarasTahap1: "RASMAWATI BINTI TAUSE (Penyelaras Tahap 1)",
    penyelarasTahap1Photo: "assets/photos/rasmawati-binti-tause.jpg",
    penyelarasJadual: "AINATUN NADHIRAH BINTI DHARMAWI (Jadual Waktu Petang)",
    penyelarasJadualPhoto: "assets/photos/ainatun-nadhirah-binti-dharmawi.jpg",
    penyelarasDisiplin: "ZAMRIE BIN OMAR ALI (Disiplin & Keselamatan Petang)",
    penyelarasDisiplinPhoto: "assets/photos/zamrie-bin-omar-ali.jpg",
    penyelarasTransisi: "DARMAWATI BTE LOKKONG (Transisi Tahun 1)",
    penyelarasTransisiPhoto: "assets/photos/darmawati-bte-lokkong.jpg",
    totalClasses: 12,
    totalPupils: 412,
    totalTeachers: 24,
    cohorts: [
      { level: "Tahun 1", classes: 4, pupils: 126, session: "Petang", icon: "🌱" },
      { level: "Tahun 2", classes: 4, pupils: 134, session: "Petang", icon: "🌿" },
      { level: "Tahun 3", classes: 4, pupils: 135, session: "Petang", icon: "🌳" }
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

  // PILAR INSPIRASI & KERANGKA STRATEGIK
  inspiration: {
    tawauLeads: "TAWAU LEADS : IKHLAS MEMACU KECEMERLANGAN",
    digitalForward: "SK RANGGU MELANGKAH BERSAMA, MEMACU MASA DEPAN",
    quoteHeader: "INSPIRASI WARGA PENDIDIK",
    quoteText: "Teknologi Membuka Peluang. Guru Memberi Arah. Pendidikan Membentuk Masa Depan.",
    quoteFooter: "SK RANGGU • BERUSAHA • BERILMU • BERBAKTI"
  },

  // SALURAN MEDIA SOSIAL, TELEGRAM & KOMUNITI DIGITAL RASMI
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
      id: "soc-hemsmarttrack", 
      platform: "Sistem Pentadbiran & HEM", 
      name: "HEM SMARTTRACK (SK Ranggu)", 
      url: "https://fikreyxcode.github.io/sistemkehadiranskrg/", 
      icon: "🛡️", 
      badge: "HEM SMARTTRACK", 
      color: "blue", 
      desc: "Sistem e-JKM Kehadiran Murid, Keberadaan Guru & AKP, Guru Bertugas Harian, SmartDisiplin dan RMT Bersepadu." 
    },
    { 
      id: "soc-smartdisiplin", 
      platform: "Sistem Disiplin", 
      name: "HEM SMARTDISIPLIN", 
      url: "https://fikreyxcode.github.io/sistemkehadiranskrg/#guru-bertugas", 
      icon: "⚖️", 
      badge: "HEM DISIPLIN", 
      color: "amber", 
      desc: "Sistem pengurusan rekod sahsiah, salah laku disiplin murid, SSDM dan kawalan disiplin sekolah." 
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

  // PENGUMUMAN PENTADBIRAN (TERSELARAS DARI TELARASMI SKRG)
  announcements: [
    {
      id: "ann-tele-1",
      title: "Penugasan Pegawai Teknikal Kejohanan Merentas Desa 2026 (PEG.TEKNIKAL M.DESA '26)",
      date: "2026-10-06",
      priority: "Tinggi",
      category: "Kokurikulum • Telegram",
      author: "PK Kokurikulum (Puan Warnah binti Sira) • Telerasmi SKRG",
      content: "Senarai penuh penugasan Pegawai Teknikal, Marsyal Laluan, Pencatat Masa dan Hakim Penamat bagi Kejohanan Merentas Desa SK Ranggu 2026 telah diselaraskan. Sila semak fail PDF hebahan dalam saluran Telerasmi SKRG."
    },
    {
      id: "ann-tele-2",
      title: "Taklimat Penilaian Prestasi Kerja Guru & AKP Sesi 2026 (6.Prestasi kerja.pptx)",
      date: "2026-10-06",
      priority: "Penting",
      category: "Pentadbiran • Telegram",
      author: "Guru Besar (Encik Yunus bin Patarai) • Telerasmi SKRG",
      content: "Slaid taklimat PBPPP Pegawai Perkhidmatan Pendidikan & Penilaian Prestasi AKP 2026 telah diedarkan dalam Telegram rasmi. Semua warga pendidik dan AKP diminta meneliti garis panduan penetapan keberhasilan."
    },
    {
      id: "ann-tele-3",
      title: "Pengesahan Enrolmen Rasmi APDM bertarikh 5 Oktober 2026 (890 Murid, 27 Kelas)",
      date: "2026-10-05",
      priority: "Penting",
      category: "APDM & HEM",
      author: "Penyelaras APDM (Encik Mohammad Fikrey bin Abdul Gapar)",
      content: "Pengesahan data enrolmen murid terkini: 890 murid (449 Lelaki, 441 Perempuan) dalam 27 kelas (24 Perdana, 3 Prasekolah). Sidang petang merangkumi 12 kelas dengan 412 murid."
    },
    {
      id: "ann-tele-4",
      title: "Jadual Latihan Rumah Sukan & Saringan Acara Balapan & Padang (KOT 26)",
      date: "2026-10-05",
      priority: "Biasa",
      category: "Sukan • KOT 26",
      author: "Setiausaha Sukan (Encik Rosidian bin Idris)",
      content: "Latihan intensif 4 Rumah Sukan (Merah, Ungu, Biru, Kuning) dan saringan pemilihan peserta sedang berjalan lancar mengikut jadual giliran padang menjelang temasya 24-25 Oktober 2026."
    },
    {
      id: "ann-tele-5",
      title: "Perekodan e-JKM Kehadiran Murid (HEM SmartTrack) & Penghantaran e-RPH Minggu 28",
      date: "2026-10-06",
      priority: "Tinggi",
      category: "Kurikulum & HEM",
      author: "PK Pentadbiran & PK HEM",
      content: "Guru kelas sesi pagi & petang diingatkan mengemas kini rekod kehadiran sebelum jam 9.00 pagi / 2.30 petang melalui HEM SmartTrack, dan menghantar e-RPH Minggu ke-28 sebelum Jumaat."
    }
  ],

  // DOKUMEN & PEKELILING
  documents: [
    {
      id: "doc-spk-1-2024",
      title: "Surat Pekeliling Kewangan Bil. 1 Tahun 2024 (SPK 1/2024)",
      category: "Pekeliling Kewangan",
      panitia: "Kewangan",
      date: "2024-01-15",
      type: "PDF",
      fileUrl: "https://drive.google.com/file/d/1XgJq013TjFm39vK9YVw8ZzN7n3F2_z8-/view?usp=drivesdk",
      size: "Google Drive PDF",
      uploader: "Kementerian Pendidikan Malaysia"
    },
    {
      id: "doc-ts25-v2",
      title: "Modul Bimbingan TS25 Versi 2.0 (PBD & Pedagogi)",
      category: "Modul TS25",
      panitia: "Bimbingan Instruksional",
      date: "2024-03-01",
      type: "PDF",
      fileUrl: "https://drive.google.com/file/d/10bXZC4ft-V3xspNcTAubdETfVC0z9FGg/view?usp=drivesdk",
      size: "Google Drive PDF",
      uploader: "Pejabat Pendidikan Daerah Tawau"
    },
    {
      id: "doc-pbs-2026",
      title: "Panduan Pengurusan Pentaksiran Berasaskan Sekolah (PBS) 2026",
      category: "Pentaksiran",
      panitia: "Lembaga Peperiksaan",
      date: "2026-01-01",
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
  // LENGKAP DENGAN FOTO RASMI, NO MYKAD & GRED HAKIKI
  staffList: [
    {
      id: 1,
      name: "YUNUS BIN PATARAI",
      ic: "721005-12-5911",
      role: "Guru Besar (Peneraju Sekolah)",
      grade: "GB DG10",
      type: "PPP",
      session: "Pagi",
      category: "Pengurusan Tertinggi",
      tier: 1,
      photo: "assets/photos/yunus-bin-patarai.jpg",
      classAssigned: null,
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Peneraju kepimpinan instruksional, pengurusan pentadbiran, kurikulum, hal ehwal murid, kokurikulum sekolah serta hubungan strategik PPD Tawau, JPN Sabah & komuniti."
    },
    {
      id: 2,
      name: "RAHMATIAH BINTI MOHD JUDA",
      ic: "751212-12-5962",
      role: "Penolong Kanan Pentadbiran (PK 1) • Pegawai e-Operasi",
      grade: "PK 1 DG10",
      type: "PPP",
      session: "Pagi",
      category: "Pengurusan Tertinggi",
      tier: 2,
      photo: "assets/photos/rahmatiah-binti-mohd-juda.jpg",
      classAssigned: null,
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Merancang dan menyelaras pentadbiran am, perjawatan guru, sistem e-Operasi, kurikulum sekolah, jadual waktu, peperiksaan serta penyeliaan kualiti instruksional."
    },
    {
      id: 3,
      name: "KOMALA BINTI JOSEPH",
      ic: "730914-12-5884",
      role: "Penolong Kanan Hal Ehwal Murid (PK HEM)",
      grade: "PK HEM DG12",
      type: "PPP",
      session: "Pagi",
      category: "Pengurusan Tertinggi",
      tier: 2,
      photo: "assets/photos/komala-binti-joseph.jpg",
      classAssigned: null,
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Memimpin dan menyelaras pembangunan sahsiah, disiplin murid, pengawas, kebajikan murid, skim pinjaman buku teks (SPBT), RMT, program 3K, kantin dan pendaftaran murid."
    },
    {
      id: 4,
      name: "WARNAH BINTI SIRA",
      ic: "700207-12-5618",
      role: "Penolong Kanan Kokurikulum (PK KOKU)",
      grade: "PK KOKUM DG10",
      type: "PPP",
      session: "Pagi",
      category: "Pengurusan Tertinggi",
      tier: 2,
      photo: "assets/photos/warnah-binti-sira.jpg",
      classAssigned: null,
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Menyelaras aktiviti pasukan badan beruniform, kelab dan persatuan, sukan dan permainan (1M1S), kejohanan olahraga tahunan, PAJSK serta penyertaan kokurikulum luar sekolah."
    },
    {
      id: 5,
      name: "EMRAN BIN HJ SELAMAT",
      ic: "691017-12-5279",
      role: "Penolong Kanan Petang (PK Petang)",
      grade: "PK PETANG DG10",
      type: "PPP",
      session: "Petang",
      category: "Pengurusan Tertinggi",
      tier: 2,
      photo: "assets/photos/emran-bin-hj-selamat.jpg",
      classAssigned: null,
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Menyelia operasi harian persekolahan sidang petang (Tahun 1, 2 dan 3), kehadiran murid, kebajikan, keselamatan serta penyelarasan kurikulum Tahap 1."
    },
    {
      id: 6,
      name: "AG KU KEMAINDDRA BIN PG MOHD TAIB",
      ic: "711026-12-5153",
      role: "Guru Kelas 6 Iltizam • Penyelaras Pendaftaran Tingkatan 1",
      grade: "PPP DG10",
      type: "PPP",
      session: "Pagi",
      category: "Guru Kelas",
      tier: 3,
      photo: "assets/photos/ag-ku-kemainddra-bin-pg-mohd-taib.jpg",
      classAssigned: "6 Iltizam",
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Penyelaras permohonan dan pendaftaran murid Tahun 6 ke Tingkatan 1 / Sekolah Khusus serta pengurusan kelas 6 Iltizam."
    },
    {
      id: 7,
      name: "AHAD BIN JAAFAR",
      ic: "660717-12-5251",
      role: "Guru Akademik (Telah Bersara)",
      grade: "PPP DG7",
      type: "PPP",
      session: "Pagi",
      category: "Guru Akademik",
      tier: 4,
      status: "Bersara / Pencen",
      isActive: false,
      retiredYear: 2026,
      photo: "assets/photos/ahad-bin-jaafar.jpg",
      classAssigned: null,
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Rekod arkib perkhidmatan: Guru telah bersara wajib (pencen) pada Sesi 2026."
    },
    {
      id: 8,
      name: "AINATUN NADHIRAH BINTI DHARMAWI",
      ic: "971008-12-5118",
      role: "Penyelaras Jadual Waktu Petang • Guru Kelas 3 Jayyid",
      grade: "PPP DG9",
      type: "PPP",
      session: "Petang",
      category: "Penyelaras Kurikulum",
      tier: 3,
      photo: "assets/photos/ainatun-nadhirah-binti-dharmawi.jpg",
      classAssigned: "3 Jayyid",
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Penyelarasan jadual waktu guru dan kelas sidang petang, jadual guru ganti (MMI) dan pengurusan kelas 3 Jayyid."
    },
    {
      id: 9,
      name: "ANI BINTI PATOLA",
      ic: "840229-12-5496",
      role: "Setiausaha Kurikulum • Penyelaras SPBT (BOSS)",
      grade: "PPP DG10",
      type: "PPP",
      session: "Pagi",
      category: "Setiausaha & Penyelaras",
      tier: 3,
      photo: "assets/photos/ani-binti-patola.jpg",
      classAssigned: null,
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Setiausaha Jawatankuasa Induk Kurikulum sekolah, minit mesyuarat kurikulum serta pengurusan Bilik Operasi SPBT (BOSS)."
    },
    {
      id: 10,
      name: "ASMADI BIN LAJJAKASI",
      ic: "830602-12-6093",
      role: "Pegawai Aset / Maklumat • Peperiksaan Dalaman • Pengakap",
      grade: "PPP DG10",
      type: "PPP",
      session: "Pagi",
      category: "Penyelaras",
      tier: 3,
      photo: "assets/photos/asmadi-bin-lajjakasi.jpg",
      classAssigned: null,
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Pegawai Aset Sekolah (SPA), pengurusan maklumat sekolah, Penyelaras Peperiksaan Dalaman serta Pemimpin Pasukan Pengakap."
    },
    {
      id: 11,
      name: "BAJAM BINTI LADUNG",
      ic: "820324-12-5314",
      role: "Setiausaha Pentadbiran • Penyelaras PBD • Carta Sekolah • Guru Kelas 6 Mumtaz",
      grade: "PPP DG12",
      type: "PPP",
      session: "Pagi",
      category: "Setiausaha Pentadbiran",
      tier: 3,
      photo: "assets/photos/bajam-binti-ladung.jpg",
      classAssigned: "6 Mumtaz",
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Setiausaha Pengurusan Pentadbiran, Penyelaras Pentaksiran Bilik Darjah (PBD), pengemaskinian Carta Organisasi Sekolah dan Guru Kelas 6 Mumtaz."
    },
    {
      id: 12,
      name: "DARMAWATI BTE LOKKONG",
      ic: "850603-12-6042",
      role: "Penolong Setiausaha HEM • Penyelaras Program Transisi Tahun 1",
      grade: "PPP DG10",
      type: "PPP",
      session: "Petang",
      category: "Penyelaras HEM",
      tier: 3,
      photo: "assets/photos/darmawati-bte-lokkong.jpg",
      classAssigned: null,
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Membantu Setiausaha HEM dalam dokumentasi murid dan menyelaras pelaksanaan Program Transisi Murid Tahun 1."
    },
    {
      id: 13,
      name: "EVALORENNA BINTI LAMINSIN",
      ic: "900201-12-5306",
      role: "Setiausaha Kokurikulum • Penyelaras LDP/Kompetensi • KWAMP / eKasih",
      grade: "PPP DG10",
      type: "PPP",
      session: "Pagi",
      category: "Setiausaha & Penyelaras",
      tier: 3,
      photo: "assets/photos/evalorenna-binti-laminsin.jpg",
      classAssigned: null,
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Setiausaha Unit Kokurikulum, Penyelaras Latihan Dalam Perkhidmatan (LDP/SPLKPM) dan Penyelaras Bantuan KWAMP/eKasih."
    },
    {
      id: 14,
      name: "FARIDAH BINTI SUNU",
      ic: "741020-12-6072",
      role: "Ketua Panitia Pend Moral • Penyelaras Susu Sekolah • Guru Kelas 1 Khoir",
      grade: "PPP DG10",
      type: "PPP",
      session: "Petang",
      category: "Ketua Panitia",
      tier: 3,
      photo: "assets/photos/faridah-binti-sunu.jpg",
      classAssigned: "1 Khoir",
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Mengetuai Panitia Pendidikan Moral, menyelia agihan Program Susu Sekolah dan Guru Kelas 1 Khoir."
    },
    {
      id: 15,
      name: "HALIM BIN BIDI",
      ic: "690322-08-6291",
      role: "Penyelaras Kebajikan Murid & Asnaf • Ketua Rumah Ungu",
      grade: "PPP DG12",
      type: "PPP",
      session: "Pagi",
      category: "Penyelaras",
      tier: 3,
      photo: "assets/photos/halim-bin-bidi.jpg",
      classAssigned: null,
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Mengurus bantuan kebajikan anak yatim & asnaf, Ketua Guru Penasihat Rumah Sukan Ungu."
    },
    {
      id: 16,
      name: "HAMSIAH BINTI HAMID",
      ic: "831119-12-5538",
      role: "Ketua Panitia Bahasa Inggeris • Guru Kelas 5 Mumtaz • BSMM",
      grade: "PPP DG10",
      type: "PPP",
      session: "Pagi",
      category: "Ketua Panitia",
      tier: 3,
      photo: "assets/photos/hamsiah-binti-hamid.jpg",
      classAssigned: "5 Mumtaz",
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Peneraju kurikulum Bahasa Inggeris (CEFR), Guru Kelas 5 Mumtaz dan Pemimpin Bulan Sabit Merah Malaysia (BSMM)."
    },
    {
      id: 17,
      name: "HASNAN BIN MAT ZIN",
      ic: "750209-03-5259",
      role: "Ketua Panitia Pendidikan Islam • Penyelaras Tahap 2",
      grade: "PPP DG12",
      type: "PPP",
      session: "Pagi",
      category: "Ketua Panitia & Penyelaras",
      tier: 3,
      photo: "assets/photos/hasnan-bin-mat-zin.jpg",
      classAssigned: null,
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Mengetuai Panitia Pendidikan Islam, penyelaras program dakwah/surau sekolah dan Penyelaras Akademik Tahap 2."
    },
    {
      id: 18,
      name: "JAIBY BIN JULIAN",
      ic: "660707-12-5901",
      role: "Guru Akademik (Telah Bersara)",
      grade: "PPP DG7",
      type: "PPP",
      session: "Pagi",
      category: "Guru Akademik",
      tier: 4,
      status: "Bersara / Pencen",
      isActive: false,
      retiredYear: 2026,
      photo: "assets/photos/jaiby-bin-julian.jpg",
      classAssigned: null,
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Rekod arkib perkhidmatan: Guru telah bersara wajib (pencen) pada Sesi 2026."
    },
    {
      id: 19,
      name: "JAINAH BINTI SULAIMAN",
      ic: "720515-12-5554",
      role: "Penyelaras HIP • Guru Kelas 3 Iltizam • English Club",
      grade: "PPP DG10",
      type: "PPP",
      session: "Petang",
      category: "Penyelaras Kurikulum",
      tier: 3,
      photo: "assets/photos/jainah-binti-sulaiman.jpg",
      classAssigned: "3 Iltizam",
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Penyelaras Highly Immersive Programme (HIP KPM), Guru Kelas 3 Iltizam dan pembimbing kelab bahasa."
    },
    {
      id: 20,
      name: "JUNAID BIN NURDIN",
      ic: "750625-12-5755",
      role: "Ketua Panitia Sains • Penyelaras Bantuan Yayasan Sabah • TKRS",
      grade: "PPP DG12",
      type: "PPP",
      session: "Pagi",
      category: "Ketua Panitia",
      tier: 3,
      photo: "assets/photos/junaid-bin-nurdin.jpg",
      classAssigned: null,
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Peneraju kurikulum Sains, pengurusan Makmal Sains, Penyelaras Bantuan Yayasan Sabah dan Pemimpin TKRS."
    },
    {
      id: 21,
      name: "MARIANA BINTI KASSIM",
      ic: "730807-12-5766",
      role: "Penyelaras Prasekolah • Guru Kelas Permata Hati",
      grade: "PPP DG12",
      type: "PPP",
      session: "Pagi",
      category: "Penyelaras",
      tier: 3,
      photo: "assets/photos/mariana-binti-kassim.jpg",
      classAssigned: "Permata Hati",
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Penyelaras Kurikulum Standard Prasekolah Kebangsaan (KSPK) dan Guru Kelas Prasekolah Permata Hati."
    },
    {
      id: 22,
      name: "MARINI BINTI LADI",
      ic: "810914-12-5278",
      role: "Penyelaras PLC • AJK Kantin • Guru Kelas 2 Jayyid",
      grade: "PPP DG10",
      type: "PPP",
      session: "Petang",
      category: "Penyelaras Kurikulum",
      tier: 3,
      photo: "assets/photos/marini-binti-ladi.jpg",
      classAssigned: "2 Jayyid",
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Penyelaras Professional Learning Community (PLC), AJK Kantin Sekolah dan Guru Kelas 2 Jayyid."
    },
    {
      id: 23,
      name: "MASTURAH BINTI TUDA",
      ic: "750803-12-5900",
      role: "Ketua Panitia Matematik • Guru Kelas 4 Khoir • Ketua Rumah Merah",
      grade: "PPP DG12",
      type: "PPP",
      session: "Pagi",
      category: "Ketua Panitia",
      tier: 3,
      photo: "assets/photos/masturah-binti-tuda.jpg",
      classAssigned: "4 Khoir",
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Mengetuai Panitia Matematik, Guru Kelas 4 Khoir serta Ketua Guru Penasihat Rumah Merah (Juara KOT 26)."
    },
    {
      id: 24,
      name: "MOHAMMAD FIKREY BIN ABDUL GAPAR",
      ic: "910528-12-5411",
      role: "Penyelaras Media / Digital • Penyelaras ICT • Guru Kelas 6 Jayyid",
      grade: "PPP DG10",
      type: "PPP",
      session: "Pagi",
      category: "Pentadbir Sistem & Penyelaras",
      tier: 3,
      photo: "assets/photos/mohammad-fikrey-bin-abdul-gapar.jpg",
      classAssigned: "6 Jayyid",
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Pembangun Utama Papan Induk Utama SK Ranggu, Pentadbir Portal Digital, Guru Kelas 6 Jayyid dan Jurulatih Pasukan Inovasi Kebangsaan (TASCAR 3.0)."
    },
    {
      id: 25,
      name: "MOHAMMAD IKHWAN BIN ABDURAIS",
      ic: "940502-12-5701",
      role: "Penyelaras Pembangunan • Penolong SU Sukan • Guru Kelas 2 Iltizam",
      grade: "PPP DG9",
      type: "PPP",
      session: "Petang",
      category: "Penyelaras",
      tier: 3,
      photo: "assets/photos/mohammad-ikhwan-bin-abdurais.jpg",
      classAssigned: "2 Iltizam",
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Penyelaras Pembangunan & Penyelenggaraan Fizikal, Penolong Setiausaha Sukan dan Guru Kelas 2 Iltizam."
    },
    {
      id: 26,
      name: "MOHD ALFAIZAL BIN DAUD",
      ic: "820403-12-6243",
      role: "Penyelaras Data Sekolah / IDME • APDM • Guru Kelas 6 Khoir",
      grade: "PPP DG12",
      type: "PPP",
      session: "Pagi",
      category: "Penyelaras Data",
      tier: 3,
      photo: "assets/photos/mohd-alfaizal-bin-daud.jpg",
      classAssigned: "6 Khoir",
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Pegawai Data Sekolah (IDME / APDM / MOEIS KPM), statistik murid dan Guru Kelas 6 Khoir."
    },
    {
      id: 27,
      name: "MOHD MUEMIN BIN MOHD AMIN JAPAR",
      ic: "870131-49-5381",
      role: "Guru Akademik / Matapelajaran",
      grade: "PPP DG9",
      type: "PPP",
      session: "Pagi",
      category: "Guru Akademik",
      tier: 4,
      photo: "assets/photos/mohd-muemin-bin-mohd-amin-japar.jpg",
      classAssigned: null,
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Melaksanakan PdP berkesan dan bimbingan sahsiah murid."
    },
    {
      id: 28,
      name: "MUHAMADIAN BIN SUAIBU",
      ic: "790313-12-5859",
      role: "Penyelaras Pemulihan Khas • Ketua Rumah Biru • Sepak Takraw",
      grade: "PPP DG10",
      type: "PPP",
      session: "Pagi",
      category: "Penyelaras",
      tier: 3,
      photo: "assets/photos/muhamadian-bin-suaibu.jpg",
      classAssigned: null,
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Penyelaras Kelas Pemulihan Khas (Literasi & Numerasi), Ketua Guru Penasihat Rumah Biru dan Jurulatih Sepak Takraw."
    },
    {
      id: 29,
      name: "NECHI BINTI SERUNAI",
      ic: "681103-12-5540",
      role: "AJK Rancangan Makanan Tambahan (RMT) • Guru Akademik",
      grade: "PPP DG12",
      type: "PPP",
      session: "Pagi",
      category: "Guru Akademik & AJK HEM",
      tier: 3,
      photo: "assets/photos/nechi-binti-serunai.jpg",
      classAssigned: null,
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Membantu pengurusan agihan dan penyeliaan Rancangan Makanan Tambahan (RMT) murid."
    },
    {
      id: 30,
      name: "NOOR SYAFIQAH NADHIRAH BINTI JAMALUDDIN",
      ic: "980221-03-6426",
      role: "Guru Kelas 1 Iltizam",
      grade: "PPP DG9",
      type: "PPP",
      session: "Petang",
      category: "Guru Kelas",
      tier: 4,
      photo: "assets/photos/noor-syafiqah-nadhirah-binti-jamaluddin.jpg",
      classAssigned: "1 Iltizam",
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Pengurusan kebajikan, kehadiran dan kemajuan akademik murid kelas 1 Iltizam."
    },
    {
      id: 31,
      name: "NORIMAH BINTI JOYO REJO",
      ic: "740526-12-5080",
      role: "Penyelaras 3K (Kebersihan, Kesihatan, Keselamatan)",
      grade: "PPP DG10",
      type: "PPP",
      session: "Pagi",
      category: "Penyelaras HEM",
      tier: 3,
      photo: "assets/photos/norimah-binti-joyo-rejo.jpg",
      classAssigned: null,
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Penyelaras Program 3K, penarafan kebersihan tandas, suntikan imunisasi dan rekod kesihatan murid."
    },
    {
      id: 32,
      name: "NORLINA BINTI BAGWAS",
      ic: "730926-12-5494",
      role: "Setiausaha HEM • Guru Kelas 1 Jayyid • Ketua Rumah Kuning",
      grade: "PPP DG10",
      type: "PPP",
      session: "Petang",
      category: "Setiausaha HEM",
      tier: 3,
      photo: "assets/photos/norlina-binti-bagwas.jpg",
      classAssigned: "1 Jayyid",
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Setiausaha Induk Hal Ehwal Murid (HEM), Guru Kelas 1 Jayyid dan Ketua Guru Penasihat Rumah Kuning."
    },
    {
      id: 33,
      name: "NOZE BINTI TUKIJAN",
      ic: "761202-12-5810",
      role: "Penyelaras Disiplin & Pengawas • Penyelaras SK@S • Guru Kelas 4 Jayyid",
      grade: "PPP DG9",
      type: "PPP",
      session: "Pagi",
      category: "Penyelaras",
      tier: 3,
      photo: "assets/photos/noze-binti-tukijan.jpg",
      classAssigned: "4 Jayyid",
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Ketua Guru Disiplin, Penyelaras Lembaga Pengawas Sekolah, Penyelaras Standard Kualiti SK@S dan Guru Kelas 4 Jayyid."
    },
    {
      id: 34,
      name: "NUR FAEZAH BINTI BANTALANI",
      ic: "931220-12-6058",
      role: "Guru Kelas 3 Mumtaz",
      grade: "PPP DG10",
      type: "PPP",
      session: "Petang",
      category: "Guru Kelas",
      tier: 4,
      photo: "assets/photos/nur-faezah-binti-bantalani.jpg",
      classAssigned: "3 Mumtaz",
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Pengurusan PdP, e-Kehadiran dan kebajikan murid kelas 3 Mumtaz."
    },
    {
      id: 35,
      name: "NURUL ANISA BINTI SAPARUDIN",
      ic: "920918-12-5918",
      role: "Penyelaras RMT • Penyelaras Jadual Waktu Pagi • Guru Kelas 4 Mumtaz",
      grade: "PPP DG10",
      type: "PPP",
      session: "Pagi",
      category: "Penyelaras",
      tier: 3,
      photo: "assets/photos/nurul-anisa-binti-saparudin.jpg",
      classAssigned: "4 Mumtaz",
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Penyelaras Rancangan Makanan Tambahan (RMT), Penyelaras Jadual Waktu Sidang Pagi dan Guru Kelas 4 Mumtaz."
    },
    {
      id: 36,
      name: "RASMAWATI BINTI TAUSE",
      ic: "811217-12-5250",
      role: "Penyelaras Kurikulum Tahap 1 • Penyelaras BMI • Guru Kelas 1 Mumtaz",
      grade: "PPP DG10",
      type: "PPP",
      session: "Petang",
      category: "Penyelaras Kurikulum",
      tier: 3,
      photo: "assets/photos/rasmawati-binti-tause.jpg",
      classAssigned: "1 Mumtaz",
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Penyelaras Akademik Tahap 1 (Tahun 1, 2, 3), Penyelaras Program BMI 5-9T dan Guru Kelas 1 Mumtaz."
    },
    {
      id: 37,
      name: "RINI BINTI DAUD",
      ic: "740707-12-5282",
      role: "Ketua Panitia Sejarah • Penyelaras Kantin • Guru Kelas 5 Jayyid",
      grade: "PPP DG12",
      type: "PPP",
      session: "Pagi",
      category: "Ketua Panitia",
      tier: 3,
      photo: "assets/photos/rini-binti-daud.jpg",
      classAssigned: "5 Jayyid",
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Mengetuai Panitia Sejarah, Penyelaras Kebersihan & Mutu Kantin Sekolah dan Guru Kelas 5 Jayyid."
    },
    {
      id: 38,
      name: "ROBIATUL AIDAWYAH",
      ic: "981115-02-5736",
      role: "Guru Akademik / Matapelajaran",
      grade: "PPP DG9",
      type: "PPP",
      session: "Petang",
      category: "Guru Akademik",
      tier: 4,
      photo: "assets/photos/robiatul-aidawyah.jpg",
      classAssigned: null,
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Melaksanakan PdP berkesan dan bimbingan aktiviti murid."
    },
    {
      id: 39,
      name: "RONI BIN BACHO",
      ic: "840509-12-6215",
      role: "Ketua Panitia RBT • Penyelaras ICT & DELIMa • Kelab STEM",
      grade: "PPP DG12",
      type: "PPP",
      session: "Pagi",
      category: "Ketua Panitia & Penyelaras",
      tier: 3,
      photo: "assets/photos/roni-bin-bacho.jpg",
      classAssigned: null,
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Mengetuai Panitia RBT, Penyelaras ICT Pentadbiran, Guru Penyelaras DELIMa KPM dan Penasihat Kelab STEM."
    },
    {
      id: 40,
      name: "ROSIDIAN BIN IDRIS",
      ic: "670415-12-5343",
      role: "Setiausaha Sukan & Pegawai Teknikal • Penyelaras SEGAK & PAJSK • Guru Kelas 4 Iltizam",
      grade: "PPP DG7",
      type: "PPP",
      session: "Pagi",
      category: "Setiausaha Sukan",
      tier: 3,
      photo: "assets/photos/rosidian-bin-idris.jpg",
      classAssigned: "4 Iltizam",
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Setiausaha Sukan Sekolah, Pegawai Teknikal Kejohanan Merentas Desa & Olahraga, Penyelaras SEGAK & PAJSK serta Guru Kelas 4 Iltizam."
    },
    {
      id: 41,
      name: "ROSMINAH BINTI SAPAR",
      ic: "701026-12-5760",
      role: "Guru Perpustakaan & Media (GPM) • Penyelaras PSS",
      grade: "PPP DG10",
      type: "PPP",
      session: "Pagi",
      category: "Penyelaras PSS",
      tier: 3,
      photo: "assets/photos/rosminah-binti-sapar.jpg",
      classAssigned: null,
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Pengurusan Pusat Sumber Sekolah (PSS), Program NILAM KPM, bahan literasi membaca dan bilik media."
    },
    {
      id: 42,
      name: "RUHAYA BINTI AHMAD",
      ic: "690623-12-5434",
      role: "Guru Kelas 3 Khoir",
      grade: "PPP DG10",
      type: "PPP",
      session: "Petang",
      category: "Guru Kelas",
      tier: 4,
      photo: "assets/photos/ruhaya-binti-ahmad.jpg",
      classAssigned: "3 Khoir",
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Pengurusan harian kelas 3 Khoir, PdP dan hal ehwal murid."
    },
    {
      id: 43,
      name: "S.LILI BINTI LADI",
      ic: "700605-12-5592",
      role: "Penyelaras Intervensi Kurikulum • AJK PPDa • Guru Kelas 2 Khoir",
      grade: "PPP DG7",
      type: "PPP",
      session: "Petang",
      category: "Penyelaras",
      tier: 3,
      photo: "assets/photos/slili-binti-ladi.jpg",
      classAssigned: "2 Khoir",
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Penyelaras Intervensi Kurikulum (Bantu Membaca & Mengira), AJK PPDa dan Guru Kelas 2 Khoir."
    },
    {
      id: 44,
      name: "SABRIAH @ HABIBAH BINTI ABDUL SABAR",
      ic: "691228-12-5594",
      role: "Ketua Panitia Bahasa Melayu • Penyelaras BAP",
      grade: "PPP DG12",
      type: "PPP",
      session: "Pagi",
      category: "Ketua Panitia & Penyelaras",
      tier: 3,
      photo: "assets/photos/sabriah--habibah-binti-abdul-sabar.jpg",
      classAssigned: null,
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Peneraju kurikulum Bahasa Melayu sekolah, program celik bahasa dan Penyelaras Bantuan Awal Persekolahan (BAP)."
    },
    {
      id: 45,
      name: "SALSABILA BINTI SHAHRUDDIN",
      ic: "981025-02-6452",
      role: "Guru Akademik / Matapelajaran",
      grade: "PPP DG9",
      type: "PPP",
      session: "Petang",
      category: "Guru Akademik",
      tier: 4,
      photo: "assets/photos/salsabila-binti-shahruddin.jpg",
      classAssigned: null,
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Melaksanakan PdP berkesan dan bimbingan murid."
    },
    {
      id: 46,
      name: "SITI JAWARA BINTI LUKMAN",
      ic: "730126-12-5584",
      role: "Ketua Panitia PSV • Penyelaras PPDa • Guru Kelas 2 Mumtaz",
      grade: "PPP DG10",
      type: "PPP",
      session: "Petang",
      category: "Ketua Panitia",
      tier: 3,
      photo: "assets/photos/siti-jawara-binti-lukman.jpg",
      classAssigned: "2 Mumtaz",
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Ketua Panitia Pendidikan Seni Visual (PSV), Penyelaras Pendidikan Pencegahan Dadah (PPDa) dan Guru Kelas 2 Mumtaz."
    },
    {
      id: 47,
      name: "SITI NAURIN FADZILAH BINTI JALAL",
      ic: "790718-01-5164",
      role: "Guru Bimbingan & Kaunseling (UBK) • Audit Dalaman",
      grade: "PPP DG12",
      type: "PPP",
      session: "Pagi",
      category: "Bimbingan & Kaunseling",
      tier: 3,
      photo: "assets/photos/siti-naurin-fadzilah-binti-jalal.jpg",
      classAssigned: null,
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Guru Bimbingan & Kaunseling Sepenuh Masa, program Minda Sihat, Guru Penyayang dan Pegawai Audit Dalaman Sekolah."
    },
    {
      id: 48,
      name: "SITI RABIA BIN IBRAHIM",
      ic: "710908-12-5812",
      role: "Guru Akademik / Matapelajaran",
      grade: "PPP DG10",
      type: "PPP",
      session: "Pagi",
      category: "Guru Akademik",
      tier: 4,
      photo: "assets/photos/siti-rabia-bin-ibrahim.jpg",
      classAssigned: null,
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Melaksanakan PdP berkesan dan pembangunan insan murid."
    },
    {
      id: 49,
      name: "SUNARTI BINTI TAPPA",
      ic: "841008-12-5470",
      role: "Ketua Panitia Bahasa Arab",
      grade: "PPP DG10",
      type: "PPP",
      session: "Petang",
      category: "Ketua Panitia",
      tier: 3,
      photo: "assets/photos/sunarti-binti-tappa.jpg",
      classAssigned: null,
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Peneraju Panitia Bahasa Arab, modul penguasaan kosa kata bahasa syurga dan j-QAF."
    },
    {
      id: 50,
      name: "TANJANG BIN TURE",
      ic: "720403-12-5699",
      role: "Ketua Panitia Pendidikan Muzik • Guru Kelas 5 Khoir",
      grade: "PPP DG10",
      type: "PPP",
      session: "Pagi",
      category: "Ketua Panitia",
      tier: 3,
      photo: "assets/photos/tanjang-bin-ture.jpg",
      classAssigned: "5 Khoir",
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Mengetuai Panitia Pendidikan Muzik, pembimbing lagu patriotik/koir sekolah dan Guru Kelas 5 Khoir."
    },
    {
      id: 51,
      name: "WAFA FARHANA BINTI ABD KADIR",
      ic: "931108-12-5530",
      role: "Ketua Panitia PJPK • Penyelaras Bola Jaring",
      grade: "PPP DG10",
      type: "PPP",
      session: "Pagi",
      category: "Ketua Panitia",
      tier: 3,
      photo: "assets/photos/wafa-farhana-binti-abd-kadir.jpg",
      classAssigned: null,
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Peneraju Panitia Pendidikan Jasmani & Kesihatan (PJPK), Jurulatih Bola Jaring dan kecergasan fizikal murid."
    },
    {
      id: 52,
      name: "WAN MUHAMAD YUSUF BIN WAN ABDUL AZIZ",
      ic: "870519-08-6373",
      role: "Penyelaras Pembangunan • Bola Sepak • Guru Kelas 5 Iltizam",
      grade: "PPP DG10",
      type: "PPP",
      session: "Pagi",
      category: "Penyelaras",
      tier: 3,
      photo: "assets/photos/wan-muhamad-yusuf.jpg",
      classAssigned: "5 Iltizam",
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Penyelaras Jawatankuasa Pembangunan Fizikal Sekolah, Jurulatih Pasukan Bola Sepak dan Guru Kelas 5 Iltizam."
    },
    {
      id: 53,
      name: "YUSNI BINTI WAHJUDIN",
      ic: "800624-12-5676",
      role: "Guru Prasekolah Mutiara Hati",
      grade: "PPP DG10",
      type: "PPP",
      session: "Petang",
      category: "Guru Prasekolah",
      tier: 4,
      photo: "assets/photos/yusni-binti-wahjudin.jpg",
      classAssigned: "Mutiara Hati",
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Pengurusan PdP Prasekolah Mutiara Hati dan perkembangan asas murid prasekolah."
    },
    {
      id: 54,
      name: "ZAMRIE BIN OMAR ALI",
      ic: "780807-12-5809",
      role: "Penyelaras Keselamatan Sekolah & Disiplin Petang",
      grade: "PPP DG6",
      type: "PPP",
      session: "Pagi",
      category: "Penyelaras",
      tier: 3,
      photo: "assets/photos/zamrie-bin-omar-ali.jpg",
      classAssigned: null,
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Penyelaras Keselamatan Sekolah, kawalan lalu lintas pintu pagar dan disiplin murid sidang petang."
    },
    // ANGGOTA KUMPULAN PELAKSANA (AKP)
    {
      id: 55,
      name: "HANISAH BINTI MANSOR",
      ic: "750614-12-5450",
      role: "Pembantu Tadbir (N22) • Sumber Manusia / HRMIS • e-Pangkat / e-Prestasi",
      grade: "PT N2",
      type: "AKP",
      session: "Pagi",
      category: "Anggota Kumpulan Pelaksana",
      tier: 3,
      photo: "assets/photos/hanisah-binti-mansor.jpg",
      classAssigned: null,
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Pengurusan perkhidmatan staf, rekod perjawatan HRMIS, e-Pangkat, e-Prestasi dan fail peribadi pegawai."
    },
    {
      id: 56,
      name: "NURAIDA BINTI KAIMUDIN",
      ic: "890626-12-5508",
      role: "Pembantu Tadbir (N19) • Pegawai Kewangan Sekolah",
      grade: "PT N1",
      type: "AKP",
      session: "Pagi",
      category: "Anggota Kumpulan Pelaksana",
      tier: 3,
      photo: "assets/photos/nuraida-binti-kaimudin.jpg",
      classAssigned: null,
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Pengurusan Buku Tunai Kerajaan, bayaran baucar, elaun guru, pesanan tempatan dan penyata kewangan sekolah (eSPKWS)."
    },
    {
      id: 57,
      name: "MULYANTI BINTI MIKIL @ MOHAMED ISHAK",
      ic: "840815-12-5704",
      role: "Pembantu Khidmat Am (PKA H11)",
      grade: "PKA H1",
      type: "AKP",
      session: "Pagi",
      category: "Anggota Kumpulan Pelaksana",
      tier: 4,
      photo: "assets/photos/mulyanti-binti-mikil.jpg",
      classAssigned: null,
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Urusan surat-menyurat pejabat, fail edaran, fotokopi kertas ujian dan khidmat sokongan pentadbiran am."
    },
    {
      id: 58,
      name: "RAPIDAH BINTI KARIM",
      ic: "831002-12-5788",
      role: "Pembantu Pengurusan Murid (PPM N19) • Prasekolah",
      grade: "PPM N2",
      type: "AKP",
      session: "Pagi",
      category: "Anggota Kumpulan Pelaksana",
      tier: 4,
      photo: "assets/photos/rapidah-binti-karim.jpg",
      classAssigned: null,
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Penyediaan makanan berkhasiat murid prasekolah, kebersihan ruang pembelajaran dan kebajikan kanak-kanak prasekolah."
    },
    {
      id: 59,
      name: "YENNY BINTI SANAUDI",
      ic: "801027-12-6026",
      role: "Pembantu Pengurusan Murid (PPM N19) • Prasekolah",
      grade: "PPM N2",
      type: "AKP",
      session: "Pagi",
      category: "Anggota Kumpulan Pelaksana",
      tier: 4,
      photo: "assets/photos/yenny-binti-sanaudi.jpg",
      classAssigned: null,
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Pengurusan hal ehwal murid prasekolah, keselamatan ruang kelas dan penyediaan bahan bantu mengajar (BBM)."
    },
    {
      id: 60,
      name: "FARIDAH BINTI ACHO",
      ic: "950807-12-5832",
      role: "Pembantu Pengurusan Murid (PPM N19 - COS) • Prasekolah",
      grade: "PPM N1",
      type: "AKP",
      session: "Pagi",
      category: "Anggota Kumpulan Pelaksana",
      tier: 4,
      photo: "assets/photos/faridah-binti-acho.jpg",
      classAssigned: null,
      email: "xba3037@moe.edu.my",
      phone: "089-925493",
      duties: "Khidmat sokongan pengurusan murid prasekolah dan kebersihan premis prasekolah."
    }
  ],

  // JAWATANKUASA KHAS
  committees: [
    {
      id: "com-1",
      name: "Jawatankuasa Pengurusan Pentadbiran & Kewangan",
      chairperson: "YUNUS BIN PATARAI (Guru Besar)",
      secretary: "BAJAM BINTI LADUNG (Setiausaha Pentadbiran)",
      membersCount: 12,
      category: "Pentadbiran",
      description: "Membuat dasar, kawalan peruntukan kewangan dan pemantauan perkhidmatan staf SK Ranggu."
    },
    {
      id: "com-2",
      name: "Jawatankuasa Induk Kurikulum Sekolah (JKS)",
      chairperson: "RAHMATIAH BINTI MOHD JUDA (PK Pentadbiran)",
      secretary: "ANI BINTI PATOLA (Setiausaha Kurikulum)",
      membersCount: 16,
      category: "Kurikulum",
      description: "Merangka program akademik, penyeliaan PdP, pentaksiran PBD dan pemerkasaan 12 panitia matapelajaran."
    },
    {
      id: "com-3",
      name: "Jawatankuasa Hal Ehwal Murid (HEM)",
      chairperson: "KOMALA BINTI JOSEPH (PK HEM)",
      secretary: "NORLINA BINTI BAGWAS (Setiausaha HEM)",
      membersCount: 18,
      category: "HEM",
      description: "Mengurus disiplin, kebajikan, SPBT, RMT, program 3K dan pembangunan sahsiah murid."
    },
    {
      id: "com-4",
      name: "Jawatankuasa Kokurikulum & Sukan",
      chairperson: "WARNAH BINTI SIRA (PK Kokurikulum)",
      secretary: "ROSIDIAN BIN IDRIS (Setiausaha Sukan)",
      membersCount: 15,
      category: "Kokurikulum",
      description: "Menyelaras aktiviti 5 Unit Beruniform, 7 Kelab/Persatuan, 5 Kelab Sukan (1M1S) dan 4 Rumah Sukan."
    },
    {
      id: "com-5",
      name: "Jawatankuasa ICT, Media & Transformasi Digital",
      chairperson: "RONI BIN BACHO (Penyelaras ICT)",
      secretary: "MOHAMMAD FIKREY BIN ABDUL GAPAR (Penyelaras Media / Digital)",
      membersCount: 8,
      category: "Teknologi",
      description: "Memacu transformasi pendigitalan sekolah, inovasi AI, DELIMa, Apple Education dan sistem kehadiran."
    }
  ],

  // TAKWIM AKTIVITI SESI 2026 (TERSELARAS DARI TELARASMI SKRG)
  takwim: [
    {
      id: "tak-1",
      title: "Kejohanan Merentas Desa SK Ranggu 2026",
      startDate: "2026-10-17",
      endDate: "2026-10-17",
      date: "2026-10-17",
      time: "07:00 Pagi",
      category: "Kokurikulum • Sukan",
      location: "Padang & Laluan Sekitar SK Ranggu",
      venue: "Padang SK Ranggu",
      organizer: "Unit Kokurikulum (Puan Warnah binti Sira)",
      inCharge: "Pegawai Teknikal Merentas Desa",
      status: "Akan Datang"
    },
    {
      id: "tak-2",
      title: "Kejohanan Olahraga Tahunan SK Ranggu (KOT 26)",
      startDate: "2026-10-24",
      endDate: "2026-10-25",
      date: "2026-10-24",
      time: "07:30 Pagi",
      category: "Kokurikulum • Sukan",
      location: "Padang SK Ranggu",
      venue: "Padang SK Ranggu",
      organizer: "Unit Kokurikulum & Sukan",
      inCharge: "Rosidian bin Idris (S/U Sukan)",
      status: "Akan Datang"
    },
    {
      id: "tak-3",
      title: "Taklimat Penilaian Prestasi Kerja Guru & AKP 2026",
      startDate: "2026-10-28",
      endDate: "2026-10-28",
      date: "2026-10-28",
      time: "01:30 Petang",
      category: "Pentadbiran",
      location: "Bilik Gerakan SK Ranggu",
      venue: "Bilik Gerakan SK Ranggu",
      organizer: "Pengurusan Pentadbiran",
      inCharge: "Yunus bin Patarai (Guru Besar)",
      status: "Akan Datang"
    },
    {
      id: "tak-4",
      title: "Ujian Akhir Sesi Akademik (UASA) 2026",
      startDate: "2026-11-10",
      endDate: "2026-11-14",
      date: "2026-11-10",
      time: "Sepanjang Hari",
      category: "Kurikulum",
      location: "Bilik Darjah SK Ranggu",
      venue: "Bilik Darjah SK Ranggu",
      organizer: "Unit Peperiksaan & PBD",
      inCharge: "Penyelaras Peperiksaan",
      status: "Akan Datang"
    },
    {
      id: "tak-5",
      title: "Hari Bicara Akademik & Penyerahan Pelaporan PBD",
      startDate: "2026-11-28",
      endDate: "2026-11-28",
      date: "2026-11-28",
      time: "08:00 Pagi",
      category: "Kurikulum",
      location: "Dewan Terbuka SK Ranggu",
      venue: "Dewan Terbuka SK Ranggu",
      organizer: "Jawatankuasa PBD",
      inCharge: "Guru Kelas & Panitia",
      status: "Akan Datang"
    },
    {
      id: "tak-6",
      title: "Majlis Apresiasi Kecemerlangan Murid 2026",
      startDate: "2026-12-15",
      endDate: "2026-12-15",
      date: "2026-12-15",
      time: "08:00 Pagi",
      category: "Hal Ehwal Murid & Kurikulum",
      location: "Dewan Masyarakat Tawau",
      venue: "Dewan Masyarakat Tawau",
      organizer: "Jawatankuasa HEM & Kurikulum",
      inCharge: "PK HEM & PK Pentadbiran",
      status: "Akan Datang"
    }
  ],

  // GURU BERTUGAS MINGGUAN
  dutyTeachers: [
    {
      week: 28,
      dateRange: "06 Okt 2026 - 10 Okt 2026",
      theme: "Kebersihan Diri & Persekitaran Sekolah",
      teachers: [
        { name: "RONI BIN BACHO", role: "Ketua Guru Bertugas (Pagi)", phone: "019-8765432", photo: "assets/photos/roni-bin-bacho.jpg" },
        { name: "RASMAWATI BINTI TAUSE", role: "Ketua Guru Bertugas (Petang)", phone: "013-8901234", photo: "assets/photos/rasmawati-binti-tause.jpg" },
        { name: "MOHAMMAD FIKREY BIN ABDUL GAPAR", role: "Guru Bertugas Laporan / Disiplin", phone: "014-5678901", photo: "assets/photos/mohammad-fikrey-bin-abdul-gapar.jpg" },
        { name: "NORLINA BINTI BAGWAS", role: "Guru Bertugas Pintu Pagar & Kantin", phone: "011-2345678", photo: "assets/photos/norlina-binti-bagwas.jpg" }
      ]
    }
  ],

  // DATA PBD SK RANGGU 2026
  pbdSummary: {
    overallMastery: 96.6,
    totalAssessed: 816,
    tpDistribution: [
      { tp: "TP 1", label: "Tahu", count: 8, percentage: 1.0, color: "#f87171" },
      { tp: "TP 2", label: "Tahu & Faham", count: 20, percentage: 2.4, color: "#fb923c" },
      { tp: "TP 3", label: "Boleh Buat", count: 180, percentage: 22.1, color: "#facc15" },
      { tp: "TP 4", label: "Boleh Buat Beradab", count: 298, percentage: 36.5, color: "#60a5fa" },
      { tp: "TP 5", label: "Terpuji", count: 210, percentage: 25.7, color: "#34d399" },
      { tp: "TP 6", label: "Cemerlang", count: 100, percentage: 12.3, color: "#a78bfa" }
    ],
    subjectBreakdown: [
      { subject: "Bahasa Melayu", percentage: 98.2, tpAbove3: 98.2 },
      { subject: "Bahasa Inggeris", percentage: 94.5, tpAbove3: 94.5 },
      { subject: "Matematik", percentage: 95.8, tpAbove3: 95.8 },
      { subject: "Sains", percentage: 97.4, tpAbove3: 97.4 },
      { subject: "Pendidikan Islam", percentage: 99.1, tpAbove3: 99.1 },
      { subject: "Pendidikan Moral", percentage: 96.0, tpAbove3: 96.0 },
      { subject: "Sejarah", percentage: 96.9, tpAbove3: 96.9 },
      { subject: "Bahasa Arab", percentage: 95.0, tpAbove3: 95.0 },
      { subject: "RBT", percentage: 98.0, tpAbove3: 98.0 },
      { subject: "PJPK", percentage: 99.5, tpAbove3: 99.5 },
      { subject: "PSV", percentage: 98.7, tpAbove3: 98.7 },
      { subject: "Muzik", percentage: 97.2, tpAbove3: 97.2 }
    ]
  },

  // PORTAL PAUTAN LUAR
  externalPortals: [
    {
      id: "portal-delima",
      name: "DELIMa 2.0 KPM",
      description: "Platform pembelajaran digital rasmi KPM yang menyediakan akses kepada Google Classroom, Canva, dan Microsoft 365.",
      badge: "KPM Rasmi",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-400/30",
      icon: "🌐",
      url: "https://d2.delima.edu.my",
      type: "KPM"
    },
    {
      id: "portal-moeis",
      name: "MOEIS / APDM",
      description: "Sistem Pengurusan Maklumat Pendidikan bersepadu untuk rekod kehadiran, profil murid, dan pendaftaran.",
      badge: "Sistem Data",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
      icon: "📊",
      url: "https://moeis.moe.gov.my",
      type: "KPM"
    },
    {
      id: "portal-idme",
      name: "IDME KPM",
      description: "Sistem Pengurusan Identiti KPM bagi log masuk tunggal ke modul pengurusan guru, pentaksiran dan data.",
      badge: "Identiti",
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-400/30",
      icon: "🔑",
      url: "https://idme.moe.gov.my",
      type: "KPM"
    },
    {
      id: "portal-splkpm",
      name: "SPLKPM",
      description: "Sistem Pengurusan Latihan KPM untuk perekodan mata kredit latihan dalam perkhidmatan (LDP) guru dan AKP.",
      badge: "Latihan Guru",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-400/30",
      icon: "🎓",
      url: "https://splkpm.moe.gov.my",
      type: "KPM"
    },
    {
      id: "portal-ssdm",
      name: "SSDM 2.0",
      description: "Sistem Sahsiah Diri Murid untuk merekod amalan baik dan tindakan salah laku murid secara atas talian.",
      badge: "Sahsiah",
      badgeColor: "bg-rose-500/20 text-rose-300 border-rose-400/30",
      icon: "🛡️",
      url: "https://ssdm.moe.gov.my",
      type: "KPM"
    },
    {
      id: "portal-sportsync",
      name: "SK Ranggu SportSync",
      description: "Portal pengurusan sukan dan papan markah langsung Kejohanan Olahraga Tahunan SK Ranggu (KOT 26).",
      badge: "Sistem Khas",
      badgeColor: "bg-sky-500/20 text-sky-300 border-sky-400/30",
      icon: "🏆",
      url: "https://fikreyxcode.github.io/kejohanan-olahraga-skrg/index.html?tahun=2026",
      type: "Sekolah"
    },
    {
      id: "portal-kehadiran",
      name: "HEM SMARTTRACK (SK Ranggu)",
      description: "Portal sistem rekod e-JKM kehadiran murid, keberadaan guru & AKP, guru bertugas harian dan disiplin bersepadu.",
      badge: "HEM RASMI",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
      icon: "🛡️",
      url: "https://fikreyxcode.github.io/sistemkehadiranskrg/",
      type: "Sekolah (Rasmi)",
      cat: "Sistem Sekolah"
    },
    {
      id: "portal-smartdisiplin",
      name: "HEM SMARTDISIPLIN",
      description: "Sistem rekod sahsiah murid, guru bertugas disiplin harian dan SSDM di bawah pengurusan HEM SK Ranggu.",
      badge: "DISIPLIN",
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-400/30",
      icon: "⚖️",
      url: "https://fikreyxcode.github.io/sistemkehadiranskrg/#guru-bertugas",
      type: "Sekolah (Rasmi)",
      cat: "Sistem Sekolah"
    },
    {
      id: "portal-sites",
      name: "Prototaip Portal SK Ranggu",
      description: "Prototaip portal pengurusan maklumat sekolah berasaskan Google Sites sebagai arkib dokumentasi.",
      badge: "Prototaip",
      badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-400/30",
      icon: "🌐",
      url: "https://sites.google.com/view/skranggutawau/utama",
      type: "Google Sites",
      cat: "Arkib Dokumen"
    }
  ],

  // PAUTAN PANTAS PORTAL (PORTAL LINKS UNTUK PAPAN INDUK & HAB DIGITAL)
  portalLinks: [
    {
      id: "pl-delima",
      name: "DELIMa 2.0 KPM",
      desc: "Platform pembelajaran digital, Google Classroom & Canva.",
      badge: "DELIMa",
      cat: "KPM",
      icon: "🌐",
      url: "https://d2.delima.edu.my"
    },
    {
      id: "pl-moeis",
      name: "MOEIS / APDM",
      desc: "Pangkalan data profil murid, e-Kehadiran dan pendaftaran.",
      badge: "APDM",
      cat: "KPM",
      icon: "📊",
      url: "https://moeis.moe.gov.my"
    },
    {
      id: "pl-idme",
      name: "IDME KPM",
      desc: "Sistem Pengurusan Identiti & log masuk modul guru tunggal.",
      badge: "IDME",
      cat: "KPM",
      icon: "🔑",
      url: "https://idme.moe.gov.my"
    },
    {
      id: "pl-hemsmarttrack",
      name: "HEM SMARTTRACK",
      desc: "Sistem e-JKM kehadiran murid, keberadaan guru & modul pengurusan HEM.",
      badge: "HEM RASMI",
      cat: "Sekolah",
      icon: "🛡️",
      url: "https://fikreyxcode.github.io/sistemkehadiranskrg/"
    },
    {
      id: "pl-smartdisiplin",
      name: "HEM SMARTDISIPLIN",
      desc: "Sistem pengurusan disiplin, rekod tindakan murid & pemantauan sahsiah.",
      badge: "DISIPLIN",
      cat: "Sekolah",
      icon: "⚖️",
      url: "https://fikreyxcode.github.io/sistemkehadiranskrg/#guru-bertugas"
    },
    {
      id: "pl-sportsync",
      name: "Sportsync KOT 26",
      desc: "Portal papan markah langsung Kejohanan Olahraga SK Ranggu.",
      badge: "SUKAN",
      cat: "Sekolah",
      icon: "🏆",
      url: "https://fikreyxcode.github.io/kejohanan-olahraga-skrg/index.html?tahun=2026"
    },
    {
      id: "pl-splkpm",
      name: "SPLKPM",
      desc: "Perekodan mata kredit latihan dalam perkhidmatan guru & AKP.",
      badge: "SPLKPM",
      cat: "KPM",
      icon: "🎓",
      url: "https://splkpm.moe.gov.my"
    }
  ],

  googleSheets: {
    sheetId: "19BgxY06KSHSizUsnreZXnXNoUbf-ivhaVj9YVQ8hVdU",
    gid: "2057996103",
    fullUrl: "https://docs.google.com/spreadsheets/d/19BgxY06KSHSizUsnreZXnXNoUbf-ivhaVj9YVQ8hVdU/edit?gid=2057996103#gid=2057996103"
  }
};

// ==========================================================================
// FUNGSI BANTUAN FOTO STAF (GLOBAL PHOTO RESOLVER)
// ==========================================================================
window.getStaffPhoto = function(name) {
  if (!name || typeof name !== "string") return "assets/photos/default.jpg";
  
  // Bersihkan sebarang gelaran / awalan
  let cleaned = name.trim().toUpperCase()
    .replace(/^HJH\.\s*/i, "")
    .replace(/^HJ\.\s*/i, "")
    .replace(/^HAJI\s*/i, "")
    .replace(/^TS\.\s*/i, "")
    .replace(/^ENCIK\s*/i, "")
    .replace(/^PUAN\s*/i, "")
    .replace(/^CIK\s*/i, "")
    .replace(/\s*\(K\)$/i, "")
    .replace(/\s*\(GURU BESAR\)$/i, "")
    .replace(/\s*\(PK[^\)]*\)$/i, "")
    .replace(/\s*\(SETIAUSAHA[^\)]*\)$/i, "")
    .replace(/\s*\(PENYELARAS[^\)]*\)$/i, "")
    .replace(/\s*\(AJK\)$/i, "")
    .trim();

  // Semak secara terus dalam staffList jika ada
  if (window.SKR_DATA && Array.isArray(window.SKR_DATA.staffList)) {
    const found = window.SKR_DATA.staffList.find(s => {
      const sName = s.name.toUpperCase();
      return sName === cleaned || sName.includes(cleaned) || cleaned.includes(sName);
    });
    if (found && found.photo) return found.photo;
  }

  // Fallback berdasarkan padanan kata kunci slug
  const slug = cleaned.toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-");

  return `assets/photos/${slug}.jpg`;
};

// ==========================================================================
// PENYIMPANAN LOCALSTORAGE & PEMBERSIHAN CACHE VERSI LAMA
// ==========================================================================
DEFAULT_SYSTEM_DATA.takwimEvents = DEFAULT_SYSTEM_DATA.takwim;

const CURRENT_STORAGE_KEY = "SK_RANGGU_DASHBOARD_DATA_V27";

function getStoredData() {
  try {
    // Purge semua cache versi lapuk (V1 sehingga V26)
    for (let i = 1; i <= 26; i++) {
      try { localStorage.removeItem(`SK_RANGGU_DASHBOARD_DATA_V${i}`); } catch(e){}
    }
    try { localStorage.removeItem("SK_RANGGU_DASHBOARD_DATA"); } catch(e){}

    const stored = localStorage.getItem(CURRENT_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed && parsed.school) {
        parsed.school.name = DEFAULT_SYSTEM_DATA.school.name;
        parsed.school.address = DEFAULT_SYSTEM_DATA.school.address;
        parsed.school.motto = DEFAULT_SYSTEM_DATA.school.motto;
        parsed.school.academicSession = "Sesi Persekolahan 2026";
        parsed.school.infografikEnrolmen = DEFAULT_SYSTEM_DATA.school.infografikEnrolmen;
        parsed.school.logoSchool = DEFAULT_SYSTEM_DATA.school.logoSchool;
        parsed.school.logoKpm = DEFAULT_SYSTEM_DATA.school.logoKpm;
      }
      if (parsed) {
        if (!parsed.gateways) parsed.gateways = DEFAULT_SYSTEM_DATA.gateways;
        if (!parsed.takwimEvents) parsed.takwimEvents = DEFAULT_SYSTEM_DATA.takwim;
        
        // Penyelarasan mutlak dengan sistem rasmi KOT 26 (0 mata jika belum berlangsung)
        if (!parsed.sportsyncKOT26 || !parsed.sportsyncKOT26.houses) {
          parsed.sportsyncKOT26 = DEFAULT_SYSTEM_DATA.sportsyncKOT26;
        } else {
          // Jika tiada pengesahan penyelarasan secara langsung, paksa reset ke 0 mata
          if (!parsed.sportsyncKOT26.liveSyncedWithKOT26) {
            parsed.sportsyncKOT26.houses.forEach(h => {
              h.gold = 0;
              h.silver = 0;
              h.bronze = 0;
              h.fourth = 0;
              h.points = 0;
              h.standing = "—";
              h.status = "MENANTI KEPUTUSAN ACARA";
            });
            if (parsed.sportsyncKOT26.stats) {
              parsed.sportsyncKOT26.stats.registeredStudents = 0;
              parsed.sportsyncKOT26.stats.officialResults = 0;
              parsed.sportsyncKOT26.stats.completedEntries = 0;
              parsed.sportsyncKOT26.stats.totalPoints = 0;
            }
          }
        }

        // Pastikan sportHouses dalam kokurikulum juga bermula dengan 0 mata
        if (Array.isArray(parsed.sportHouses)) {
          if (!parsed.sportsyncKOT26?.liveSyncedWithKOT26) {
            parsed.sportHouses.forEach(sh => {
              sh.points = 0;
              sh.standing = "—";
            });
          }
        }

        // Pastikan AHAD BIN JAAFAR & JAIBY BIN JULIAN kekal tidak aktif / bersara
        if (Array.isArray(parsed.staffList)) {
          parsed.staffList.forEach(s => {
            if (s.name && (s.name.includes("AHAD BIN JAAFAR") || s.name.includes("JAIBY BIN JULIAN"))) {
              s.isActive = false;
              s.status = "Bersara / Pencen";
            }
          });
        }
        if (parsed.stats) {
          parsed.stats.totalTeachers = 52;
          parsed.stats.totalAllStaff = 58;
          parsed.stats.retiredStaff = 2;
        }
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
