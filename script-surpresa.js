const bigHeart = document.getElementById("bigHeart");
const gallery = document.getElementById("gallery");
const finalText = document.getElementById("finalText");
const music = document.getElementById("music");

const words = [
  "PRINCESA","PITUCHA","CACHEADA","HELLO KITTY",
  "PEQUENA","LINDA","MARAVILHOSA","PERFEITA",
  "CHEIROSA","ILUMINADA","ÚNICA","ESPECIAL",
  "MEU AMOR","MEU ORGULHO"
];

const photos = [];
for(let i=1;i<=20;i++){
  photos.push(`fotos/foto${i}.jpg`);
}

/* Coração explode em corações pequenos */
bigHeart.addEventListener("click", ()=>{
  for(let i=0;i<30;i++){
    const h=document.createElement("div");
    h.className="heart";
    h.innerText="💜";
    h.style.left=Math.random()*100+"vw";
    h.style.animationDuration=(2+Math.random()*3)+"s";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),4000);
  }
});

/* Galeria */
let photoIndex = 0;

function showPhoto(index){
  gallery.innerHTML="";
  const img=document.createElement("img");
  img.src=photos[index];
  img.style.transform="scale(0.8)";
  gallery.appendChild(img);
  setTimeout(()=>img.style.transform="scale(1)",100);
}

showPhoto(photoIndex);

/* Avançar foto */
gallery.addEventListener("click", ()=>{
  photoIndex++;
  if(photoIndex>=photos.length){
    finalText.classList.remove("hidden");
    return;
  }
  showPhoto(photoIndex);
});

/* Corações e palavras flutuantes */
setInterval(()=>{
  const heart=document.createElement("div");
  heart.className="heart";
  heart.innerText="💜";
  heart.style.left=Math.random()*100+"vw";
  heart.style.animationDuration=(4+Math.random()*3)+"s";
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),7000);
},500);

setInterval(()=>{
  const word=document.createElement("div");
  word.className="word";
  word.innerText=words[Math.floor(Math.random()*words.length)];
  word.style.top=Math.random()*100+"vh";
  word.style.animationDuration=(8+Math.random()*6)+"s";
  document.body.appendChild(word);
  setTimeout(()=>word.remove(),12000);
},700);

/* Play música */
document.getElementById("playMusic").addEventListener("click", ()=>{
  music.play();
});

/* Botão texto final */
document.getElementById("textoBtn").addEventListener("click", ()=>{
  finalText.classList.remove("hidden");
});
