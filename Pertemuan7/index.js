//pertemuan 7

// tipe data
// string 
let nama =" DAffa " //penulisan menggunakan petik dua
let username = 'Daffa'// penulisan menggunakan petik satu 
pekerjaaan = `Web developer` // penulisan menggunakan backtick (`)
// pemanggilan string 
console.log("Halo Nama Saya" + nama + ", Username " + username + ",Saya seorang " +pekerjaaan);
// pemanggilan menggunakan string literal / backtick
console.log(`Hallo Nama Saya ${nama}, username ${username}, Saya Seorang ${pekerjaaan}`); 

// Number
let angka = 2
let angka2 = 5
console.log(`Hasil dari penjumlahan ${angka} + ${angka2} = ${angka + angka2}`);

// Boolean
let cekAngka = angka > angka2
console.log(cekAngka);

// null
let bukuA = null
console.log(bukuA);

// Undefined
var namaDosen;
console.log(namaDosen);

//object
let mahasiswa = {
    nama : "Daffa" ,
    kelas : "E",
    semester: 1,
    alamat : 'Panggug Baru' 
}
console.log(mahasiswa);
console.log(`Hallo, Saya ${mahasiswa.nama} , Saya Semester ${mahasiswa.semester}`);

// Array
let array = [1, 2, 3, 4, 5]
console.log(array);
console.log(array[0]);
let array2 = ["Pisang", 5, true, ["Daffa", "Tawon"], {nama : "Daffa" ,
kelas : "E",}]
console.log(array2);
console.log(array2[3][0]);
console.log(array2[4].kelas);

// push
let buah = ["Apple", "Sirsak", "Mangga"]
buah.push("Pir");
console.log(buah);
// pop
buah.pop();
console.log(buah);
// shift
buah.shift();
console.log(buah);
// unshift
buah.unshift("Apple");
console.log(buah);

// Foreach
buah.forEach(function(item) {
  console.log(`buah ${item}`);  
})

// Filter
let number = [22, 29, 8, 20, 7, 5, 6 ]
let filt = number.filter((a) =>{
    return a >= 9
})

// Map
let mutateditems = number.map(function(i) {
   return i * 3  
})

// Concat 
const gabung = number.concat(buah).concat(mahasiswa)
console.log(gabung);

// Operator 
let x = 20;
x = -x
console.log(x);

let z = 20;
let y = 40;
console.log(z+y);

let a = 5 + 5 * 3 - 2 
console.log(a);

let b = 8 
let t = "8"
console.log(b+t);
console.log(b === t);
console.log(b == t);

// Increment (dipaek ketika Looping)
let r = 9
r++
console.log(r);

let k = 8
k--
console.log(k);

let n = 3;
n = n + 3 
console.log(n);