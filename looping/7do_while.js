
let j = 10; //jadi masalalu kita bakalan hilang setelah berulang-ulang 30x
console.log('kita lagi pake do while nich')
let i = 10;
do {
    console.log(`perulangan yang ke-${i} kali`)
    i++;
}while(i <= j)

    // implementasi
//     let pilihan;

// do {
//   pilihan = prompt(
//     "Pilih menu:\n1. Makan\n2. Minum\n3. Keluar"
//   );

//   switch (pilihan) {
//     case "1":
//       alert("Kamu memilih menu Makan.");
//       break;
//     case "2":
//       alert("Kamu memilih menu Minum.");
//       break;
//     case "3":
//       alert("Keluar dari menu. Sampai jumpa!");
//       break;
//     default:
//       alert("Pilihan tidak valid.");
//   }

// } while (pilihan !== "3");