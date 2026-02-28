const profile = {
  name: "Charellino Kalingga Sadewo",
  birthDate: "2004-12-24",
  githubUsername: "CrushedKatana"
};

const ageDisplay = document.getElementById("ageDisplay");
const yearDisplay = document.getElementById("year");
const repoGrid = document.getElementById("repoGrid");
const githubProfile = document.getElementById("githubProfile");
const contactGithub = document.getElementById("contactGithub");
const contactLink = document.getElementById("contactLink");

function calculateAge(dateString) {
  const birthDate = new Date(dateString);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1;
  }

  return age;
}

function applyProfileLinks() {
  const profileUrl = `https://github.com/${profile.githubUsername}`;
  githubProfile.href = profileUrl;
  githubProfile.textContent = profile.githubUsername;
  contactGithub.href = profileUrl;
  contactLink.href = profileUrl;
}

function createRepoCard(repo) {
  const article = document.createElement("article");
  article.className = "repo-card";

  const description = repo.description
    ? repo.description
    : "No description available yet."

  article.innerHTML = `
    <h3><a href="${repo.html_url}" target="_blank" rel="noopener">${repo.name}</a></h3>
    <p>${description}</p>
    <div class="repo-meta">
      ${repo.language ? `<span class="pill">${repo.language}</span>` : ""}
      <span class="pill">★ ${repo.stargazers_count}</span>
      <span class="pill">Updated ${new Date(repo.updated_at).toLocaleDateString()}</span>
    </div>
  `;

  return article;
}

async function loadGithubRepos() {
  repoGrid.innerHTML = "<p>Loading repositories...</p>";

  try {
    const response = await fetch(
      `https://api.github.com/users/${profile.githubUsername}/repos?sort=updated&per_page=6`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch repositories");
    }

    const repos = await response.json();
    repoGrid.innerHTML = "";

    if (repos.length === 0) {
      repoGrid.innerHTML = "<p>No repositories found.</p>";
      return;
    }

    repos.forEach((repo) => {
      repoGrid.appendChild(createRepoCard(repo));
    });
  } catch (error) {
    repoGrid.innerHTML = `<p class="error">Could not load GitHub projects right now. Please try again later.</p>`;
  }
}

function init() {
  ageDisplay.textContent = `${calculateAge(profile.birthDate)} years old`;
  yearDisplay.textContent = new Date().getFullYear();
  applyProfileLinks();
  loadGithubRepos();
}

init();
