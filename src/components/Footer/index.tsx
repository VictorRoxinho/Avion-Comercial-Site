// src/components/Footer/index.tsx
import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterTitle,
  FooterText,
  FooterLinks,
  FooterLink,
  SocialLinks,
  SocialLink,
  ContactInfo,
  ContactItem,
  FooterBottom,
  Copyright,
} from './styles';

/**
 * Footer Component
 * Site footer with contact info, quick links and social media
 */
const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Avion Comercial</FooterTitle>
          <FooterText>
            Sua parceira em soluções para limpeza e higiene de condomínios e
            empresas. Qualidade e preço justo em produtos no atacado.
          </FooterText>
          <SocialLinks>
            <SocialLink href="#" aria-label="Facebook">
              <FaFacebook />
            </SocialLink>
            <SocialLink href="#" aria-label="Instagram">
              <FaInstagram />
            </SocialLink>
            <SocialLink href="#" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialLink>
            <SocialLink
              href="https://wa.me/5511999999999"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </SocialLink>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Links Rápidos</FooterTitle>
          <FooterLinks>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/produtos">Produtos</FooterLink>
            <FooterLink to="/sobre">Sobre Nós</FooterLink>
            <FooterLink to="/contato">Contato</FooterLink>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contato</FooterTitle>
          <ContactInfo>
            <ContactItem>
              <FaPhone />
              <span>(71) 98151-1121</span>
            </ContactItem>
            <ContactItem>
              <FaEnvelope />
              <span>contato@avioncomercial.com.br</span>
            </ContactItem>
            <ContactItem>
              <FaMapMarkerAlt />
              <span>Rua Padre Daniel Lisboa, 123 - Salvador, BA</span>
            </ContactItem>
          </ContactInfo>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Horário de Atendimento</FooterTitle>
          <FooterText>
            Segunda a Sexta: 8h às 18h
            <br />
            Sábado: 8h às 12h
            <br />
            Domingo: Fechado
          </FooterText>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <Copyright>
          © {new Date().getFullYear()} Avion Comercial. Todos os direitos
          reservados.
        </Copyright>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
