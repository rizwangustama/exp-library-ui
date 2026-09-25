<p align="center">
  <img src="../../logo.png" alt="EXP Shared UI Logo" width="200"/>
</p>

<h1 align="center">EXP Shared UI</h1>

<p align="center">
  Library komponen UI modern, fleksibel, dan responsif, dirancang khusus untuk ekosistem <b>Angular</b> dengan memanfaatkan keindahan dan utilitas dari <b>Tailwind CSS v4</b>.
</p>

---

## 🌟 Fitur Utama

- **Khusus Angular**: Komponen dirancang secara *native* menggunakan fitur terbaru Angular (Control Flow, Standalone Components/Imports).
- **Berbasis Tailwind CSS**: Sepenuhnya dikembangkan menggunakan utilitas Tailwind CSS v4, membuatnya sangat mudah dikustomisasi.
- **Ringan & Cepat**: Tanpa ketergantungan library pihak ketiga yang berat (kecuali set ikon bawaan).
- **Aksesibilitas & Pengalaman Pengguna**: Mendukung efek *hover*, *focus*, dan indikator *disabled* dengan sangat baik.

## 📦 Komponen Tersedia

Saat ini, `exp-shared-ui` menyediakan komponen-komponen berikut:

1. **ExpButton** (`<exp-button>`) - Tombol dengan dukungan berbagai varian (`primary`, `secondary`, `danger`, `ghost`) dan ukuran (`sm`, `md`, `lg`).
2. **ExpInput** (`<exp-input>`) - Input teks standar dengan dukungan tipe `text`, `email`, `password`, `number`, serta dapat disisipkan *icon* di sisi kiri atau kanan.
3. **ExpCheckbox** (`<exp-checkbox>`) - Kotak centang dengan kemudahan *two-way binding*.
4. **ExpRadio** (`<exp-radio>`) - Tombol pilihan untuk memilih satu opsi di dalam grup.
5. **ExpSelect** (`<exp-select>`) - *Dropdown* canggih dengan fitur pencarian (*searchable*), multi-pilihan (*multi-select*), dan *template* kustom (menerima `ng-template`).
6. **ExpTable** (`<exp-table>`) - Tabel data dinamis yang sederhana dan modern.
7. **ExpIcon** (`<exp-icon>`) - Pembungkus ikon fleksibel menggunakan `@tabler/icons-webfont` yang ukurannya dapat diubah-ubah sesuka hati.

---

## 🚀 Instalasi & Persiapan

Pastikan Anda sudah menginstal Tailwind CSS v4 dan Tabler Icons di proyek aplikasi Angular Anda.

1. **Install Tabler Icons** (jika belum):
   ```bash
   npm install @tabler/icons-webfont
   ```

2. **Tambahkan ke Global Styles** (`styles.css` atau `styles.scss` aplikasi Anda):
   ```css
   @import '@tabler/icons-webfont/tabler-icons.min.css';
   @import 'tailwindcss';
   
   /* Pastikan Tailwind dapat memindai folder library ini */
   @source '../../exp-shared-ui'; 
   ```

---

## 💻 Panduan Penggunaan (Contoh)

Karena library ini dibangun untuk Angular versi modern, Anda dapat langsung mengimpor komponen yang dibutuhkan ke dalam modul atau komponen *standalone* Anda.

### 1. Button
```html
<exp-button variant="primary" size="lg">Simpan Data</exp-button>
```

### 2. Input (dengan Icon)
```html
<exp-input type="email" placeholder="Alamat Email" iconPosition="left">
  <!-- Sisipkan atribut "icon" pada elemen ikon Anda -->
  <exp-icon icon name="mail" size="lg"></exp-icon>
</exp-input>
```

### 3. Checkbox & Radio
```html
<exp-checkbox [(checked)]="isAgreed">Saya setuju</exp-checkbox>

<exp-radio name="gender" value="pria" [(selectedValue)]="gender">Pria</exp-radio>
<exp-radio name="gender" value="wanita" [(selectedValue)]="gender">Wanita</exp-radio>
```

### 4. Select (Multi-select & Searchable)
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

### 5. Table
```typescript
// Di dalam class komponen
columns = [
  { field: 'id', header: 'ID' },
  { field: 'name', header: 'Nama Lengkap' }
];
data = [
  { id: 1, name: 'Budi Santoso' },
  { id: 2, name: 'Siti Aminah' }
];
```
```html
<!-- Di dalam template -->
<exp-table [columns]="columns" [data]="data"></exp-table>
```

### 6. Icon
Mendukung ukuran standar (`xs` hingga `5xl`) maupun ukuran kustom dari Tailwind.
```html
<exp-icon name="home" size="3xl" class="text-blue-500"></exp-icon>
```

---

## 🛠️ Pengembangan
Untuk mengembangkan library ini, jalankan perintah berikut di workspace Anda:
```bash
ng build exp-shared-ui --watch
```
Lalu uji perubahannya melalui proyek pengujian Anda (misalnya `showcase-app`).
