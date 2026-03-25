'use client';

import React, { useState } from 'react';
import './RecommendedForYou.css';
import { Plus, Check, ShoppingBag, Leaf, Droplets, Shield, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const RecommendedForYou = () => {
  const { t } = useTranslation('common');
  const [activePhase, setActivePhase] = useState('sowing');
  const [selectedItems, setSelectedItems] = useState<number[]>([1, 2]);

  const RECOMMENDED = [
    {
      id: 1,
      category: "Premium Seeds",
      title: "Hybrid Cotton S-6",
      price: 850,
      image: '/products/hybrid_cotton.png',
      phase: 'sowing',
      match: 98,
      icon: <Leaf size={14} />
    },
    {
      id: 2,
      category: "Soil Tech",
      title: "Digital Moisture Meter",
      price: 3200,
      image: '/products/moisture_meter.png',
      phase: 'sowing',
      match: 95,
      icon: <Droplets size={14} />
    },
    {
      id: 3,
      category: "Nutrients",
      title: "Nitro-Plus 5L",
      price: 1150,
      image: '/products/nitro_plus.png',
      phase: 'growth',
      match: 92,
      icon: <Sparkles size={14} />
    },
    {
      id: 4,
      category: "Crop Defense",
      title: "Pro Pruning Kit",
      price: 2499,
      image: '/products/pruning_kit.png',
      phase: 'protection',
      match: 89,
      icon: <Shield size={14} />
    }
  ];

  const PHASES = [
    { id: 'sowing', label: "Phase 1: Sowing", icon: <Leaf size={16} /> },
    { id: 'growth', label: "Phase 2: Growth", icon: <Sparkles size={16} /> },
    { id: 'protection', label: "Phase 3: Protection", icon: <Shield size={16} /> }
  ];

  const toggleItem = (id: number) => {
    setSelectedItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const filteredProducts = RECOMMENDED.filter(p => p.phase === activePhase);
  const totalValue = RECOMMENDED.filter(p => selectedItems.includes(p.id)).reduce((sum, p) => sum + p.price, 0);

  return (
    <section className="recommended-for-you container">
      <div className="builder-header">
        <div className="builder-title-layer">
          <div className="builder-badge">PRECISION BUILDER</div>
          <h2>{t('recommended.title') || "Build Your 2024 Farm Strategy"}</h2>
          <p>Optimized for your soil profile in <strong>Pune, MH</strong></p>
        </div>
        <div className="builder-action-layer">
          <div className="bundle-summary-pill">
            <div className="summary-details">
              <span className="summary-count">{selectedItems.length} Products</span>
              <span className="summary-amount">₹{totalValue.toLocaleString()}</span>
            </div>
            <button className="bundle-add-btn">
              <ShoppingBag size={18} />
              <span>Add All to Cart</span>
              <div className="btn-save-tag">SAVE 15%</div>
            </button>
          </div>
        </div>
      </div>

      <div className="builder-phase-nav">
        {PHASES.map((p) => (
          <button 
            key={p.id}
            className={`phase-item ${activePhase === p.id ? 'active' : ''}`}
            onClick={() => setActivePhase(p.id)}
          >
            <div className="phase-icon-circle">{p.icon}</div>
            <span>{p.label}</span>
          </button>
        ))}
      </div>

      <div className="builder-direct-grid">
        {filteredProducts.map((product) => (
          <div 
            key={product.id} 
            className={`builder-product-card ${selectedItems.includes(product.id) ? 'is-selected' : ''}`}
            onClick={() => toggleItem(product.id)}
          >
            <div className="card-match-badge">
              <Sparkles size={12} />
              <span>{product.match}% Match</span>
            </div>
            <div className="card-visual">
              <img src={product.image} alt={product.title} />
              <div className="card-select-check">
                <Check size={24} />
              </div>
            </div>
            <div className="card-details">
              <div className="card-top-row">
                {product.icon}
                <span className="card-cat-label">{product.category}</span>
              </div>
              <h4 className="card-name">{product.title}</h4>
              <div className="card-bottom-row">
                <span className="card-price-val">₹{product.price.toLocaleString()}</span>
                <div className={`card-toggle-btn ${selectedItems.includes(product.id) ? 'checked' : ''}`}>
                  {selectedItems.includes(product.id) ? <Check size={18} /> : <Plus size={18} />}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
