// Tailwind inline config moved out of HTML
// Must be loaded before the CDN tailwindcss script tag
window.tailwind = window.tailwind || {};
window.tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        slate: {
          900: '#0f172a',
          800: '#1e293b',
        }
      },
      animation: {
          'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
          blink: {
              '0%, 100%': { opacity: '1' },
              '50%': { opacity: '0' },
          }
      }
    }
  }
};