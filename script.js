let totalHarga = 0;
let daftar =[];

function formatRupiah(angka) {
    return "Rp" +
angka.toLocaleString("id-ID");   
}

// Fungsi 1: Menambahkan Pesanan
function Pesan(nama, harga) {
    daftar.push({ nama: nama, harga: harga});
    totalHarga += harga;

    tampilkanPesanan();
}

// Menampilkan daftar pesanan
function tampilkanPesanan() {
    let daftarPesanan =
document.getElementByid("daftaraPesanan");

    daftaraPesanan.innerHTML = "";

    daftar.forEach(function(item) {
        let li =
document.createElementByid("li");
        li.textContent = item.nama + " - " + formatRupiah(item.harga);
        daftaraPesanan.appendChild(li);
    });


document.getElementByid("total").textContent =
         formatRupiah(totalHarga);
}

// Fungsi 2: Konfirmasi Pesanan 
function Konfirmasi() {
    if (daftar.length === 0) {
        alert("Silahkan pilih makanan terlebih dahulu!");
    } else {
        alert("Pesanan berhasil dicatat! Total: " + formatRupiah(totalHarga));
    }
}

// Fungsi 3: Menghapus pesanan
function hapusPesanan() {
    daftar = [];
    totalHarga = 0;
    tampilkanPesanan();
}

// Fungsi 4: Mengubah mode gelap
document.getElementByid("datkMode"). addEv
entListener("click", function() {

document.body.classList.toggle("dark");
});