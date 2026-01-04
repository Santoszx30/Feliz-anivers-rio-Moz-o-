const cellPhone = document.getElementById("cell-phone");
const loadingProgress = document.querySelector(".loading-progress");
const flyingHeartsContainer = document.body;

// Fotos dentro do celular (coloque 20 fotos se quiser)
const photos = [];
for(let i=1; i<=20; i++){
  photos.push(`fotos/foto${i}.jpg`);
}

let currentPhoto = 0;
const imgEls = [];

// Cria imagens dentro do celular
photos.forEach((src)=>{
  const img = document.createElement("img");
  img.src = src;
  cellPhone.appendChild(img);
  imgEls.push(img);
});

// Mostra cada foto por 0.5s de delay no celular
function showPhotos(){
  if(currentPhoto > 0) imgEls[currentPhoto-1].style.opacity = 0;
  if(currentPhoto < imgEls.length){
    imgEls[currentPhoto].style.opacity = 1;
    currentPhoto++;
    setTimeout(showPhotos, 500);
  }
}

// Inicia a animação de fotos e barra
showPhotos();
loadingProgress.style.width = "0%";
loadingProgress.style.animation = "load 10s linear forwards";

// ----------------- Corações voando -----------------
const flyingHearts = ["💜","❤️","💖"];
function createFlyingHeart(){
  const h = document.createElement("div");
  h.className = "flying-heart";
  h.innerText = flyingHearts[Math.floor(Math.random()*flyingHearts.length)];
  h.style.left = Math.random()*window.innerWidth + "px";
  h.style.top = window.innerHeight + "px";
  h.style.fontSize = (10 + Math.random()*15) + "px";
  flyingHeartsContainer.appendChild(h);
  setTimeout(()=>h.remove(),6000);
}
setInterval(createFlyingHeart, 400);

// ----------------- Elogios flutuantes -----------------
const elogios = ["PRINCESA","PITUCHA","BUXINN","CACHEADA","PRETINHA","PITICA","HELLO KITTY","PEQUENA","LINDA","MARAVILHOSA","PERFEITA","CHEIROSA","GOSTOSA","DELÍCIA"];
function createFlyingElogio(){
  const e = document.createElement("div");
  e.className = "flying-elogio";
  e.innerText = elogios[Math.floor(Math.random()*elogios.length)];
  e.style.top = Math.random()*window.innerHeight + "px";
  flyingHeartsContainer.appendChild(e);
  setTimeout(()=>e.remove(),8000);
}
setInterval(createFlyingElogio, 500);
