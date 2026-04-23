// ============================================================
// SPMB Landing Page - Central Content Management
// Edit semua konten dari sini, tidak perlu sentuh komponen!
// ============================================================

export const SITE_CONFIG = {
  schoolName: "SMA Bintang Nusantara",
  schoolShortName: "SMBN",
  tagline: "Mendidik Generasi Unggul, Berkarakter, dan Berdaya Saing Global",
  address: "Jl. Pendidikan No. 88, Tanjung Pinang, Kepulauan Riau 29125",
  phone: "(0771) 123-4567",
  whatsapp: "6281234567890",
  email: "spmb@smbn.sch.id",
  instagram: "@smbn.official",
  facebook: "SMA Bintang Nusantara",
  youtube: "SMBN Channel",
  registrationUrl: "https://daftar.smbn.sch.id",
  year: "2025/2026",
};

export const HERO = {
  eyebrow: "Penerimaan Murid Baru 2025/2026",
  headline: "Wujudkan Mimpimu di Sekolah Terbaik Kepulauan Riau",
  subheadline:
    "Bergabunglah dengan ribuan alumni sukses yang memulai perjalanan luar biasa mereka di SMA Bintang Nusantara. Pendaftaran dibuka sekarang — tempat terbatas!",
  cta_primary: "Daftar Sekarang",
  cta_secondary: "Pelajari Lebih Lanjut",
  highlight_stats: [
    { number: "98%", label: "Tingkat Kelulusan" },
    { number: "500+", label: "Alumni PTN" },
    { number: "35+", label: "Prestasi Nasional" },
    { number: "2025", label: "Tahun Ajaran Baru" },
  ],
  deadline_label: "Pendaftaran ditutup",
  deadline_date: "31 Agustus 2025",
};

export const ABOUT = {
  badge: "Tentang Kami",
  headline: "Sekolah Unggulan dengan Visi Global",
  subheadline:
    "Berdiri sejak 1995, SMA Bintang Nusantara telah mencetak ribuan generasi penerus bangsa yang berkarakter kuat, berprestasi akademis, dan siap menghadapi tantangan global.",
  paragraphs: [
    "Kami menggabungkan kurikulum nasional berkualitas tinggi dengan program pengembangan karakter yang komprehensif. Setiap siswa mendapatkan perhatian personal dari tenaga pengajar berpengalaman dan berdedikasi.",
    "Fasilitas modern, lingkungan belajar kondusif, dan ekosistem prestasi yang kuat menjadikan SMBN pilihan utama keluarga di Kepulauan Riau dan sekitarnya.",
  ],
  features: [
    {
      icon: "🎓",
      title: "Akreditasi A",
      desc: "Terakreditasi A oleh BAN-S/M sejak 2010, diperbarui 2023",
    },
    {
      icon: "🌏",
      title: "Kurikulum Global",
      desc: "Mengintegrasikan standar internasional dalam pembelajaran",
    },
    {
      icon: "👨‍🏫",
      title: "100+ Pengajar",
      desc: "Guru berpengalaman, 80% bergelar S2 dan S3",
    },
    {
      icon: "🏆",
      title: "Juara Nasional",
      desc: "35+ piala prestasi tingkat nasional dalam 5 tahun terakhir",
    },
  ],
  founded: "1995",
  students: "1.800+",
  teachers: "100+",
  accreditation: "A",
};

export const BENEFITS = {
  badge: "Keunggulan Kami",
  headline: "Mengapa Memilih SMBN?",
  subheadline:
    "Kami bukan sekadar sekolah. Kami adalah ekosistem pengembangan potensi yang dirancang untuk mempersiapkan generasi terbaik.",
  items: [
    {
      icon: "🔬",
      title: "Lab Sains Modern",
      desc: "Laboratorium Fisika, Kimia, dan Biologi berstandar perguruan tinggi dengan peralatan terkini untuk mendukung eksplorasi ilmiah siswa.",
      tag: "Fasilitas",
    },
    {
      icon: "💻",
      title: "Program IT & Coding",
      desc: "Kelas programming, robotika, dan AI yang mempersiapkan siswa menghadapi era digital dengan keterampilan teknologi masa depan.",
      tag: "Teknologi",
    },
    {
      icon: "🌐",
      title: "English Immersion",
      desc: "Program bilingual intensif dengan native speaker yang menjamin kemampuan komunikasi internasional sejak dini.",
      tag: "Bahasa",
    },
    {
      icon: "🎭",
      title: "Pengembangan Karakter",
      desc: "Program kepemimpinan, public speaking, dan pembentukan karakter Pancasila yang terintegrasi dalam kurikulum harian.",
      tag: "Karakter",
    },
    {
      icon: "⚽",
      title: "40+ Ekstrakurikuler",
      desc: "Dari olahraga, seni, hingga olimpiade sains — setiap minat dan bakat siswa mendapat wadah pengembangan yang tepat.",
      tag: "Ekskul",
    },
    {
      icon: "🤝",
      title: "Bimbingan Masuk PTN",
      desc: "Program intensif SNBT dan SBMPTN dengan bimbingan langsung alumni yang kini berkuliah di UI, ITB, UGM, dan kampus top lainnya.",
      tag: "Perguruan Tinggi",
    },
  ],
};

export const PROGRAMS = {
  badge: "Program Unggulan",
  headline: "Pilih Jurusan Sesuai Passion-mu",
  subheadline:
    "Tiga jurusan unggulan dengan kurikulum yang dirancang untuk memaksimalkan potensi dan mempersiapkan karier impian.",
  items: [
    {
      id: "ipa",
      name: "Jurusan IPA",
      icon: "🔬",
      color: "accent",
      desc: "Program sains terpadu dengan penekanan pada Matematika, Fisika, Kimia, dan Biologi. Dirancang untuk calon dokter, insinyur, dan ilmuwan masa depan.",
      highlights: [
        "Lab sains berstandar tinggi",
        "Olimpiade sains nasional",
        "Kemitraan dengan universitas",
        "Research program",
      ],
      quota: "240 Siswa",
      passing_grade: "Rata-rata 7.5+",
    },
    {
      id: "ips",
      name: "Jurusan IPS",
      icon: "📊",
      color: "primary",
      desc: "Program sosial humaniora yang mengembangkan kemampuan analitis, ekonomi, geografi, dan sejarah untuk calon pemimpin bisnis dan sosial.",
      highlights: [
        "Simulasi bisnis nyata",
        "Mock trial & debat",
        "Kunjungan industri",
        "Entrepreneurship club",
      ],
      quota: "160 Siswa",
      passing_grade: "Rata-rata 7.0+",
      featured: true,
    },
    {
      id: "bahasa",
      name: "Jurusan Bahasa",
      icon: "🌏",
      color: "secondary",
      desc: "Program linguistik dan sastra dengan penguatan Bahasa Inggris, Mandarin, dan Jepang. Ideal untuk calon diplomat, penerjemah, dan komunikator profesional.",
      highlights: [
        "3 bahasa asing aktif",
        "Exchange program",
        "Debat internasional",
        "Sastra dan jurnalistik",
      ],
      quota: "100 Siswa",
      passing_grade: "Rata-rata 7.0+",
    },
  ],
};

export const STEPS = {
  badge: "Cara Mendaftar",
  headline: "4 Langkah Mudah Mendaftar",
  subheadline:
    "Proses pendaftaran yang transparan, mudah, dan dapat dipantau secara online dari mana saja.",
  items: [
    {
      step: "01",
      title: "Daftar Online",
      desc: "Buat akun di portal SPMB kami. Isi data diri calon siswa dan orang tua dengan lengkap dan benar.",
      detail: "Buka di smbn.sch.id/daftar",
      icon: "🖥️",
    },
    {
      step: "02",
      title: "Unggah Dokumen",
      desc: "Upload dokumen yang diperlukan: Ijazah/SKL, rapor, KTP orang tua, KK, dan pas foto terbaru.",
      detail: "Format PDF/JPG, maks. 5MB",
      icon: "📄",
    },
    {
      step: "03",
      title: "Seleksi & Tes",
      desc: "Ikuti seleksi akademis online dan wawancara motivasi. Jadwal akan dikirim via WhatsApp dan email.",
      detail: "Online & luring tersedia",
      icon: "📝",
    },
    {
      step: "04",
      title: "Pengumuman & Daftar Ulang",
      desc: "Cek pengumuman kelulusan, lakukan daftar ulang, dan sambut tahun ajaran baru bersama kami!",
      detail: "Dalam 7 hari kerja",
      icon: "🎉",
    },
  ],
  schedule: [
    { phase: "Pendaftaran Online", date: "1 Juli – 31 Agustus 2025" },
    { phase: "Seleksi Berkas", date: "1 – 7 September 2025" },
    { phase: "Tes Akademis & Wawancara", date: "10 – 15 September 2025" },
    { phase: "Pengumuman Kelulusan", date: "20 September 2025" },
    { phase: "Daftar Ulang", date: "21 – 30 September 2025" },
    { phase: "Orientasi Siswa Baru", date: "6 Oktober 2025" },
  ],
};

export const GALLERY = {
  badge: "Galeri Sekolah",
  headline: "Kehidupan di SMBN",
  subheadline: "Sekilas momen berharga dari kehidupan akademis dan non-akademis kami.",
  // Ganti URL berikut dengan link Google Drive foto sekolah Anda
  // Format: https://drive.google.com/file/d/FILE_ID/view
  items: [
    {
      id: 1,
      driveUrl: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmULnkmcen/view",
      caption: "Gedung Utama SMBN",
      category: "Fasilitas",
    },
    {
      id: 2,
      driveUrl: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmULnkmcen/view",
      caption: "Laboratorium Sains",
      category: "Fasilitas",
    },
    {
      id: 3,
      driveUrl: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmULnkmcen/view",
      caption: "Upacara Bendera",
      category: "Kegiatan",
    },
    {
      id: 4,
      driveUrl: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmULnkmcen/view",
      caption: "Olimpiade Sains Nasional",
      category: "Prestasi",
    },
    {
      id: 5,
      driveUrl: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmULnkmcen/view",
      caption: "Pesta Seni Budaya",
      category: "Kegiatan",
    },
    {
      id: 6,
      driveUrl: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmULnkmcen/view",
      caption: "Tim Robotika",
      category: "Prestasi",
    },
    {
      id: 7,
      driveUrl: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmULnkmcen/view",
      caption: "Perpustakaan Digital",
      category: "Fasilitas",
    },
    {
      id: 8,
      driveUrl: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmULnkmcen/view",
      caption: "Wisuda Angkatan 2024",
      category: "Kegiatan",
    },
  ],
  // Fallback placeholder jika gambar Google Drive belum diisi
  fallbackColors: [
    "#265cb0", "#01a2d0", "#cfa137", "#164687",
    "#33b5dc", "#265cb0", "#8ed9f4", "#01a2d0",
  ],
};

export const VIDEO = {
  badge: "Video Profil",
  headline: "Kenali SMBN Lebih Dekat",
  subheadline:
    "Saksikan sendiri bagaimana suasana belajar, fasilitas kelas dunia, dan semangat prestasi yang menginspirasi di SMA Bintang Nusantara.",
  // Ganti dengan ID video YouTube profil sekolah Anda
  youtubeId: "dQw4w9WgXcQ",
  thumbnail_caption: "Profil Sekolah SMA Bintang Nusantara 2025",
  highlights: [
    "Tur Virtual Fasilitas",
    "Cerita Alumni",
    "Penampilan Ekskul",
    "Pesan Kepala Sekolah",
  ],
};

export const INSTAGRAM = {
  badge: "Instagram",
  headline: "Ikuti Kami di Instagram",
  handle: "@smbn.official",
  profileUrl: "https://instagram.com/smbn.official",
  followerCount: "12.4K",
  posts: [
    {
      id: 1,
      caption: "Selamat kepada Tim Robotika SMBN yang meraih Juara 1 Nasional! 🏆🤖",
      likes: 1243,
      comments: 87,
      emoji: "🤖",
      bg: "bg-primary",
    },
    {
      id: 2,
      caption: "Wisuda angkatan 2024 — selamat menempuh babak baru kehidupan! 🎓✨",
      likes: 2891,
      comments: 234,
      emoji: "🎓",
      bg: "bg-accent",
    },
    {
      id: 3,
      caption: "Lab sains baru sudah siap! Siap eksplorasi bersama? 🔬💡",
      likes: 876,
      comments: 65,
      emoji: "🔬",
      bg: "bg-primary-dark",
    },
    {
      id: 4,
      caption: "Pertandingan basket antar kelas — energi luar biasa dari generasi penerus! ⛹️",
      likes: 654,
      comments: 43,
      emoji: "⛹️",
      bg: "bg-accent-dark",
    },
    {
      id: 5,
      caption: "Pembukaan SPMB 2025/2026 resmi dibuka! Link daftar di bio 👆",
      likes: 3102,
      comments: 412,
      emoji: "📋",
      bg: "bg-secondary",
    },
    {
      id: 6,
      caption: "Festival Budaya tahunan SMBN — keberagaman adalah kekuatan kita 🌈",
      likes: 1567,
      comments: 129,
      emoji: "🎭",
      bg: "bg-primary",
    },
  ],
};

export const TESTIMONIALS = {
  badge: "Kata Mereka",
  headline: "Cerita Nyata dari Keluarga SMBN",
  subheadline:
    "Lebih dari ribuan keluarga telah mempercayakan pendidikan putra-putri terbaik mereka kepada kami.",
  items: [
    {
      name: "Rizky Pratama",
      role: "Alumni 2022 — Diterima di ITB Teknik Informatika",
      quote:
        "SMBN bukan hanya tempat belajar, tapi tempat saya menemukan jati diri. Guru-guru di sini luar biasa sabar dan inspiratif. Program olimpiade sains mempersiapkan saya jauh lebih baik dari yang saya bayangkan.",
      avatar: "RP",
      rating: 5,
      bg: "bg-primary",
    },
    {
      name: "Ananda Sari",
      role: "Alumni 2023 — Diterima di UI Kedokteran",
      quote:
        "Lab sains yang lengkap dan program bimbingan PTN di SMBN benar-benar top. Saya tidak menyangka bisa masuk FK UI — tapi dengan dukungan guru-guru di sini, semua terasa mungkin!",
      avatar: "AS",
      rating: 5,
      bg: "bg-accent",
    },
    {
      name: "Budi Santoso",
      role: "Wali Murid — Anak kelas XI IPA",
      quote:
        "Sebagai orang tua, saya merasa tenang menyekolahkan anak di SMBN. Komunikasi dengan wali kelas sangat terbuka, perkembangan anak dipantau secara berkala. Pilihan terbaik untuk keluarga kami.",
      avatar: "BS",
      rating: 5,
      bg: "bg-primary-dark",
    },
    {
      name: "Dewi Kartika",
      role: "Alumni 2021 — Mahasiswi UGM Hubungan Internasional",
      quote:
        "Program bahasa di SMBN luar biasa! Kemampuan Bahasa Inggris dan Mandarin saya berkembang pesat. Sekarang saya bisa presentasi di forum internasional dengan percaya diri.",
      avatar: "DK",
      rating: 5,
      bg: "bg-accent-dark",
    },
    {
      name: "Muhammad Fajar",
      role: "Siswa Kelas XII IPA — Ketua OSIS",
      quote:
        "Jadi ketua OSIS di SMBN mengajarkan saya arti kepemimpinan nyata. Sekolah memberikan kepercayaan dan ruang bagi kami untuk berkreasi dan memimpin dengan bertanggung jawab.",
      avatar: "MF",
      rating: 5,
      bg: "bg-primary",
    },
    {
      name: "Ratna Wijayanti",
      role: "Wali Murid — Anak Alumni 2023",
      quote:
        "Dua anak saya bersekolah di SMBN dan keduanya berhasil masuk PTN favorit. Investasi terbaik yang pernah kami lakukan untuk masa depan keluarga. Terima kasih SMBN!",
      avatar: "RW",
      rating: 5,
      bg: "bg-secondary",
    },
  ],
};

export const STATS = {
  badge: "Angka yang Bicara",
  headline: "Prestasi Kami dalam Angka",
  items: [
    { number: 98, suffix: "%", label: "Tingkat Kelulusan UN", icon: "🎓" },
    { number: 500, suffix: "+", label: "Alumni di PTN Top", icon: "🏛️" },
    { number: 35, suffix: "+", label: "Prestasi Nasional", icon: "🏆" },
    { number: 1800, suffix: "+", label: "Siswa Aktif", icon: "👨‍🎓" },
    { number: 100, suffix: "+", label: "Tenaga Pengajar", icon: "👨‍🏫" },
    { number: 29, suffix: " Thn", label: "Pengalaman Mendidik", icon: "📅" },
  ],
};

export const FAQ = {
  badge: "FAQ",
  headline: "Pertanyaan yang Sering Diajukan",
  subheadline:
    "Tidak menemukan jawaban di sini? Hubungi kami langsung via WhatsApp atau email.",
  items: [
    {
      q: "Apa saja syarat pendaftaran SPMB SMBN 2025/2026?",
      a: "Syarat pendaftaran: (1) Lulusan SMP/MTs atau sederajat, (2) Nilai rata-rata rapor minimal 7.0, (3) Surat Keterangan Lulus (SKL) atau Ijazah, (4) KTP/KK orang tua, (5) Pas foto 3x4 terbaru. Semua dokumen diunggah secara online melalui portal daftar.smbn.sch.id.",
    },
    {
      q: "Berapa biaya pendaftaran dan apakah ada beasiswa?",
      a: "Biaya pendaftaran sebesar Rp 150.000 (non-refundable). Kami menyediakan 3 jalur beasiswa: Beasiswa Akademik (nilai rapor excellent), Beasiswa Prestasi (juara olimpiade/olahraga/seni), dan Beasiswa Ekonomi (bagi keluarga kurang mampu). Formulir beasiswa tersedia di website kami.",
    },
    {
      q: "Apakah ada tes masuk? Seperti apa format tesnya?",
      a: "Ya, terdapat dua tahap seleksi: (1) Seleksi Berkas - verifikasi dokumen dan nilai rapor, (2) Tes Akademis online (Matematika, Bahasa Indonesia, IPA/IPS sesuai jurusan) dan Wawancara Motivasi via Zoom. Seluruh proses dapat dilakukan dari rumah.",
    },
    {
      q: "Kapan pengumuman hasil seleksi?",
      a: "Pengumuman hasil seleksi dilakukan pada tanggal 20 September 2025, diumumkan melalui portal siswa, WhatsApp, dan email yang terdaftar. Calon siswa yang diterima wajib melakukan daftar ulang paling lambat 30 September 2025.",
    },
    {
      q: "Fasilitas apa saja yang tersedia di SMBN?",
      a: "SMBN memiliki fasilitas lengkap: Gedung 4 lantai ber-AC, 6 laboratorium (Fisika, Kimia, Biologi, Komputer x2, Bahasa), perpustakaan digital, aula 2.000 kapasitas, lapangan olahraga standar nasional, studio musik, galeri seni, kantin sehat, masjid, dan hotspot internet di seluruh area sekolah.",
    },
    {
      q: "Bagaimana cara memilih jurusan? Bisakah pindah jurusan?",
      a: "Pilihan jurusan dilakukan saat pengisian formulir pendaftaran berdasarkan minat dan nilai rapor. Perpindahan jurusan dapat dilakukan di akhir semester 1 kelas X berdasarkan konsultasi dengan guru BK, nilai akademis, dan persetujuan orang tua.",
    },
    {
      q: "Apakah ada program asrama / boarding school?",
      a: "Saat ini SMBN belum memiliki program asrama. Namun kami memiliki daftar rekomendasi kos/rumah kontrakan di sekitar sekolah yang aman dan terjangkau untuk siswa dari luar kota. Hubungi sekretariat sekolah untuk informasi lebih lanjut.",
    },
  ],
};

export const CTA_BANNER = {
  headline: "Daftarkan Dirimu Sekarang!",
  subheadline:
    "Jangan lewatkan kesempatan ini. Kuota terbatas dan pendaftaran akan segera ditutup. Ambil langkah pertama menuju masa depan gemilangmu bersama SMA Bintang Nusantara.",
  cta_primary: "Daftar Online Sekarang",
  cta_secondary: "Hubungi Kami via WhatsApp",
  urgency_note: "⏳ Sisa waktu pendaftaran: 31 Agustus 2025",
  stats: [
    { label: "Kuota Tersisa", value: "~120 Kursi" },
    { label: "Pendaftar Saat Ini", value: "380+" },
  ],
};

export const NAVBAR = {
  links: [
    { label: "Beranda", href: "#hero" },
    { label: "Tentang", href: "#about" },
    { label: "Keunggulan", href: "#benefits" },
    { label: "Program", href: "#programs" },
    { label: "Cara Daftar", href: "#steps" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: "Daftar Sekarang",
};

export const FOOTER = {
  tagline: "Mendidik generasi unggul sejak 1995. Bersama SMBN, masa depan lebih cerah.",
  quick_links: [
    { label: "Tentang Sekolah", href: "#about" },
    { label: "Program Jurusan", href: "#programs" },
    { label: "Cara Pendaftaran", href: "#steps" },
    { label: "Galeri", href: "#gallery" },
    { label: "FAQ", href: "#faq" },
  ],
  contact_links: [
    { label: "(0771) 123-4567", href: "tel:07711234567", icon: "📞" },
    { label: "spmb@smbn.sch.id", href: "mailto:spmb@smbn.sch.id", icon: "✉️" },
    {
      label: "WhatsApp Kami",
      href: "https://wa.me/6281234567890",
      icon: "💬",
    },
  ],
  socials: [
    { label: "Instagram", href: "https://instagram.com/smbn.official", icon: "📸" },
    { label: "Facebook", href: "#", icon: "👍" },
    { label: "YouTube", href: "#", icon: "▶️" },
    { label: "Twitter/X", href: "#", icon: "🐦" },
  ],
  copyright: `© ${new Date().getFullYear()} SMA Bintang Nusantara. Semua hak dilindungi.`,
};
