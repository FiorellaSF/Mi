//carrusel
const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
let currentIndex = 0;

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

setInterval(nextImage, 3000); // Cambia la imagen cada 3 segundos

// const nav = document.querySelector("#nav")
// const abrir = document.querySelector("#abrir")
// const cerrar = document.querySelector("#cerrar")

// abrir.addEventListener("click", ()=> {
//     nav.classList.add("visible");
// })

// cerrar.addEventListener("click", ()=> {
//     nav.classList.remove("visible")
// })

// const lista = document.querySelector("#lista");
// const icono = document.querySelector("#icono");
// const cerrar = document.querySelector("#cerrar");
// abrir.addEventListener("click", () => { nav.classList.add("visible"); })
// cerrar.addEventListener("click", () => { nav.classList.remove("visible");

//switch
const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  btnSwitch.classList.toggle('active');
});

//menu hamburguesa
// document.getElementById('abrir').addEventListener('click', function() {
//   document.getElementById('nav').classList.add('open');
// });

// document.getElementById('cerrar').addEventListener('click', function() {
//   document.getElementById('nav').classList.remove('open');
// });


//menu hamburguesa
document.getElementById('abrir').addEventListener('click', function() {
  document.getElementById('abrir').style.display = 'none';
  document.getElementById('nav').classList.add('open');
});

document.getElementById('cerrar').addEventListener('click', function() {
  document.getElementById('abrir').style.display = 'block';
  document.getElementById('nav').classList.remove('open');
});
