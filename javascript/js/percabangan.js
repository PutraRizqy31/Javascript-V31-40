if (true) {
    console.log("dijalankan jika benar");
}else{
    console.log("dijalankan jika salah");
}

let nilai = 70;
let standart = 60;
let baik = "LULUS";
let gagal = "TIDAK LULUS";
let batasatas = 100;
let batasbawah = 0;
let peringatan = "Nilai salah"

if (nilai <= batasatas && nilai >= batasbawah) {
    if (nilai >= standart) {
        console.log(baik);
    } else {
        console.log(gagal);
    }
} else {
    console.log(peringatan);
}

