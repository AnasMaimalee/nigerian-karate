<script setup lang="ts">
import { ChevronLeft, ChevronRight, Images } from 'lucide-vue-next'

interface GalleryItem {
  id: number
  title: string
  image: string
  category: string
  date?: string
  location?: string
  description?: string
}

const props = withDefaults(defineProps<{
  items: GalleryItem[]
  autoplay?: boolean
  interval?: number
}>(), {
  autoplay: true,
  interval: 5000
})

const currentIndex = ref(0)
const isLightboxOpen = ref(false)

let autoplayTimer: ReturnType<typeof setInterval> | undefined
let touchStartX = 0
let touchEndX = 0

const total = computed(() => props.items.length)

const currentItem = computed(() => props.items[currentIndex.value])

const next = () => {
  if (!total.value) return

  currentIndex.value = (currentIndex.value + 1) % total.value
}

const previous = () => {
  if (!total.value) return

  currentIndex.value = (currentIndex.value - 1 + total.value) % total.value
}

const goTo = (index: number) => {
  currentIndex.value = index
}

const openLightbox = () => {
  isLightboxOpen.value = true
}

const handleTouchStart = (event: TouchEvent) => {
  touchStartX = event.changedTouches[0].screenX
}

const handleTouchEnd = (event: TouchEvent) => {
  touchEndX = event.changedTouches[0].screenX

  const difference = touchStartX - touchEndX

  if (Math.abs(difference) < 50) return

  if (difference > 0) {
    next()
  } else {
    previous()
  }
}

const startAutoplay = () => {
  if (!props.autoplay || total.value <= 1) return

  stopAutoplay()

  autoplayTimer = setInterval(() => {
    next()
  }, props.interval)
}

const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = undefined
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (isLightboxOpen.value) return

  if (event.key === 'ArrowRight') next()
  if (event.key === 'ArrowLeft') previous()
}

onMounted(() => {
  startAutoplay()

  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  stopAutoplay()

  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <section class="relative">
    <div v-if="!items.length" class="rounded-3xl border border-dashed border-border bg-surface p-12 text-center">
      <Images :size="36" class="mx-auto text-muted" />
      <p class="mt-4 text-sm font-bold text-muted">No gallery images available yet.</p>
    </div>

    <div v-else class="group relative overflow-hidden rounded-[2rem] bg-surface-dark shadow-card" @mouseenter="stopAutoplay" @mouseleave="startAutoplay">
      <div class="relative aspect-[4/5] overflow-hidden sm:aspect-[16/10] lg:aspect-[16/8]" @touchstart.passive="handleTouchStart" @touchend.passive="handleTouchEnd">
        <Transition name="gallery-slide" mode="out-in">
          <GallerySlide :key="currentItem.id" :item="currentItem" class="absolute inset-0" @open="openLightbox" />
        </Transition>
      </div>

      <div v-if="items.length > 1" class="absolute inset-x-0 bottom-5 z-20 flex items-center justify-between px-5 sm:bottom-6 sm:px-7">
        <div class="flex items-center gap-2">
          <button class="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur transition hover:scale-105 hover:bg-primary" aria-label="Previous gallery image" @click="previous">
            <ChevronLeft :size="21" />
          </button>

          <button class="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur transition hover:scale-105 hover:bg-primary" aria-label="Next gallery image" @click="next">
            <ChevronRight :size="21" />
          </button>
        </div>

        <div class="hidden items-center gap-2 sm:flex">
          <button v-for="(_, index) in items" :key="index" class="h-2 rounded-full transition-all duration-300" :class="index === currentIndex ? 'w-8 bg-primary-light' : 'w-2 bg-white/30 hover:bg-white/60'" :aria-label="`Go to image ${index + 1}`" @click="goTo(index)" />
        </div>

        <div class="rounded-full border border-white/10 bg-black/30 px-3 py-2 text-xs font-black text-white backdrop-blur">
          {{ currentIndex + 1 }} / {{ items.length }}
        </div>
      </div>
    </div>

    <GalleryLightbox v-model="isLightboxOpen" v-model:active-index="currentIndex" :items="items" />
  </section>
</template>

<style scoped>
.gallery-slide-enter-active,.gallery-slide-leave-active { transition: opacity 0.45s ease, transform 0.45s ease; }
.gallery-slide-enter-from { opacity: 0; transform: scale(1.04); }
.gallery-slide-leave-to { opacity: 0; transform: scale(0.98); }
</style>