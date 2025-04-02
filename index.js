// ====== Data ======
const projects = [
    {
      title: "Space Library",
      description: "Space Library of Nathanael King.",
      link: "https://deviouswings.github.io/SpaceSite/"
    },
    {
      title: "Budget Buddy",
      description: "Track your monthly spending with a dynamic budget dashboard.",
      link: "#"
    },
    {
      title: "Responsive Landing Page",
      description: "A mobile-friendly front-end layout with scroll effects.",
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
  
  // ====== DOM Interaction Example ======
  document.addEventListener("DOMContentLoaded", () => {
    displayProjects();
  
    const darkModeButton = document.getElementById("toggle-dark");
    if (darkModeButton) {
      darkModeButton.addEventListener("click", toggleDarkMode);
    }
  });
  