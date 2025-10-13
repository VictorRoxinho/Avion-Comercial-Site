import React, { useState, FormEvent } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';
import {
  Container,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  ContentGrid,
  FormSection,
  FormTitle,
  Form,
  FormGroup,
  Label,
  Input,
  TextArea,
  SubmitButton,
  SuccessMessage,
  InfoSection,
  InfoCard,
  InfoIcon,
  InfoContent,
  InfoTitle,
  InfoText,
  MapSection,
  MapEmbed
} from './styles';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulação de envio (substitua por sua API real)
    setTimeout(() => {
      console.log('Formulário enviado:', formData);
      setIsSubmitted(true);
      setIsLoading(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Remove mensagem de sucesso após 5 segundos
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <Container>
      <HeroSection>
        <HeroTitle>Entre em Contato</HeroTitle>
        <HeroSubtitle>
          Estamos prontos para atender sua empresa. Solicite um orçamento sem compromisso!
        </HeroSubtitle>
      </HeroSection>

      <ContentGrid>
        <FormSection>
          <FormTitle>Envie sua mensagem</FormTitle>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Nome Completo *</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">E-mail *</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="phone">Telefone *</Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(11) 99999-9999"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="subject">Assunto *</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Solicitar orçamento"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Mensagem *</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Descreva sua necessidade..."
                required
              />
            </FormGroup>

            <SubmitButton type="submit" disabled={isLoading}>
              {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
            </SubmitButton>

            {isSubmitted && (
              <SuccessMessage>
                ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
              </SuccessMessage>
            )}
          </Form>
        </FormSection>

        <InfoSection>
          <InfoCard>
            <InfoIcon>
              <FaPhone />
            </InfoIcon>
            <InfoContent>
              <InfoTitle>Telefone</InfoTitle>
              <InfoText>
                <a href="tel:+551131234567">(11) 3123-4567</a>
              </InfoText>
            </InfoContent>
          </InfoCard>

          <InfoCard>
            <InfoIcon>
              <FaWhatsapp />
            </InfoIcon>
            <InfoContent>
              <InfoTitle>WhatsApp</InfoTitle>
              <InfoText>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  (11) 99999-9999
                </a>
              </InfoText>
            </InfoContent>
          </InfoCard>

          <InfoCard>
            <InfoIcon>
              <FaEnvelope />
            </InfoIcon>
            <InfoContent>
              <InfoTitle>E-mail</InfoTitle>
              <InfoText>
                <a href="mailto:contato@avioncomercial.com.br">
                  contato@avioncomercial.com.br
                </a>
              </InfoText>
            </InfoContent>
          </InfoCard>

          <InfoCard>
            <InfoIcon>
              <FaMapMarkerAlt />
            </InfoIcon>
            <InfoContent>
              <InfoTitle>Endereço</InfoTitle>
              <InfoText>
                Rua Exemplo, 123 - Centro<br />
                São Paulo - SP<br />
                CEP: 01234-567
              </InfoText>
            </InfoContent>
          </InfoCard>

          <InfoCard>
            <InfoIcon>
              <FaClock />
            </InfoIcon>
            <InfoContent>
              <InfoTitle>Horário de Atendimento</InfoTitle>
              <InfoText>
                Segunda a Sexta: 8h às 18h<br />
                Sábado: 8h às 12h
              </InfoText>
            </InfoContent>
          </InfoCard>

          <MapSection>
            <h2>Nossa Localização</h2>
            <MapEmbed
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1976!2d-46.6564!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjgiUyA0NsKwMzknMjMuMSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
              title="Localização Avion Comercial"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </MapSection>
        </InfoSection>
      </ContentGrid>
    </Container>
  );
};

export default Contact;