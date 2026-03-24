import React from 'react';
import './QuickCategories.css';
import { Sprout, Droplets, Hammer, Microscope } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const QUICK_CATS = [
  {
    title: 'Seeds',
    subtitle: '14 Active Varieties',
    icon: Sprout,
    color: '#00ffb722',
    iconColor: '#00a373'
  },
  {
    title: 'Irrigation',
    subtitle: '8 Sensor Nodes',
    icon: Droplets,
    color: '#ff910022',
    iconColor: '#a35d00'
  },
  {
    title: 'Equipment',
    subtitle: 'Fleet Standby',
    icon: Hammer,
    color: '#ff000022',
    iconColor: '#a30000'
  },
  {
    title: 'Soil Labs',
    subtitle: 'Latest: 2d ago',
    icon: Microscope,
    color: '#00d2ff22',
    iconColor: '#007ca3'
  }
];

export const QuickCategories = () => {
  const { t } = useTranslation('common');
  
  return (
    <section className="quick-categories container">
      <div className="qc-header">
        <h2>{t('quick_cats.title')}</h2>
        <a href="#" className="manage-all">{t('quick_cats.manage_all')}</a>
      </div>
      <div className="qc-grid">
        {QUICK_CATS.map((cat, i) => (
          <div key={i} className="qc-card">
            <div className="qc-icon-wrapper" style={{ backgroundColor: cat.color }}>
              <cat.icon size={24} color={cat.iconColor} />
            </div>
            <div className="qc-info">
              <h3>{cat.title}</h3>
              <p>{cat.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
