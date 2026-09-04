<script setup lang="ts">
import { CalendarDays, Clock3, Eye, Play, Radio } from 'lucide-vue-next'

interface VideoItem {
  id: number
  title: string
  videoId: string
  thumbnail?: string
  duration?: string
  date?: string
  views?: string
  category?: string
  description?: string
  live?: boolean
}

const props = defineProps<{
  video: VideoItem
}>()

const emit = defineEmits<{
  select: [video: VideoItem]
}>()

const thumbnailUrl = computed(() => {
  if (props.video.thumbnail) return props.video.thumbnail

  if (props.video.videoId) {
    return `https://i.ytimg.com/vi/${props.video.videoId}/maxresdefault.jpg`
  }

  return ''
})

const formattedDate = computed(() => {
  if (!props.video.date) return ''

  return new Intl.DateTimeFormat('en-NG', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(new Date(props.video.date))
})
</script>

<template>
  <article class="group overflow-hidden rounded-3xl border border-border bg-white shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-card">
    <button class="relative block aspect-video w-full overflow-hidden bg-surface-dark text-left" :aria-label="`Play ${video.title}`" @click="emit('select', video)">
      <img v-if="thumbnailUrl" :src="thumbnailUrl" :alt="video.title" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" @error="($event.target as HTMLImageElement).style.display = 'none'" />

      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>

      <div v-if="video.live" class="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-red-600 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-white shadow-lg">
        <span class="relative flex h-2 w-2">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
          <span class="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
        </span>

        LIVE
      </div>

      <span v-else-if="video.duration" class="absolute bottom-4 right-4 rounded-lg bg-black/75 px-2.5 py-1.5 text-[10px] font-black text-white backdrop-blur">
        {{ video.duration }}
      </span>

      <span class="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red-600 text-white shadow-2xl transition duration-300 group-hover:scale-110 group-hover:bg-red-500">
        <Play :size="25" fill="currentColor" />
      </span>
    </button>

    <div class="p-5">
      <div class="flex items-center gap-3">
        <span v-if="video.category" class="rounded-full bg-primary-light px-3 py-1 text-[10px] font-black uppercase tracking-widest text-primary">
          {{ video.category }}
        </span>

        <span v-if="formattedDate" class="inline-flex items-center gap-1.5 text-xs font-medium text-muted">
          <CalendarDays :size="14" />
          {{ formattedDate }}
        </span>
      </div>

      <h3 class="mt-4 line-clamp-2 text-lg font-black leading-snug tracking-tight text-foreground transition group-hover:text-primary">
        {{ video.title }}
      </h3>

      <p v-if="video.description" class="mt-2 line-clamp-2 text-sm leading-6 text-muted">
        {{ video.description }}
      </p>

      <div class="mt-4 flex items-center gap-4 border-t border-border pt-4 text-xs font-semibold text-muted">
        <span v-if="video.views" class="inline-flex items-center gap-1.5">
          <Eye :size="15" class="text-primary" />
          {{ video.views }} views
        </span>

        <span v-if="video.live" class="inline-flex items-center gap-1.5 text-red-600">
          <Radio :size="15" />
          Streaming now
        </span>

        <span v-else-if="video.duration" class="inline-flex items-center gap-1.5">
          <Clock3 :size="15" class="text-primary" />
          {{ video.duration }}
        </span>
      </div>
    </div>
  </article>
</template>