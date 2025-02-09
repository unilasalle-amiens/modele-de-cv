document.addEventListener('DOMContentLoaded', initializeProjects);

async function initializeProjects() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(async card => {
        await processProjectCard(card);
    });
}

async function processProjectCard(card) {
    const url = card.dataset.url;
    const { owner, repo } = extractOwnerRepo(url);

    if (!owner || !repo) return;

    updateProjectLink(card, owner, repo);
    updateProjectLogo(card);
    await updateProjectTopics(card, owner, repo);
}

function extractOwnerRepo(url) {
    const match = url.match(/github\.com\/([^/]+)\/([^/]+)/);
    return match ? { owner: match[1], repo: match[2] } : { owner: null, repo: null };
}

function updateProjectLink(card, owner, repo) {
    const projectLink = card.querySelector('.project-link');
    if (projectLink) {
        projectLink.href = `/projects/project?owner=${owner}&repo=${repo}`;
    }
}

function updateProjectLogo(card) {
    const logoImg = card.querySelector('.project-logo');
    if (logoImg && card.dataset.logo) {
        logoImg.src = card.dataset.logo;
        logoImg.alt = card.dataset.name;
    }
}

async function updateProjectTopics(card, owner, repo) {
    const topicsContainer = card.querySelector('.topics');
    if (!topicsContainer) return;

    const topics = await fetchTopics(owner, repo);
    topicsContainer.innerHTML = topics.map(topic => `<span class="tag">${topic}</span>`).join('');
}

async function fetchTopics(owner, repo) {
    const url = `https://api.github.com/repos/${owner}/${repo}/topics`;
    try {
        const response = await fetch(url, {
            headers: {
                'Accept': 'application/vnd.github.mercy-preview+json'
            }
        });
        if (!response.ok) throw new Error('Erreur lors du chargement des topics');
        const topicsData = await response.json();
        return topicsData.names;
    } catch (error) {
        console.error("Erreur lors du chargement des topics :", error);
    }
}