// ====== Data ======
const projects = [
    {
        title: "Space Library",
        description: "A searchable catalog of space-related books and media, built for curious minds exploring the cosmos.",
        link: "https://cosmiclibrary.netlify.app/"
    },
    {
        title: "AI Stock Exchange",
        description: "An AI-powered stock analysis and exchange dashboard. Coming soon.",
        link: "#"
    },
    {
        title: "Coming Soon...",
        description: "More projects in the works — check back soon.",
        link: "#"
    }
];

// ====== Function to Display Projects ======
function displayProjects() {
    const projectGrid = document.querySelector(".project-grid");
    if (!projectGrid) return;

    projectGrid.innerHTML = ""; // Clear existing content

    projects.forEach(project => {
        const card = document.createElement("a");
        card.className = "project-card";
        card.href = project.link;
        card.target = "_blank";
        card.rel = "noopener noreferrer";

        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        projectGrid.appendChild(card);
    });
}

// ====== Hamburger Menu ======
function initHamburger() {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    if (!hamburger || !navLinks) return;

    hamburger.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        hamburger.classList.toggle("open", isOpen);
        hamburger.setAttribute("aria-expanded", isOpen);
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            hamburger.classList.remove("open");
            hamburger.setAttribute("aria-expanded", "false");
        });
    });
}

// ====== Init ======
document.addEventListener("DOMContentLoaded", () => {
    displayProjects();
    initHamburger();
});
