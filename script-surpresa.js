// Fotos e elogios
const photos = [];
for(let i=1;i<=20;i++){
  photos.push(`fotos/foto${i}.jpg`);
}

// Elogios
const elogios = [
  "Seus olhos me prendem de um jeito que eu nunca senti antes.",
  "Olhar nos seus olhos é como mergulhar em um mar de carinho e intensidade.",
  "Seu sorriso me deixa sem palavras, é impossível não me perder nele.",
  "Cada cacho seu é como uma obra de arte que eu poderia admirar o dia todo.",
  "Quando você me abraça, sinto que finalmente encontrei meu lugar no mundo.",
  "Seu jeito doce me faz sentir amado de uma forma que eu nunca imaginei.",
  "Te observar me fez entender que amor é também respeito, confiança e compreensão verdadeira.",
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

let currentPhoto = 0;

const photoEl = document.getElementById("photo");
const elogioEl = document.getElementById("photoElogio");
const nextBtn = document.getElementById("nextPhoto");
const giantHeart = document.getElementById("giantHeart");
const finalBtn = document.getElementById("showText");
const finalText = document.getElementById("finalText");

// Função para mostrar foto atual
function showPhoto(index){
  if(index >= photos.length) return;
  photoEl.src = photos[index];
  photoEl.style.display = "block";
  photoEl.style.opacity = 0;
  photoEl.style.transform = "scale(0.8)";
  elogioEl.innerText = elogios[index];
  setTimeout(()=>{
    photoEl.style.transition = "opacity 1s, transform 1s";
    photoEl.style.opacity = 1;
    photoEl.style.transform = "scale(1)";
  }, 50);
}

nextBtn.addEventListener("click", ()=>{
  currentPhoto++;
  if(currentPhoto >= photos.length) currentPhoto = photos.length-1;
  showPhoto(currentPhoto);
});

// Explosão de corações
giantHeart.addEventListener("click", ()=>{
  for(let i=0;i<30;i++){
    const h = document.createElement("div");
    h.className = "explosion-heart";
    h.style.left = (giantHeart.offsetLeft + 50) + "px";
    h.style.top = (giantHeart.offsetTop + 50) + "px";
    h.style.setProperty("--x", (Math.random()*200-100)+"px");
    h.style.setProperty("--y", (Math.random()*200-100)+"px");
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),1000);
  }
  currentPhoto = 0;
  showPhoto(currentPhoto);
});

// Botão texto final
finalBtn.addEventListener("click", ()=>{
  finalText.style.display="block";
  finalText.innerHTML = `
FELIZ ANIVERSÁRIO MINHA PRETINHAAA
Hoje é um dia especial, só seu, e eu quero que ele seja mágico.
Cada momento que passo ao seu lado me faz sentir a pessoa mais sortuda do mundo.
Seu sorriso ilumina tudo ao redor, como se o sol tivesse decidido nascer em você.
Cada cacho seu dança como se tivesse vida própria, e eu não consigo parar de admirar.
Você me fez entender que amor é muito mais que palavras; é cuidado, respeito, confiança… e desejo. 💜
Seu jeito de olhar me faz perder o fôlego e querer me perder em você para sempre.
Cada gesto seu, mesmo pequeno, me provoca uma felicidade que eu não consigo conter.
Eu amo o jeito que você me faz sentir amado de verdade, completo e enlouquecedor.
Sua personalidade vibrante é contagiante e me faz querer estar sempre perto, querendo mais.
O seu corpo e seu charme me deixam maravilhado e me fazem arrepiar.
Eu poderia passar horas só te observando, admirando cada detalhe seu… e desejando cada um deles.
Seus olhos têm a profundidade de um universo, e me perco neles com prazer.
A cada dia que passa, descubro novas razões para te amar ainda mais… e desejar você ainda mais.
Você é intensa, verdadeira e completamente irresistível.
Não existe nada no mundo que se compare à sensação de estar perto de você, sentindo sua energia.
Seus risos são música, e cada nota me faz querer dançar junto da vida… e junto de você.
Eu me apaixono por você todos os dias, como se fosse a primeira vez… e a mais quente também.
Seu jeito me faz sentir que tudo na vida tem mais sentido quando você está por perto… e me olhando assim.
Eu amo como você consegue ser fofa e ousada ao mesmo tempo, me deixando louco.
Cada palavra sua é poesia, e cada silêncio seu é música… e promessa de algo mais.
Você é meu pensamento constante, meu desejo diário e minha inspiração sem fim.
Eu quero te fazer sorrir todos os dias e provar que posso te dar prazer e felicidade juntos.
Eu amo cada detalhe seu, cada mania, cada jeito de ser único… e provocante.
Você é a mistura perfeita de delicadeza e intensidade que me deixa fascinado e sem controle.
Eu me perco na beleza do seu jeito de ser, na sua risada, no seu olhar… e em cada curva do seu corpo.
A vida é infinitamente melhor porque você existe nela… e porque eu posso sentir você assim tão perto.
Eu nunca vou cansar de te elogiar, de te admirar e de te querer cada vez mais.
Que todos os seus sonhos comecem a se realizar hoje… e que você realize alguns meus também.
Obrigado por ser você, exatamente do jeitinho que me faz sorrir tanto… e suspirar demais.
FELIZ ANIVERSÁRIO, minha pretinha… você é meu maior presente, minha tentação e meu desejo! 💜
`;
});
