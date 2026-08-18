/* Imperial Barbers — site behaviour */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Current year in the footer ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Header goes solid once you leave the hero ---------- */
  var header = document.getElementById('siteHeader');
  var ticking = false;

  function syncHeader() {
    header.classList.toggle('is-stuck', window.scrollY > 40);
    ticking = false;
  }
  if (header) {
    window.addEventListener('scroll', function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(syncHeader);
      }
    }, { passive: true });
    syncHeader();
  }

  /* ---------- Mobile menu ---------- */
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('siteNav');
  var scrim = document.getElementById('navScrim');

  function openMenu() {
    nav.classList.add('is-open');
    document.body.classList.add('nav-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
    scrim.hidden = false;
    window.requestAnimationFrame(function () { scrim.classList.add('is-on'); });
    var first = nav.querySelector('a');
    if (first) first.focus();
  }

  function closeMenu(returnFocus) {
    nav.classList.remove('is-open');
    document.body.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    scrim.classList.remove('is-on');
    window.setTimeout(function () { scrim.hidden = true; }, reduceMotion ? 0 : 350);
    if (returnFocus) toggle.focus();
  }

  function isOpen() {
    return toggle.getAttribute('aria-expanded') === 'true';
  }

  if (toggle && nav && scrim) {
    toggle.addEventListener('click', function () {
      if (isOpen()) { closeMenu(false); } else { openMenu(); }
    });

    scrim.addEventListener('click', function () { closeMenu(true); });

    nav.addEventListener('click', function (e) {
      if (e.target.closest('a') && isOpen()) closeMenu(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen()) closeMenu(true);
    });

    /* Keep the menu honest when the viewport grows past the breakpoint */
    window.addEventListener('resize', function () {
      if (window.innerWidth > 900 && isOpen()) closeMenu(false);
    });
  }

  /* ---------- Mark today in the opening hours ----------
     Read off Auckland's clock, not the visitor's, so someone browsing
     from overseas still sees the shop's day highlighted. */
  var hoursList = document.getElementById('hoursList');

  if (hoursList && window.Intl && Intl.DateTimeFormat) {
    try {
      var today = new Intl.DateTimeFormat('en-NZ', {
        timeZone: 'Pacific/Auckland',
        weekday: 'long'
      }).format(new Date());

      var row = hoursList.querySelector('[data-day="' + today + '"]');
      if (row) {
        row.classList.add('is-today');
        var note = document.createElement('span');
        note.className = 'hours__today';
        note.textContent = ' (today)';
        row.querySelector('dt').appendChild(note);
      }
    } catch (err) {
      /* no timezone data: the hours still read fine unmarked */
    }
  }

  /* ---------- Scroll reveals ---------- */
  var revealables = document.querySelectorAll('[data-reveal]');

  Array.prototype.forEach.call(revealables, function (el) {
    var d = el.getAttribute('data-reveal-delay');
    if (d) el.style.setProperty('--d', d);
  });

  if (reduceMotion || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(revealables, function (el) { el.classList.add('is-in'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

    Array.prototype.forEach.call(revealables, function (el) { observer.observe(el); });

    /* Anything already on screen at load reveals immediately */
    window.requestAnimationFrame(function () {
      Array.prototype.forEach.call(revealables, function (el) {
        if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('is-in');
      });
    });
  }
})();
