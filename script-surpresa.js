window.onload = function() {

    const giantHeart = document.getElementById("giantHeart");
    const photoEl = document.getElementById("photo");
    const photoElogio = document.getElementById("photoElogio");
    const nextBtn = document.getElementById("nextPhoto");
    const finalBtn = document.getElementById("showText");
    const finalText = document.getElementById("finalText");
    const body = document.body;

    const photos = [];
    for(let i=1; i<=20; i++) photos.push(`fotos/foto${i}.jpg`);

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
        "Seu corpo misturado com seu sorriso me dão sentimentos que eu não sei controlar 🫦",
        // ... adicione elogios para fotos 11-19
        "Você é perigosa do melhor jeito possível 🫦"
    ];

    let currentPhoto2 = -1; // começa fechado

    // ----------------- FUNÇÃO DE EXPLODIR CORAÇÕES -----------------
    function explodeHearts(qtd){
        for(let i=0; i<qtd; i++){
            const h = document.createElement("div");
            h.className="explosion-heart";
            h.innerText="💜";
            h.style.left = giantHeart.offsetLeft + giantHeart.offsetWidth/2 + "px";
            h.style.top = giantHeart.offsetTop + giantHeart.offsetHeight/2 + "px";
            const x = (Math.random()-0.5)*300;
            const y = (Math.random()-0.5)*300;
            h.style.setProperty('--x', x+'px');
            h.style.setProperty('--y', y+'px');
            body.appendChild(h);
            setTimeout(()=>h.remove(), 1000);
        }
    }

    // ----------------- FUNÇÃO MOSTRAR FOTO -----------------
    function showPhoto(index){
        if(index < 0 || index >= photos.length) return;
        photoEl.src = photos[index];
        photoEl.style.opacity = 1;
        photoElogio.innerText = elogiosFotos[index] || "";
    }

    // ----------------- CLICAR NO CORAÇÃO GIGANTE -----------------
    giantHeart.addEventListener("click", ()=>{
        explodeHearts(30);
        currentPhoto2 = 0;
        showPhoto(currentPhoto2);
    });

    // ----------------- BOTÃO PRÓXIMA FOTO -----------------
    nextBtn.addEventListener("click", ()=>{
        if(currentPhoto2 < photos.length-1){
            currentPhoto2++;
            showPhoto(currentPhoto2);
            explodeHearts(15);
        }
    });

    // ----------------- BOTÃO FINAL (TEXTO) -----------------
    finalBtn.addEventListener("click", ()=>{
        finalText.style.display="block";
        finalText.innerHTML = `
FELIZ ANIVERSÁRIO MINHA PRETINHAAA
1. Hoje é seu dia, e eu só penso em te ver sorrir. <br>
2. Cada instante com você é único e especial. <br>
3. Seus olhos iluminam qualquer ambiente. <br>
4. Seu sorriso me faz sentir em casa. <br>
5. Seus cachos são poesia que me enlouquece. <br>
6. Seu abraço é meu lugar favorito. <br>
7. Você me faz sentir amado como nunca antes. <br>
8. Sua presença transforma tudo ao redor. <br>
9. Você é intensidade, beleza e doçura em uma só pessoa. <br>
10. Cada detalhe seu me deixa fascinado. <br>
11. Seu corpo e seu sorriso me confundem de um jeito bom. <br>
12. Seu jeito me faz querer ser melhor. <br>
13. Cada risada sua é música para mim. <br>
14. Seu olhar me prende e me encanta. <br>
15. Você é ousadia e delicadeza ao mesmo tempo. <br>
16. Seus gestos me fazem derreter. <br>
17. Você é minha inspiração diária. <br>
18. Cada palavra sua fica gravada em mim. <br>
19. Seu perfume me hipnotiza. <br>
20. Seu toque me faz flutuar. <br>
21. Sua energia me contagia. <br>
22. Você é perfeita, única, maravilhosa. <br>
23. Cada sorriso seu é um presente. <br>
24. Você me ensina a amar de verdade. <br>
25. Seu corpo misturado com seu sorriso me dá sentimentos que não sei controlar 🫦. <br>
26. Sua risada é minha melodia favorita. <br>
27. Você é perigo do melhor jeito possível 🫦. <br>
28. Eu te desejo toda felicidade do mundo. <br>
29. Hoje celebramos você, minha rainha. <br>
30. Feliz aniversário, minha Pretinha, te amo infinito! <br>
`;
    });

};
