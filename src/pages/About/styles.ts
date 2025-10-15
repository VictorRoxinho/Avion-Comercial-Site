// src/pages/About/styles.tsx
import styled from 'styled-components';

interface SectionTitleProps {
  center?: boolean;
}

export const Container = styled.div`
  margin-top: 110px; /* 40px TopBar + 70px Header */

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 105px; /* 35px TopBar + 70px Header */
  }
`;

export const PageHeader = styled.div`
  background: linear-gradient(
    to right,
    rgba(5, 49, 89, 0.95) 0%,
    rgba(5, 49, 89, 0.85) 40%,
    rgba(5, 49, 89, 0.7) 70%,
    rgba(240, 76, 55, 0.4) 100%
  );
  color: ${({ theme }) => theme.colors.white};
  padding: 4rem 2rem;
  text-align: center;
  box-shadow: inset 0 0 200px rgba(0, 0, 0, 0.3);
`;

export const PageTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

export const PageSubtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.95;
`;

export const Section = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 5rem 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 3rem 1rem;
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const AboutImage = styled.img`
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 20px ${({ theme }) => theme.colors.shadow};
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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

export const Paragraph = styled.p`
  font-size: 1.05rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const MissionSection = styled.section`
  background: ${({ theme }) => theme.colors.background};
  padding: 5rem 2rem;
`;

export const MissionGrid = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const MissionCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px ${({ theme }) => theme.colors.shadow};
  text-align: center;
`;

export const MissionIcon = styled.div`
  font-size: 3.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
`;

export const MissionTitle = styled.h3`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

export const MissionText = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
`;

export const ValueCard = styled.div`
  text-align: center;
  padding: 2rem;
  border-radius: 12px;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0 4px 15px ${({ theme }) => theme.colors.shadow};
    transform: translateY(-5px);
  }
`;

export const ValueIcon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1.5rem;
`;

export const ValueTitle = styled.h4`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.75rem;
`;

export const ValueDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const StatsSection = styled.section`
  background: linear-gradient(135deg, #0066cc 0%, #00b894 100%);
  padding: 5rem 2rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const StatsGrid = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
`;

export const StatCard = styled.div`
  text-align: center;
`;

export const StatNumber = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;

export const StatLabel = styled.p`
  font-size: 1.1rem;
  opacity: 0.95;
`;

export const CTASection = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 5rem 2rem;
  text-align: center;
`;

export const CTAContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

export const CTATitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

export const CTAText = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textLight};
`;
