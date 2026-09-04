<script setup lang="ts">
import {
  Images,
  Play,
  Video,
  Search,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-vue-next'

const search = ref('')
const category = ref('all')

const lightboxOpen = ref(false)
const activeIndex = ref(0)

const videoModalOpen = ref(false)
const activeVideo = ref<VideoItem | null>(null)

interface GalleryItem {
  id: number
  title: string
  image: string
  category: string
  location: string
  date: string
  description: string
}

interface VideoItem {
  id: number
  title: string
  thumbnail: string
  youtubeId: string
  category: string
  duration?: string
  description?: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'National Karate Championship',
    image:
      'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1400&q=85',
    category: 'championships',
    location: 'Abuja, Nigeria',
    date: '2026-08-20',
    description:
      'Highlights from the Nigerian National Karate Championship.'
  },

  {
    id: 2,
    title: 'Elite Kumite Competition',
    image:
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1400&q=85',
    category: 'championships',
    location: 'Lagos, Nigeria',
    date: '2026-07-12',
    description:
      'Nigeria’s top karate athletes competing at elite level.'
  },

  {
    id: 3,
    title: 'National Team Training',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1400&q=85',
    category: 'training',
    location: 'Abuja, Nigeria',
    date: '2026-06-15',
    description:
      'Preparation and training sessions with the national team.'
  },

  {
    id: 4,
    title: 'Karate Development Seminar',
    image:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=85',
    category: 'seminars',
    location: 'Kano, Nigeria',
    date: '2026-05-08',
    description:
      'Coaches and athletes participating in technical development sessions.'
  },

  {
    id: 5,
    title: 'Young Karate Champions',
    image:
      'https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=1400&q=85',
    category: 'athletes',
    location: 'Nigeria',
    date: '2026-04-20',
    description:
      'The next generation of Nigerian karate champions.'
  },

  {
    id: 6,
    title: 'Karate Community Programme',
    image:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1400&q=85',
    category: 'community',
    location: 'Port Harcourt, Nigeria',
    date: '2026-03-14',
    description:
      'Growing karate participation through community programmes.'
  }
]

const videos: VideoItem[] = [
  {
    id: 1,
    title: 'National Karate Championship Highlights',
    thumbnail:
      'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1400&q=85',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Championship',
    duration: '08:24',
    description:
      'Watch the best moments from Nigeria’s national karate championship.'
  },

  {
    id: 2,
    title: 'Inside Nigerian Karate Training Camp',
    thumbnail:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1400&q=85',
    youtubeId: 'ysz5S6PUM-U',
    category: 'Training',
    duration: '12:41',
    description:
      'Go behind the scenes with Nigerian karate athletes.'
  },

  {
    id: 3,
    title: 'Meet Nigeria’s Karate Champions',
    thumbnail:
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1400&q=85',
    youtubeId: 'ScMzIvxBSi4',
    category: 'Athletes',
    duration: '06:32',
    description:
      'Stories from some of Nigeria’s leading karate athletes.'
  }
]

const filteredGallery = computed(() => {
  return galleryItems.filter((item) => {
    const matchesSearch =
      item.title
        .toLowerCase()
        .includes(search.value.toLowerCase()) ||
      item.description
        .toLowerCase()
        .includes(search.value.toLowerCase())

    const matchesCategory =
      category.value === 'all' ||
      item.category === category.value

    return matchesSearch && matchesCategory
  })
})

const openImage = (index: number) => {
  activeIndex.value = index
  lightboxOpen.value = true
}

const openVideo = (video: VideoItem) => {
  activeVideo.value = video
  videoModalOpen.value = true
}

const closeVideo = () => {
  videoModalOpen.value = false

  setTimeout(() => {
    activeVideo.value = null
  }, 300)
}
</script>

<template>
  <main class="min-h-screen bg-[#f5f8f6]">

    <!-- HERO -->
    <section
      class="relative isolate overflow-hidden bg-[#062b1a] py-24 text-white md:py-32"
    >
      <div class="pointer-events-none absolute inset-0">

        <div
          class="absolute inset-0 bg-gradient-to-br from-[#075a34] via-[#062b1a] to-[#020e08]"
        />

        <div
          class="absolute -left-40 top-[-120px] h-[500px] w-[500px] rounded-full bg-green-500/20 blur-[140px]"
        />

        <div
          class="absolute -right-40 bottom-[-150px] h-[500px] w-[500px] rounded-full bg-[#d7b96d]/15 blur-[150px]"
        />

        <div
          class="absolute inset-0 opacity-[0.035]"
          style="
            background-image:
              linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px);
            background-size: 70px 70px;
          "
        />
      </div>

      <div class="container-nkf relative z-10">

        <div class="max-w-4xl">

          <div
            class="inline-flex items-center gap-3 rounded-full border border-[#d7b96d]/25 bg-white/[0.06] px-4 py-2.5 backdrop-blur"
          >
            <span
              class="flex h-8 w-8 items-center justify-center rounded-full bg-[#d7b96d]/15 text-[#e8d18e]"
            >
              <Images :size="16" />
            </span>

            <span
              class="text-[10px] font-black uppercase tracking-[0.25em] text-[#e8d18e]"
            >
              Nigerian Karate Federation
            </span>
          </div>

          <h1
            class="mt-8 text-5xl font-black leading-[0.9] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            MOMENTS THAT

            <span
              class="mt-3 block bg-gradient-to-r from-[#e8d18e] via-[#fff1b8] to-[#d7b96d] bg-clip-text text-transparent"
            >
              DEFINE KARATE.
            </span>
          </h1>

          <p
            class="mt-8 max-w-2xl text-base font-medium leading-8 text-white/80 sm:text-lg"
          >
            Experience the power, discipline, passion and unforgettable
            moments shaping Nigerian karate.
          </p>

          <div
            class="mt-10 flex flex-wrap items-center gap-5"
          >
            <div
              class="flex items-center gap-3"
            >
              <span
                class="h-2.5 w-2.5 animate-pulse rounded-full bg-green-400 shadow-[0_0_18px_rgba(74,222,128,.9)]"
              />

              <span
                class="text-sm font-bold text-white"
              >
                Photos, videos & championship highlights
              </span>
            </div>

            <div
              class="hidden h-5 w-px bg-white/20 sm:block"
            />

            <span
              class="text-sm font-bold text-white/70"
            >
              Nigerian Karate Federation Media
            </span>
          </div>

        </div>

      </div>
    </section>


    <!-- PHOTO GALLERY -->
    <section
      class="py-20 lg:py-28"
    >
      <div class="container-nkf">

       <div class="mx-auto max-w-3xl text-center">

  <p
    class="text-[10px] font-black uppercase tracking-[0.25em] text-green-700"
  >
    Visual Stories
  </p>

  <h2
    class="mt-3 text-4xl font-black tracking-tight text-[#152019] sm:text-5xl"
  >
    The NKF Gallery
  </h2>

  <p
    class="mx-auto mt-4 max-w-2xl text-base font-medium leading-7 text-[#526058]"
  >
    Explore powerful moments from championships, athletes,
    training camps and karate development programmes.
  </p>

  <!-- TOTAL MOMENTS -->
  <div
    class="mt-6 inline-flex items-center gap-3 rounded-full border border-green-700/10 bg-white px-5 py-2.5 shadow-sm"
  >
    <div class="flex items-center gap-1.5">
      <span
        class="h-2 w-2 animate-pulse rounded-full bg-green-600"
      />

      <span
        class="h-2 w-2 animate-pulse rounded-full bg-green-500 [animation-delay:150ms]"
      />

      <span
        class="h-2 w-2 animate-pulse rounded-full bg-green-400 [animation-delay:300ms]"
      />
    </div>

    <span
      class="text-sm font-black text-[#26332b]"
    >
      {{ filteredGallery.length }}
      {{
        filteredGallery.length === 1
          ? 'Moment'
          : 'Moments'
      }}
    </span>
  </div>

</div>


        <!-- FILTER -->
        <div class="mt-10">
          <GalleryFilters
            v-model:search="search"
            v-model:category="category"
          />
        </div>


        <!-- FEATURED CAROUSEL -->
        <div
          v-if="filteredGallery.length"
          class="mt-10"
        >
          <GalleryCarousel
            :items="filteredGallery"
          />
        </div>


        <!-- PHOTO GRID -->
        <div
          v-if="filteredGallery.length"
          class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <button
            v-for="(item, index) in filteredGallery"
            :key="item.id"
            class="group relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#071a10] text-left shadow-xl shadow-green-950/[0.08]"
            @click="openImage(index)"
          >
            <img
              :src="item.image"
              :alt="item.title"
              class="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              loading="lazy"
            >

            <div
              class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"
            />

            <div
              class="absolute left-5 top-5"
            >
              <span
                class="rounded-full border border-white/15 bg-black/35 px-3 py-2 text-[10px] font-black uppercase tracking-widest text-white backdrop-blur"
              >
                {{ item.category }}
              </span>
            </div>

            <div
              class="absolute bottom-0 left-0 right-0 p-6 text-white"
            >
              <h3
                class="text-xl font-black tracking-tight"
              >
                {{ item.title }}
              </h3>

              <p
                class="mt-2 text-sm font-medium leading-6 text-white/80"
              >
                {{ item.description }}
              </p>
            </div>

          </button>
        </div>


        <!-- EMPTY -->
        <div
          v-else
          class="mt-10 rounded-[2rem] border border-dashed border-green-800/20 bg-white px-6 py-20 text-center"
        >
          <Images
            :size="44"
            class="mx-auto text-green-700"
          />

          <h3
            class="mt-6 text-2xl font-black text-[#172019]"
          >
            No moments found
          </h3>

          <p
            class="mt-3 text-sm font-semibold text-[#607067]"
          >
            Try changing your search or gallery category.
          </p>
        </div>

      </div>
    </section>


    <!-- VIDEO SECTION -->
    <section
      class="relative overflow-hidden bg-[#062b1a] py-20 text-white lg:py-28"
    >
      <div
        class="pointer-events-none absolute inset-0"
      >
        <div
          class="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-green-500/10 blur-[150px]"
        />

        <div
          class="absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#d7b96d]/10 blur-[150px]"
        />
      </div>

      <div class="container-nkf relative z-10">

        <div
          class="max-w-3xl"
        >
          <div
            class="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2"
          >
            <Video
              :size="16"
              class="text-[#e5ca83]"
            />

            <span
              class="text-[10px] font-black uppercase tracking-[0.25em] text-[#e5ca83]"
            >
              Watch NKF
            </span>
          </div>

          <h2
            class="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl"
          >
            KARATE IN

            <span class="block text-[#e5ca83]">
              MOTION.
            </span>
          </h2>

          <p
            class="mt-6 max-w-2xl text-base font-medium leading-8 text-white/80 sm:text-lg"
          >
            Watch championship highlights, athlete stories, training sessions
            and exclusive moments from Nigerian karate.
          </p>
        </div>


        <!-- VIDEO CAROUSEL -->
        <div
          class="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          <button
            v-for="video in videos"
            :key="video.id"
            type="button"
            class="group relative overflow-hidden rounded-[2rem] bg-black text-left shadow-2xl transition duration-500 hover:-translate-y-2"
            @click="openVideo(video)"
          >
            <div
              class="relative aspect-video overflow-hidden"
            >
              <img
                :src="video.thumbnail"
                :alt="video.title"
                class="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              >

              <div
                class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10"
              />

              <!-- PLAY BUTTON -->
              <div
                class="absolute inset-0 flex items-center justify-center"
              >
                <div
                  class="flex h-20 w-20 items-center justify-center rounded-full bg-white text-green-800 shadow-2xl transition duration-300 group-hover:scale-110 group-hover:bg-[#d7b96d]"
                >
                  <Play
                    :size="30"
                    fill="currentColor"
                    class="ml-1"
                  />
                </div>
              </div>


              <div
                class="absolute left-5 top-5"
              >
                <span
                  class="rounded-full bg-black/50 px-3 py-2 text-[10px] font-black uppercase tracking-widest text-white backdrop-blur"
                >
                  {{ video.category }}
                </span>
              </div>


              <div
                v-if="video.duration"
                class="absolute bottom-4 right-4 rounded-lg bg-black/70 px-2.5 py-1.5 text-xs font-black text-white"
              >
                {{ video.duration }}
              </div>
            </div>


            <div
              class="p-6"
            >
              <h3
                class="text-xl font-black leading-snug text-white"
              >
                {{ video.title }}
              </h3>

              <p
                v-if="video.description"
                class="mt-3 text-sm font-medium leading-6 text-white/75"
              >
                {{ video.description }}
              </p>

              <div
                class="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#e5ca83]"
              >
                <Play
                  :size="15"
                  fill="currentColor"
                />

                Watch Video
              </div>
            </div>

          </button>
        </div>

      </div>
    </section>


    <!-- IMAGE LIGHTBOX -->
    <GalleryLightbox
      v-model="lightboxOpen"
      v-model:active-index="activeIndex"
      :items="filteredGallery"
    />


    <!-- VIDEO MODAL -->
    <Teleport to="body">
      <Transition name="video-modal">
        <div
          v-if="videoModalOpen && activeVideo"
          class="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl sm:p-8"
          @click.self="closeVideo"
        >
          <div
            class="relative w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#08150e] shadow-2xl"
          >

            <!-- HEADER -->
            <div
              class="flex items-center justify-between gap-5 border-b border-white/10 px-5 py-4 sm:px-7"
            >
              <div class="min-w-0">
                <p
                  class="text-[10px] font-black uppercase tracking-[0.2em] text-[#e5ca83]"
                >
                  {{ activeVideo.category }}
                </p>

                <h3
                  class="mt-1 truncate text-lg font-black text-white sm:text-xl"
                >
                  {{ activeVideo.title }}
                </h3>
              </div>

              <button
                type="button"
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-red-500"
                @click="closeVideo"
              >
                <X :size="21" />
              </button>
            </div>


            <!-- VIDEO -->
            <div
              class="aspect-video bg-black"
            >
              <iframe
                :src="`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`"
                :title="activeVideo.title"
                class="h-full w-full"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowfullscreen
              />
            </div>


            <!-- FOOTER -->
            <div
              v-if="activeVideo.description"
              class="px-5 py-5 sm:px-7"
            >
              <p
                class="text-sm font-medium leading-7 text-white/80"
              >
                {{ activeVideo.description }}
              </p>
            </div>

          </div>
        </div>
      </Transition>
    </Teleport>

  </main>
</template>

<style scoped>
.video-modal-enter-active,
.video-modal-leave-active {
  transition: opacity 0.3s ease;
}

.video-modal-enter-from,
.video-modal-leave-to {
  opacity: 0;
}
</style>