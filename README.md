# Palmer House, Hove

An unofficial residents' guide to Palmer House, 110–111 Davigdor Road, Hove — published with GitHub Pages.

Plain static HTML/CSS, no build step:

- `index.html`: home page with top questions
- `appliances.html`: appliance manuals and tips, by room
- `planning.html`: planning permission for developments around the building
- `updates.html`: timeline of updates
- `faq.html`: frequently asked questions
- `emails/`: shared emails (`index.html` is the inbox, one page per email)
- `assets/style.css`: shared styles
- `assets/img/`: images (WebP)
- `assets/manuals/`: local copies of appliance manuals (sources in `SOURCES.md`)

Internal links use clean URLs (`faq`, not `faq.html`), which GitHub Pages resolves automatically. To preview locally, use a server that does the same, such as `npx serve`.
