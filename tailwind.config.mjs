/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary:   '#0A0F1E', // Deep navy — main background
          secondary: '#111827', // Dark surface
          accent:    '#4F6EF7', // Electric blue — primary CTA
          highlight: '#7B5CF6', // Purple — secondary accent
          gold:      '#F59E0B', // Amber — badges / highlights
          text:      '#F0F4FF', // Near-white body text
          muted:     '#8B9BB4', // Muted text / subheadings
          border:    '#1E293B', // Subtle border
          surface:   '#0D1526', // Card / section surface
        },
      },
      fontFamily: {
        heading: ['"Inter"', 'system-ui', 'sans-serif'],
        body:    ['"Inter"', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #4F6EF7 0%, #7B5CF6 100%)',
        'gradient-dark':  'linear-gradient(180deg, #0A0F1E 0%, #111827 100%)',
        'gradient-card':  'linear-gradient(135deg, #0D1526 0%, #111827 100%)',
      },
      boxShadow: {
        'glow-blue':   '0 0 24px rgba(79,110,247,0.35)',
        'glow-purple': '0 0 24px rgba(123,92,246,0.35)',
        'card':        '0 4px 24px rgba(0,0,0,0.4)',
      },
      animation: {
        'fade-in':    'fadeIn 0.6s ease forwards',
        'slide-up':   'slideUp 0.6s ease forwards',
      },
      keyframes: {
        fadeIn:  { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp: { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
};
