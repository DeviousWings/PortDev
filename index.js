// ====== Data ======
const projects = [
    {
      title: "Space Library",
      description: "Space Library of Nathanael King.",
      link: "https://cosmiclibrary.netlify.app/"
    },
    {
      title: "AI Stock Exchange",
      description: "Coming Soon...",
      link: "#"
    },
    {
      title: "Coming Soon...",
      description: "Coming Soon...",
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
  
      card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      `;
  
      projectGrid.appendChild(card);
    });
  }
  
  // ====== Dark Mode Toggle ======
  function toggleDarkMode() {
    document.body.classList.toggle("dark");
  
    const currentMode = document.body.classList.contains("dark")
      ? "Dark Mode"
      : "Light Mode";
  
    console.log("Switched to:", currentMode);
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

  // ====== DOM Interaction Example ======
  document.addEventListener("DOMContentLoaded", () => {
    displayProjects();
    initHamburger();

    const darkModeButton = document.getElementById("toggle-dark");
    if (darkModeButton) {
      darkModeButton.addEventListener("click", toggleDarkMode);
    }
  });
  