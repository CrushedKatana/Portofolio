# Charellino Portfolio Website

Game-developer themed personal portfolio website.

## Files
- `index.html` - Main page structure
- `styles.css` - Visual theme and responsive layout
- `script.js` - Profile data, age calculation, GitHub repo fetching
- `assets/Charellino_Kalingga_Sadewo_CV.pdf` - Downloadable CV (PDF)
- `.github/workflows/deploy-pages.yml` - GitHub Pages auto-deploy workflow

## Run locally
Open `index.html` directly in a browser, or serve with a local server.

## Customize GitHub account
Edit the `profile` object in `script.js`:

```js
const profile = {
  name: "Charellino Kalingga Sadewo",
  birthDate: "2004-12-24",
  githubUsername: "CrushedKatana"
};
```

Change `githubUsername` if your GitHub handle is different.

## Hosting on GitHub Pages
1. Push this repository to GitHub (branch: `main`).
2. In GitHub, open **Settings → Pages**.
3. Ensure **Source** is set to **GitHub Actions**.
4. The workflow in `.github/workflows/deploy-pages.yml` will publish your site on every push.

Your site URL will be:

`https://crushedkatana.github.io/Portofolio/`
