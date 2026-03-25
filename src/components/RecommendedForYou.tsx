'use client';

import React, { useState } from 'react';
import './RecommendedForYou.css';
import { Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const RecommendedForYou = () => {
  const { t } = useTranslation('common');
  const [activeFilter, setActiveFilter] = useState('all');

  const RECOMMENDED = [
    {
      id: 1,
      category: t('recommended.items.1.cat'),
      title: t('recommended.items.1.title'),
      price: '₹850',
      image: '/products/hybrid_cotton.png',
      filter: 'seeds'
    },
    {
      id: 2,
      category: t('recommended.items.2.cat'),
      title: t('recommended.items.2.title'),
      price: '₹3,200',
      image: '/products/moisture_meter.png',
      filter: 'tools'
    },
    {
      id: 3,
      category: t('recommended.items.3.cat'),
      title: t('recommended.items.3.title'),
      price: '₹1,150',
      image: '/products/nitro_plus.png',
      filter: 'nutrients'
    },
    {
      id: 4,
      category: t('recommended.items.4.cat'),
      title: t('recommended.items.4.title'),
      price: '₹2,499',
      image: '/products/pruning_kit.png',
      filter: 'tools'
    }
  ];

  const FILTERS = [
    { id: 'all', label: t('recommended.filters.all') },
    { id: 'seeds', label: t('recommended.filters.seeds') },
    { id: 'pesticides', label: t('recommended.filters.pesticides') },
    { id: 'tools', label: t('recommended.filters.tools') }
  ];

  const filteredProducts = activeFilter === 'all' 
    ? RECOMMENDED 
    : RECOMMENDED.filter(p => p.filter === activeFilter);

  return (
    <section className="recommended-for-you container">
      <div className="rfy-container">
        <div className="rfy-header">
          <div className="rfy-title">
            <h2>{t('recommended.title')}</h2>
            <p>{t('recommended.desc')}</p>
          </div>
          <div className="rfy-filters">
            {FILTERS.map((f) => (
              <button 
                key={f.id}
                className={`filter-btn ${activeFilter === f.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="rfy-scroll">
          {filteredProducts.map((product) => (
            <div key={product.id} className="rfy-card" data-cat={product.filter}>
              <div className="rfy-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="rfy-info">
                <span className="rfy-cat">{product.category}</span>
                <h4>{product.title}</h4>
              </div>
              <div className="rfy-footer">
                <span className="rfy-price">{product.price}</span>
                <button className="add-btn"><Plus size={18} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
