// BumaAI Design System Tokens

export const spacing = {
  xs: '0.5rem',    // 8px
  sm: '0.75rem',   // 12px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '3rem',   // 48px
  '3xl': '4rem',   // 64px
  '4xl': '6rem',   // 96px
} as const;

export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
    display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
  },
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],      // 12px
    sm: ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],    // 14px
    base: ['1rem', { lineHeight: '1.6', letterSpacing: '0' }],           // 16px
    lg: ['1.125rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],    // 18px
    xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],     // 20px
    '2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.02em' }],   // 24px
    '3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }], // 30px
    '4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.03em' }], // 36px
    '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],     // 48px
    '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.04em' }], // 60px
    '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.04em' }],    // 72px
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
} as const;

export const colors = {
  primary: {
    50: '#FFF5F2',
    100: '#FFE8E0',
    200: '#FFD1C2',
    300: '#FFB399',
    400: '#FF8C66',
    500: '#FF6B35', // Main brand color
    600: '#E55A2B',
    700: '#CC4A21',
    800: '#B33A17',
    900: '#992A0D',
  },
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
  text: {
    primary: '#1F2937',    // gray-800
    secondary: '#4B5563',  // gray-600
    tertiary: '#6B7280',   // gray-500
    inverse: '#FFFFFF',
  },
  semantic: {
    success: '#10B981',
    error: '#EF4444',
    warning: '#F59E0B',
    info: '#3B82F6',
  },
} as const;

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  primary: '0 10px 15px -3px rgba(255, 107, 53, 0.2), 0 4px 6px -2px rgba(255, 107, 53, 0.1)',
} as const;

export const borderRadius = {
  none: '0',
  sm: '0.25rem',   // 4px
  md: '0.5rem',    // 8px
  lg: '0.75rem',   // 12px
  xl: '1rem',      // 16px
  '2xl': '1.5rem', // 24px
  full: '9999px',
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

