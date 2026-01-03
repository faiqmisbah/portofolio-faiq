# 🎯 Quick Reference - FaiqDev Portfolio

## ✅ Yang Sudah Selesai

### 1. Branding

- ✅ Nama diubah menjadi "FaiqDev" (Navbar & Footer)
- ✅ Copyright tahun 2026

### 2. Profil & Konten

- ✅ Nama: Faiq Misbah Yazdi
- ✅ Email: faiqmisbah019@gmail.com
- ✅ WhatsApp: +62 852-1855-5204
- ✅ Experience: 3+ tahun
- ✅ Projects: 10+ projects
- ✅ Bio dalam bahasa Inggris (UI/UX, Data Analysis, Programming)

### 3. Skills/Expertise

- ✅ ReactJS
- ✅ UI/UX Design
- ✅ Flutter
- ✅ Canva
- ✅ Python
- ✅ HTML/CSS
- ✅ Data Analysis

### 4. Social Media Links (Footer)

- ✅ WhatsApp → https://wa.me/6285218555204
- ✅ Instagram → https://www.instagram.com/faiqmisbah_/
- ✅ LinkedIn → https://www.linkedin.com/in/faiq-misbah/
- ✅ GitHub → https://github.com/faiqmisbah

### 5. Contact Form

- ✅ EmailJS integration
- ✅ Email langsung masuk ke Gmail Anda
- ✅ Loading state & success/error messages
- ✅ Form validation

---

## 📋 Yang Perlu Anda Lakukan

### 1. Setup EmailJS (PENTING!)

📄 **Baca:** [EMAILJS_SETUP.md](EMAILJS_SETUP.md)

**Langkah Singkat:**

1. Daftar di https://www.emailjs.com/
2. Connect Gmail Anda
3. Buat template email
4. Copy 3 credentials ke file `.env`
5. Restart server (`npm run dev`)

⏱️ **Estimasi waktu:** 10-15 menit

### 2. Ganti Foto Profil & Projects

📄 **Baca:** [FOTO_GUIDE.md](FOTO_GUIDE.md)

**Langkah Singkat:**

1. Siapkan foto (resize dulu!)
2. Taruh di folder `public/`
3. Edit `components/Hero.tsx` (foto profil)
4. Edit `components/Projects.tsx` (foto projects)

⏱️ **Estimasi waktu:** 20-30 menit

### 3. Edit Konten Projects

📄 **Edit file:** [components/Projects.tsx](components/Projects.tsx)

Ganti:

- Judul project
- Kategori
- Deskripsi
- Foto (setelah upload ke `public/projects/`)

---

## 🚀 Testing

### Test Contact Form

1. ✅ Setup EmailJS dulu
2. Buka http://localhost:3000/#contact
3. Isi form dan klik "Send Message"
4. Cek inbox Gmail Anda

### Test Social Media Links

Klik semua ikon di footer:

- ✅ WhatsApp → buka chat WA
- ✅ Instagram → buka profil IG
- ✅ LinkedIn → buka profil LinkedIn
- ✅ GitHub → buka profil GitHub

---

## 📦 Deploy (Nanti)

### Option 1: Vercel (Rekomendasi)

1. Push code ke GitHub
2. Import di https://vercel.com/
3. Tambah environment variables (3 dari EmailJS)
4. Deploy!

### Option 2: Netlify

1. Push code ke GitHub
2. Import di https://netlify.com/
3. Build: `npm run build`, Dir: `dist`
4. Tambah environment variables
5. Deploy!

---

## 📞 Need Help?

### EmailJS tidak jalan?

- Cek [EMAILJS_SETUP.md](EMAILJS_SETUP.md) step by step
- Pastikan `.env` sudah diisi dengan benar
- Restart server setelah edit `.env`

### Foto tidak muncul?

- Cek [FOTO_GUIDE.md](FOTO_GUIDE.md)
- Pastikan foto ada di folder `public/`
- Nama file harus sama persis (case-sensitive!)

### Project tidak jalan?

```bash
# Stop server (Ctrl+C)
# Install ulang dependencies
npm install

# Jalankan lagi
npm run dev
```

---

## 🎨 Customization

| Yang Mau Diubah    | File Location                                      | Line  |
| ------------------ | -------------------------------------------------- | ----- |
| Nama & Bio         | [components/Hero.tsx](components/Hero.tsx)         | 19-26 |
| Experience & Stats | [components/Hero.tsx](components/Hero.tsx)         | 43-57 |
| Skills             | [components/Skills.tsx](components/Skills.tsx)     | 4-11  |
| Projects           | [components/Projects.tsx](components/Projects.tsx) | 13-46 |
| Contact Info       | [components/Contact.tsx](components/Contact.tsx)   | 29-42 |
| Social Links       | [components/Footer.tsx](components/Footer.tsx)     | 14-30 |

---

## ✅ Checklist Sebelum Deploy

- [ ] EmailJS sudah setup dan test berhasil
- [ ] Semua foto sudah diganti (profil & projects)
- [ ] Info kontak sudah benar
- [ ] Social media links sudah ditest
- [ ] Project details sudah diupdate
- [ ] Test di mobile view (F12 > responsive mode)
- [ ] Push ke GitHub
- [ ] Deploy ke Vercel/Netlify
- [ ] Tambah environment variables di hosting
- [ ] Test contact form di production

---

## 🎉 Selesai!

Portfolio Anda sudah siap! Tinggal:

1. Setup EmailJS (10 menit)
2. Ganti foto (20 menit)
3. Edit project details (15 menit)
4. Deploy! (10 menit)

**Total waktu:** ~1 jam

Good luck! 🚀
