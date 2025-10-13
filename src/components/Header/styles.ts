// src/components/Header/styles.ts
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface HeaderContainerProps {
  $isScrolled: boolean;
}

interface NavProps {
  $isOpen: boolean;
}

interface NavLinkProps {
  $active: boolean;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ $isScrolled, theme }) =>
    $isScrolled ? theme.colors.white : 'rgba(255, 255, 255, 0.98)'};
  box-shadow: ${({ $isScrolled }) =>
    $isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  z-index: 1000;
  transition: ${({ theme }) => theme.transitions.default};
`;

export const HeaderContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1rem;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    opacity: 0.8;
  }
`;

export const LogoImage = styled.img`
  height: 45px;
  width: auto;
  object-fit: contain;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 35px;
  }
`;

export const LogoText = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

export const Nav = styled.nav<NavProps>`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.white};
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '-100%')});
    transition: transform 0.3s ease;
    gap: 1.5rem;
  }
`;

export const NavLink = styled(Link)<NavLinkProps>`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.text};
  border-bottom: 2px solid
    ${({ $active, theme }) => ($active ? theme.colors.primary : 'transparent')};
  padding-bottom: 0.25rem;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    text-align: center;
    padding: 0.5rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export const WhatsAppButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 3px rgba(240, 76, 55, 0.12), 0 1px 2px rgba(240, 76, 55, 0.24);
  position: relative;
  overflow: hidden;

  /* Efeito de brilho ao passar o mouse */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s;
  }

  svg {
    font-size: 1.2rem;
    transition: transform 0.3s ease;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.secondaryDark};
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(240, 76, 55, 0.15), 0 2px 4px rgba(240, 76, 55, 0.12);

    &::before {
      left: 100%;
    }

    svg {
      transform: scale(1.1);
    }
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 3px rgba(240, 76, 55, 0.12);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
`;

export const MenuToggle = styled.button`
  display: none;
  background: ${({ theme }) => theme.colors.background};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 0.5rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.primary};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;