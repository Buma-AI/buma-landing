'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted state after component mounts to avoid hydration mismatch
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      clearTimeout(timer);
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-2.5 rounded-xl">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl text-white">BumaAI</span>
            </div>
          </div>
        </nav>
      </header>
    );
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      {/* Solid orange background with radial gradients - only when scrolled */}
      {isScrolled && (
        <div 
          className="absolute inset-0 bg-primary-600-solid shadow-lg"
          style={{
            backgroundColor: '#D04A1B', // Same as Hero/CTA section
          }}
        >
          {/* Radial gradient overlays - same as CTA section */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_70%)]" />
        </div>
      )}
      
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary-500 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-gradient-to-br from-primary-500 to-primary-600 p-2.5 rounded-xl shadow-lg">
                <Rocket className="w-6 h-6 text-white" />
              </div>
            </div>
            <span className="font-bold text-xl text-white transition-colors">
              BumaAI
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-sm font-semibold text-white/95 hover:text-white transition-colors"
            >
              Comment ça marche
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              className="text-sm font-semibold text-white/95 hover:text-white transition-colors"
            >
              Avantages
            </button>
            <button
              onClick={() => scrollToSection('early-adopters')}
              className="text-sm font-semibold text-white/95 hover:text-white transition-colors"
            >
              Early Adopters
            </button>
            <Button
              onClick={() => scrollToSection('cta')}
              variant="primary"
              size="sm"
              className="shadow-primary"
            >
              Rejoindre
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-primary-500/30 relative overflow-hidden"
          >
            {/* Solid orange background with radial gradients for mobile menu */}
            {isScrolled && (
              <div 
                className="absolute inset-0 bg-primary-600-solid"
                style={{
                  backgroundColor: '#D04A1B', // primary-600 - fallback (orange professionnel)
                }}
              >
                {/* Radial gradient overlays - same as CTA section */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_70%)]" />
              </div>
            )}
            <div className="relative z-10 container mx-auto px-4 py-4 space-y-3">
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="block w-full text-left text-white font-medium py-2 hover:text-white/80 transition-colors"
              >
                Comment ça marche
              </button>
              <button
                onClick={() => scrollToSection('benefits')}
                className="block w-full text-left text-white font-medium py-2 hover:text-white/80 transition-colors"
              >
                Avantages
              </button>
              <button
                onClick={() => scrollToSection('early-adopters')}
                className="block w-full text-left text-white font-medium py-2 hover:text-white/80 transition-colors"
              >
                Early Adopters
              </button>
              <Button
                onClick={() => scrollToSection('cta')}
                variant="primary"
                size="md"
                className="w-full mt-4"
              >
                Rejoindre
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
