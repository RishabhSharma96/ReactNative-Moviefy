module.exports = {
  content: [
    './App.tsx',
    './components/**/*.{js,ts,jsx,tsx}',
    './screens/**/*.{js,ts,jsx,tsx}',    
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins-Regular', 'sans-serif'], 
      },
    },
  },
  plugins: [],
  presets: [require("nativewind/preset")],
}
