// lanjutkan script ini ya ...
let data = ["membaca","bermain game","coding"];
let listnama = document.getElementById("listnama")

data.forEach(showWebsiteDebuggingdanMemperbaikiProgram);

function showWebsiteDebuggingdanMemperbaikiProgram(velue, index){
    console.log(velue);
    listhobi.innerHTML += "<li>" + velue + "</li>";
}

let nama = document.getElementById("nama");
// tampilkan data localstrorage ke dalam elemen <p id="nama">
nama.innerHTML = localStorage.getItem("nama");

let hobi = ["arif"];
localStorage.setItem("hobi", hobi);
localStorage.setItem("myhobi", JSON.stringify (hobi));
nama.innerHTML = localStorage.getItem("hobi");

// ...
// ...