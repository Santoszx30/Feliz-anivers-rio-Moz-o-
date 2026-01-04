window.onload = function() {
    const phone = document.getElementById("phone");
    const loadingBar = document.getElementById("loadingBar");

    const flyingWords = ["PRINCESA","PITUCHA","BUXINN","CACHEADA","PRETINHA","PITICA","HELLO KITTY","PEQUENA","LINDA","MARAVILHOSA","PERFEITA","CHEIROSA","GOSTOSA","DELÍCIA"];
    const body = document.body;

    // Fotos da Giovanna
    const photos = [];
    for(let i=1; i<=20; i++){
        photos.push(`fotos/foto${i}.jpg`);
    }

    let currentPhoto = 0;

    // Criar imagens dentro do celular
    photos.forEach((src, index)=>{
        const img = document.createElement("img");
        img.src = src;
        img.style.opacity = 0;
        img.style.position = "absolute";
        img.style.top = "10%";
        img.style.left = "10%";
        img.style.width = "80%";
        img.style.borderRadius = "15px";
        img.style.transition = "opacity 0.8s ease";
        phone.appendChild(img);
    });

    const imgs = phone.querySelectorAll("img");

    // Mostrar fotos dentro do celular uma a uma
    function showPhotos() {
        if(currentPhoto < imgs.length){
            imgs[currentPhoto].style.opacity = 1;
            currentPhoto++;
            setTimeout(showPhotos, 500); // intervalo entre fotos
        }
    }

    showPhotos();

    // Criar elogios voando
    function createFlyingText(){
        const text = document.createElement("div");
        text.className = "flyingText";
        text.innerText = flyingWords[Math.floor(Math.random()*flyingWords.length)];
        text.style.left = Math.random()*85 + "%";
        text.style.color = ["#8a2be2","#00f","#fff","#f0f","#ff69b4"][Math.floor(Math.random()*5)];
        text.style.fontSize = (16+Math.random()*12) + "px";
        text.style.animationDuration = (3 + Math.random()*3) + "s";
        text.style.position = "absolute";
        text.style.bottom = "0px";
        body.appendChild(text);
        setTimeout(()=>text.remove(),8000);
    }

    // Criar corações voando
    function createFlyingHearts(){
        const heart = document.createElement("div");
        heart.className="flyingHeart";
        heart.innerText="💜";
        heart.style.left = Math.random()*95 + "%";
        heart.style.animationDuration = (3 + Math.random()*3)+"s";
        heart.style.position = "absolute";
        heart.style.bottom = "0px";
        body.appendChild(heart);
        setTimeout(()=>heart.remove(),6000);
    }

    // Barra de carregamento
    let progress = 0;
    const loadingInterval = setInterval(()=>{
        progress += 1;
        loadingBar.style.width = progress + "%";

        createFlyingText();
        createFlyingHearts();

        if(progress>=100){
            clearInterval(loadingInterval);
            // Redirecionar para página 2
            window.location.href = "surpresa.html";
        }
    }, 100);
};
