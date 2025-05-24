import { projectsData } from './projects.js';


document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Loaded. Starting loader script...");

    // 1. Get the Project ID from the URL
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');

    // 2. Find the Project Data
    // Ensure projectsData is available (loaded from projects.js)
    if (typeof projectsData === 'undefined' || !projectId) {
        console.error("Project data not loaded or no project ID found.");
        // Maybe display an error message on the page
        document.getElementById('project-title').textContent = "Project Not Found";
        return;
    }

    const project = projectsData.find(p => p.id === projectId);

    // 3. Update the Page Content
    if (project) {
        document.title = project.title; // Update page title

        document.getElementById('project-title').textContent = project.title;
        document.getElementById('project-subtitle').textContent = project.subtitle;
        
        const projectImage = document.getElementById('project-image');
        projectImage.src = project.imgSrc;
        projectImage.alt = project.title;

        document.getElementById('project-description').innerHTML = `<p>${project.description}</p>`; // Use innerHTML if description has HTML

        const techList = document.querySelector('#project-tech ul');
        techList.innerHTML = ''; // Clear existing list
        project.tech.forEach(tech => {
            const li = document.createElement('li');
            li.textContent = tech;
            techList.appendChild(li);
        });

        document.getElementById('live-link').href = project.liveLink;
        document.getElementById('repo-link').href = project.repoLink;

    } else {
        console.error(`Project with ID "${projectId}" not found.`);
        document.getElementById('project-title').textContent = "Project Not Found";
        // Hide or clear other elements
        document.querySelector('.portfolio-item-individual').style.display = 'none';
        document.getElementById('project-image').style.display = 'none';
    }

});