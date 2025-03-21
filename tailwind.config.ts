import type { Config } from 'tailwindcss'

export default {
  darkMode: 'selector',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['var(--font-inter)', 'sans-serif'],
        Roboto: ['var(--font-roboto)', 'sans-serif'],
      },
      backgroundImage: {
        gradient:
          'linear-gradient(0deg, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)',
        'gradient-bl':
          'linear-gradient(0deg, rgba(12,10,9,1) 50%, rgba(12,10,9,0) 100%)',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
} satisfies Config
