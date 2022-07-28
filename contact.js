const menuCircle = document.querySelector('.menu');
const containerContact = document.querySelector('.container-contact');
const titleContact = document.querySelector('.title-contact');


menuCircle.addEventListener('mouseover', () => {

    containerContact.style.filter = "blur(4px)";
    containerContact.style.transition = "filter 0.5s";

    titleContact.style.filter = "blur(4px)";
    titleContact.style.transition = "filter 0.5s";
});

menuCircle.addEventListener('mouseleave', () => {

    containerContact.style.filter = "";
    containerContact.style.transition = "filter 0.5s";

    titleContact.style.filter = "";
    titleContact.style.transition = "filter 0.5s";
});