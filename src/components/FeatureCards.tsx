'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Brain, TrendingUp, ChevronRight } from 'lucide-react';
import './FeatureCards.css';

export const FeatureCards = () => {
  const { t } = useTranslation('common');

  return (
    <section className="feature-cards container">
      <div className="feature-card ai-card">
        <div className="feature-content">
          <div className="feature-icon-header">
            <div className="icon-circle bg-green">
              <Brain size={20} />
            </div>
          </div>
          <h3>{t('features.agri_ai.title')}</h3>
          <p>{t('features.agri_ai.desc')}</p>
          
          <div className="ai-prompt-box">
             <p>"{t('features.agri_ai.prompt')}"</p>
             <button className="prompt-btn"><ChevronRight size={18} /></button>
          </div>
        </div>
        <div className="feature-bg">
          <img src="/assets/agri_ai_card.png" alt="AgriAI Assistant" />
        </div>
      </div>

      <div className="feature-card valuator-card">
        <div className="feature-content">
          <div className="feature-icon-header">
            <div className="icon-circle bg-orange">
              <TrendingUp size={20} />
            </div>
          </div>
          <h3>{t('features.valuator.title')}</h3>
          <p>{t('features.valuator.desc')}</p>
          
          <button className="text-btn">
            {t('features.valuator.action')} <ChevronRight size={16} />
          </button>
        </div>
        <div className="feature-bg tractor-bg">
          <img src="/assets/valuator_card.png" alt="Asset Valuator" />
        </div>
      </div>
    </section>
  );
};
