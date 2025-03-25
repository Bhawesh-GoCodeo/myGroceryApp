import React from 'react';
import CartItem from './CartItem';
import { CartItem as CartItemType } from '../types/cart';

interface CartProps {
  items: CartItemType[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
}

const Cart: React.FC<CartProps> = ({ items, onUpdateQuantity, onRemoveItem }) => {
  const total = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <CartItem
            key={item.product.id}
            item={item}
            onUpdateQuantity={onUpdateQuantity}
            onRemove={onRemoveItem}
          />
        ))}
      </div>
      <div className="mt-6 pt-6 border-t">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">Total:</span>
          <span className="text-price">${total.toFixed(2)}</span>
        </div>
        <button className="w-full btn-primary mt-4">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
