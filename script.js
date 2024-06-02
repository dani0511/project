// deklarasi variabel
var a =10
var b =5
// menghasilkan hasil output melalui console
console.log(a+b) 

function penjumlahan(a , b) { // parameter
    return a + b;
}
console.log(penjumlahan); //argument


function penjumlahan() {
    var angka1 =document.getElementById("angka1"). Value;
    var angka2 =document.getElementById("angka2"). Value;
    //prasient berfungsi untuk mengubah string kedalam bentuk int
    //karena var angka,angka2 masih berbentuk string jadi perlu diubah
    var angka1parsed = parseInt(angka1)
    var angka2parsed = parseInt(angka2)
    var angka3 = angka1parsed + angka2parsed
    var hasilpenjumlahan = document.getElementById("hasilpenjumlahan ")
    hasilpenjumlahan.innerHTML = "Hasil penjumlahan dari: " + 10 + "+" + 20 + "=" + 30;
}
   

