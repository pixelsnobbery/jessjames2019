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
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    // a: {
    //   color: '#f92300',
    //   textDecoration: 'none',
    // },
    // 'a:hover,a:active': {
    //   textDecoration: 'underline',
    // },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
    'blockquote cite': {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight,
    },
    'blockquote cite:before': {
      content: '"— "',
    },
    'h1,h2,h3,h4,h5,h6': {
      marginTop: rhythm(2),
    },
    // h1: {
    //   ...scale(6 / 5),
    //   letterSpacing: '-2px',
    // },
    h2: {
      ...scale(1.2),
    },
    h6: {
      fontStyle: 'italic',
    },
  }),
})

export default typography