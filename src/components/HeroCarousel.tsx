'use client';

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './HeroCarousel.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BANNERS = [
  { id: 1, image: '/banners/hero_smart.png', key: 'banner1' },
  { id: 2, image: '/banners/hero_premium.png', key: 'banner2' },
  { id: 3, image: '/banners/agromatic_banner_3_tech_1774354918293.png', key: 'banner3' }
];

export const HeroCarousel = () => {
  const { t } = useTranslation('common');
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % BANNERS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % BANNERS.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + BANNERS.length) % BANNERS.length);

  return (
    <section className="hero-carousel">
      <div className="container">
        <div className="carousel-container">
          <div 
            className="carousel-track" 
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {BANNERS.map((banner) => (
              <div key={banner.id} className="carousel-slide">
                <img src={banner.image} alt={t(`hero.${banner.key}.title`)} />
                <div className="carousel-overlay">
                  <div className="container">
                    <div className="slide-content">
                      <h2>{t(`hero.${banner.key}.title`)}</h2>
                      <p>{t(`hero.${banner.key}.subtitle`)}</p>
                      <button className="btn btn-primary">{t('hero.shop_now')}</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-control prev" onClick={prevSlide}><ChevronLeft /></button>
          <button className="carousel-control next" onClick={nextSlide}><ChevronRight /></button>

          <div className="carousel-indicators">
            {BANNERS.map((_, i) => (
              <div 
                key={i} 
                className={`dot ${current === i ? 'active' : ''}`}
                onClick={() => setCurrent(i)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
