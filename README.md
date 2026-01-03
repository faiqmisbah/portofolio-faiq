# FaiqDev Portfolio

Portfolio website modern untuk Faiq Misbah Yazdi - UI/UX Designer, Data Analyst & Developer.

## 🚀 Features

- ✅ Responsive design (mobile-friendly)
- ✅ Modern dark theme dengan glassmorphism
- ✅ Contact form dengan EmailJS integration
- ✅ Smooth animations & transitions
- ✅ Social media integration (WhatsApp, Instagram, LinkedIn, GitHub)
- ✅ Project showcase dengan filter categories
- ✅ SEO optimized

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: TailwindCSS
- **Icons**: Material Symbols
- **Email Service**: EmailJS

## 📋 Prerequisites

- Node.js (v16 atau lebih baru)
- npm atau yarn

## 🏃 Run Locally

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Setup EmailJS (untuk contact form):**

   - Baca instruksi lengkap di [EMAILJS_SETUP.md](EMAILJS_SETUP.md)
   - Copy `.env.example` menjadi `.env`
   - Isi credentials EmailJS Anda

3. **Run development server:**

   ```bash
   npm run dev
   ```

4. **Buka browser:**
   - Local: http://localhost:3000/

## 📸 Mengelola Foto

Baca panduan lengkap di [FOTO_GUIDE.md](FOTO_GUIDE.md) untuk:

- Cara mengganti foto profil
- Cara menambah/edit foto projects
- Tips optimasi foto
- Troubleshooting

## 📁 Struktur Folder

````
faiqPortofolio/
├── components/
│   ├── Hero.tsx          # Hero section dengan profil
│   ├── Skills.tsx        # Skills & expertise
│   ├── Projects.tsx      # Project showcase
│   ├── Contact.tsx       # Contact form
│   ├── Navbar.tsx        # Navigation bar
│   └── Footer.tsx        # Footer dengan social links
├── public/
│   ├── profile.jpg       # Foto profil Anda
│   └── projects/         # Foto-foto project
├── App.tsx               # Main app component
├── index.tsx             # Entry point
├── .env                  # EmailJS credentials (jangan di-commit!)
└── README.md             # File ini

## 📧 Contact Form Setup

Contact form menggunakan EmailJS untuk mengirim email langsung ke Gmail Anda.

**Setup lengkap ada di:** [EMAILJS_SETUP.md](EMAILJS_SETUP.md)

### Quick Start:
1. Daftar di https://www.emailjs.com/
2. Setup Gmail service
3. Buat email template
4. Copy credentials ke `.env`
5. Restart server

## 🎨 Personalisasi

### Update Profil
Edit [components/Hero.tsx](components/Hero.tsx):
- Nama & bio
- Stats (years experience, projects)

### Update Skills
Edit [components/Skills.tsx](components/Skills.tsx):
- Tambah/hapus skills
- Ganti icon

### Update Projects
Edit [components/Projects.tsx](components/Projects.tsx):
- Tambah/edit project details
- Ganti foto (di folder `public/projects/`)
- Atur size (large/normal)

### Update Contact Info
Edit [components/Contact.tsx](components/Contact.tsx):
- Email
- WhatsApp number
- Location

### Update Social Media
Edit [components/Footer.tsx](components/Footer.tsx):
- Link ke profil sosmed Anda

## 🚢 Deploy

### Deploy ke Vercel (Rekomendasi)

1. Push code ke GitHub
2. Import project di https://vercel.com/
3. Tambahkan environment variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. Deploy!

### Deploy ke Netlify

1. Push code ke GitHub
2. Import project di https://netlify.com/
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Tambahkan environment variables (sama seperti Vercel)

## 📝 Scripts

```bash
npm run dev      # Run development server
npm run build    # Build for production
npm run preview  # Preview production build
````

## 🔒 Security

- File `.env` sudah ada di `.gitignore` (jangan commit credentials!)
- Environment variables aman di hosting platform
- Form validation untuk prevent spam

## 📞 Contact

**Faiq Misbah Yazdi**

- Email: faiqmisbah019@gmail.com
- WhatsApp: +62 852-1855-5204
- LinkedIn: https://www.linkedin.com/in/faiq-misbah/
- GitHub: https://github.com/faiqmisbah
- Instagram: https://www.instagram.com/faiqmisbah_/
- YouTube: https://www.youtube.com/@faiqmisbahy

## 📄 License

© 2026 FaiqDev Portfolio. All rights reserved.

---

Made with ❤️ by Faiq Misbah Yazdi

```

```
