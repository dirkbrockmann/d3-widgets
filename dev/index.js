import './style.css';              // ← make sure this is first!
import '../src/widgets.module.css';
import './intro.js';
import './buttontypes.js';
import './button-features-1.js';
import './button-features-2.js';
import './slider-features-1.js';
import './slider-features-2.js';
import './slider-features-3.js';
import './toggle-features-1.js';
import './radio-features-1.js';
import './radio-features-2.js';
import './grid-example.js';

// ↓↓↓ Prism imports ↓↓↓
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

document.addEventListener('DOMContentLoaded', () => {
  initTheme()
  addDarkLightToggle()
  watchSystemThemeChanges()

  // highlight all code blocks at runtime
  Prism.highlightAll()
})

// 1) Create and append a Dark/Light toggle button
function addDarkLightToggle() {
  const btn = document.createElement('button');
  btn.setAttribute('aria-label', 'Toggle dark/light mode');
  btn.className =
    'fixed top-4 right-4 bg-white dark:bg-black text-black dark:text-white ' +
    'p-2 rounded-full shadow-lg z-50 flex items-center justify-center';

  // replace the emoji with an SVG circle that flips color
  btn.innerHTML = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="w-6 h-6 fill-black dark:fill-white"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  `;

  document.body.appendChild(btn);

  btn.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    syncWidgetDarkMode(isDark);
  });
}

// 2) Sync your widgets
function syncWidgetDarkMode(isDark) {
  document.querySelectorAll('.d3-widgets')
    .forEach(w => w.classList.toggle('dark-mode', isDark));
}

// 3) Apply theme
function applyTheme(useDark) {
  document.documentElement.classList[useDark ? 'add' : 'remove']('dark');
  syncWidgetDarkMode(useDark);
}

// 4) On load, respect saved or system
function initTheme() {
  const saved = localStorage.getItem('theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const useDark = saved === 'dark' || (!saved && systemDark);
  applyTheme(useDark);
}

// 5) Watch OS changes (always apply the new scheme)
function watchSystemThemeChanges() {
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  const handler = e => {
    // Always apply the OS-level change
    applyTheme(e.matches);
  };
  if (mq.addEventListener) {
    mq.addEventListener('change', handler);
  } else {
    mq.addListener(handler);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  addDarkLightToggle();
  watchSystemThemeChanges();
});