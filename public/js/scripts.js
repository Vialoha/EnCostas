/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 


document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM fully loaded and parsed.");

    // Check if the user has already given consent
    if (document.cookie.indexOf('cookieConsent=true') === -1) {
        console.log("No cookie consent found, showing the popup.");
        // Show the cookie consent popup
        const cookiePopup = document.getElementById('cookieConsentPopup');
        if (cookiePopup) {
            cookiePopup.style.display = 'block';
        } else {
            console.error("Popup element not found!");
        }
    } else {
        console.log("Cookie consent already given, loading non-essential cookies.");
        // If consent already given, load non-essential cookies
        loadNonEssentialCookies();
    }

    // Add event listeners to the buttons
    const acceptButton = document.getElementById('acceptCookies');
    const declineButton = document.getElementById('declineCookies');
    
    if (acceptButton && declineButton) {
        acceptButton.addEventListener('click', acceptCookies);
        declineButton.addEventListener('click', declineCookies);
    } else {
        console.error("Button elements not found!");
    }
});




document.addEventListener('DOMContentLoaded', function () {
    // Check if the user has already given consent
    if (document.cookie.indexOf('cookieConsent=true') === -1) {
        // Show the cookie consent popup
        document.getElementById('cookieConsentPopup').style.display = 'block';
    } else {
        // If consent already given, load non-essential cookies
        loadNonEssentialCookies();
    }

    // Add event listeners to the buttons
    document.getElementById('acceptCookies').addEventListener('click', acceptCookies);
    document.getElementById('declineCookies').addEventListener('click', declineCookies);
});

// Accept cookies and store the consent in a cookie
function acceptCookies() {
    document.cookie = "cookieConsent=true; path=/; max-age=31536000"; // Cookie for 1 year
    document.getElementById('cookieConsentPopup').style.display = 'none';  // Hide the popup
    loadNonEssentialCookies();  // Load non-essential cookies (e.g., Google Analytics)
}

// Decline cookies and store the refusal in a cookie
function declineCookies() {
    document.cookie = "cookieConsent=false; path=/; max-age=31536000"; // Cookie for 1 year
    document.getElementById('cookieConsentPopup').style.display = 'none';  // Hide the popup
}

// Load non-essential cookies (e.g., Google Analytics)
function loadNonEssentialCookies() {
    // Ensure the dataLayer is initialized before use
    window.dataLayer = window.dataLayer || [];

    // Example: Load Google Analytics script only after consent
    var script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-Q2TBR64MDV";  // Your Google Analytics ID
    script.onload = function() {
        // Now that the script is loaded, set up Google Analytics
        gtag('js', new Date());
        gtag('config', 'G-Q2TBR64MDV');
    };
    document.head.appendChild(script);
}

// Function for Google Analytics tracking setup
function gtag(){window.dataLayer.push(arguments);}





window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
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

});