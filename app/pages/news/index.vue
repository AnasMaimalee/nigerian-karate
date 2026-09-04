<script setup lang="ts">
import { computed, ref } from 'vue'
import { Search, X, Newspaper } from 'lucide-vue-next'

definePageMeta({
  title: 'News | Karate Federation of Nigeria (KFN) Federation'
})

type NewsCategory =
  | 'all'
  | 'Federation'
  | 'Championship'
  | 'Athletes'
  | 'Development'
  | 'International'

interface NewsItem {
  id: number
  title: string
  slug: string
  excerpt: string
  image: string
  category: Exclude<NewsCategory, 'all'>
  date: string
  readTime: string
  featured?: boolean
}

const search = ref('')
const activeCategory = ref<NewsCategory>('all')

const categories: {
  label: string
  value: NewsCategory
}[] = [
  {
    label: 'All News',
    value: 'all'
  },
  {
    label: 'Federation',
    value: 'Federation'
  },
  {
    label: 'Championship',
    value: 'Championship'
  },
  {
    label: 'Athletes',
    value: 'Athletes'
  },
  {
    label: 'Development',
    value: 'Development'
  },
  {
    label: 'International',
    value: 'International'
  }
]

/*
|--------------------------------------------------------------------------
| FEATURED NEWS
|--------------------------------------------------------------------------
*/

const featuredNews: NewsItem = {
  id: 1,
  title:
    'Karate Federation of Nigeria (KFN)Announces New Era of Athlete Development',
  slug: 'new-era-athlete-development',
  category: 'Federation',
  image:
    'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1600&q=90',
  excerpt:
    'The Karate Federation of Nigeria (KFN)continues its commitment to developing elite athletes, strengthening grassroots programmes and creating new opportunities for karate practitioners across Nigeria.',
  date: '2026-08-28',
  readTime: '4 min',
  featured: true
}

/*
|--------------------------------------------------------------------------
| NEWS ITEMS
|--------------------------------------------------------------------------
*/

const newsItems: NewsItem[] = [
  {
    id: 2,
    title:
      'National Karate Championship Preparations Enter Final Stage',
    slug: 'nkf-expands-grassroots-development',
    category: 'Championship',
    image:
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1000&q=85',
    excerpt:
      'Athletes, officials and organisers are preparing for one of the biggest karate competitions of the year.',
    date: '2026-08-24',
    readTime: '3 min'
  },
  {
    id: 3,
    title:
      'Young Karate Federation of Nigeria (KFN) Athletes Shine at Development Camp',
    slug: 'nkf-expands-grassroots-development',
    category: 'Athletes',
    image:
      'https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=1000&q=85',
    excerpt:
      'The next generation of Karate Federation of Nigeria (KFN) athletes continues to demonstrate discipline, determination and remarkable potential.',
    date: '2026-08-20',
    readTime: '5 min'
  },
  {
    id: 4,
    title:
      'NKF Strengthens Technical Development Across Nigeria',
    slug: 'nkf-technical-development',
    category: 'Development',
    image:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=85',
    excerpt:
      'New technical programmes are helping coaches, officials and athletes improve their skills across Nigeria.',
    date: '2026-08-16',
    readTime: '4 min'
  },
  {
    id: 5,
    title:
      'Karate Federation of Nigeria (KFN) Delegation Prepares for International Competition',
    slug: 'nkf-expands-grassroots-development',
    category: 'International',
    image:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=85',
    excerpt:
      'Nigeria’s top karate athletes are preparing to represent the country at an upcoming international competition.',
    date: '2026-08-12',
    readTime: '4 min'
  },
  {
    id: 6,
    title:
      'Federation Announces New Grassroots Karate Initiative',
    slug: 'new-grassroots-karate-initiative',
    category: 'Federation',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=85',
    excerpt:
      'The Karate Federation of Nigeria (KFN)continues to expand opportunities for young athletes through grassroots development.',
    date: '2026-08-08',
    readTime: '3 min'
  },
  {
    id: 7,
    title:
      'Elite Athletes Complete Intensive National Training Programme',
    slug: 'elite-athletes-training-programme',
    category: 'Athletes',
    image:
      'https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&w=1000&q=85',
    excerpt:
      'Nigeria’s elite karate athletes complete another intensive stage of preparation and technical development.',
    date: '2026-08-03',
    readTime: '5 min'
  },
  {
    id: 8,
    title:
      'Coaches Participate in Advanced Karate Technical Seminar',
    slug: 'advanced-karate-technical-seminar',
    category: 'Development',
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85',
    excerpt:
      'Karate coaches from different parts of Nigeria participated in an advanced technical development seminar.',
    date: '2026-07-29',
    readTime: '4 min'
  },
  {
    id: 9,
    title:
      'Nigeria Strengthens Presence in Global Karate Community',
    slug: 'nigeria-global-karate-community',
    category: 'International',
    image:
      'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1000&q=85',
    excerpt:
      'The federation continues to build stronger relationships and opportunities within the international karate community.',
    date: '2026-07-24',
    readTime: '3 min'
  },
  {
    id: 10,
    title:
      'National Referees Gather for Rules and Officiating Workshop',
    slug: 'national-referees-workshop',
    category: 'Development',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=85',
    excerpt:
      'Technical officials gathered for a workshop focused on improving officiating standards and consistency.',
    date: '2026-07-18',
    readTime: '4 min'
  }
]

/*
|--------------------------------------------------------------------------
| FILTERED NEWS
|--------------------------------------------------------------------------
*/

const filteredNews = computed(() => {
  const query = search.value
    .trim()
    .toLowerCase()

  return newsItems.filter((item) => {
    const matchesCategory =
      activeCategory.value === 'all'
      || item.category === activeCategory.value

    const matchesSearch =
      !query
      || [
        item.title,
        item.excerpt,
        item.category
      ].some(value =>
        value.toLowerCase().includes(query)
      )

    return matchesCategory && matchesSearch
  })
})

const hasActiveFilters = computed(() => {
  return (
    search.value.trim().length > 0
    || activeCategory.value !== 'all'
  )
})

const clearFilters = () => {
  search.value = ''
  activeCategory.value = 'all'
}
</script>

<template>
  <main class="min-h-screen bg-[#f6f5f2]">

    <!-- HERO -->
<section
  class="relative isolate overflow-hidden bg-[#062b1a] py-20 text-white sm:py-24 lg:py-32"
>
  <!-- PREMIUM BACKGROUND -->
  <div class="pointer-events-none absolute inset-0">

    <!-- Deep gradient -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-[#064e2c] via-[#062b1a] to-[#031a10]"
    />

    <!-- Green glow -->
    <div
      class="absolute -left-32 top-[-120px] h-[420px] w-[420px] rounded-full bg-[#16a34a]/20 blur-[120px]"
    />

    <!-- Gold glow -->
    <div
      class="absolute -right-32 bottom-[-150px] h-[450px] w-[450px] rounded-full bg-[#d7b96d]/15 blur-[130px]"
    />

    <!-- Subtle pattern lines -->
    <div
      class="absolute inset-0 opacity-[0.04]"
      style="
        background-image:
          linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px);
        background-size: 70px 70px;
      "
    />

    <!-- Large background text -->
    <div
      class="absolute -bottom-10 -right-10 hidden select-none text-[180px] font-black leading-none tracking-tighter text-white/[0.025] lg:block"
    >
      NKF
    </div>
  </div>

  <!-- CONTENT -->
  <div class="container-nkf relative z-10">

    <div class="max-w-4xl">

      <!-- EYEBROW -->
      <div
        class="inline-flex items-center gap-3 rounded-full border border-[#d7b96d]/25 bg-white/[0.06] px-4 py-2.5 backdrop-blur-md"
      >
        <span
          class="flex h-7 w-7 items-center justify-center rounded-full bg-[#d7b96d]/15 text-[#e5ca83]"
        >
          <Newspaper :size="14" />
        </span>

        <span
          class="text-[10px] font-black uppercase tracking-[0.22em] text-[#e5ca83]"
        >
          Karate Federation of Nigeria (KFN) Federation
        </span>
      </div>

      <!-- TITLE -->
      <h1
        class="mt-8 text-5xl font-black leading-[0.9] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
      >
        THE LATEST

        <span
          class="mt-3 block bg-gradient-to-r from-[#e5ca83] via-[#fff0b8] to-[#d7b96d] bg-clip-text text-transparent"
        >
          NEWS & STORIES.
        </span>
      </h1>

      <!-- DESCRIPTION -->
      <p
        class="mt-8 max-w-2xl text-base leading-8 text-white/75 sm:text-lg"
      >
        Discover the latest news, championship updates, athlete
        achievements and important developments shaping the future of
        Karate Federation of Nigeria (KFN).
      </p>

      <!-- BOTTOM INFO -->
      <div
        class="mt-10 flex flex-wrap items-center gap-6 text-sm"
      >
        <div class="flex items-center gap-3">
          <span
            class="h-2.5 w-2.5 rounded-full bg-[#22c55e] shadow-[0_0_18px_rgba(34,197,94,0.9)]"
          />

          <span class="font-semibold text-white/70">
            Official Federation Updates
          </span>
        </div>

        <div class="hidden h-5 w-px bg-white/15 sm:block" />

        <span class="font-semibold text-white/45">
          Competitions • Athletes • Development
        </span>
      </div>

    </div>

  </div>

  <!-- Bottom fade -->
  <div
    class="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent"
  />
</section>

    <!-- FEATURED NEWS -->
    <section
      class="bg-[#f6f5f2] py-16 sm:py-20 lg:py-24"
    >
      <div class="container-nkf">

        <SectionHeading
          eyebrow="Featured Story"
          title="Inside Karate Federation of Nigeria (KFN)"
          description="The latest important story from the Karate Federation of Nigeria (KFN) Federation."
        />

        <div class="mt-10">
          <FeaturedNews :news="featuredNews" />
        </div>

      </div>
    </section>

   <!-- NEWS EXPLORER -->
<section
  class="relative overflow-hidden border-t border-[#dce9df] bg-[#f5f8f6] py-16 sm:py-20 lg:py-24"
>
  <!-- BACKGROUND DECORATION -->
  <div class="pointer-events-none absolute inset-0 overflow-hidden">
    <div
      class="absolute -left-32 top-40 h-96 w-96 rounded-full bg-green-500/[0.06] blur-3xl"
    />

    <div
      class="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-[#d7b96d]/[0.07] blur-3xl"
    />
  </div>

  <div class="container-nkf relative z-10">

   <!-- HEADER -->
<div
  class="flex flex-col gap-6 border-b border-[#dbe5dd] pb-8 lg:flex-row lg:items-end lg:justify-between"
>
  <SectionHeading
    eyebrow="News Centre"
    title="Latest Updates"
    description="Explore the latest federation news, athlete stories, competitions and developments shaping Karate Federation of Nigeria (KFN)."
  />

  <!-- TOTAL RECORDS -->
  <div
    class="flex items-center gap-3 lg:pb-1"
  >
    <!-- BLINKING DOTS -->
    <div class="flex items-center gap-1.5">
      <span
        class="h-2 w-2 animate-pulse rounded-full bg-green-600"
      />

      <span
        class="h-2 w-2 animate-pulse rounded-full bg-green-600 [animation-delay:150ms]"
      />

      <span
        class="h-2 w-2 animate-pulse rounded-full bg-green-600 [animation-delay:300ms]"
      />
    </div>

    <!-- COUNT -->
    <span
      class="text-2xl font-black tracking-tight text-green-800"
    >
      {{ filteredNews.length }}
    </span>

    <!-- LABEL -->
    <span
      class="text-xs font-bold uppercase tracking-wider text-[#657068]"
    >
      {{
        filteredNews.length === 1
          ? 'Total Record'
          : 'Total Records'
      }}
    </span>
  </div>
</div>


<!-- SEARCH + FILTERS -->
<div
  class="relative mt-10 flex flex-col items-center"
>
  <!-- CENTERED FILTER PANEL -->
  <div
    class="w-full lg:w-1/2"
  >
    <div
      class="rounded-[2rem] border border-[#dce5df] bg-white p-4 shadow-xl shadow-green-950/[0.04] sm:p-6"
    >
      <div class="flex flex-col gap-5">

        <!-- SEARCH -->
        <div class="relative w-full">
          <Search
            :size="19"
            class="absolute left-5 top-1/2 -translate-y-1/2 text-[#7b8780]"
          />

          <input
            v-model="search"
            type="search"
            placeholder="Search news, competitions and stories..."
            class="h-14 w-full rounded-2xl border border-[#dce5df] bg-[#f8faf9] pl-12 pr-5 text-sm font-medium text-[#1f2a23] outline-none transition placeholder:text-[#9aa49e] focus:border-green-700 focus:bg-white focus:ring-4 focus:ring-green-700/10"
          >
        </div>

        <!-- DIVIDER -->
        <div class="h-px bg-[#edf1ee]" />

        <!-- CATEGORY FILTERS -->
        <div
          class="flex gap-2 overflow-x-auto pb-1 scrollbar-hide"
        >
          <button
            v-for="category in categories"
            :key="category.value"
            type="button"
            class="shrink-0 rounded-xl border px-4 py-3 text-xs font-black transition-all duration-300"
            :class="
              activeCategory === category.value
                ? 'border-green-700 bg-green-700 text-white shadow-lg shadow-green-900/20'
                : 'border-transparent bg-[#f3f6f4] text-[#68736c] hover:border-green-700/10 hover:bg-green-50 hover:text-green-800'
            "
            @click="activeCategory = category.value"
          >
            {{ category.label }}
          </button>
        </div>

      </div>
    </div>

    <!-- CLEAR FILTERS -->
    <div
      v-if="hasActiveFilters"
      class="mt-4 flex justify-center"
    >
      <button
        type="button"
        class="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-green-700/15 bg-green-50 px-5 text-xs font-black text-green-800 transition hover:-translate-y-0.5 hover:bg-green-700 hover:text-white"
        @click="clearFilters"
      >
        <X :size="16" />

        Clear Filters
      </button>
    </div>
  </div>
</div>

    <!-- NEWS GRID -->
    <div class="mt-12">

      <!-- SECTION LABEL -->
      <div
        v-if="filteredNews.length"
        class="mb-6 flex items-center gap-3"
      >
        <span class="h-2 w-2 rounded-full bg-[#16a34a]" />

        <p
          class="text-[10px] font-black uppercase tracking-[0.22em] text-green-800"
        >
          Latest from the Federation
        </p>
      </div>

      <NewsGrid
        v-if="filteredNews.length"
        :items="filteredNews"
        :columns="3"
      />

      <!-- EMPTY -->
      <div
        v-else
        class="rounded-[2rem] border border-dashed border-[#cbd8cf] bg-white px-6 py-20 text-center shadow-xl shadow-green-950/[0.025]"
      >
        <div
          class="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-green-50 text-green-700"
        >
          <Newspaper :size="34" />
        </div>

        <h3
          class="mt-6 text-2xl font-black tracking-tight text-[#172019]"
        >
          No news found
        </h3>

        <p
          class="mx-auto mt-3 max-w-md text-sm leading-7 text-[#6f7b73]"
        >
          We could not find any articles matching your search or selected
          category. Try adjusting your filters and explore more federation
          updates.
        </p>

        <button
          type="button"
          class="mt-8 inline-flex items-center gap-2 rounded-2xl bg-green-700 px-6 py-4 text-sm font-black text-white shadow-lg shadow-green-900/20 transition hover:-translate-y-1 hover:bg-green-800"
          @click="clearFilters"
        >
          <X :size="17" />

          Reset Filters
        </button>
      </div>

    </div>

  </div>
</section>

  </main>
</template>