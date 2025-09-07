Restlyn Docs — Deploy Guide

This site is a GitHub Pages user site hosted at https://restlyn.github.io.

Repos and branches

- Source repo: https://github.com/restlyn/restlyn.github.io
  - Branch `source`: Docusaurus source (edit here)
  - Branch `main`: Built static site (GitHub Pages serves from here)

One‑time setup

1) Ensure this folder is a git repo pointing to the Pages repo:

   git remote -v
   # If missing or different:
   git init
   git branch -M source
   git remote add origin git@github.com:restlyn/restlyn.github.io.git

2) GitHub Pages settings for restlyn/restlyn.github.io:

- Settings → Pages → Source: Branch: main, Folder: /(root)

Local development

1) Install deps:

   npm install

2) Run dev server:

   npm start

3) Build + preview production locally:

   npm run build:serve

Deploy (SSH)

Preferred method (no tokens stored):

1) Ensure SSH key is added to the restlyn account and test:

   ssh -T git@github.com

2) From this folder:

   npm run deploy:ssh

Deploy (PAT)

Alternative method using a personal access token:

   export GIT_USER=restlyn
   read -s GITHUB_TOKEN; export GITHUB_TOKEN
   npx docusaurus deploy

Notes

- You must deploy from a branch different than `deploymentBranch` (= `main`).
  Work on `source`; the deploy step pushes the build to `main`.
- Site config: `docusaurus.config.js` is set for user site hosting:
  - `url: 'https://restlyn.github.io'`, `baseUrl: '/'`, `organizationName: 'restlyn'`,
    `projectName: 'restlyn.github.io'`, `deploymentBranch: 'main'`, `trailingSlash: false`.
- If you see broken links during build, fix the doc slugs/links rather than disabling checks.

