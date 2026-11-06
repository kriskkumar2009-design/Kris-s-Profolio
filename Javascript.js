
// Display the current year in the footer

const yearElements = document.querySelectorAll(".year");

yearElements.forEach(element => {
    element.textContent = new Date().getFullYear();
});

// Welcome message

console.log("Welcome to Kris Kumar's Portfolio!");

// Highlight the current page in the navigation

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".navbar a").forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});
