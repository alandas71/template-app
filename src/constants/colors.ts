export const Colors = {
  // Paleta principal
  primary: '#35E1CB',
  secondary: '#008276',
  accent: '#085B51',
  
  // Variações da paleta principal
  primaryLight: '#ccfbf1',
  primaryDark: '#0d9488',
  secondaryLight: '#5eead4',
  secondaryDark: '#0f766e',
  accentLight: '#115e59',
  accentDark: '#042f2e',
  
  // Cores neutras
  white: '#ffffff',
  black: '#000000',
  gray50: '#f8fafc',
  gray100: '#f1f5f9',
  gray200: '#e2e8f0',
  gray300: '#cbd5e1',
  gray400: '#94a3b8',
  gray500: '#64748b',
  gray600: '#475569',
  gray700: '#334155',
  gray800: '#1e293b',
  gray900: '#0f172a',
  
  // Cores de status
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
  
  // Cores de fundo
  background: '#ffffff',
  surface: '#f8fafc',
  card: '#ffffff',
  
  // Cores de texto
  textPrimary: '#0f172a',
  textSecondary: '#64748b',
  textTertiary: '#94a3b8',
  textInverse: '#ffffff',
} as const;

export const Shadows = {
  soft: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.07,
    shadowRadius: 15,
    elevation: 3,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 25,
    elevation: 6,
  },
  strong: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.15,
    shadowRadius: 40,
    elevation: 12,
  },
} as const;

