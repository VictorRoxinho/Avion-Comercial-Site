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

/**
 * Home Page
 * Main landing page with hero, about, categories, and brands sections
 */
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

  const featuredProducts = [
    // Categoria: Limpeza (10 produtos)
    {
      id: 1,
      name: 'Desinfetante 5L',
      category: 'Limpeza',
      price: 'R$ 24,90',
      image:
        'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400&h=400&fit=crop',
    },
    {
      id: 2,
      name: 'Detergente Neutro 5L',
      category: 'Limpeza',
      price: 'R$ 18,90',
      image:
        'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400&h=400&fit=crop',
    },
    {
      id: 3,
      name: 'Água Sanitária 5L',
      category: 'Limpeza',
      price: 'R$ 15,90',
      image:
        'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&h=400&fit=crop',
    },
    {
      id: 4,
      name: 'Limpa Vidros 5L',
      category: 'Limpeza',
      price: 'R$ 22,90',
      image:
        'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=400&h=400&fit=crop',
    },
    {
      id: 5,
      name: 'Multiuso Concentrado 5L',
      category: 'Limpeza',
      price: 'R$ 28,90',
      image:
        'https://images.unsplash.com/photo-1585421514738-01798e348b1d?w=400&h=400&fit=crop',
    },
    {
      id: 6,
      name: 'Amaciante 5L',
      category: 'Limpeza',
      price: 'R$ 26,90',
      image:
        'https://images.unsplash.com/photo-1582735689339-38e2b45d9381?w=400&h=400&fit=crop',
    },
    {
      id: 7,
      name: 'Sabão em Pó 5kg',
      category: 'Limpeza',
      price: 'R$ 35,90',
      image:
        'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400&h=400&fit=crop',
    },
    {
      id: 8,
      name: 'Limpa Pisos 5L',
      category: 'Limpeza',
      price: 'R$ 21,90',
      image:
        'https://images.unsplash.com/photo-1585421514738-01798e348b1d?w=400&h=400&fit=crop',
    },
    {
      id: 9,
      name: 'Removedor de Manchas 5L',
      category: 'Limpeza',
      price: 'R$ 32,90',
      image:
        'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&h=400&fit=crop',
    },
    {
      id: 10,
      name: 'Limpador Instantâneo 5L',
      category: 'Limpeza',
      price: 'R$ 29,90',
      image:
        'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400&h=400&fit=crop',
    },

    // Categoria: Descartáveis (10 produtos)
    {
      id: 11,
      name: 'Papel Higiênico 64 Rolos',
      category: 'Descartáveis',
      price: 'R$ 89,90',
      image:
        'https://images.unsplash.com/photo-1584556326561-c8746083993b?w=400&h=400&fit=crop',
    },
    {
      id: 12,
      name: 'Saco de Lixo 100L - Pacote 100un',
      category: 'Descartáveis',
      price: 'R$ 32,90',
      image:
        'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=400&h=400&fit=crop',
    },
    {
      id: 13,
      name: 'Papel Toalha Bobina 6un',
      category: 'Descartáveis',
      price: 'R$ 45,90',
      image:
        'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop',
    },
    {
      id: 14,
      name: 'Guardanapo 50x50 - Pacote 500un',
      category: 'Descartáveis',
      price: 'R$ 28,90',
      image:
        'https://images.unsplash.com/photo-1606854428728-5fe3eea23475?w=400&h=400&fit=crop',
    },
    {
      id: 15,
      name: 'Copo Descartável 200ml - 2500un',
      category: 'Descartáveis',
      price: 'R$ 68,90',
      image:
        'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400&h=400&fit=crop',
    },
    {
      id: 16,
      name: 'Luva Látex Descartável - Caixa 100un',
      category: 'Descartáveis',
      price: 'R$ 42,90',
      image:
        'https://images.unsplash.com/photo-1585421514738-01798e348b1d?w=400&h=400&fit=crop',
    },
    {
      id: 17,
      name: 'Máscara Descartável - Caixa 50un',
      category: 'Descartáveis',
      price: 'R$ 35,90',
      image:
        'https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=400&h=400&fit=crop',
    },
    {
      id: 18,
      name: 'Prato Descartável - Pacote 500un',
      category: 'Descartáveis',
      price: 'R$ 55,90',
      image:
        'https://images.unsplash.com/photo-1606854428728-5fe3eea23475?w=400&h=400&fit=crop',
    },
    {
      id: 19,
      name: 'Garfo e Faca Descartável - Kit 500un',
      category: 'Descartáveis',
      price: 'R$ 38,90',
      image:
        'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400&h=400&fit=crop',
    },
    {
      id: 20,
      name: 'Saco de Lixo 50L - Pacote 200un',
      category: 'Descartáveis',
      price: 'R$ 45,90',
      image:
        'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=400&h=400&fit=crop',
    },

    // Categoria: Higiene (10 produtos)
    {
      id: 21,
      name: 'Sabonete Líquido 5L',
      category: 'Higiene',
      price: 'R$ 42,90',
      image:
        'https://images.unsplash.com/photo-1585421514738-01798e348b1d?w=400&h=400&fit=crop',
    },
    {
      id: 22,
      name: 'Álcool Gel 70% - 5L',
      category: 'Higiene',
      price: 'R$ 65,90',
      image:
        'https://images.unsplash.com/photo-1584736286279-4ca9e43bc61f?w=400&h=400&fit=crop',
    },
    {
      id: 23,
      name: 'Sabonete em Barra - Caixa 120un',
      category: 'Higiene',
      price: 'R$ 98,90',
      image:
        'https://images.unsplash.com/photo-1617897903246-719242758050?w=400&h=400&fit=crop',
    },
    {
      id: 24,
      name: 'Shampoo 5L',
      category: 'Higiene',
      price: 'R$ 52,90',
      image:
        'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&h=400&fit=crop',
    },
    {
      id: 25,
      name: 'Condicionador 5L',
      category: 'Higiene',
      price: 'R$ 54,90',
      image:
        'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop',
    },
    {
      id: 26,
      name: 'Creme Dental - Caixa 72un',
      category: 'Higiene',
      price: 'R$ 85,90',
      image:
        'https://images.unsplash.com/photo-1622654892886-c3c34cee9f2c?w=400&h=400&fit=crop',
    },
    {
      id: 27,
      name: 'Escova Dental - Caixa 144un',
      category: 'Higiene',
      price: 'R$ 112,90',
      image:
        'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400&h=400&fit=crop',
    },
    {
      id: 28,
      name: 'Desodorante - Caixa 24un',
      category: 'Higiene',
      price: 'R$ 78,90',
      image:
        'https://images.unsplash.com/photo-1585421514738-01798e348b1d?w=400&h=400&fit=crop',
    },
    {
      id: 29,
      name: 'Papel Higiênico Folha Dupla 32 Rolos',
      category: 'Higiene',
      price: 'R$ 62,90',
      image:
        'https://images.unsplash.com/photo-1584556326561-c8746083993b?w=400&h=400&fit=crop',
    },
    {
      id: 30,
      name: 'Lenço Umedecido - Caixa 48 Pacotes',
      category: 'Higiene',
      price: 'R$ 95,90',
      image:
        'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop',
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
                onClick={() => navigate('/produtos')}
              >
                <S.ProductImage>
                  <img src={product.image} alt={product.name} />
                </S.ProductImage>
                <S.ProductInfo>
                  <S.ProductCategory>{product.category}</S.ProductCategory>
                  <S.ProductName>{product.name}</S.ProductName>
                  <S.ProductPrice>{product.price}</S.ProductPrice>
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
