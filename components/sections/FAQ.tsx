'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqItems = [
  {
    id: 'how-it-works',
    question: 'Comment ça fonctionne concrètement ?',
    shortAnswer: 'Buma guide votre enfant avec la méthode socratique : il pose des questions pour faire réfléchir, adapte les explications à son profil, et combine pédagogie, social et motivation pour un apprentissage engageant.',
    detailedAnswer: 'Votre enfant peut poser une question à voix haute ou scanner un exercice. Buma ne donne jamais la réponse directement.\n\n• Il pose des questions pour faire réfléchir et propose des indices adaptés au niveau\n• Il explique le raisonnement étape par étape\n• Au fil de l\'utilisation, Buma comprend le profil de votre enfant : sa façon d\'apprendre, ses points forts, ses blocages\n• Cette connaissance approfondie permet une personnalisation toujours plus fine\n\nL\'application combine aussi le social (groupes de révision, défis entre amis) et le motivationnel (gamification, badges, progression) pour transformer l\'apprentissage en expérience engageante. C\'est la méthode socratique enrichie d\'une compréhension profonde de votre enfant et d\'une motivation adaptée.',
  },
  {
    id: 'data',
    question: 'Que faites-vous des données de mon enfant ?',
    shortAnswer: 'Elles servent uniquement à sa progression. Rien ne sort de l\'application.',
    detailedAnswer: 'Nous sommes strictement conformes au RGPD et à la protection des données des mineurs. Les données d\'apprentissage sont utilisées exclusivement pour personnaliser les exercices et adapter le niveau en temps réel. Nous ne revendons jamais aucune donnée à des tiers. BumaAI est un sanctuaire d\'apprentissage : les données de votre enfant restent dans l\'application.',
  },
  {
    id: 'ads',
    question: 'Y a-t-il des publicités dans l\'application ?',
    shortAnswer: 'Jamais. Aucune publicité, aucune distraction.',
    detailedAnswer: 'L\'attention de votre enfant est précieuse. Contrairement aux applications gratuites, notre modèle d\'abonnement garantit une expérience 100% sans distraction publicitaire. Votre enfant se concentre uniquement sur son apprentissage, sans interruption.',
  },
  {
    id: 'program',
    question: 'Est-ce que c\'est conforme au programme de l\'Éducation Nationale ?',
    shortAnswer: 'Oui, à 100%. De la 6ème à la 3ème, programme officiel.',
    detailedAnswer: 'Nous suivons le Bulletin Officiel scrupuleusement, chapitre par chapitre. BumaAI prépare aux contrôles en classe et au Brevet avec les mêmes attendus que les professeurs. Chaque exercice est aligné sur les programmes officiels de l\'Éducation Nationale.',
  },
  {
    id: 'chatgpt',
    question: 'Est-ce que c\'est juste ChatGPT déguisé ?',
    shortAnswer: 'Non. ChatGPT est un outil passif, BumaAI est un coach actif qui guide.',
    detailedAnswer: 'BumaAI a une intelligence pédagogique intégrée dès le départ. L\'élève n\'a pas besoin de savoir guider l\'IA, c\'est l\'IA qui guide l\'élève avec la méthode socratique. C\'est la différence : ChatGPT est une encyclopédie, BumaAI est un professeur particulier qui s\'adapte à votre rythme.',
  },
  {
    id: 'personalization',
    question: 'Comment BumaAI s\'adapte au niveau de mon enfant ?',
    shortAnswer: 'En temps réel. Buma analyse chaque réponse, détecte les lacunes et ajuste immédiatement la difficulté et les explications.',
    detailedAnswer: 'Dès les premiers exercices, Buma cartographie les forces et faiblesses de votre enfant.\n\n• Si il bloque sur une notion, Buma propose automatiquement un exercice plus simple pour consolider les bases\n• Si il réussit facilement, la difficulté augmente\n• Cette adaptation se fait en temps réel, à chaque interaction\n\nContrairement à un cours en groupe où tout le monde suit le même rythme, Buma crée un parcours 100% personnalisé qui évolue avec votre enfant.',
  },
  {
    id: 'price',
    question: 'Pourquoi payer alors qu\'il y a des sites gratuits (Khan Academy, YouTube) ?',
    shortAnswer: 'La gratuité n\'offre pas le sur-mesure et la personnalisation en temps réel.',
    detailedAnswer: 'Sur YouTube ou Khan Academy, tout le monde regarde la même vidéo, peu importe son niveau. Sur BumaAI, chaque exercice est généré spécifiquement pour le niveau de votre enfant, chaque explication s\'adapte à sa façon de comprendre. C\'est la différence entre un cours magistral (gratuit mais générique) et un cours particulier (personnalisé et efficace).',
  },
  {
    id: 'cancel',
    question: 'Puis-je résilier quand je veux ?',
    shortAnswer: 'Oui, en un clic, sans engagement ni frais cachés.',
    detailedAnswer: 'Vous gérez votre abonnement depuis les réglages de votre téléphone. Résiliation immédiate, sans question, sans frais.',
  },
  {
    id: 'screen',
    question: 'Mon enfant passe déjà trop de temps sur son téléphone. Pourquoi lui en rajouter ?',
    shortAnswer: 'BumaAI transforme le temps d\'écran "passif" (TikTok, jeux) en temps "actif" et intelligent.',
    detailedAnswer: 'BumaAI est conçu pour des sessions courtes et intenses (15-20 min), pas pour des heures de scroll. C\'est un écran qui rend intelligent et fait progresser, pas un écran qui distrait. L\'application intègre des pauses obligatoires pour éviter la surcharge. Vous transformez 20 minutes de TikTok en 20 minutes d\'apprentissage efficace.',
  },
];

function FAQ() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section id="faq" className="section-transition white-section-bg py-16 bg-white relative">
      {/* Subtle gray shadow background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gray-500/6 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gray-500/6 rounded-full blur-3xl" />
      </div>
      
      {/* Grid pattern */}
      <div className="grid-pattern" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block mb-4">
              <span className="bg-primary-100 text-primary-700 px-4 py-1.5 rounded-full text-sm font-semibold">
                Questions fréquentes
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary mb-4 leading-tight">
              Vous avez des{' '}
              <span className="text-primary-600">questions</span> ?
            </h2>
            <p className="text-base text-text-secondary max-w-2xl mx-auto">
              Nous répondons aux préoccupations les plus fréquentes des parents
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item) => {
              const isOpen = openItems.has(item.id);
              return (
                <div
                  key={item.id}
                  className="neumorphism-card rounded-xl overflow-hidden transition-all duration-300"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = 
                      '12px 12px 24px rgba(0, 0, 0, 0.15), -8px -8px 16px rgba(255, 255, 255, 0.8), 0 0 0 1px rgba(0, 0, 0, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 
                      '8px 8px 16px rgba(0, 0, 0, 0.12), -8px -8px 16px rgba(255, 255, 255, 0.8), 0 1px 2px rgba(0, 0, 0, 0.05)';
                  }}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-white/50 transition-colors"
                  >
                    <h3 className="text-lg sm:text-xl font-bold text-text-primary pr-8">
                      {item.question}
                    </h3>
                    <div className="shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-primary-600" strokeWidth={2.5} />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-text-secondary" strokeWidth={2.5} />
                      )}
                    </div>
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-5">
                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-lg text-text-secondary leading-relaxed mb-3 font-semibold text-primary-600">
                          {item.shortAnswer}
                        </p>
                        <div className="text-lg text-text-secondary leading-relaxed">
                          {item.detailedAnswer.includes('•') ? (
                            <div className="space-y-2">
                              {item.detailedAnswer.split('\n').map((paragraph, idx) => {
                                if (paragraph.trim().startsWith('•')) {
                                  return (
                                    <div key={idx} className="flex items-start gap-2">
                                      <span className="text-primary-600 mt-1.5 shrink-0">•</span>
                                      <span>{paragraph.replace(/^•\s*/, '')}</span>
                                    </div>
                                  );
                                }
                                return paragraph.trim() ? <p key={idx}>{paragraph}</p> : null;
                              })}
                            </div>
                          ) : (
                            <p>{item.detailedAnswer}</p>
                          )}
                        </div>
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

export default FAQ;

