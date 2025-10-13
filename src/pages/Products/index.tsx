// src/pages/Products/index.tsx
import React, { useState, useMemo } from 'react';
import { FaFilter } from 'react-icons/fa';
import * as S from './styles';
import ProductCard from '../../components/ProductCard';
import { products, categories } from '../../data/products';

/**
 * Products Page
 * Displays product catalog with category filtering
 */
const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'Todos') {
      return products;
    }
    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <S.Container>
      <S.PageHeader>
        <S.PageTitle>Nossos Produtos</S.PageTitle>
        <S.PageSubtitle>
          Catálogo completo de produtos para limpeza, higiene e descartáveis
        </S.PageSubtitle>
      </S.PageHeader>

      <S.ContentWrapper>
        <S.FilterToggle onClick={() => setIsFilterOpen(!isFilterOpen)}>
          <FaFilter /> Filtrar por Categoria
        </S.FilterToggle>

        <S.Sidebar $isOpen={isFilterOpen}>
          <S.FilterTitle>Categorias</S.FilterTitle>
          <S.FilterList>
            {categories.map((category) => (
              <S.FilterItem
                key={category}
                $active={selectedCategory === category}
                onClick={() => {
                  setSelectedCategory(category);
                  setIsFilterOpen(false);
                }}
              >
                {category}
                {selectedCategory === category && (
                  <S.ActiveIndicator />
                )}
              </S.FilterItem>
            ))}
          </S.FilterList>
        </S.Sidebar>

        <S.MainContent>
          <S.ResultsInfo>
            Mostrando {filteredProducts.length} produto(s)
            {selectedCategory !== 'Todos' && ` na categoria "${selectedCategory}"`}
          </S.ResultsInfo>

          <S.ProductsGrid>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </S.ProductsGrid>

          {filteredProducts.length === 0 && (
            <S.EmptyState>
              <S.EmptyStateText>
                Nenhum produto encontrado nesta categoria.
              </S.EmptyStateText>
            </S.EmptyState>
          )}
        </S.MainContent>
      </S.ContentWrapper>
    </S.Container>
  );
};

export default Products;