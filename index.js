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
  
  // ====== DOM Interaction Example ======
  document.addEventListener("DOMContentLoaded", () => {
    displayProjects();
  
    const darkModeButton = document.getElementById("toggle-dark");
    if (darkModeButton) {
      darkModeButton.addEventListener("click", toggleDarkMode);
    }
  });
  