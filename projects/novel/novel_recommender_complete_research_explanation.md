# Novel Recommender System — Complete Research Explanation

## 1. Research Overview

Penelitian ini mengembangkan **sistem rekomendasi novel** untuk memberikan rekomendasi personal berdasarkan novel yang disukai pengguna, dengan fokus pada novel **Fantasy & Paranormal**.

Pendekatan utama yang digunakan adalah **Hybrid Recommendation**, yaitu menggabungkan:

1. **Collaborative Filtering** — memanfaatkan pola interaksi pengguna dengan novel.
2. **Content-Based Filtering** — memanfaatkan kemiripan metadata dan konten novel.

Keduanya digabungkan untuk menghasilkan **Top-10 recommendations**.

> Ide sederhananya: jika pengguna menyukai beberapa novel, novel apa yang kemungkinan juga disukai berdasarkan pola pembaca lain dan kemiripan karakteristik novel?

---

## 2. Tujuan Penelitian

Penelitian bertujuan untuk:

- membangun sistem rekomendasi novel yang personal;
- memanfaatkan pola interaksi pembaca;
- memanfaatkan kemiripan konten novel;
- menghasilkan rekomendasi Top-5 dan Top-10;
- menguji performa pada kondisi cold-start;
- mengevaluasi relevance, coverage, novelty, popularity bias, dan cold-start performance;
- mengimplementasikan model final sebagai prototype Streamlit.

---

## 3. Dataset

Dataset akhir yang digunakan:

| Komponen | Jumlah |
|---|---:|
| Books | **62,168** |
| Users | **49,980** |
| Interactions | **3,070,371** |

### Books Dataset

Metadata yang digunakan antara lain:

- `book_id`
- `title`
- `authors`
- `categories`
- `description`

### Interactions Dataset

Informasi interaksi meliputi:

- `user_id`
- `book_id`
- `event_type`
- `timestamp`

Books terutama digunakan untuk Content-Based Filtering, sedangkan interactions menjadi dasar Collaborative Filtering.

---

## 4. System Pipeline

```text
Raw Dataset
     │
     ▼
Data Preprocessing
     │
     ├───────────────┐
     ▼               ▼
Interaction Data   Book Metadata
     │               │
     ▼               ▼
Collaborative      TF-IDF
Filtering          Representation
     │               │
     ▼               ▼
CF Score          Content Score
     │               │
     └───────┬───────┘
             ▼
       Hybrid Scoring
             │
             ▼
       Candidate Ranking
             │
             ▼
    Remove Selected Books
             │
             ▼
        Top-10 Results
             │
             ▼
       Streamlit App
```

---

## 5. Data Preprocessing

Sebelum masuk ke model, data dibersihkan dan dipersiapkan melalui beberapa proses:

### Data Cleaning

- menangani duplicate data;
- menangani missing values;
- memperbaiki format data;
- mempertahankan data yang relevan untuk rekomendasi.

### Interaction Filtering

Interaksi diproses agar sesuai dengan kebutuhan sistem rekomendasi.

### ID Encoding

`user_id` dan `book_id` dipetakan ke index numerik agar dapat digunakan secara efisien dalam matrix dan perhitungan similarity.

---

## 6. Collaborative Filtering

Penelitian menggunakan pendekatan **user-based collaborative filtering**.

Pertanyaan yang dijawab:

> **"Pengguna lain yang memiliki pola interaksi mirip dengan pengguna ini menyukai novel apa?"**

Contoh:

```text
User A:
Novel 1 ✓
Novel 2 ✓
Novel 3 ✓

User B:
Novel 1 ✓
Novel 2 ✓
Novel 3 ✓
Novel 7 ✓
```

Karena pola A dan B mirip, Novel 7 dapat menjadi kandidat untuk User A.

### User-Item Matrix

Interaksi direpresentasikan dalam matrix:

| | Novel A | Novel B | Novel C | Novel D |
|---|---:|---:|---:|---:|
| User 1 | 1 | 1 | 0 | 0 |
| User 2 | 1 | 1 | 1 | 0 |
| User 3 | 0 | 0 | 1 | 1 |

Kemudian sistem menghitung **Cosine Similarity** antar pengguna. Pengguna dengan pola lebih mirip memberikan sinyal rekomendasi yang lebih kuat.

---

## 7. Content-Based Filtering

Content-Based Filtering menjawab:

> **"Novel apa yang memiliki karakteristik paling mirip dengan novel yang disukai pengguna?"**

Metadata yang digunakan mencakup title, author, category, dan description.

### TF-IDF

Teks diubah menjadi representasi numerik menggunakan **TF-IDF (Term Frequency–Inverse Document Frequency)**.

Dalam eksperimen, matrix TF-IDF memiliki bentuk:

```text
(62,168, 80,000)
```

Artinya terdapat representasi untuk 62,168 novel dengan hingga 80,000 fitur teks.

### Cosine Similarity

Setelah representasi TF-IDF dibuat, sistem menghitung kemiripan antar novel.

```text
Selected Novel
      ↓
TF-IDF Representation
      ↓
Cosine Similarity
      ↓
Content Score
```

Semakin tinggi similarity, semakin mirip karakteristik novel.

---

## 8. Mengapa Hybrid?

Collaborative Filtering unggul dalam menangkap perilaku pengguna, tetapi membutuhkan interaksi dan dapat menghadapi cold-start.

Content-Based dapat menggunakan karakteristik novel dan lebih mampu menjangkau item yang kurang populer, tetapi performa relevansinya pada eksperimen ini lebih rendah.

Karena itu keduanya digabungkan.

---

## 9. Hybrid Scoring

Model final menggunakan:

```text
α = 0.90
```

atau:

```text
90% Collaborative Filtering
10% Content-Based Filtering
```

Secara konseptual:

```text
Hybrid Score =
    0.90 × Collaborative Score
  + 0.10 × Content Score
```

Score dinormalisasi terlebih dahulu agar kedua komponen berada pada skala yang dapat dibandingkan.

Secara umum:

```text
Normalized Score =
(score - minimum) / (maximum - minimum)
```

Dengan demikian, model final lebih menekankan pola interaksi pengguna, sementara Content-Based menjadi komponen pendukung.

---

## 10. Model yang Dibandingkan

Empat model dibandingkan:

### 1. Popularity

Baseline yang merekomendasikan novel berdasarkan popularitas.

### 2. Content-Based

Merekomendasikan novel berdasarkan kemiripan konten.

### 3. Item-CF

Menggunakan hubungan antar-item berdasarkan pola interaksi.

### 4. Hybrid

Menggabungkan Collaborative Filtering dan Content-Based Filtering.

Model **Hybrid** akhirnya dipilih sebagai model final berdasarkan performance score keseluruhan.

---

## 11. Evaluasi

Metrik utama:

- **Precision@K**
- **Recall@K**
- **NDCG@K**

dengan:

```text
K = 5
K = 10
```

Evaluasi tambahan:

- Catalog Coverage;
- Novelty;
- Hit Rate;
- Popularity Bias;
- Cold-Start Performance.

---

## 12. Precision@K

Precision menjawab:

> **"Dari rekomendasi yang diberikan, berapa banyak yang relevan?"**

Hasil Hybrid:

- Precision@5 ≈ **9.58%**
- Precision@10 ≈ **7.3%**

Nilai ini tidak boleh disebut sebagai "akurasi model hanya 7.3%". Precision@K merupakan metrik ranking yang dipengaruhi oleh karakteristik dataset, sparsity, definisi relevance, dan nilai K.

---

## 13. Recall@K

Recall menjawab:

> **"Dari seluruh item yang relevan, berapa banyak yang berhasil ditemukan?"**

Hasil sekitar:

| Model | Recall@10 |
|---|---:|
| Popularity | ≈ 4.0% |
| Content-Based | ≈ 0.8% |
| Item-CF | ≈ 12.7% |
| **Hybrid** | **≈ 12.8%** |

Hybrid sedikit lebih tinggi daripada Item-CF.

---

## 14. NDCG@K

NDCG mempertimbangkan posisi item relevan dalam ranking. Item relevan pada posisi lebih tinggi memberikan kontribusi lebih besar.

Hasil NDCG@10:

| Model | NDCG@10 |
|---|---:|
| Popularity | ≈ 4.1% |
| Content-Based | ≈ 0.7% |
| Item-CF | ≈ 12.9% |
| **Hybrid** | **≈ 13.0%** |

Hybrid memperoleh nilai tertinggi.

---

## 15. Ringkasan Performance @10

| Model | Precision@10 | Recall@10 | NDCG@10 |
|---|---:|---:|---:|
| Popularity | ≈ 2.4% | ≈ 4.0% | ≈ 4.1% |
| Content-Based | ≈ 0.5% | ≈ 0.8% | ≈ 0.7% |
| Item-CF | ≈ 7.3% | ≈ 12.7% | ≈ 12.9% |
| **Hybrid** | **≈ 7.3%** | **≈ 12.8%** | **≈ 13.0%** |

Interpretasi yang tepat:

> **Hybrid menunjukkan performa terbaik secara keseluruhan, tetapi peningkatannya terhadap Item-CF relatif kecil.**

Jangan mengatakan Hybrid jauh lebih unggul daripada Item-CF karena selisihnya memang kecil.

---

## 16. Catalog Coverage

Catalog Coverage menunjukkan seberapa besar bagian katalog yang pernah digunakan sebagai rekomendasi.

| Model | Catalog Coverage |
|---|---:|
| Popularity | ≈ 0% |
| Content-Based | ≈ 44.9% |
| Item-CF | ≈ 35.7% |
| Hybrid | ≈ 36.1% |

Content-Based memiliki coverage tertinggi. Hybrid sedikit lebih tinggi daripada Item-CF.

---

## 17. Novelty

Novelty menggambarkan seberapa tidak umum atau tidak populer item yang direkomendasikan.

| Model | Novelty@10 |
|---|---:|
| Popularity | ≈ 2.2 |
| Item-CF | ≈ 5.2 |
| Hybrid | ≈ 5.3 |
| Content-Based | ≈ 12.4 |

Content-Based memiliki novelty tertinggi, sedangkan Popularity terendah.

Novelty tinggi tidak otomatis berarti relevansi tinggi, sehingga perlu dilihat bersama Precision, Recall, dan NDCG.

---

## 18. Hit Rate@10

Hit Rate mengukur apakah setidaknya satu item relevan ditemukan dalam Top-10.

| Model | Hit Rate@10 |
|---|---:|
| Popularity | ≈ 15.7% |
| Content-Based | ≈ 3.2% |
| Item-CF | ≈ 39.8% |
| **Hybrid** | **≈ 39.7%** |

Item-CF dan Hybrid menunjukkan performa paling tinggi.

---

## 19. Popularity Bias

Popularity Bias mengukur proporsi rekomendasi yang berasal dari **20% item paling populer**.

| Model | Popularity Bias |
|---|---:|
| Popularity | **100.00%** |
| Content-Based | **22.40%** |
| Item-CF | **93.46%** |
| Hybrid | **93.41%** |

Temuan penting:

- Popularity sepenuhnya berkonsentrasi pada item populer.
- Content-Based jauh lebih rendah.
- Item-CF dan Hybrid masih sangat terpengaruh oleh popularitas.

Jadi Hybrid memiliki relevansi tinggi, tetapi **belum sepenuhnya mengatasi popularity bias**.

---

## 20. Cold-Start

Cold-start diuji menggunakan jumlah interaksi yang diketahui:

```text
K = 1
K = 3
K = 5
```

### Cold-Start NDCG

| Known Interactions | NDCG |
|---:|---:|
| 1 | **2.85%** |
| 3 | **3.43%** |
| 5 | **3.93%** |

NDCG meningkat ketika informasi pengguna bertambah:

```text
2.85% → 3.43% → 3.93%
```

### Cold-Start Recall

| Known Interactions | Recall |
|---:|---:|
| 1 | **3.03%** |
| 3 | **3.83%** |
| 5 | **4.44%** |

Recall juga meningkat:

```text
3.03% → 3.83% → 4.44%
```

Interpretasinya:

> Semakin banyak informasi awal mengenai pengguna, semakin baik sistem memahami preferensinya sehingga kualitas rekomendasi meningkat.

---

## 21. Temuan Utama

### Temuan 1 — Hybrid adalah model final terbaik

Hybrid memperoleh performance score keseluruhan tertinggi.

### Temuan 2 — Collaborative Filtering sangat dominan

Item-CF dan Hybrid memberikan performa relevance jauh lebih tinggi daripada Popularity dan Content-Based.

### Temuan 3 — Content-Based unggul pada coverage dan novelty

Content-Based dapat menjangkau katalog lebih luas dan menghasilkan rekomendasi yang lebih tidak populer.

### Temuan 4 — Hybrid masih memiliki popularity bias

Sekitar **93.41%** rekomendasi Hybrid berasal dari kelompok 20% item paling populer.

### Temuan 5 — Cold-start membaik ketika interaksi bertambah

NDCG meningkat dari **2.85% → 3.43% → 3.93%** dan Recall meningkat dari **3.03% → 3.83% → 4.44%** ketika known interactions meningkat dari 1 → 3 → 5.

---

## 22. Interpretasi Besar Research

Secara konseptual:

```text
                RELEVANCE
                   ↑
                   │
          Item-CF / Hybrid
                   │
                   │
                   │
Content-Based ─────┼────────→ NOVELTY / COVERAGE
                   │
                   │
             Popularity
```

Collaborative Filtering kuat dalam menangkap pola preferensi pengguna.

Content-Based lebih baik dalam memperluas variasi item.

Hybrid mencoba mengambil keuntungan dari keduanya, tetapi karena bobotnya 90% Collaborative Filtering, karakteristik model final masih sangat dipengaruhi Collaborative Filtering.

---

## 23. Implementasi Streamlit

Model final kemudian diwujudkan menjadi prototype menggunakan Streamlit.

Alur pengguna:

```text
Open Application
       ↓
Search Novel
       ↓
Select 1–5 Favorite Novels
       ↓
Read User Preferences
       ↓
Collaborative Filtering
       +
Content-Based Filtering
       ↓
Hybrid Score
       ↓
Ranking
       ↓
Remove Selected Books
       ↓
Top-10 Recommendations
```

Prototype menggunakan artifact:

```text
books_app.csv
interactions_app.csv.gz
tfidf_matrix.npz
tfidf_vectorizer.pkl
```

Artifact memungkinkan aplikasi melakukan inference tanpa melakukan training ulang ketika aplikasi digunakan.

---

## 24. Cara Kerja Rekomendasi di Aplikasi

Misalnya pengguna memilih:

```text
Harry Potter
```

### Collaborative Component

```text
Find Similar Users
        ↓
Find Books from Similar Users
        ↓
Collaborative Score
```

### Content Component

```text
Selected Novel
        ↓
TF-IDF Representation
        ↓
Cosine Similarity
        ↓
Content Score
```

Kemudian:

```text
Hybrid Score =
0.90(Collaborative)
+
0.10(Content)
```

Kandidat dengan skor hybrid tertinggi ditempatkan pada ranking teratas.

Novel yang sudah dipilih pengguna difilter agar tidak muncul kembali.

---

## 25. Kelebihan Research

1. Menggabungkan dua sumber informasi.
2. Menggunakan perilaku nyata pengguna.
3. Memanfaatkan metadata novel.
4. Menggunakan beberapa metrik evaluasi.
5. Menguji cold-start.
6. Menghasilkan prototype aplikasi yang dapat digunakan secara langsung.

---

## 26. Keterbatasan Research

### 1. Popularity Bias masih tinggi

Hybrid masih sangat bergantung pada novel populer.

### 2. Content-Based memiliki relevance rendah

Walaupun coverage dan novelty tinggi, performa relevance-nya lebih rendah daripada Collaborative Filtering.

### 3. Cold-start masih menjadi tantangan

Performa lebih rendah ketika pengguna hanya memiliki sedikit interaksi.

### 4. Peningkatan Hybrid terhadap Item-CF relatif kecil

Hybrid menjadi model terbaik, tetapi selisihnya dengan Item-CF tidak besar.

Hal ini menunjukkan bahwa kontribusi Content-Based terhadap peningkatan relevance masih terbatas pada konfigurasi saat ini.

---

## 27. Bagaimana Menjelaskan Angka yang Kecil?

Jika dosen bertanya:

> **"Kenapa Precision atau Recall-nya kecil? Apakah modelnya jelek?"**

Jawaban yang tepat:

> **Tidak bisa langsung disimpulkan demikian.** Precision@K, Recall@K, dan NDCG@K merupakan metrik ranking recommender system yang sangat dipengaruhi oleh karakteristik dataset, sparsity interaksi, definisi relevance, jumlah item relevan, dan nilai K. Oleh karena itu, hasil paling tepat dibaca melalui perbandingan antar-model pada dataset dan prosedur evaluasi yang sama.

Yang harus dihindari:

> "Akurasi model saya hanya 7.3%."

Yang lebih tepat:

> "Precision@10 Hybrid sebesar sekitar 7.3% pada skenario evaluasi ini."

---

## 28. Kesimpulan

Penelitian ini berhasil mengembangkan prototype **Hybrid Novel Recommender System** yang menggabungkan Collaborative Filtering dan Content-Based Filtering untuk menghasilkan rekomendasi Top-10 novel.

Model final menggunakan:

```text
α = 0.90

90% Collaborative Filtering
10% Content-Based Filtering
```

Hybrid menjadi model dengan performa keseluruhan terbaik, dengan hasil sekitar:

- Precision@10 = **7.3%**
- Recall@10 = **12.8%**
- NDCG@10 = **13.0%**

Namun, model masih memiliki popularity bias tinggi, yaitu sekitar **93.41%** rekomendasi berasal dari 20% item paling populer.

Content-Based memiliki coverage dan novelty lebih tinggi, tetapi relevance lebih rendah.

Pada cold-start, performa meningkat ketika jumlah interaksi pengguna bertambah. NDCG meningkat dari **2.85% menjadi 3.93%**, sedangkan Recall meningkat dari **3.03% menjadi 4.44%** ketika known interactions meningkat dari 1 menjadi 5.

Dengan demikian, kontribusi penelitian bukan hanya menemukan model dengan skor tertinggi, tetapi juga menunjukkan trade-off antara **relevance, novelty, coverage, popularity bias, dan cold-start performance**.

---

## 29. Versi Singkat untuk Presentasi

> **"Penelitian saya mengembangkan sistem rekomendasi novel Fantasy dan Paranormal menggunakan pendekatan hybrid. Dataset terdiri dari sekitar 62 ribu novel, 49 ribu pengguna, dan 3 juta interaksi. Sistem menggunakan Collaborative Filtering untuk menangkap pola interaksi pengguna dan Content-Based Filtering berbasis TF-IDF untuk menangkap kemiripan metadata novel. Kedua skor dinormalisasi dan digabungkan dengan bobot 90% Collaborative Filtering dan 10% Content-Based Filtering. Empat model dibandingkan, yaitu Popularity, Content-Based, Item-CF, dan Hybrid menggunakan Precision, Recall, dan NDCG pada Top-5 dan Top-10. Hybrid memberikan performa keseluruhan terbaik, walaupun peningkatannya terhadap Item-CF relatif kecil. Analisis tambahan menunjukkan Content-Based memiliki coverage dan novelty lebih tinggi, sedangkan Hybrid masih memiliki popularity bias yang tinggi. Pengujian cold-start juga menunjukkan bahwa performa meningkat ketika informasi pengguna bertambah. Model final kemudian diimplementasikan dalam prototype Streamlit yang memungkinkan pengguna memilih 1–5 novel favorit dan memperoleh rekomendasi Top-10 berdasarkan hybrid score."**

---

## 30. One-Line Research Story

> **This research develops a hybrid novel recommendation system that combines user interaction patterns and novel content similarity to generate personalized Top-10 recommendations while evaluating relevance, coverage, novelty, popularity bias, and cold-start performance.**
