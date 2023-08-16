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
      },
      fontFamily: {
        'roboto': ['Roboto',],
      },
    },
  },
  plugins: [],
}
export default config
