'use client';

import React, { useState } from 'react';
import { NavBar } from '@/components/NavBar';
import { HeroCarousel } from '@/components/HeroCarousel';
import { QuickSearch } from '@/components/QuickSearch';
import { MachineCategories } from '@/components/MachineCategories';
import { FeatureHighlights } from '@/components/FeatureHighlights';
import { HarvestCombos } from '@/components/HarvestCombos';
import { RecommendedForYou } from '@/components/RecommendedForYou';
import { AdBanner } from '@/components/AdBanner';
import { BestSellers } from '@/components/BestSellers';
import { Insights } from '@/components/Insights';
import { ProductCard } from '@/components/ProductCard';
import { FooterNote } from '@/components/FooterNote';
import { Footer } from '@/components/Footer';
import { ChatBot } from '@/components/ChatBot';
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
      <QuickSearch />
      <MachineCategories />
      <FeatureHighlights />
      <RecommendedForYou />
      <HarvestCombos />

      <AdBanner />
      
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

        <div className="products-container">
          <div className="products-scroll">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <BestSellers />
      <Insights />

      <FooterNote />
      <Footer />

      {/* AI Floating ChatBot */}
      <ChatBot />

      <style jsx>{`
        .products-section {
          padding: 6rem 0;
        }
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 3.5rem;
          gap: 2rem;
        }
// ... rest of styles
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

        .products-container {
          position: relative;
          margin-top: 2rem;
        }
        .products-scroll {
          display: flex;
          gap: 1.5rem;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding: 1rem 0 2rem;
          scrollbar-width: none;
        }
        .products-scroll::-webkit-scrollbar { display: none; }
        .products-scroll > :global(*) {
          flex: 0 0 calc(25% - 1.15rem);
          scroll-snap-align: start;
        }

        @media (max-width: 1024px) {
          .products-scroll > :global(*) { flex: 0 0 75%; }
          .cat-tab {
            padding: 0.75rem 1.25rem;
            font-size: 0.95rem;
            border-width: 2px;
          }
          .cat-tab.active {
            box-shadow: 0 4px 12px rgba(0, 90, 50, 0.2);
          }
        }
      `}</style>
    </main>
  );
}
