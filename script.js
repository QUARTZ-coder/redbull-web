document.getElementById('loginBtn').addEventListener('click', function() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const btn = document.getElementById('loginBtn');

    if (user === "Fahmi" && pass === "fahmi123") {
        btn.disabled = true; // Kunci tombol agar tidak diklik lagi
        
        let seconds = 0;
        const hackerTexts = [
            "SCANNING SYSTEM...",     // Detik 1
            "BYPASSING FIREWALL...",   // Detik 2
            "ACCESSING DATABASE...",   // Detik 3
            "INJECTING EXPLOIT...",    // Detik 4
            "EXTRACTING DATA...",      // Detik 5
            "DECRYPTING FILES...",     // Detik 6
            "ACCESS GRANTED!"          // Detik 7
        ];

        const loadingInterval = setInterval(() => {
            btn.innerText = hackerTexts[seconds];
            seconds++;
            
            if (seconds >= hackerTexts.length) {
                clearInterval(loadingInterval);
                window.location.href = "dashboard.html"; // Pindah setelah 7 detik
            }
        }, 1000); // Update setiap 1000ms (1 detik)

    } else {
        alert("ACCESS DENIED: Unauthorized User!");
    }
});
