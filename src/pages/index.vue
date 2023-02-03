<script setup lang="ts">
const name = ref('')

const router = useRouter()

const go = () => name.value && router.push(`/hi/${encodeURIComponent(name.value)}`)
</script>

<template>
  <div>
    <i-noto-paintbrush />

    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse-lite" target="_blank">
        Vitesse Pinceau
      </a>
    </p>

    <p>
      <em>Opinionated Vite Starter Template</em>
    </p>

    <div spacer />

    <input
      v-model="name"
      placeholder="What's your name?"
      type="text"
      autocomplete="false"
      @keydown.enter="go"
    >

    <div>
      <button
        class="btn"
        :disabled="!name"
        @click="go"
      >
        Go
      </button>
    </div>
  </div>
</template>

<style scoped lang="ts">
css({
  div: {
    color: '{color.black}',
    '.dark &': {
      color: '{color.white}',
    },
  },
  svg: {
    fontSize: '2.5rem',
    lineHeight: '2.5rem',
    display: 'inline-block'
  },
  '[spacer]': {
    marginTop: '2rem'
  },
  em: {
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    opacity: '0.75',
  },
  input: {
    padding: '0.5rem 1rem',
    width: '250px',
    textAlign: 'center',
    backgroundColor: 'transparent',
    borderRadius: '0.25rem',
    border: '1px solid {color.primary.200}',
    outline: 'none',
    '.dark &': {
      borderColor: '{color.primary.700}',
    },
    '&:active': {
      outline: 'none'
    }
  }
})
</style>
