const menuCircle = document.querySelector('.menu');
const containerContact = document.querySelector('.container-contact');
const titleContact = document.querySelector('.title-contact');
const formContact = document.querySelector('.form-contact');
const validationTexts = document.querySelectorAll('.error-msg');

const inputValidate = {
    name: false,
    email: false,
    textearea: false
};

const nameInput = document.querySelector('.input-form:nth-child(1) input');

nameInput.addEventListener('input', nameValidation);
nameInput.addEventListener('blur', nameValidation);

function nameValidation() {
    if(nameInput.value !== "") {
        showError({index:0, validation: true});
        inputValidate.name= true;
    } else {
        showError({index:0, validation: false});
        inputValidate.name= false;
    }
};

function showError({index, validation}) {
    if(validation) {
        validationTexts[index].style.display = "none";
    } else {
        validationTexts[index].style.display = "inline"
    }
}

const emailInput = document.querySelector('input[name="email"]');

emailInput.addEventListener('input', emailValidation);
emailInput.addEventListener('blur', emailValidation);

function emailValidation() {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(regexEmail.test(emailInput.value)) {
        showError({index:1, validation: true});
        inputValidate.email = true;
    } else {
        showError({index:1, validation: false});
        inputValidate.email = false;
    }
};


const textearea = document.querySelector('textarea');

textearea.addEventListener('input', texteareaValidation);
textearea.addEventListener('blur', texteareaValidation);


function texteareaValidation() {
    if(textearea.value !== "") {
        showError({index:2, validation: true});
        inputValidate.textearea = true;
    } else {
        showError({index:2, validation: false});
        inputValidate.textearea = false;
    }
};

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


(function () {
    emailjs.init("403Z0LykCnUoSa-3Z");
})();



document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
        event.preventDefault(); 

        const keys = Object.keys(inputValidate);
        const failedInputs = keys.filter(key => !inputValidate[key]);

        if(failedInputs.length) {
            failedInputs.forEach(input => {
                const index = keys.indexOf(input)
                showError({index: index, validation:false});
            });

        } else {

            const serviceID = "service_cluuob8";
            const templateID = "template_633sa48";
            
            emailjs.sendForm(serviceID, templateID, this).then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                    alert("Votre message a été bien envoyé");
                    document.getElementById("contact-form").reset();

                },
                (error) => {
                    console.log("FAILED...", error);
                    alert("Erreur", error);
                }
                );
        }
    });