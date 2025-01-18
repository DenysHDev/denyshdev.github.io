let currentPage = 1;
const itemsPerPage = 5;
const projectList = document.getElementById('project-list');
let projects = Array.from(projectList.children);
let filteredProjects = projects; // This will hold the filtered projects

document.addEventListener('DOMContentLoaded', () => {
    showSection('info');
})

// Show a specific section
function showSection(sectionId) {
    const allSections = document.querySelectorAll('.content-section');
    const newSection = document.getElementById(sectionId);

    // Fade out all sections
    allSections.forEach((section) => {
        if (section.style.display === 'block') {
            section.style.opacity = '0'; // Start fade out
            setTimeout(() => {
                section.style.display = 'none'; // Hide after fade out
            }, 400); // Match the duration of the CSS transition
        }
    });

    // Fade in the new section
    setTimeout(() => {
        newSection.style.display = 'block'; // Show new section
        setTimeout(() => {
            newSection.style.opacity = '1'; // Start fade in
        }, 50); // Slight delay to trigger the CSS transition
    }, 400); // Match the duration of the fade-out transition
}

//Spoiler
document.addEventListener("DOMContentLoaded", () => {
    const spoilerButton = document.getElementById("spoiler-button");
    const spoilerContent = document.getElementById("spoiler-content");

    spoilerButton.addEventListener("click", () => {
        if (spoilerContent.classList.contains("spoiler-hidden")) {
            spoilerContent.classList.remove("spoiler-hidden");
            spoilerContent.classList.add("spoiler-visible");
            spoilerButton.textContent = "Hide Info";
        } else {
            spoilerContent.classList.remove("spoiler-visible");
            spoilerContent.classList.add("spoiler-hidden");
            spoilerButton.textContent = "Learn More About Me";
        }
    });
});



// Show the projects for the current page
function showProjects(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    filteredProjects.forEach((project, index) => {
        project.style.display = (index >= start && index < end) ? 'list-item' : 'none';
    });

    document.getElementById('pageNumber').textContent = page;
    document.getElementById('prevPageBtn').style.display = (page === 1) ? 'none' : 'inline-block';
    document.getElementById('nextPageBtn').style.display = (end >= filteredProjects.length) ? 'none' : 'inline-block';

    const pagination = document.getElementById('pagination');
    pagination.style.display = (filteredProjects.length <= itemsPerPage) ? 'none' : 'block';

    // Scroll to the top of the body
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function nextPage() {
    if ((currentPage * itemsPerPage) < filteredProjects.length) {
        currentPage++;
        showProjects(currentPage);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showProjects(currentPage);
    }
}

// Initialize the first page of projects
showProjects(currentPage);

// Filtering function
function filterProjects(language) {
    const projects = document.querySelectorAll('#project-list li');
    let filteredProjectsCount = 0;

    projects.forEach(project => {
        const dataLanguage = project.getAttribute('data-language');
        if (language === 'all' || (dataLanguage && dataLanguage.split(',').includes(language))) {
            project.style.display = 'list-item';
            filteredProjectsCount++;
        } else {
            project.style.display = 'none';
        }
    });

    // Reset pagination to the first page
    currentPage = 1;
    filteredProjects = Array.from(projects).filter(project => project.style.display === 'list-item');
    showProjects(currentPage);

    // Hide pagination if fewer than 6 projects are visible
    const pagination = document.getElementById('pagination');
    pagination.style.display = (filteredProjectsCount <= itemsPerPage) ? 'none' : 'block';
}
