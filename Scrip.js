const texts = ["Web Developer "," UX Designer","Frontend Developer ", "YouTuber"];
const typingSpeed = 100; // typing speed in ms
const erasingSpeed = 50; // erasing speed in ms
const delayBetweenTexts = 1500; // delay before typing next text in ms
const delayBeforeErasing = 1000; // delay before erasing text in ms
let textIndex = 0;
let charIndex = 0;
let isErasing = false;

function type() {
    const typingElement = document.getElementById("typing");
    const currentText = texts[textIndex];

    if (!isErasing) {
        typingElement.textContent += currentText.charAt(charIndex);
        charIndex++;
        if (charIndex < currentText.length) {
            setTimeout(type, typingSpeed);
        } else {
            isErasing = true;
            setTimeout(type, delayBeforeErasing);
        }
    } else {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex > 0) {
            setTimeout(type, erasingSpeed);
        } else {
            isErasing = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, delayBetweenTexts);
        }
    }
}

type(); // Start the typing animation

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = ()=>{
    navbar.classList.toggle('active');
}
window.onscroll=()=>{
    navbar.classList.remove('active');
}
