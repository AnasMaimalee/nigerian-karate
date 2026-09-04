<script setup lang="ts">
import { ChevronLeft, ChevronRight, Download, X, MapPin, CalendarDays } from 'lucide-vue-next'

interface GalleryItem {
  id: number
  title: string
  image: string
  category: string
  date?: string
  location?: string
  description?: string
}

const props = defineProps<{
  modelValue: boolean
  items: GalleryItem[]
  activeIndex: number
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'update:activeIndex': [value: number]
}>()

const activeItem = computed(() => props.items[props.activeIndex])

const close = () => {
  emit('update:modelValue', false)
}

const next = () => {
  if (!props.items.length) return

  emit('update:activeIndex', (props.activeIndex + 1) % props.items.length)
}

const previous = () => {
  if (!props.items.length) return

  emit('update:activeIndex', (props.activeIndex - 1 + props.items.length) % props.items.length)
}

const handleKeydown = (event: KeyboardEvent) => {
  if (!props.modelValue) return

  if (event.key === 'Escape') close()
  if (event.key === 'ArrowRight') next()
  if (event.key === 'ArrowLeft') previous()
}

const formattedDate = computed(() => {
  if (!activeItem.value?.date) return ''

  return new Intl.DateTimeFormat('en-NG', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date(activeItem.value.date))
})

watch(() => props.modelValue, (value) => {
  if (import.meta.client) {
    document.body.style.overflow = value ? 'hidden' : ''
  }
})

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)

  if (import.meta.client) {
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="modelValue && activeItem" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3 backdrop-blur-xl sm:p-6" @click.self="close">
        <div class="relative flex h-full w-full max-w-7xl flex-col">
          <div class="flex shrink-0 items-center justify-between gap-4 pb-4 text-white">
            <div class="min-w-0">
              <p class="text-[10px] font-black uppercase tracking-[0.2em] text-primary-light">{{ activeItem.category }}</p>
              <h2 class="truncate text-lg font-black sm:text-xl">{{ activeItem.title }}</h2>
            </div>

            <div class="flex shrink-0 items-center gap-2">
              <span class="hidden rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-white/60 sm:inline-flex">
                {{ activeIndex + 1 }} / {{ items.length }}
              </span>

              <a :href="activeItem.image" target="_blank" rel="noopener noreferrer" class="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-primary" aria-label="Open image">
                <Download :size="18" />
              </a>

              <button class="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-red-500" aria-label="Close gallery" @click="close">
                <X :size="20" />
              </button>
            </div>
          </div>

          <div class="relative min-h-0 flex-1 overflow-hidden rounded-3xl border border-white/10 bg-black">
            <img :src="activeItem.image" :alt="activeItem.title" class="h-full w-full object-contain select-none" />

            <button v-if="items.length > 1" class="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur transition hover:bg-primary sm:left-5 sm:h-14 sm:w-14" aria-label="Previous image" @click="previous">
              <ChevronLeft :size="25" />
            </button>

            <button v-if="items.length > 1" class="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur transition hover:bg-primary sm:right-5 sm:h-14 sm:w-14" aria-label="Next image" @click="next">
              <ChevronRight :size="25" />
            </button>
          </div>

          <div class="flex shrink-0 flex-col gap-4 py-4 text-white/65 sm:flex-row sm:items-center sm:justify-between">
            <p v-if="activeItem.description" class="max-w-3xl text-sm leading-6">
              {{ activeItem.description }}
            </p>

            <div class="flex flex-wrap items-center gap-4 text-xs font-semibold">
              <span v-if="activeItem.location" class="inline-flex items-center gap-2">
                <MapPin :size="15" class="text-primary-light" />
                {{ activeItem.location }}
              </span>

              <span v-if="formattedDate" class="inline-flex items-center gap-2">
                <CalendarDays :size="15" class="text-primary-light" />
                {{ formattedDate }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,.fade-leave-active { transition: opacity 0.25s ease; }
.fade-enter-from,.fade-leave-to { opacity: 0; }
</style>