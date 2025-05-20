// Theme detection utilities
const isDarkMode = () => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
};

// Watch for changes in color scheme preference
const watchColorScheme = (callback) => {
  if (!window.matchMedia) return;
  
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Initial callback with current state
  callback(mediaQuery.matches);
  
  // Modern event listener
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener('change', (e) => callback(e.matches));
  } else {
    // Fallback for older browsers
    mediaQuery.addListener((e) => callback(e.matches));
  }
};

// Manual theme toggle (for custom theme controls)
const toggleDarkMode = (forceDark) => {
  if (forceDark === true || (forceDark !== false && !document.documentElement.classList.contains('dark'))) {
    document.documentElement.classList.add('dark');
    return true;
  } else {
    document.documentElement.classList.remove('dark');
    return false;
  }
};

export { isDarkMode, watchColorScheme, toggleDarkMode };
