import { defineTheme } from 'pinceau'

export default defineTheme({
  fonts: {
    sans: {
      value: '\'DM Sans\'',
    },
    serif: {
      value: '\'DM Serif Display\'',
    },
    mono: {
      value: '\'DM Mono\'',
    },
  },
  colors: {
    white: {
      value: '#FFFFFF',
    },
    black: {
      value: '#121212',
    },
    primary: {
      50: { value: '#90F58C' },
      100: { value: '#79F37D' },
      200: { value: '#53F072' },
      300: { value: '#2EED71' },
      400: { value: '#13DF7B' },
      500: { value: '#10B981' },
      600: { value: '#0C8570' },
      700: { value: '#075251' },
      800: { value: '#031A1E' },
      900: { value: '#000000' },
    },
    secondary: {
      50: { value: '#f0fdfa' },
      100: { value: '#ccfbf1' },
      200: { value: '#99f6e4' },
      300: { value: '#5eead4' },
      400: { value: '#2dd4bf' },
      500: { value: '#14b8a6' },
      600: { value: '#0d9488' },
      700: { value: '#0f766e' },
      800: { value: '#115e59' },
      900: { value: '#134e4a' },
    },
  },
})
