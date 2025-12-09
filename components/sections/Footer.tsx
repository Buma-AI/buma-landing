'use client';

import { Rocket } from 'lucide-react';

function Footer() {
  return (
    <footer 
      className="text-white py-16 relative"
    >
      {/* Solid orange background with radial gradients - same style as Header */}
      <div 
        className="absolute inset-0 bg-primary-600-solid shadow-lg"
        style={{
          backgroundColor: '#D04A1B', // Same as Hero/CTA section
        }}
      >
        {/* Radial gradient overlays - same as CTA section */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_70%)]" />
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">BumaAI</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Le professeur particulier de votre enfant, disponible 24/7.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Produit</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors font-medium">Fonctionnalités</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors font-medium">Tarifs</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors font-medium">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Légal</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors font-medium">Confidentialité</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors font-medium">CGU</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors font-medium">RGPD</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors font-medium">Support</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors font-medium">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/70 text-sm">© 2025 BumaAI - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
