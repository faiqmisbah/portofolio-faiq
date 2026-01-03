# 📁 Cara Mengelola Foto di Portfolio

## 🖼️ Struktur Folder untuk Foto

Buat struktur folder seperti ini:

```
faiqPortofolio/
├── public/
│   ├── profile.jpg         (Foto profil Anda)
│   └── projects/
│       ├── project1.jpg
│       ├── project2.jpg
│       ├── project3.jpg
│       └── project4.jpg
├── components/
├── ...
```

---

## 1️⃣ FOTO PROFIL (Hero Section)

### Langkah 1: Siapkan Foto

- Ukuran rekomendasi: **800x600 pixels** atau **1200x900 pixels**
- Format: JPG atau PNG
- Nama file: `profile.jpg` (atau `profile.png`)

### Langkah 2: Letakkan di Folder Public

1. Buat folder `public` di root project (jika belum ada)
2. Copy foto profil Anda ke `d:\Project\faiqPortofolio\public\profile.jpg`

### Langkah 3: Update Code

Buka file: `components/Hero.tsx`

Cari baris ini (sekitar line 73):

```tsx
<img
  src="https://picsum.photos/800/600?grayscale"
  alt="Workspace Setup"
```

Ganti menjadi:

```tsx
<img
  src="/profile.jpg"
  alt="Faiq Misbah Yazdi"
```

**SIMPAN** dan refresh browser!

---

## 2️⃣ FOTO PROJECTS (Featured Work)

### Langkah 1: Siapkan Foto Projects

- Ukuran rekomendasi: **800x600 pixels** untuk project biasa
- Ukuran rekomendasi: **1600x900 pixels** untuk project besar (yang span 2 kolom)
- Format: JPG atau PNG
- Nama file: `project1.jpg`, `project2.jpg`, dll

### Langkah 2: Buat Folder Projects

1. Di dalam folder `public`, buat folder baru bernama `projects`
2. Copy semua foto project ke `d:\Project\faiqPortofolio\public\projects\`

Contoh:

```
public/
└── projects/
    ├── project1.jpg  (Project pertama - large)
    ├── project2.jpg  (Project kedua)
    ├── project3.jpg  (Project ketiga)
    └── project4.jpg  (Project keempat)
```

### Langkah 3: Update Code

Buka file: `components/Projects.tsx`

Cari bagian `const projects` (sekitar line 13-46) dan edit seperti ini:

**SEBELUM:**

```tsx
const projects: Project[] = [
  {
    id: 1,
    title: "NeoBank Dashboard",
    category: "Fintech",
    image: "https://picsum.photos/800/600?random=1",
    description: "A comprehensive financial analytics platform redesign for a leading digital bank.",
    size: 'large'
  },
```

**SESUDAH:**

```tsx
const projects: Project[] = [
  {
    id: 1,
    title: "Project Saya 1", // 👈 Ganti judul
    category: "Web Dev", // 👈 Ganti kategori
    image: "/projects/project1.jpg", // 👈 Ganti dengan foto Anda
    description: "Deskripsi project saya yang pertama.", // 👈 Ganti deskripsi
    size: "large", // large = lebar 2 kolom, normal = 1 kolom
  },
  {
    id: 2,
    title: "Project Saya 2",
    category: "UI/UX",
    image: "/projects/project2.jpg",
    description: "Deskripsi project kedua.",
    size: "normal",
  },
  // ... tambah project lainnya
];
```

---

## 3️⃣ Tips Optimasi Foto

### Resize & Compress Foto

Gunakan tools online untuk resize dan compress:

- https://tinypng.com/ (compress PNG/JPG)
- https://squoosh.app/ (resize + compress, rekomendasi!)
- https://www.iloveimg.com/resize-image

### Ukuran File

- Target ukuran file: **< 200KB per foto**
- Jangan upload foto RAW dari kamera (biasanya 5-10MB)

### Format

- **JPG** - untuk foto dengan banyak warna
- **PNG** - untuk gambar dengan transparency
- **WebP** - format modern (lebih kecil), tapi support browser lama kurang

---

## 4️⃣ Tambah/Hapus Project

### Tambah Project Baru

Di `components/Projects.tsx`, tambahkan object baru:

```tsx
const projects: Project[] = [
  // ... project yang sudah ada
  {
    id: 5, // ID unik
    title: "Project Baru",
    category: "Mobile",
    image: "/projects/project5.jpg",
    description: "Deskripsi project baru.",
    size: "normal",
  },
];
```

### Hapus Project

Hapus object project yang tidak diinginkan dari array.

---

## 5️⃣ Ganti Kategori Filter

Di `components/Projects.tsx`, cari baris:

```tsx
const categories = ["All", "UI/UX", "Web Dev", "Mobile", "Branding"];
```

Ganti sesuai kategori project Anda:

```tsx
const categories = ["All", "Web Dev", "UI/UX", "Mobile", "Data Analysis"];
```

---

## ✅ Checklist

- [ ] Buat folder `public/` di root project
- [ ] Copy foto profil ke `public/profile.jpg`
- [ ] Buat folder `public/projects/`
- [ ] Copy semua foto project ke `public/projects/`
- [ ] Update `components/Hero.tsx` untuk foto profil
- [ ] Update `components/Projects.tsx` untuk foto projects
- [ ] Resize & compress semua foto
- [ ] Test di browser (http://localhost:3000)

---

## 🎨 Contoh Lengkap

Misalkan Anda punya 4 project:

**Struktur Folder:**

```
public/
├── profile.jpg
└── projects/
    ├── ecommerce.jpg
    ├── dashboard.jpg
    ├── mobile-app.jpg
    └── landing-page.jpg
```

**Code di Projects.tsx:**

```tsx
const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Website",
    category: "Web Dev",
    image: "/projects/ecommerce.jpg",
    description:
      "Fully responsive e-commerce platform with payment integration.",
    size: "large",
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    category: "UI/UX",
    image: "/projects/dashboard.jpg",
    description: "Clean dashboard design for data visualization.",
    size: "normal",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    category: "Mobile",
    image: "/projects/mobile-app.jpg",
    description: "Flutter mobile app for banking services.",
    size: "normal",
  },
  {
    id: 4,
    title: "Product Landing Page",
    category: "Web Dev",
    image: "/projects/landing-page.jpg",
    description: "High-converting landing page with modern design.",
    size: "normal",
  },
];
```

---

## ❓ Troubleshooting

**Problem**: Foto tidak muncul (broken image)

- Pastikan nama file sama persis dengan di code (case-sensitive!)
- Cek foto ada di folder `public/`
- Refresh browser dengan Ctrl+F5

**Problem**: Foto terlalu besar/lambat loading

- Compress foto dengan https://squoosh.app/
- Target < 200KB per foto

**Problem**: Foto terdistorsi

- Gunakan aspect ratio yang benar:
  - Profile: 4:3 (contoh: 800x600)
  - Project normal: 4:3 (contoh: 800x600)
  - Project large: 16:9 (contoh: 1600x900)

---

Butuh bantuan? Tanya saya! 😊
