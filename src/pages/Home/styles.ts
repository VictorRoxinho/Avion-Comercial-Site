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
  margin-top: 70px;
`;

export const HeroSection = styled.section`
  position: relative;
  height: 600px;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 500px;
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
  ${({ $direction }) => ($direction === 'left' ? 'left: 2rem;' : 'right: 2rem;')}
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
    ${({ $direction }) => ($direction === 'left' ? 'left: 1rem;' : 'right: 1rem;')}
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
  background: linear-gradient(135deg, rgba(0, 102, 204, 0.9) 0%, rgba(0, 184, 148, 0.85) 100%);
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
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;

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

export const PrimaryButton = styled.button<PrimaryButtonProps>`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ large }) => (large ? '1.2rem 3rem' : '1rem 2.5rem')};
  border-radius: 50px;
  font-weight: 600;
  font-size: ${({ large }) => (large ? '1.1rem' : '1rem')};
  transition: ${({ theme }) => theme.transitions.default};
  box-shadow: 0 4px 15px rgba(0, 184, 148, 0.3);

  &:hover {
    background: #00966d;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 184, 148, 0.4);
  }
`;

export const SecondaryButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 2.5rem;
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
  }
`;

export const TerciaryButton = styled.button`

`

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

export const CategoriesSection = styled(Section)`
  background: ${({ theme }) => theme.colors.background};
`;

export const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

export const CategoryCard = styled.div<CategoryCardProps>`
  background: ${({ theme }) => theme.colors.white};
  padding: 2.5rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 10px ${({ theme }) => theme.colors.shadow};
  transition: ${({ theme }) => theme.transitions.default};
  border-top: 4px solid ${({ $color }) => $color};

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

export const CategoryIcon = styled.div`
  font-size: 3.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
`;

export const CategoryTitle = styled.h3`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

export const CategoryDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

export const CategoryButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.75rem 1.5rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  font-weight: 600;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
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
`;

export const BrandsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

export const BrandCard = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: 2rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px ${({ theme }) => theme.colors.shadow};
  }
`;

export const BrandLogo = styled.img`
  max-width: 100%;
  height: auto;
  filter: grayscale(100%);
  opacity: 0.7;
  transition: ${({ theme }) => theme.transitions.default};

  ${BrandCard}:hover & {
    filter: grayscale(0%);
    opacity: 1;
  }
`;

export const CTASection = styled.section`
  background: linear-gradient(135deg, #0066CC 0%, #00B894 100%);
  padding: 5rem 2rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const CTAContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
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