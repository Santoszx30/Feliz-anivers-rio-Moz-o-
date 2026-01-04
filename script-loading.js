const photos = [];
for (let i = 1; i <= 20; i++) {
  photos.push(`fotos/foto${i}.jpg`);
}

const words = [
  "PRINCESA","PITUCHA","BUXINN","CACHEADA",
  "PRETINHA","PITICA","HELLO KITTY","PEQUENA",
  "LINDA","MARAVILHOSA","PERFEITA","CHEIROSA",
  "GOSTOSA","DELÍCIA"
];

const phoneScreen = document.getElementById("phoneScreen");
const progress = document.getElementById("progress");
const loadingText = document.getElementById("loadingText");
const wordsContainer = document.getElementById("words-container");

/* Fotos entrando no celular */
let photoIndex = 0;
setInterval(() => {
  if(photoIndex >= photos.length) return;
  const img = document.createElement("img");
  img.src = photos[photoIndex];
  phoneScreen.appendChild(img);
  setTimeout(() => img.remove(), 4000);
  photoIndex++;
}, 500);

/* Barra de loading 10s */
let percent = 0;
const loadingInterval = setInterval(() => {
  percent++;
  progress.style.width = percent + "%";
  if(percent >= 100){
    clearInterval(loadingInterval);
    setTimeout(()=>{ window.location.href="surpresa.html"; }, 500);
  }
}, 100);

/* Corações flutuantes */
setInterval(()=>{
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText="💜";
  heart.style.left = Math.random()*100+"vw";
  heart.style.animationDuration=(4+Math.random()*3)+"s";
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),7000);
}, 300);

/* Palavras flutuantes com cores, fontes maiores e leve rotação */
setInterval(()=>{
  const word = document.createElement("div");
  word.className="word";
  word.innerText=words[Math.floor(Math.random()*words.length)];
  word.style.top=Math.random()*90+"vh";
  word.style.color=`hsl(${Math.random()*360},70%,80%)`;
  word.style.fontSize=14+Math.random()*10+"px";
  word.style.transform=`rotate(${Math.random()*30-15}deg)`;
  wordsContainer.appendChild(word);
  setTimeout(()=>word.remove(),12000);
}, 600);

/* Texto digitação */
const text = "carregando sua beleza...";
let i = 0;
function typeWriter() {
  if(i < text.length){
    loadingText.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

/* Estrelas piscando */
for(let i=0;i<50;i++){
  const star = document.createElement("div");
  star.className="star";
  star.style.left=Math.random()*100+"vw";
  star.style.top=Math.random()*100+"vh";
  star.style.width = star.style.height = 1+Math.random()*2+"px";
  star.style.animationDuration = (1+Math.random()*2)+"s";
  document.getElementById("stars").appendChild(star);
    }
