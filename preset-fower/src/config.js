import { colors } from './colors'

export default {
  unit: 'px',
  markSeperator: '--',
  unitSize: 4,
  theme: {
    colors,
    modes: {
      dark: 'dark',
    },
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    spacings: {
      0: 0,
      1: 4,
      2: 8,
      3: 12,
      4: 16,
      5: 20,
      6: 24,
      7: 28,
      8: 32,
      9: 36,
      10: 40,
      11: 44,
      12: 48,
      14: 56,
      16: 64,
      20: 80,
      24: 96,
      28: 112,
      32: 128,
      36: 144,
      40: 160,
      44: 176,
      48: 192,
      52: 208,
      56: 224,
      60: 240,
      64: 256,
      72: 288,
      80: 320,
      96: 384,
    },
    fontFamilies: {
      sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
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
    lineHeights: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
    letterSpacings: {
      tighter: -0.9,
      tight: -0.45,
      normal: 0,
      wide: 0.45,
      wider: 0.9,
      widest: 1.8,
    },
    radii: {
      none: 0,
      tiny: 2,
      small: 4,
      medium: 6,
      large: 8,
      huge: 12,
      gigantic: 16,
      full: 9999,
    },
    shadows: {
      tiny: '0 1px 3px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0,0,0,0.01)',
      small: '0 2px 4px rgba(0, 0, 0, 0.12), 0 0 2px rgba(0,0,0,0.02)',
      medium: '0 4px 8px rgba(0, 0, 0, 0.12), 0 0 2px rgba(0,0,0,0.02)',
      large: '0 8px 16px rgba(0, 0, 0, 0.12), 0 0 2px rgba(0,0,0,0.02)',
      huge: '0 14px 24px rgba(0, 0, 0, 0.16), 0 0 2px rgba(0,0,0,0.02)',
      gigantic: '0 24px 48px rgba(0, 0, 0, 0.2), 0 0 2px rgba(0,0,0,0.02)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none',
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