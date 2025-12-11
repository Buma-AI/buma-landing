// Buma Landing Page Constants

export const SUBJECTS = [
  {
    id: 'math',
    name: 'Mathématiques',
    gradient: ['#4A90E2', '#6366F1'],
  },
  {
    id: 'french',
    name: 'Français',
    gradient: ['#722ED1', '#8B5CF6'],
  },
  {
    id: 'english',
    name: 'Anglais',
    gradient: ['#EC4899', '#F472B6'],
  },
  {
    id: 'sciences',
    name: 'Sciences',
    gradient: ['#10B981', '#34D399'],
  },
  {
    id: 'history',
    name: 'Histoire-Géo',
    gradient: ['#F59E0B', '#FBBF24'],
  },
  {
    id: 'languages',
    name: 'Langues (LV2)',
    gradient: ['#14B8A6', '#2DD4BF'],
  },
] as const;

export const PILLARS = [
  {
    id: 'personalized',
    title: 'Soutien Scolaire sur Mesure',
    description: 'Chaque enfant est différent. Buma s\'adapte au niveau et au rythme de votre enfant. Il est toujours dans sa zone optimale d\'apprentissage.',
    icon: 'target',
  },
  {
    id: 'engagement',
    title: 'Motivation et Engagement',
    description: 'L\'apprentissage devient engageant grâce à un système de progression adapté aux collégiens.',
    icon: 'trophy',
  },
  {
    id: 'academic',
    title: 'Rigueur Académique',
    description: '100% conforme au programme de l\'Éducation Nationale. Préparation Brevet incluse pour les 3ème.',
    icon: 'book-check',
  },
  {
    id: 'wellbeing',
    title: 'Bienveillance et Confiance',
    description: 'Buma détecte le stress et propose des pauses. Il encourage et rassure. La confiance avant la compétence.',
    icon: 'heart',
  },
] as const;

export const BENEFITS = [
  {
    id: 'autonomy',
    title: 'Autonomie',
    description: 'Votre enfant devient autonome dans ses révisions. Moins de conflits autour des devoirs.',
    icon: 'user-check',
  },
  {
    id: 'progress',
    title: 'Progression Visible',
    description: 'Des progrès mesurables grâce à un suivi personnalisé adapté à son niveau.',
    icon: 'trending-up',
  },
  {
    id: 'confidence',
    title: 'Confiance Retrouvée',
    description: 'Votre enfant reprend confiance en lui. Il n\'a plus peur de se tromper.',
    icon: 'smile',
  },
] as const;

export const EARLY_ADOPTER_BENEFITS = [
  {
    id: 'priority',
    title: 'Accès Prioritaire',
    description: 'Vous serez parmi les premiers à tester Buma et à donner votre avis.',
    icon: 'zap',
  },
  {
    id: 'discount',
    title: 'Tarif Préférentiel',
    description: '-30% sur l\'abonnement annuel pour les premiers inscrits.',
    icon: 'percent',
  },
  {
    id: 'influence',
    title: 'Influence le Produit',
    description: 'Votre feedback façonne Buma. Vous participez à son développement.',
    icon: 'message-circle',
  },
] as const;

