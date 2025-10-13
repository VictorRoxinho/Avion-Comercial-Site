// src/components/Header/index.tsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  LogoImage,
  LogoText,
  Nav,
  NavLink,
  WhatsAppButton,
  MenuToggle
} from './styles';


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <HeaderContainer $isScrolled={isScrolled}>
      <HeaderContent>
        <Logo to="/">
          <LogoImage src="/Logo-3-transp.png" alt="Avion Comercial Logo" />
          <LogoText>Avion Comercial</LogoText>
        </Logo>

        <Nav $isOpen={isMenuOpen}>
          <NavLink to="/" $active={location.pathname === '/'}>
            Home
          </NavLink>
          <NavLink to="/produtos" $active={location.pathname.includes('/produtos')}>
            Produtos
          </NavLink>
          <NavLink to="/sobre" $active={location.pathname === '/sobre'}>
            Sobre
          </NavLink>
          <NavLink to="/contato" $active={location.pathname === '/contato'}>
            Contato
          </NavLink>
          <WhatsAppButton href="https://wa.me/5571981511121" target="_blank">
            <FaWhatsapp /> WhatsApp
          </WhatsAppButton>
        </Nav>

        <MenuToggle onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MenuToggle>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;