/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'
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
        "lightColor-100":'#FCFCFC',
        "lightColor-200":'#F7F7F7',
        "lightColor-300":'#F3F3F3',
      },
      fontFamily:{
        "urbanist" : ['urbanist', 'sans-serif']
      }
    },
  },
  plugins: [
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
          {
              'bg-gradient': (angle) => ({
                  'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
              }),
          },
          {
              // values from config and defaults you wish to use most
              values: Object.assign(
                  theme('bgGradientDeg', {}), // name of config key. Must be unique
                  {
                      10: '10deg', // bg-gradient-10
                      15: '15deg',
                      20: '20deg',
                      25: '25deg',
                      30: '30deg',
                      45: '45deg',
                      60: '60deg',
                      90: '90deg',
                      120: '120deg',
                      135: '135deg',
                  }
              )
          }
       )
    })
  ],
}