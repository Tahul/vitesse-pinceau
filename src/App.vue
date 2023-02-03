<template>
  <main>
    <router-view />
    <Footer />
  </main>
</template>

<style lang="ts">
css({
  '.icon-btn': {
    color: '{color.white}',
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
    color: '{color.white}',
    fontSize: '0.875rem',
    backgroundColor: '{color.primary.600}',
    '&:hover': {
      backgroundColor: '{color.secondary.700}'
    },
    '&:disabled': {
      cursor: 'default',
      backgroundColor: '{color.primary.600}',
      opacity: '0.5'
    },
  },

  'body': {
    fontFamily: '{font.sans}',
    backgroundColor: '{color.white}',
    color: '{color.primary.700}',
    '.dark &': {
      color: '{color.primary.200}',
      backgroundColor: '{color.black}'
    }
  },

  main: {
    padding: '2.5rem 1.5rem',
    textAlign: 'center',
  },
})
</style>
