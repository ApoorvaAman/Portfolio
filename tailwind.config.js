module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      body: 'var(--color-body)',
      cta: 'var(--color-cta)',
      background: 'var(--color-bg)',
      card: 'var(--color-sec-shade)',
    },
    fontFamily: {
      sans: ['Dosis', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
    },
    extend: {
      zIndex: {
        '-1': '-1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
