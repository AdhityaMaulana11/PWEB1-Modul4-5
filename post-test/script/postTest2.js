const showDataBarang = () => {
    let kdBarang = document.getElementById("kdBarang").value;
    switch (kdBarang) {
        case "B001":
            document.getElementById("namaBarang").value = "Buku";
            document.getElementById("harga").value = 5000;
            break;
        case "B002":
            document.getElementById("namaBarang").value = "Penggaris";
            document.getElementById("harga").value = 1500;

            break;
        case "B003":
            document.getElementById("namaBarang").value = "Pulpen";
            document.getElementById("harga").value = 2000;

            break;

        default:
            document.querySelector("form").reset();
            break;
    }
}
const showCalculation = () => {
    let inputJmlhBeli = parseInt(document.getElementById("jmlhBeli").value);
    let inputHargaBarang = parseFloat(document.getElementById("harga").value);
    let inputJmlhBayar = document.getElementById("jmlhBayar");
    let inputPotongan = document.getElementById("potongan");
    let inputDiskon = document.getElementById("persenPotongan");
    let inputTotalBayar = document.getElementById("totalBayar");

    if (isNaN(inputJmlhBeli) || isNaN(inputHargaBarang)) {
        alert("Harap masukkan jumlah beli dan harga barang dengan benar.");
        return;
    }

    let bayar = inputJmlhBeli * inputHargaBarang;
    let potongan = 0;
    let diskon = "0%";
    let totalBayar = bayar;

    if (inputJmlhBeli <= 10) {
        potongan = parseInt(0.05 * bayar);
        inputDiskon.value = "5";
    } else if (inputJmlhBeli <= 20) {
        potongan = parseInt(0.1 * bayar);
        inputDiskon.value = "10";
    } else {
        potongan = parseInt(0.15 * bayar);
        inputDiskon.value = "15";
    }
    totalBayar = bayar - potongan;

    inputJmlhBayar.value = bayar;
    inputPotongan.value = potongan;
    inputTotalBayar.value = totalBayar;
};
const renderInvoice = () => {
    let inputKdBarang = document.getElementById("kdBarang").value;
    let inputJmlhBeli = document.getElementById("jmlhBeli").value;
    let inputNamaBarang = document.getElementById("namaBarang").value;
    let inputHargaBarang = document.getElementById("harga").value;
    let inputJmlhBayar = document.getElementById("jmlhBayar").value;
    let inputPotongan = document.getElementById("potongan").value;
    let inputTotalBayar = document.getElementById("totalBayar").value;
    let invoice = document.querySelector(".invoice-container");

    if (inputKdBarang == "" || inputJmlhBeli == "") {
        alert("Harap isi form dengan benar")
        return;
    }

    invoice.innerHTML = `
    <h2>NOTA PENJUALAN</h2>
    <pre>
    Kode Barang\t= ${inputKdBarang}
    Nama Barang\t= ${inputNamaBarang}
    Harga Barang\t= ${inputHargaBarang}
    Jumlah Beli\t\t= ${inputJmlhBeli}
    ---------------------------------
    Jumlah Bayar\t= ${inputJmlhBayar}
    Potongan\t\t= ${inputPotongan}
    ===================
    Total Bayar\t\t= ${inputTotalBayar}
    </pre>
    `;
}