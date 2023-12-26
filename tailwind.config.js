/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        'purpleshade-100':'#A685FA',
        'purpleshade-300':'#8254F8',
        'purpleshade-400':'#703BF7',
        'grayshade-50':'#999999',
        'grayshade-100':'#4D4D4D',
        'grayshade-200':'#333333',
        'grayshade-300':'#262626',
        'grayshade-400':'#1A1A1A',
        'grayshade-500':'#141414',
      },
      fontFamily:{
        "urbanist" : ['urbanist', 'sans-serif']
      }
    },
  },
  plugins: [],
}