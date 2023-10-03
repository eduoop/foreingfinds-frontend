import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        weakGray: '#ebebeb',
        primaryOrange: '#EE4D2D',
        primaryGray: '#D2D2D2',
        primaryGraffiti: '#4a4a4a',
        neutralBlack: '#1a1d23',
      },
      fontFamily: {
        'roboto': ['Roboto',],
      },

      screens: {
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
        'sm': { 'max': '640px' },
        'md': { 'max': '768px' },
        'lg': { 'max': '1024px' },
        'xl': { 'max': '1280px' },
        '2xl': { 'max': '1536px' }
      },
    },
  },
  plugins: [],
}
export default config
