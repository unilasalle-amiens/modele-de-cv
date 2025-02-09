async function fetchReadme(owner, repo) {
    const url = `https://api.github.com/repos/${owner}/${repo}/readme`;
    try {
        const response = await fetch(url, {
            headers: {
                'Accept': 'application/vnd.github.v3.raw'
            }
        });
        if (!response.ok) throw new Error('Erreur lors du chargement du README');
        const readmeContent = await response.text();
        return readmeContent;
    } catch (error) {
        console.error("Erreur lors du chargement du README :", error);
    }
}

document.addEventListener('DOMContentLoaded', async() => {
    const params = new URLSearchParams(window.location.search);
    const readmeContent = await fetchReadme(params.get('owner'), params.get('repo'));

    const htmlContent = marked.parse(readmeContent);

    document.getElementById('readme-content').innerHTML = htmlContent;
});