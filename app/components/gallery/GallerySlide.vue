<script setup lang="ts">
import { Expand, Image as ImageIcon } from 'lucide-vue-next'

interface GalleryItem {
  id: number
  title: string
  image: string
  category: string
  date?: string
  location?: string
  description?: string
}

defineProps<{
  item: GalleryItem
  active?: boolean
}>()

defineEmits<{
  open: []
}>()
</script>

<template>
  <article class="group relative h-full overflow-hidden rounded-3xl bg-surface-dark">
    <img :src="item.image" :alt="item.title" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />

    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"></div>

    <div class="absolute left-4 top-4">
      <span class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-white backdrop-blur-md">
        <ImageIcon :size="13" class="text-primary-light" />
        {{ item.category }}
      </span>
    </div>

    <button class="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white opacity-0 backdrop-blur-md transition duration-300 hover:scale-110 hover:bg-primary group-hover:opacity-100 focus:opacity-100" :aria-label="`Open ${item.title}`" @click="$emit('open')">
      <Expand :size="19" />
    </button>

    <div class="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-6">
      <p v-if="item.location" class="text-[10px] font-black uppercase tracking-[0.2em] text-primary-light">
        {{ item.location }}
      </p>

      <h3 class="mt-2 text-xl font-black tracking-tight sm:text-2xl">
        {{ item.title }}
      </h3>

      <p v-if="item.description" class="mt-2 line-clamp-2 text-sm leading-6 text-white/60">
        {{ item.description }}
      </p>
    </div>
  </article>
</template>