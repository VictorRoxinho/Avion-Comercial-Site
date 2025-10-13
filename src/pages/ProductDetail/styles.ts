// src/pages/ProductDetail/styles.tsx
import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 70px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding: 3rem 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2rem 1rem;
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 2rem;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    gap: 0.75rem;
  }
`;

export const ProductDetailGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MainImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 20px ${({ theme }) => theme.colors.shadow};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 300px;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CategoryBadge = styled.span`
  display: inline-block;
  width: fit-content;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
`;

export const ProductTitle = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

export const ProductDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const FeaturesSection = styled.div`
  margin-top: 1rem;
`;

export const FeaturesTitle = styled.h3`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

export const FeaturesList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};

  svg {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.2rem;
    flex-shrink: 0;
  }
`;

export const QuoteSection = styled.section`
  background: ${({ theme }) => theme.colors.white};
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px ${({ theme }) => theme.colors.shadow};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2rem 1.5rem;
  }
`;

export const QuoteTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
  text-align: center;
`;

export const QuoteSubtitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textLight};
  text-align: center;
  margin-bottom: 2.5rem;
`;

export const QuoteForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

export const Input = styled.input`
  padding: 0.875rem 1rem;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  transition: ${({ theme }) => theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const TextArea = styled.textarea`
  padding: 0.875rem 1rem;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  transition: ${({ theme }) => theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SubmitButton = styled.button`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: ${({ theme }) => theme.transitions.default};
  margin-top: 1rem;

  &:hover {
    background: #00966d;
    transform: translateY(-2px);
  }
`;

export const SuccessMessage = styled.div`
  text-align: center;
  padding: 3rem;
  color: ${({ theme }) => theme.colors.secondary};

  svg {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

export const ErrorMessage = styled.div`
  text-align: center;
  padding: 4rem 2rem;

  h2 {
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 2rem;
  }
`;
``