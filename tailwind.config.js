// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sharetech: ['"Share Tech Mono"', 'monospace'],
      },
    },
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // add other paths as needed
  ],
};
