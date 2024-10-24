/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#939393",
          "200": "#1a1a1a",
          "300": "rgba(255, 255, 255, 0.74)",
        },
        white: "#fff",
        darkslategray: "#3d3d3d",
        gainsboro: {
          "100": "#e2e2e2",
          "200": "#dbdbdb",
          "300": "#d9d9d9",
        },
        orangered: "#ff4c00",
        black: "#000",
        red: "#fd1c1a",
        dodgerblue: "#458ff3",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "suisse-intl": "'Suisse Int\\'l'",
        trap: "Trap",
        "tt-hoves": "'TT Hoves'",
      },
      borderRadius: {
        "27xl": "46px",
      },
    },
    fontSize: {
      "15xl": "34px",
      "8xl": "27px",
      xl: "20px",
      "5xl": "24px",
      lgi: "19px",
      "41xl": "60px",
      "29xl": "48px",
      "17xl": "36px",
      "20xl": "39px",
      "12xl": "31px",
      "4xl": "23px",
      "175xl": "194px",
      "59xl": "78px",
      "21xl": "40px",
      "13xl": "32px",
      "154xl": "173px",
      "50xl": "69px",
      "24xl": "43px",
      "9xl": "28px",
      "3xl": "22px",
      "19xl": "38px",
      "10xl": "29px",
      "73xl": "92px",
      "27xl": "46px",
      inherit: "inherit",
    },
    screens: {
      mq1825: {
        raw: "screen and (max-width: 1825px)",
      },
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq925: {
        raw: "screen and (max-width: 925px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
