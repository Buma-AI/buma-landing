'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Rocket } from 'lucide-react';
import { useState, FormEvent } from 'react';

function Hero() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Connecter à votre service d'email
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Email submitted:', email);
      setEmail('');
    } catch (error) {
      console.error('Error submitting email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-16 pb-12 bg-primary-600-solid"
      style={{
        backgroundColor: '#E55A2B', // primary-600 - fallback
      }}
    >
      {/* Transition gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-white/10 to-white pointer-events-none z-0" />
      {/* Solid orange background with pattern */}
      <div 
        className="absolute inset-0 bg-primary-600-solid"
        style={{
          backgroundColor: '#E55A2B', // primary-600 - fallback
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.15),transparent_50%)]" />
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-white/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-white/8 rounded-full blur-3xl" />
      </div>
      
      {/* Grid pattern for orange section */}
      <div className="grid-pattern-orange" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Title - Full width on top */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.1]"
              style={{
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.3), 0 2px 10px rgba(0, 0, 0, 0.2)',
              }}
            >
              Le professeur particulier{' '}
              <span style={{ color: '#FFF5F2' }}>de votre enfant</span>
              <br />
              <span className="text-green-force" style={{ color: '#10B981' }}>disponible 24/7</span>
            </h1>
          </motion.div>

          {/* Image - Centered below title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex items-start justify-center mb-6"
          >
            <div className="relative">
              {/* Landing page image - Original size, no border */}
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/landing.png"
                  alt="BumaAI App Interface - Profil, Chat et Social"
                  width={800}
                  height={1600}
                  className="w-full h-auto rounded-2xl max-w-md mx-auto"
                  style={{
                    maxWidth: '400px',
                    width: 'auto',
                    height: 'auto',
                  }}
                  priority
                  quality={100}
                />
              </div>

              {/* Floating stats */}
              <div className="absolute -top-3 -right-3 bg-white rounded-lg shadow-xl p-3 border-2 border-primary-200 z-10">
                <div className="text-xl font-bold text-primary-600">14.5k</div>
                <div className="text-xs text-text-secondary font-medium">XP gagnés</div>
              </div>

              <div className="absolute -bottom-3 -left-3 bg-white rounded-lg shadow-xl p-3 border-2 border-primary-200 z-10">
                <div className="text-xl font-bold text-primary-600">247</div>
                <div className="text-xs text-text-secondary font-medium">Exercices</div>
              </div>
            </div>
          </motion.div>

          {/* Description Text - Full width under title and image */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto text-center font-medium mb-6"
            style={{
              color: 'rgba(255, 255, 255, 0.95)',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
            }}
          >
            Retrouvez la sérénité à la maison. Un tuteur qui s&apos;adapte à son rythme, disponible quand il en a besoin.
          </motion.p>

          {/* Buttons - Full width, aligned on same line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-row gap-2 sm:gap-3 justify-center items-center mb-8"
          >
            <div 
              className="flex items-center gap-2 px-4 py-2 rounded-full border-2 shadow-xl backdrop-blur-md whitespace-nowrap"
              style={{
                background: 'rgba(255, 255, 255, 0.25)',
                borderColor: 'rgba(255, 255, 255, 0.4)',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
              }}
            >
              <div className="w-3 h-3 bg-green-400 rounded-full shadow-lg shrink-0 animate-pulse" />
              <span className="text-white font-bold text-xs sm:text-sm" style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}>Suivi personnalisé</span>
            </div>
            <div 
              className="flex items-center gap-2 px-4 py-2 rounded-full border-2 shadow-xl backdrop-blur-md whitespace-nowrap"
              style={{
                background: 'rgba(255, 255, 255, 0.25)',
                borderColor: 'rgba(255, 255, 255, 0.4)',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
              }}
            >
              <div className="w-3 h-3 bg-green-400 rounded-full shadow-lg shrink-0 animate-pulse" />
              <span className="text-white font-bold text-xs sm:text-sm" style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}>Apprentissage immersif</span>
            </div>
            <div 
              className="flex items-center gap-2 px-4 py-2 rounded-full border-2 shadow-xl backdrop-blur-md whitespace-nowrap"
              style={{
                background: 'rgba(255, 255, 255, 0.25)',
                borderColor: 'rgba(255, 255, 255, 0.4)',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
              }}
            >
              <div className="w-3 h-3 bg-green-400 rounded-full shadow-lg shrink-0 animate-pulse" />
              <span className="text-white font-bold text-xs sm:text-sm" style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}>Moins cher qu&apos;1h de cours</span>
            </div>
          </motion.div>

          {/* Simple Email Form - Directly in Hero */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full max-w-3xl mx-auto"
          >
            {/* Title with icon */}
            <div className="flex items-center justify-center gap-2.5 mb-6">
              <Rocket className="w-6 h-6 text-white" strokeWidth={2.5} />
              <h3 
                className="font-black text-xl sm:text-2xl lg:text-3xl text-white"
                style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}
              >
                Rejoignez la liste d&apos;attente
              </h3>
            </div>
            
            {/* Simple form */}
            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex flex-col sm:flex-row gap-3 items-stretch mb-5">
                {/* Email input - large format */}
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 rounded-xl border-2 border-white/30 bg-white/20 backdrop-blur-md px-5 py-4 text-base font-medium text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all"
                  style={{
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  }}
                  disabled={isSubmitting}
                />
                
                {/* Button - orange text on white background */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-primary-600 font-bold text-base px-6 py-4 rounded-xl hover:bg-white/95 transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  style={{
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  {isSubmitting ? 'Envoi...' : 'Rejoindre'}
                </button>
              </div>
              
              {/* Benefits - aligned horizontally below button */}
              <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-white">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full shrink-0" style={{ boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }} />
                  <span 
                    className="text-sm sm:text-base font-semibold"
                    style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}
                  >
                    Accès prioritaire au lancement
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full shrink-0" style={{ boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }} />
                  <span 
                    className="text-sm sm:text-base font-semibold"
                    style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}
                  >
                    Tarif préférentiel (-30%)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full shrink-0" style={{ boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }} />
                  <span 
                    className="text-sm sm:text-base font-semibold"
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

export default Hero;
