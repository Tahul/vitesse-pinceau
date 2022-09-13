<script setup lang="ts">
const props = defineProps<{ name: string }>()
const router = useRouter()
</script>

<template>
  <div>
    <i-noto-woman-artist />

    <p>
      Hi, {{ props.name }}
    </p>

    <p>
      <em>Dynamic route!</em>
    </p>

    <div>
      <button
        class="btn"
        @click="router.back()"
      >
        Back
      </button>
    </div>
  </div>
</template>

<style scoped lang="ts">
css({
  svg: {
    fontSize: '2.5rem',
    lineHeight: '2.5rem',
    display: 'inline-block'
  },
  p: {
    em: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      opacity: '0.5',
    },
  },
  button: {
    margin: '0.75rem',
    fontSize: '0.75rem',
    marginTop: '2rem',
  }
})
</style>
