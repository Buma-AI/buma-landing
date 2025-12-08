'use client';

import { motion } from 'framer-motion';
import { UserCheck, TrendingUp, Smile } from 'lucide-react';
import { BENEFITS } from '@/lib/constants';

const iconMap = {
  'user-check': UserCheck,
  'trending-up': TrendingUp,
  smile: Smile,
};

function Benefits() {
  return (
    <section id="benefits" className="section-transition white-section-bg py-16 bg-gradient-to-br from-primary-50 via-white to-primary-50 relative">
      {/* Moderate orange shadow background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/6 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary-500/6 rounded-full blur-3xl" />
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
              Avantages
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary mb-4 leading-tight">
            Ce que BumaAI{' '}
            <span className="text-primary-600">apporte</span> à votre enfant
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {BENEFITS.map((benefit, index) => {
            const Icon = iconMap[benefit.icon as keyof typeof iconMap] || UserCheck;
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div 
                  className="neumorphism-card rounded-2xl p-6 lg:p-8 transition-all duration-300 h-full text-center group"
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
                  <div 
                    className="w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: 'linear-gradient(135deg, #FF6B35 0%, #E55A2B 100%)',
                      boxShadow: '0 8px 16px rgba(255, 107, 53, 0.3)',
                    }}
                  >
                    <Icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-black text-text-primary mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-base">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
