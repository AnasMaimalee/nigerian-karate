<script setup lang="ts">
import { ChevronLeft, ChevronRight, PlayCircle } from 'lucide-vue-next'

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

const props = withDefaults(defineProps<{
  videos: VideoItem[]
  title?: string
}>(), {
  title: 'Latest From NKF TV'
})

const emit = defineEmits<{
  select: [video: VideoItem]
}>()

const scrollContainer = ref<HTMLElement | null>(null)

const scrollLeft = () => {
  scrollContainer.value?.scrollBy({
    left: -360,
    behavior: 'smooth'
  })
}

const scrollRight = () => {
  scrollContainer.value?.scrollBy({
    left: 360,
    behavior: 'smooth'
  })
}
</script>

<template>
  <section>
    <div class="mb-7 flex items-end justify-between gap-5">
      <div>
        <div class="flex items-center gap-2 text-primary">
          <PlayCircle :size="18" />

          <span class="text-[10px] font-black uppercase tracking-[0.2em]">
            NKF TV
          </span>
        </div>

        <h2 class="mt-2 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
          {{ title }}
        </h2>
      </div>

      <div class="hidden items-center gap-2 sm:flex">
        <button class="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white text-foreground transition hover:border-primary hover:bg-primary hover:text-white" aria-label="Previous videos" @click="scrollLeft">
          <ChevronLeft :size="20" />
        </button>

        <button class="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white text-foreground transition hover:border-primary hover:bg-primary hover:text-white" aria-label="Next videos" @click="scrollRight">
          <ChevronRight :size="20" />
        </button>
      </div>
    </div>

    <div ref="scrollContainer" class="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 scrollbar-hide">
      <div v-for="video in videos" :key="video.id" class="w-[82vw] shrink-0 snap-start sm:w-[380px] lg:w-[400px]">
        <VideoCard :video="video" @select="emit('select', $event)" />
      </div>
    </div>
  </section>
</template>