<script setup lang="ts">
interface Props {
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
}

withDefaults(defineProps<Props>(), {
  eyebrow: '',
  description: '',
  centered: false
})
</script>

<template>
  <div :class="['mb-12 max-w-3xl', centered ? 'mx-auto text-center' : '']">
    <p v-if="eyebrow" class="mb-4 text-xs font-black uppercase tracking-[0.3em] text-primary">
      {{ eyebrow }}
    </p>

    <h2 class="text-4xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl">
      {{ title }}
    </h2>

    <p v-if="description" class="mt-5 text-base leading-8 text-muted md:text-lg">
      {{ description }}
    </p>
  </div>
</template>