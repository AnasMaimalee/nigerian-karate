<script setup lang="ts">
import { ArrowUpRight, Newspaper, Sparkles } from 'lucide-vue-next'

interface NewsItem {
  id: number | string
  title: string
  slug?: string
  excerpt?: string
  image: string
  category?: string
  date?: string
  readTime?: string
}

withDefaults(defineProps<{
  featuredNews?: NewsItem | null
  items?: NewsItem[]
}>(), {
  items: () => []
})
</script>

<template>
  <section class="section-padding relative overflow-hidden bg-white">
    <!-- Decorative Background -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="absolute -right-32 top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl"></div>
      <div class="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
    </div>

    <div class="container-nkf relative">
      <!-- Section Header -->
      <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div class="max-w-3xl">
          <div class="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2">
            <Sparkles :size="14" class="text-primary" />

            <span class="text-[10px] font-black uppercase tracking-[0.25em] text-primary">
              Latest Updates
            </span>
          </div>

          <SectionHeading
            title="News & Stories"
            description="Stay informed with the latest achievements, competitions and federation developments."
          />
        </div>

        <NuxtLink
          to="/news"
          class="group inline-flex w-fit items-center gap-3 rounded-xl border border-primary/15 bg-white px-5 py-3 text-sm font-black text-primary shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg"
        >
          View All News

          <ArrowUpRight
            :size="18"
            class="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </NuxtLink>
      </div>

      <!-- Featured Story -->
      <div
        v-if="featuredNews"
        class="relative mt-12"
      >
        <div class="absolute -inset-3 rounded-[2rem] bg-primary/5 blur-2xl"></div>

        <div class="relative">
          <FeaturedNews :news="featuredNews" />
        </div>
      </div>

      <!-- News Grid -->
      <div
        v-if="items && items.length"
        class="relative mt-8"
      >
        <NewsGrid
          :items="items.slice(0, 3)"
          :columns="3"
        />
      </div>

      <!-- Empty State -->
      <div
        v-if="!featuredNews && (!items || !items.length)"
        class="relative mt-12 overflow-hidden rounded-[2rem] border border-dashed border-border bg-surface px-6 py-20 text-center"
      >
        <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>

        <div class="relative">
          <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 text-primary shadow-lg">
            <Newspaper :size="34" />
          </div>

          <h3 class="mt-6 text-2xl font-black text-foreground">
            News coming soon
          </h3>

          <p class="mx-auto mt-3 max-w-md text-sm leading-7 text-muted">
            Federation news, athlete achievements, championship results and important announcements will appear here.
          </p>

          <NuxtLink
            to="/news"
            class="mt-7 inline-flex items-center gap-2 text-sm font-black text-primary transition hover:gap-3"
          >
            Visit News Centre
            <ArrowUpRight :size="17" />
          </NuxtLink>
        </div>
      </div>

      <!-- Bottom CTA -->
     <div
  v-if="featuredNews || (items && items.length)"
  class="mt-12 flex justify-center"
>
  <NuxtLink
    to="/news"
    class="group inline-flex items-center gap-3 rounded-2xl bg-[#062b1a] px-7 py-4 text-sm font-black uppercase tracking-wide !text-white shadow-xl shadow-green-950/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-2xl"
  >
    <span class="!text-white">
      Explore All Federation Stories
    </span>

    <ArrowUpRight
      :size="18"
      class="shrink-0 !text-white transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
    />
  </NuxtLink>
</div>
    </div>
  </section>
</template>