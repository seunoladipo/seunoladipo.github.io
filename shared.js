// shared.js — inject nav, footer, fade-in observer, mobile menu

const NAV_LINKS = [
  { href: 'index.html',      label: 'Home' },
  { href: 'research.html',   label: 'Research' },
  { href: 'experience.html', label: 'Experience' },
  { href: 'contact.html',    label: 'Contact', cta: true },
];

function buildNav() {
  const current = location.pathname.split('/').pop() || 'index.html';
  const linksHTML = NAV_LINKS.map(l =>
    `<li><a href="${l.href}" class="${l.cta ? 'nav-cta' : ''}${current === l.href ? ' active' : ''}">${l.label}</a></li>`
  ).join('');

  document.body.insertAdjacentHTML('afterbegin', `
    <nav>
      <a href="index.html" class="nav-brand">Seun <span>Oladipo</span></a>
      <ul class="nav-links" id="navLinks">${linksHTML}</ul>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  `);

  document.getElementById('navToggle').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
  });
}

function buildFooter() {
  document.body.insertAdjacentHTML('beforeend', `
    <footer>
      <div class="footer-inner">
        <div>
          <div class="footer-brand-name">Seun Oladipo</div>
          <div class="footer-tagline">PhD Candidate in Environmental Science<br>University of Virginia</div>
        </div>
        <div>
          <div class="footer-col-title">Navigate</div>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="research.html">Research</a></li>
            <li><a href="experience.html">Experience</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-col-title">Connect</div>
          <ul class="footer-links">
            <li><a href="mailto:vet3ks@virginia.edu">vet3ks@virginia.edu</a></li>
            <li><a href="https://github.com/seunoladipo" target="_blank">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/seun-oladipo" target="_blank">LinkedIn</a></li>
            <li><a href="https://storymaps.arcgis.com/stories/c3c36c5cf6974f988dfd975d9ef1f989" target="_blank">ArcGIS StoryMaps</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span class="footer-copy">&copy; 2026 Seun Oladipo. All rights reserved.</span>
        <span class="footer-copy">University of Virginia, Charlottesville, VA</span>
      </div>
    </footer>
  `);
}

function initFadeIn() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.fade').forEach(el => obs.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  buildFooter();
  initFadeIn();
});
