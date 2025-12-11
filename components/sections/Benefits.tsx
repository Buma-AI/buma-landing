'use client';

import { motion } from 'framer-motion';
import { UserCheck, TrendingUp, Smile } from 'lucide-react';
import { BENEFITS } from '@/lib/constants';

const iconMap = {
  'user-check': UserCheck,
  'trending-up': TrendingUp,
  smile: Smile,
};

export default function Benefits() {
  return (
    <section id="benefits" className="section-transition white-section-bg py-20 bg-white relative">
      {/* Subtle green shadow background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-green-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-3xl" />
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
            Ce que Buma{' '}
            <span className="text-primary-600">apporte</span> à votre enfant
          </h2>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 max-w-5xl mx-auto">
          {BENEFITS.map((benefit, index) => {
            const Icon = iconMap[benefit.icon as keyof typeof iconMap] || UserCheck;
            // Varied colors: Orange professionnel (primary), Blue, Green
            const iconColors = [
              { color: '#D04A1B', gradient: ['#D04A1B', '#B83A0F'] }, // Orange professionnel - primary
              { color: '#2563EB', gradient: ['#2563EB', '#1D4ED8'] }, // Bleu professionnel
              { color: '#059669', gradient: ['#059669', '#047857'] }, // Vert professionnel
            ];
            const iconColor = iconColors[index % iconColors.length];
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex-1"
              >
                <div 
                  className="bg-white rounded-xl p-6 text-center transition-all duration-300 group border-2 border-transparent"
                  style={{
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                    borderColor: index === 0 ? 'transparent' : 'transparent', // Orange border only for first
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = `0 8px 16px ${iconColor.color}20`;
                    if (index === 0) {
                      e.currentTarget.style.borderColor = '#D04A1B'; // Orange professionnel
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.06)';
                    e.currentTarget.style.borderColor = 'transparent';
                  }}
                >
                  <div 
                    className="flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  >
                    <Icon 
                      className="w-10 h-10" 
                      style={{ color: iconColor.color }}
                      strokeWidth={3}
                    />
                  </div>
                  <h3 className="text-lg font-black text-text-primary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
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
