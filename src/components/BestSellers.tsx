'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { BEST_SELLERS } from '@/lib/mock-data';
import './BestSellers.css';

export const BestSellers = () => {
  const { t } = useTranslation('common');

  return (
    <section className="best-sellers container">
      <div className="bs-header">
        <h2>🔥 {t('best_sellers.title')}</h2>
      </div>

      <div className="bs-grid">
        {BEST_SELLERS.map((product) => (
          <div key={product.id} className="bs-card">
            <div className="bs-badge">{product.discount}</div>
            <div className="bs-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="bs-info">
              <h3>{product.name}</h3>
              <div className="bs-pricing">
                <span className="current-price">₹{product.price.toLocaleString()}</span>
                <span className="old-price">₹{product.originalPrice.toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
