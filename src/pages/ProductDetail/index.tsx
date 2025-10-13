// src/pages/ProductDetail/index.tsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import {
  Container,
  BackButton,
  ProductDetailGrid,
  ImageSection,
  MainImage,
  InfoSection,
  CategoryBadge,
  ProductTitle,
  ProductDescription,
  FeaturesSection,
  FeaturesTitle,
  FeaturesList,
  FeatureItem,
  QuoteSection,
  QuoteTitle,
  QuoteSubtitle,
  QuoteForm,
  FormRow,
  FormGroup,
  Label,
  Input,
  TextArea,
  SubmitButton,
  SuccessMessage,
  ErrorMessage
} from './styles';
import { products } from '../../data/products';

/**
 * ProductDetail Page
 * Displays detailed product information with quote form
 */
const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    quantity: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!product) {
    return (
      <Container>
        <ErrorMessage>
          <h2>Produto não encontrado</h2>
          <BackButton onClick={() => navigate('/produtos')}>
            Voltar aos Produtos
          </BackButton>
        </ErrorMessage>
      </Container>
    );
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    console.log('Quote request:', { product: product.name, ...formData });
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        quantity: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <Container>
      <BackButton onClick={() => navigate('/produtos')}>
        <FaArrowLeft /> Voltar aos Produtos
      </BackButton>

      <ProductDetailGrid>
        <ImageSection>
          <MainImage src={product.image} alt={product.name} />
        </ImageSection>

        <InfoSection>
          <CategoryBadge>{product.category}</CategoryBadge>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductDescription>
            {product.detailedDescription || product.description}
          </ProductDescription>

          {product.features && product.features.length > 0 && (
            <FeaturesSection>
              <FeaturesTitle>Características:</FeaturesTitle>
              <FeaturesList>
                {product.features.map((feature, index) => (
                  <FeatureItem key={index}>
                    <FaCheckCircle /> {feature}
                  </FeatureItem>
                ))}
              </FeaturesList>
            </FeaturesSection>
          )}
        </InfoSection>
      </ProductDetailGrid>

      <QuoteSection>
        <QuoteTitle>Solicitar Cotação</QuoteTitle>
        <QuoteSubtitle>
          Preencha o formulário abaixo e entraremos em contato com você
        </QuoteSubtitle>

        {isSubmitted ? (
          <SuccessMessage>
            <FaCheckCircle />
            <h3>Cotação enviada com sucesso!</h3>
            <p>Entraremos em contato em breve.</p>
          </SuccessMessage>
        ) : (
          <QuoteForm onSubmit={handleSubmit}>
            <FormRow>
              <FormGroup>
                <Label htmlFor="name">Nome Completo *</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Seu nome"
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">E-mail *</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="seu@email.com"
                />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <Label htmlFor="phone">Telefone *</Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="(11) 99999-9999"
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="company">Empresa/Condomínio</Label>
                <Input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Nome da empresa"
                />
              </FormGroup>
            </FormRow>

            <FormGroup>
              <Label htmlFor="quantity">Quantidade Desejada *</Label>
              <Input
                type="text"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                required
                placeholder="Ex: 10 unidades"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Mensagem (opcional)</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                placeholder="Informações adicionais sobre sua necessidade"
              />
            </FormGroup>

            <SubmitButton type="submit">
              Enviar Solicitação
            </SubmitButton>
          </QuoteForm>
        )}
      </QuoteSection>
    </Container>
  );
};

export default ProductDetail;