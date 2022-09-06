const mobileModal = document.querySelector('.mobile__modal'),
    menuBar = document.querySelector('#menu__bar'),
    closeBar = document.querySelector('.close__menu');

menuBar.addEventListener('click', () => {
    menuBar.style.display = 'none';
    mobileModal.style.display = 'block';
});

closeBar.addEventListener('click', () => {
    mobileModal.style.display = 'none';
    menuBar.style.display = 'block';
});


// FEATURE SECTION
const featureDiv = document.querySelector(".feature")
const featureLink = document.querySelectorAll(".feature__link")
const featureBody = document.querySelectorAll(".feature__body")
featureDiv.addEventListener("click", function(e) {
    const id = e.target.dataset.id
    if (id) {
        featureLink.forEach((btn) => {
            btn.classList.remove("active")
            e.target.classList.add("active")
        })

        featureBody.forEach((item) => {
            item.classList.remove("active")
        })
        const element = document.getElementById(id)
        element.classList.add("active")
    }
})

// FAQ SECTION
const faqs = document.querySelectorAll(".faq")
faqs.forEach((faq) => {
    const faqImg = faq.querySelector(".faq__img")
    faqImg.addEventListener("click", () => {
        faqs.forEach((item) => {
            if (item !== faq) {
                item.classList.remove("active")
            }
        })
        faq.classList.toggle("active")
    })
});

//CTA FORM SECTION
const errorMsg = document.querySelector(".error");
const errorIcon = document.querySelector(".error__icon");
const email = document.querySelector("#email");
const ctaForm = document.querySelector('.cta__form');

const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validateEmail(email) {
    return String(email).toLowerCase().match(re);
};
ctaForm.addEventListener("click", (e) => {
    e.preventDefault();
    const input = email.value;
    if (email.value === "" && email.value !== validateEmail(input)) {
        errorMsg.style.display = 'block';
        errorIcon.style.display = 'block';

        setTimeout(() => {
            errorMsg.style.display = 'none';
            errorIcon.style.display = 'none';
        }, 1000)
    } else {
        email.value = ""
    }
});