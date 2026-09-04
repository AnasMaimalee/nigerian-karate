<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'accent' | 'danger' | 'dark'
}

withDefaults(defineProps<Props>(), {
  variant: 'primary'
})

const variants = {
  primary: 'bg-primary-light text-primary',
  accent: 'bg-accent-light text-accent',
  danger: 'bg-danger/10 text-danger',
  dark: 'bg-surface-dark text-white'
}
</script>

<template>
  <span :class="['inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold tracking-wide', variants[variant]]">
    <slot />
  </span>
</template>