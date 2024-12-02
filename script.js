// let slideIndex = 0;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);

// } function showSlides(n) {
//     let slides = document.getElementsByClassName("slides");
//     if (n >= slides.length) { slideIndex = 0; }
//     if (n < 0) { slideIndex = slides.length - 1; }

//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }

//     slides[slideIndex].style.display = "block";
// }

const carrossel = document.querySelector(".carrossel");

let isDragStart = false;
const dragStart = () => {
    isDragStart = true;
}
const puxar = (e) => {
    if(!isDragStart) return;
    carrossel.scrollLeft = e.pageX}
 
    carrossel.addEventListener("mousemove", dragStart);
    carrossel.addEventListener("mousemove", puxar);
