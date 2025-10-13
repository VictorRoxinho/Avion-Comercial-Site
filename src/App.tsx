import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';

// Pages
import Home from './pages/Home/index';
import Products from './pages/Products/index';
import About from './pages/About/index';
import ProductDetail from './pages/ProductDetail/index';

// Components
import Header from './components/Header';
import Footer from './components/Footer/index';
import ScrollToTop from './components/ScrollToTop/index';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/produtos/:id" element={<ProductDetail />} />
          <Route path="/sobre" element={<About />} />
          <Route path='/contato' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;