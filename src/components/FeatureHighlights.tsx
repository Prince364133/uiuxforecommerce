'use client';

import React from 'react';
import './FeatureHighlights.css';
import { Brain, TrendingUp, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const FeatureHighlights = () => {
  const { t } = useTranslation('common');

  return (
    <section className="feature-highlights container">
      <div className="fh-grid">
        {/* AI Assistant Card */}
        <div className="fh-card ai">
          <div className="fh-label">{t('features.agri_ai.label')}</div>
          <h3>{t('features.agri_ai.title')}</h3>
          <p>{t('features.agri_ai.desc')}</p>
          
          <button className="fh-btn">
            {t('features.agri_ai.action')} <ArrowRight size={18} />
          </button>
          
          <div className="fh-icon-bg">
            <Brain size={180} strokeWidth={0.5} opacity={0.2} />
          </div>
        </div>

        {/* Tractor Valuator Card */}
        <div className="fh-card valuator">
          <div className="fh-label">{t('features.valuator.label')}</div>
          <h3>{t('features.valuator.title')}</h3>
          <p>{t('features.valuator.desc')}</p>
          
          <button className="fh-btn">
            {t('features.valuator.action')} <ArrowRight size={18} />
          </button>
          
          <div className="fh-icon-bg">
            <TrendingUp size={180} strokeWidth={0.5} opacity={0.2} />
          </div>
        </div>
      </div>
    </section>
  );
};
