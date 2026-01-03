# 📧 Setup EmailJS untuk Contact Form

## Langkah 1: Daftar di EmailJS

1. Buka https://www.emailjs.com/
2. Klik **"Sign Up Free"**
3. Daftar dengan email Anda (faiqmisbah019@gmail.com)
4. Verifikasi email Anda

---

## Langkah 2: Tambahkan Email Service

1. Setelah login, klik **"Email Services"** di sidebar
2. Klik **"Add New Service"**
3. Pilih **"Gmail"**
4. Klik **"Connect Account"**
5. Login dengan Gmail Anda (faiqmisbah019@gmail.com)
6. Berikan izin akses ke EmailJS
7. Beri nama service (misalnya: "Portfolio Contact")
8. **SIMPAN SERVICE ID** yang muncul (misal: `service_abc123`)

---

## Langkah 3: Buat Email Template

1. Klik **"Email Templates"** di sidebar
2. Klik **"Create New Template"**
3. Edit template dengan format berikut:

### Subject:

```
New Contact from {{from_name}} - {{subject}}
```

### Content (Body):

```
You have received a new message from your portfolio website.

From: {{from_name}}
Email: {{reply_to}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Klik **"Save"** di bagian atas
5. **SIMPAN TEMPLATE ID** (misal: `template_xyz789`)

---

## Langkah 4: Dapatkan Public Key

1. Klik **"Account"** di sidebar
2. Scroll ke bagian **"API Keys"**
3. Copy **Public Key** Anda (misal: `abcdefghijk123456`)

---

## Langkah 5: Masukkan Credentials ke Project

1. Buka file `.env` di root project
2. Ganti dengan credentials Anda:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcdefghijk123456
```

3. **SIMPAN FILE**

---

## Langkah 6: Update Contact.tsx

Buka file `components/Contact.tsx` dan ganti baris 18-22:

**DARI:**

```typescript
await emailjs.sendForm(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  formRef.current,
  "YOUR_PUBLIC_KEY"
);
```

**MENJADI:**

```typescript
await emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  formRef.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);
```

---

## Langkah 7: Restart Development Server

1. Stop server yang sedang berjalan (Ctrl + C di terminal)
2. Jalankan lagi: `npm run dev`
3. Buka http://localhost:3000
4. Test contact form!

---

## ✅ Cara Test

1. Isi form contact di website
2. Klik "Send Message"
3. Cek inbox Gmail Anda (faiqmisbah019@gmail.com)
4. Email dari contact form akan masuk dalam beberapa detik!

---

## 🎯 Catatan Penting

- **Free Plan**: 200 email per bulan (cukup untuk portfolio)
- Email akan masuk ke Gmail Anda yang terdaftar
- Jangan share credentials EmailJS ke public (sudah aman di .env)
- Saat deploy, tambahkan environment variables di hosting platform

---

## 🚀 Saat Deploy (Nanti)

Jika deploy ke Vercel/Netlify/hosting lain:

1. Tambahkan environment variables di dashboard hosting
2. Gunakan nama yang sama: `VITE_EMAILJS_SERVICE_ID`, dll
3. Masukkan nilai dari file `.env` Anda

---

## ❓ Troubleshooting

**Problem**: Email tidak masuk

- Pastikan credentials sudah benar di `.env`
- Check spam/junk folder di Gmail
- Pastikan sudah restart dev server setelah edit `.env`

**Problem**: Error saat kirim

- Buka Console browser (F12)
- Lihat error message
- Pastikan semua field form terisi

---

## 📞 Butuh Bantuan?

Jika ada masalah, screenshot error yang muncul dan tanya saya! 😊
