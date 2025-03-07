module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xss: '320px',
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      red: '#e50914',
      white: '#fff',
      black: '#000',
      golden: '#f0ad4e',
      gray: '#3d3c3c',
      neonRed:"#e50914",
      darkGray: '#1e1e1e',
      darkGray2: '#141414',
      lightGray: '#1f1f1f',
      blue: '#0071eb',
      sky:"#56bcf9"
    },
    extend: {
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '50': '50px',
        '150': '150px',
        '100': '100px',
        '200': '200px',
        '300': '300px',
        '400': '400px',
        '500': '500px',
        '600': '600px',
        '700': '700px',
        'media': '500px',
      },
      height: {
        '1/7': '14.2857143%',
        '50': '50px',
        '150': '150px',
        '100': '100px',
        '200': '200px',
        '300': '300px',
        '400': '400px',
        '500': '500px',
        '600': '600px',
        '700': '700px',
        '768': '768px',
        '800': '800px',
      },
    },
    safelist: ['animate-[fade-in_1s_ease-in-out]', 'animate-[ ]']
  },
  variants: {},
  plugins: [],
};
