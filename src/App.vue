<template>
  <main>
    <router-view />
    <Footer />
  </main>
</template>

<style lang="ts">
css({
  'body': {
    fontFamily: '{fonts.sans}',
    backgroundColor: '{colors.white}',
    color: '{colors.gray.700}',
    '.dark &': {
      color: '{colors.gray.200}',
      backgroundColor: '{colors.black}'
    }
  },

  main: {
    padding: '2.5rem 1.5rem',
    textAlign: 'center',
  },

  '.btn': {
    padding: '0.25rem 1rem',
    margin: '0.75rem',
    display: 'inline-block',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    color: '{colors.white}',
    fontSize: '0.875rem',
    backgroundColor: '{colors.gray.600}',
    '&:hover': {
      backgroundColor: '{colors.teal.700}'
    },
    '&:disabled': {
      cursor: 'default',
      backgroundColor: '{colors.gray.600}',
      opacity: '0.5'
    },
  },

  '.icon-btn': {
    outline: 'none !important',
    fontSize: '0.9em',
    display: 'inline-block',
    cursor: 'pointer',
    userSelect: 'none',
    opacity: '0.75',
    transition: 'ease-in-out',
    transitionDuration: '200ms',
    transitionProperty: 'all',
    '&:hover': {
      opacity: '1',
      color: '{colors.teal.600}',
    },
    'svg': {
      fontSize: '1.2rem'
    }
  }
})
</style>
