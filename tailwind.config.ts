import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        transparentGray: {
          500: '#95959559',
          200: '#80808033',
          50: '#8080800d'
        },
        primary: {
          600: '#A9EAC4',
        },
        secondary: {
          600: '#1B2720',
        },
        tertiary: {
          600: '#FF3D40',
        },
        disabled: {

        },
        enabled: {

        },
        warning: {

        },
        success: {

        },
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
