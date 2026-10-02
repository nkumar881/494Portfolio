/* Navigation works without JavaScript; on mobile JS adds a collapsible menu. */
document.documentElement.classList.add('js');
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
const mobile = window.matchMedia('(max-width: 700px)');
function closeMenu() {
  nav.classList.remove('is-open');
  menu.setAttribute('aria-expanded', 'false');
  menu.textContent = 'Menu';
}
function updateMenu() {
  menu.hidden = !mobile.matches;
  closeMenu();
}
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.textContent = open ? 'Close menu' : 'Menu';
  nav.classList.toggle('is-open', open);
});
nav.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobile.matches) {
    closeMenu();
    menu.focus();
  }
});
menu.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu();
});
mobile.addEventListener('change', updateMenu);
updateMenu();

/* Only insert images that loaded successfully, leaving a clean fallback otherwise. */
document.querySelectorAll('[data-image]').forEach(figure => {
  const image = new Image();
  image.alt = figure.dataset.alt;
  image.addEventListener('load', () => figure.replaceChildren(image));
  image.src = figure.dataset.image;
});

/* Check PDFs before revealing links. GET also supports static hosts without HEAD.
   Reject HTML fallback responses so a missing PDF never creates a fake download. */
async function loadDocument(container) {
  try {
    const response = await fetch(container.dataset.document, { cache: 'no-cache' });
    if (!response.ok) return;
    const bytes = new Uint8Array(await response.arrayBuffer());
    if (String.fromCharCode(...bytes.slice(0, 5)) !== '%PDF-') return;
    const actions = document.createElement('div');
    actions.className = 'actions';
    const view = document.createElement('a');
    view.href = container.dataset.document;
    view.className = 'button secondary';
    view.textContent = 'Open ' + container.dataset.label;
    const download = document.createElement('a');
    download.href = container.dataset.document;
    download.download = '';
    download.className = 'button';
    download.textContent = 'Download PDF';
    actions.append(view, download);
    container.replaceChildren(actions);
    if (container.dataset.preview === 'true') {
      const preview = document.createElement('iframe');
      preview.src = container.dataset.document;
      preview.title = container.dataset.label + ' preview';
      container.append(preview);
    }
    // Remove the sibling development message only once its paper exists.
    const section = container.closest('section');
    section.querySelectorAll(':scope > p').forEach(paragraph => {
      if (paragraph.textContent.includes('to be added.') || paragraph.textContent === 'Coming soon') paragraph.remove();
    });
  } catch (_) {
    // Missing PDFs and file:// previews keep the existing placeholder.
  }
}
document.querySelectorAll('[data-document]').forEach(loadDocument);
