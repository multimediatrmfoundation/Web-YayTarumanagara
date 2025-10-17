# 🌐 Yayasan Tarumanagara Website

Website resmi **Yayasan Tarumanagara** yang sedang dikembangkan oleh **Tarumanagara Web Dev Team**.  
Proyek ini bertujuan untuk memperkuat branding, transparansi, dan akses informasi publik mengenai kegiatan, sejarah, serta kontribusi Yayasan Tarumanagara di bidang pendidikan, kesehatan, dan sosial.

---

## 🚀 Project Overview

Website ini dirancang menggunakan arsitektur modern berbasis **Next.js + Tailwind CSS** dengan integrasi CMS Headless untuk memudahkan pengelolaan konten secara dinamis oleh tim Yayasan.

### ✳️ Fitur Utama
- Profil Yayasan dan sejarah pendirian  
- Berita, acara, dan publikasi kegiatan  
- Dokumentasi CSR dan kerja sama institusi  
- Integrasi CMS untuk pengelolaan konten internal  
- Desain responsif dan mobile-friendly  

---

## 🧩 Tech Stack

| Layer | Tools / Framework |
|-------|-------------------|
| Frontend | Next.js 14, React, Tailwind CSS |
| Backend | Node.js, Supabase / Sanity CMS |
| Deployment | Vercel |
| Design System | Figma + Component Library |
| Version Control | Git & GitHub |

---

## 🛠️ Setup & Installation

1. **Clone repository**
   ```bash
   git clone https://github.com/<username>/<repository-name>.git
   cd <repository-name>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   Lalu buka [http://localhost:3000](http://localhost:3000) di browser.

4. **Build for production**
   ```bash
   npm run build
   npm run start
   ```

---

## 🧱 Folder Structure

```
/src
 ├── components/     # Reusable UI components
 ├── pages/          # Next.js pages
 ├── styles/         # Global CSS & Tailwind config
 ├── lib/            # Utility & CMS integration
 ├── public/         # Static assets
 └── data/           # JSON & content data
```

---

## 👥 Project Team — Tarumanagara Web Dev Team

| Member | Role | Core Responsibilities |
|--------|------|------------------------|
| **Budi** | Project Lead + Backend Engineer | Architecture, CMS API, deployment, mentoring juniors |
| **Hans** | Frontend Developer | Component structure, dynamic rendering, client-side logic |
| **Suellen** | Graphic Designer + Backend Trainee | Design system, visual QA, assisted backend setup |
| **Vania** | Copywriter + Data/Backend Trainee | Content writing, CMS documentation, dataset handling |
| **Ivan** | Graphic Designer + Frontend Trainee | Component visuals, layout adaptation, mobile responsiveness |
| **Laura** | Graphic Designer + Backend Trainee | Visual polishing, CMS support, documentation |

---

## 💡 Development Guidelines

- Gunakan **branch** baru untuk setiap fitur atau modul (`feature/homepage`, `feature/news-section`).
- Selalu **commit** dengan pesan yang jelas dan konsisten:
  ```
  feat: add homepage hero section
  fix: resolve responsive layout issue
  docs: update README with setup guide
  ```
- Lakukan **pull request (PR)** ke branch utama (`main`) setelah fitur diuji dan direview.

---

## 🧭 Deployment Workflow

1. Push perubahan ke GitHub.
2. Vercel otomatis melakukan build dan deployment.
3. Cek hasil di:  
   🔗 [https://yayasan-tarumanagara.vercel.app](https://yayasan-tarumanagara.vercel.app)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🏛️ About Yayasan Tarumanagara

**Yayasan Tarumanagara** adalah lembaga yang menaungi berbagai institusi pendidikan dan layanan sosial di bawah grup Tarumanagara — termasuk **Universitas Tarumanagara (UNTAR)**, **Institut Tarumanagara (ITARU)**, dan **RS Royal Taruma** — dengan visi mewujudkan kontribusi nyata bagi kemajuan bangsa.

---

📘 **Developed with dedication by Tarumanagara Web Dev Team**  
© 2025 Yayasan Tarumanagara. All rights reserved.
