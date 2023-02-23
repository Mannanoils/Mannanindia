/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["*.html"],
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        Montserrat: ["Montserrat"],
        Garamond: ["EB Garamond"],
      },
      spacing: {
        128: "32rem",
      },
      backgroundImage: {
        home_bg: "url('../src/assets/home_bg.jpg')",
        footer_bg: "url('../src/assets/footer_bg.png')",
        product_bg: "url('../src/assets/product_header.png')",
        manuf_bg: "url('../src/assets/manufacturinghead.png')",
        knowus_bg: "url('../src/assets/coconut.png')",
        knowus_bg2: "url('../src/assets/knowus_bg.png')",
        m1: "url('../src/assets/m1.png')",
        m2: "url('../src/assets/m2.png')",
        m3: "url('../src/assets/m3.png')",
        m4: "url('../src/assets/m4.png')",
        m5: "url('../src/assets/m5.png')",
        m6: "url('../src/assets/m6.png')",
        m7: "url('../src/assets/m7.png')",
      },
      lineHeight: {
        12: "3.5rem",
      },
      colors: {
        "Green-mannan": "#076A11;",
        "grey-b": "#CAC3C3",
        slick_bg: "#F39F63",
        product_col: "#D9D9D9",
        green_lite: "#6ABB72",
      },
      width: {
        98: "27rem",
        "2/7": "91%",
      },
    },
  },
  plugins: [],
};
