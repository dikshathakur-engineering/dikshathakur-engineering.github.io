# Diksha Thakur — Professional Website

A dependency-light static personal website for professional presence, IEEE Senior Member materials, technical judging, and industry collaboration.

## Files

- `index.html` — page content and structure
- `styles.css` — responsive visual design

## Preview locally

From this folder, run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy for free

### Cloudflare Pages

1. Create a personal GitHub repository.
2. Upload `index.html` and `styles.css`.
3. In Cloudflare Pages, choose **Create a project** and connect the repository.
4. Select the static-site option with no build command and `/` as the output directory.
5. Deploy.

### GitHub Pages

1. Create a personal repository named `dikshathakur.github.io` (or any repository for a project site).
2. Upload the two website files.
3. Open repository **Settings → Pages**.
4. Select the main branch and root folder as the publishing source.

The site intentionally uses no office GitHub credentials, backend secrets, tracking scripts, or employer-private information.

## Planned expansions

- `/writing` for technical notes
- `/projects` for public work
- `/judging` for completed appointments and rubrics
- `/speaking` for talks and workshops
- Résumé download after adding a public-safe final résumé
