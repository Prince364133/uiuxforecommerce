'use client';

import React, { useState } from 'react';
import { NavBar } from '@/components/NavBar';
import { HeroCarousel } from '@/components/HeroCarousel';
import { QuickCategories } from '@/components/QuickCategories';
import { FeatureCards } from '@/components/FeatureCards'; // NEW
import { AdBanner } from '@/components/AdBanner'; // NEW
import { BestSellers } from '@/components/BestSellers'; // NEW
import { ProductCard } from '@/components/ProductCard';
import { ChatBot } from '@/components/ChatBot'; // NEW
import { PRODUCTS, CATEGORIES } from '@/lib/mock-data';
import { Layout, Settings, Droplets, Cpu, Sprout } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ICON_MAP: any = { Layout, Settings, Droplets, Cpu, Sprout };

export default function Home() {
  const { t } = useTranslation('common');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <main>
      <NavBar />
      <HeroCarousel />
      
      {/* Feature Highlight Section Below Hero */}
      <FeatureCards />
      
      <QuickCategories />
      
      <section className="products-section container">
        <div className="section-header">
          <div className="sh-left">
            <h2>{t('products.title')}</h2>
            <p>Curated agriculture and aromatic solutions.</p>
          </div>
          <div className="sh-right categories">
            {CATEGORIES.map(cat => {
              const Icon = ICON_MAP[cat.icon];
              return (
                <button 
                  key={cat.name} 
                  className={`cat-tab ${activeCategory === cat.name ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.name)}
                >
                  <Icon size={16} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-2 grid-3 grid-4">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Ad Space Section */}
      <AdBanner />

      {/* Best Sellers Section */}
      <BestSellers />

      <footer className="footer container">
        <div className="footer-content glass">
          <p>© 2026 Agromatic Store. Premium Agri-Tech Excellence.</p>
        </div>
      </footer>

      {/* AI Floating ChatBot */}
      <ChatBot />

      <style jsx>{`
        .products-section {
          padding: 4rem 0;
        }
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 3rem;
          gap: 2rem;
        }
        .sh-left h2 {
          font-size: 2.25rem;
          margin-bottom: 0.5rem;
          color: var(--foreground);
        }
        .sh-left p { color: var(--text-muted); font-size: 0.95rem; }
        
        .categories {
          display: flex;
          gap: 0.75rem;
          overflow-x: auto;
          padding-bottom: 0.5rem;
        }
        .cat-tab {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1rem;
          background: var(--surface);
          border: 1px solid var(--surface-border);
          border-radius: var(--radius-full);
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: var(--transition-normal);
          white-space: nowrap;
          color: var(--foreground);
        }
        .cat-tab.active {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
          box-shadow: var(--shadow-md);
        }
        .cat-tab:hover:not(.active) {
          background: rgba(0, 90, 50, 0.05);
          border-color: var(--primary);
        }

        .footer {
          padding: 4rem 1.5rem;
        }
        .footer-content {
          padding: 2rem;
          border-radius: var(--radius-lg);
          text-align: center;
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 500;
        }

        @media (max-width: 1024px) {
          .section-header {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }
      `}</style>
    </main>
  );
}
