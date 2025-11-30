// Apply saved or system theme ASAP, before CSS paints
(function() {
  try {
    var html = document.documentElement;
    var saved = localStorage.getItem('theme');
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && prefersDark)) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  } catch (e) {
    // Fail silently
  }
})();
