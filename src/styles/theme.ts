export const theme = {
  colors: {
    primary: '#0066CC',
    primaryDark: '#004999',
    secondary: '#00B894',
    background: '#F8F9FA',
    white: '#FFFFFF',
    text: '#2D3436',
    textLight: '#636E72',
    border: '#DFE6E9',
    shadow: 'rgba(0, 0, 0, 0.1)',
  },
  fonts: {
    primary: "'Inter', sans-serif",
    secondary: "'Poppins', sans-serif",
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1440px',
  },
  transitions: {
    default: 'all 0.3s ease',
  },
};

export type Theme = typeof theme;