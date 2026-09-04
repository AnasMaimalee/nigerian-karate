<script setup lang="ts">
import { SearchX } from 'lucide-vue-next'

interface Props {
  title?: string
  description?: string
}

withDefaults(defineProps<Props>(), {
  title: 'Nothing found',
  description: 'There is currently nothing to display here.'
})
</script>

<template>
  <div class="flex flex-col items-center justify-center rounded-3xl border border-dashed border-border bg-surface p-12 text-center">
    <div class="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary-light text-primary">
      <SearchX :size="28" />
    </div>

    <h3 class="text-xl font-black">
      {{ title }}
    </h3>

    <p class="mt-3 max-w-md text-sm leading-6 text-muted">
      {{ description }}
    </p>
  </div>
</template>