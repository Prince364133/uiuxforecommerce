'use client';

import React from 'react';
import './HarvestCombos.css';
import { useTranslation } from 'react-i18next';

export const HarvestCombos = () => {
  const { t } = useTranslation('common');

  const COMBOS = [
    {
      id: 1,
      tag: t('harvest_combos.items.1.tag'),
      tagColor: 'orange',
      title: t('harvest_combos.items.1.title'),
      image: '/banners/master_pack.png',
      currentPrice: '₹12,499',
      oldPrice: '₹16,665',
      save: '₹4,166'
    },
    {
      id: 2,
      tag: t('harvest_combos.items.2.tag'),
      tagColor: 'orange',
      title: t('harvest_combos.items.2.title'),
      image: '/banners/pesticide_bundle.png',
      currentPrice: '₹8,750',
      oldPrice: '₹10,299',
      save: '₹1,549'
    },
    {
      id: 3,
      tag: t('harvest_combos.items.3.tag'),
      tagColor: 'red',
      title: t('harvest_combos.items.3.title'),
      image: '/banners/drip_kit.png',
      currentPrice: '₹24,999',
      oldPrice: '₹32,000',
      save: '₹7,001'
    }
  ];

  return (
    <section className="harvest-combos">
      <div className="container">
        <div className="section-header">
          <h2>{t('harvest_combos.title')}</h2>
          <span className="badge-limited">{t('harvest_combos.limited')}</span>
        </div>
        
        <div className="combos-grid">
          {COMBOS.map((combo) => (
            <div key={combo.id} className="combo-card">
              <div className="combo-image">
                <img src={combo.image} alt={combo.title} />
                <div className={`combo-tag ${combo.tagColor}`}>{combo.tag}</div>
              </div>
              <div className="combo-info">
                <h3>{combo.title}</h3>
                <div className="combo-pricing">
                  <span className="current-price">{combo.currentPrice}</span>
                  <span className="old-price">{combo.oldPrice}</span>
                  <span className="save-amount">{t('harvest_combos.save')} {combo.save}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
