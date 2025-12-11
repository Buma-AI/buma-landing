'use client';

import { Target, BookOpen, GraduationCap, Users, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Suivi Personnalisé',
    description: 'S\'adapte au niveau de votre enfant en temps réel',
    color: '#D04A1B', // Orange professionnel
    gradient: ['#D04A1B', '#B83A0F'],
  },
  {
    icon: BookOpen,
    title: '6 Matières du Collège',
    description: 'Maths, Français, Anglais, Sciences, Histoire-Géo, + Langues',
    color: '#7C3AED', // Violet professionnel
    gradient: ['#7C3AED', '#6D28D9'],
  },
  {
    icon: GraduationCap,
    title: 'Programme Officiel',
    description: '100% conforme Éducation Nationale',
    color: '#059669', // Vert professionnel
    gradient: ['#059669', '#047857'],
  },
  {
    icon: Users,
    title: 'Méthode Active',
    description: 'Votre enfant réfléchit et comprend, Buma guide',
    color: '#2563EB', // Bleu professionnel
    gradient: ['#2563EB', '#1D4ED8'],
  },
];

function Solution() {
  return (
    <section className="section-transition white-section-bg py-20 bg-white relative">
      {/* Subtle blue shadow background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-green-500/8 rounded-full blur-3xl" />
      </div>
      
      {/* Grid pattern */}
      <div className="grid-pattern" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="bg-primary-100 text-primary-700 px-4 py-1.5 rounded-full text-sm font-semibold">
                La Solution
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary mb-5 leading-tight flex items-center justify-center gap-2 flex-wrap">
              Buma : Un tuteur qui{' '}
              <span className="text-primary-600">change tout</span>
              <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-green-600 shrink-0" strokeWidth={2.5} />
            </h2>
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto mb-3">
              Imaginez que votre enfant ait un professeur particulier disponible 24h/24 et 7j/7.
              Un tuteur qui connaît parfaitement son niveau, qui sait exactement où il bloque, et qui a une patience infinie.
            </p>
            <p className="text-base text-primary-600 font-medium italic">
              Buma parle naturellement à votre enfant, comme un vrai professeur.
            </p>
          </div>

          {/* Compact 2-column list with colored borders */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="animate-fade-in-up bg-white rounded-lg p-5 flex items-start gap-4 transition-all duration-300 group"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: 'both',
                    borderLeft: `3px solid ${feature.color}`,
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(2px)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
                  }}
                >
                  <div 
                    className="flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                  >
                    <Icon 
                      className="w-7 h-7" 
                      style={{ color: feature.color }}
                      strokeWidth={3}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-black text-text-primary mb-1 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solution;
