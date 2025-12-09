'use client';

import { motion } from 'framer-motion';
import { FileText, Brain, MessageSquare, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Exercice ou Question',
    description: 'Votre enfant fait un exercice ou pose une question',
    color: '#2563EB', // Bleu professionnel
    gradient: ['#2563EB', '#1D4ED8'],
  },
  {
    icon: Brain,
    title: 'Analyse et Diagnostic',
    description: 'Buma identifie les points de blocage et les lacunes',
    color: '#7C3AED', // Violet professionnel
    gradient: ['#7C3AED', '#6D28D9'],
  },
  {
    icon: MessageSquare,
    title: 'Guidance et Explication',
    description: 'Buma guide avec patience, pose des questions, explique le chemin (pas la réponse)',
    color: '#D04A1B', // Orange professionnel
    gradient: ['#D04A1B', '#B83A0F'],
  },
  {
    icon: TrendingUp,
    title: 'Progression et Confiance',
    description: 'Votre enfant comprend, progresse et reprend confiance',
    color: '#059669', // Vert professionnel
    gradient: ['#059669', '#047857'],
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="section-transition white-section-bg py-16 bg-white relative">
      {/* Subtle blue/purple shadow background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-purple-500/8 rounded-full blur-3xl" />
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
              Fonctionnement
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary mb-4 leading-tight">
            Comment BumaAI{' '}
            <span className="text-primary-600">accompagne</span> votre enfant
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop: Horizontal Timeline with Animated Progress */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline background line */}
              <div className="absolute top-16 left-0 right-0 h-2 bg-gray-200 rounded-full" />
              
              {/* Animated progress line */}
              <motion.div
                className="absolute top-16 left-0 h-2 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                style={{
                  background: 'linear-gradient(90deg, #2563EB, #7C3AED, #D04A1B, #059669)',
                }}
              />
              
              <div className="grid grid-cols-4 gap-8 relative">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="relative"
                      whileHover={{ y: -8, scale: 1.02 }}
                    >
                      <div 
                        className="neumorphism-card rounded-2xl p-6 lg:p-8 transition-all duration-300 text-center h-full"
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
                        <motion.div 
                          className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-3 border-white flex items-center justify-center z-20 bg-white"
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.2 + 0.3, type: 'spring' }}
                        >
                          <span 
                            className="font-black text-lg"
                            style={{ color: step.color }}
                          >
                            {index + 1}
                          </span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center justify-center mx-auto mb-4 mt-3 relative z-10"
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.2 + 0.4, type: 'spring' }}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                        >
                          <Icon 
                            className="w-10 h-10" 
                            style={{ color: step.color }}
                            strokeWidth={3}
                          />
                        </motion.div>
                        <h3 className="text-xl lg:text-2xl font-black text-text-primary mb-3 leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-text-secondary leading-relaxed text-base">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile: Vertical Timeline with Animated Progress */}
          <div className="lg:hidden space-y-8 relative">
            {/* Vertical progress line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />
            <motion.div
              className="absolute left-6 top-0 w-0.5"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              style={{
                background: 'linear-gradient(180deg, #2563EB, #7C3AED, #D04A1B, #059669)',
              }}
            />
            
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex gap-4 relative"
                >
                  <div className="flex flex-col items-center relative z-10">
                    <motion.div
                      className="flex items-center justify-center flex-shrink-0"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.3, type: 'spring' }}
                    >
                      <Icon 
                        className="w-7 h-7" 
                        style={{ color: step.color }}
                        strokeWidth={3}
                      />
                    </motion.div>
                  </div>
                  <motion.div
                    className="flex-1 bg-white rounded-xl p-4 shadow-md border border-gray-100"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs font-bold border-2"
                        style={{
                          color: step.color,
                          borderColor: step.color,
                        }}
                      >
                        {index + 1}
                      </span>
                      <h3 className="text-lg font-semibold text-text-primary">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-text-secondary text-sm">
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 text-center text-text-secondary text-sm italic"
          >
            Votre enfant peut aussi scanner ses devoirs pour une correction détaillée.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
