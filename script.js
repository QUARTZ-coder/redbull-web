// Data akun yang kamu ciptakan sendiri
const dataAkun = {
    usernameAdmin: "Fahmi",
    passwordAdmin: "Fahmi 1223"
};

document.getElementById('loginBtn').addEventListener('click', function() {
    const userinput = document.getElementById('username').value;
    const passinput = document.getElementById('password').value;

    // Cek apakah inputan sesuai dengan data yang kamu atur
    if (userinput === dataAkun.usernameAdmin && passinput === dataAkun.passwordAdmin) {
        alert("Login Berhasil! Selamat datang Fahmi.");
        // window.location.href = "halaman_utama.html";
    } else {
        alert("Username atau Password salah! Pastikan ketikannya benar.");
    }
});
