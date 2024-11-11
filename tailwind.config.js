/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 5s ease-in-out infinite",
      },
      keyframes: {
        wiggle:{
          '0%':{
            transform:'scale(0.250)',
            opacity: '0'
          },
          '60%':{
            transform: 'translateY(4.25rem)',
          },
          '100%':{
            transform: 'scale(1.50)',
            opacity: '1'
          },

        },
      },
    },
  },
  plugins: [],
}

