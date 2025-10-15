// src/pages/Home/styles.tsx
import styled from 'styled-components';

interface SectionTitleProps {
  center?: boolean;
}

interface PrimaryButtonProps {
  large?: boolean;
}

interface CategoryCardProps {
  $color: string;
}

interface CarouselSlideProps {
  $active: boolean;
  $background: string;
}

interface CarouselDotProps {
  $active: boolean;
}

interface CarouselArrowProps {
  $direction: 'left' | 'right';
}

export const Container = styled.div`
  margin-top: 110px; /* 40px TopBar + 70px Header */

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 105px; /* 35px TopBar + 70px Header */
  }
`;

export const PromoBanner = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.75rem 2rem;
  text-align: center;
  font-weight: 600;
  font-size: 0.95rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.85rem;
    padding: 0.6rem 1rem;
  }
`;

export const HeroSection = styled.section`
  position: relative;
  height: 400px;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 350px;
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const CarouselSlide = styled.div<CarouselSlideProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  visibility: ${({ $active }) => ($active ? 'visible' : 'hidden')};
  transition: opacity 1s ease-in-out, visibility 1s ease-in-out;
  background-image: url('${({ $background }) => $background}');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CarouselArrow = styled.button<CarouselArrowProps>`
  position: absolute;
  top: 50%;
  ${({ $direction }) =>
    $direction === 'left' ? 'left: 2rem;' : 'right: 2rem;'}
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: ${({ theme }) => theme.colors.white};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  z-index: 10;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-50%) scale(1.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
    ${({ $direction }) =>
      $direction === 'left' ? 'left: 1rem;' : 'right: 1rem;'}
  }
`;

export const CarouselDots = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.75rem;
  z-index: 10;
`;

export const CarouselDot = styled.button<CarouselDotProps>`
  width: ${({ $active }) => ($active ? '40px' : '12px')};
  height: 12px;
  border-radius: 6px;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.white : 'rgba(255, 255, 255, 0.5)'};
  border: none;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme }) => theme.colors.white};
  }
`;

export const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to right,
    rgba(5, 49, 89, 0.95) 0%,
    rgba(5, 49, 89, 0.85) 40%,
    rgba(5, 49, 89, 0.7) 70%,
    rgba(240, 76, 55, 0.4) 100%
  );

  /* Efeito de vinheta nas bordas */
  box-shadow: inset 0 0 200px rgba(0, 0, 0, 0.3);
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  max-width: 900px;
  padding: 2rem;
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.4);

  span {
    color: ${({ theme }) => theme.colors.secondary};
    display: block;
    font-size: 2.8rem;
    margin-top: 0.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.2rem;

    span {
      font-size: 1.8rem;
    }
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.4rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  font-weight: 500;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.1rem;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

export const QuickBenefitsSection = styled.section`
  background: ${({ theme }) => theme.colors.background};
  padding: 2rem 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const QuickBenefitsGrid = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const QuickBenefitCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: transparent;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
  }
`;

export const QuickBenefitIcon = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const QuickBenefitContent = styled.div`
  flex: 1;
  text-align: left;
`;

export const QuickBenefitTitle = styled.h3`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.25rem;
`;

export const QuickBenefitText = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.5;
`;

export const ProductsSection = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.colors.white};
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 2rem auto 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

export const ProductCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.default};
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px ${({ theme }) => theme.colors.shadow};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ProductImage = styled.div`
  width: 100%;
  height: 200px;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProductInfo = styled.div`
  padding: 1.25rem;
`;

export const ProductCategory = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textLight};
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

export const ProductName = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0.5rem 0;
  line-height: 1.3;
`;

export const ProductPrice = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0.75rem 0;
`;

export const ProductButton = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.75rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
  }
`;

export const PrimaryButton = styled.button<PrimaryButtonProps>`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ large }) => (large ? '1.2rem 3rem' : '1rem 2.5rem')};
  border-radius: 8px;
  font-weight: 600;
  font-size: ${({ large }) => (large ? '1.1rem' : '1rem')};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 3px rgba(240, 76, 55, 0.12),
    0 1px 2px rgba(240, 76, 55, 0.24);
  position: relative;
  overflow: hidden;
  cursor: pointer;

  /* Efeito de brilho */
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
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.secondaryDark};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(240, 76, 55, 0.2),
      0 2px 4px rgba(240, 76, 55, 0.15);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 3px rgba(240, 76, 55, 0.12);
  }
`;

export const SecondaryButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.white};
  padding: 1rem 2.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;

  /* Efeito de preenchimento */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: ${({ theme }) => theme.colors.white};
    transition: width 0.4s ease;
    z-index: -1;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);

    &::before {
      width: 100%;
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

export const TerciaryButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.white};
  padding: 1rem 2.5rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary}; // Azul da logo
  }
`;

export const Section = styled.section`
  padding: 5rem 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 3rem 1rem;
  }
`;

export const SectionContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2<SectionTitleProps>`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
  text-align: ${({ center }) => (center ? 'center' : 'left')};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textLight};
  text-align: center;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Paragraph = styled.p`
  font-size: 1.05rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const AboutImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 20px ${({ theme }) => theme.colors.shadow};
`;

export const CategoriesSection = styled.section`
  background: ${({ theme }) => theme.colors.background};
  padding: 4rem 2rem;
`;

export const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1400px;
  margin: 2rem auto 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

interface CategoryCardProps {
  $color: string;
}

export const CategoryCard = styled.div<CategoryCardProps>`
  background: ${({ theme }) => theme.colors.white};
  padding: 3rem 2rem;
  border-radius: 16px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border-top: 4px solid ${({ $color }) => $color};
  position: relative;
  overflow: hidden;

  /* Efeito de fundo ao hover */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      ${({ $color }) => $color}15 0%,
      transparent 100%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 0;
  }

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);

    &::before {
      opacity: 1;
    }
  }

  /* Coloca o conteúdo acima do pseudo-elemento */
  > * {
    position: relative;
    z-index: 1;
  }
`;

export const CategoryIcon = styled.div`
  font-size: 3.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  transition: all 0.4s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary}10 0%,
    ${({ theme }) => theme.colors.primary}05 100%
  );
  border-radius: 20px;

  ${CategoryCard}:hover & {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
  transition: ${({ theme }) => theme.transitions.default};

  ${CategoryCard}:hover & {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CategoryDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.7;
  margin-bottom: 2rem;
  min-height: 80px;
`;

export const CategoryButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: 0.9rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.primary};
    transition: left 0.4s ease;
    z-index: -1;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(5, 49, 89, 0.2);

    &::before {
      left: 0;
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
`;

export const FeatureCard = styled.div`
  text-align: center;
  padding: 2rem;
`;

export const FeatureIcon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1.5rem;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.75rem;
`;

export const FeatureDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
`;

export const BrandsSection = styled(Section)`
  background: ${({ theme }) => theme.colors.white};
  padding: 3rem 0;
  overflow: hidden;
`;

export const BrandsCarousel = styled.div`
  margin-top: 2rem;
  overflow: hidden;
  position: relative;
  width: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100px;
    z-index: 2;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.white},
      transparent
    );
  }

  &::after {
    right: 0;
    background: linear-gradient(
      to left,
      ${({ theme }) => theme.colors.white},
      transparent
    );
  }
`;

export const BrandsTrack = styled.div`
  display: flex;
  gap: 3rem;
  width: fit-content;

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  animation: scroll 30s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

export const BrandsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

export const BrandCard = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: 2rem 3rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 220px;
  height: 130px;
  transition: ${({ theme }) => theme.transitions.default};
  flex-shrink: 0;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px ${({ theme }) => theme.colors.shadow};
  }
`;

export const BrandLogo = styled.img`
  max-width: 180px;
  max-height: 90px;
  width: auto;
  height: auto;
  object-fit: contain;
  filter: grayscale(100%);
  opacity: 0.7;
  transition: ${({ theme }) => theme.transitions.default};

  ${BrandCard}:hover & {
    filter: grayscale(0%);
    opacity: 1;
  }
`;

export const CTASection = styled.section`
  background: ${({ theme }) => theme.colors.primary};
  padding: 5rem 2rem;
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  overflow: hidden;

  /* Padrão sutil de linhas para textura */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 50px,
      rgba(255, 255, 255, 0.02) 50px,
      rgba(255, 255, 255, 0.02) 100px
    );
  }

  /* Detalhe laranja discreto no canto */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 400px;
    height: 400px;
    background: radial-gradient(
      circle at center,
      ${({ theme }) => theme.colors.secondary}15 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

export const CTAContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

export const CTAText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
`;
