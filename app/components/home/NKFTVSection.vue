<script setup lang="ts">
import {
  computed,
  ref
} from 'vue'

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Play,
  X,
  Youtube
} from 'lucide-vue-next'

interface VideoItem {
  id: number | string
  title: string
  videoId: string
  thumbnail?: string
  description?: string
  category?: string
  date?: string
  views?: string
  duration?: string
  live?: boolean
}

const defaultVideos: VideoItem[] = [
  {
    id: 1,
    title: 'Karate Federation of Nigeria (KFN) Championship Highlights',
    videoId: 'dQw4w9WgXcQ',
    category: 'Championship',
    description:
      'Watch exciting moments, powerful performances and unforgettable highlights from Karate Federation of Nigeria (KFN) competitions.',
    views: '12K views',
    duration: '08:24'
  },
  {
    id: 2,
    title: 'Inside Karate Federation of Nigeria (KFN) Training',
    videoId: 'ScMzIvxBSi4',
    category: 'Training',
    views: '8.4K views',
    duration: '06:18'
  },
  {
    id: 3,
    title: 'Meet Nigeria’s Karate Champions',
    videoId: 'ysz5S6PUM-U',
    category: 'Athletes',
    views: '15K views',
    duration: '10:42'
  },
  {
    id: 4,
    title: 'National Karate Tournament',
    videoId: 'aqz-KE-bpKQ',
    category: 'Competition',
    views: '9.7K views',
    duration: '07:30'
  },
  {
    id: 5,
    title: 'Karate Techniques and Discipline',
    videoId: 'jNQXAC9IVRw',
    category: 'Training',
    views: '6.2K views',
    duration: '05:16'
  },
  {
    id: 6,
    title: 'Road To The Championship',
    videoId: 'M7lc1UVf-VE',
    category: 'Documentary',
    views: '18K views',
    duration: '12:08'
  }
]

const props = withDefaults(
  defineProps<{
    featuredVideo?: VideoItem | null
    videos?: VideoItem[]
  }>(),
  {
    featuredVideo: null,
    videos: () => []
  }
)

/*
|--------------------------------------------------------------------------
| VIDEOS
|--------------------------------------------------------------------------
*/

const allVideos = computed(() => {
  return props.videos.length
    ? props.videos
    : defaultVideos
})

const activeVideo = ref<VideoItem | null>(
  props.featuredVideo || defaultVideos[0]
)

const displayFeaturedVideo = computed(() => {
  return activeVideo.value
    || props.featuredVideo
    || allVideos.value[0]
    || null
})

/*
|--------------------------------------------------------------------------
| PLAYER
|--------------------------------------------------------------------------
*/

const playerOpen = ref(false)

const openVideo = (video: VideoItem) => {
  activeVideo.value = video
  playerOpen.value = true
}

const closeVideo = () => {
  playerOpen.value = false
}

/*
|--------------------------------------------------------------------------
| YOUTUBE
|--------------------------------------------------------------------------
*/

const getThumbnail = (video: VideoItem) => {
  if (video.thumbnail) {
    return video.thumbnail
  }

  return `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`
}

const getYouTubeUrl = (video: VideoItem, autoplay = false) => {
  return `https://www.youtube.com/embed/${video.videoId}?rel=0&modestbranding=1&autoplay=${autoplay ? 1 : 0}`
}

/*
|--------------------------------------------------------------------------
| CAROUSEL
|--------------------------------------------------------------------------
*/

const carousel = ref<HTMLElement | null>(null)

const scrollCarousel = (direction: 'left' | 'right') => {
  if (!carousel.value) return

  const amount = carousel.value.clientWidth * 0.8

  carousel.value.scrollBy({
    left: direction === 'right' ? amount : -amount,
    behavior: 'smooth'
  })
}

const selectVideo = (video: VideoItem) => {
  activeVideo.value = video
}
</script>

<template>
  <section
    class="relative isolate overflow-hidden bg-[#07150f] py-20 text-white sm:py-24 lg:py-28"
  >
    <!-- BACKGROUND -->

    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0d3b2a] via-[#07150f] to-[#020806]"
    />

    <div
      class="pointer-events-none absolute -left-40 top-0 h-[32rem] w-[32rem] rounded-full bg-[#16a34a]/15 blur-3xl"
    />

    <div
      class="pointer-events-none absolute -right-40 bottom-0 h-[32rem] w-[32rem] rounded-full bg-[#22c55e]/10 blur-3xl"
    />

    <div class="container-nkf relative z-10">

      <!-- HEADER -->

      <div
        class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
      >
        <div class="max-w-3xl">

          <!-- EYEBROW -->

          <div
            class="inline-flex items-center gap-3 rounded-full border border-[#22c55e]/30 bg-[#22c55e]/10 px-4 py-2"
          >
            <span class="relative flex h-2.5 w-2.5">
              <span
                class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22c55e] opacity-70"
              />

              <span
                class="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#22c55e]"
              />
            </span>

            <span
              class="text-[10px] font-black uppercase tracking-[0.25em] text-[#86efac]"
            >
              Watch Karate Federation of Nigeria (KFN)
            </span>
          </div>

          <!-- TITLE -->

          <h2
            class="mt-6 text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            NKF

            <span class="block text-[#22c55e]">
              TV.
            </span>
          </h2>

          <!-- DESCRIPTION -->

          <p
            class="mt-6 max-w-2xl text-sm leading-8 text-[#a7b5ad] sm:text-base"
          >
            Championship highlights, athlete stories, training sessions and
            unforgettable moments from Karate Federation of Nigeria (KFN).
          </p>
        </div>

        <NuxtLink
          to="/gallery"
          class="group inline-flex w-fit items-center gap-3 rounded-2xl border border-[#ffffff]/10 bg-[#0d2118] px-6 py-4 text-sm font-black text-white transition duration-300 hover:-translate-y-1 hover:border-[#22c55e]/50 hover:bg-[#15803d] hover:shadow-xl hover:shadow-[#22c55e]/10"
        >
          Visit NKF Media

          <ArrowUpRight
            :size="18"
            class="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </NuxtLink>
      </div>

      <!-- FEATURED VIDEO -->

      <div
        v-if="displayFeaturedVideo"
        class="mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1d15] shadow-2xl"
      >
        <div
          class="grid lg:grid-cols-[1.2fr_0.8fr]"
        >

          <!-- VIDEO -->

          <div
            class="relative min-h-[380px] overflow-hidden bg-black"
          >
            <img
              :src="getThumbnail(displayFeaturedVideo)"
              :alt="displayFeaturedVideo.title"
              class="absolute inset-0 h-full w-full object-cover"
            >

            <div
              class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10"
            />

            <!-- PLAY BUTTON -->

            <button
              class="group absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#22c55e] text-white shadow-2xl shadow-black/50 transition duration-300 hover:scale-110 hover:bg-[#16a34a]"
              @click="openVideo(displayFeaturedVideo)"
            >
              <Play
                :size="34"
                fill="currentColor"
                class="ml-1"
              />
            </button>

            <!-- FEATURED BADGE -->

            <div
              class="absolute left-6 top-6"
            >
              <span
                class="inline-flex items-center gap-2 rounded-full bg-[#22c55e] px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white shadow-lg"
              >
                <Youtube :size="14" />

                Featured Video
              </span>
            </div>

            <!-- TITLE -->

            <div
              class="absolute bottom-0 left-0 right-0 p-6 sm:p-8"
            >
              <span
                v-if="displayFeaturedVideo.category"
                class="text-[10px] font-black uppercase tracking-[0.2em] text-[#86efac]"
              >
                {{ displayFeaturedVideo.category }}
              </span>

              <h3
                class="mt-3 max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl"
              >
                {{ displayFeaturedVideo.title }}
              </h3>
            </div>
          </div>

          <!-- CONTENT -->

          <div
            class="flex flex-col justify-center bg-[#0b1d15] p-7 sm:p-10"
          >
            <span
              class="text-[10px] font-black uppercase tracking-[0.25em] text-[#22c55e]"
            >
              NKF Featured
            </span>

            <h3
              class="mt-4 text-2xl font-black leading-tight text-white sm:text-3xl"
            >
              {{ displayFeaturedVideo.title }}
            </h3>

            <p
              v-if="displayFeaturedVideo.description"
              class="mt-5 text-sm leading-7 text-[#9caea4]"
            >
              {{ displayFeaturedVideo.description }}
            </p>

            <div
              class="mt-8 flex flex-wrap gap-3"
            >
              <span
                v-if="displayFeaturedVideo.views"
                class="rounded-xl border border-white/10 bg-[#10271b] px-4 py-3 text-xs font-bold text-[#cbd5cf]"
              >
                {{ displayFeaturedVideo.views }}
              </span>

              <span
                v-if="displayFeaturedVideo.duration"
                class="rounded-xl border border-white/10 bg-[#10271b] px-4 py-3 text-xs font-bold text-[#cbd5cf]"
              >
                {{ displayFeaturedVideo.duration }}
              </span>
            </div>

            <button
              class="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#22c55e] px-6 py-4 text-sm font-black text-white shadow-xl shadow-[#22c55e]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#16a34a]"
              @click="openVideo(displayFeaturedVideo)"
            >
              Watch Now

              <Play
                :size="18"
                fill="currentColor"
              />
            </button>
          </div>
        </div>
      </div>

      <!-- MORE VIDEOS -->

      <div
        v-if="allVideos.length"
        class="mt-16"
      >
        <div
          class="mb-7 flex items-center justify-between"
        >
          <div>
            <span
              class="text-[10px] font-black uppercase tracking-[0.22em] text-[#22c55e]"
            >
              Keep Watching
            </span>

            <h3
              class="mt-2 text-2xl font-black text-white sm:text-3xl"
            >
              More From NKF TV
            </h3>
          </div>

          <!-- CAROUSEL BUTTONS -->

          <div
            class="hidden gap-3 sm:flex"
          >
            <button
              class="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#0d2118] text-white transition hover:border-[#22c55e] hover:bg-[#15803d]"
              @click="scrollCarousel('left')"
            >
              <ArrowLeft :size="18" />
            </button>

            <button
              class="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#0d2118] text-white transition hover:border-[#22c55e] hover:bg-[#15803d]"
              @click="scrollCarousel('right')"
            >
              <ArrowRight :size="18" />
            </button>
          </div>
        </div>

        <!-- CAROUSEL -->

        <div
          ref="carousel"
          class="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 scrollbar-hide"
        >
          <article
            v-for="video in allVideos"
            :key="video.id"
            class="group relative w-[280px] shrink-0 snap-start overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0b1d15] transition duration-300 hover:-translate-y-2 hover:border-[#22c55e]/40 hover:shadow-2xl sm:w-[320px]"
          >
            <!-- THUMBNAIL -->

            <button
              class="relative block h-[190px] w-full overflow-hidden bg-black"
              @click="openVideo(video)"
            >
              <img
                :src="getThumbnail(video)"
                :alt="video.title"
                class="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              >

              <div
                class="absolute inset-0 bg-black/25 transition group-hover:bg-black/10"
              />

              <div
                class="absolute inset-0 flex items-center justify-center"
              >
                <div
                  class="flex h-14 w-14 items-center justify-center rounded-full bg-[#22c55e] text-white shadow-xl transition duration-300 group-hover:scale-110"
                >
                  <Play
                    :size="22"
                    fill="currentColor"
                    class="ml-1"
                  />
                </div>
              </div>

              <span
                v-if="video.duration"
                class="absolute bottom-3 right-3 rounded-lg bg-black/80 px-2 py-1 text-[10px] font-black text-white"
              >
                {{ video.duration }}
              </span>
            </button>

            <!-- CONTENT -->

            <div
              class="p-5"
            >
              <span
                v-if="video.category"
                class="text-[9px] font-black uppercase tracking-[0.18em] text-[#22c55e]"
              >
                {{ video.category }}
              </span>

              <h4
                class="mt-2 line-clamp-2 text-base font-black leading-snug text-white"
              >
                {{ video.title }}
              </h4>

              <div
                class="mt-4 flex items-center justify-between"
              >
                <span
                  class="text-xs font-medium text-[#829087]"
                >
                  {{ video.views || 'NKF TV' }}
                </span>

                <button
                  class="text-xs font-black text-[#22c55e] transition hover:text-[#86efac]"
                  @click="selectVideo(video)"
                >
                  Select
                </button>
              </div>
            </div>

            <!-- ACTIVE INDICATOR -->

            <div
              v-if="displayFeaturedVideo?.id === video.id"
              class="absolute left-0 top-0 h-1 w-full bg-[#22c55e]"
            />
          </article>
        </div>
      </div>

      <!-- EMPTY STATE -->

      <div
        v-if="!displayFeaturedVideo && !allVideos.length"
        class="mt-12 rounded-[2rem] border border-dashed border-white/15 bg-[#0b1d15] px-6 py-20 text-center"
      >
        <div
          class="mx-auto flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-[#22c55e]/10 text-[#22c55e]"
        >
          <Youtube :size="34" />
        </div>

        <h3
          class="mt-6 text-2xl font-black text-white"
        >
          NKF TV Coming Soon
        </h3>

        <p
          class="mx-auto mt-3 max-w-md text-sm leading-7 text-[#8d9b92]"
        >
          Championship highlights, athlete stories and exclusive Karate Federation of Nigeria (KFN)
          Federation videos will appear here.
        </p>
      </div>

    </div>

    <!-- VIDEO MODAL -->

    <Teleport to="body">
      <Transition name="fade">

        <div
          v-if="playerOpen && activeVideo"
          class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
          @click.self="closeVideo"
        >
          <div
            class="relative w-full max-w-6xl"
          >
            <!-- CLOSE -->

            <button
              class="absolute right-0 top-[-55px] flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-white transition hover:bg-white hover:text-black"
              @click="closeVideo"
            >
              <X :size="16" />

              Close
            </button>

            <!-- PLAYER -->

            <div
              class="aspect-video overflow-hidden rounded-[1.5rem] border border-white/10 bg-black shadow-2xl"
            >
              <iframe
                :src="getYouTubeUrl(activeVideo, true)"
                :title="activeVideo.title"
                class="h-full w-full"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
            </div>
          </div>
        </div>

      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>