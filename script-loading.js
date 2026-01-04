window.onload = function() {

    const cellPhone = document.getElementById("cell-phone");
    const loadingProgress = document.querySelector(".loading-progress");
    const body = document.body;

    // ----------------- FOTOS DENTRO DO CELULAR -----------------
    const photos = [];
    for (let i = 1; i <= 20; i++) {
        photos.push(`fotos/foto${i}.jpg`);
    }

    let currentPhoto = 0;
    const imgEls = [];

    photos.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.style.opacity = 0;
        img.style.transition = "opacity 0.5s";
        cellPhone.appendChild(img);
        imgEls.push(img);
    });

    function showPhotos() {
        if (currentPhoto > 0) imgEls[currentPhoto - 1].style.opacity = 0;
        if (currentPhoto < imgEls.length) {
            imgEls[currentPhoto].style.opacity = 1;
            currentPhoto++;
            setTimeout(showPhotos, 500);
        }
    }
    showPhotos();

    // ----------------- BARRA DE CARREGAMENTO -----------------
    loadingProgress.style.width = "0%";
    loadingProgress.style.animation = "load 10s linear forwards";

    // ----------------- CORAÇÕES VOANDO -----------------
    const flyingHearts = ["💜","❤️","💖"];
    function createFlyingHeart() {
        const h = document.createElement("div");
        h.className = "flying-heart";
        h.innerText = flyingHearts[Math.floor(Math.random() * flyingHearts.length)];
        h.style.left = Math.random() * window.innerWidth + "px";
        h.style.top = window.innerHeight + "px";
        h.style.fontSize = (10 + Math.random() * 20) + "px";
        h.style.position = "fixed";
        h.style.zIndex = 9999;
        body.appendChild(h);

        const duration = 4000 + Math.random() * 3000;
        h.animate([
            { transform: `translateY(0px)` },
            { transform: `translateY(-${window.innerHeight + 50}px)` }
        ], { duration: duration, iterations: 1 });

        setTimeout(() => h.remove(), duration);
    }
    setInterval(createFlyingHeart, 300);

    // ----------------- ELOGIOS VOANDO -----------------
    const elogios = ["PRINCESA","PITUCHA","BUXINN","CACHEADA","PRETINHA","PITICA","HELLO KITTY","PEQUENA","LINDA","MARAVILHOSA","PERFEITA","CHEIROSA","GOSTOSA","DELÍCIA"];
    function createFlyingElogio() {
        const e = document.createElement("div");
        e.className = "flying-elogio";
        e.innerText = elogios[Math.floor(Math.random() * elogios.length)];
        e.style.left = Math.random() * window.innerWidth + "px";
        e.style.top = window.innerHeight + "px";
        e.style.fontSize = (14 + Math.random() * 16) + "px";
        e.style.position = "fixed";
        e.style.zIndex = 9999;
        body.appendChild(e);

        const duration = 5000 + Math.random() * 3000;
        e.animate([
            { transform: `translateY(0px)` },
            { transform: `translateY(-${window.innerHeight + 50}px)` }
        ], { duration: duration, iterations: 1 });

        setTimeout(() => e.remove(), duration);
    }
    setInterval(createFlyingElogio, 400);

    // ----------------- REDIRECIONAMENTO AUTOMÁTICO -----------------
    setTimeout(() => {
        window.location.href = "surpresa.html";
    }, 10000); // 10 segundos
};
