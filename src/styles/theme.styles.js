const spacing = {};

for (let i = 0; i <= 30; i += 1) {
  spacing[i] = `${i * 8}px`;
}

const theme = {
  container: {
    maxWidth: '960px'
  },
  palette: {
    primary: '#000',
    secondary: '#fff',
    danger: '#8b0000',
    themeColor1: '#ffb00d4d',
    themeColor2: '#f8f7f7',
    themeColor3: '#fd9f09',
    themeColor4: '#a8a8a8',
    themeColor5: '#4c4c4c'
  },
  gradients: {
    main: 'linear-gradient(90deg, rgba(245,240,240,1) 0%, rgba(255,255,255,1) 50%, rgba(237,232,232,1) 100%)'
  },
  shadows: {
    main: '0px 6px 5px 0px rgba(0,0,0,0.03)'
  },
  typography: {
    h1: '2rem',
    h2: '1.75rem',
    h3: '1.375rem',
    h4: '1.25rem',
    h5: '1.125rem',
    h6: '1rem',
    p: '1rem',
    body1: '1rem',
    body2: '0.75rem'
  },
  breakpoints: {
    xs: '360px',
    sm: '600px',
    md: '960px',
    lg: '1441px',
    xl: '1920px'
  },
  spacing: (size) => spacing[size]
};

export default theme;
