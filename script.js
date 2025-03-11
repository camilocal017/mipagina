// Lista de imágenes y frases
const images = [
    { src: "Imagenes/foto1.jpg.jpg", text: "Te quiero mi niña hermosa" },
    { src: "Imagenes/foto2.jpg.jpg", text: "Eres mi persona favorita 💕" },
    { src: "Imagenes/foto3.jpg.jpg", text: "Eres mi amor hermoso" },
    { src: "Imagenes/foto4.jpg", text: "Te extraño" },
    { src: "Imagenes/foto5.jpg", text: "Espero nos veamos pronto" }
];

let currentIndex = 0; // Índice de la imagen actual

// Función para cambiar la imagen
function changePhoto() {
    currentIndex = (currentIndex + 1) % images.length; // Cambia la imagen al siguiente
    document.getElementById("mainPhoto").src = images[currentIndex].src;
    document.getElementById("caption").innerText = images[currentIndex].text;
}

// Función para dar "Me gusta" al hacer clic en la imagen
function likePhoto(photo) {
    photo.classList.toggle("liked");
}
