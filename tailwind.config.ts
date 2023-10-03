import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'grey': "#343530",
        'yellow': "#FCD434",
        'gold': "#CA9C28",
        'text-grey': "#64686B"
      },
      animation: {
        'linear-bg': 'textclip 5s linear infinite',
        'fadeIn': 'fadeIn 2s linear 1',
        'bgFadeOut' : 'bgFadeOut 3s linear 1'
      },
      keyframes: {
        textclip : {
            'from': {'background-position' : '0% center'},
             'to': {'background-position' : '200% center'}
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bgFadeOut: {
          '0%': { opacity: '0' },
          '100%': { opacity: '.6' },
        }
      }
    },
  },
  plugins: [],
}
export default config
