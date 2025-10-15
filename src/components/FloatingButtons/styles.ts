// src/components/FloatingButtons/styles.ts
import styled, { keyframes } from 'styled-components';

interface FloatingButtonProps {
  $color: 'whatsapp' | 'instagram';
}

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
`;

const pulseInstagram = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(225, 48, 108, 0.7);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(225, 48, 108, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(225, 48, 108, 0);
  }
`;

export const FloatingContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 999;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    bottom: 1.5rem;
    right: 1.5rem;
    gap: 0.75rem;
  }
`;

export const FloatingButton = styled.a<FloatingButtonProps>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ $color }) =>
    $color === 'whatsapp'
      ? '#25D366'
      : 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${({ $color }) => ($color === 'whatsapp' ? pulse : pulseInstagram)}
    2s infinite;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);

    svg {
      transform: scale(1.1) rotate(5deg);
    }
  }

  &:active {
    transform: translateY(-2px) scale(1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 55px;
    height: 55px;
    font-size: 1.6rem;
  }
`;
