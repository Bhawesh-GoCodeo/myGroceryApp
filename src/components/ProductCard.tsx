import React from 'react';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-2">{product.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-price">${product.price.toFixed(2)}</span>
        <button 
          onClick={() => onAddToCart(product)}
          className="btn-primary"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
