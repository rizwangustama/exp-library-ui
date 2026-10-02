<p align="center">
  <img src="https://raw.githubusercontent.com/rizwangustama/exp-library-ui/main/projects/exp-library-ui/logo.png" alt="EXP Library UI Logo" width="200"/>
</p>

<h1 align="center">@rizwangustama/exp-library-ui</h1>

<p align="center">
  Library komponen UI modern, fleksibel, dan responsif untuk ekosistem <b>Angular</b>,
  ditenagai <b>Tailwind CSS v4</b> dan <b>Tabler Icons</b>.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@rizwangustama/exp-library-ui">
    <img src="https://img.shields.io/npm/v/@rizwangustama/exp-library-ui.svg" alt="NPM Version"/>
  </a>
  <a href="https://github.com/rizwangustama/exp-library-ui/actions/workflows/ci.yml">
    <img src="https://github.com/rizwangustama/exp-library-ui/actions/workflows/ci.yml/badge.svg" alt="CI Status"/>
  </a>
  <img src="https://img.shields.io/badge/Angular-v22-red?logo=angular" alt="Angular v22"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwindcss" alt="Tailwind CSS v4"/>
</p>

---

## 🌟 Fitur Utama

- **Khusus Angular Modern**: Komponen dibangun menggunakan fitur terbaru Angular seperti *Control Flow*, *Standalone Components*, dan *Signals*.
- **Berbasis Tailwind CSS v4**: Mudah dikustomisasi menggunakan utilitas Tailwind CSS langsung di template.
- **Ringan & Cepat**: Tidak bergantung pada library berat—hanya menggunakan set ikon Tabler Icons sebagai dependensi opsional.
- **Aksesibilitas Terjaga**: Mendukung efek `hover`, `focus`, dan indikator `disabled` secara konsisten di semua komponen.

---

## 🚀 Instalasi

```bash
npm install @rizwangustama/exp-library-ui
```

### Persiapan Dependensi

**1. Install Tabler Icons & Tailwind CSS (jika belum ada):**
```bash
npm install @tabler/icons-webfont tailwindcss
```

**2. Tambahkan ke file global styles aplikasi Anda (`styles.css`):**
```css
/* Import Tabler Icons */
@import '@tabler/icons-webfont/dist/tabler-icons.min.css';

/* Import Tailwind CSS */
@import 'tailwindcss';

/* Agar Tailwind dapat memindai style dari library ini */
@source '../node_modules/@rizwangustama/exp-library-ui';
```

---

## 📦 Komponen Tersedia

| Komponen | Selector | Deskripsi |
|---|---|---|
| **ExpButton** | `<exp-button>` | Tombol dengan berbagai varian (`primary`, `secondary`, `danger`, `ghost`) dan ukuran (`sm`, `md`, `lg`) |
| **ExpInput** | `<exp-input>` | Input teks dengan dukungan tipe `text`, `email`, `password`, `number`, serta ikon di kiri/kanan |
| **ExpCheckbox** | `<exp-checkbox>` | Kotak centang dengan *two-way binding* |
| **ExpRadio** | `<exp-radio>` | Tombol pilihan dalam satu grup |
| **ExpSelect** | `<exp-select>` | Dropdown canggih: *searchable*, *multi-select*, dan kustom `ng-template` |
| **ExpTable** | `<exp-table>` | Tabel data dinamis yang sederhana dan modern |
| **ExpIcon** | `<exp-icon>` | Wrapper ikon Tabler Icons dengan ukuran yang dapat dikustomisasi |

---

## 💻 Panduan Penggunaan

Import komponen yang dibutuhkan langsung di komponen *standalone* Anda:

```typescript
import { ExpButton, ExpInput, ExpSelect } from '@rizwangustama/exp-library-ui';

@Component({
  imports: [ExpButton, ExpInput, ExpSelect],
  ...
})
export class MyComponent {}
```

### Button

```html
<exp-button variant="primary" size="lg">Simpan Data</exp-button>
<exp-button variant="secondary" size="md">Batal</exp-button>
<exp-button variant="danger" size="sm">Hapus</exp-button>
<exp-button variant="ghost">Selengkapnya</exp-button>
```

### Input (dengan Icon)

```html
<exp-input type="email" placeholder="Alamat Email" iconPosition="left">
  <exp-icon icon name="mail" size="lg"></exp-icon>
</exp-input>

<exp-input type="password" placeholder="Kata Sandi" iconPosition="right">
  <exp-icon icon name="lock" size="lg"></exp-icon>
</exp-input>
```

### Checkbox & Radio

```html
<exp-checkbox [(checked)]="isAgreed">Saya setuju dengan syarat & ketentuan</exp-checkbox>

<exp-radio name="gender" value="pria" [(selectedValue)]="gender">Pria</exp-radio>
<exp-radio name="gender" value="wanita" [(selectedValue)]="gender">Wanita</exp-radio>
```

### Select (Multi-select & Searchable)

```html
<exp-select
  [options]="cityList"
  bindLabel="name"
  bindValue="id"
  [searchable]="true"
  [multiple]="true"
  placeholder="Pilih Kota..."
  [(value)]="selectedCities">
</exp-select>
```

### Table

```typescript
// Di dalam class komponen
columns = [
  { field: 'id', header: 'ID' },
  { field: 'name', header: 'Nama Lengkap' },
  { field: 'email', header: 'Email' },
];
data = [
  { id: 1, name: 'Budi Santoso', email: 'budi@example.com' },
  { id: 2, name: 'Siti Aminah', email: 'siti@example.com' },
];
```
```html
<exp-table [columns]="columns" [data]="data"></exp-table>
```

### Icon

Mendukung ukuran standar (`xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`) maupun kelas Tailwind kustom.

```html
<exp-icon name="home" size="3xl" class="text-blue-500"></exp-icon>
<exp-icon name="user" size="xl"></exp-icon>
<exp-icon name="settings" size="md"></exp-icon>
```

---

## 🛠️ Pengembangan Library

Clone repository dan instal dependensi:
```bash
git clone https://github.com/rizwangustama/exp-library-ui.git
cd exp-library-ui
npm install
```

Jalankan build library dalam mode *watch* (perubahan otomatis ter-rebuild):
```bash
ng build exp-library-ui --watch
```

Uji perubahan melalui aplikasi *showcase*:
```bash
ng serve showcase-app
```

Jalankan unit test:
```bash
ng test
```

---

## 🔗 Tautan

- [NPM Package](https://www.npmjs.com/package/@rizwangustama/exp-library-ui)
- [GitHub Repository](https://github.com/rizwangustama/exp-library-ui)
- [Tabler Icons](https://tabler.io/icons)
- [Angular Documentation](https://angular.dev)
