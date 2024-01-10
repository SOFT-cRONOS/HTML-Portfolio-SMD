//======================================================================
// LOADING
//======================================================================

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
  AOS.init();
}


/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        const logoimg = document.getElementById('logo-empresa');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
            logoimg.classList.remove('achicar');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
            logoimg.classList.add('achicar');
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});


// Genera un número de CAPTCHA aleatorio de cuatro dígitos
function generateCaptcha() {
    return Math.floor(1000 + Math.random() * 9000);
}

// Crea el CAPTCHA y muestra en el contenedor
function createCaptcha() {
    const captchaContainer = document.getElementById("captcha-container");
    const captchaValue = generateCaptcha();
    captchaContainer.textContent = captchaValue;
    return captchaValue;
}

let message = document.getElementById("text-message")
// Verifica el CAPTCHA ingresado por el usuario
function verifyCaptcha() {
    var captcha = document.getElementById("captcha-container");
    var captchaText = captcha.textContent;
    const userInput = document.getElementById("captcha-input").value;
    if (userInput.toString() === captchaText.toString()) {
        message.classList.remove("d-none");
        message.classList.add("d-block");
        message.style.color = "var(--bs-green)"
        message.innerHTML = "¡Ups! Por el momento esto no esta funcionando, contactanos por whatsapp!";
    } else {
        message.classList.remove("d-none");
        message.classList.add("d-block");
        message.style.color = "--bs-red"
        message.innerHTML = "¡Ups! Algo no esta bien, intentemos mas tarde";
    }
}

// Inicializa el CAPTCHA cuando se carga la página
window.addEventListener("load", createCaptcha);

// Agrega un evento de clic al botón de verificación
const verifyButton = document.getElementById("verify-button");
verifyButton.addEventListener("click", verifyCaptcha);
