<script setup lang="ts">
interface Props {
  dark?: boolean
  id?: string
}

withDefaults(defineProps<Props>(), {
  dark: false,
  id: ''
})
</script>

<template>
  <section :id="id" :class="['section-padding', dark ? 'bg-surface-dark text-white' : 'bg-background text-foreground']">
    <div class="container-nkf">
      <slot />
    </div>
  </section>
</template>