import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#0A0A0F',
        charcoal: '#12121E',
        'electric-violet': '#7B2FFF',
        'cyan-plasma': '#00F0FF',
        magenta: '#FF2D8A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-violet-cyan': 'linear-gradient(135deg, #7B2FFF 0%, #00F0FF 100%)',
      },
      boxShadow: {
        'glow-violet': '0 0 20px rgba(123, 47, 255, 0.3)',
        'glow-cyan': '0 0 20px rgba(0, 240, 255, 0.3)',
      },
    },
  },
  plugins: [],
} satisfies Config
