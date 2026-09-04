<script setup lang="ts">
import { ExternalLink, Play, Youtube } from 'lucide-vue-next'

const props = withDefaults(defineProps<{
  videoId?: string
  url?: string
  title?: string
  autoplay?: boolean
  muted?: boolean
  controls?: boolean
  privacyEnhanced?: boolean
}>(), {
  videoId: '',
  url: '',
  title: 'NKF TV Video',
  autoplay: false,
  muted: false,
  controls: true,
  privacyEnhanced: true
})

const extractVideoId = (value: string) => {
  if (!value) return ''

  if (/^[a-zA-Z0-9_-]{11}$/.test(value)) return value

  try {
    const parsed = new URL(value)

    if (parsed.hostname.includes('youtu.be')) {
      return parsed.pathname.replace('/', '')
    }

    if (parsed.pathname.includes('/embed/')) {
      return parsed.pathname.split('/embed/')[1]?.split('/')[0] || ''
    }

    if (parsed.searchParams.get('v')) {
      return parsed.searchParams.get('v') || ''
    }

    if (parsed.pathname.includes('/shorts/')) {
      return parsed.pathname.split('/shorts/')[1]?.split('/')[0] || ''
    }
  } catch {
    return ''
  }

  return ''
}

const resolvedVideoId = computed(() => {
  return extractVideoId(props.videoId || props.url)
})

const embedUrl = computed(() => {
  if (!resolvedVideoId.value) return ''

  const params = new URLSearchParams({
    rel: '0',
    modestbranding: '1',
    playsinline: '1',
    controls: props.controls ? '1' : '0'
  })

  if (props.autoplay) params.set('autoplay', '1')
  if (props.muted) params.set('mute', '1')

  const domain = props.privacyEnhanced ? 'https://www.youtube-nocookie.com' : 'https://www.youtube.com'

  return `${domain}/embed/${resolvedVideoId.value}?${params.toString()}`
})

const youtubeUrl = computed(() => {
  if (!resolvedVideoId.value) return ''

  return `https://www.youtube.com/watch?v=${resolvedVideoId.value}`
})
</script>

<template>
  <div class="group relative aspect-video w-full overflow-hidden rounded-3xl bg-surface-dark shadow-card">
    <iframe v-if="embedUrl" :src="embedUrl" :title="title" class="absolute inset-0 h-full w-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />

    <div v-else class="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-surface-dark to-black px-6 text-center text-white">
      <div class="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-xl">
        <Youtube :size="30" />
      </div>

      <h3 class="mt-5 text-xl font-black">
        Video unavailable
      </h3>

      <p class="mt-2 max-w-sm text-sm leading-6 text-white/50">
        Add a valid YouTube video ID or YouTube URL.
      </p>
    </div>

    <a v-if="youtubeUrl" :href="youtubeUrl" target="_blank" rel="noopener noreferrer" class="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/40 text-white opacity-0 backdrop-blur transition group-hover:opacity-100 hover:bg-red-600" aria-label="Watch on YouTube">
      <ExternalLink :size="17" />
    </a>
  </div>
</template>