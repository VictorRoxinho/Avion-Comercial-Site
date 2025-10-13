// src/pages/Home/index.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBox, FaRecycle, FaHands, FaCheckCircle, FaTruck, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {
  Container,
  HeroSection,
  HeroOverlay,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroButtons,
  CarouselContainer,
  CarouselSlide,
  CarouselDots,
  CarouselDot,
  CarouselArrow,
  PrimaryButton,
  SecondaryButton,
  TerciaryButton,
  Section,
  SectionContent,
  SectionTitle,
  SectionSubtitle,
  AboutGrid,
  AboutText,
  AboutImage,
  Paragraph,
  CategoriesSection,
  CategoriesGrid,
  CategoryCard,
  CategoryIcon,
  CategoryTitle,
  CategoryDescription,
  CategoryButton,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
  BrandsSection,
  BrandsGrid,
  BrandCard,
  BrandLogo,
  CTASection,
  CTAContent,
  CTATitle,
  CTAText
} from './styles';
import { brands } from '../../data/brands';

/**
 * Home Page
 * Main landing page with hero, about, categories, and brands sections
 */
const Home: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Soluções Completas em Produtos para Limpeza',
      subtitle: 'Atendemos condomínios e empresas com qualidade e preços competitivos no atacado',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&h=900&fit=crop',
    },
    {
      title: 'Produtos de Qualidade para seu Negócio',
      subtitle: 'Ampla variedade de produtos de limpeza e higiene das melhores marcas',
      image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=1600&h=900&fit=crop',
    },
    {
      title: 'Entrega Rápida e Garantida',
      subtitle: 'Logística eficiente para atender seu condomínio ou empresa com agilidade',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&h=900&fit=crop',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Muda de slide a cada 5 segundos

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const categories = [
    {
      icon: <FaBox />,
      title: 'Produtos de Limpeza',
      description: 'Ampla linha de produtos para limpeza profissional e manutenção de ambientes.',
      color: '#0066CC',
    },
    {
      icon: <FaRecycle />,
      title: 'Descartáveis',
      description: 'Papéis, sacos de lixo e itens descartáveis para seu condomínio ou empresa.',
      color: '#00B894',
    },
    {
      icon: <FaHands />,
      title: 'Higiene e Cuidados',
      description: 'Produtos de higiene pessoal e cuidados para garantir a saúde de todos.',
      color: '#0066CC',
    },
  ];

  const features = [
    {
      icon: <FaTruck />,
      title: 'Entrega Rápida',
      description: 'Logística eficiente para todo o estado',
    },
    {
      icon: <FaCheckCircle />,
      title: '+ 15 Anos de Mercado',
      description: 'Experiência e confiança no atendimento',
    },
    {
      icon: <FaCheckCircle />,
      title: 'Qualidade Garantida',
      description: 'Produtos de marcas renomadas e testadas',
    },
  ];

  return (
    <Container>
      {/* Hero Carousel Section */}
      <HeroSection>
        <CarouselContainer>
          {slides.map((slide, index) => (
            <CarouselSlide
              key={index}
              $active={index === currentSlide}
              $background={slide.image}
            >
              <HeroOverlay />
              <HeroContent>
                <HeroTitle>{slide.title}</HeroTitle>
                <HeroSubtitle>{slide.subtitle}</HeroSubtitle>
                <HeroButtons>
                  <PrimaryButton onClick={() => navigate('/contato')}>
                    Solicite um Orçamento
                  </PrimaryButton>
                  <SecondaryButton onClick={() => navigate('/produtos')}>
                    Ver Produtos
                  </SecondaryButton>
                  <TerciaryButton onClick={() => navigate('/contato')}>
                    Fale Conosco
                  </TerciaryButton>
                </HeroButtons>
              </HeroContent>
            </CarouselSlide>
          ))}

          {/* Navigation Arrows */}
          <CarouselArrow $direction="left" onClick={prevSlide}>
            <FaChevronLeft />
          </CarouselArrow>
          <CarouselArrow $direction="right" onClick={nextSlide}>
            <FaChevronRight />
          </CarouselArrow>

          {/* Dots Navigation */}
          <CarouselDots>
            {slides.map((_, index) => (
              <CarouselDot
                key={index}
                $active={index === currentSlide}
                onClick={() => goToSlide(index)}
              />
            ))}
          </CarouselDots>
        </CarouselContainer>
      </HeroSection>

      {/* About Section */}
      <Section>
        <SectionContent>
          <AboutGrid>
            <AboutText>
              <SectionTitle>Quem Somos</SectionTitle>
              <Paragraph>
                A <strong>Avion Comercial</strong> é uma empresa especializada no fornecimento
                de produtos de limpeza, higiene e descartáveis no atacado para condomínios
                e empresas.
              </Paragraph>
              <Paragraph>
                Com anos de experiência no mercado, oferecemos um catálogo completo com
                as melhores marcas, preços competitivos e um atendimento personalizado
                que entende as necessidades do seu negócio.
              </Paragraph>
              <PrimaryButton onClick={() => navigate('/sobre')}>
                Saiba Mais
              </PrimaryButton>
            </AboutText>
            <AboutImage 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop" 
              alt="Equipe Avion Comercial"
            />
          </AboutGrid>
        </SectionContent>
      </Section>

      {/* Categories Section */}
      <CategoriesSection>
        <SectionContent>
          <SectionTitle center>Nossas Categorias</SectionTitle>
          <SectionSubtitle>
            Produtos selecionados para atender todas as necessidades do seu condomínio ou empresa
          </SectionSubtitle>
          
          <CategoriesGrid>
            {categories.map((category, index) => (
              <CategoryCard key={index} $color={category.color}>
                <CategoryIcon>{category.icon}</CategoryIcon>
                <CategoryTitle>{category.title}</CategoryTitle>
                <CategoryDescription>{category.description}</CategoryDescription>
                <CategoryButton onClick={() => navigate('/produtos')}>
                  Ver Produtos
                </CategoryButton>
              </CategoryCard>
            ))}
          </CategoriesGrid>
        </SectionContent>
      </CategoriesSection>

      {/* Features Section */}
      <Section>
        <SectionContent>
          <SectionTitle center>Por Que Escolher a Avion?</SectionTitle>
          <FeaturesGrid>
            {features.map((feature, index) => (
              <FeatureCard key={index}>
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </SectionContent>
      </Section>

      {/* Brands Section */}
      <BrandsSection>
        <SectionContent>
          <SectionTitle center>Marcas Parceiras</SectionTitle>
          <SectionSubtitle>
            Trabalhamos com as melhores marcas do mercado
          </SectionSubtitle>
          
          <BrandsGrid>
            {brands.map((brand, index) => (
              <BrandCard key={index}>
                <BrandLogo src={brand.logo} alt={brand.name} />
              </BrandCard>
            ))}
          </BrandsGrid>
        </SectionContent>
      </BrandsSection>

      {/* CTA Section */}
      <CTASection>
        <SectionContent>
          <CTAContent>
            <CTATitle>Pronto para fazer seu pedido?</CTATitle>
            <CTAText>
              Entre em contato conosco e receba um orçamento personalizado para seu condomínio ou empresa
            </CTAText>
            <PrimaryButton large onClick={() => navigate('/contato')}>
              Solicitar Orçamento Agora
            </PrimaryButton>
          </CTAContent>
        </SectionContent>
      </CTASection>
    </Container>
  );
};

export default Home;