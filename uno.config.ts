import { defineConfig, presetTypography, presetUno, presetAttributify } from 'unocss'

export default defineConfig({
  presets: [presetTypography(), presetUno(), presetAttributify()],
  theme: {
    fontFamily: {
      sans: 'Satoshi, sans-serif',
    },
    colors: {
      'default-text': '#fff',
    },
  },
  rules: [
    [
      'Satoshi',
      {
        fontFamily: 'Satoshi, sans-serif',
      },
    ],
  ],
  preflights: [
    {
      getCSS: () => `
        @font-face {
          font-family: 'Satoshi';
          src: url('inertia/assets/fonts/Satoshi-Regular.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: 'Satoshi';
          src: url('inertia/assets/fonts/Satoshi-Bold.woff2') format('woff2');
          font-weight: bold;
          font-style: normal;
        }
        h1 {
          font-size: 2.7rem;
        }
      `,
    },
  ],
})
