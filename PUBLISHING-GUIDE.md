# Publish your portfolio free on GitHub Pages — no coding required

## Before you start

You need a free GitHub account and the *unzipped* website folder on your computer. GitHub Pages hosting is free for a public repository. You do not need to buy a website builder, hosting plan or domain name.

## A. Open the website on your computer

1. Download `truls-holmdal-portfolio.zip` and double-click the file to unzip it.
2. Open the folder `truls-holmdal-portfolio`.
3. Double-click **index.html**. It opens in your browser. This is your local preview.
4. Test the light/dark toggle, Research cards, and Download CV button.

## B. Create a GitHub repository

1. Go to https://github.com and sign in (or choose **Sign up** to make a free account).
2. Click the **+** icon at top right, then **New repository**. You can also visit https://github.com/new directly.
3. Under **Repository name**, enter exactly `YOURUSERNAME.github.io` — substitute your actual GitHub username, written in lowercase. If your username is `trulsh`, type `trulsh.github.io`.
4. Choose **Public**.
5. Select **Add a README file** (if offered).
6. Click **Create repository**.

## C. Upload the website files, without coding

1. From the new repository's **Code** tab, click **Add file → Upload files**.
2. On your computer, open your **unzipped** `truls-holmdal-portfolio` folder.
3. Select **everything inside** that folder — `index.html`, `projects`, `assets`, `README.md`, `PUBLISHING-GUIDE.md` and the hidden `.nojekyll` file if visible. Drag the selected items into the GitHub upload area. **Do not upload the ZIP file itself.**
4. Verify GitHub shows `index.html` at the repository's top level, with `assets/` and `projects/` as folders. The browser may not show hidden `.nojekyll`; it is optional for this plain static website.
5. If GitHub asks how to commit, select **Commit directly to the main branch**. Enter a message such as `Add portfolio website`, then click **Commit changes**. Depending on GitHub's interface, the button may say **Propose changes** first; follow the confirmation step.

> Important: The folder `truls-holmdal-portfolio` should **not** be the top-level folder inside the GitHub repository. The repository root must contain `index.html`.

## D. Enable GitHub Pages

1. In your repository, click **Settings** (along the top).
2. From the left menu, choose **Pages** under **Code and automation**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Under **Branch**, choose **main**; for the folder choose **/(root)**. Click **Save**.
5. Wait for GitHub to finish its first deployment. It can take up to 10 minutes.
6. Refresh the **Settings → Pages** screen. Click **Visit site** when the website link appears.
7. Your public address will be `https://YOURUSERNAME.github.io/`.

## E. Add LinkedIn and GitHub profiles (optional, no local software needed)

1. In your repository, open the **assets** folder, then click **profile.js**.
2. Click the pencil icon (**Edit this file**).
3. Find the lines starting `github:`, `linkedin:`, and `inflationRepository:`.
4. Paste your complete profile links between the matching quotation marks. Example: `github: "https://github.com/yourusername",`.
5. Click **Commit changes**, then refresh your public site once GitHub has deployed the update.
6. If you leave any field empty, that button remains hidden instead of linking to the wrong profile.

## F. Optional: get a personal domain

You can buy a domain later. It is **not required**. Once you own it, open your repository's **Settings → Pages → Custom domain**, enter your domain and follow GitHub's DNS guidance at https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site . Leave this alone for your first launch.

## Common problems

**404 page**: check that `index.html` is at the repository root, not inside a subfolder; check **Settings → Pages** says `main` and `/(root)`; give the deployment time to complete.

**No styles or broken project links**: verify that both `assets/` and `projects/` were uploaded intact, with their original names.

**No GitHub/LinkedIn button**: this is intentional until you enter your real links in `assets/profile.js`.

**No website changes yet**: wait a few minutes; GitHub notes publication can take up to 10 minutes after a change. Hard-refresh the page if necessary.

**Safety**: GitHub Pages is publicly accessible. Never upload your private original CV, home address, passwords, access tokens, or secret keys into the repository.

### Official reference

- GitHub Pages quickstart: https://docs.github.com/en/pages/quickstart
- Uploading files in a browser: https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
