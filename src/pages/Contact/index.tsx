import React, { useState, FormEvent } from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
} from 'react-icons/fa';
import * as S from './styles';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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
        message: '',
      });

      // Remove mensagem de sucesso após 5 segundos
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <S.Container>
      <S.HeroSection>
        <S.HeroTitle>Entre em Contato</S.HeroTitle>
        <S.HeroSubtitle>
          Estamos prontos para atender sua empresa. Solicite um orçamento sem
          compromisso!
        </S.HeroSubtitle>
      </S.HeroSection>

      <S.ContentGrid>
        <S.FormSection>
          <S.FormTitle>Envie sua mensagem</S.FormTitle>
          <S.Form onSubmit={handleSubmit}>
            <S.FormGroup>
              <S.Label htmlFor="name">Nome Completo *</S.Label>
              <S.Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
                required
              />
            </S.FormGroup>

            <S.FormGroup>
              <S.Label htmlFor="email">E-mail *</S.Label>
              <S.Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                required
              />
            </S.FormGroup>

            <S.FormGroup>
              <S.Label htmlFor="phone">Telefone *</S.Label>
              <S.Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(71) 99999-9999"
                required
              />
            </S.FormGroup>

            <S.FormGroup>
              <S.Label htmlFor="subject">Assunto *</S.Label>
              <S.Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Solicitar orçamento"
                required
              />
            </S.FormGroup>

            <S.FormGroup>
              <S.Label htmlFor="message">Mensagem *</S.Label>
              <S.TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Descreva sua necessidade..."
                required
              />
            </S.FormGroup>

            <S.SubmitButton type="submit" disabled={isLoading}>
              {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
            </S.SubmitButton>

            {isSubmitted && (
              <S.SuccessMessage>
                ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
              </S.SuccessMessage>
            )}
          </S.Form>
        </S.FormSection>

        <S.InfoSection>
          <S.InfoCard>
            <S.InfoIcon>
              <FaPhone />
            </S.InfoIcon>
            <S.InfoContent>
              <S.InfoTitle>Telefone</S.InfoTitle>
              <S.InfoText>
                <a href="tel:+5571981511121">(71) 98151-1121</a>
              </S.InfoText>
            </S.InfoContent>
          </S.InfoCard>

          <S.InfoCard>
            <S.InfoIcon>
              <FaWhatsapp />
            </S.InfoIcon>
            <S.InfoContent>
              <S.InfoTitle>WhatsApp</S.InfoTitle>
              <S.InfoText>
                <a
                  href="https://wa.me/5571981511121"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (71) 98151-1121
                </a>
              </S.InfoText>
            </S.InfoContent>
          </S.InfoCard>

          <S.InfoCard>
            <S.InfoIcon>
              <FaEnvelope />
            </S.InfoIcon>
            <S.InfoContent>
              <S.InfoTitle>E-mail</S.InfoTitle>
              <S.InfoText>
                <a href="mailto:contato@avioncomercial.com.br">
                  contato@avioncomercial.com.br
                </a>
              </S.InfoText>
            </S.InfoContent>
          </S.InfoCard>

          <S.InfoCard>
            <S.InfoIcon>
              <FaMapMarkerAlt />
            </S.InfoIcon>
            <S.InfoContent>
              <S.InfoTitle>Endereço</S.InfoTitle>
              <S.InfoText>
                Rua Padre Daniel Lisboa, 123 - Brotas
                <br />
                Salvador - BA
                <br />
                CEP: 01234-567
              </S.InfoText>
            </S.InfoContent>
          </S.InfoCard>

          <S.InfoCard>
            <S.InfoIcon>
              <FaClock />
            </S.InfoIcon>
            <S.InfoContent>
              <S.InfoTitle>Horário de Atendimento</S.InfoTitle>
              <S.InfoText>
                Segunda a Sexta: 8h às 18h
                <br />
                Sábado: 8h às 12h
              </S.InfoText>
            </S.InfoContent>
          </S.InfoCard>

          <S.MapSection>
            <h2>Nossa Localização</h2>
            <S.MapEmbed
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d418.73041458460904!2d-38.488544401918084!3d-12.985749866981326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604ca699e135f%3A0xba773b80cd0ba026!2sAvion%20Comercial%20LTDA!5e1!3m2!1spt-BR!2sbr!4v1760619675508!5m2!1spt-BR!2sbr"
              title="Localização Avion Comercial"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </S.MapSection>
        </S.InfoSection>
      </S.ContentGrid>
    </S.Container>
  );
};

export default Contact;
