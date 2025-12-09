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
    <section className="section-transition white-section-bg py-20 bg-blue-50/20 relative">
      {/* Subtle colored shadow background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl" />
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
              Nos Piliers
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary mb-4 leading-tight">
            Comment BumaAI{' '}
            <span className="text-primary-600">tient sa promesse</span>
          </h2>
        </motion.div>

        <div className="space-y-3 max-w-5xl mx-auto">
          {PILLARS.map((pillar, index) => {
            const Icon = iconMap[pillar.icon as keyof typeof iconMap] || defaultIcon;
            const bgColors = [
              'bg-white',
              'bg-blue-50/30',
              'bg-white',
              'bg-green-50/30',
            ];
            // Varied colors for icons: Orange professionnel, Blue, Green, Purple
            const iconColors = [
              { color: '#D04A1B', gradient: ['#D04A1B', '#B83A0F'] }, // Orange professionnel
              { color: '#2563EB', gradient: ['#2563EB', '#1D4ED8'] }, // Bleu professionnel
              { color: '#059669', gradient: ['#059669', '#047857'] }, // Vert professionnel
              { color: '#7C3AED', gradient: ['#7C3AED', '#6D28D9'] }, // Violet professionnel
            ];
            const iconColor = iconColors[index % iconColors.length];
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`${bgColors[index % bgColors.length]} rounded-xl p-6 transition-all duration-300 group`}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(4px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                  >
                    <Icon 
                      className="w-8 h-8" 
                      style={{ color: iconColor.color }}
                      strokeWidth={3}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-text-primary mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed text-base">
                      {pillar.description}
                    </p>
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
