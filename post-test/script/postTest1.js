let gapok;
let tunjangan;
let gajiBersih;
const showGapok = () => {
    let golongan = document.querySelector("#gol").value;
    switch (golongan) {
        case "I":
            document.querySelector("#gapok").value = 2500000;
            break;
        case "II":
            document.querySelector("#gapok").value = 3000000;

            break;
        case "III":
            document.querySelector("#gapok").value = 3500000;
            break;

        default:
            break;
    }
}
const hit = () => {
    let golongan = document.querySelector("#gol").value;
    let jmlhAnak = document.querySelector("#anak").value;
    let inputGapok = document.querySelector("#gapok");
    let inputTunjangan = document.querySelector("#tunjangan");
    let inputGasih = document.querySelector("#gaji");
    switch (golongan) {
        case "I":
            gapok = 2500000;
            tunjangan = (jmlhAnak * gapok) * 0.05;
            gajiBersih = gapok + tunjangan;
            break;
        case "II":
            gapok = 3000000;
            tunjangan = (jmlhAnak * gapok) * 0.1;
            gajiBersih = gapok + tunjangan;
            break;
        case "III":
            gapok = 3500000;
            tunjangan = (jmlhAnak * gapok) * 0.15;
            gajiBersih = gapok + tunjangan;
            break;
        default:
            break;
    }
    inputGapok.value = gapok;
    inputTunjangan.value = tunjangan;
    inputGasih.value = gajiBersih

}