// src/pages/Home/index.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaBox,
  FaRecycle,
  FaHands,
  FaCheckCircle,
  FaTruck,
  FaChevronLeft,
  FaChevronRight,
  FaCreditCard,
  FaShieldAlt,
} from 'react-icons/fa';
import {
  Container,
  PromoBanner,
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
  QuickBenefitsSection,
  QuickBenefitsGrid,
  QuickBenefitCard,
  QuickBenefitIcon,
  QuickBenefitTitle,
  QuickBenefitText,
  PrimaryButton,
  SecondaryButton,
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
  CTAText,
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
      title: 'Material de Limpeza no Atacado',
      subtitle:
        'Compre mais. Pague menos. Entrega garantida para todo o estado!',
      highlight: 'ATÉ 40% OFF',
      image:
        'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&h=900&fit=crop',
    },
    {
      title: 'Produtos de Qualidade para Empresas',
      subtitle: 'Marcas confiáveis com o melhor custo-benefício do mercado',
      highlight: 'FRETE GRÁTIS*',
      image:
        'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=1600&h=900&fit=crop',
    },
    {
      title: 'Atendimento Especializado',
      subtitle:
        'Equipe dedicada para condomínios e empresas. Orçamento rápido!',
      highlight: 'PARCELE EM ATÉ 3X',
      image:
        'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&h=900&fit=crop',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

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
      description:
        'Soluções completas para limpeza profissional e manutenção de áreas comuns, garantindo eficiência e economia.',
      color: '#0066CC',
    },
    {
      icon: <FaRecycle />,
      title: 'Descartáveis',
      description:
        'Tudo o que seu condomínio precisa: papéis, sacos de lixo, copos e itens descartáveis com ótimo custo-benefício.',
      color: '#00B894',
    },
    {
      icon: <FaHands />,
      title: 'Higiene e Cuidados',
      description:
        'Linha completa de produtos de higiene e cuidados pessoais para manter a saúde e o bem-estar de todos.',
      color: '#0066CC',
    },
  ];

  const features = [
    {
      icon: <FaTruck />,
      title: 'Entrega Rápida e Segura',
      description:
        'Atendemos condomínios e empresas com logística ágil e entregas pontuais em todo o estado.',
    },
    {
      icon: <FaCheckCircle />,
      title: 'Mais de 15 Anos de Confiança',
      description:
        'Tradição e credibilidade que fazem da Avion Comercial uma parceira referência no fornecimento de produtos de limpeza.',
    },
    {
      icon: <FaCheckCircle />,
      title: 'Qualidade Garantida',
      description:
        'Trabalhamos apenas com marcas reconhecidas e produtos testados, garantindo desempenho e segurança.',
    },
  ];

  return (
    <Container>
      {/* Promo Banner */}
      <PromoBanner>
        🎉 PROMOÇÃO ESPECIAL: Frete Grátis para compras acima de R$ 500,00 |
        Parcelamento em até 3x sem juros!
      </PromoBanner>

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
                <HeroTitle>
                  {slide.title}
                  <span>{slide.highlight}</span>
                </HeroTitle>
                <HeroSubtitle>{slide.subtitle}</HeroSubtitle>
                <HeroButtons>
                  <PrimaryButton onClick={() => navigate('/contato')}>
                    Solicite um Orçamento
                  </PrimaryButton>
                  <SecondaryButton onClick={() => navigate('/produtos')}>
                    Ver Produtos
                  </SecondaryButton>
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

      {/* Quick Benefits Section */}
      <QuickBenefitsSection>
        <QuickBenefitsGrid>
          <QuickBenefitCard>
            <QuickBenefitIcon>
              <FaCreditCard />
            </QuickBenefitIcon>
            <QuickBenefitTitle>Pague com Cartões</QuickBenefitTitle>
            <QuickBenefitText>
              Divida suas compras em até 3x sem juros no seu cartão
            </QuickBenefitText>
          </QuickBenefitCard>

          <QuickBenefitCard>
            <QuickBenefitIcon>
              <FaTruck />
            </QuickBenefitIcon>
            <QuickBenefitTitle>Frete Grátis*</QuickBenefitTitle>
            <QuickBenefitText>
              Compre a partir de R$ 500,00 e tenha frete grátis. Entrega em até
              3 dias úteis.
            </QuickBenefitText>
          </QuickBenefitCard>

          <QuickBenefitCard>
            <QuickBenefitIcon>
              <FaShieldAlt />
            </QuickBenefitIcon>
            <QuickBenefitTitle>Qualidade e Segurança</QuickBenefitTitle>
            <QuickBenefitText>
              Loja Segura. Compre com Tranquilidade e Segurança.
            </QuickBenefitText>
          </QuickBenefitCard>
        </QuickBenefitsGrid>
      </QuickBenefitsSection>

      {/* About Section */}
      <Section>
        <SectionContent>
          <AboutGrid>
            <AboutText>
              <SectionTitle>Quem Somos</SectionTitle>
              <Paragraph>
                A <strong>Avion Comercial</strong> é uma empresa especializada
                no fornecimento de produtos de limpeza, higiene e descartáveis
                no atacado para condomínios e empresas.
              </Paragraph>
              <Paragraph>
                Com anos de experiência no mercado, oferecemos um catálogo
                completo com as melhores marcas, preços competitivos e um
                atendimento personalizado que entende as necessidades do seu
                negócio.
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
            Produtos selecionados para atender todas as necessidades do seu
            condomínio ou empresa
          </SectionSubtitle>

          <CategoriesGrid>
            {categories.map((category, index) => (
              <CategoryCard key={index} $color={category.color}>
                <CategoryIcon>{category.icon}</CategoryIcon>
                <CategoryTitle>{category.title}</CategoryTitle>
                <CategoryDescription>
                  {category.description}
                </CategoryDescription>
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
            <CTATitle>🚀 Compre no Atacado e Economize!</CTATitle>
            <CTAText>
              Solicite seu orçamento agora mesmo e garanta os melhores preços em
              produtos de limpeza para seu condomínio ou empresa. Atendimento
              rápido e personalizado!
            </CTAText>
            <PrimaryButton large onClick={() => navigate('/contato')}>
              Quero Meu Orçamento Grátis
            </PrimaryButton>
          </CTAContent>
        </SectionContent>
      </CTASection>
    </Container>
  );
};

export default Home;
