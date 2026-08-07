/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#FAFBFC',
          card: '#FFFFFF',
          hero: '#0F172A',
        },
        text: {
          primary: '#1E293B',
          secondary: '#64748B',
          onDark: '#F1F5F9',
        },
        accent: {
          DEFAULT: '#3B82F6',
          hover: '#2563EB',
        },
        border: {
          DEFAULT: '#E2E8F0',
        },
        badge: {
          bg: '#EFF6FF',
          text: '#1D4ED8',
        },
        muted: {
          bg: '#F8FAFC',
          text: '#94A3B8',
        },
        subject: {
          physics: '#8B5CF6',
          chemistry: '#EF4444',
          mathematics: '#3B82F6',
          biology: '#22C55E',
          'social-science': '#F59E0B',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '1200px',
      },
      borderRadius: {
        card: '12px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 24px 48px -12px rgba(15, 23, 42, 0.18), 0 8px 16px -8px rgba(15, 23, 42, 0.08)',
        glow: '0 0 0 1px rgba(59, 130, 246, 0.15), 0 8px 32px -8px rgba(59, 130, 246, 0.35)',
      },
      transitionTimingFunction: {
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      backgroundImage: {
        'grid-slate': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M40 0H0v40' fill='none' stroke='%23E2E8F0' stroke-width='1' opacity='0.6'/%3E%3C/svg%3E\")",
        'grid-dark': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M40 0H0v40' fill='none' stroke='%23ffffff' stroke-width='1' opacity='0.06'/%3E%3C/svg%3E\")",
        'dots-dark': "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-20px) translateX(10px)' },
        },
        'float-slower': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(15px) translateX(-15px)' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'float-slow': 'float-slow 12s ease-in-out infinite',
        'float-slower': 'float-slower 16s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
