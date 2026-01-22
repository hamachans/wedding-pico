import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
    './pages/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        olive: '#5C6B4E',
        cream: '#FAF8F5',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Noto Serif JP', 'serif'],
        serif: ['Noto Serif JP', 'serif'],
        sans: ['Noto Sans JP', 'sans-serif'],
      },
      animation: {
        'bounce': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
