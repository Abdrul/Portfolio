const menuCircle = document.querySelector('.menu');
const containerContact = document.querySelector('.container-contact');
const titleContact = document.querySelector('.title-contact');
const formContact = document.querySelector('.form-contact');


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


// (function() {
//     // https://dashboard.emailjs.com/admin/account
//     emailjs.init('403Z0LykCnUoSa-3Z');
// })();


// formContact.addEventListener('submit', (e) => {
//     e.preventDefault();
//     // generate a five digit number for the contact_number variable
//     this.contact_number.value = Math.random() * 100000 | 0;
//     // these IDs from the previous steps
//     emailjs.sendForm('service_cluuob8', 'template_633sa48', this)
//         .then(function() {
//             console.log('SUCCESS!');
//         }, function(error) {
//             console.log('FAILED...', error);
//         });
// })