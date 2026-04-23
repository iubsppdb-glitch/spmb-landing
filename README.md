# 🎓 SPMB Landing Page — SMA Bintang Nusantara

Landing page modern dan conversion-focused untuk SPMB (Sistem Penerimaan Murid Baru) sekolah.

Built with **Next.js 14 App Router** + **Tailwind CSS** dengan design system custom.

---

## ⚡ Cara Install & Jalankan

### 1. Install dependencies

```bash
npm install
# atau
yarn install
# atau
pnpm install
```

### 2. Jalankan development server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### 3. Build untuk production

```bash
npm run build
npm start
```

---

## ✏️ Cara Edit Konten

**Semua konten diatur dari satu file:**

```
app/data/content.ts
```

Tidak perlu menyentuh komponen apapun. Cukup edit nilai di `content.ts`:

| Bagian | Konstanta | Keterangan |
|--------|-----------|------------|
| Info sekolah | `SITE_CONFIG` | Nama, kontak, link daftar |
| Hero | `HERO` | Headline, statistik, countdown |
| Tentang | `ABOUT` | Deskripsi, fitur unggulan |
| Keunggulan | `BENEFITS` | 6 kartu keunggulan |
| Program | `PROGRAMS` | IPA, IPS, Bahasa |
| Cara daftar | `STEPS` | 4 langkah + jadwal |
| Galeri | `GALLERY` | Link Google Drive foto |
| Video | `VIDEO` | ID YouTube |
| Instagram | `INSTAGRAM` | Posts mock |
| Testimoni | `TESTIMONIALS` | Kutipan alumni/ortu |
| Statistik | `STATS` | Angka pencapaian |
| FAQ | `FAQ` | Pertanyaan & jawaban |
| CTA | `CTA_BANNER` | Tombol ajakan |
| Navbar | `NAVBAR` | Link navigasi |
| Footer | `FOOTER` | Link & kontak |

---

## 🖼️ Menambahkan Foto (Google Drive)

1. Upload foto ke Google Drive
2. Klik kanan → "Bagikan" → Atur ke "Siapa saja dengan link dapat melihat"
3. Salin link (format: `https://drive.google.com/file/d/FILE_ID/view`)
4. Paste ke array `GALLERY.items[i].driveUrl` di `content.ts`
5. Di `Gallery.tsx`, uncomment bagian `<Image ... />` dan hapus div placeholder

Fungsi `convertDriveLink()` sudah tersedia di `Gallery.tsx` untuk mengonversi link otomatis.

---

## 🎬 Mengganti Video YouTube

1. Buka video YouTube sekolah
2. Salin ID dari URL (misal: `https://youtube.com/watch?v=**dQw4w9WgXcQ**`)
3. Tempel ID ke `VIDEO.youtubeId` di `content.ts`

---

## 🎨 Design System (Tailwind)

Semua warna dikonfigurasi di `tailwind.config.ts`:

```
bg-primary      → #265cb0 (biru utama)
bg-secondary    → #cfa137 (emas/gold)
bg-accent       → #01a2d0 (cyan)
bg-dark         → #333333 (teks gelap)
bg-light        → #f4f4f4 (background terang)
bg-soft         → #8ed9f4 (biru muda)
```

Gradient:
```
bg-primary-gradient → linear #01a2d0 ke #164687
bg-hero-gradient    → gradient hero gelap
bg-gold-gradient    → gradient emas
```

---

## 📁 Struktur Project

```
spmb-landing/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── About.tsx
│   │   ├── Benefits.tsx
│   │   ├── Programs.tsx
│   │   ├── Steps.tsx
│   │   ├── Gallery.tsx
│   │   ├── VideoSection.tsx
│   │   ├── Testimonials.tsx
│   │   ├── InstagramSection.tsx
│   │   ├── FAQ.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── content.ts     ← Edit konten di sini!
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── tailwind.config.ts     ← Design system
├── postcss.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 🚀 Deploy ke Vercel

```bash
npx vercel
```

Atau push ke GitHub dan connect ke [vercel.com](https://vercel.com).

---

## 🔧 Customisasi Lanjutan

### Ganti nama sekolah
Edit `SITE_CONFIG.schoolName` dan `SITE_CONFIG.schoolShortName` di `content.ts`.

### Ganti warna brand
Edit nilai hex di `tailwind.config.ts` bagian `colors`.

### Tambah/hapus FAQ
Tambah/hapus object di array `FAQ.items` di `content.ts`.

### Ganti link pendaftaran
Edit `SITE_CONFIG.registrationUrl` di `content.ts`.

---

Made with ❤️ — Next.js + Tailwind CSS
