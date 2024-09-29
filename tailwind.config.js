module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'virtudress-purple': '#13072e',
        'virtudress-dark': '#18012b',
      },
      aspectRatio: {
        '9/16': '9 / 16',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}