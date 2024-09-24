module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4395F6',  // 밝은 파란색
          DEFAULT: '#0875F5', // 기본 파란색
        },
        gray: {
          light: '#D9D9D9',  // 회색
        },
      },
    },
  },
  plugins: [],
};