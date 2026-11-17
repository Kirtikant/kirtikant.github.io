# Kirtikant Patadiya — Portfolio

Personal portfolio for **Kirtikant Patadiya**, a senior mobile app developer specializing in Flutter, Android, and connected applications.

- **Live site:** [https://kirtikant.github.io](https://kirtikant.github.io)
- **Application source:** [`portfolio/`](./portfolio/)
- **Production branch:** `main`

## Features

- Introductory hero with profile photo, resume download, and Upwork link
- About section describing experience in IoT, POS, fintech, and transportation
- Technical skills covering Flutter, Android, backend integrations, architecture, real-time communication, IoT, security, testing, and performance
- Service offerings for mobile development, IoT systems, authentication and payments, optimization, and maintenance
- Professional experience and featured projects with screenshots and GitHub links
- Client testimonials and contact links for email, phone, LinkedIn, GitHub, and Upwork
- Dark/light theme toggle
- Responsive layouts, animated elements, and iconography

## Technology and specifications

- **Frontend:** React 18 with JSX
- **Build tool and development server:** Vite 7
- **Styling:** Tailwind CSS 3 with class-based dark mode
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Hosting:** GitHub Pages
- **Architecture:** Static, client-rendered portfolio; no application server or database is required
- **Runtime requirement:** Node.js 20.19+ or 22.12+, and npm

The app's sections are composed in `portfolio/src/App.jsx`; individual section content is in `portfolio/src/components/`. Static images and the downloadable CV are in `portfolio/public/`.

## Set up and run locally

From the repository root:

```bash
cd portfolio
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`). The dev server supports hot reloading as you edit the source.

To create and locally preview a production build:

```bash
npm run build
npm run preview
```

The production files are written to `portfolio/dist/`.

## Build the project

Run the production build from the application directory:

```bash
cd portfolio
npm run build
```

Vite compiles the React app and copies public assets into `dist/`. Fix any build errors before deploying.

## Deploy to GitHub Pages

The `portfolio` package includes a `deploy` script using `gh-pages`. This publishes the built `dist/` folder to the repository's `gh-pages` branch.

1. In GitHub, open **Settings → Pages** and select **Deploy from a branch**, with branch `gh-pages` and folder `/(root)`.
2. From the repository root, build and publish:

   ```bash
   cd portfolio
   npm install
   npm run build
   npm run deploy
   ```

3. After GitHub Pages finishes publishing, visit [https://kirtikant.github.io](https://kirtikant.github.io).

Run deployment commands from `portfolio/`. The `main` branch holds the project source; `npm run deploy` publishes the built site to `gh-pages`. Re-run the build and deploy commands whenever you want to publish updated content.

## Git workflow

Run Git commands from the repository root. Replace `<branch-name>` with your branch's actual name.

### Pull and push changes on the same branch

Switch to your branch and update it from its matching remote branch before editing:

```bash
git switch <branch-name>
git pull --rebase origin <branch-name>
```

After making and checking your changes:

```bash
git add <files>
git commit -m "Describe the change"
git push -u origin <branch-name>
```

Use `git push` for subsequent pushes after the upstream is set. To get the latest updates later, switch back to that branch and run `git pull --rebase origin <branch-name>` again. If a rebase reports conflicts, resolve them in the affected files, then run `git add <resolved-files>` and `git rebase --continue`; do not push until the rebase completes.

### Switch branches

Check your current branch and working tree, then switch:

```bash
git status
git branch --list
git switch <branch-name>
```

Create and switch to a new feature branch from the latest `main`:

```bash
git switch main
git pull --ff-only origin main
git switch -c feature/<short-description>
```

Commit or stash uncommitted changes before switching if Git reports that they would be overwritten.

### Merge a feature branch into `main`

**Recommended:** Push the feature branch and open a pull request targeting `main`. Review and merge it on GitHub, then update your local `main`:

```bash
git switch main
git pull --ff-only origin main
```

Alternatively, merge locally after the feature branch is complete and pushed:

```bash
git switch main
git pull --ff-only origin main
git merge --no-ff <branch-name>
git push origin main
```

Resolve any merge conflicts, commit the merge if Git asks, and push only after confirming the resulting changes. Delete the feature branch after it has been merged if it is no longer needed.
