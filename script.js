// NAVBAR: highlight current page
let links = document.querySelectorAll("nav a");

links.forEach(link => {
    if (link.href === window.location.href) {
        link.style.color = "#9ad8ff";
    }
});


// FORM: handle submit
let form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        alert("Message sent successfully! 🚀");

        form.reset();
    });
}