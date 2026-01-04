// ----------------- Galeria de Fotos e Elogios -----------------
const photos2 = [];
for(let i=1;i<=20;i++){
  photos2.push(`fotos/foto${i}.jpg`);
}

const elogios2 = [
  "Seus olhos me prendem de um jeito que eu nunca senti antes.",
  "Olhar nos seus olhos é como mergulhar em um mar de carinho e intensidade.",
  "Seu sorriso me deixa sem palavras, é impossível não me perder nele.",
  "Cada cacho seu é como uma obra de arte que eu poderia admirar o dia todo.",
  "Quando você me abraça, sinto que finalmente encontrei meu lugar no mundo.",
  "Seu jeito doce me faz sentir amado de uma forma que eu nunca imaginei.",
  "Te observar me fez entender que amor é muito mais que palavras; é cuidado, respeito, confiança… e desejo.",
  "Seu corpo é simplesmente hipnotizante, e cada curva me fascina sem limite.",
  "Seus cachos e seu sorriso juntos formam uma combinação que me enlouquece.",
  "Sua presença transforma qualquer momento comum em algo extraordinário.",
  "O jeito que você sorri me faz esquecer de tudo e querer estar sempre perto.",
  "Seu corpo e seu charme me fazem sentir algo que não consigo controlar.",
  "Seu sorriso ilumina até os meus dias mais cinzentos.",
  "Quando te vejo, sinto que cada momento ao seu lado vale mais que qualquer sonho.",
  "Sua personalidade vibrante me faz sorrir só de pensar em você.",
  "Seus cachos, seu corpo e seu jeito me deixam completamente fascinado.",
  "O simples toque do seu olhar faz meu coração acelerar.",
  "Cada gesto seu me faz sentir mais apaixonado e conectado a você.",
  "Seu corpo misturado com seu sorriso, me dão sentimentos que eu não sei controlar 🫦",
  "Você é intensa do melhor jeito possível 🫦"
];

let currentPhoto2 = 0;

const photoEl = document.getElementById("photo");
const elogioEl = document.getElementById("photoElogio");
const nextBtn = document.getElementById("nextPhoto");
const giantHeart = document.getElementById("giantHeart");
const finalBtn = document.getElementById("showText");
const finalText = document.getElementById("finalText");
const body = document.body;

// ----------------- Mostrar Foto Atual -----------------
function showPhoto(index){
  if(index >= photos2.length) return;
  photoEl.src = photos2[index];
  photoEl.style.display = "block";
  photoEl.style.opacity = 0;
  photoEl.style.transform = "scale(0.8)";
  elogioEl.innerText = elogios2[index];
  setTimeout(()=>{
    photoEl.style.transition = "opacity 1s, transform 1s";
    photoEl.style.opacity = 1;
    photoEl.style.transform = "scale(1)";
  }, 50);
}

// ----------------- Botão Próxima Foto -----------------
nextBtn.addEventListener("click", ()=>{
  currentPhoto2++;
  if(currentPhoto2 >= photos2.length) currentPhoto2 = photos2.length-1;
  showPhoto(currentPhoto2);
  explodeHearts(20);
});

// ----------------- Explosão de corações -----------------
function explodeHearts(number){
  for(let i=0;i<number;i++){
    const h = document.createElement("div");
    h.className = "explosion-heart";
    h.style.left = (giantHeart.offsetLeft + 50) + "px";
    h.style.top = (giantHeart.offsetTop + 50) + "px";
    h.style.setProperty("--x", (Math.random()*200-100)+"px");
    h.style.setProperty("--y", (Math.random()*200-100)+"px");
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),1000);
  }
}

// ----------------- Coração Gigante Clique -----------------
giantHeart.addEventListener("click", ()=>{
  explodeHearts(30);
  currentPhoto2 = 0;
  showPhoto(currentPhoto2);
});

// ----------------- Botão Texto Final -----------------
finalBtn.addEventListener("click", ()=>{
  finalText.style.display="block";
  finalText.innerHTML = `
FELIZ ANIVERSÁRIO MINHA PRETINHAAA
... (texto completo de 30 linhas)
  `;
});

// ----------------- Corações Voando Automáticos -----------------
const flyingHearts2 = ["💜","❤️","💖"];
function createFlyingHeart(){
  const h = document.createElement("div");
  h.className = "flying-heart";
  h.innerText = flyingHearts2[Math.floor(Math.random()*flyingHearts2.length)];
  h.style.left = Math.random()*window.innerWidth + "px";
  h.style.top = window.innerHeight + "px";
  h.style.fontSize = (10 + Math.random()*15) + "px";
  body.appendChild(h);
  setTimeout(()=>h.remove(),6000);
}
setInterval(createFlyingHeart, 400);

// ----------------- Elogios Flutuantes Automáticos -----------------
const elogiosFlutuantes2 = [
  "PRINCESA","PITUCHA","BUXINN","CACHEADA","PRETINHA","PITICA",
  "HELLO KITTY","PEQUENA","LINDA","MARAVILHOSA","PERFEITA","CHEIROSA",
  "GOSTOSA","DELÍCIA","Você é intensa do melhor jeito possível 🫦"
];
function createFlyingElogio(){
  const e = document.createElement("div");
  e.className = "flying-elogio";
  e.innerText = elogiosFlutuantes2[Math.floor(Math.random()*elogiosFlutuantes2.length)];
  e.style.top = Math.random()*window.innerHeight + "px";
  body.appendChild(e);
  setTimeout(()=>e.remove(),8000);
}
setInterval(createFlyingElogio, 500);

// ----------------- Inicializa primeira foto -----------------
showPhoto(currentPhoto2);
