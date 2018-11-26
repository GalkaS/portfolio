// import Typography from "typography"
// import bootstrapTheme from "typography-theme-bootstrap"
// import lawtonTheme from "typography-theme-lawton"
// import wordpress2015 from "typography-theme-wordpress-2015"

// const typography = new Typography(wordpress2015)
// const typography = new Typography(lawtonTheme)
// const typography = new Typography({ baseFontSize: "18px" })
// const typography = new Typography(bootstrapTheme)


// export default typography


import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
  	"Noto Serif",
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: [
    "Noto Serif",
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
})

export default typography


  