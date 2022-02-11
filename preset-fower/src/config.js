import { colors } from './colors'

export default {
  unit: 'px',
  markSeperator: '--',
  unitSize: 4,
  theme: {
    colors,
    fontSizes: {
      xs: 12,
      sm: 14,
      base: 16,
      lg: 18,
      xl: 20,
      '2xl': 24,
      '3xl': 30,
      '4xl': 36,
      '5xl': 48,
      '6xl': 60,
      '7xl': 72,
      '8xl': 96,
      '9xl': 128,
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    // px将会被替换为unit
    shadows: {
      sm: '0 1px 3px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0,0,0,0.01)',
      base: '0 2px 4px rgba(0, 0, 0, 0.12), 0 0 2px rgba(0,0,0,0.02)',
      md: '0 4px 8px rgba(0, 0, 0, 0.12), 0 0 2px rgba(0,0,0,0.02)',
      lg: '0 8px 16px rgba(0, 0, 0, 0.12), 0 0 2px rgba(0,0,0,0.02)',
      xl: '0 14px 24px rgba(0, 0, 0, 0.16), 0 0 2px rgba(0,0,0,0.02)',
      '2xl': '0 24px 48px rgba(0, 0, 0, 0.2), 0 0 2px rgba(0,0,0,0.02)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none',
    },
    animation: {
      none: 'none',
      spin: 'spin 1s linear infinite',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      bounce: 'bounce 1s infinite',
    },
    keyframes: {
      spin: {  
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(360deg)' },
      },
      ping: {
        '75%, 100%': { transform: 'scale(2)', opacity: 0 },
      },
      pulse: {
        '0%, 100%': { opacity: 1 },
        '50%': { opacity: '0.5' },
      },
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-25%)',
          animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
        },
        '50%': {
          transform: 'translateY(0)',
          animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
        },
      },
    },
  },
}