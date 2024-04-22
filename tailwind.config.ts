
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        "homeDBG":"url('./assets/home/background-home-desktop.jpg')",
        "homeTBG":"url('./assets/home/background-home-tablet.jpg')",
        "homeMBG":"url('./assets/home/background-home-mobile.jpg')",
        "DestinationBG-Desktop":"url('./assets/destination/background-destination-desktop.jpg')",
        "Crew-Desktop":"url('./assets/crew/background-crew-desktop.jpg')",
        "Technology-Desktop":"url('./assets/technology/background-technology-desktop.jpg')",
        

      },
      colors:{
        "darkbg":"#0B0D17",
        "title":"#D0D6F9",
        "heading":"#FFFFFF",
        "textdark":"#979797",

      },
      boxShadow: {
        'Exploredasktop': '0px 0px 0px 88px rgba(151, 151, 151, 0.2)',
        'Exploretablet': '0px 0px 0px 66px rgba(151, 151, 151, 0.2)',
        'Exploremobile': '0px 0px 0px 44px rgba(151, 151, 151, 0.2)',
      },
      fontSize:{
        '5xl': '150px ',
        '4xl': '100px',
        '3xl': '56px',
        '2xl': '32px',
        'xl': '28px',
        'sub1':'28px',
        'sub2': '14px',
        'body': '18px',
        'Navtext': '16px',
      },
      fontFamily: {
        'Bellefair': ["bellefair"],
        'BarlowCondensed': ["Barlow Condensed", "sans-serif"],
        'Barlow': ['Barlow'],
       },

    },
  },
  plugins: [],
};
export default config;
