import React from 'react';
import { PRODUCTS } from '@/lib/mock-data';
import { NavBar } from '@/components/NavBar';
import { Star, ShieldCheck, Truck, RefreshCcw, ShoppingCart, Zap, ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import '../product-page.css';

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="error-page container">
        <h1>Product Not Found</h1>
        <Link href="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <main className="product-page-wrapper">
      <NavBar />
      
      <div className="container breadcrumbs">
        <Link href="/"><ArrowLeft size={16} /> Back to Collection</Link>
        <span>/</span>
        <span className="current">{product.category}</span>
        <span>/</span>
        <span className="current">{product.name}</span>
      </div>

      <section className="product-layout container">
        <div className="product-gallery">
          <div className="main-image glass">
            <div className="image-placeholder">
              <span className="badge">FULL HD VIEW</span>
              <div className="placeholder-content">
                <h2>{product.name}</h2>
                <p>360° Inspection Ready</p>
              </div>
            </div>
          </div>
          <div className="gallery-thumbs">
            {[1, 2, 3].map(i => (
              <div key={i} className="thumb glass"></div>
            ))}
          </div>
        </div>

        <div className="product-info">
          <div className="info-header">
            <span className="category-tag">{product.category}</span>
            <h1>{product.name}</h1>
            <div className="rating-info">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill={i < Math.floor(product.rating) ? "var(--secondary)" : "transparent"} color="var(--secondary)" />
                ))}
              </div>
              <span className="reviews">{product.rating} Rating • {product.reviews} Verified Reviews</span>
            </div>
          </div>

          <div className="pricing-info">
            <div className="price-row">
              <span className="main-price">₹{product.price.toLocaleString()}</span>
              <span className="discount-badge">{product.discount}</span>
            </div>
            <div className="old-price-row">
              <span className="label">M.R.P:</span>
              <span className="old-val">₹{product.originalPrice.toLocaleString()}</span>
              <span className="savings">You Save: ₹{(product.originalPrice - product.price).toLocaleString()}</span>
            </div>
            <p className="taxes-txt">Inclusive of all taxes</p>
          </div>

          <div className="description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>

          <div className="features-list">
             <h3>Key Specifications</h3>
             <ul>
               {product.features?.map((f, i) => (
                 <li key={i}><CheckCircle size={16} /> {f}</li>
               ))}
             </ul>
          </div>

          <div className="action-buttons">
            <button className="btn btn-primary buy-btn">
              <Zap size={20} /> Buy It Now
            </button>
            <button className="btn btn-outline cart-btn">
              <ShoppingCart size={20} /> Add to Cart
            </button>
          </div>

          <div className="trust-badges">
            <div className="trust-item">
              <ShieldCheck size={24} />
              <span>1 Year Warranty</span>
            </div>
            <div className="trust-item">
              <Truck size={24} />
              <span>Free Logistics</span>
            </div>
            <div className="trust-item">
              <RefreshCcw size={24} />
              <span>7 Day Return</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
