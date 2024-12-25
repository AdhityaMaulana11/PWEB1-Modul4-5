document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Username dan Password tidak boleh kosong!");
    } else {
        if (username === "admin" && password === "123") {
            alert("Login berhasil!");
            window.location.href = "index.html";
        } else {
            alert("Login Gagal!");
            window.location.href = "formLogin.html";
        }
    }
});