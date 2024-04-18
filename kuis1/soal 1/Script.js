// lanjutkan script ini ya ...
let data = ["Arif"];
let listhobi = ["membaca","bermaingame","belajar"]


let nama = document.getElementById("nama");
// tampilkan data localstrorage ke dalam elemen <p id="nama">
nama.innerHTML = localStorage.getItem("nama");

let hobi = document.getElementById("hobi");
localStorage.setItem("hobi", hobi);
localStorage.setItem("myhobi", JSON.stringify (hobi));

let  = {nama: "arif", hobi: "bermaingame"};
// cara akses
console.log(mhs.nama);
console.log(mhs.hobi);
// ...
// ...