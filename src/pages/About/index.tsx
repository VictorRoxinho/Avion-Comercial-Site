// src/pages/About/index.tsx
import React from 'react';
import { FaBullseye, FaEye, FaHeart, FaTruck, FaUsers, FaAward } from 'react-icons/fa';
import {
  Container,
  PageHeader,
  PageTitle,
  PageSubtitle,
  Section,
  ContentGrid,
  ImageWrapper,
  AboutImage,
  TextContent,
  SectionTitle,
  Paragraph,
  MissionSection,
  MissionGrid,
  MissionCard,
  MissionIcon,
  MissionTitle,
  MissionText,
  ValuesGrid,
  ValueCard,
  ValueIcon,
  ValueTitle,
  ValueDescription,
  StatsSection,
  StatsGrid,
  StatCard,
  StatNumber,
  StatLabel,
  CTASection,
  CTAContent,
  CTATitle,
  CTAText
} from './styles';

/**
 * About Page
 * Company information, mission, vision, and values
 */
const About: React.FC = () => {
  const values = [
    {
      icon: <FaHeart />,
      title: 'Compromisso',
      description: 'Comprometidos com a satisfação e sucesso de nossos clientes.',
    },
    {
      icon: <FaAward />,
      title: 'Qualidade',
      description: 'Produtos de alta qualidade das melhores marcas do mercado.',
    },
    {
      icon: <FaTruck />,
      title: 'Agilidade',
      description: 'Entrega rápida e eficiente para não atrasar suas operações.',
    },
    {
      icon: <FaUsers />,
      title: 'Atendimento',
      description: 'Equipe dedicada e pronta para atender suas necessidades.',
    },
  ];

  return (
    <Container>
      <PageHeader>
        <PageTitle>Sobre a Avion Comercial</PageTitle>
        <PageSubtitle>
          Conheça nossa história, missão e valores
        </PageSubtitle>
      </PageHeader>

      <Section>
        <ContentGrid>
          <ImageWrapper>
            <AboutImage
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop"
              alt="Equipe Avion Comercial"
            />
          </ImageWrapper>

          <TextContent>
            <SectionTitle>Nossa História</SectionTitle>
            <Paragraph>
              A <strong>Avion Comercial</strong> nasceu da necessidade de oferecer ao mercado
              uma solução completa e confiável para o fornecimento de produtos de limpeza,
              higiene e descartáveis no atacado.
            </Paragraph>
            <Paragraph>
              Com anos de experiência no setor, construímos uma reputação sólida baseada
              em qualidade, preços competitivos e um atendimento personalizado que entende
              as necessidades específicas de condomínios e empresas.
            </Paragraph>
            <Paragraph>
              Hoje, atendemos centenas de clientes em todo o estado, fornecendo produtos
              das melhores marcas do mercado com a garantia de qualidade e procedência
              que você merece.
            </Paragraph>
          </TextContent>
        </ContentGrid>
      </Section>

      <MissionSection>
        <MissionGrid>
          <MissionCard>
            <MissionIcon>
              <FaBullseye />
            </MissionIcon>
            <MissionTitle>Missão</MissionTitle>
            <MissionText>
              Fornecer produtos de limpeza e higiene de qualidade superior com preços
              competitivos, garantindo a satisfação e o sucesso operacional de nossos
              clientes.
            </MissionText>
          </MissionCard>

          <MissionCard>
            <MissionIcon>
              <FaEye />
            </MissionIcon>
            <MissionTitle>Visão</MissionTitle>
            <MissionText>
              Ser referência nacional no fornecimento de produtos para limpeza e higiene,
              reconhecidos pela excelência no atendimento e qualidade dos produtos.
            </MissionText>
          </MissionCard>
        </MissionGrid>
      </MissionSection>

      <Section>
        <SectionTitle center>Nossos Valores</SectionTitle>
        <ValuesGrid>
          {values.map((value, index) => (
            <ValueCard key={index}>
              <ValueIcon>{value.icon}</ValueIcon>
              <ValueTitle>{value.title}</ValueTitle>
              <ValueDescription>{value.description}</ValueDescription>
            </ValueCard>
          ))}
        </ValuesGrid>
      </Section>

      <StatsSection>
        <StatsGrid>
          <StatCard>
            <StatNumber>500+</StatNumber>
            <StatLabel>Clientes Atendidos</StatLabel>
          </StatCard>

          <StatCard>
            <StatNumber>1000+</StatNumber>
            <StatLabel>Produtos no Catálogo</StatLabel>
          </StatCard>

          <StatCard>
            <StatNumber>10+</StatNumber>
            <StatLabel>Anos de Experiência</StatLabel>
          </StatCard>

          <StatCard>
            <StatNumber>98%</StatNumber>
            <StatLabel>Satisfação dos Clientes</StatLabel>
          </StatCard>
        </StatsGrid>
      </StatsSection>

      <CTASection>
        <CTAContent>
          <CTATitle>Faça Parte da Nossa História</CTATitle>
          <CTAText>
            Entre em contato conosco e descubra como podemos ajudar sua empresa ou condomínio
          </CTAText>
        </CTAContent>
      </CTASection>
    </Container>
  );
};

export default About;