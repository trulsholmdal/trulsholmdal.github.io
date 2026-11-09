# Truls Myrvold Holmdal — personal portfolio

A responsive, standalone HTML portfolio with a Swiss-inspired financial editorial design and quantitative-research details.

## What's included

- `index.html` — home, about, experience, projects, skills and contact
- `projects/inflation-forecasting.html` — ongoing research project
- `projects/wealth-tax.html` — bachelor's thesis topic
- `assets/styles.css` — design, desktop/mobile layouts, light/dark colors
- `assets/app.js` — light/dark toggle, mobile navigation, subtle animations
- `assets/profile.js` — where to paste LinkedIn/GitHub URLs
- `assets/Truls_Holmdal_Public_CV.pdf` — public-friendly résumé (no street address or telephone)

No npm, Node.js, package installation, terminal commands or paid hosting are needed.

## Publishing

Read `PUBLISHING-GUIDE.md` for exact click-by-click steps. The simplest option is GitHub Pages on a repository called `<your-github-username>.github.io`.

## Editing links later

Open `assets/profile.js` in your GitHub repository, click the pencil icon, and paste complete URLs inside the empty quotation marks. Example:

```javascript
window.PORTFOLIO_PROFILE = {
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/your-profile/",
  inflationRepository: "https://github.com/yourusername/Inflation-Forecasting"
};
```

Save the change using **Commit changes**. The social links appear automatically after publication updates. Leave a field blank to hide that link.

## Notes

- Research design is based on a project proposal and does not claim any completed model results.
- The bachelor's thesis was identifiable by title and institution in the CV; no methodology or findings were invented.
- Contact uses the professional email found in the résumé.
- The original CV was intentionally not published because it includes personal address and phone number.
- Decorative visualizations are clearly marked illustrative, not empirical results.
