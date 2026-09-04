<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  to?: string
  loading?: boolean
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  to: '',
  loading: false
})

const variantClasses = {
  primary: 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20',
  secondary: 'bg-secondary text-foreground hover:bg-surface border border-border',
  outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  dark: 'bg-surface-dark text-white hover:opacity-90'
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-3 text-sm',
  lg: 'px-7 py-4 text-base'
}
</script>

<template>
  <NuxtLink v-if="to" :to="to" :class="['inline-flex items-center justify-center gap-2 rounded-xl font-bold transition-all duration-300 hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-50', variantClasses[variant], sizeClasses[size]]">
    <span v-if="loading" class="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
    <slot />
  </NuxtLink>

  <button v-else :disabled="loading" :class="['inline-flex items-center justify-center gap-2 rounded-xl font-bold transition-all duration-300 hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-50', variantClasses[variant], sizeClasses[size]]">
    <span v-if="loading" class="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
    <slot />
  </button>
</template>