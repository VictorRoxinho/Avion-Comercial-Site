// src/pages/Products/styles.tsx
import styled from 'styled-components';

interface SidebarProps {
  $isOpen: boolean;
}

interface FilterItemProps {
  $active: boolean;
}

export const Container = styled.div`
  margin-top: 110px; /* 40px TopBar + 70px Header */
  min-height: calc(100vh - 110px);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 105px; /* 35px TopBar + 70px Header */
    min-height: calc(100vh - 105px);
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

export const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 2rem;
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 3rem;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    padding: 2rem 1rem;
  }
`;

export const FilterToggle = styled.button`
  display: none;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  margin-bottom: 1.5rem;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }
`;

export const Sidebar = styled.aside<SidebarProps>`
  background: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px ${({ theme }) => theme.colors.shadow};
  height: fit-content;
  position: sticky;
  top: 90px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
    position: static;
    margin-bottom: 2rem;
  }
`;

export const FilterTitle = styled.h3`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
`;

export const FilterList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FilterItem = styled.li<FilterItemProps>`
  padding: 0.85rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  background: ${({ $active, theme }) =>
    $active ? theme.colors.primary : 'transparent'};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.white : theme.colors.text};
  font-weight: ${({ $active }) => ($active ? '600' : '400')};
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background: ${({ $active, theme }) =>
      $active ? theme.colors.primaryDark : theme.colors.background};
  }
`;

export const ActiveIndicator = styled.span`
  width: 8px;
  height: 8px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ResultsInfo = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textLight};
  font-weight: 500;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
`;

export const EmptyStateText = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textLight};
`;
