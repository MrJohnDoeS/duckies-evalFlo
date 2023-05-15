// First test, doesn't work
// const prevPic = document.getElementById("prev-pictures");
// prevPic.addEventListener('click', function (event) {
//     event.src = event[i + 1].
// })



//Second attempt, sliderimg is nul :/
// const slider = [
//     {
//         imgSrc: "C:\Users\stagiaire\Desktop\Exam_Javascript\duckies-eval\img\canard-jaune-1-l"
//     },
//     {
//         imgSrc: "C:\Users\stagiaire\Desktop\Exam_Javascript\duckies-eval\img\canard-jaune-2-l"
//     },
//     {
//         imgSrc: "C:\Users\stagiaire\Desktop\Exam_Javascript\duckies-eval\img\canard-jaune-3-l"
//     },
//     {
//         imgSrc: "C:\Users\stagiaire\Desktop\Exam_Javascript\duckies-eval\img\canard-jaune-4-l"
//     },
//     {
//         imgSrc: "C:\Users\stagiaire\Desktop\Exam_Javascript\duckies-eval\img\canard-jaune-5-l"
//     },
// ]


// let sliderImg = document.querySelector("mainImg");
// sliderImg.addEventListener('click', function (event) {
//     ++i;
//     if (i === slider.length) {
//         i = 0;
//     }
//     event.target.src = slider[i].imgSrc
// });




// const button = document.getElementsByClassName('add-cta');
// button.addEventListener('click', event => {
//     button.innerHTML = `Nombre de clics : ${event.detail}`;
// });
//cart-nb > panier dans le header


//  change color of the button "Ajouter au panier"

document.getElementById("myBtn").addEventListener("click", function () {
    myBtn.style.backgroundColor = "green";
})

//Change button text "Deja au panier"
document.getElementById("myBtn").addEventListener("click", function () {
    this.textContent = 'Déjà au panier';
});




// const mainImg = document.getElementById("mainImg");


// const myButtonNextPic = document.getElementById("next-pictures");

// myButtonNextPic.addEventListener("click", function () {
//     mainImg.src = "C:\Users\stagiaire\Desktop\Exam_Javascript\duckies-eval\img\canard-jaune-2-l.png";
// });

//Enieme tentative pour le carrousel

const slidesContainer = document.getElementById("slides-container");
const thumbsImg = document.querySelector(".thumbs-img");
const prevBtn = document.getElementById("prev-pictures");
const nextBtn = document.getElementById("next-pictures");

nextBtn.addEventListener("click", () => {
    const slideWidth = thumbsImg.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
});

prevBtn.addEventListener("click", () => {
    const slideWidth = thumbsImg.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
});