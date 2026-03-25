'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import './AdBanner.css';

export const AdBanner = () => {
  const { t } = useTranslation('common');

  return (
    <section className="ad-banner container">
      <div className="ad-content">
        <div className="ad-left">
          <div className="ad-pill">{t('ad.pill')}</div>
          <h2>
            {t('ad.title_part1')} <br />
            <span className="accent-text">{t('ad.title_part2')}</span>
          </h2>
          <p className="ad-desc">
            {t('ad.desc')}
          </p>
        </div>
        
        <div className="ad-right">
          <div className="ad-promo-box">
            <div className="promo-date">
              EST. 2026
              <span className="vertical-divider"></span>
            </div>
            <div className="promo-info">
              <h3>{t('ad.promo_title')}</h3>
              <p>{t('ad.promo_desc')}</p>
            </div>
          </div>
          <button className="ad-btn">{t('ad.btn')}</button>
        </div>
      </div>
    </section>
  );
};
