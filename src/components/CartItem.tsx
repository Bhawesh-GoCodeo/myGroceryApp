import React from 'react';
import { CartItem as CartItemType } from '../types/cart';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="cart-item">
      <img 
        src={item.product.image} 
        alt={item.product.name}
        className="w-20 h-20 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h3 className="font-semibold">{item.product.name}</h3>
        <p className="text-price">${item.product.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center gap-2">
        <button 
          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
          className="btn-primary px-2 py-1"
        >
          -
        </button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button 
          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
          className="btn-primary px-2 py-1"
        >
          +
        </button>
      </div>
      <button 
        onClick={() => onRemove(item.product.id)}
        className="text-red-500 hover:text-red-700"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
