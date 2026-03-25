import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Download, Users, TrendingUp } from 'lucide-react';
import './Insights.css';

export const Insights = () => {
  const { t } = useTranslation('common');

  return (
    <section className="insights-section container">
      <div className="insights-grid">
        {/* Card 1: Yield Analytics */}
        <div className="insight-card dark">
          <div className="card-top">
            <TrendingUp className="card-icon" size={32} />
          </div>
          <div className="card-body">
            <h3>{t('insights.yield.title')}</h3>
            <p>{t('insights.yield.desc')}</p>
          </div>
          <div className="card-footer">
            <button className="insight-btn-text">
              {t('insights.yield.action')} <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Card 2: Soil Report */}
        <div className="insight-card light">
          <div className="card-body">
            <h3>{t('insights.soil.title')}</h3>
            <p>{t('insights.soil.desc')}</p>
            <div className="soil-graph-wrapper">
              <img src="/banners/agromatic_banner_5_lab.png" alt="Soil Report Graph" />
            </div>
          </div>
          <div className="card-footer">
            <button className="insight-btn-text secondary">
              {t('insights.soil.action')} <Download size={18} />
            </button>
          </div>
        </div>

        {/* Card 3: Community */}
        <div className="insight-card light community">
          <div className="card-body">
            <h3>{t('insights.community.title')}</h3>
            <p>{t('insights.community.desc')}</p>
            <div className="community-stats">
              <div className="avatar-group">
                <div className="avatar" style={{ backgroundColor: '#e2e8f0' }}></div>
                <div className="avatar" style={{ backgroundColor: '#cbd5e1' }}></div>
                <div className="avatar" style={{ backgroundColor: '#94a3b8' }}></div>
                <div className="avatar count">+49k</div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button className="insight-btn-solid">
              {t('insights.community.action')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
