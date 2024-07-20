let currentPage = 1;
const itemsPerPage = 5;
const projectList = document.getElementById('project-list');
let projects = Array.from(projectList.children);
let filteredProjects = projects; // This will hold the filtered projects

// Show a specific section
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach((section) => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

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
