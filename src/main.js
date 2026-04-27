import siteConfig from '../site.config.js';
import './styles.css';

/** Root-relative /public paths need the Vite base prefix on GitHub Pages project URLs. */
function publicAssetUrl(url) {
  if (!url || typeof url !== 'string') return url;
  const t = url.trim();
  if (/^https?:\/\//i.test(t) || t.startsWith('//') || t.startsWith('data:')) return t;
  if (!t.startsWith('/')) return t;
  const base = import.meta.env.BASE_URL || '/';
  const prefix = base.endsWith('/') ? base : `${base}/`;
  return `${prefix}${t.slice(1)}`;
}

function bindText() {
  document.querySelectorAll('[data-bind]').forEach((el) => {
    const key = el.dataset.bind;
    const value = siteConfig[key];
    if (value === undefined || value === null) return;
    el.textContent = String(value);
  });
}

function applyHeroLayout() {
  const heroWrap = document.querySelector('#top.vt-wrap');
  if (!heroWrap || !siteConfig.heroHeight) return;
  const desktopWide =
    typeof window.matchMedia === 'function' && window.matchMedia('(min-width: 850px)').matches;
  const height =
    desktopWide && siteConfig.heroHeightDesktop ? siteConfig.heroHeightDesktop : siteConfig.heroHeight;
  heroWrap.style.setProperty('--vt-height', height);
}

function applyVisualConfig() {
  const root = document.documentElement;
  if (siteConfig.bodyPatternUrl) {
    root.style.setProperty(
      '--site-body-pattern',
      `url('${publicAssetUrl(siteConfig.bodyPatternUrl)}')`,
    );
  }

  const brand = document.getElementById('nav-brand');
  if (brand && siteConfig.mire && siteConfig.mireasa) {
    brand.textContent = `${siteConfig.mireasa} & ${siteConfig.mire}`;
  }

  const heroWrap = document.querySelector('#top.vt-wrap');
  applyHeroLayout();
  if (heroWrap && siteConfig.heroImageOpacity != null) {
    heroWrap.style.setProperty('--vt-img-opacity', String(siteConfig.heroImageOpacity));
  }
  if (heroWrap && siteConfig.heroObjectPositionDesktop) {
    heroWrap.style.setProperty('--hero-object-desktop', siteConfig.heroObjectPositionDesktop);
  }
  if (heroWrap && siteConfig.heroObjectPositionMobile) {
    heroWrap.style.setProperty('--hero-object-mobile', siteConfig.heroObjectPositionMobile);
  }

  const funWrap = document.querySelector('.vt-wrap--fun');
  if (funWrap) {
    if (siteConfig.funSectionHeight) {
      funWrap.style.setProperty('--vt-height', siteConfig.funSectionHeight);
    }
    if (siteConfig.funImageOpacity != null) {
      funWrap.style.setProperty('--vt-img-opacity', String(siteConfig.funImageOpacity));
    }
  }

  const venueBtn = document.getElementById('venue-map-btn');
  if (venueBtn && siteConfig.venueMapLink) {
    venueBtn.href = siteConfig.venueMapLink;
    venueBtn.rel = 'noopener noreferrer';
    venueBtn.target = '_blank';
  }

  const iframe = document.getElementById('venue-map-iframe');
  if (iframe && siteConfig.venueMapEmbed) {
    iframe.src = siteConfig.venueMapEmbed;
  }

  const inviteImg = document.getElementById('invite-side-img');
  if (inviteImg && siteConfig.inviteImageUrl) {
    inviteImg.src = publicAssetUrl(siteConfig.inviteImageUrl);
    inviteImg.alt = 'Invitație';
  }

  updateVtBackgrounds();
}

function updateVtBackgrounds() {
  const wide =
    typeof window.matchMedia === 'function' && window.matchMedia('(min-width: 850px)').matches;

  const heroImg = document.getElementById('hero-vt-img');
  if (heroImg) {
    const url = wide ? siteConfig.heroImageDesktop : siteConfig.heroImageMobile;
    if (url) heroImg.src = publicAssetUrl(url);
  }

  const funBg = document.getElementById('fun-vt-bg');
  if (funBg) {
    const url = wide ? siteConfig.funImageDesktop : siteConfig.funImageMobile;
    if (url) funBg.style.backgroundImage = `url('${publicAssetUrl(url)}')`;
  }

  const venueCardImg = document.getElementById('venue-card-img');
  if (venueCardImg && siteConfig.venueCardImageUrl) {
    venueCardImg.src = publicAssetUrl(siteConfig.venueCardImageUrl);
    venueCardImg.alt = siteConfig.venueName || 'Locație';
  }
}

function setupFooter() {
  const phoneLink = document.getElementById('footer-card-phone');
  if (phoneLink && siteConfig.footerPhoneTel) {
    phoneLink.href = `tel:${siteConfig.footerPhoneTel.replace(/\s/g, '')}`;
  }
  const social = document.getElementById('footer-social');
  if (!social || !Array.isArray(siteConfig.footerLinks)) return;
  social.innerHTML = '';
  siteConfig.footerLinks.forEach((link, i) => {
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.label;
    a.className = 'text-reset';
    a.rel = 'noopener noreferrer';
    if (link.href.startsWith('http')) a.target = '_blank';
    social.appendChild(a);
    if (i < siteConfig.footerLinks.length - 1) {
      social.appendChild(document.createTextNode(' '));
    }
  });
}

function pad2(n) {
  return String(n).padStart(2, '0');
}

function updateCountdown() {
  const target = new Date(siteConfig.weddingDateTime).getTime();
  const now = Date.now();
  const diff = target - now;

  const countdownEl = document.getElementById('countdown');
  const doneEl = document.getElementById('countdown-done');
  const timerWrap = document.getElementById('timer-wrap');

  if (!countdownEl || !doneEl) return;

  if (Number.isNaN(target)) {
    countdownEl.classList.add('hidden');
    if (timerWrap) timerWrap.classList.add('hidden');
    doneEl.classList.remove('hidden');
    doneEl.textContent = siteConfig.countdownDoneMessage;
    return;
  }

  if (diff <= 0) {
    countdownEl.classList.add('hidden');
    if (timerWrap) timerWrap.classList.add('hidden');
    doneEl.classList.remove('hidden');
    return;
  }

  doneEl.classList.add('hidden');
  countdownEl.classList.remove('hidden');
  if (timerWrap) timerWrap.classList.remove('hidden');

  const totalSec = Math.floor(diff / 1000);
  const d = Math.floor(totalSec / 86400);
  const h = Math.floor((totalSec % 86400) / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;

  const daysEl = countdownEl.querySelector('[data-count="days"]');
  const hoursEl = countdownEl.querySelector('[data-count="hours"]');
  const minutesEl = countdownEl.querySelector('[data-count="minutes"]');
  const secEl = countdownEl.querySelector('[data-count="seconds"]');
  if (daysEl) daysEl.textContent = d > 99 ? String(d) : pad2(d);
  if (hoursEl) hoursEl.textContent = pad2(h);
  if (minutesEl) minutesEl.textContent = pad2(m);
  if (secEl) secEl.textContent = pad2(s);
}

function setupPresenceToggle() {
  const counts = document.getElementById('guest-counts');
  const adults = document.getElementById('adults');
  const children = document.getElementById('children');
  const radios = document.querySelectorAll('input[name="prezenta"]');

  function sync() {
    const selected = document.querySelector('input[name="prezenta"]:checked');
    const isYes = selected && selected.value === 'da';
    if (counts) {
      counts.classList.toggle('hidden', !isYes);
      counts.setAttribute('aria-hidden', isYes ? 'false' : 'true');
    }
    if (adults) {
      adults.required = Boolean(isYes);
      adults.disabled = !isYes;
    }
    if (children) {
      children.required = false;
      children.disabled = !isYes;
    }
  }

  radios.forEach((r) => r.addEventListener('change', sync));
  sync();
}

function digitsOnly(str) {
  return (str.match(/\d/g) || []).length;
}

function validateForm(form) {
  const name = form.querySelector('#guest-name');
  const phone = form.querySelector('#guest-phone');
  const presence = form.querySelector('input[name="prezenta"]:checked');
  const adults = form.querySelector('#adults');

  if (!name?.value.trim()) {
    return 'Vă rugăm introduceți numele complet.';
  }
  if (!phone?.value.trim() || digitsOnly(phone.value) < 8) {
    return 'Vă rugăm introduceți un număr de contact valid.';
  }
  if (!presence) {
    return 'Vă rugăm selectați prezența.';
  }
  if (presence.value === 'da' && adults) {
    const n = parseInt(adults.value, 10);
    if (Number.isNaN(n) || n < 1) {
      return 'Indicați cel puțin un adult prezent.';
    }
  }
  return null;
}

async function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const status = document.getElementById('form-status');
  const submitBtn = form.querySelector('button[type="submit"]');

  if (status) {
    status.textContent = '';
    status.className = 'form-status small mb-2';
  }

  const err = validateForm(form);
  if (err) {
    if (status) {
      status.textContent = err;
      status.classList.add('form-status--error');
    }
    return;
  }

  const formId = siteConfig.formspreeFormId;
  if (!formId) {
    if (status) {
      status.textContent =
        'Formularul nu este încă conectat. Adăugați formspreeFormId în site.config.js (vezi README).';
      status.classList.add('form-status--error');
    }
    return;
  }

  const fd = new FormData(form);
  const prezenta = fd.get('prezenta');
  const payload = {
    nume_prenume: fd.get('nume_prenume'),
    numar_contact: fd.get('numar_contact'),
    prezenta: prezenta === 'da' ? 'Da, vom fi prezenți' : 'Nu vom fi prezenți',
    adulti: prezenta === 'da' ? fd.get('adulti') : '',
    copii: prezenta === 'da' ? fd.get('copii') : '',
    mesaj: fd.get('mesaj') || '',
  };

  if (submitBtn) submitBtn.disabled = true;

  try {
    const res = await fetch(`https://formspree.io/f/${formId}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      if (status) {
        status.textContent = 'Mulțumim! Confirmarea a fost trimisă.';
        status.classList.add('form-status--ok');
      }
      form.reset();
      setupPresenceToggle();
    } else {
      const data = await res.json().catch(() => ({}));
      const msg =
        data.error || 'A apărut o eroare la trimitere. Încercați din nou mai târziu.';
      if (status) {
        status.textContent = msg;
        status.classList.add('form-status--error');
      }
    }
  } catch {
    if (status) {
      status.textContent =
        'Nu s-a putut trimite (rețea). Verificați conexiunea și încercați din nou.';
      status.classList.add('form-status--error');
    }
  } finally {
    if (submitBtn) submitBtn.disabled = false;
  }
}

function setupReveal() {
  const nodes = document.querySelectorAll('.reveal');
  if (!nodes.length) return;

  const reduced =
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced) {
    nodes.forEach((n) => n.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );

  nodes.forEach((n) => io.observe(n));
}

function setupMobileNavClose() {
  const collapseEl = document.getElementById('nav-collapse');
  const BS = typeof window !== 'undefined' ? window.bootstrap : undefined;
  if (!collapseEl || !BS?.Collapse) return;

  collapseEl.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth >= 992) return;
      if (!collapseEl.classList.contains('show')) return;
      let inst = BS.Collapse.getInstance(collapseEl);
      if (!inst) inst = new BS.Collapse(collapseEl, { toggle: false });
      inst.hide();
    });
  });
}

function init() {
  bindText();
  applyVisualConfig();
  setupFooter();
  setupMobileNavClose();
  updateCountdown();
  setInterval(updateCountdown, 1000);
  setupPresenceToggle();
  setupReveal();

  window.addEventListener('resize', () => {
    applyHeroLayout();
    updateVtBackgrounds();
  });

  const form = document.getElementById('rsvp-form');
  if (form) form.addEventListener('submit', handleSubmit);
}

init();
