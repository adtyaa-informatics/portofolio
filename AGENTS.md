# Panduan Proyek

## Gambar Project

- Saat mengganti gambar karya, gunakan aset lokal di `src/assets/` alih-alih URL gambar eksternal, kecuali pengguna meminta sumber lain.
- Periksa isi visual aset sebelum memasangkannya ke proyek. Aset saat ini: `p1.jpg` (dashboard keuangan), `p2.jpg` (papan tugas tim), `p3.jpg` (toko online), dan `p4.jpg` (dashboard dukungan pelanggan). Jangan menganggap gambar-gambar ini cocok dengan tema proyek tanpa memeriksanya; minta arahan jika pemetaan yang dimaksud tidak jelas.
- Data proyek terpusat pada array `projects` di `src/App.jsx`. Atur `image` ke aset lokal dan perbarui `imageAlt` agar menggambarkan gambar yang benar-benar ditampilkan.
- Gambar dari data proyek yang sama muncul pada kartu beranda, arsip karya, dan halaman detail. Periksa crop di ketiga tampilan setelah mengganti aset; `imagePosition` hanya diterapkan pada kartu beranda.
- Setelah perubahan, jalankan `npm run lint` dan `npm run build`.