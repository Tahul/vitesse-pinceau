import { defineTheme } from "pinceau"

export default defineTheme({
  fonts: {
    sans: {
      value: '\'DM Sans\''
    },
    serif: {
      value: '\'DM Serif Display\''
    },
    mono: {
      value: '\'DM Mono\'',
    }
  },
  colors: {
    white: {
      value: '#FFFFFF'
    },
    black: {
      value: '#121212'
    },
    gray: {
      50: { value: '#f9fafb' },
      100: { value: '#f3f4f6' },
      200: { value: '#e5e7eb' },
      300: { value: '#d1d5db' },
      400: { value: '#9ca3af' },
      500: { value: '#6b7280' },
      600: { value: '#4b5563' },
      700: { value: '#374151' },
      800: { value: '#1f2937' },
      900: { value: '#111827' },
    },
    teal: {
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
  }
})
