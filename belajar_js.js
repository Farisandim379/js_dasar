// 1. pengenalan variabel dan tipe data

// const i = prompt('nama yang anda masukkan adalah')
// alert('nama yang kamu masukkan adalah '+ i)

// study case

// const nama = 'Walid';
// let umur = 90;
// const isWali = false;
// const stress = 99.9;
// console.log(nama, umur,isWali, stress)

// 2. operator dalam js

// let p = 10;
// let l = 15;
// let pl = p * l;
// console.log('lebar keliling persegi adalah ' + pl);

// study case

// const L = 1/2;
// const A = 10;
// const T = 5;
// const luasSegitiga = L * A * T;

// console.log('luas seigitga adalah ' + luasSegitiga)


// 3. percabangan

// let usia = 16;
// if (usia >= 18) {
//   console.log("Boleh masuk");
// } else {
//   console.log("Belum cukup umur");
// }

// 4. looping

// for(let i = 0; i < 10; i++){
//     console.log('saya ganteng')
// }

// study case
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }


// 5. fungsi


// function hitungLuasPersegiPanjang(panjang, lebar) {
//     return panjang * lebar;
// }

// let panjang = 5;
// let lebar = 10;
// let luas = hitungLuasPersegiPanjang(panjang, lebar);

// console.log("Luas persegi panjang: " + luas);

// study kasus
// function hitungLuasLingkaran(r) {
//     return 3.14 * r * r;
//   }
//   console.log(hitungLuasLingkaran(7));


// kuis 1

// let a = parseFloat(prompt("Masukkan angka pertama:"));
// let b = parseFloat(prompt("Masukkan angka kedua:"));
// let op = prompt("Pilih operasi (+, -, *, /):");

// function kalkulator(a, b, operasi) {
//     if (operasi === "+") return a + b;
//     else if (operasi === "-") return a - b;
//     else if (operasi === "*") return a * b;
//     else if (operasi === "/") return a / b;
//     else return "Operasi tidak dikenali";
//   }

//   alert("Hasil: " + kalkulator(a, b, op));


// kuis 2
// const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

// const tanggalSekarang = new Date();

// const  hariIni= tanggalSekarang.getDay();

// const namaHari = hari[hariIni];

// console.log(`Hari ini adalah hari ${namaHari}`);
