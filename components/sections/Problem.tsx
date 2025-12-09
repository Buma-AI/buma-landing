'use client';

import { motion } from 'framer-motion';
import { Clock, DollarSign, Smartphone } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: '20h. Les devoirs tournent au conflit.',
    description: 'Vous ne pouvez plus l\'aider. Il panique.',
    color: '#EF4444', // Red
    gradient: ['#EF4444', '#DC2626'],
  },
  {
    icon: DollarSign,
    title: 'Un professeur particulier ? 40-60€/h.',
    description: 'Trop cher pour un suivi régulier.',
    color: '#F59E0B', // Amber
    gradient: ['#F59E0B', '#D97706'],
  },
  {
    icon: Smartphone,
    title: 'Il passe des heures sur son téléphone.',
    description: 'Du temps perdu au lieu d\'apprendre.',
    color: '#2563EB', // Bleu professionnel
    gradient: ['#2563EB', '#1D4ED8'],
  },
];

function Problem() {
  return (
    <section className="section-transition white-section-bg py-16 bg-white relative">
      {/* Subtle gray shadow background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gray-500/6 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gray-500/6 rounded-full blur-3xl" />
      </div>
      
      {/* Grid pattern */}
      <div className="grid-pattern" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary mb-6 leading-tight">
            Vous reconnaissez cette situation ?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div 
                  className="neumorphism-card rounded-2xl p-6 lg:p-8 transition-all duration-300 h-full"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = 
                      '12px 12px 24px rgba(0, 0, 0, 0.15), -8px -8px 16px rgba(255, 255, 255, 0.8), 0 0 0 1px rgba(0, 0, 0, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 
                      '8px 8px 16px rgba(0, 0, 0, 0.12), -8px -8px 16px rgba(255, 255, 255, 0.8), 0 1px 2px rgba(0, 0, 0, 0.05)';
                  }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div 
                      className="flex items-center justify-center"
                    >
                      <Icon 
                        className="w-12 h-12" 
                        style={{ color: problem.color }}
                        strokeWidth={3}
                      />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-black text-text-primary leading-tight">
                      {problem.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed text-base">
                      {problem.description}
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

export default Problem;

