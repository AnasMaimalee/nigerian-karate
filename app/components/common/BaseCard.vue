<script setup lang="ts">
interface Props {
  hover?: boolean
  padding?: boolean
}

withDefaults(defineProps<Props>(), {
  hover: true,
  padding: true
})
</script>

<template>
  <div :class="['overflow-hidden rounded-3xl border border-border bg-white shadow-soft transition-all duration-300', hover ? 'hover:-translate-y-2 hover:shadow-card' : '', padding ? 'p-6 md:p-8' : '']">
    <slot />
  </div>
</template>