function extractOwnerRepo(url) {
    const regex = /https:\/\/github\.com\/([^\/]+)\/([^\/]+)/;
    const match = url.match(regex);
    if (match) {
        return { owner: match[1], repo: match[2] };
    }
    return null;
}

async function loadMenuProjects() {
    try {
        const response = await fetch('/assets/json/project.json');
        const projects = await response.json();

        const dropdownMenu = document.querySelector('.navbar-dropdown');
        let dropdownContent = '';
        projects.forEach(project => {
            const { owner, repo } = extractOwnerRepo(project.url);
            dropdownContent += `
                <a href="/projects/project?owner=${owner}&repo=${repo}" class="navbar-item">
                    ${project.name}
                </a>
            `;
        });
        dropdownMenu.innerHTML = dropdownContent;
    } catch (error) {
        console.error("Erreur lors du chargement des projets :", error);
    }
}

document.addEventListener('DOMContentLoaded', async() => {
    loadMenuProjects();
});