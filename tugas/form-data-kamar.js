document.getElementById('roomForm').addEventListener('submit', function (e) {
    e.preventDefault();

    document.querySelectorAll('.error-message').forEach(error => error.textContent = '');

    let isValid = true;

    const roomId = document.getElementById('roomId').value.trim();
    if (!roomId) {
        document.getElementById('roomIdError').textContent = 'ID Kamar wajib diisi.';
        isValid = false;
    }

    const roomImage = document.getElementById('roomImage').files.length;
    if (roomImage === 0) {
        document.getElementById('roomImageError').textContent = 'Gambar Ruangan wajib diunggah.';
        isValid = false;
    }

    const roomType = document.getElementById('roomType').value.trim();
    if (!roomType) {
        document.getElementById('roomTypeError').textContent = 'Jenis Kamar wajib diisi.';
        isValid = false;
    }

    const roomPrice = document.getElementById('roomPrice').value.trim();
    if (!roomPrice || roomPrice <= 0) {
        document.getElementById('roomPriceError').textContent = 'Harga harus diisi dan lebih dari 0.';
        isValid = false;
    }

    const roomFacilities = document.getElementById('roomFacilities').value.trim();
    if (!roomFacilities) {
        document.getElementById('roomFacilitiesError').textContent = 'Fasilitas wajib diisi.';
        isValid = false;
    }

    if (isValid) {
        alert('Form berhasil dikirim!');
    }
});