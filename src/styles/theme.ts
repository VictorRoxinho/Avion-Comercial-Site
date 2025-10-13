export const theme = {
  colors: {
    primary: '#053159',        // Azul da logo
    primaryDark: '#03243d',    // Azul mais escuro para hover
    secondary: '#f04c37',      // Laranja da logo
    secondaryDark: '#d63d28',  // Laranja mais escuro para hover
    background: '#F8F9FA',
    white: '#FFFFFF',
    text: '#2D3436',
    textLight: '#636E72',
    border: '#DFE6E9',
    shadow: 'rgba(5, 49, 89, 0.1)'  // Sombra baseada no azul
  },
  fonts: {
    primary: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
    secondary: "'Poppins', 'Inter', sans-serif"
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1200px'
  },
  transitions: {
    default: 'all 0.3s ease'
  }
};

export type Theme = typeof theme;