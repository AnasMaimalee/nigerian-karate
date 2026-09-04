<script setup lang="ts">
import {
  Search,
  X,
  Newspaper,
  CalendarDays,
  Images,
  Play,
  Trophy,
  ArrowUpRight
} from 'lucide-vue-next'

const route = useRoute()

const search = ref(
  typeof route.query.q === 'string'
    ? route.query.q
    : ''
)

const activeType = ref('all')

const categories = [
  {
    label: 'All Results',
    value: 'all'
  },
  {
    label: 'News',
    value: 'news'
  },
  {
    label: 'Events',
    value: 'events'
  },
  {
    label: 'Gallery',
    value: 'gallery'
  },
  {
    label: 'Videos',
    value: 'videos'
  }
]

const searchResults = [
   {
    id: 2,
    title: 'Nigerian Karate Athletes Prepare for International Competition',
    description:
      'National team athletes continue their preparation ahead of major international competitions.',
    type: 'news',
    label: 'News',
    image:
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=85',
    link: '/news'
  },
  {
    id: 4,
    title: 'Elite Kumite Competition Highlights',
    description:
      'Watch exciting moments and performances from elite Nigerian karate competitions.',
    type: 'videos',
    label: 'Video',
    image:
      'https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=900&q=85',
    link: '/gallery'
  },
  {
    id: 2,
    title: 'Nigerian Karate Athletes Prepare for International Competition',
    description:
      'National team athletes continue their preparation ahead of major international competitions.',
    type: 'news',
    label: 'News',
    image:
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=85',
    link: '/news'
  },
  {
    id: 1,
    title: 'National Karate Championship 2026',
    description:
      'Highlights, updates and important information from the Nigerian National Karate Championship.',
    type: 'events',
    label: 'Event',
    image:
      'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=900&q=85',
    link: '/events/national-karate-championship-2026'
  },
   {
    id: 2,
    title: 'Nigerian Karate Athletes Prepare for International Competition',
    description:
      'National team athletes continue their preparation ahead of major international competitions.',
    type: 'news',
    label: 'News',
    image:
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=85',
    link: '/news'
  },
    {
    id: 1,
    title: 'National Karate Championship 2026',
    description:
      'Highlights, updates and important information from the Nigerian National Karate Championship.',
    type: 'events',
    label: 'Event',
    image:
      'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=900&q=85',
    link: '/events/national-karate-championship-2026'
  },
  {
    id: 2,
    title: 'Nigerian Karate Athletes Prepare for International Competition',
    description:
      'National team athletes continue their preparation ahead of major international competitions.',
    type: 'news',
    label: 'News',
    image:
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=85',
    link: '/news'
  },
  {
    id: 1,
    title: 'National Karate Championship 2026',
    description:
      'Highlights, updates and important information from the Nigerian National Karate Championship.',
    type: 'events',
    label: 'Event',
    image:
      'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=900&q=85',
    link: '/events/national-karate-championship-2026'
  },
  {
    id: 4,
    title: 'Elite Kumite Competition Highlights',
    description:
      'Watch exciting moments and performances from elite Nigerian karate competitions.',
    type: 'videos',
    label: 'Video',
    image:
      'https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=900&q=85',
    link: '/gallery'
  },
  {
    id: 1,
    title: 'National Karate Championship 2026',
    description:
      'Highlights, updates and important information from the Nigerian National Karate Championship.',
    type: 'events',
    label: 'Event',
    image:
      'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=900&q=85',
    link: '/events/national-karate-championship-2026'
  },
  {
    id: 3,
    title: 'National Team Training Camp',
    description:
      'Powerful moments from training sessions with Nigerian karate athletes.',
    type: 'gallery',
    label: 'Gallery',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85',
    link: '/gallery'
  },
  {
    id: 4,
    title: 'Elite Kumite Competition Highlights',
    description:
      'Watch exciting moments and performances from elite Nigerian karate competitions.',
    type: 'videos',
    label: 'Video',
    image:
      'https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=900&q=85',
    link: '/gallery'
  },
  {
    id: 3,
    title: 'National Team Training Camp',
    description:
      'Powerful moments from training sessions with Nigerian karate athletes.',
    type: 'gallery',
    label: 'Gallery',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85',
    link: '/gallery'
  },
  {
    id: 4,
    title: 'Elite Kumite Competition Highlights',
    description:
      'Watch exciting moments and performances from elite Nigerian karate competitions.',
    type: 'videos',
    label: 'Video',
    image:
      'https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=900&q=85',
    link: '/gallery'
  },
  {
    id: 3,
    title: 'National Team Training Camp',
    description:
      'Powerful moments from training sessions with Nigerian karate athletes.',
    type: 'gallery',
    label: 'Gallery',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85',
    link: '/gallery'
  },
  {
    id: 1,
    title: 'National Karate Championship 2026',
    description:
      'Highlights, updates and important information from the Nigerian National Karate Championship.',
    type: 'events',
    label: 'Event',
    image:
      'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=900&q=85',
    link: '/events/national-karate-championship-2026'
  },
  {
    id: 3,
    title: 'National Team Training Camp',
    description:
      'Powerful moments from training sessions with Nigerian karate athletes.',
    type: 'gallery',
    label: 'Gallery',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85',
    link: '/gallery'
  },
]

const filteredResults = computed(() => {
  const query = search.value.trim().toLowerCase()

  return searchResults.filter((item) => {
    const matchesSearch =
      !query ||
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)

    const matchesCategory =
      activeType.value === 'all' ||
      item.type === activeType.value

    return matchesSearch && matchesCategory
  })
})

const clearSearch = () => {
  search.value = ''
  activeType.value = 'all'
}

const getIcon = (type: string) => {
  if (type === 'news') return Newspaper
  if (type === 'events') return CalendarDays
  if (type === 'gallery') return Images
  if (type === 'videos') return Play

  return Trophy
}
</script>

<template>
  <main class="min-h-screen bg-[#f5f8f6]">

    <!-- HERO -->
    <section
      class="relative isolate overflow-hidden bg-[#062b1a] py-20 text-white sm:py-24 lg:py-28"
    >
      <!-- BACKGROUND -->
      <div class="pointer-events-none absolute inset-0">

        <div
          class="absolute inset-0 bg-gradient-to-br from-[#064e2c] via-[#062b1a] to-[#031a10]"
        />

        <div
          class="absolute -left-32 top-[-150px] h-[420px] w-[420px] rounded-full bg-green-500/15 blur-[120px]"
        />

        <div
          class="absolute -right-32 bottom-[-180px] h-[450px] w-[450px] rounded-full bg-[#d7b96d]/10 blur-[140px]"
        />

        <div
          class="absolute inset-0 opacity-[0.035]"
          style="
            background-image:
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px);
            background-size: 70px 70px;
          "
        />

      </div>

      <div class="container-nkf relative z-10">

        <div class="mx-auto max-w-4xl text-center">

          <div
            class="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2.5 backdrop-blur"
          >
            <span
              class="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/15 text-green-300"
            >
              <Search :size="16" />
            </span>

            <span
              class="text-[10px] font-black uppercase tracking-[0.22em] text-green-200"
            >
              Search Nigerian Karate
            </span>
          </div>

          <h1
            class="mt-7 text-5xl font-black leading-[0.92] tracking-tight sm:text-6xl md:text-7xl"
          >
            FIND WHAT YOU'RE

            <span
              class="mt-3 block bg-gradient-to-r from-green-300 via-white to-[#d7b96d] bg-clip-text text-transparent"
            >
              LOOKING FOR.
            </span>
          </h1>

          <p
            class="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg"
          >
            Search through federation news, championships, events,
            gallery moments and karate stories.
          </p>

          <!-- SEARCH -->
          <div
            class="relative mx-auto mt-10 max-w-2xl"
          >
            <Search
              :size="21"
              class="absolute left-5 top-1/2 -translate-y-1/2 text-green-700"
            />

            <input
              v-model="search"
              type="search"
              autofocus
              placeholder="What are you looking for?"
              class="h-16 w-full rounded-2xl border border-white/10 bg-white pl-14 pr-14 text-base font-bold text-[#16231b] outline-none shadow-2xl placeholder:text-[#8a968f] focus:ring-4 focus:ring-green-500/20"
            >

            <button
              v-if="search"
              type="button"
              class="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-xl bg-red-50 text-red-600 transition hover:bg-red-500 hover:text-white"
              @click="clearSearch"
            >
              <X :size="17" />
            </button>
          </div>

        </div>

      </div>
    </section>

    <!-- RESULTS -->
    <section class="py-16 sm:py-20 lg:py-24">

      <div class="container-nkf">

        <!-- HEADER -->
        <div
        class="flex flex-col items-center justify-center border-b border-[#dbe5dd] pb-8 text-center"
        >
        <!-- TITLE AREA -->
        <div class="flex flex-col items-center">

            <p
            class="text-[10px] font-black uppercase tracking-[0.25em] text-green-700"
            >
            Search Results
            </p>

            <h2
            class="mt-3 text-4xl font-black tracking-tight text-[#152019] sm:text-5xl"
            >
            Explore NKF
            </h2>

            <p
            class="mt-4 max-w-xl text-sm font-semibold leading-7 text-[#526058] sm:text-base"
            >
            Discover news, events, galleries and videos from the Nigerian Karate Federation.
            </p>

        </div>

        <!-- TOTAL -->
        <div
            class="mt-6 inline-flex items-center gap-3 rounded-full border border-green-700/10 bg-white px-5 py-3 shadow-sm"
        >

            <!-- BLINKING DOTS -->
            <div
            class="flex items-center gap-1.5"
            >
            <span
                class="h-1.5 w-1.5 animate-pulse rounded-full bg-green-700"
            />

            <span
                class="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500 [animation-delay:150ms]"
            />

            <span
                class="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400 [animation-delay:300ms]"
            />
            </div>

            <!-- RESULT COUNT -->
            <span
            class="text-sm font-black text-[#26332b]"
            >
            {{ filteredResults.length }}

            {{
                filteredResults.length === 1
                ? 'Result'
                : 'Results'
            }}
            </span>

        </div>
        </div>


        <!-- FILTERS -->
        <div
          class="mx-auto mt-10 flex max-w-3xl justify-center"
        >
          <div
            class="flex max-w-full gap-2 overflow-x-auto rounded-2xl border border-[#dbe5dd] bg-white p-2 shadow-lg shadow-green-950/[0.04] scrollbar-hide"
          >
            <button
              v-for="category in categories"
              :key="category.value"
              type="button"
              class="shrink-0 rounded-xl px-4 py-2.5 text-xs font-black transition-all duration-300"
              :class="
                activeType === category.value
                  ? 'bg-green-700 text-white shadow-md shadow-green-900/20'
                  : 'text-[#56635b] hover:bg-green-50 hover:text-green-800'
              "
              @click="activeType = category.value"
            >
              {{ category.label }}
            </button>
          </div>
        </div>


       <!-- RESULTS GRID -->
<div
  v-if="filteredResults.length"
  class="mt-12 grid gap-6 md:grid-cols-2"
>
  <NuxtLink
    v-for="result in filteredResults"
    :key="result.id"
    :to="result.link"
    class="group overflow-hidden rounded-[2rem] border border-[#dbe5dd] bg-white transition-all duration-500 hover:-translate-y-1 hover:border-green-700/20 hover:shadow-xl hover:shadow-green-950/[0.08]"
  >
    <!-- EQUAL IMAGE + CONTENT -->
    <div
      class="grid h-full grid-cols-1 sm:grid-cols-2"
    >
      <!-- IMAGE -->
      <div
        class="relative min-h-[280px] overflow-hidden sm:min-h-full"
      >
        <img
          :src="result.image"
          :alt="result.title"
          class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        >

        <div
          class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"
        />
      </div>

      <!-- CONTENT -->
      <div
        class="flex min-w-0 flex-col justify-between p-6 sm:p-7"
      >
        <!-- TOP -->
        <div>
          <div
            class="flex items-center justify-between gap-3"
          >
            <div
              class="inline-flex max-w-[calc(100%-2.5rem)] items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-green-800"
            >
              <component
                :is="getIcon(result.type)"
                :size="13"
                class="shrink-0"
              />

              <span class="truncate">
                {{ result.label }}
              </span>
            </div>

            <ArrowUpRight
              :size="19"
              class="shrink-0 text-green-700 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </div>

          <!-- TITLE -->
          <h3
            class="mt-6 text-xl font-black leading-snug tracking-tight text-[#172019] transition-colors duration-300 group-hover:text-green-700 sm:text-2xl"
          >
            {{ result.title }}
          </h3>

          <!-- DESCRIPTION -->
          <p
            class="mt-4 text-sm font-semibold leading-7 text-[#526058] sm:text-[15px]"
          >
            {{ result.description }}
          </p>
        </div>

        <!-- BOTTOM ACTION -->
        <div
          class="mt-7 flex items-center justify-between border-t border-[#e7ede9] pt-5"
        >
          <span
            class="text-xs font-black uppercase tracking-wider text-green-700"
          >
            Explore
          </span>

          <span
            class="flex h-9 w-9 items-center justify-center rounded-full bg-green-50 text-green-700 transition-all duration-300 group-hover:bg-green-700 group-hover:text-white"
          >
            <ArrowUpRight :size="16" />
          </span>
        </div>
      </div>
    </div>
  </NuxtLink>
</div>


        <!-- EMPTY -->
        <div
          v-else
          class="mx-auto mt-12 max-w-2xl rounded-[2rem] border border-dashed border-[#cbd8cf] bg-white px-6 py-20 text-center"
        >

          <div
            class="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-green-50 text-green-700"
          >
            <Search :size="34" />
          </div>

          <h3
            class="mt-6 text-2xl font-black text-[#172019]"
          >
            No results found
          </h3>

          <p
            class="mx-auto mt-3 max-w-md text-sm font-medium leading-7 text-[#65736a]"
          >
            We couldn't find anything matching your search.
            Try using a different keyword.
          </p>

          <button
            type="button"
            class="mt-7 rounded-xl bg-green-700 px-6 py-3 text-sm font-black text-white transition hover:bg-green-800"
            @click="clearSearch"
          >
            Clear Search
          </button>

        </div>

      </div>

    </section>

  </main>
</template>