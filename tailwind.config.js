module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  // mode: "jit",
  // purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    minWidth: {
      0: "0",
      "1/4": "5rem",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
    fontSize: {
      bs: "0.625rem",
      xs: "0.75rem",
      sm: "0.875rem",
      mv: "1.125rem",
      av: "1.875rem",
      bv: "2rem",
      fv: "2.25rem",
    },
    screens: {
      xs: { max: "639px" },
      sm: { max: "900px" },
      md: { min: "768px", max: "1049px" },
      lg: { min: "1150px" },
      xl: { min: "1280px" },
    },
    colors: {
      whitetext: "#ffffff",
      maincontent: "#f7fafc",
      logintext: "#27272e",
      tbltext: "#8492A6",
      formtext: "#425466",
      facebook: "#3b5999",
      ligtext: "#718096",
      footerclicktext: "#4c6fff",
      balancetext: "#16192c",
      success: "#66CB9F",
      loadingicon: "#10889d",
      bordercolor: "#edf2f7",
      commontext: "#ffffff",
      indijao: "#4C6FFF",
      danger: "#f16063",
      common: "#E4ECF7",
      lightsuccess: "#DEFFEE",
      lightdanger: "#FFE6E4 ",
      lightform: "#E1E8FF",
    },
    boxShadow: {
      si: "0px 0px 1px rgba(12, 26, 75, 0.2), 0px 1px 3px rgba(50, 50, 71, 0.1)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
    },
    extend: {
      margin: {
        sb: "1.375rem",
        av: "1.875rem",
      },
      height: {
        sb: 100,
        "h-11": "2.875rem",
        "h-30": "7.5rem",
        "h-33": "8.5rem",
      },
      width: {
        "w-30": "7.5rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
