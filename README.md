# 🏛️ SISTEM DASHBOARD BAHAGIAN UNIT PENGURUSAN PENTADBIRAN & KURIKULUM
### SEKOLAH KEBANGSAAN RANGGU, TAWAU, SABAH (KOD SEKOLAH: XBA3037)
**Alamat Rasmi:** Peti Surat 842, 91008 Tawau, Sabah  
**Moto Sekolah:** *"Cita • Usaha • Jaya"*  
**Pembangun & Arkitek Sistem Utama:** **Mohammad Fikrey bin Abdul Gapar (Momon)** (*Lead System Architect & Senior Developer*)

---

## 🌟 Pengenalan & Matlamat Sistem

Sistem ini direka bentuk khusus berteraskan standard visual eksekutif Kementerian Pendidikan Malaysia (KPM) berprestij tinggi, menggabungkan kemudahan capaian responsif merentas **semua peranti** (telefon pintar Android/iOS, tablet, komputer riba, dan desktop).

Sistem ini memusatkan pengurusan pentadbiran sekolah serta unit kurikulum, membolehkan warga sekolah, pentadbir, guru-guru, dan pihak berkepentingan memantau maklumat terkini dengan pantas, telus dan tepat.

---

## ✨ Ciri-Ciri Utama Sistem

1. **Susun Atur Logo Rasmi Bertaraf Eksekutif:**
   - **Kiri:** Logo Rasmi Kementerian Pendidikan Malaysia (KPM) & Jata Negara dengan pengenalan JPN Sabah dan PPD Tawau.
   - **Tengah:** Pengepala Rasmi Unit Pengurusan Pentadbiran & Kurikulum, Nama Sekolah, Alamat Peti Surat 842, 91008 Tawau, Sabah, Kod Sekolah XBA3037, serta Moto *"Cita, Usaha, Jaya"*.
   - **Kanan:** Lencana Vektor Rasmi Sekolah Kebangsaan Ranggu dengan Obor Ilmu, Buku Terbuka, Roda Kemajuan dan Laurel Kehormat.

2. **Ringkasan Eksekutif & Statistik Semasa:**
   - Bilangan Guru (42 orang), Enrolmen Murid (586 orang), Bilangan Kelas (18 kelas + 2 prasekolah), Bilangan Panitia (12 unit), Pencapaian PBD (94.8%), dan Status Sesi Persekolahan semasa.
   - Jam digital masa nyata (MYT Waktu Malaysia) & Kalendar Masihi.
   - Papan Pengumuman Rasmi Pentadbiran & Maklumat Guru Bertugas Mingguan.
   - Hab Pautan Pintas Sistem Rasmi KPM (*idMe/MOEIS, DELIMa, APDM, e-Operasi, SPLKPM, SSDM*).

3. **Carta Organisasi Pentadbiran Interaktif:**
   - Struktur hierarki berperingkat:
     - **Tier 1:** Guru Besar (Pengerusi)
     - **Tier 2:** Penolong Kanan Pentadbiran/Kurikulum (PK1), PK HEM, PK Kokurikulum, PK Petang
     - **Tier 3:** Setiausaha Kurikulum, Penyelaras PBD, SU Peperiksaan, SU Jadual Waktu, GPM (Pusat Sumber), Guru Data & Maklumat, Penyelaras ICT
     - **Tier 4:** Ketua-Ketua Panitia Mata Pelajaran (BM, BI, Matematik, Sains, Pend. Islam, Bahasa Arab, Sejarah, RBT, PJPK, PSV, Muzik, Pemulihan Khas, Prasekolah)
   - Carian nama guru serta-merta (*instant live search*) dan penapis mengikut unit.
   - Paparan modal biodata, emel DELIMa, dan senarai tugas terperinci bagi setiap ahli.

4. **Pengurusan Kurikulum & Analisis Pentaksiran Bilik Darjah (PBD):**
   - Kad Pengurusan Panitia dengan status KPI dan pengesahan DSKP.
   - Graf interaktif *Chart.js* menunjukkan taburan Tahap Penguasaan TP1 hingga TP6 dan analisis pencapaian subjek teras.
   - Takwim aktiviti kurikulum, mesyuarat pengurusan, dan peperiksaan sesi akademik.

5. **Penyelarasan Google Sheets Rasmi:**
   - Terhubung secara dinamik dengan fail Google Sheets anda:
     `https://docs.google.com/spreadsheets/d/19BgxY06KSHSizUsnreZXnXNoUbf-ivhaVj9YVQ8hVdU/edit?gid=2057996103#gid=2057996103`
   - Mempunyai enjin paparan jadual langsung, carian, bilangan baris, dan butang eksport ke CSV.
   - Sekiranya perkongsian dokumen di Google Drive belum dibuka, sistem menyediakan panduan jelas dan pilihan import fail/tampalan CSV pantas.

6. **Portal Pentadbir Sistem (Admin Settings Panel):**
   - **Kawalan Keselamatan:** Akses dilindungi PIN keselamatan (PIN Lalai: `1234`).
   - Kemas kini Nama Sekolah, Kod Sekolah, Alamat, No Telefon, dan Sesi Persekolahan.
   - Tambah, sunting, atau padam ahli guru dalam Carta Organisasi.
   - Konfigurasi Google Sheet ID & GID bila-bila masa.
   - Sandaran Penuh Sistem (*Export JSON*) dan Pemulihan (*Import JSON*).
   - Tetapan kredit identiti pembangun sistem.

7. **Kredit Rasmi Pembangun Sistem:**
   - Kredit berprestij tinggi dipaparkan di bahagian footer dan panel tentang sistem:
     > **Dibangunkan & Diarkitekkan oleh: Momon**  
     > *Lead System Architect & Senior Developer*  
     > *Bahagian Unit Pengurusan Pentadbiran & ICT, SK Ranggu*

---

## 🌐 Cara Pelancaran ke GitHub & Dilihat di Semua Peranti Orang Lain

Untuk membolehkan sistem ini dibuka oleh guru-guru, ibu bapa, pegawai PPD, atau orang awam di telefon atau komputer mereka melalui pautan web internet (percuma dan pantas):

### Kaedah 1: Menggunakan GitHub Pages (Disyorkan)

1. Buka terminal atau git di folder projek:
   ```bash
   cd /Users/momon/.gemini/antigravity/scratch/sk-ranggu-dashboard
   git init
   git add .
   git commit -m "Pelancaran Sistem Dashboard Pentadbiran SK Ranggu v2.5 oleh Momon"
   ```

2. Cipta repositori baharu di akaun GitHub anda (contoh: `sk-ranggu-dashboard`).

3. Sambungkan dan tolak kod ke GitHub:
   ```bash
   git remote add origin https://github.com/<username-github-anda>/sk-ranggu-dashboard.git
   git branch -M main
   git push -u origin main
   ```

4. Di laman web GitHub repositori anda:
   - Pergi ke menu **Settings** > **Pages**.
   - Di bawah **Build and deployment**, pilih **Source: Deploy from a branch**.
   - Pilih Branch: `main` dan folder `/ (root)`, kemudian klik **Save**.

5. Dalam masa 1 minit, pautan rasmi awam anda akan siap:
   🌐 `https://<username-github-anda>.github.io/sk-ranggu-dashboard/`

Pautan ini boleh dikongsi terus melalui WhatsApp atau QR Code, dan boleh dibuka dengan lancar pada iPhone, Android, iPad, dan komputer sesiapa sahaja!

---

## 📱 Membuka Sebagai Aplikasi di Telefon Pintar (PWA)

Sistem ini telah dilengkapi `manifest.json`:
- **Android (Chrome):** Buka pautan > Tekan 3 titik di penjuru atas > Pilih **"Add to Home screen" (Tambah ke Skrin Utama)**.
- **iPhone / iOS (Safari):** Buka pautan > Tekan butang **Share (Kongsi)** > Pilih **"Add to Home Screen"**.

Ikon lencana SK Ranggu akan muncul di skrin telefon seperti aplikasi rasmi!

---

## 🔑 Maklumat Akses Pentadbir

- **Butang Akses:** Klik teks **"⚙️ Pentadbir Sistem"** di bahagian atas kanan laman web.
- **PIN Keselamatan Lalai:** `1234`
- Di dalam panel pentadbir, anda boleh menukar maklumat sekolah, menyusun carta organisasi, menyegerak spreadsheet dan memuat turun sandaran.

---

*Hak Cipta © 2025/2026 Unit Pengurusan Pentadbiran SK Ranggu Tawau, Sabah.*  
*Dicipta dengan dedikasi oleh Momon.*
