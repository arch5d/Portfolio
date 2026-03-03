import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FAFAFA',
        text: '#1F1F1F',
        accent: '#0EA5A4',
        muted: '#6B7280'
      },
      boxShadow: {
        card: '0 8px 24px rgba(31, 31, 31, 0.06)',
        glow: '0 0 12px rgba(14,165,164,0.3)'
      },
      borderRadius: {
        mdx: '14px'
      }
    }
  },
  plugins: []
};

export default config;
