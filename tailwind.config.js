/** @type {import('tailwindcss').Config} */
const manrope = ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"];

module.exports = {
  blocklist: ["overline"],
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: { '2xl': '1400px' }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
        // AB Traders palette
        'on-tertiary-fixed': '#2a1700',
        'light-bg': '#F7F9F7',
        'primary-container': '#166534',
        'tertiary': '#5d3900',
        'on-secondary-fixed-variant': '#005321',
        'surface-container-highest': '#dce2f7',
        'inverse-primary': '#8bd79b',
        'surface-tint': '#1f6c3a',
        'inverse-surface': '#293040',
        'error-container': '#ffdad6',
        'secondary-container': '#6bff8f',
        'surface-bright': '#f9f9ff',
        'on-secondary-fixed': '#002109',
        'tertiary-container': '#7d4e00',
        'error': '#ba1a1a',
        'deep-green': '#166534',
        'on-primary-fixed-variant': '#005226',
        'primary': '#004c22',
        'tertiary-fixed-dim': '#ffb95f',
        'secondary-fixed-dim': '#4ae176',
        'primary-fixed': '#a6f4b5',
        'on-error': '#ffffff',
        'surface-container-high': '#e1e8fd',
        'primary-fixed-dim': '#8bd79b',
        'charcoal': '#111827',
        'surface-dim': '#d3daef',
        'surface-container': '#e9edff',
        'on-background': '#141b2b',
        'surface': '#f9f9ff',
        'tertiary-fixed': '#ffddb8',
        'surface-variant': '#dce2f7',
        'on-primary-fixed': '#00210b',
        'on-surface': '#141b2b',
        'warm-amber': '#F59E0B',
        'surface-container-lowest': '#ffffff',
        'on-error-container': '#93000a',
        'background': '#f9f9ff',
        'on-secondary-container': '#007432',
        'inverse-on-surface': '#edf0ff',
        'outline': '#707a6f',
        'on-tertiary-fixed-variant': '#653e00',
        'surface-container-low': '#f1f3ff',
        'on-tertiary': '#ffffff',
        'on-primary': '#ffffff',
        'secondary-fixed': '#6bff8f',
        'on-surface-variant': '#404940',
        'secondary': '#006e2f',
        'on-tertiary-container': '#ffc47d',
        'outline-variant': '#bfc9bd',
        'emerald': '#22C55E',
        'on-primary-container': '#93e0a2',
        'on-secondary': '#ffffff',
        'primary-foreground': '#ffffff'
      },
      spacing: {
        'space-xs': '4px',
        'space-sm': '8px',
        'space-md': '16px',
        'space-lg': '24px',
        'space-xl': '32px',
        'space-2xl': '48px',
        'gutter': '24px',
        'margin': '24px'
      },
      fontFamily: {
        headline: manrope,
        body: manrope,
        'body-lg': manrope,
        'body-md': manrope,
        'body-sm': manrope,
        'headline-lg': manrope,
        'headline-md': manrope,
        'headline-sm': manrope,
        'label-lg': manrope,
        'label-md': manrope,
        'label-sm': manrope,
        sans: manrope
      },
      fontSize: {
        'headline-lg': ['40px', { lineHeight: '48px', fontWeight: '700' }],
        'headline-lg-mobile': ['28px', { lineHeight: '36px', fontWeight: '700' }],
        'headline-md': ['32px', { lineHeight: '40px', fontWeight: '600' }],
        'headline-md-mobile': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'headline-sm': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'label-lg': ['16px', { lineHeight: '24px', fontWeight: '500' }],
        'label-md': ['14px', { lineHeight: '20px', fontWeight: '500' }],
        'label-sm': ['12px', { lineHeight: '16px', fontWeight: '500' }]
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};
