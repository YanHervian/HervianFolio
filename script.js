(() => {
  const body = document.body;
  const landing = document.getElementById('landing');
  const lcards = [...document.querySelectorAll('.lcard')];
  const ltargets = [...document.querySelectorAll('.lcard-target')];
  const lcardBusiness = document.getElementById('lcardBusiness');
  const lcardTechnology = document.getElementById('lcardTechnology');
  const carouselPrev = document.getElementById('carouselPrev');
  const carouselNext = document.getElementById('carouselNext');
  const carouselViewport = document.getElementById('carouselViewport');
  const intro = document.getElementById('intro');
  const scene = document.getElementById('scene');
  const bgWrap = document.getElementById('bgWrap');
  const introCopy = document.getElementById('introCopy');
  const sceneLight = document.getElementById('sceneLight');
  const transition = document.getElementById('transition');
  const characterWrap = document.getElementById('characterWrap');

  const introKicker = document.getElementById('introKicker');
  const introTitle = document.getElementById('introTitle');
  const introText = document.getElementById('introText');

  const navMode = document.getElementById('navMode');
  const heroMeta = document.getElementById('heroMeta');
  const heroTitle = document.getElementById('heroTitle');
  const heroCopy = document.getElementById('heroCopy');
  const heroDiscipline = document.getElementById('heroDiscipline');
  const aboutTitle = document.getElementById('aboutTitle');
  const aboutA = document.getElementById('aboutA');
  const aboutB = document.getElementById('aboutB');
  const skillGrid = document.getElementById('skillGrid');
  const servicesGrid = document.getElementById('servicesGrid');
  const projectList = document.getElementById('projectList');
  const timeline = document.getElementById('timeline');
  const contactCopy = document.getElementById('contactCopy');
  const contactLinks = document.getElementById('contactLinks');
  const footerMode = document.getElementById('footerMode');
  const backBtn = document.getElementById('backBtn');

  const data = {
    business: {
      index: '01 / BUSINESS',
      kicker: 'Business',
      introTitle: 'DRIVING<br><span>BUSINESS</span>FORWARD.',
      introText: 'Turning real business problems into clean, working solutions that actually scale.',
      heroMeta: '01 \u2014 Business',
      heroTitle: 'DRIVING<br><em>BUSINESS</em><br>FORWARD.',
      heroCopy: 'Turning real business problems into clean, working solutions that actually scale.',
      aboutTitle: 'Tentang<br>Saya.',
      aboutA: 'Halo, saya Alfonsus Hervian Hadi Winata, seorang lulusan S1 Sistem Informasi dengan pengalaman komprehensif dalam pengelolaan bisnis online, digital marketing, content creation, dan branding. Memiliki rekam jejak dalam mengelola marketplace secara mandiri, mulai dari strategi pemasaran, analisis pasar, pembuatan konten promosi, hingga pelayanan pelanggan.',
      aboutB: 'Berbekal kemampuan kuat dalam editing foto, video, desain multimedia, serta pengembangan website untuk mendukung kebutuhan pemasaran digital yang efektif. Terbiasa bekerja secara mandiri maupun di dalam tim, komunikatif, adaptif, dan memiliki antusiasme tinggi pada bidang bisnis kreatif serta pengembangan media digital.',
      contactCopy: 'Untuk kolaborasi bisnis, strategi proyek, atau peluang lainnya, jangan ragu untuk menghubungi saya.',
      stats: { s1Num: '7K+', s1Label: 'Pengunjung/Bulan', s2Num: '652+', s2Label: 'Total Transaksi', s3Num: 'Rp70JT+', s3Label: 'Total Penjualan' },
      skills: [
        { svgId: 'icon-store', name: 'Bisnis Digital & Marketing', desc: 'Pengelolaan marketplace secara menyeluruh dari upload produk, optimasi toko, analisis pasar, penentuan branding, dan penyusunan strategi pemasaran digital berorientasi konversi.', tags: ['Shopee Operations', 'Lynk.id', 'Digital Marketing', 'Branding', 'Analisis Pasar', 'Copywriting', 'Strategi Pemasaran', 'Tokopedia Operations', 'Marketplace Management', 'Customer Service', 'Optimasi Penjualan'], level: 90, featured: true },
        { svgId: 'icon-multimedia', name: 'Desain & Editor Multimedia', desc: 'Pembuatan konten visual untuk kebutuhan promosi, branding, dan media digital melalui editing foto, video, serta audio. Terbiasa merancang desain yang menyesuaikan konsep, target audiens, dan kebutuhan komunikasi visual.', tags: ['Adobe Photoshop', 'Canva', 'Adobe Lightroom', 'Filmora', 'Adobe Premiere Pro', 'CapCut', 'Adobe Audition', 'Konten Promosi'], level: 90 },
        { svgId: 'icon-laptop', name: 'Pengembangan Website', desc: 'Membangun, mendesain, dan mengembangkan website berbasis responsive dan user friendly sesuai kebutuhan klien, dari sekedar landing page hingga sistem informasi berbasis web.', tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'CodeIgniter', 'MySQL', 'Web Deployment', 'Responsive UI'], level: 95 },
        { svgId: 'icon-users', name: 'Kemampuan Personal', desc: 'Menjunjung tinggi disiplin, tanggung jawab, dan manajemen waktu. Mampu bekerja dalam tim, pengambilan keputusan berbasis solusi, adaptif, serta komunikatif terhadap klien/pelanggan.', tags: ['Komunikasi Efektif', 'Problem Solving', 'Adaptasi Cepat'], level: 95 }
      ],
      services: [
        { num: '01', title: 'Admin Marketplace', desc: 'Mengelola operasional harian toko online di berbagai platform marketplace, mulai dari upload produk, stok, hingga pemrosesan pesanan pelanggan.', pills: ['Shopee', 'Tokopedia', 'Customer Service', 'Order Fulfillment'], icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l1.5-6h15L21 9v2a2 2 0 0 1-4 0a2 2 0 0 1-4 0a2 2 0 0 1-4 0a2 2 0 0 1-4 0v-2z"></path><path d="M3 11v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9"></path></svg>' },
        { num: '02', title: 'E-Commerce Operations', desc: 'Mengoptimalkan performa toko melalui riset pasar, penentuan harga, dan strategi kampanye promosi untuk memaksimalkan visibilitas dan konversi.', pills: ['Market Analysis', 'Sales Optimization', 'Campaigns', 'Pricing'], icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>' },
        { num: '03', title: 'Digital Marketing', desc: 'Menyusun dan mengeksekusi kampanye pemasaran digital untuk membangun kesadaran merek dan menarik trafik potensial ke platform penjualan.', pills: ['Marketing Strategy', 'Brand Awareness', 'Ads', 'Traffic'], icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h2.5"/><polygon points="14 4 6 9 6 15 14 20 14 4"/><line x1="22" y1="12" x2="22" y2="12"/><line x1="19" y1="7" x2="19" y2="7"/><line x1="19" y1="17" x2="19" y2="17"/></svg>' },
        { num: '04', title: 'Admin Social Media', desc: 'Merencanakan kalender konten, mengelola interaksi audiens, dan membangun komunitas digital yang aktif di berbagai platform media sosial.', pills: ['Content Planning', 'Engagement', 'Instagram', 'TikTok'], icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>' },
        { num: '05', title: 'Multimedia Design', desc: 'Memproduksi aset visual kreatif seperti desain grafis, editing foto, dan video promosi yang dirancang khusus untuk menarik perhatian audiens.', pills: ['Graphic Design', 'Video Editing', 'Creative Assets', 'CapCut'], icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>' },
        { num: '06', title: 'Branding & Copywriting', desc: 'Membangun identitas merek yang kuat dan merangkai teks promosi yang persuasif untuk mendukung strategi pemasaran digital secara efektif.', pills: ['Brand Identity', 'Copywriting', 'Storytelling', 'Positioning'], icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="6.5"/></svg>' }
      ],
      projects: [
        { category: 'Analisis Performa', num: '01', name: 'Analisis Performa Shopee Seller Center (Desember)', desc: 'Dokumentasi dashboard resmi Shopee Seller Center yang digunakan untuk memantau performa toko selama periode Desember. Mencakup analisis traffic, jumlah klik pencarian, aktivitas pembeli, tingkat konversi, serta pencapaian penjualan sebagai dasar evaluasi strategi digital marketing dan optimasi Shopee SEO.', tags: ['1.723 Pengunjung Produk', '20,31% Conversion Rate', 'Rp 5,2 Jt Total Penjualan'], type: 'Business', img: 'assets/proyek-bisnis/Statistik Shopee Bulan 12 Saja.png' },
        { category: 'Analisis Performa', num: '02', name: 'Statistik Bulanan LYNK.ID', desc: 'Dashboard analitik yang menampilkan perkembangan performa Views, Clicks, Omzet, dan Transaksi setiap bulan. Data digunakan untuk mengevaluasi efektivitas strategi promosi, optimasi konten, serta pertumbuhan performa toko digital berdasarkan LYNK.ID Analytics.', tags: ['28.777 Total Views', '13.883 Total Clicks', 'Bulan 12 Peak Performance'], type: 'Business', img: 'assets/proyek-bisnis/Statistik Tiap Bulan.png' },
        { category: 'Analisis Performa', num: '03', name: 'Statistik Penjualan LYNK.ID', desc: 'Dokumentasi performa penjualan berdasarkan data Lifetime Orders dari dashboard LYNK.ID Analytics. Menampilkan pencapaian 652 Total Orders yang didukung oleh optimasi produk, strategi promosi, peningkatan konversi, serta pengelolaan toko digital secara konsisten.', tags: ['652 Lifetime Orders', '8 Dokumentasi Bukti', '100% Data Analytics'], type: 'Business', img: 'assets/proyek-bisnis/Statistik Penjualan.png' },
        { category: 'Banner Promosi', num: '04', name: 'Banner Promosi E-Commerce 1', desc: 'Visual banner promosi toko online untuk meningkatkan Click-Through Rate (CTR) dan memperkuat branding toko.', tags: ['Desain Promosi', 'Canva', 'E-Commerce'], type: 'Business', img: 'assets/proyek-bisnis/Banner Promosi 1.png' },
        { category: 'Banner Promosi', num: '05', name: 'Banner Promosi E-Commerce 2', desc: 'Visual banner dengan layout responsif untuk kampanye produk unggulan di marketplace & media sosial.', tags: ['Kampanye Produk', 'Media Sosial', 'Layout Responsif'], type: 'Business', img: 'assets/proyek-bisnis/Banner Promosi 2.png' },
        { category: 'Desain Produk', num: '06', name: 'Visual Showcase Produk 1', desc: 'Desain gambar sampul produk (product catalog thumbnail) untuk meningkatkan daya pikat calon pembeli.', tags: ['Product Catalog', 'Thumbnail', 'Desain Visual'], type: 'Business', img: 'assets/proyek-bisnis/Desain Produk 1.png' },
        { category: 'Desain Produk', num: '07', name: 'Visual Showcase Produk 2', desc: 'Rancangan katalog visual varian produk yang mempermudah calon konsumen dalam memilih paket transaksi.', tags: ['Katalog Produk', 'Desain Varian', 'Panduan Transaksi'], type: 'Business', img: 'assets/proyek-bisnis/Desain Produk 2.png' },
        { category: 'Poster & Informasi', num: '08', name: 'Infografis Panduan & Informasi', desc: 'Layout desain instruksi informatif yang membantu alur transaksi dan memberikan rasa aman bagi pembeli.', tags: ['Infografis', 'Panduan', 'Layout Desain'], type: 'Business', img: 'assets/proyek-bisnis/Desain Informasi.png' },
        { category: 'Poster & Informasi', num: '09', name: 'Poster Campaign Marketing', desc: 'Poster promosi visual dengan skema warna atraktif untuk kebutuhan feeds, story, dan campaign iklan.', tags: ['Poster Promosi', 'Visual Atraktif', 'Marketing Campaign'], type: 'Business', img: 'assets/proyek-bisnis/Poster Promo.png' }
      ],
      journey: [
        { year: '2019 - 2022', badge: 'Rekayasa Perangkat Lunak', title: 'SMK TI AIRLANGGA SAMARINDA', desc: 'Selama menempuh pendidikan di SMK TI Airlangga Samarinda, saya memperoleh berbagai pengalaman dalam pengembangan perangkat lunak, khususnya di bidang website dan pemrograman. Pada tahun terakhir, saya dipercaya menjadi asisten guru produktif untuk membantu membimbing siswa dalam mempersiapkan Uji Kompetensi Keahlian (UKK). Saya juga berhasil meraih penghargaan sebagai peraih nilai Uji Kompetensi Keahlian (UKK) tertinggi di seluruh jurusan dan kelas.' },
        { year: '2022 - 2026', badge: '(S1) Sistem Informasi (IPK: 3.78)', title: 'UNIVERSITAS AMIKOM YOGYAKARTA', desc: 'Menempuh pendidikan Sistem Informasi di Universitas Amikom Yogyakarta sambil membangun pengalaman di bidang bisnis digital. Aktif mengelola online shop, menyusun strategi pemasaran, mengembangkan branding, serta mengoptimalkan marketplace dan media digital. Pengalaman ini memperkuat kemampuan dalam menggabungkan pemanfaatan teknologi dengan kebutuhan bisnis modern.' }
      ],
      contacts: [
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>', label: 'Email', val: 'hervianhdw@gmail.com', href: 'mailto:hervianhdw@gmail.com' },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>', label: 'LinkedIn', val: 'linkedin.com/in/alfonsushervianhadiwinata', href: 'https://id.linkedin.com/in/alfonsushervianhadiwinata' },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>', label: 'Instagram', val: '@yan_hervian', href: 'https://www.instagram.com/yan_hervian/' }
      ]
    },
    technology: {
      index: '02 / TECHNOLOGY',
      kicker: 'Technology',
      introTitle: 'MAKING<br><span>IDEAS</span>WORK.',
      introText: 'Turning ideas into ready-to-use web products with clean interfaces that just feel right.',
      heroMeta: '02 \u2014 Technology',
      heroTitle: 'MAKING<br><em>IDEAS</em><br>WORK.',
      heroCopy: 'Turning ideas into ready-to-use web products with clean interfaces that just feel right.',
      aboutTitle: 'Tentang<br>Saya.',
      aboutA: 'Halo, saya Alfonsus Hervian Hadi Winata. Seorang lulusan S1 yang berfokus pada pengembangan website, aplikasi, game, dan multimedia. Saya memiliki pengalaman membangun berbagai proyek digital, mulai dari landing page, company profile, sistem informasi, e-commerce, aplikasi mobile, game, hingga aplikasi berbasis Augmented Reality (AR).',
      aboutB: 'Berbekal pengalaman magang sebagai Web Developer di PT Green Nusa Computindo serta berbagai proyek yang berhasil meraih penghargaan di tingkat nasional, saya terbiasa menggabungkan kemampuan teknis dan kreativitas untuk menciptakan solusi digital yang modern, responsif, dan berorientasi pada pengalaman pengguna.',
      contactCopy: 'Untuk website, Game, Aplikasi, atau peluang lainnya, jangan ragu untuk menghubungi saya',
      stats: { s1Num: '32', s1Label: 'Proyek', s2Num: '14', s2Label: 'Website & Sistem', s3Num: '12', s3Label: 'Aplikasi & Game' },
      skills: [
        { svgId: 'icon-palette', name: 'Pengembangan Frontend & UI/UX', desc: 'Membangun antarmuka web modern yang responsif, interaktif, dan mudah digunakan dengan menerapkan prinsip UI/UX untuk menghadirkan pengalaman pengguna yang optimal.', tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'UI/UX Design'], level: 100, featured: true },
        { svgId: 'icon-server', name: 'Pengembangan Backend & Basis Data', desc: 'Mengembangkan sistem backend yang aman dan efisien dengan membangun logika aplikasi, REST API, serta pengelolaan basis data untuk mendukung performa aplikasi yang optimal.', tags: ['PHP', 'CodeIgniter', 'MySQL'], level: 90 },
        { svgId: 'icon-cube', name: 'Game & AR/VR Interaktif', desc: 'Mengembangkan game 3D dan aplikasi Augmented Reality (AR) menggunakan Unity, termasuk proyek media interaktif yang berhasil meraih penghargaan pada kompetisi nasional.', tags: ['Unity', 'C#', 'Augmented Reality (AR)', 'Pengembangan Game', 'Media Interaktif'], level: 90 },
        { svgId: 'icon-multimedia', name: 'Multimedia Production', desc: 'Produksi konten digital profesional melalui pengolahan video, desain grafis, dan editing audio menggunakan berbagai perangkat lunak multimedia.', tags: ['Adobe Premiere Pro', 'Adobe Audition', 'Adobe Photoshop', 'Capcut', 'Filmora'], level: 90 }
      ],
      services: [
        { num: '01', title: 'Web Development', desc: 'Membangun website modern, responsif, dan berkinerja tinggi. Berpengalaman mengembangkan sistem informasi, dashboard, dan e-commerce.', pills: ['Responsive Design', 'Dashboard System', 'Landing Page', 'Fast Performance'], icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>' },
        { num: '02', title: 'UI / UX Design', desc: 'Mendesain antarmuka modern, intuitif, dan mudah digunakan mulai dari wireframe hingga implementasi desain responsif.', pills: ['Wireframing', 'UI Design', 'User Experience', 'Responsive Layout'], icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>' },
        { num: '03', title: 'Backend Development', desc: 'Mengembangkan sistem backend aman dengan PHP, CodeIgniter, & MySQL. Berpengalaman membangun REST API dan pengelolaan database.', pills: ['REST API', 'Authentication', 'Database Design', 'MySQL'], icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>' },
        { num: '04', title: 'Game Development', desc: 'Mengembangkan game 2D/3D dengan Unity. Fokus pada gameplay interaktif, pengembangan sistem, dan optimasi performa.', pills: ['Unity Engine', 'C#', 'Game Mechanics', 'Cross Platform'], icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="15" y1="13" x2="15.01" y2="13"/><line x1="18" y1="11" x2="18.01" y2="11"/><rect x="2" y="6" width="20" height="12" rx="2"/></svg>' },
        { num: '05', title: 'Augmented Reality Development', desc: 'Membuat aplikasi AR dengan Unity untuk menghadirkan pengalaman inovatif, interaktif, dan edukatif di perangkat Android.', pills: ['Unity AR', 'Image Tracking', 'Interactive Learning', 'Android'], icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>' },
        { num: '06', title: 'Multimedia Design', desc: 'Produksi konten visual profesional seperti desain grafis, editing video, dan audio untuk mendukung branding dan promosi.', pills: ['Photo Editing', 'Video Editing', 'Audio Editing', 'Graphic Design'], icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg>' }
      ],
      projects: [
        { category: 'Website', num: '01', name: 'Seblak Teh Isum', desc: 'Website sistem informasi pemesanan makanan berbasis web yang mengintegrasikan fitur Admin dan Pelanggan untuk mengelola menu, pesanan, dan data transaksi.', tags: ['HTML', 'CSS', 'PHP', 'CodeIgniter', 'MySQL'], type: 'Technology', img: 'assets/proyek-it/Website/STI.webp' },
        { category: 'Website', num: '02', name: 'Suaramayana', desc: 'Website informasi budaya Indonesia yang menyajikan berbagai konten mengenai kekayaan budaya Nusantara, seperti tradisi, seni, dan warisan budaya.', tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'], type: 'Technology', img: 'assets/proyek-it/Website/SRM.png' },
        { category: 'Website', num: '03', name: 'Star Playstation', desc: 'Website sistem informasi penyewaan konsol PlayStation berbasis web yang mengintegrasikan fitur Admin dan Pelanggan untuk mengelola konsol, penyewaan, dan transaksi.', tags: ['HTML', 'CSS', 'PHP', 'CodeIgniter', 'MySQL'], type: 'Technology', img: 'assets/proyek-it/Website/STR.png' },
        { category: 'Website', num: '04', name: 'Cafe 21', desc: 'Website sistem informasi pemesanan menu kafe berbasis web yang mengintegrasikan fitur Admin dan Pelanggan untuk mengelola menu, pesanan, dan transaksi.', tags: ['HTML', 'CSS', 'PHP', 'CodeIgniter', 'MySQL'], type: 'Technology', img: 'assets/proyek-it/Website/CFE.png' },
        { category: 'Website', num: '05', name: 'BIT Store', desc: 'Website sistem informasi penjualan pakaian berbasis web yang mengintegrasikan fitur Admin dan User untuk mengelola produk, kategori, dan transaksi sekaligus memberikan pengalaman belanja yang responsif.', tags: ['HTML', 'CSS', 'PHP', 'CodeIgniter', 'MySQL'], type: 'Technology', img: 'assets/proyek-it/Website/BIT.png' },
        { category: 'Website', num: '06', name: 'Masak Yuk!', desc: 'Website sistem informasi berbagi resep makanan berbasis web yang memungkinkan pengguna membuat, membagikan, dan menjelajahi berbagai resep masakan secara interaktif.', tags: ['HTML', 'CSS', 'PHP', 'CodeIgniter', 'MySQL'], type: 'Technology', img: 'assets/proyek-it/Website/MY.png' },
        { category: 'Website', num: '07', name: 'Ngopi Yuk!', desc: 'Website landing page yang dirancang sebagai media informasi dan promosi untuk sebuah kafe dengan tampilan modern, responsif, dan mudah diakses.', tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'UI/UX Design'], type: 'Technology', img: 'assets/proyek-it/Website/OpiYuk.png' },
        { category: 'Website', num: '08', name: 'SimpaiDaya', desc: 'Website sistem informasi penjualan aksesori khas suku Dayak yang mengintegrasikan fitur Admin dan User untuk mengelola produk, transaksi, dan memperkenalkan produk budaya lokal.', tags: ['HTML', 'CSS', 'PHP', 'CodeIgniter', 'MySQL'], type: 'Technology', img: 'assets/proyek-it/Website/SMP.png' },
        { category: 'Website', num: '09', name: 'Seblak Isum', desc: 'Website sistem informasi pemesanan makanan berbasis web yang mengintegrasikan fitur Admin dan Pelanggan untuk mengelola menu, pesanan, dan seluruh proses transaksi.', tags: ['HTML', 'CSS', 'PHP', 'CodeIgniter', 'MySQL'], type: 'Technology', img: 'assets/proyek-it/Website/SBL.png' },
        { category: 'Website', num: '10', name: 'All Phone Web', desc: 'Website sistem informasi penjualan handphone berbasis web yang mengintegrasikan fitur Admin dan User untuk mengelola produk, kategori, dan transaksi dengan antarmuka modern.', tags: ['HTML', 'CSS', 'PHP', 'CodeIgniter', 'MySQL'], type: 'Technology', img: 'assets/proyek-it/Website/APW.png' },
        { category: 'Aplikasi', num: '11', name: 'Tandara', desc: 'merupakan aplikasi pembelajaran bahasa isyarat berbasis Augmented Reality (AR) yang memanfaatkan teknologi hand tracking untuk menghadirkan pengalaman belajar yang interaktif. Aplikasi ini menyediakan berbagai materi, permainan edukatif, serta mode multiplayer untuk mendukung proses belajar bahasa isyarat secara lebih menyenangkan.', tags: ['Android', 'Augmented Reality (AR)', 'Unity', 'Media Interaktif'], type: 'Technology', img: 'assets/proyek-it/Aplikasi/TDR.png' },
        { category: 'Aplikasi', num: '12', name: 'Catatan Praktis', desc: 'merupakan aplikasi pencatatan harian yang dirancang untuk membantu pengguna membuat, mengelola, dan menyimpan berbagai catatan secara mudah. Aplikasi ini menawarkan antarmuka yang sederhana, ringan, dan responsif sehingga nyaman digunakan dalam aktivitas sehari hari.', tags: ['Android', 'Android Studio'], type: 'Technology', img: 'assets/proyek-it/Aplikasi/ApplikasiCatatan.png' },
        { category: 'Aplikasi', num: '13', name: 'Hervian Downloader', desc: 'merupakan aplikasi utilitas yang memudahkan pengguna mengunduh video dari berbagai platform media sosial, seperti Instagram, YouTube, dan TikTok. Selain itu, aplikasi ini juga menyediakan fitur konversi gambar menjadi dokumen PDF dalam satu aplikasi yang praktis dan mudah digunakan.', tags: ['Android', 'Android Studio'], type: 'Technology', img: 'assets/proyek-it/Aplikasi/HD.png' },
        { category: 'Aplikasi', num: '14', name: 'Checkin Aja', desc: 'merupakan desain antarmuka (UI/UX) aplikasi pemesanan hotel yang dirancang untuk memberikan pengalaman pengguna yang modern, intuitif, dan mudah digunakan. Desain ini mencakup alur pencarian hotel, pemesanan kamar, serta navigasi yang berfokus pada kenyamanan pengguna.', tags: ['Android', 'Android Studio'], type: 'Technology', img: 'assets/proyek-it/Aplikasi/AplikasiCheckin.png' },
        { category: 'Aplikasi', num: '15', name: 'Aplikasi Laundry', desc: 'merupakan aplikasi manajemen laundry yang membantu pemilik usaha dalam mengelola data pelanggan, pesanan, dan proses layanan laundry. Aplikasi ini menggunakan penyimpanan lokal pada perangkat sehingga seluruh data dapat dikelola secara praktis tanpa memerlukan database eksternal.', tags: ['Android', 'Android Studio'], type: 'Technology', img: 'assets/proyek-it/Aplikasi/AplikasiLaundry.png' },
        { category: 'Aplikasi', num: '16', name: 'Belajar Buah Buahan', desc: 'merupakan aplikasi edukasi yang dirancang untuk membantu pengguna mengenal berbagai jenis buah melalui media pembelajaran interaktif. Aplikasi ini menyajikan materi dalam bentuk ilustrasi 2D serta visualisasi 3D berbasis Augmented Reality (AR) sehingga proses belajar menjadi lebih menarik dan menyenangkan.', tags: ['Android', 'Augmented Reality (AR)', 'Unity', 'Media Interaktif'], type: 'Technology', img: 'assets/proyek-it/Aplikasi/BBB.png' },
        { category: 'Aplikasi', num: '17', name: 'VB Kasir Hotel', desc: 'merupakan aplikasi desktop sistem informasi manajemen hotel yang membantu pengelolaan data pelanggan, reservasi kamar, transaksi, dan administrasi operasional. Aplikasi ini dilengkapi dengan database sehingga seluruh proses pengelolaan hotel dapat dilakukan secara terintegrasi dan efisien.', tags: ['Desktop', 'Visual Studio 2022'], type: 'Technology', img: 'assets/proyek-it/Aplikasi/VBH.png' },
        { category: 'Aplikasi', num: '18', name: 'VB Kasir Restoran', desc: 'merupakan aplikasi desktop sistem informasi kasir restoran yang membantu pengelolaan menu, transaksi penjualan, data pelanggan, dan laporan penjualan. Aplikasi ini dilengkapi dengan database untuk mendukung operasional restoran secara lebih terstruktur dan efisien.', tags: ['Desktop', 'Visual Studio 2022'], type: 'Technology', img: 'assets/proyek-it/Aplikasi/VBR.png' },
        { category: 'Game', num: '19', name: 'Pedivi Garden', desc: 'merupakan game simulasi berkebun yang menggabungkan pengelolaan pertanian dengan sentuhan budaya Indonesia. Pemain dapat menanam, merawat, memanen, dan menjual hasil kebun, sekaligus belajar mengelola keuangan dalam lingkungan yang menghadirkan bangunan khas daerah, pakaian adat, dan nuansa budaya Indonesia yang autentik.', tags: ['Unity', 'C#', 'Pengembangan Game', 'Media Interaktif'], type: 'Technology', img: 'assets/proyek-it/Game/PediviBanner.png' },
        { category: 'Game', num: '20', name: 'Escavia', desc: 'merupakan game Virtual Reality (VR) bertema simulasi bencana yang memberikan pengalaman interaktif dalam menghadapi berbagai bencana alam maupun nonalam. Game ini dirancang untuk meningkatkan pemahaman dan kesiapsiagaan pemain melalui simulasi yang imersif dan realistis.', tags: ['Unity', 'C#', 'Pengembangan Game', 'Media Interaktif'], type: 'Technology', img: 'assets/proyek-it/Game/EscaviaBAnner.jpeg' },
        { category: 'Game', num: '21', name: 'BizBreak', desc: 'merupakan game horor bertahan hidup yang mengajak pemain melarikan diri dari rumah berhantu setelah diculik oleh makhluk misterius. Pemain harus memecahkan teka-teki, menghindari ancaman, dan mencari jalan keluar untuk bertahan hidup hingga berhasil meloloskan diri.', tags: ['Unity', 'C#', 'Pengembangan Game', 'Media Interaktif'], type: 'Technology', img: 'assets/proyek-it/Game/BizBreak.png' },
        { category: 'Game', num: '22', name: 'Tank Battle', desc: 'merupakan game aksi bertema peperangan yang menghadirkan pertempuran antarnegara menggunakan kendaraan tempur. Pemain dituntut menyusun strategi, mengendalikan tank, dan mengalahkan lawan untuk memenangkan setiap pertempuran.', tags: ['Unity', 'C#', 'Pengembangan Game', 'Media Interaktif'], type: 'Technology', img: 'assets/proyek-it/Game/Tank Battle.png' },
        { category: 'Foto', num: '23', name: 'Portrait Double Exposure', desc: 'Hasil editing foto portrait dengan teknik double exposure yang menggabungkan elemen visual artistik untuk menghasilkan komposisi yang unik, kreatif, dan berkarakter.', tags: ['Adobe Photoshop'], type: 'Technology', img: 'assets/proyek-it/Foto/ET1.png' },
        { category: 'Foto', num: '24', name: 'Urban City Manipulation', desc: 'Manipulasi foto bertema perkotaan yang mengombinasikan efek digital, color grading, dan komposisi modern untuk menciptakan visual yang estetik dan menarik.', tags: ['Adobe Photoshop'], type: 'Technology', img: 'assets/proyek-it/Foto/ET2.png' },
        { category: 'Foto', num: '25', name: 'Horror Poster Design', desc: 'Desain poster bertema horor yang menggabungkan teknik manipulasi foto, pencahayaan, dan efek visual sinematik untuk menghasilkan karya yang dramatis dan penuh atmosfer.', tags: ['Adobe Photoshop'], type: 'Technology', img: 'assets/proyek-it/Foto/ET3.png' },
        { category: 'Foto', num: '26', name: 'Color Grading Restoration', desc: 'Proses photo retouching dan color grading yang mengubah tampilan foto menjadi lebih hidup melalui penyesuaian warna, pencahayaan, dan detail secara profesional.', tags: ['Adobe Photoshop'], type: 'Technology', img: 'assets/proyek-it/Foto/ET5.png' },
        { category: 'Foto', num: '27', name: 'Health Awareness Poster', desc: 'Desain poster edukasi kesehatan yang menyajikan informasi mengenai pentingnya konsumsi air putih melalui tata letak yang informatif, ilustrasi visual, dan komposisi yang menarik sehingga pesan dapat disampaikan secara efektif.', tags: ['Adobe Photoshop'], type: 'Technology', img: 'assets/proyek-it/Foto/ET6.webp' },
        { category: 'Foto', num: '28', name: 'Educational Campaign Poster', desc: 'Desain poster kampanye edukasi yang mengangkat pentingnya budaya membaca melalui perpaduan tipografi, ilustrasi, dan tata letak visual yang informatif, menarik, serta mudah dipahami.', tags: ['Adobe Photoshop'], type: 'Technology', img: 'assets/proyek-it/Foto/ET7.jpg' },
        { category: 'Video', num: '29', name: 'Happy Tos Commercial Advertisement', desc: 'Video iklan komersial produk makanan ringan Happy Tos yang dikemas dengan konsep promosi kreatif melalui perpaduan motion graphics, transisi, dan visual yang menarik untuk meningkatkan daya tarik produk.', tags: ['Adobe Premiere Pro', 'Adobe Audition'], type: 'Technology', img: 'assets/proyek-it/Video/HPT.jpg' },
        { category: 'Video', num: '30', name: 'Amikom Promotional Advertisement', desc: 'Video promosi yang memperkenalkan lingkungan dan fasilitas Universitas Amikom dengan penyampaian visual yang menarik, informatif, dan komunikatif untuk menarik minat calon mahasiswa.', tags: ['Adobe Premiere Pro', 'Adobe Audition'], type: 'Technology', img: 'assets/proyek-it/Video/IklanAmikom.jpg' },
        { category: 'Video', num: '31', name: 'Kirana Short Film', desc: 'Film pendek yang mengangkat alur cerita sederhana dengan pengemasan sinematik melalui teknik editing, color grading, transisi, dan motion graphics untuk memberikan pengalaman visual yang lebih menarik.', tags: ['Adobe Premiere Pro', 'Adobe Audition'], type: 'Technology', img: 'assets/proyek-it/Video/Kirana.jpg' },
        { category: 'Video', num: '32', name: 'Sate Taichan Promotional Video', desc: 'Video promosi kuliner yang menampilkan produk Sate Taichan dengan pengambilan gambar sinematik, color grading, dan motion graphics untuk meningkatkan daya tarik visual sebagai media pemasaran.', tags: ['Adobe Premiere Pro', 'Adobe Audition'], type: 'Technology', img: 'assets/proyek-it/Video/ST.jpg' },
        { category: 'Video', num: '33', name: 'Qtela Commercial Advertisement', desc: 'Video iklan komersial produk Qtela yang dikembangkan dengan konsep visual modern, editing dinamis, serta penyampaian informasi yang efektif untuk mendukung promosi produk.', tags: ['Adobe Premiere Pro', 'Adobe Audition'], type: 'Technology', img: 'assets/proyek-it/Video/VD1.jpg' },
        { category: 'Video', num: '34', name: 'Goliath Cover Music Video', desc: 'Video musik cover lagu Masih Disini Masih Denganmu dari Goliath yang dipadukan dengan teknik editing, color grading, dan motion graphics untuk menghasilkan tampilan visual yang lebih menarik dan sinematik.', tags: ['Adobe Premiere Pro', 'Adobe Audition'], type: 'Technology', img: 'assets/proyek-it/Video/VD2.jpg' }
      ],
      journey: [
        {
          year: '2019 - 2022',
          badge: 'Rekayasa Perangkat Lunak',
          title: 'SMK TI AIRLANGGA SAMARINDA',
          desc: 'Selama menempuh pendidikan di SMK TI Airlangga Samarinda, saya memperoleh berbagai pengalaman dalam pengembangan perangkat lunak, khususnya di bidang website dan pemrograman. Pada tahun terakhir, saya dipercaya menjadi asisten guru produktif untuk membantu membimbing siswa dalam mempersiapkan Uji Kompetensi Keahlian (UKK). Saya juga berhasil meraih penghargaan sebagai peraih nilai Uji Kompetensi Keahlian (UKK) tertinggi di seluruh jurusan dan kelas.'
        },
        {
          year: 'June, 2022',
          badge: 'Aplikasi Reservasi Hotel Berbasis Desktop',
          title: 'GRADUATION SMK TI AIRLANGGA SAMARINDA',
          desc: '<ul><li>Berhasil meraih penghargaan sebagai peraih nilai Uji Kompetensi Keahlian (UKK) tertinggi di antara seluruh jurusan dan kelas.</li></ul>'
        },
        {
          year: '2022 - 2026',
          badge: '(S1) Sistem Informasi',
          title: 'UNIVERSITAS AMIKOM YOGYAKARTA',
          desc: 'Selama menempuh pendidikan di Universitas Amikom Yogyakarta, saya aktif mengembangkan kemampuan dalam pengembangan website, game, aplikasi Augmented Reality (AR), serta desain multimedia melalui berbagai proyek dan kompetisi. Pengalaman tersebut mengantarkan saya meraih prestasi pada kompetisi teknologi tingkat nasional di bidang Game dan Media Interaktif AR/VR.',
          featured: true
        },
        {
          year: 'July, 2025',
          badge: 'Prestasi',
          title: 'AMICTA AMIKOM YOGYAKARTA',
          desc: '<span class="desc-location">Aplikasi TANDARA</span><ul><li>Berhasil meraih Juara 1 Kategori Media Interaktif AR/VR.</li></ul><span class="desc-location" style="margin-top: 16px;">Game PEDIVI Garden</span><ul><li>Berhasil meraih Juara 1 Kategori Game.</li></ul>'
        },
        {
          year: 'January, 2025',
          badge: 'Game PEDIVI Garden',
          title: 'GEMASI AMIKOM YOGYAKARTA',
          desc: '<ul><li>Berhasil meraih Juara 2 Kategori Media Interaktif AR/VR.</li><li>Berhasil meraih Juara 2 Kategori Proyek Favorit.</li></ul>'
        },
        {
          year: '1 Maret 2021 - 6 Mei 2021',
          badge: 'Magang Web Developer',
          title: 'PT. GREENNUSA COMPUTINDO',
          desc: '<span class="desc-location">Jl. Lerong II, Kota Samarinda, Kalimantan Timur</span><ul><li>Mengembangkan website sistem informasi makanan berbasis web selama kegiatan magang.</li><li>Mendesain dan membangun tampilan website menggunakan HTML, CSS, dan Laravel.</li><li>Berkolaborasi dengan tim dalam proses pengembangan dan perbaikan website perusahaan.</li><li>Melakukan pengujian dan penyempurnaan website untuk memastikan seluruh fitur berjalan dengan baik.</li></ul>'
        }
      ],
      contacts: [
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>', label: 'Email', val: 'hervianhdw@gmail.com', href: 'mailto:hervianhdw@gmail.com' },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>', label: 'LinkedIn', val: 'linkedin.com/in/alfonsushervianhadiwinata', href: 'https://id.linkedin.com/in/alfonsushervianhadiwinata' },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>', label: 'Instagram', val: '@yan_hervian', href: 'https://www.instagram.com/yan_hervian/' }
      ]
    }
  };

  let mode = location.hash === '#technology' ? 'technology' : 'business';
  let entered = false;
  let transitioning = false;
  let landingDone = false;
  let mx = 0, my = 0, cx = 0, cy = 0, raf = 0;

  // Fluid inertia spotlight coordinates
  let targetLightX = 50, targetLightY = 45;
  let currentLightX = 50, currentLightY = 45;
  let isUserHovering = false;
  let lastUserInteraction = 0;

  // Dust Canvas Particles
  const dustCanvas = document.getElementById('dustCanvas');
  const dustCtx = dustCanvas ? dustCanvas.getContext('2d') : null;
  let dustWidth = 0, dustHeight = 0;
  const dustParticles = [];
  const DUST_COUNT = 130;

  function initDust() {
    if (!dustCanvas) return;
    const rect = dustCanvas.getBoundingClientRect();
    dustWidth = dustCanvas.width = Math.round(rect.width || dustCanvas.offsetWidth || window.innerWidth);
    dustHeight = dustCanvas.height = Math.round(rect.height || dustCanvas.offsetHeight || window.innerHeight);
    dustParticles.length = 0;
    for (let i = 0; i < DUST_COUNT; i++) {
      dustParticles.push({
        x: Math.random() * dustWidth,
        y: Math.random() * dustHeight,
        vx: (Math.random() - 0.5) * 0.55,
        vy: -0.2 - Math.random() * 0.38,
        size: Math.random() * 2.6 + 1.1,
        baseAlpha: Math.random() * 0.38 + 0.25,
        twinkle: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.02 + Math.random() * 0.04
      });
    }
  }
  window.addEventListener('resize', initDust);
  initDust();

  // Ambient Floating Dust Particles (Landing Page)
  const landingDustCanvas = document.getElementById('landingDust');
  const landingDustCtx = landingDustCanvas ? landingDustCanvas.getContext('2d') : null;
  let landingDustWidth = 0, landingDustHeight = 0;
  const landingDustParticles = [];
  const LANDING_DUST_COUNT = 85;

  function initLandingDust() {
    if (!landingDustCanvas) return;
    const rect = landingDustCanvas.getBoundingClientRect();
    landingDustWidth = landingDustCanvas.width = Math.round(rect.width || window.innerWidth);
    landingDustHeight = landingDustCanvas.height = Math.round(rect.height || window.innerHeight);
    landingDustParticles.length = 0;
    for (let i = 0; i < LANDING_DUST_COUNT; i++) {
      landingDustParticles.push({
        x: Math.random() * landingDustWidth,
        y: Math.random() * landingDustHeight,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -0.15 - Math.random() * 0.28,
        size: Math.random() * 2.2 + 0.9,
        baseAlpha: Math.random() * 0.32 + 0.18,
        twinkle: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.015 + Math.random() * 0.035
      });
    }
  }
  window.addEventListener('resize', initLandingDust);
  initLandingDust();

  // Hybrid Pointer Aura
  const cursorRing = document.getElementById('cursorRing');
  let mouseX = -100, mouseY = -100;
  let ringX = -100, ringY = -100;

  // Landing Spotlight Cursor & Mobile Touch Color Reveal
  let landingSpotX = -500, landingSpotY = -500;
  let targetSpotX = -500, targetSpotY = -500;
  let landingSpotRaf = null;
  let isTouchActive = false;
  let lastTouchTime = 0;

  const isTouchDevice = () => ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || window.matchMedia('(pointer: coarse)').matches;

  function resetLandingSpotlight() {
    if (landingSpotRaf) {
      cancelAnimationFrame(landingSpotRaf);
      landingSpotRaf = null;
    }
    isTouchActive = false;
    if (landing) {
      landing.classList.remove('has-spotlight');
      landing.style.setProperty('--cursor-x', '-500px');
      landing.style.setProperty('--cursor-y', '-500px');
    }
    landingSpotX = -500;
    landingSpotY = -500;
    targetSpotX = -500;
    targetSpotY = -500;
  }

  function updateLandingSpotlight() {
    if (landingDone) {
      landingSpotRaf = null;
      return;
    }
    landingSpotX += (targetSpotX - landingSpotX) * 0.22;
    landingSpotY += (targetSpotY - landingSpotY) * 0.22;

    landing.style.setProperty('--cursor-x', `${landingSpotX.toFixed(1)}px`);
    landing.style.setProperty('--cursor-y', `${landingSpotY.toFixed(1)}px`);

    if (Math.abs(targetSpotX - landingSpotX) > 0.1 || Math.abs(targetSpotY - landingSpotY) > 0.1) {
      landingSpotRaf = requestAnimationFrame(updateLandingSpotlight);
    } else {
      landingSpotRaf = null;
    }
  }

  function activateSpotlightAt(x, y) {
    if (landingDone) return;
    targetSpotX = x;
    targetSpotY = y;

    if (!landing.classList.contains('has-spotlight')) {
      landingSpotX = targetSpotX;
      landingSpotY = targetSpotY;
      landing.style.setProperty('--cursor-x', `${landingSpotX.toFixed(1)}px`);
      landing.style.setProperty('--cursor-y', `${landingSpotY.toFixed(1)}px`);
      landing.classList.add('has-spotlight');
    }

    if (!landingSpotRaf) {
      landingSpotRaf = requestAnimationFrame(updateLandingSpotlight);
    }
  }

  // Pointermove for Mouse / Stylus
  window.addEventListener('pointermove', (e) => {
    if (e.pointerType === 'touch') return; // Handled by touch events
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (cursorRing && !cursorRing.classList.contains('visible')) {
      cursorRing.classList.add('visible');
    }

    if (!landingDone) {
      activateSpotlightAt(e.clientX, e.clientY);
    }
  });

  // Touch events for Mobile & Tablet (iPad, Android, iPhones)
  window.addEventListener('touchstart', (e) => {
    if (landingDone) return;
    const t = e.touches[0];
    if (!t) return;
    isTouchActive = true;
    lastTouchTime = performance.now();
    activateSpotlightAt(t.clientX, t.clientY);
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (landingDone) return;
    const t = e.touches[0];
    if (!t) return;
    isTouchActive = true;
    lastTouchTime = performance.now();
    activateSpotlightAt(t.clientX, t.clientY);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isTouchActive = false;
    lastTouchTime = performance.now();
  }, { passive: true });

  window.addEventListener('touchcancel', () => {
    isTouchActive = false;
    lastTouchTime = performance.now();
  }, { passive: true });

  document.addEventListener('pointerleave', (e) => {
    if (e.pointerType === 'touch') return;
    if (cursorRing) cursorRing.classList.remove('visible');
    if (!landingDone && !isTouchDevice()) {
      landing.classList.remove('has-spotlight');
    }
  });

  document.addEventListener('pointerover', (e) => {
    if (cursorRing && e.target.closest('a, button, .project, .skill, .event, .lcard-target, .brand')) {
      cursorRing.classList.add('hover');
    }
  });
  document.addEventListener('pointerout', (e) => {
    if (cursorRing && e.target.closest('a, button, .project, .skill, .event, .lcard-target, .brand')) {
      cursorRing.classList.remove('hover');
    }
  });

  // Magnetic interactive elements
  function attachMagnetic(element, strength = 0.25) {
    element.addEventListener('pointermove', (e) => {
      const rect = element.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      element.style.transform = `translate3d(${(relX * strength).toFixed(1)}px, ${(relY * strength).toFixed(1)}px, 0)`;
    });
    element.addEventListener('pointerleave', () => {
      element.style.transform = '';
    });
  }

  function initMagnetics() {
    document.querySelectorAll('.back-btn, .nav-link').forEach(el => {
      attachMagnetic(el, 0.25);
    });
  }
  initMagnetics();

  // Bento Spotlight Cursor Tracking
  document.addEventListener('pointermove', (e) => {
    const card = e.target.closest('.project, .skill, .event');
    if (card) {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${(e.clientX - r.left).toFixed(1)}px`);
      card.style.setProperty('--mouse-y', `${(e.clientY - r.top).toFixed(1)}px`);
    }
  });

  // ===== AUTOMATIC CAROUSEL SLIDE (CALM & RELAXED INTERVAL) =====
  let autoSlideTimeout = null;
  let isUserInteracting = false;

  function stopAutoSlide() {
    if (autoSlideTimeout) {
      clearTimeout(autoSlideTimeout);
      autoSlideTimeout = null;
    }
  }

  function scheduleAutoSlide(delay = 2000) {
    if (transitioning || landingDone || isUserInteracting) return;
    stopAutoSlide();

    autoSlideTimeout = setTimeout(() => {
      if (transitioning || landingDone || isUserInteracting) return;

      const activeCard = lcards[activeIndex];
      if (activeCard) {
        // Step 1: Zoom In & Show Color
        activeCard.classList.add('auto-hover');

        // Step 2: Hold Zoom for a while, then Zoom Out
        autoSlideTimeout = setTimeout(() => {
          if (transitioning || landingDone || isUserInteracting) {
            activeCard.classList.remove('auto-hover');
            return;
          }
          activeCard.classList.remove('auto-hover');

          // Step 3: Wait for unzoom, then slide to Next Character
          autoSlideTimeout = setTimeout(() => {
            if (transitioning || landingDone || isUserInteracting) return;
            updateCarousel(activeIndex + 1, true);

            // Step 4: Repeat the cycle
            scheduleAutoSlide(1500);
          }, 1000); // Wait for zoom out animation

        }, 2000); // Hold the zoom/color duration
      }
    }, delay);
  }

  // ===== 3D COVERFLOW CAROUSEL LOGIC =====
  let activeIndex = 0; // 0: Business, 1: Technology
  const totalCards = lcards.length;

  function updateCarousel(newIndex, isFromNextArrow) {
    if (transitioning || landingDone) return;

    let direction = isFromNextArrow === undefined ? true : isFromNextArrow;

    if (newIndex < 0) newIndex = totalCards - 1;
    if (newIndex >= totalCards) newIndex = 0;

    if (newIndex === activeIndex) return;
    activeIndex = newIndex;

    lcards.forEach((card, idx) => {
      card.classList.remove('is-active', 'is-prev', 'is-next', 'is-hovered', 'lcard--selected', 'anim-in-next', 'anim-out-next', 'anim-in-prev', 'anim-out-prev', 'auto-hover');

      if (idx === activeIndex) {
        card.classList.add('is-active');
        // Animating IN
        if (direction) {
          card.classList.add('anim-in-next'); // Comes from Right
        } else {
          card.classList.add('anim-in-prev'); // Comes from Left
        }
      } else {
        // Animating OUT
        if (direction) {
          card.classList.add('anim-out-next'); // Goes to Left
        } else {
          card.classList.add('anim-out-prev'); // Goes to Right
        }
      }
    });
  }

  // Initial Carousel Layout
  updateCarousel(0, true);
  scheduleAutoSlide(4000);

  // Arrow Navigations
  if (carouselPrev) {
    carouselPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      stopAutoSlide();
      updateCarousel(activeIndex - 1, false);
      scheduleAutoSlide(6500);
    });
  }

  if (carouselNext) {
    carouselNext.addEventListener('click', (e) => {
      e.stopPropagation();
      stopAutoSlide();
      updateCarousel(activeIndex + 1, true);
      scheduleAutoSlide(6500);
    });
  }

  // Swipe / Drag Gestures (Mouse & Touch on Carousel Viewport)
  let dragStartX = 0;
  let dragStartY = 0;
  let isDragging = false;

  if (carouselViewport) {
    carouselViewport.addEventListener('pointerdown', (e) => {
      if (transitioning || landingDone) return;
      if (e.target.closest('.lcard-enter, .carousel-nav')) return;
      dragStartX = e.clientX;
      dragStartY = e.clientY;
      isDragging = true;
      stopAutoSlide();
    });

    window.addEventListener('pointerup', (e) => {
      if (!isDragging) return;
      isDragging = false;
      const diffX = e.clientX - dragStartX;
      const diffY = e.clientY - dragStartY;

      if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0) {
          // Swipe Left -> Left Button logic
          updateCarousel(activeIndex - 1, false);
        } else {
          // Swipe Right -> Right Button logic
          updateCarousel(activeIndex + 1, true);
        }
      }
      scheduleAutoSlide(6500);
    });
  }

  // Keyboard Arrow Navigation
  window.addEventListener('keydown', (e) => {
    if (transitioning || landingDone) return;
    if (e.key === 'ArrowLeft') {
      stopAutoSlide();
      updateCarousel(activeIndex - 1);
      scheduleAutoSlide(6500);
    } else if (e.key === 'ArrowRight') {
      stopAutoSlide();
      updateCarousel(activeIndex + 1);
      scheduleAutoSlide(6500);
    } else if (e.key === 'Enter') {
      const activeCard = lcards[activeIndex];
      if (activeCard) {
        if (activeCard.classList.contains('lcard--selected')) {
          enterPortfolio(activeCard);
        } else {
          activeCard.classList.add('lcard--selected');
        }
      }
    }
  });

  // Card Target Click & Interaction:
  // Click 1 -> reveals "Lihat Portofolio Ã¢â€ â€™" button
  // Click 2 (on button or card) -> enters portfolio
  ltargets.forEach(target => {
    const card = target.closest('.lcard');
    const cardIndex = parseInt(card.dataset.index, 10);

    card.addEventListener('click', (e) => {
      if (transitioning || landingDone) return;

      // If clicked the button directly:
      if (e.target.closest('.lcard-enter')) {
        enterPortfolio(card);
        return;
      }

      // If clicking a side card: slide that card to center!
      if (!card.classList.contains('is-active')) {
        stopAutoSlide();
        updateCarousel(cardIndex);
        scheduleAutoSlide(6500);
        return;
      }

      // If clicking active card:
      // 1st click: show "Lihat Portofolio Ã¢â€ â€™" button
      // 2nd click: enter portfolio
      if (card.classList.contains('lcard--selected')) {
        enterPortfolio(card);
      } else {
        stopAutoSlide();
        card.classList.add('lcard--selected');
        // Allow user to relax while button is displayed
        scheduleAutoSlide(9000);
      }
    });

    // Hover pause and elevation
    card.addEventListener('pointerenter', () => {
      if (card.classList.contains('is-active')) {
        isUserInteracting = true;
        stopAutoSlide();
        card.classList.add('is-hovered');
      }
    });

    card.addEventListener('pointerleave', () => {
      card.classList.remove('is-hovered');
      isUserInteracting = false;
      if (!card.classList.contains('lcard--selected')) {
        scheduleAutoSlide(4500);
      }
    });
  });

  // Click outside cards closes any open button
  window.addEventListener('click', (e) => {
    if (!e.target.closest('.lcard-target, .carousel-nav')) {
      lcards.forEach(c => c.classList.remove('lcard--selected'));
      scheduleAutoSlide(4000);
    }
  });

  function enterPortfolio(card) {
    if (transitioning || landingDone) return;
    const selectedMode = card.dataset.mode || (card.classList.contains('lcard--business') ? 'business' : 'technology');

    transitioning = true;
    mode = selectedMode;

    // 1. Prepare scene and portfolio underneath
    setScene(mode);
    renderPortfolio();
    window.scrollTo({ top: 0, behavior: 'auto' });
    initDust();

    // 2. Start portal morphing: character glides gracefully to center
    body.classList.remove('hero-ignited', 'entered');
    landing.classList.remove('landing--handover', 'leaving');
    body.classList.add('portal-morphing');

    const otherCard = card.id === 'lcardBusiness' ? lcardTechnology : lcardBusiness;
    landing.classList.add('landing--morphing');
    card.classList.add('lcard--morphing');
    if (otherCard) otherCard.classList.add('lcard--fading-out');

    // 3. Handover point (~720ms): Landing character arrives at center with full clarity.
    // It then seamlessly dissolves into glowing white light while Hero character blooms forth in rich animation!
    setTimeout(() => {
      landing.classList.add('landing--handover');
      body.classList.add('hero-ignited', 'entered');
      updateNavScroll();
    }, 720);

    // 4. Smooth fade-out of landing overlay
    setTimeout(() => {
      landing.classList.add('leaving');
    }, 1300);

    // 5. Clean completion
    setTimeout(() => {
      landingDone = true;
      transitioning = false;
      history.replaceState(null, '', '#' + mode);
      // NOW start observing all .sr elements Ã¢â‚¬â€ landing is gone
      document.querySelectorAll('.sr').forEach(el => srObserver.observe(el));
    }, 1800);
  }

  function setScene(next) {
    mode = next;
    scene.classList.toggle('tech', mode === 'technology');
    const d = data[mode];
    introKicker.textContent = d.kicker;
    introTitle.innerHTML = d.introTitle;
    introText.textContent = d.introText;
    if (entered) renderPortfolio();
  }

  function renderPortfolio() {
    const d = data[mode];
    navMode.textContent = d.kicker;
    heroMeta.textContent = d.heroMeta;
    heroTitle.innerHTML = d.heroTitle;
    heroCopy.textContent = d.heroCopy;
    heroDiscipline.textContent = d.kicker;
    aboutTitle.innerHTML = d.aboutTitle;
    aboutA.textContent = d.aboutA;
    aboutB.textContent = d.aboutB;
    contactCopy.textContent = d.contactCopy;

    // Update stats
    const s1Num = document.getElementById('stat1Num');
    const s1Label = document.getElementById('stat1Label');
    const s2Num = document.getElementById('stat2Num');
    const s2Label = document.getElementById('stat2Label');
    const s3Num = document.getElementById('stat3Num');
    const s3Label = document.getElementById('stat3Label');

    if (d.stats) {
      if (s1Num) s1Num.textContent = d.stats.s1Num;
      if (s1Label) s1Label.textContent = d.stats.s1Label;
      if (s2Num) s2Num.textContent = d.stats.s2Num;
      if (s2Label) s2Label.textContent = d.stats.s2Label;
      if (s3Num) s3Num.textContent = d.stats.s3Num;
      if (s3Label) s3Label.textContent = d.stats.s3Label;
    }

    // Render Skills Ã¢â‚¬â€ modern bento layout
    const svgIcons = {
      // Business icons
      'icon-strategy': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
      'icon-analysis': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><path d="M2 20h20"/></svg>`,
      'icon-product': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><path d="M3 17.5A3.5 3.5 0 0 0 6.5 21M3 14v.5"/><circle cx="6.5" cy="17.5" r="3.5"/></svg>`,
      'icon-communication': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
      'icon-solve': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
      'icon-execution': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
      // Tech icons
      'icon-frontend': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
      'icon-react': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2.5"/><path d="M12 2C6.5 2 2 6.8 2 12s4.5 10 10 10 10-4.8 10-10S17.5 2 12 2z" opacity="0"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></svg>`,
      'icon-uiux': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M7 8h10M7 12h6"/></svg>`,
      'icon-deploy': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>`,
      'icon-motion': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
      'icon-perf': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
      'icon-palette': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 0 0-10 10c0 5.5 4.5 10 10 10 2.2 0 4-1.8 4-4 0-.8-.3-1.6-.9-2.2-.6-.6-.9-1.4-.9-2.2 0-1.7 1.3-3 3-3h.5a3.5 3.5 0 0 0 3.4-4c-.7-4.8-4.5-8.6-9.1-8.6z"></path></svg>`,
      'icon-server': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
      'icon-cube': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21 16-9 5-9-5V8l9-5 9 5z"/><path d="m3.27 6.96 8.73 5.05 8.73-5.05"/><path d="M12 22V12"/></svg>`,
      'icon-multimedia': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg>`,
      'icon-store': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l1.5-6h15L21 9v2a2 2 0 0 1-4 0a2 2 0 0 1-4 0a2 2 0 0 1-4 0a2 2 0 0 1-4 0v-2z"></path><path d="M3 11v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9"></path></svg>`,
      'icon-laptop': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
      'icon-users': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`
    };

    skillGrid.innerHTML = d.skills.map((s, i) => {
      const icon = svgIcons[s.svgId] || svgIcons['icon-strategy'];
      const featuredClass = s.featured ? ' skill-card--featured' : '';
      const delay = i * 80;
      return `
          <div class="skill-card${featuredClass} sr sr-d${(i % 6) + 1}" style="--card-delay:${delay}ms">
            <div class="skill-card-top">
              <div class="skill-card-icon-wrap">
                <div class="skill-card-icon">${icon}</div>
              </div>
              ${s.level !== undefined ? `
              <div class="skill-card-level">
                <span class="skill-level-pct">${s.level}%</span>
              </div>
              ` : ''}
            </div>
            <div class="skill-card-body">
              <span class="skill-card-name">${s.name}</span>
              <span class="skill-card-desc">${s.desc}</span>
            </div>
            ${s.level !== undefined ? `
            <div class="skill-bar-wrap">
              <div class="skill-bar-track">
                <div class="skill-bar-fill" style="--skill-level:${s.level}%"></div>
              </div>
              <div class="skill-bar-dot" style="--skill-level:${s.level}%"></div>
            </div>
            ` : ''}
            <div class="skill-tags">${s.tags.map(t => `<span class="skill-tag">${t}</span>`).join('')}</div>
          </div>`;
    }).join('');

    // Render Services
    if (servicesGrid) {
      servicesGrid.innerHTML = d.services.map((s, i) => `
            <div class="service-card is-open sr sr-d${(i % 4) + 1}" style="cursor: pointer;">
              <div class="service-card-inner">
                <div class="service-arrow">
                  ${s.icon}
                </div>
                <div class="service-main">
                  <span class="service-title">${s.title}</span>
                  <div class="service-collapse">
                    <div class="service-collapse-inner">
                      <p class="service-desc">${s.desc}</p>
                      <div class="service-pills">${s.pills.map(p => `<span class="service-pill">${p}</span>`).join('')}</div>
                    </div>
                  </div>
                </div>
                <div class="service-num">${s.num}</div>
              </div>
            </div>`).join('');

      // Click to toggle open/close
      const serviceCards = servicesGrid.querySelectorAll('.service-card');
      serviceCards.forEach(card => {
        card.addEventListener('click', () => {
          card.classList.toggle('is-open');
        });

        // Spotlight mouse-tracking
        card.addEventListener('pointermove', e => {
          const r = card.getBoundingClientRect();
          card.style.setProperty('--sx', `${e.clientX - r.left}px`);
          card.style.setProperty('--sy', `${e.clientY - r.top}px`);
        });
      });
    }


    // Render Projects — 3D Fan Carousel
    const projectDots = document.getElementById('projectDots');
    const projectsFilters = document.getElementById('projectsFilters');

    let activeCategory = 'Semua';
    const filterCategories = mode === 'technology'
      ? ['Semua', 'Website', 'Aplikasi', 'Game', 'Foto', 'Video']
      : ['Semua', 'Analisis Performa', 'Banner Promosi', 'Desain Produk', 'Poster & Informasi'];

    function renderFilters() {
      if (!projectsFilters) return;
      projectsFilters.innerHTML = filterCategories.map(cat =>
        `<button class="filter-btn${cat === activeCategory ? ' active' : ''}" data-cat="${cat}">${cat}</button>`
      ).join('');

      [...projectsFilters.querySelectorAll('.filter-btn')].forEach(btn => {
        btn.addEventListener('click', (e) => {
          activeCategory = e.target.dataset.cat;
          renderFilters();
          renderProjectList();
        });
      });
    }


    // Track cleanup functions so we can destroy the old carousel before re-init
    let _carouselCleanup = null;

    function renderProjectList() {
      // --- 1. Destroy previous carousel ---
      if (_carouselCleanup) {
        _carouselCleanup();
        _carouselCleanup = null;
      }

      const wrap = document.querySelector('.projects-carousel-wrap');

      const filtered = activeCategory === 'Semua'
        ? d.projects
        : d.projects.filter(p => p.category === activeCategory);

      projectList.innerHTML = filtered.map((p, i) => `
              <article class="project-card" data-idx="${i}">
                <div class="project-thumb">
                  <div class="project-thumb-inner">
                    <div class="project-thumb-overlay"></div>
                    <span class="project-thumb-label">${p.category || p.type || ''}</span>
                    <span class="project-thumb-num">${p.num}</span>
                    ${p.img
          ? `<div class="project-mockup project-mockup-img"><img src="${p.img}" alt="${p.name}" loading="lazy"/></div>`
          : `<div class="project-mockup"><div class="project-mockup-bars"><span></span><span></span><span></span></div></div>`
        }
                  </div>
                </div>
                <div class="project-body">
                  <div class="project-body-top">
                    <span class="project-name">${p.name}</span>
                    <div class="project-arrow">→</div>
                  </div>
                  <p class="project-desc">${p.desc}</p>
                  <div class="project-tags">${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}</div>
                </div>
                <div class="project-card-dimmer"></div>
              </article>`).join('');

      if (projectDots) {
        projectDots.innerHTML = filtered.map((_, i) =>
          `<button class="projects-dot${i === 0 ? ' is-active' : ''}" data-i="${i}" aria-label="Project ${i + 1}"></button>`
        ).join('');
      }

      const total = filtered.length;

      // --- 2. Adaptive layout based on card count ---
      // Remove any previous layout classes
      wrap.classList.remove('layout-single', 'layout-grid', 'layout-carousel', 'layout-mobile-slider');

      if (total === 0) {
        wrap.innerHTML = '<p class="no-projects-msg">Belum ada proyek di kategori ini.</p>';
        return;
      } else if (window.innerWidth <= 768) {
        wrap.classList.add('layout-mobile-slider');
        
        _carouselCleanup = (function initMobileLoop() {
          const cards = wrap.querySelectorAll('.project-card');
          if (cards.length < 2) return () => {};
          
          let autoScrollTimer = setInterval(() => {
            let cardWidth = cards[0].offsetWidth;
            let gap = 16;
            let maxScroll = wrap.scrollWidth - wrap.clientWidth;
            
            if (wrap.scrollLeft + 10 >= maxScroll) {
              // Reached the end, loop back to start
              wrap.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
              // Move to next card
              wrap.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
            }
          }, 3000);
          
          const pause = () => clearInterval(autoScrollTimer);
          wrap.addEventListener('touchstart', pause, { passive: true });
          
          return function cleanup() {
            clearInterval(autoScrollTimer);
            wrap.removeEventListener('touchstart', pause);
          };
        })();
        return;
      } else if (total <= 3) {
        // Simple centered grid — no 3D
        wrap.classList.add('layout-grid');
        return;
      } else {
        wrap.classList.add('layout-carousel');
      }

      // --- 3. Carousel logic (only for 4+ cards) with proper cleanup ---
      _carouselCleanup = (function initCarousel() {
        const grid = document.getElementById('projectList');
        if (!grid || !wrap) return null;
        const cards = [...grid.querySelectorAll('.project-card')];
        const dots = projectDots ? [...projectDots.querySelectorAll('.projects-dot')] : [];
        const total = cards.length;
        if (total === 0) return null;

        const anglePerCard = 360 / total;

        // Dynamically calculate radius to prevent overlapping
        const getRadius = () => {
          const cardWidth = cards[0]?.offsetWidth || 300;
          // Circumference must be larger than total width of all cards combined
          // C = 2 * PI * r  =>  r = C / (2 * PI)
          // Add tight 5% padding space between cards (1.05 multiplier)
          const minR = (total * cardWidth * 1.05) / (2 * Math.PI);
          const w = wrap.offsetWidth || window.innerWidth;
          // Ensure a decent minimum radius for small screens, but respect minR
          return Math.max(minR, w * 0.45);
        };
        let radius = getRadius();

        let currentIdx = 0;
        let currentRotation = 0;
        let fanTimer = null;
        let isPaused = false;
        let isDragging = false;
        let hasDragged = false;
        let startX = 0;
        let dragStartRot = 0;

        function updateCardPositions() {
          cards.forEach((card, i) => {
            const angle = i * anglePerCard;
            card.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
          });
        }
        updateCardPositions();

        function updateVisuals(idx) {
          cards.forEach((card, i) => {
            let offset = i - idx;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;
            const absOffset = Math.abs(offset);

            // ONLY show 3 cards: the center one, and one on each side.
            if (absOffset > 1) {
              card.style.opacity = 0;
              card.style.visibility = 'hidden';
            } else {
              card.style.opacity = 1;
              card.style.visibility = 'visible';
            }

            let dimAlpha;
            if (absOffset === 0) dimAlpha = 0;
            else if (absOffset === 1) dimAlpha = 0.5;
            else dimAlpha = 1;

            const dimmer = card.querySelector('.project-card-dimmer');
            if (dimmer) dimmer.style.setProperty('--dim', dimAlpha);
            card.style.pointerEvents = absOffset === 0 ? 'auto' : 'none';
          });
          dots.forEach((dot, i) => dot.classList.toggle('is-active', i === idx));
        }

        function goToRotation(targetRot) {
          currentRotation = targetRot;
          grid.style.transform = `translateZ(-${radius}px) rotateY(${currentRotation}deg)`;
          const rawIdx = Math.round(-currentRotation / anglePerCard);
          currentIdx = ((rawIdx % total) + total) % total;
          updateVisuals(currentIdx);
        }

        function goToIndex(idx, direction = 0) {
          let steps = idx - currentIdx;
          if (direction === 0) {
            if (steps > total / 2) steps -= total;
            if (steps < -total / 2) steps += total;
          } else if (direction === 1) {
            if (steps <= 0) steps += total;
          } else if (direction === -1) {
            if (steps >= 0) steps -= total;
          }
          goToRotation(currentRotation - steps * anglePerCard);
        }

        function startAuto() {
          clearInterval(fanTimer);
          fanTimer = setInterval(() => {
            if (!isPaused && !isDragging) goToIndex(currentIdx + 1, 1);
          }, 1500); // Fast auto-rotation (1.5 seconds per card)
        }
        function stopAuto() { clearInterval(fanTimer); }

        // --- Event handlers (named so they can be removed) ---
        const onResize = () => {
          radius = getRadius();
          updateCardPositions();
          grid.style.transform = `translateZ(-${radius}px) rotateY(${currentRotation}deg)`;
        };

        let lastX = 0;
        const onPointerDown = (e) => {
          isDragging = true; hasDragged = false;
          startX = e.clientX;
          lastX = e.clientX;
          dragStartRot = currentRotation;
          stopAuto();
          grid.style.transition = 'none';
        };
        const onPointerMove = (e) => {
          if (!isDragging) return;
          lastX = e.clientX;
          const diffX = lastX - startX;
          if (Math.abs(diffX) > 5) hasDragged = true;
          
          let dragAmount = diffX * 0.2;
          
          // LOCK the visual spin to exactly 1 card distance using a rubber-band effect
          const maxDrag = anglePerCard * 0.85;
          if (dragAmount > maxDrag) {
            dragAmount = maxDrag + (dragAmount - maxDrag) * 0.1; // extreme resistance
          } else if (dragAmount < -maxDrag) {
            dragAmount = -maxDrag + (dragAmount + maxDrag) * 0.1; // extreme resistance
          }
          
          currentRotation = dragStartRot + dragAmount;
          grid.style.transform = `translateZ(-${radius}px) rotateY(${currentRotation}deg)`;
        };
        const onPointerUp = () => {
          if (!isDragging) return;
          isDragging = false;
          grid.style.transition = 'transform 500ms cubic-bezier(0.23, 1, 0.32, 1)';
          
          const diffX = lastX - startX;
          let targetRot = dragStartRot;
          
          // If dragged more than 20px, firmly snap exactly 1 card to left or right
          if (Math.abs(diffX) > 20) {
            if (diffX < 0) {
               targetRot = dragStartRot - anglePerCard;
            } else {
               targetRot = dragStartRot + anglePerCard;
            }
          }
          
          // STRICT SNAP: Ensure it always lands perfectly centered
          // even if the user touched it mid-animation!
          targetRot = Math.round(targetRot / anglePerCard) * anglePerCard;
          
          goToRotation(targetRot);
          startAuto();
        };
        const onEnter = () => { isPaused = true; };
        const onLeave = () => { isPaused = false; };
        
        // Support for 2-finger trackpad horizontal scrolling
        let wheelTimeout = null;
        const onWheel = (e) => {
          // Only capture if it's primarily a horizontal scroll
          if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 10) {
            e.preventDefault(); // Prevent browser back/forward navigation
            if (isDragging || wheelTimeout) return;
            
            stopAuto();
            // Move exactly 1 card based on scroll direction
            if (e.deltaX > 0) {
              goToIndex(currentIdx + 1, 1);
            } else {
              goToIndex(currentIdx - 1, -1);
            }
            startAuto();
            
            // Lock out further scroll events for 600ms to ensure 1 swipe = 1 card
            wheelTimeout = setTimeout(() => { wheelTimeout = null; }, 600);
          }
        };

        window.addEventListener('resize', onResize);
        wrap.addEventListener('pointerdown', onPointerDown);
        window.addEventListener('pointermove', onPointerMove);
        window.addEventListener('pointerup', onPointerUp);
        wrap.addEventListener('pointerenter', onEnter);
        wrap.addEventListener('pointerleave', onLeave);
        wrap.addEventListener('wheel', onWheel, { passive: false });

        dots.forEach((dot, i) => {
          dot.addEventListener('click', () => { stopAuto(); goToIndex(i, 0); startAuto(); });
        });
        cards.forEach((card, i) => {
          card.addEventListener('click', (e) => {
            if (hasDragged) { e.preventDefault(); return; }
            stopAuto(); goToIndex(i, 0); startAuto();
          });
        });

        goToRotation(0);
        startAuto();

        // --- Return cleanup function ---
        return function cleanup() {
          stopAuto();
          window.removeEventListener('resize', onResize);
          wrap.removeEventListener('pointerdown', onPointerDown);
          wrap.removeEventListener('pointermove', onPointerMove);
          wrap.removeEventListener('pointerup', onPointerUp);
          wrap.removeEventListener('pointerenter', onEnter);
          wrap.removeEventListener('pointerleave', onLeave);
          wrap.removeEventListener('wheel', onWheel);
        };
      })();
    }

    renderFilters();
    renderProjectList();




    // Render Journey Ã¢â‚¬â€  Vertical Glowing Timeline
    timeline.innerHTML = d.journey.map((j, i) => {
      // Alternate: even index (0,2) = card on RIGHT, odd index (1,3) = card on LEFT
      const isLeft = i % 2 !== 0;
      const isFeatured = j.featured;
      const featuredClass = isFeatured ? ' is-featured' : '';
      const animDelay = i * 120;

      const cardHTML = `
            <article class="journey-card sr sr-d${(i % 4) + 1}" style="animation-delay:${animDelay}ms">
              <div class="journey-year">${j.year}</div>
              <div class="journey-badge">${j.badge}</div>
              <h4>${j.title}</h4>
              <div class="journey-desc">${j.desc}</div>
            </article>`;

      const emptySlot = `<div></div>`;
      const nodeHTML = `
            <div class="journey-node">
              <div class="journey-dot"></div>
            </div>`;

      if (isLeft) {
        return `
            <div class="journey-row${featuredClass}">
              <div class="journey-slot-left">
                <div class="journey-connector"></div>
                ${cardHTML}
              </div>
              ${nodeHTML}
              <div class="journey-slot-right">${emptySlot}</div>
            </div>`;
      } else {
        return `
            <div class="journey-row${featuredClass}">
              <div class="journey-slot-left">${emptySlot}</div>
              ${nodeHTML}
              <div class="journey-slot-right">
                <div class="journey-connector"></div>
                ${cardHTML}
              </div>
            </div>`;
      }
    }).join('');

    // Journey Scroll Focus Observer
    const journeyFocusObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-selected');
        } else {
          entry.target.classList.remove('is-selected');
        }
      });
    }, { rootMargin: '-40% 0px -40% 0px' });
    
    // Defer observing so it doesn't fire immediately
    setTimeout(() => {
      document.querySelectorAll('.journey-row').forEach(el => journeyFocusObserver.observe(el));
    }, 1000);

    // Render Contact Links
    if (contactLinks) {
      contactLinks.innerHTML = d.contacts.map(c => `
            <a class="contact-link" href="${c.href}">
              <div class="contact-link-icon">${c.icon}</div>
              <div class="contact-link-body">
                <span class="contact-link-label">${c.label}</span>
                <span class="contact-link-val">${c.val}</span>
              </div>
              <span class="contact-link-arrow">&rarr;</span>
            </a>`).join('');
    }

    // Reset all .sr elements to hidden Ã¢â‚¬â€  do NOT observe yet.
    // Observation is deferred to after the entry transition completes
    // so IntersectionObserver fires after landing page has gone.
    document.querySelectorAll('.sr').forEach(el => {
      el.classList.remove('is-visible');
      srObserver.unobserve(el);
    });

    // Add click listeners to journey rows for interactive selected state
    document.querySelectorAll('.journey-row').forEach(row => {
      row.style.cursor = 'pointer';
      row.addEventListener('click', () => {
        const wasActive = row.classList.contains('is-selected');
        document.querySelectorAll('.journey-row').forEach(r => r.classList.remove('is-selected'));
        if (!wasActive) row.classList.add('is-selected');
      });
    });

    // Re-attach bento mouse tracking for skill and project cards
    attachBentoMouseTracking();
  }

  // Mouse spotlight tracking for bento cards
  function attachBentoMouseTracking() {
    document.querySelectorAll('.skill-card, .project-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', (e.clientX - r.left) + 'px');
        card.style.setProperty('--mouse-y', (e.clientY - r.top) + 'px');
      });
    });
  }


  // Scroll Reveal Observer
  const srObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        srObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  // Observe static .sr elements (section headings etc)
  document.querySelectorAll('.sr').forEach(el => srObserver.observe(el));

  function backToLanding() {
    if (transitioning) return;
    transitioning = true;

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Reverse step 1: Remove 'leaving' to reveal landing page, remove 'entered' and 'hero-ignited' to hide portfolio
    landing.classList.remove('leaving');
    body.classList.remove('entered', 'hero-ignited');
    body.classList.add('hero-exiting');

    setTimeout(() => {
      // Reverse step 2: Remove handover state to animate characters back
      landing.classList.remove('landing--handover');

      setTimeout(() => {
        // Reverse step 3: Clean up morphing states
        body.classList.remove('portal-morphing', 'hero-exiting');
        landing.classList.remove('landing--morphing');
        lcards.forEach(c => c.classList.remove('lcard--morphing', 'lcard--fading-out', 'lcard--selected', 'is-hovered'));

        entered = false;
        landingDone = false;
        transitioning = false;

        // Clean URL hash so back navigation doesn't trap
        if (location.hash) {
          history.replaceState(null, '', window.location.pathname + window.location.search);
        }

        resetLandingSpotlight();
        if (mouseX > 0 && mouseY > 0 && mouseX <= window.innerWidth && mouseY <= window.innerHeight) {
          activateSpotlightAt(mouseX, mouseY);
        } else if (isTouchDevice()) {
          // activateSpotlightAt(window.innerWidth * 0.5, window.innerHeight * 0.52);
        }

        initLandingDust();
        initDust();
        updateCarousel(activeIndex);
        isUserInteracting = false;
        scheduleAutoSlide(4000);
      }, 720); // wait for morphing to reverse
    }, 300); // wait for portfolio to fade out
  }

  // Click scroll cue to scroll smoothly to portfolio content
  const scrollCue = document.getElementById('scrollCue');
  if (scrollCue) {
    scrollCue.addEventListener('click', () => {
      const hero = document.querySelector('.portfolio-hero');
      if (hero) {
        hero.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
      }
    });
  }

  // Transparent navbar at top, frosted glass on scroll
  const portfolioNav = document.querySelector('.portfolio-nav');
  function updateNavScroll() {
    if (portfolioNav) {
      portfolioNav.classList.toggle('scrolled', window.scrollY > 40);
    }
  }
  window.addEventListener('scroll', updateNavScroll, { passive: true });
  updateNavScroll();

  // Back button
  backBtn.addEventListener('click', backToLanding);

  window.addEventListener('hashchange', () => {
    if (!location.hash || location.hash === '#' || location.hash === '#landing') {
      backToLanding();
      return;
    }
    if (location.hash === '#technology' || location.hash === '#business') {
      const next = location.hash === '#technology' ? 'technology' : 'business';
      setScene(next);
    }
  });

  intro.addEventListener('pointermove', e => {
    isUserHovering = true;
    lastUserInteraction = performance.now();
    const r = intro.getBoundingClientRect();
    mx = ((e.clientX - r.left) / r.width - 0.5) * 12;
    my = ((e.clientY - r.top) / r.height - 0.5) * -8;
    targetLightX = (((e.clientX - r.left) / r.width) * 100);
    targetLightY = (((e.clientY - r.top) / r.height) * 100);
  });

  intro.addEventListener('pointerleave', () => {
    isUserHovering = false;
  });

  intro.addEventListener('touchmove', e => {
    const t = e.touches[0];
    if (!t) return;
    isUserHovering = true;
    lastUserInteraction = performance.now();
    const r = intro.getBoundingClientRect();
    mx = ((t.clientX - r.left) / r.width - 0.5) * 8;
    my = ((t.clientY - r.top) / r.height - 0.5) * -5;
    targetLightX = (((t.clientX - r.left) / r.width) * 100);
    targetLightY = (((t.clientY - r.top) / r.height) * 100);
  }, { passive: true });

  function tick(now) {
    const nowTime = now || performance.now();

    if (nowTime - lastUserInteraction > 2000) {
      isUserHovering = false;
    }

    if (!isUserHovering) {
      const t = nowTime * 0.001;
      mx = Math.sin(t * 0.65) * 4.6 + Math.cos(t * 1.25) * 2.2;
      my = Math.cos(t * 0.55) * 3.2 + Math.sin(t * 0.95) * 1.5;
      targetLightX = 50 + Math.sin(t * 0.75) * 18 + Math.cos(t * 1.35) * 7;
      targetLightY = 44 + Math.cos(t * 0.65) * 12 + Math.sin(t * 1.1) * 5;
    }

    if (cursorRing) {
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;
      cursorRing.style.transform = `translate3d(${ringX.toFixed(1)}px, ${ringY.toFixed(1)}px, 0)`;
    }

    cx += (mx - cx) * 0.08;
    cy += (my - cy) * 0.08;

    currentLightX += (targetLightX - currentLightX) * 0.085;
    currentLightY += (targetLightY - currentLightY) * 0.085;
    if (sceneLight) {
      sceneLight.style.setProperty('--light-x', `${currentLightX.toFixed(2)}%`);
      sceneLight.style.setProperty('--light-y', `${currentLightY.toFixed(2)}%`);
    }

    // Ambient Spotlight on Active Character for Touch / Mobile Screens
    if (!landingDone && isTouchDevice() && !isTouchActive && (nowTime - lastTouchTime > 1500)) {
      /* const t = nowTime * 0.001;
      const centerX = window.innerWidth * 0.5 + Math.sin(t * 0.7) * (window.innerWidth * 0.06);
      const centerY = window.innerHeight * 0.52 + Math.cos(t * 0.85) * 18;
      activateSpotlightAt(centerX, centerY); */
    }

    // Floating Ambient Particles on Landing
    if (landingDustCtx && !landingDone && landingDustWidth > 0) {
      landingDustCtx.clearRect(0, 0, landingDustWidth, landingDustHeight);
      for (let i = 0; i < landingDustParticles.length; i++) {
        const p = landingDustParticles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.twinkle += p.twinkleSpeed;
        if (p.y < -10) p.y = landingDustHeight + 10;
        if (p.x < -10) p.x = landingDustWidth + 10;
        if (p.x > landingDustWidth + 10) p.x = -10;

        const tw = 0.82 + Math.sin(p.twinkle) * 0.28;
        const alpha = p.baseAlpha * tw;

        landingDustCtx.beginPath();
        landingDustCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        landingDustCtx.fillStyle = `rgba(255, 255, 255, ${alpha.toFixed(3)})`;
        landingDustCtx.fill();

        if (alpha > 0.36) {
          landingDustCtx.beginPath();
          landingDustCtx.arc(p.x, p.y, p.size * 2.2, 0, Math.PI * 2);
          landingDustCtx.fillStyle = `rgba(255, 255, 255, ${(alpha * 0.22).toFixed(3)})`;
          landingDustCtx.fill();
        }
      }
    }

    const isIntroInView = window.scrollY < window.innerHeight + 100;
    if (dustCtx && isIntroInView && dustWidth > 0) {
      dustCtx.clearRect(0, 0, dustWidth, dustHeight);
      const lightPixelX = (currentLightX / 100) * dustWidth;
      const lightPixelY = (currentLightY / 100) * dustHeight;
      const beamRadius = 450;

      for (let i = 0; i < dustParticles.length; i++) {
        const p = dustParticles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.twinkle += p.twinkleSpeed;
        if (p.y < -10) p.y = dustHeight + 10;
        if (p.x < -10) p.x = dustWidth + 10;
        if (p.x > dustWidth + 10) p.x = -10;

        const dx = p.x - lightPixelX;
        const dy = p.y - lightPixelY;
        const dist = Math.hypot(dx, dy);

        const tw = 0.82 + Math.sin(p.twinkle) * 0.28;
        let alpha = p.baseAlpha * tw;
        if (dist < beamRadius) {
          const factor = Math.pow(1 - dist / beamRadius, 1.25);
          alpha = Math.min(1, alpha + factor * 0.85);
        }

        dustCtx.beginPath();
        dustCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        dustCtx.fillStyle = `rgba(255, 255, 255, ${alpha.toFixed(3)})`;
        dustCtx.fill();

        if (alpha > 0.42) {
          dustCtx.beginPath();
          dustCtx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
          dustCtx.fillStyle = `rgba(255, 255, 255, ${(alpha * 0.25).toFixed(3)})`;
          dustCtx.fill();
        }
      }
    }

    const charX = cx * 2.2;
    const charY = -cy * 1.5;
    const rotX = -cy * 0.75;
    const rotY = cx * 1.1;
    characterWrap.style.transform =
      `translate3d(${charX.toFixed(2)}px, ${charY.toFixed(2)}px, 80px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`;

    const shadowX = (-cx * 3.5).toFixed(1);
    const shadowY = (34 + cy * 2.5).toFixed(1);
    characterWrap.style.setProperty('--shadow-x', `${shadowX}px`);
    characterWrap.style.setProperty('--shadow-y', `${shadowY}px`);

    if (bgWrap) {
      const bgX = (-cx * 1.2).toFixed(2);
      const bgY = (cy * 0.8).toFixed(2);
      bgWrap.style.transform = `translate3d(${bgX}px, ${bgY}px, -40px) scale(1.06)`;
    }

    if (introCopy) {
      const textX = (cx * 1.4).toFixed(2);
      const textY = (-cy * 1.0).toFixed(2);
      if (window.innerWidth > 850) {
        introCopy.style.transform = `translate3d(${textX}px, calc(-50% + ${textY}px), 45px) rotateX(${(-cy * 0.35).toFixed(2)}deg) rotateY(${(cx * 0.45).toFixed(2)}deg)`;
      } else {
        introCopy.style.transform = `translate3d(${textX}px, ${textY}px, 20px)`;
      }
    }

    raf = requestAnimationFrame(tick);
  }
  tick();

  setScene(mode);
  if (isTouchDevice()) {
    // activateSpotlightAt(window.innerWidth * 0.5, window.innerHeight * 0.52);
  }
})();
