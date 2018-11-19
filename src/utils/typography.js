import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: 'Lora'
    },
    {
      name: 'Lato'
    },
  ],
  headerFontFamily: [
    'Lora',
    'serif',
  ],
  bodyFontFamily: ['Lato', 'sans-serif'],
})

export default typography