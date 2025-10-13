// src/components/ProductCard/styles.tsx
import styled from 'styled-components';

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px ${({ theme }) => theme.colors.shadow};
  transition: ${({ theme }) => theme.transitions.default};
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: ${({ theme }) => theme.transitions.default};

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

export const CategoryBadge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
`;

export const CardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

export const ProductName = styled.h3`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
`;

export const ProductDescription = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.5;
  flex: 1;
`;

export const QuoteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.85rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background: #00966d;
    transform: translateY(-2px);
  }

  svg {
    font-size: 1.1rem;
  }
`;