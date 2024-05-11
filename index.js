// CURSOR DOT 
const cursorDot = document.getElementById("cursorDot");

let dotMouseX = 0;
let dotMouseY = 0;
let dotBallX = 0;
let dotBallY = 0;

let speedDot = 1;

function cursorFollowDot() {
    let dotDistX = dotMouseX - dotBallX;
    let dotDistY = dotMouseY - dotBallY;

    dotBallX = dotBallX + (dotDistX * speedDot);
    dotBallY = dotBallY + (dotDistY * speedDot);
    

    cursorDot.style.left = dotBallX + "px";
    cursorDot.style.top = dotBallY + "px";

    requestAnimationFrame(cursorFollowDot);
}

cursorFollowDot();

document.addEventListener("mousemove", function(e) {
    dotMouseX = e.pageX;
    dotMouseY = e.pageY;
});

document.addEventListener("mousedown", function(e) {
    e.preventDefault;

    cursorDot.classList.remove("activeDot");

    void cursorDot.offsetWidth;

    cursorDot.classList.add("activeDot");
}, false);

// CURSOR 

const cursor = document.getElementById("cursor");



let mouseX = 0;
let mouseY = 0;
let ballX = 0;
let ballY = 0;

let speed = 0.1;

function cursorFollow() {
    let distX = mouseX - ballX;
    let distY = mouseY - ballY;

    ballX = ballX + (distX * speed);
    ballY = ballY + (distY * speed);

    cursor.style.left = ballX + "px";
    cursor.style.top = ballY + "px";

    requestAnimationFrame(cursorFollow);
}


cursorFollow();

document.addEventListener("mousemove", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

document.addEventListener("click", function(e) {
    e.preventDefault;

    cursor.classList.remove("active");

    void cursor.offsetWidth;

    cursor.classList.add("active");
}, false);





// SLIDER 

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    }

    else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });

    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    clearInterval(intervalId);
    slideIndex++;
    showSlide(slideIndex);
}