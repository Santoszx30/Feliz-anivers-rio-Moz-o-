const photos = [
  "fotos/foto1.jpg",
  "fotos/foto2.jpg",
  "fotos/foto3.jpg",
  "fotos/foto4.jpg"
];

const compliments = [
  "Princesa",
  "Linda",
  "Maravilhosa",
  "Perfeita",
  "Cheirosa",
  "Gostosa",
  "Delícia",
  "Cacheada",
  "Pretinha",
  "Pequena",
  "Pitica",
  "Hello Kittyzinha",
  "Buxinn"
];

const photoContainer = document.getElementById("photoContainer");
const complimentDiv = document.getElementById("compliment");
const progress = document.getElementById("progress");

let step = 0;
const totalSteps = photos.length + compliments.length;

function nextStep() {
  if (step < photos.length) {
    const img = document.createElement("img");
    img.src = photos[step];
    photoContainer.innerHTML = "";
    photoContainer.appendChild(img);
  } else {
    complimentDiv.textContent =
      compliments[step - photos.length];
  }

  progress.style.width = ((step + 1) / totalSteps) * 100 + "%";
  step++;

  if (step < totalSteps) {
    setTimeout(nextStep, 800);
  } else {
    // AQUI depois vamos levar pra próxima tela
    setTimeout(() => {
      console.log("Carregamento finalizado");
    }, 800);
  }
}

nextStep();
