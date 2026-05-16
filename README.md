# RJM Tech Services Website

Static portfolio website for rjmtechservices.com, built with Eleventy and hosted on Cloudflare Pages.

## Structure

Editable content lives in:

src/content/


Site templates, layout code, CSS, and build configuration live in:

src/
.eleventy.js
package.json

Generated site output lives in:

_site/

Do not edit _site directly.

Local build
npm run build
Local preview
npm run start
Cloudflare Pages settings
Build command: npm run build
Build output directory: _site
Root directory: /
Production branch: main
Editing workflow
Edit Markdown files in src/content/
Build locally with npm run build
Commit changes
Push to GitHub
Cloudflare Pages deploys automatically