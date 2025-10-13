// src/components/Footer/styles.tsx
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.white};
  padding: 4rem 2rem 2rem;
  margin-top: 4rem;
`;

export const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FooterTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const FooterText = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const FooterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    padding-left: 0.5rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.2rem;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-3px);
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;

  svg {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const FooterBottom = styled.div`
  max-width: 1400px;
  margin: 3rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
`;

export const Copyright = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
`;