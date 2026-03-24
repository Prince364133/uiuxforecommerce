'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import './AdBanner.css';

export const AdBanner = () => {
  const { t } = useTranslation('common');

  return (
    <section className="ad-banner container">
      <div className="ad-content typography-ad">
        <div className="ad-left">
          <span className="ad-label">STAKEHOLDER PREVIEW</span>
          <h2>TRANSFORMING <span>INDIAN AGRICULTURE</span></h2>
          <p>The Agromatic Ecosystem: Integrating Smart AI, Precision Engineering, and Direct Marketplace Access.</p>
        </div>
        <div className="ad-right">
           <div className="ad-promo">
              <div className="promo-pill">EST. 2026</div>
              <div className="promo-text">
                <h3>MEGA HARVEST SALE</h3>
                <p>30% DISCOUNT ON SMART TOOLS</p>
              </div>
           </div>
           <button className="btn btn-primary white">Explore Framework</button>
        </div>
        
        {/* Decorative Graphic Elements (CSS only) */}
        <div className="ad-decoration d1"></div>
        <div className="ad-decoration d2"></div>
      </div>
    </section>
  );
};
