// src/pages/Home/index.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaBox,
  FaRecycle,
  FaHands,
  FaTruck,
  FaChevronLeft,
  FaChevronRight,
  FaCreditCard,
  FaShieldAlt,
} from 'react-icons/fa';
import * as S from './styles';
import { brands } from '../../data/brands';
import { products } from '../../data/products';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Tudo em Material de Limpeza para Atacado',
      subtitle: 'As melhores marcas com preços imbatíveis',
      image:
        'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&h=900&fit=crop',
    },
    {
      title: 'Entrega Rápida em Todo o Estado',
      subtitle: 'Atendimento especializado para condomínios e empresas',
      image:
        'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=1600&h=900&fit=crop',
    },
  ];

  // Get first 30 products from data/products.ts for featured section
  const featuredProducts = products.slice(0, 30);

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

  return (
    <S.Container>
      {/* Promo Banner */}
      <S.PromoBanner>
        🎉 PROMOÇÃO ESPECIAL: Frete Grátis para compras acima de R$ 500,00 |
        Parcelamento em até 3x sem juros!
      </S.PromoBanner>

      {/* Hero Carousel Section */}
      <S.HeroSection>
        <S.CarouselContainer>
          {slides.map((slide, index) => (
            <S.CarouselSlide
              key={index}
              $active={index === currentSlide}
              $background={slide.image}
            >
              <S.HeroOverlay />
              <S.HeroContent>
                <S.HeroTitle>{slide.title}</S.HeroTitle>
                <S.HeroSubtitle>{slide.subtitle}</S.HeroSubtitle>
                <S.HeroButtons>
                  <S.PrimaryButton onClick={() => navigate('/produtos')}>
                    Ver Catálogo Completo
                  </S.PrimaryButton>
                  <S.SecondaryButton onClick={() => navigate('/contato')}>
                    Falar com Especialista
                  </S.SecondaryButton>
                </S.HeroButtons>
              </S.HeroContent>
            </S.CarouselSlide>
          ))}

          {/* Navigation Arrows */}
          <S.CarouselArrow $direction="left" onClick={prevSlide}>
            <FaChevronLeft />
          </S.CarouselArrow>
          <S.CarouselArrow $direction="right" onClick={nextSlide}>
            <FaChevronRight />
          </S.CarouselArrow>

          {/* Dots Navigation */}
          <S.CarouselDots>
            {slides.map((_, index) => (
              <S.CarouselDot
                key={index}
                $active={index === currentSlide}
                onClick={() => goToSlide(index)}
              />
            ))}
          </S.CarouselDots>
        </S.CarouselContainer>
      </S.HeroSection>

      {/* Quick Benefits Section */}
      <S.QuickBenefitsSection>
        <S.QuickBenefitsGrid>
          <S.QuickBenefitCard>
            <S.QuickBenefitIcon>
              <FaCreditCard />
            </S.QuickBenefitIcon>
            <S.QuickBenefitContent>
              <S.QuickBenefitTitle>Parcelamento Facilitado</S.QuickBenefitTitle>
              <S.QuickBenefitText>
                Até 3x sem juros no cartão de crédito
              </S.QuickBenefitText>
            </S.QuickBenefitContent>
          </S.QuickBenefitCard>

          <S.QuickBenefitCard>
            <S.QuickBenefitIcon>
              <FaTruck />
            </S.QuickBenefitIcon>
            <S.QuickBenefitContent>
              <S.QuickBenefitTitle>Entrega Rápida</S.QuickBenefitTitle>
              <S.QuickBenefitText>
                Frete grátis acima de R$ 500 | Até 3 dias úteis
              </S.QuickBenefitText>
            </S.QuickBenefitContent>
          </S.QuickBenefitCard>

          <S.QuickBenefitCard>
            <S.QuickBenefitIcon>
              <FaShieldAlt />
            </S.QuickBenefitIcon>
            <S.QuickBenefitContent>
              <S.QuickBenefitTitle>Compra Segura</S.QuickBenefitTitle>
              <S.QuickBenefitText>
                Produtos de qualidade com garantia
              </S.QuickBenefitText>
            </S.QuickBenefitContent>
          </S.QuickBenefitCard>
        </S.QuickBenefitsGrid>
      </S.QuickBenefitsSection>

      {/* Brands Section - Carousel */}
      <S.BrandsSection>
        <S.SectionContent>
          <S.SectionTitle center>Marcas Parceiras</S.SectionTitle>
          <S.BrandsCarousel>
            <S.BrandsTrack>
              {[...brands, ...brands].map((brand, index) => (
                <S.BrandCard key={index}>
                  <S.BrandLogo src={brand.logo} alt={brand.name} />
                </S.BrandCard>
              ))}
            </S.BrandsTrack>
          </S.BrandsCarousel>
        </S.SectionContent>
      </S.BrandsSection>

      {/* Categories Section */}
      <S.CategoriesSection>
        <S.SectionContent>
          <S.SectionTitle center>Compre por Categoria</S.SectionTitle>
          <S.SectionSubtitle>
            Navegue pelas principais categorias de produtos
          </S.SectionSubtitle>

          <S.CategoriesGrid>
            {categories.map((category, index) => (
              <S.CategoryCard key={index} $color={category.color}>
                <S.CategoryIcon>{category.icon}</S.CategoryIcon>
                <S.CategoryTitle>{category.title}</S.CategoryTitle>
                <S.CategoryDescription>
                  {category.description}
                </S.CategoryDescription>
                <S.CategoryButton onClick={() => navigate('/produtos')}>
                  Ver Produtos
                </S.CategoryButton>
              </S.CategoryCard>
            ))}
          </S.CategoriesGrid>
        </S.SectionContent>
      </S.CategoriesSection>

      {/* Featured Products Section */}
      <S.ProductsSection>
        <S.SectionContent>
          <S.SectionTitle center>Produtos em Destaque</S.SectionTitle>
          <S.SectionSubtitle>
            Confira nossos produtos mais vendidos para atacado
          </S.SectionSubtitle>

          <S.ProductsGrid>
            {featuredProducts.map((product) => (
              <S.ProductCard
                key={product.id}
                onClick={() => navigate(`/produtos/${product.id}`)}
              >
                <S.ProductImage>
                  <img src={product.image} alt={product.name} />
                </S.ProductImage>
                <S.ProductInfo>
                  <S.ProductCategory>{product.category}</S.ProductCategory>
                  <S.ProductName>{product.name}</S.ProductName>
                  <S.ProductButton>Solicitar Cotação</S.ProductButton>
                </S.ProductInfo>
              </S.ProductCard>
            ))}
          </S.ProductsGrid>
        </S.SectionContent>
      </S.ProductsSection>

      {/* CTA Section */}
      <S.CTASection>
        <S.SectionContent>
          <S.CTAContent>
            <S.CTATitle>Precisa de um Orçamento Personalizado?</S.CTATitle>
            <S.CTAText>
              Nossa equipe comercial está pronta para atender sua empresa ou
              condomínio com os melhores preços e condições de pagamento.
            </S.CTAText>
            <S.PrimaryButton large onClick={() => navigate('/contato')}>
              Solicitar Orçamento
            </S.PrimaryButton>
          </S.CTAContent>
        </S.SectionContent>
      </S.CTASection>
    </S.Container>
  );
};

export default Home;
