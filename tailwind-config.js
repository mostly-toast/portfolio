// Tailwind inline config - Cleaned for Dark Mode Only
window.tailwind = window.tailwind || {};
window.tailwind.config = {
  // Removed darkMode: 'class' (Not needed anymore)
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