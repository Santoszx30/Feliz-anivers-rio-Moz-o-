window.onload = function() {

const giantHeart = document.getElementById("giantHeart");
const photoEl = document.getElementById("photo");
const photoElogio = document.getElementById("photoElogio");
const nextBtn = document.getElementById("nextPhoto");
const finalBtn = document.getElementById("showText");
const finalText = document.getElementById("finalText");
const body = document.body;

// Fotos
const photos = [];
for(let i=1;i<=20;i++) photos.push(`fotos/foto${i}.jpg`);

// Elogios
const elogiosFotos = [
"Seus olhos me prendem de um jeito que eu não consigo explicar 😍",
"Olhar que me deixa sem palavras e apaixonado 💜",
"Seu sorriso é simplesmente perfeito 😘",
"Seus cachos são maravilhosos e me enlouquecem 🫶",
"Ela me fez sentir amado de verdade 💖",
"Ela me ensinou que respeito e confiança são amor 💕",
"Seu corpo me deixa maravilhado 😏",
"Sua personalidade me deixa muito feliz 😊",
"Você é intensa do melhor jeito possível 🔥",
"Seu corpo misturado com seu sorriso me dá sentimentos que eu não sei controlar 🫦",
"Seu jeito de se mover me hipnotiza ✨",
"Seu sorriso combinado com seu olhar me enlouquece 💘",
"Você tem um magnetismo que ninguém consegue resistir 😏",
"A forma como você ri me deixa sem fôlego 😍",
"Seu charme me deixa perdido em pensamentos 💖",
"Cada detalhe seu é arrebatador 💜",
"Seu jeito doce e ousado ao mesmo tempo me fascina 🫶",
"Você é pura tentação e doçura 🔥",
"Seu corpo e energia me deixam sem controle 😘",
"Você é perigosa do melhor jeito possível 🫦"
];

let currentPhoto2 = -1;

// Explodir corações
function explodeHearts(qtd){
    for(let i=0;i<qtd;i++){
        const h=document.createElement("div");
        h.className="explosion-heart";
        h.innerText="💜";
        const rect=giantHeart.getBoundingClientRect();
        h.style.left=rect.left+rect.width/2+"px";
        h.style.top=rect.top+rect.height/2+"px";
        const x=(Math.random()-0.5)*300;
        const y=(Math.random()-0.5)*300;
        h.style.setProperty('--x',x+'px');
        h.style.setProperty('--y',y+'px');
        body.appendChild(h);
        setTimeout(()=>h.remove(),1000);
    }
}

// Mostrar foto com fade
function showPhoto(index){
    if(index<0 || index>=photos.length) return;
    photoEl.style.opacity=0;
    setTimeout(()=>{
        photoEl.src=photos[index];
        photoElogio.innerText=elogiosFotos[index] || "";
        photoEl.onload=()=>{ photoEl.style.opacity=1; };
    },100);
}

// Clicar no coração gigante
giantHeart.addEventListener("click",()=>{
    explodeHearts(30);
    if(currentPhoto2===-1){
        currentPhoto2=0;
        showPhoto(currentPhoto2);
    }
});

// Botão próxima foto
nextBtn.addEventListener("click",()=>{
    if(currentPhoto2>=0 && currentPhoto2<photos.length-1){
        currentPhoto2++;
        showPhoto(currentPhoto2);
        explodeHearts(15);
    }
});

// Botão texto final
finalBtn.addEventListener("click",()=>{
    finalText.style.display="block";
    finalText.innerHTML = `
FELIZ ANIVERSÁRIO MINHA PRETINHAAA
Hoje é seu dia, e eu só penso em te ver sorrir.
Cada instante com você é único e especial.
Seus olhos iluminam qualquer ambiente.
Seu sorriso me faz sentir em casa.
Seus cachos são poesia que me enlouquecem.
Seu abraço é meu lugar favorito.
Você me fez sentir amado como nunca antes.
Sua presença transforma tudo ao redor.
Você é intensidade, beleza e doçura em uma só pessoa.
Cada detalhe seu me deixa fascinado.
Seu corpo e seu sorriso me confundem de um jeito bom.
Seu jeito me faz querer ser melhor.
Cada risada sua é música para mim.
Seu olhar me prende e me encanta.
Você é ousadia e delicadeza ao mesmo tempo.
Seus gestos me fazem derreter.
Você é minha inspiração diária.
Cada palavra sua fica gravada em mim.
Seu perfume me hipnotiza.
Seu toque me faz flutuar.
Sua energia me contagia.
Você é perfeita, única, maravilhosa.
Cada sorriso seu é um presente.
Você me ensina a amar de verdade.
Seu corpo misturado com seu sorriso me dá sentimentos que não sei controlar 🫦
Sua risada é minha melodia favorita.
Você é perigosa do melhor jeito possível 🫦
Eu te desejo toda felicidade do mundo.
Hoje celebramos você, minha rainha.
Feliz aniversário, minha Pretinha, te amo infinito!
    `;
});

// Corações e elogios voando
const flyingWords = ["PRINCESA","PITUCHA","BUXINN","CACHEADA","PRETINHA","PITICA","HELLO KITTY","PEQUENA","LINDA","MARAVILHOSA","PERFEITA","CHEIROSA","GOSTOSA","DELÍCIA"];

function createFlyingText(){
    const text = document.createElement("div");
    text.className = "flyingText";
    text.innerText = flyingWords[Math.floor(Math.random()*flyingWords.length)];
    text.style.left = Math.random()*85 + "%";
    text.style.color = ["#8a2be2","#00f","#fff","#f0f","#ff69b4"][Math.floor(Math.random()*5)];
    text.style.fontSize = (16+Math.random()*12) + "px";
    text.style.bottom = "0px";
    body.appendChild(text);
    setTimeout(()=>text.remove(),8000);
}

function createFlyingHearts(){
    const heart = document.createElement("div");
    heart.className="flyingHeart";
    heart.innerText="💜";
    heart.style.left = Math.random()*95 + "%";
    heart.style.bottom = "0px";
    heart.style.animationDuration = (3 + Math.random()*3)+"s";
    body.appendChild(heart);
    setTimeout(()=>heart.remove(),6000);
}

setInterval(createFlyingText, 500);
setInterval(createFlyingHearts, 700);

};
