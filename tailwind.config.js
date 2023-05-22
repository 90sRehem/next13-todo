/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        base: ["inter", "sans-serif"],
      },
      fontSize: {
        xxs: '0.500rem',
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "fade-out": "fadeOut 0.5s ease-in-out",
        "slide-in": "slideIn 0.5s ease-in-out",
        "slide-out": "slideOut 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        slideIn: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideOut: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      "product-purple": "#8284FA",
      "product-purple-dark": "#5E60CE",
      "product-blue": "#4EA8DE",
      "product-blue-dark": "#1E6F9F",
      "base-gray-700": "#0D0D0D",
      "base-gray-600": "#1A1A1A",
      "base-gray-500": "#262626",
      "base-gray-400": "#333333",
      "base-gray-300": "#808080",
      "base-gray-200": "#D9D9D9",
      "base-gray-100": "#F2F2F2",
      "base-danger": "#E25858"
    }
  },
  plugins: [],
}
