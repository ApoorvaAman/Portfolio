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
      twitter: '#1da1f2',
      linkedin: '#0077b5',
      github: '#333',
      white: '#fff',
    },
    fontFamily: {
      geo: ['Georama', 'sans-serif'],
      ubuntu: ['Ubuntu', 'sans-serif'],
      sans: ['Source Sans Pro', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
