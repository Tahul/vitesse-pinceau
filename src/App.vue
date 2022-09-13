<template>
  <main>
    <router-view />
    <Footer />
  </main>
</template>

<style lang="ts">
css({

  '.icon-btn': {
    color: '{colors.white}',
    outline: 'none !important',
    fontSize: '0.9em',
    display: 'inline-block',
    cursor: 'pointer',
    userSelect: 'none',
    opacity: '0.75',
    transition: 'ease-in-out',
    transitionDuration: '200ms',
    transitionProperty: 'all',
    svg: {
      fontSize: '1.2rem',
    },
    '&:hover': {
      opacity: '1',
    },
  },

  '.btn': {
    padding: '0.25rem 1rem',
    margin: '0.75rem',
    display: 'inline-block',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    color: '{colors.white}',
    fontSize: '0.875rem',
    backgroundColor: '{colors.primary.600}',
    '&:hover': {
      backgroundColor: '{colors.secondary.700}'
    },
    '&:disabled': {
      cursor: 'default',
      backgroundColor: '{colors.primary.600}',
      opacity: '0.5'
    },
  },

  'body': {
    fontFamily: '{fonts.sans}',
    backgroundColor: '{colors.white}',
    color: '{colors.primary.700}',
    '.dark &': {
      color: '{colors.primary.200}',
      backgroundColor: '{colors.black}'
    }
  },

  main: {
    padding: '2.5rem 1.5rem',
    textAlign: 'center',
  },
})
</style>
