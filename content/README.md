# Content Workflow

This folder is the only place you need to edit for CV, profile photo, and projects.

## CV
- Keep the latest CV at: `content/cv/current.pdf`
- You can replace the file at any time. Do not change the file name.

## Profile Photo
- Use the base name `current` inside `content/profile/`
- Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
- The site auto-detects the first available format in this order: `jpg`, `jpeg`, `png`, `webp`

## Projects
- Edit `content/site-content.js`
- Update `window.SITE_CONTENT.projects` entries:
  - `title`
  - `primaryUrl`
  - `extras` (optional links like repo/paper/demo)

## Notes
- `content/site-content.js` is loaded before `script.js` and is the source of truth for dynamic content.
- If config keys are missing, the site uses safe defaults.
