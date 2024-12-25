document.getElementById('facilityForm').addEventListener('submit', function (e) {
    e.preventDefault();

    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    let isValid = true;

    const idFasilitas = document.getElementById('idFasilitas').value.trim();
    if (!idFasilitas) {
        document.getElementById('idFasilitasError').textContent = 'ID Fasilitas wajib diisi';
        isValid = false;
    }

    const namaFasilitas = document.getElementById('namaFasilitas').value.trim();
    if (!namaFasilitas) {
        document.getElementById('namaFasilitasError').textContent = 'Nama Fasilitas wajib diisi';
        isValid = false;
    }

    const hargaWeekend = document.getElementById('hargaWeekend').value.trim();
    if (!hargaWeekend || isNaN(hargaWeekend) || hargaWeekend <= 0) {
        document.getElementById('hargaWeekendError').textContent = 'Harga Weekend harus berupa angka positif';
        isValid = false;
    }

    const hargaWeekday = document.getElementById('hargaWeekday').value.trim();
    if (!hargaWeekday || isNaN(hargaWeekday) || hargaWeekday <= 0) {
        document.getElementById('hargaWeekdayError').textContent = 'Harga Weekday harus berupa angka positif';
        isValid = false;
    }

    const kuota = document.getElementById('kuota').value.trim();
    if (!kuota || isNaN(kuota) || kuota <= 0) {
        document.getElementById('kuotaError').textContent = 'Kuota harus berupa angka positif';
        isValid = false;
    }

    const jamBuka = document.getElementById('jamBuka').value;
    if (!jamBuka) {
        document.getElementById('jamBukaError').textContent = 'Jam Buka wajib diisi';
        isValid = false;
    }

    const jamTutup = document.getElementById('jamTutup').value;
    if (!jamTutup) {
        document.getElementById('jamTutupError').textContent = 'Jam Tutup wajib diisi';
        isValid = false;
    }

    if (isValid) {
        alert('Form berhasil disubmit!');
        this.submit();
    }
});