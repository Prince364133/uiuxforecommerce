'use client';

import React from 'react';
import { Search, MapPin, SlidersHorizontal } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './QuickSearch.css';

export const QuickSearch = () => {
  const { t } = useTranslation('common');

  return (
    <div className="quick-search container">
      <div className="qs-wrapper">
        <div className="qs-main">
          <Search className="qs-icon search-icon" size={20} />
          <input 
            type="text" 
            placeholder={t('search.placeholder') || "Search for seeds, machines, or chemicals..."}
            className="qs-input"
          />
        </div>
        
        <div className="qs-divider"></div>
        
        <div className="qs-location">
          <MapPin className="qs-icon" size={20} />
          <span className="qs-loc-text">Pune, MH</span>
        </div>

        <button className="qs-filter-btn">
          <SlidersHorizontal size={18} />
          <span>Filters</span>
        </button>

        <button className="qs-submit-btn">
          {t('search.button') || "Search"}
        </button>
      </div>
    </div>
  );
};
