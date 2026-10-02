# Nikhil Kumar — Engineering Portfolio

Seven separate HTML pages, one stylesheet, and one JavaScript file. No build step, framework, backend, database, or external dependencies.

## Run locally

From this folder run:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. Stop the server with Ctrl+C. You can open index.html directly to read the pages, but PDF detection needs an HTTP server. JavaScript enables the mobile menu and checks optional assets; navigation and page content remain available without it.

## Edit content

- `index.html`: introduction, About Me, education, contact, photographs.
- `goals.html`: personal career narrative.
- `projects.html`: senior design, RISC-V, Vent, Moshell API; roles, learning, resources, supporting material.
- `experience.html`: research, internship, ARA REU, leadership, approved materials.
- `resume.html`: readable resume summary and PDF area. Keep education, experience, and project summaries consistent with their full pages when editing.
- `reflections.html`: replace “Reflection to be added.” with your complete course-rubric reflection text. Optional PDFs do not replace the requested full HTML text.
- `ethics.html`: ethics paper PDF area.
- `style.css`: shared colors, type, layout, breakpoints, focus styles, print styles, reduced motion.
- `script.js`: mobile navigation and optional asset detection.

The navigation and footer are deliberately plain HTML in each page. Update all seven copies if changing these shared elements.

## Add photographs and project images

Put approved files at these exact paths (filenames are case sensitive on many hosts):

| Path | Purpose |
| --- | --- |
| `assets/images/nikhil-profile.jpg` | Main portrait |
| `assets/images/nikhil-about.jpg` | Additional personal photograph |
| `assets/images/nikhil-experience.jpg` | Approved experience photograph |
| `assets/images/senior-design.jpg` | Approved senior design visualization |
| `assets/images/risc-v-processor.jpg` | Processor diagram or simulation screenshot |
| `assets/images/vent-language.jpg` | Example program or interpreter output |
| `assets/images/moshell-api.jpg` | Approved architecture diagram |

The placeholders are replaced automatically when images load. Failed or missing images keep the clean placeholder. Edit each figure’s `data-alt` to describe the actual photograph or screenshot you add. For another file type, update its `data-image` path. No stock photos are included.

## Add PDFs

- `assets/documents/nikhil-resume.pdf`
- `assets/documents/general-education-reflection.pdf`
- `assets/documents/cumulative-reflection.pdf`
- `assets/documents/ethics-paper.pdf`

On an HTTP server, JavaScript checks that a file exists and begins with the PDF signature before revealing open/download links. Resume and ethics PDFs also receive an embedded browser preview. Browsers without an embedded PDF viewer can use the Open link. Missing files produce no download buttons. For a JavaScript-free deployment, manually add links only after you have added the real files.

## Remaining materials before submission

- Portrait, optional About Me and Experience photos, and approved project screenshots/diagrams.
- Senior design: confirmed individual responsibilities, completed contributions, skills actually gained, separately labeled planned learning, approved website, reports, design documents, presentations.
- Vent: confirmed personally owned components, example programs, verified repository link.
- RISC-V: approved code links and diagrams/simulation captures; specific tools and external references only if confirmed.
- Moshell API: approved documentation and API examples, with credentials/private network details/restricted research information removed.
- Verified repository links for any other projects, when supplied.
- Resume PDF; complete General Education and Cumulative Reflection text and optional PDFs; actual CPRE/EE 394 ethics paper PDF.
- Approved evaluations, presentations, and verified awards, activities, publications when available.

Replace relevant “Coming soon” areas with these approved materials. No missing facts, papers, results, or links have been invented.

## Static publishing

Upload this folder’s contents as the public site root on your chosen static host. `index.html` must be at the root alongside all six other pages, `style.css`, `script.js`, and `assets/`. There is no build command.

For GitHub Pages, commit these files to a repository and enable Pages for the branch and folder containing index.html. For other static hosts, select a static upload or a no-build deployment. Relative links also work under a project subdirectory. Check all seven pages and PDFs after uploading. Publish only materials you have permission to share.

## Verification

The site includes semantic landmarks, one h1 per page, an active-page navigation marker, a skip link, visible keyboard focus, a keyboard-operable mobile menu with Escape support, image fallbacks, and reduced-motion styles. At narrow widths, columns stack and navigation collapses. With JavaScript disabled, navigation stays visible.

After replacing assets or text, recheck at desktop and mobile widths and at 200% zoom. Use Tab/Shift+Tab to reach links and controls, Enter/Space on the menu button, and Escape to close the menu. Confirm missing PDFs have no download links and existing PDFs open and download correctly.

Implementation checks: all seven pages were inspected in the local browser at 1440px, 390px, and 320px. Each had one main heading, one active-page marker, no horizontal overflow, no broken image elements, and no download links for missing PDFs. Keyboard Space opened the mobile menu. All local navigation links resolve. Escape behavior is implemented but the final live check was interrupted by the browser session closing. Existing-PDF rendering should be rechecked when actual PDFs are added.

Visual direction updated to a dark, cinematic layout inspired by the supplied reference: rounded translucent navigation, portrait area, generous media frames, and large dedicated PDF preview placeholders. Add your actual portrait to activate the photo frame.
