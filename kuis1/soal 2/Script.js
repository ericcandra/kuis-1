let npm = 2226240001;
let nama = "Arif";
let nilai = [80, 70, 90, 85, 60, 88];
;


let nam = document.getElementById("nama");
// tampilkan data localstrorage ke dalam elemen <p id="nama">
nama.innerHTML = localStorage.getItem("nama");


// tampilkan nama_mk pemrograman web
console.log(nilai[0].nilai);
console.log(nilai[100].nilai);

// simpan nilai ke dalam localstorage
localStorage.setItem("nilai", JSON.stringify(nilai));

// tampilkan menggunakan for atau forEach
let lsNilai = JSON.parse(localStorage.getItem("nilai"));
for (const [index,data] of lsNilai.entries()){
    console.log(data.npm);
    console.log(data.nama);
    console.log(data.nilai);
    // tampilkan data mk ke dalam <ul id="listMk">
    document.getElementById("listMk").innerHTML += `<li>${data.kode_mk}${data.nama_mk}</li>`;
}
// lanjutkan scriptnya ya ...