'use client';

import { motion } from 'framer-motion';
import { Sparkles, Award, BookOpen, Heart } from 'lucide-react';
import { PILLARS } from '@/lib/constants';

const iconMap = {
  target: Sparkles,
  trophy: Award,
  'book-check': BookOpen,
  heart: Heart,
};

const defaultIcon = Sparkles;

function Pillars() {
  return (
    <section className="section-transition white-section-bg py-16 bg-gradient-to-br from-primary-50 via-white to-primary-50 relative">
      {/* Moderate orange shadow background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/6 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary-500/6 rounded-full blur-3xl" />
      </div>
      
      {/* Grid pattern */}
      <div className="grid-pattern" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <div className="inline-block mb-4">
            <span className="bg-primary-100 text-primary-700 px-4 py-1.5 rounded-full text-sm font-semibold">
              Nos Piliers
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary mb-4 leading-tight">
            Comment BumaAI{' '}
            <span className="text-primary-600">tient sa promesse</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {PILLARS.map((pillar, index) => {
            const Icon = iconMap[pillar.icon as keyof typeof iconMap] || defaultIcon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div 
                  className="neumorphism-card rounded-2xl p-6 lg:p-8 transition-all duration-300 h-full group"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = 
                      '12px 12px 24px rgba(0, 0, 0, 0.15), -8px -8px 16px rgba(255, 255, 255, 0.8), 0 0 0 1px rgba(255, 107, 53, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 
                      '8px 8px 16px rgba(0, 0, 0, 0.12), -8px -8px 16px rgba(255, 255, 255, 0.8), 0 1px 2px rgba(0, 0, 0, 0.05)';
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                      style={{
                        background: 'linear-gradient(135deg, #FF6B35 0%, #E55A2B 100%)',
                        boxShadow: '0 8px 16px rgba(255, 107, 53, 0.3)',
                      }}
                    >
                      <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-black text-text-primary mb-3">
                        {pillar.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed text-base">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Pillars;
