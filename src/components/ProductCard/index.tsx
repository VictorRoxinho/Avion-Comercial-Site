// src/components/ProductCard/index.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import {
  Card,
  ImageContainer,
  ProductImage,
  CategoryBadge,
  CardContent,
  ProductName,
  ProductDescription,
  QuoteButton
} from './styles';
import { Product } from '../../data/products';

interface ProductCardProps {
  product: Product;
}

/**
 * ProductCard Component
 * Displays product information in a card format with quote button
 */
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleQuoteClick = () => {
    navigate(`/produtos/${product.id}`);
  };

  return (
    <Card>
      <ImageContainer>
        <ProductImage src={product.image} alt={product.name} />
        <CategoryBadge>{product.category}</CategoryBadge>
      </ImageContainer>
      
      <CardContent>
        <ProductName>{product.name}</ProductName>
        <ProductDescription>{product.description}</ProductDescription>
        
        <QuoteButton onClick={handleQuoteClick}>
          <FaShoppingCart />
          Solicitar Cotação
        </QuoteButton>
      </CardContent>
    </Card>
  );
};

export default ProductCard;