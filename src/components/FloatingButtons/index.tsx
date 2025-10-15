// src/components/FloatingButtons/index.tsx
import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import * as S from './styles';

/**
 * FloatingButtons Component
 * Fixed floating buttons for WhatsApp and Instagram on the bottom right
 */
const FloatingButtons: React.FC = () => {
  return (
    <S.FloatingContainer>
      <S.FloatingButton
        href="https://wa.me/5571981511121"
        target="_blank"
        rel="noopener noreferrer"
        $color="whatsapp"
        aria-label="Fale conosco no WhatsApp"
      >
        <FaWhatsapp />
      </S.FloatingButton>

      <S.FloatingButton
        href="https://www.instagram.com/avioncomercial"
        target="_blank"
        rel="noopener noreferrer"
        $color="instagram"
        aria-label="Siga-nos no Instagram"
      >
        <FaInstagram />
      </S.FloatingButton>
    </S.FloatingContainer>
  );
};

export default FloatingButtons;
