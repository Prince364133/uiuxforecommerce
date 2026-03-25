'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { BEST_SELLERS } from '@/lib/mock-data';
import { ProductCard } from '@/components/ProductCard';
import { Sparkles } from 'lucide-react';
import './BestSellers.css';

export const BestSellers = () => {
  const { t } = useTranslation('common');

  return (
    <section className="best-sellers container">
      <div className="bs-header">
        <h2>
          <Sparkles className="bs-icon" size={28} />
          {t('best_sellers.title')}
        </h2>
      </div>

      <div className="bs-grid">
        {BEST_SELLERS.map((item) => {
          const product = {
            ...item,
            name: t(`best_sellers.items.${item.id}.name`)
          };
          return (
            <div key={item.id} className="bs-card-wrapper">
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
