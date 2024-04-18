import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './layout/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        down: {
          '0%': { transform: 'translateY(0px)', opacity: '1' },
          '5%': { transform: 'translateY(100px)', opacity: '0' },
          '6%': { transform: 'translateY(-100px)', opacity: '0' },
          '11%': { transform: 'translateY(0px)', opacity: '1' },
          '50%': { transform: 'translateY(0px)', opacity: '1' },
        },
      },
      animation: {
        down: 'down 8s cubic-bezier(.48,-0.23,.53,1.24) infinite',
      },
      padding: {
        'x-default': 'clamp(30px, 3vw, 100px)',
        'x-large': 'clamp(60px, 6vw, 200px)',
        'y-default': 'clamp(30px, 3vh, 100px)',
        header: '108px',
      },
      screens: {
        nav: '870px',
      },
      colors: {
        black: '#0D0D0D',
        white: '#ffffff',
        'white-opacity': '#ffffff80',
        'black-opacity': '#0D0D0DA6',
        'grey-light': '#ffffff37',
        grey: '#3c3c3c',
      },
      borderRadius: {
        default: '20px',
      },
      transitionTimingFunction: {
        power2inOut: 'cubic-bezier(.7,0,.3,1)',
      },
    },
  },
  plugins: [],
};
export default config;
