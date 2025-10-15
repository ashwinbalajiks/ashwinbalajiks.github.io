
# Portfolio — GitHub Pages (User site)

This bundle is ready for **GitHub Pages**.

## Deploy steps
1) Create a **public** repo named **ashwinbalajiks.github.io** (exact).
2) Upload all files in this ZIP **to the repo root** (index.html must be at root).
3) Go to **Settings → Pages**:
   - **Source:** Deploy from a branch
   - **Branch:** **master** (root)
   - If your default branch is **main**, select **main (root)** instead.
4) Commit/push. Wait ~30–60 seconds, then open: https://ashwinbalajiks.github.io/

## Included
- `index.html`, `assets/`, `resume.pdf`, `404.html`, `.nojekyll`
- `README.md` (this file)

## Troubleshooting
- **404 / not showing**: Verify repo is public, `index.html` is at root, and Pages points to the branch you pushed.
- **Still not building**: Make a tiny change and commit again to trigger a rebuild.
- **Theme errors**: `.nojekyll` disables Jekyll so static assets load as-is.
