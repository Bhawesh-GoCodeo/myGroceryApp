import { Product } from './types/product';

export const products: Product[] = [
  {
    id: 1,
    name: "Fresh Organic Bananas",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=400",
    category: "Fruits",
    description: "Sweet and ripe organic bananas",
    unit: "bunch"
  },
  {
    id: 2,
    name: "Red Bell Peppers",
    price: 1.49,
    image: "https://images.unsplash.com/photo-1592578629295-37b59344039e?auto=format&fit=crop&w=400",
    category: "Vegetables",
    description: "Fresh crispy red bell peppers",
    unit: "piece"
  },
  // Add more products as needed
];
