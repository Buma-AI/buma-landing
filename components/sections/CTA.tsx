'use client';

import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import { useState } from 'react';

function CTA() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setEmail('');
    // Handle success (show message, etc.)
  };

  return (
    <section 
      id="cta" 
      className="py-20 relative overflow-hidden bg-primary-600-solid"
      style={{
        backgroundColor: '#E55A2B', // primary-600 - fallback
      }}
    >
      {/* Solid orange background with pattern */}
      <div 
        className="absolute inset-0 bg-primary-600-solid"
        style={{
          backgroundColor: '#E55A2B', // primary-600 - fallback
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_70%)]" />
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/8 rounded-full blur-3xl" />
      </div>
      
      {/* Grid pattern for orange section */}
      <div className="grid-pattern-orange" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-4xl mx-auto"
          >
            {/* Title with icon - bigger */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <Rocket className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2.5} />
              <h3 
                className="font-black text-2xl sm:text-3xl lg:text-4xl text-white"
                style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}
              >
                Rejoignez la liste d&apos;attente
              </h3>
            </div>
            
            {/* Simple form - bigger */}
            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex flex-col sm:flex-row gap-4 items-stretch mb-6">
                {/* Email input - large format, bigger */}
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 rounded-xl border-2 border-white/30 bg-white/20 backdrop-blur-md px-6 py-5 text-lg font-medium text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all"
                  style={{
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  }}
                  disabled={isSubmitting}
                />
                
                {/* Button - orange text on white background, bigger */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-primary-600 font-bold text-lg px-8 py-5 rounded-xl hover:bg-white/95 transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  style={{
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  {isSubmitting ? 'Envoi...' : 'Rejoindre'}
                </button>
              </div>
              
              {/* Benefits - aligned horizontally below button, bigger */}
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-5 text-white">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 bg-white rounded-full shrink-0" style={{ boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }} />
                  <span 
                    className="text-base sm:text-lg font-semibold"
                    style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}
                  >
                    Accès prioritaire au lancement
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 bg-white rounded-full shrink-0" style={{ boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }} />
                  <span 
                    className="text-base sm:text-lg font-semibold"
                    style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}
                  >
                    Tarif préférentiel (-30%)
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 bg-white rounded-full shrink-0" style={{ boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }} />
                  <span 
                    className="text-base sm:text-lg font-semibold"
                    style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}
                  >
                    Essai gratuit 14 jours
                  </span>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
