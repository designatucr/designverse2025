/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: "true",
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sora: ["var(--font-sora)"],
        work: ["var(--font-work-sans)"],
      },
      colors: {
        designverse: {
          primary: "#07374B",
          gradients: {
            landing: {
              start: "#61C0F0",
              via: "#F4B68C",
              end: "#FFB9BA",
            },
          },
        },
        hackathon: {
          "blue-100": "#38A3A5",
          "blue-200": "#22577A",
          "green-100": "#E7F7E9",
          "green-200": "#80ED99",
          "green-300": "#57CC99",
          "green-400": "#3CB97A",
          "yellow-100": "#FFCF55",
          "gray-100": "#E7E7E7",
          "gray-200": "#9ea4af",
          "gray-300": "#525252",
          page: "#F5F5F5",
          tags: {
            "red-bg": "#E26E70",
            "red-text": "#FFFFFF",
            "yellow-bg": "#FFC848",
            "yellow-text": "#FFFFFF",
            "green-bg": "#6C9B5B",
            "green-text": "#FFFFFF",
            "gray-bg": "#898989",
            "gray-text": "#FFFFFF",
            "purple-bg": "#936DA0",
            "purple-text": "#FFFFFF",
            "grayblue-bg": "#697D99",
            "grayblue-text": "#FFFFFF",
            "teal-bg": "#4E7982",
            "teal-text": "#FFFFFF",
            "pink-bg": "#EBAFDD",
            "pink-text": "#FFFFFF",
            white: "#fff",
          },
        },
        sidebar: {
          DEFAULT: "#07374B",
          foreground: "#FFFFFF",
          primary: "#07374B",
          "primary-foreground": "#FFFFFF",
          accent: "#FFCF55",
          "accent-foreground": "#22577A",
          border: "#E7E7E7",
          ring: "#FFCF55",
          "primary-foreground": "#F5F5F5",
          "accent-foreground": "#22577A",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "collapsible-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-collapsible-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "collapsible-up": {
          from: {
            height: "var(--radix-collapsible-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "caret-blink": {
          "0%,70%,100%": {
            opacity: "1",
          },
          "20%,50%": {
            opacity: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-up": "collapsible-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
