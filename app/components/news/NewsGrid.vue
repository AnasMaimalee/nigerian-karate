<script setup lang="ts">
import { Newspaper } from 'lucide-vue-next'

interface NewsItem {
  id: number | string
  title: string
  slug?: string
  excerpt?: string
  image: string
  category?: string
  date?: string
  readTime?: string
  featured?: boolean
}

withDefaults(defineProps<{
  items?: NewsItem[]
  columns?: 2 | 3 | 4
}>(), {
  items: () => [],
  columns: 3
})
</script>

<template>
  <div
    v-if="items.length"
    class="grid gap-5 sm:grid-cols-2"
    :class="{
      'lg:grid-cols-2': columns === 2,
      'lg:grid-cols-3': columns === 3,
      'lg:grid-cols-4': columns === 4
    }"
  >
    <NewsCard
      v-for="item in items"
      :key="item.id"
      :item="item"
    />
  </div>

  <div
    v-else
    class="rounded-3xl border border-dashed border-border bg-surface px-6 py-16 text-center"
  >
    <div
      class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary"
    >
      <Newspaper :size="28" />
    </div>

    <h3 class="mt-5 text-xl font-black text-foreground">
      No news available
    </h3>

    <p class="mx-auto mt-2 max-w-md text-sm leading-6 text-muted">
      There are currently no news articles available. Please check again soon.
    </p>
  </div>
</template>