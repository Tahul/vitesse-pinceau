<template>
  <nav>
    <button class="icon-btn" @click="toggleDark()">
      <i-carbon-moon class="light-button" />
      <i-carbon-sun class="dark-button" />
    </button>

    <a
      class="icon-btn"
      rel="noreferrer"
      href="https://github.com/antfu/vitesse-lite"
      target="_blank"
      title="GitHub"
    >
    <i-carbon-logo-github />
    </a>
  </nav>
</template>

<style scoped lang="ts">
css({
  nav: {
    fontSize: '1rem',
    marginTop: '1.5rem',
    display: 'inline-flex',
    gap: '0.5rem',
    '.dark-button': {
      display: 'block'
    },
    '.light-button': {
      display: 'none'
    },
    ".dark &": {
      '.dark-button': {
        display: 'none'
      },
      '.light-button': {
        display: 'block'
      },
    },
  },
})
</style>
