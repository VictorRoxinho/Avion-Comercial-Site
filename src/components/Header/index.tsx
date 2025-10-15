// src/components/Header/index.tsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import * as S from './styles';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Mensagens do carrossel
  const messages = [
    '🎉 Promoção Especial: Frete Grátis para compras acima de R$ 500,00',
    '💳 Parcelamento em até 3x sem juros no cartão',
    '🚚 Entrega Rápida em Todo o Estado',
    '✨ Produtos de Qualidade das Melhores Marcas',
  ];

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
    <>
      <S.TopBar>
        <S.TopBarContent>
          <S.MessagesCarousel>
            <S.MessagesTrack>
              {[...messages, ...messages].map((message, index) => (
                <S.Message key={index}>{message}</S.Message>
              ))}
            </S.MessagesTrack>
          </S.MessagesCarousel>
          <S.TopBarWhatsApp href="https://wa.me/5571981511121" target="_blank">
            <FaWhatsapp />
            <span>(71) 98151-1121</span>
          </S.TopBarWhatsApp>
        </S.TopBarContent>
      </S.TopBar>

      <S.HeaderContainer $isScrolled={isScrolled}>
        <S.HeaderContent>
          <S.Logo to="/">
            <S.LogoImage
              src="/Logo-3-only2.png"
              alt="Avion Comercial Logo"
              style={{ height: '100px' }}
            />
          </S.Logo>

          <S.Nav $isOpen={isMenuOpen}>
            <S.NavLink to="/" $active={location.pathname === '/'}>
              Home
            </S.NavLink>
            <S.NavLink
              to="/produtos"
              $active={location.pathname.includes('/produtos')}
            >
              Produtos
            </S.NavLink>
            <S.NavLink to="/sobre" $active={location.pathname === '/sobre'}>
              Sobre
            </S.NavLink>
            <S.NavLink to="/contato" $active={location.pathname === '/contato'}>
              Contato
            </S.NavLink>
            <S.WhatsAppButton
              href="https://wa.me/5571981511121"
              target="_blank"
            >
              <FaWhatsapp /> WhatsApp
            </S.WhatsAppButton>
          </S.Nav>

          <S.MenuToggle onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </S.MenuToggle>
        </S.HeaderContent>
      </S.HeaderContainer>
    </>
  );
};

export default Header;
