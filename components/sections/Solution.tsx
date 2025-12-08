'use client';

import { Target, BookOpen, GraduationCap, Users, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Suivi Personnalisé',
    description: 'S\'adapte au niveau de votre enfant en temps réel',
    color: '#FF6B35', // Orange
    gradient: ['#FF6B35', '#E55A2B'],
  },
  {
    icon: BookOpen,
    title: '6 Matières du Collège',
    description: 'Maths, Français, Anglais, Sciences, Histoire-Géo, + Langues',
    color: '#8B5CF6', // Purple
    gradient: ['#8B5CF6', '#7C3AED'],
  },
  {
    icon: GraduationCap,
    title: 'Programme Officiel',
    description: '100% conforme Éducation Nationale',
    color: '#10B981', // Green
    gradient: ['#10B981', '#059669'],
  },
  {
    icon: Users,
    title: 'Méthode Active',
    description: 'Votre enfant réfléchit et comprend, Buma guide',
    color: '#3B82F6', // Blue
    gradient: ['#3B82F6', '#2563EB'],
  },
];

function Solution() {
  return (
    <section className="section-transition white-section-bg py-16 bg-gradient-to-br from-primary-50 via-white to-primary-50 relative">
      {/* Moderate orange shadow background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/6 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary-500/6 rounded-full blur-3xl" />
      </div>
      
      {/* Grid pattern */}
      <div className="grid-pattern" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="bg-primary-100 text-primary-700 px-4 py-1.5 rounded-full text-sm font-semibold">
                La Solution
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary mb-5 leading-tight flex items-center justify-center gap-2 flex-wrap">
              BumaAI : Un tuteur qui{' '}
              <span className="text-primary-600">change tout</span>
              <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-green-600 flex-shrink-0" strokeWidth={2.5} />
            </h2>
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto mb-3">
              Imaginez que votre enfant ait un professeur particulier disponible 24h/24 et 7j/7.
              Un tuteur qui connaît parfaitement son niveau, qui sait exactement où il bloque, et qui a une patience infinie.
            </p>
            <p className="text-base text-primary-600 font-medium italic">
              Buma parle naturellement à votre enfant, comme un vrai professeur.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="animate-scale-in-up"
                  style={{
                    animationDelay: `${index * 0.15}s`,
                    animationFillMode: 'both',
                  }}
                >
                  <div 
                    className="neumorphism-card rounded-2xl p-6 lg:p-8 transition-all duration-300 h-full group"
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
                    <div className="flex items-start gap-4">
                      <div 
                        className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${feature.gradient[0]} 0%, ${feature.gradient[1]} 100%)`,
                          boxShadow: `0 8px 16px ${feature.color}40`,
                        }}
                      >
                        <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl lg:text-2xl font-black text-text-primary mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-text-secondary leading-relaxed text-base">
                          {feature.description}
                        </p>
                      </div>
                    </div>
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
