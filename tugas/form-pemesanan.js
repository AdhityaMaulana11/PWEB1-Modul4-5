const hargaPerKamar = {
    standar: 500000,
    deluxe: 700000,
    family: 1000000
};

const pemesananForm = document.getElementById('pemesananForm');
const tipeKamar = document.getElementById('tipe_kamar');
const durasiMenginap = document.getElementById('durasi_menginap');
const breakfastCheckbox = document.querySelectorAll('input[name="breakfast"]');
const hargaKamarInput = document.getElementById('harga_kamar');
const totalBayarInput = document.getElementById('total_bayar');
const resumeDiv = document.getElementById('resume');
const resumeDetails = document.getElementById('resumeDetails');

function calculateTotal() {
    const tipe = tipeKamar.value;
    const durasi = parseInt(durasiMenginap.value) || 0;
    let total = 0;
    let breakfast = 0;
    if (tipe !== "-" && durasi > 0) {
        total = hargaPerKamar[tipe] * durasi;
        if (durasi > 3) {
            total *= 0.1;
        }
        breakfast = document.querySelector('input[name="breakfast"]:checked')?.value === "Ya" ? 80000 : 0;
        total += breakfast;
    }
    hargaKamarInput.value = hargaPerKamar[tipe] || '';
    totalBayarInput.value = total + breakfast;
}

tipeKamar.addEventListener('change', calculateTotal);
durasiMenginap.addEventListener('input', calculateTotal);
breakfastCheckbox.forEach(checkbox => checkbox.addEventListener('change', calculateTotal));

pemesananForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(pemesananForm);
    let isValid = true;
    formData.forEach((value, key) => {
        if (!value && key !== 'breakfast') {
            isValid = false;
        }
    });

    if (isValid) {
        resumeDiv.style.display = 'block';
        resumeDetails.innerHTML = `
            <strong>Id Pemesan:</strong> ${formData.get('id_pemesan')}<br>
            <strong>Nama Pemesan:</strong> ${formData.get('nama_pemesan')}<br>
            <strong>Nomor Identitas:</strong> ${formData.get('nomor_identitas')}<br>
            <strong>Jenis Kelamin:</strong> ${formData.get('jenis_kelamin')}<br>
            <strong>Tipe Kamar:</strong> ${formData.get('tipe_kamar')}<br>
            <strong>Durasi Menginap:</strong> ${formData.get('durasi_menginap')} Hari<br>
            <strong>Termasuk Breakfast:</strong> ${formData.get('breakfast')}<br>
            <strong>Total Bayar:</strong> ${formData.get('total_bayar')}<br>
        `;
    } else {
        alert('Mohon lengkapi semua data');
    }
});