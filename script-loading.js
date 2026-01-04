const phone = document.getElementById("phone");
const loadingBar = document.getElementById("loadingBar");
const flyingWords = ["PRINCESA","PITUCHA","BUXINN","CACHEADA","PRETINHA","PITICA","HELLO KITTY","PEQUENA","LINDA","MARAVILHOSA","PERFEITA","CHEIROSA","GOSTOSA","DELÍCIA"];
const flyingHearts = [];

const photos = [];
for(let i=1;i<=20;i++) photos.push(`fotos/foto${i}.jpg`);

let currentPhoto = 0;

// Criar fotos dentro do celular
photos.forEach((src,i)=>{
    const img = document.createElement("img");
    img.src = src;
    img.style.opacity=0;
    phone.appendChild(img);
});

// Mostrar fotos dentro do celular automaticamente
function showPhotos() {
    const imgs = phone.querySelectorAll("img");
    if(currentPhoto<imgs.length){
        imgs[currentPhoto].style.opacity = 1;
        currentPhoto++;
        setTimeout(showPhotos, 500);
    }
}

// Criar elogios voando
function createFlyingText(){
    const text = document.createElement("div");
    text.className = "flyingText";
    text.innerText = flyingWords[Math.floor(Math.random()*flyingWords.length)];
    text.style.left = Math.random()*90 + "%";
    text.style.color = ["#8a2be2","#00f","#fff","#f0f","#ff69b4"][Math.floor(Math.random()*5)];
    text.style.fontSize = (16+Math.random()*12) + "px";
    text.style.animationDuration = (4 + Math.random()*4) + "s";
    document.body.appendChild(text);
    setTimeout(()=>text.remove(),8000);
}

// Criar corações voando
function createFlyingHearts(){
    const heart = document.createElement("div");
    heart.className="flyingHeart";
    heart.innerText="💜";
    heart.style.left = Math.random()*95 + "%";
    heart.style.animationDuration = (3 + Math.random()*3)+"s";
    document.body.appendChild(heart);
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

// Iniciar fotos dentro do celular
showPhotos();
