'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, CheckCircle2 } from 'lucide-react';

const badges = [
  {
    icon: Shield,
    text: 'RGPD Compliant',
    color: 'bg-success/10 text-success',
  },
  {
    icon: Lock,
    text: 'Protection des données mineurs',
    color: 'bg-info/10 text-info',
  },
  {
    icon: CheckCircle2,
    text: 'Conforme Éducation Nationale',
    color: 'bg-primary/10 text-primary',
  },
];

function Security() {
  return (
    <section className="section-transition white-section-bg py-16 bg-gradient-to-br from-primary-50 via-white to-primary-50 relative">
      {/* Moderate orange shadow background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/6 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary-500/6 rounded-full blur-3xl" />
      </div>
      
      {/* Grid pattern */}
      <div className="grid-pattern" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-8"
          >
            <div className="inline-block mb-4">
              <span className="bg-primary-100 text-primary-700 px-4 py-1.5 rounded-full text-sm font-semibold">
                Sécurité
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary mb-4 leading-tight">
              Sécurité et conformité :{' '}
              <span className="text-primary-600">nos engagements</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-10 max-w-5xl mx-auto">
            {badges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="neumorphism-card flex items-center gap-3 px-6 py-4 rounded-xl font-bold transition-all duration-300 w-full"
                  style={{
                    background: '#FFFFFF',
                    color: badge.color.includes('success') ? '#10B981' :
                           badge.color.includes('info') ? '#3B82F6' :
                           '#FF6B35',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05) translateY(-4px)';
                    e.currentTarget.style.boxShadow = 
                      '12px 12px 24px rgba(0, 0, 0, 0.15), -8px -8px 16px rgba(255, 255, 255, 0.8), 0 0 0 1px rgba(255, 107, 53, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) translateY(0)';
                    e.currentTarget.style.boxShadow = 
                      '8px 8px 16px rgba(0, 0, 0, 0.12), -8px -8px 16px rgba(255, 255, 255, 0.8), 0 1px 2px rgba(0, 0, 0, 0.05)';
                  }}
                >
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: badge.color.includes('success') ? '#10B981' :
                                 badge.color.includes('info') ? '#3B82F6' :
                                 '#FF6B35',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    }}
                  >
                    <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <span className="text-base text-center flex-1">{badge.text}</span>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-base text-text-secondary leading-relaxed mb-5"
          >
            Vos données ne sont jamais revendues. Votre enfant est protégé. Le contenu suit scrupuleusement le programme officiel.
          </motion.p>

          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            href="#"
            className="block text-center text-base text-primary-600 font-semibold hover:text-primary-700 hover:underline transition-colors"
          >
            En savoir plus sur notre politique de confidentialité
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default Security;
