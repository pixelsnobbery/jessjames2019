import Typography from "typography"


const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: 'Lora',
      styles: ['400', '400i', '700', '700i'],
    },
    {
      name: 'Lato',
      styles: ['400', '400i', '700', '700i'],
    },
  ],
  headerFontFamily: [
    'Lora',
    'serif',
  ],
  bodyFontFamily: ['Lato', 'sans-serif'],
})

export default typography