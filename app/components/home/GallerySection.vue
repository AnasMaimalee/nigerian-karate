<script setup lang="ts">
import { ArrowUpRight, Images } from 'lucide-vue-next'

import SectionHeading from '~/components/common/SectionHeading.vue'
import GalleryCarousel from '~/components/gallery/GalleryCarousel.vue'

interface GalleryItem {
  id: number | string
  image: string
  title?: string
  category?: string
  description?: string
}

withDefaults(defineProps<{
  items?: GalleryItem[]
}>(), {
  items: () => []
})
</script>

<template>
  <section class="section-padding overflow-hidden bg-surface">
    <div class="container-nkf">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading eyebrow="Moments That Matter" title="Karate In Motion" description="Explore unforgettable moments from championships, training camps and federation activities." />

        <NuxtLink to="/gallery" class="inline-flex w-fit items-center gap-2 text-sm font-black text-primary transition hover:gap-3">
          Explore Gallery
          <ArrowUpRight :size="18" />
        </NuxtLink>
      </div>

      <div v-if="items.length" class="mt-10">
        <GalleryCarousel :items="items.slice(0, 8)" />
      </div>

      <div v-else class="mt-10 rounded-[2rem] border border-dashed border-border bg-white px-6 py-16 text-center">
        <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Images :size="28" />
        </div>

        <h3 class="mt-5 text-xl font-black text-foreground">
          Gallery coming soon
        </h3>
      </div>
    </div>
  </section>
</template>