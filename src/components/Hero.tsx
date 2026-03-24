import React from 'react';
import './Hero.css';
import { ArrowRight, Leaf, Shield, Timer } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-layout">
        <div className="hero-content">
          <div className="hero-badge">
            <Leaf size={14} />
            <span>Redefining Agri-Commerce</span>
          </div>
          <h1>Empowering Modern <span>Agriculture</span></h1>
          <p>
            Experience premium equipment and aromatic essences curated for the 
            forward-thinking professional. Scalable solutions for ultimate yield.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">
              Explore Collection <ArrowRight size={18} />
            </button>
            <button className="btn btn-outline">
              Learn More
            </button>
          </div>
          <div className="hero-features">
            <div className="h-feat">
              <Shield size={20} />
              <span>Certified Quality</span>
            </div>
            <div className="h-feat">
              <Timer size={20} />
              <span>Express Delivery</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-circle main-circle"></div>
          <div className="visual-circle accent-circle"></div>
          <div className="visual-image-container glass">
             <img 
               src="/products/agromatic_harvester_hero_1774354093455.png" 
               alt="Agromatic Pro Harvester" 
               style={{ width: '100%', height: '100%', objectFit: 'cover' }}
             />
             <div className="visual-overlay">
               <h2>AGROMATIC <span>PRO</span></h2>
               <p>The Future of Farming</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
