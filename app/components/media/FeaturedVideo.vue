<script setup lang="ts">
import { ArrowUpRight, CalendarDays, Eye, Play, Radio, Youtube } from 'lucide-vue-next'

interface FeaturedVideoItem {
  id: number
  title: string
  videoId: string
  thumbnail?: string
  description?: string
  category?: string
  date?: string
  views?: string
  live?: boolean
}

const props = defineProps<{
  video: FeaturedVideoItem
}>()

const emit = defineEmits<{
  play: [video: FeaturedVideoItem]
}>()

const thumbnailUrl = computed(() => {
  if (props.video.thumbnail) return props.video.thumbnail

  return `https://i.ytimg.com/vi/${props.video.videoId}/maxresdefault.jpg`
})

const formattedDate = computed(() => {
  if (!props.video.date) return ''

  return new Intl.DateTimeFormat('en-NG', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date(props.video.date))
})
</script>

<template>
  <section class="overflow-hidden rounded-[2rem] border border-border bg-white shadow-card">
    <div class="grid lg:grid-cols-[1.35fr_0.85fr]">
      <button class="group relative aspect-video overflow-hidden bg-surface-dark text-left lg:aspect-auto lg:min-h-[460px]" :aria-label="`Play ${video.title}`" @click="emit('play', video)">
        <img :src="thumbnailUrl" :alt="video.title" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />

        <div class="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/40"></div>

        <div v-if="video.live" class="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white shadow-xl">
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-70"></span>
            <span class="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
          </span>

          Live Now
        </div>

        <div class="absolute inset-0 flex items-center justify-center">
          <span class="flex h-20 w-20 items-center justify-center rounded-full bg-red-600 text-white shadow-2xl transition duration-300 group-hover:scale-110 group-hover:bg-red-500">
            <Play :size="32" fill="currentColor" />
          </span>
        </div>

        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white lg:hidden">
          <h2 class="text-2xl font-black">
            {{ video.title }}
          </h2>
        </div>
      </button>

      <div class="flex flex-col justify-center p-6 md:p-8 lg:p-10">
        <div class="flex flex-wrap items-center gap-3">
          <span v-if="video.live" class="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-red-600">
            <Radio :size="13" />
            Live Coverage
          </span>

          <span v-else-if="video.category" class="rounded-full bg-primary-light px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-primary">
            {{ video.category }}
          </span>

          <span class="inline-flex items-center gap-2 text-xs font-semibold text-muted">
            <Youtube :size="15" class="text-red-600" />
            NKF TV
          </span>
        </div>

        <h2 class="mt-6 text-3xl font-black leading-tight tracking-tight text-foreground sm:text-4xl">
          {{ video.title }}
        </h2>

        <p v-if="video.description" class="mt-5 text-sm leading-7 text-muted">
          {{ video.description }}
        </p>

        <div class="mt-6 flex flex-wrap gap-4 text-xs font-semibold text-muted">
          <span v-if="formattedDate" class="inline-flex items-center gap-2">
            <CalendarDays :size="16" class="text-primary" />
            {{ formattedDate }}
          </span>

          <span v-if="video.views" class="inline-flex items-center gap-2">
            <Eye :size="16" class="text-primary" />
            {{ video.views }} views
          </span>
        </div>

        <button class="mt-8 inline-flex w-fit items-center gap-3 rounded-2xl bg-primary px-6 py-4 text-sm font-black text-white shadow-xl shadow-primary/20 transition hover:-translate-y-1 hover:bg-primary-dark" @click="emit('play', video)">
          <Play :size="18" fill="currentColor" />
          Watch Video
          <ArrowUpRight :size="17" />
        </button>
      </div>
    </div>
  </section>
</template>