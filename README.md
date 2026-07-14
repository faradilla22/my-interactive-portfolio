# Faradilla Maulia — Portfolio Website

Website portfolio interaktif untuk Faradilla Maulia, fresh graduate Informatics Engineering yang fokus di data analysis, business intelligence, machine learning, dan UI/UX design.

## Teknologi

- [TanStack Start](https://tanstack.com/start) + [TanStack Router](https://tanstack.com/router)
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Motion](https://motion.dev) (animasi)

## Struktur File Penting

| File | Fungsi |
|------|--------|
| `src/lib/portfolio-data.ts` | Data project, link portfolio, sertifikat, dan surat internship |
| `src/routes/index.tsx` | Halaman utama (hero, about, experience, portfolio, skills, contact) |
| `src/routes/portfolio.$id.tsx` | Halaman detail setiap project |
| `vite.config.ts` | Konfigurasi build dan base path untuk GitHub Pages |
| `.github/workflows/deploy.yml` | GitHub Actions untuk auto-deploy ke GitHub Pages |

## Edit Konten

Untuk mengubah teks, link, dan data project, cukup edit dua file:

1. `src/lib/portfolio-data.ts` — untuk semua data portfolio, link project, sertifikat, portfolio hub, dan surat internship.
2. `src/routes/index.tsx` — untuk teks di halaman utama (hero, about, experience, skills, contact, footer).

Setelah edit, preview di Lovable akan otomatis ter-update.

## Deploy ke GitHub Pages

### 1. Push ke GitHub

Buat repository baru di GitHub, lalu push project ini:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git push -u origin main
```

Ganti `USERNAME` dan `REPO_NAME` dengan username GitHub dan nama repository kamu.

### 2. Aktifkan GitHub Pages

1. Buka repository di GitHub.
2. Masuk ke **Settings → Pages**.
3. Di bagian **Build and deployment**, pilih **Source: GitHub Actions**.

### 3. Workflow Otomatis

File `.github/workflows/deploy.yml` sudah dikonfigurasi. Setiap kali kamu push ke branch `main`, GitHub Actions akan:

1. Install dependencies dengan Bun.
2. Build static site dengan base path otomatis mengikuti nama repository.
3. Deploy hasil build (`dist/client`) ke GitHub Pages.

### 4. Akses Website

Setelah workflow berhasil (biasanya 1–2 menit), website bisa diakses di:

```text
https://USERNAME.github.io/REPO_NAME/
```

### Catatan Penting

- **Jangan ubah `BASE_PATH` secara manual.** Workflow otomatis membaca nama repository dari `github.event.repository.name`.
- Jika ingin deploy ke **custom domain**, ubah dulu DNS/domain setting di GitHub Pages, lalu sesuaikan `base` di `vite.config.ts` menjadi `/`.
- Jika nama repository berubah, workflow akan otomatis mengikuti nama baru setelah push.

## Develop Lokal

```bash
bun install
bun run dev
```

Buka `http://localhost:8080` (atau port yang ditampilkan di terminal).

## Build Lokal

```bash
bun run build
```

Hasil static site ada di `dist/client`.

## Lisensi

© Faradilla Maulia — Dibuat dengan data ✦ rasa ingin tahu ✦ kopi.
