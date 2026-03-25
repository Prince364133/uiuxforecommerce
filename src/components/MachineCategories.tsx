'use client';

import React from 'react';
import { 
  Milk, Sprout, Hammer, Sun, 
  PawPrint, Wrench, Droplets, Shield,
  ChevronRight
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './MachineCategories.css';

export const MachineCategories = () => {
  const { t } = useTranslation('common');

  const categories = [
    { icon: Milk, key: 'livestock', bg: '#fdf2f8' },
    { icon: Sprout, key: 'agri', bg: '#f0fdf4' },
    { icon: Hammer, key: 'machines', bg: '#fffbeb' },
    { icon: PawPrint, key: 'poultry', bg: '#fef2f2' },
    { icon: Droplets, key: 'cotton', bg: '#eff6ff' },
    { icon: PawPrint, key: 'animal', bg: '#f8fafc' },
    { icon: Sun, key: 'solar', bg: '#fff7ed' },
    { icon: Shield, key: 'protection', bg: '#f0fdfa' },
  ];

  return (
    <section className="machine-categories container">
      <div className="mc-header">
        <div className="mc-title">
          <Wrench className="mc-header-icon" />
          <h2>{t('categories.machines.title') || "Agricultural Machinery"}</h2>
        </div>
        <button className="mc-view-all">
          <span>View All</span>
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="mc-grid">
        {categories.map((cat, i) => (
          <div key={i} className="mc-item">
            <div className="mc-icon-wrap" style={{ background: cat.bg }}>
              <cat.icon className="mc-icon" size={28} />
            </div>
            <span className="mc-label">{t(`categories.machines.labels.${cat.key}`) || cat.key}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
