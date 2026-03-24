import React from 'react';
import './ProductCard.css';
import { Star, ShoppingCart, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    category: string;
    price: number;
    originalPrice: number;
    discount: string;
    rating: number;
    reviews: number;
    image: string;
  };
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="product-card">
      <div className="pc-image-wrapper">
        <div className="pc-discount">{product.discount}</div>
        <img src={product.image} alt={product.name} className="pc-img" />
        <div className="pc-category-tag">{product.category}</div>
        <div className="pc-actions">
           <button className="pc-action-btn"><ShoppingCart size={16} /></button>
        </div>
      </div>
      <div className="pc-content">
        <div className="pc-rating">
          <Star size={14} fill="var(--secondary)" color="var(--secondary)" />
          <span>{product.rating} ({product.reviews})</span>
        </div>
        <Link href={`/product/${product.id}`} className="pc-title">{product.name}</Link>
        <div className="pc-pricing">
          <span className="pc-price">₹{product.price.toLocaleString()}</span>
          <span className="pc-old-price">₹{product.originalPrice.toLocaleString()}</span>
        </div>
        <Link href={`/product/${product.id}`} className="pc-view-btn">
          View Details <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};
