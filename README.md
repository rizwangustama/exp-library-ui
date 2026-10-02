# EXP Library UI — Angular Component Library

<p align="center">
  <img src="./projects/exp-library-ui/logo.png" alt="EXP Library UI Logo" width="200"/>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@rizwangustama/exp-library-ui">
    <img src="https://img.shields.io/npm/v/@rizwangustama/exp-library-ui.svg" alt="NPM Version"/>
  </a>
  <a href="https://github.com/rizwangustama/exp-library-ui/actions/workflows/ci.yml">
    <img src="https://github.com/rizwangustama/exp-library-ui/actions/workflows/ci.yml/badge.svg" alt="CI Status"/>
  </a>
  <a href="https://www.npmjs.com/package/@rizwangustama/exp-library-ui">
    <img src="https://img.shields.io/npm/l/@rizwangustama/exp-library-ui.svg" alt="License"/>
  </a>
</p>

<p align="center">
  Library komponen UI modern, fleksibel, dan responsif untuk <b>Angular</b>, ditenagai <b>Tailwind CSS v4</b> dan <b>Tabler Icons</b>.
</p>

---

## 📁 Struktur Monorepo

```
ui-workspace/
├── projects/
│   ├── exp-library-ui/      # 📦 Library komponen utama (di-publish ke NPM)
│   └── showcase-app/        # 🖥️  Aplikasi demo & testing
├── .github/workflows/
│   ├── ci.yml               # ✅ CI: Build & Test (setiap push ke main)
│   └── publish-npm.yml      # 🚀 Publish ke NPM (setiap Release di GitHub)
└── dist/
    └── exp-library-ui/      # Output build library
```

---

## 🚀 Instalasi

```bash
npm install @rizwangustama/exp-library-ui
```

Pastikan sudah menginstal dependensi peer-nya:
```bash
npm install @tabler/icons-webfont tailwindcss
```

Tambahkan ke file global styles (`styles.css`):
```css
@import '@tabler/icons-webfont/dist/tabler-icons.min.css';
@import 'tailwindcss';
```

---

## 📦 Komponen Tersedia

| Komponen | Selector | Deskripsi |
|---|---|---|
| **ExpButton** | `<exp-button>` | Tombol dengan varian & ukuran |
| **ExpInput** | `<exp-input>` | Input teks dengan dukungan ikon |
| **ExpCheckbox** | `<exp-checkbox>` | Kotak centang dengan two-way binding |
| **ExpRadio** | `<exp-radio>` | Tombol pilihan dalam grup |
| **ExpSelect** | `<exp-select>` | Dropdown dengan fitur search & multi-select |
| **ExpTable** | `<exp-table>` | Tabel data dinamis |
| **ExpIcon** | `<exp-icon>` | Wrapper ikon Tabler Icons |

---

## 🛠️ Pengembangan Lokal

**Jalankan showcase app:**
```bash
ng serve showcase-app
```

**Build library (mode watch):**
```bash
ng build exp-library-ui --watch
```

**Jalankan unit test:**
```bash
ng test
```

---

## 🔄 Alur Rilis (CI/CD)

1. Kerjakan kode dan push ke branch `main` → GitHub Actions otomatis menjalankan **build & test**.
2. Saat siap merilis versi baru, naikkan versi di `projects/exp-library-ui/package.json`.
3. Buat **Release** baru di GitHub (contoh: `v1.0.0`) → GitHub Actions otomatis mem-**publish ke NPM**.

---

## 🔗 Tautan

- [NPM Package](https://www.npmjs.com/package/@rizwangustama/exp-library-ui)
- [GitHub Repository](https://github.com/rizwangustama/exp-library-ui)
- [Angular Documentation](https://angular.dev)
