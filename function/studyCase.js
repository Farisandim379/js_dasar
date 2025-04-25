
// kuis 1

let a = parseFloat(prompt("Masukkan angka pertama:"));
let b = parseFloat(prompt("Masukkan angka kedua:"));
let op = prompt("Pilih operasi (+, -, *, /):");

function kalkulator(a, b, operasi) {
    if (operasi === "+") return a + b;
    else if (operasi === "-") return a - b;
    else if (operasi === "*") return a * b;
    else if (operasi === "/") return a / b;
    else return "Operasi tidak dikenali";
  }

  alert("Hasil: " + kalkulator(a, b, op));


// kuis 2 opsional kalau masih ada waktu
// const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

// const tanggalSekarang = new Date();

// const  hariIni= tanggalSekarang.getDay();

// const namaHari = hari[hariIni];

// console.log(`Hari ini adalah hari ${namaHari}`);
