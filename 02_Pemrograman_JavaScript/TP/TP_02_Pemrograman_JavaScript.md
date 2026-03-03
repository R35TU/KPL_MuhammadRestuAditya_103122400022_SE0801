# Tugas Pendahuluan 02: Pemrograman JavaScript

---

## Identitas

Nama  : Muhammad Restu Aditya  
NIM   : 103122400022  
Kelas : SE0801  

---

## Soal

Kamu sudah menulis fungsi `mulOfArray`. Ujilah fungsi tersebut dengan input `[2, 0, 26, 28, -2]`, dengan output yang seharusnya adalah 1456. Jika hasil yang diperoleh berbeda, jelaskan penyebabnya dan perbaiki program tersebut. Jika hasilnya sudah sesuai, jelaskan alasan mengapa program dapat menghasilkan output yang benar.

---

## Jawaban

Setelah dilakukan pengujian menggunakan input `[2, 0, 26, 28, -2]`, program menghasilkan output **1456**, sesuai dengan hasil yang diharapkan.

Hal ini terjadi karena pada fungsi digunakan kondisi `if (arr[i] > 0)`, sehingga hanya bilangan positif yang diproses dalam perkalian. Nilai 0 dan bilangan negatif tidak ikut dihitung.

Pada input tersebut, bilangan positif yang dikalikan adalah 2, 26, dan 28, sehingga menghasilkan:

2 × 26 × 28 = 1456

Dengan demikian, program sudah berjalan sesuai dengan ketentuan soal.

---

## Kode Sumber

Tersedia pada file [index.js](../index.js)

---

## Output

![Output Program](output_tp02.png)

---

## Deskripsi Program

Program ini berfungsi untuk mengalikan semua bilangan positif dalam sebuah array. Nilai nol dan bilangan negatif tidak dihitung karena kondisi yang digunakan hanya memproses angka yang lebih besar dari nol. Dengan logika tersebut, program menghasilkan output yang sesuai dengan yang diharapkan.
