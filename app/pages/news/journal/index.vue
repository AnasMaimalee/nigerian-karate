<script setup lang="ts">
import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Download,
  FileText,
  Search,
  ShieldCheck
} from 'lucide-vue-next'

useHead({
  title: 'Nigerian Karate Journal | Nigerian Karate Federation'
})

const search = ref('')

const editions = [
  {
    id: 1,
    volume: 'Volume 01',
    issue: 'Issue 01',
    title: 'The Future of Nigerian Karate',
    description:
      'Stories, developments, achievements and important conversations shaping the future of karate in Nigeria.',
    date: 'Latest Edition',
    image: '/images/hero/logo.jpeg',
    featured: true
  },
  {
    id: 2,
    volume: 'Volume 01',
    issue: 'Issue 02',
    title: 'Championship & Athlete Development',
    description:
      'A closer look at competitions, athlete development and the future generation of Nigerian karate.',
    date: 'Coming Soon',
    image: '/images/hero/logo.jpeg'
  },
  {
    id: 3,
    volume: 'Volume 01',
    issue: 'Issue 03',
    title: 'Leadership, Governance & Growth',
    description:
      'Exploring leadership, governance and the continued development of Nigerian karate.',
    date: 'Coming Soon',
    image: '/images/hero/logo.jpeg'
  }
]

const filteredEditions = computed(() => {
  const query = search.value.toLowerCase().trim()

  if (!query) {
    return editions
  }

  return editions.filter((edition) =>
    `${edition.title} ${edition.volume} ${edition.issue}`
      .toLowerCase()
      .includes(query)
  )
})
</script>

<template>
  <main class="min-h-screen bg-slate-50">

    <!-- HERO -->

    <section
      class="relative overflow-hidden bg-[#08130d] py-20 text-white sm:py-24 lg:py-32"
    >
      <div class="pointer-events-none absolute inset-0">

        <div
          class="absolute -left-40 top-0 h-[35rem] w-[35rem] rounded-full bg-primary/20 blur-3xl"
        />

        <div
          class="absolute right-0 top-0 h-full w-[40%] border-l border-white/5"
        />

        <div
          class="absolute right-[15%] top-0 h-full w-px bg-white/5"
        />

      </div>

      <div class="relative container-nkf">

        <div class="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

          <!-- CONTENT -->

          <div>

            <span
              class="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-[9px] font-black uppercase tracking-[0.2em] text-emerald-400"
            >
              <ShieldCheck :size="14" />

              Official Federation Publication
            </span>

            <h1
              class="mt-8 text-5xl font-black leading-[0.9] tracking-tight sm:text-6xl lg:text-8xl"
            >
              NIGERIAN

              <span class="block text-emerald-400">
                KARATE
              </span>

              JOURNAL
            </h1>

            <p
              class="mt-8 max-w-2xl text-base leading-8 text-white/55 sm:text-lg"
            >
              The official publication of the Nigerian Karate Federation —
              documenting our athletes, championships, leadership,
              development and the people shaping the future of Nigerian
              karate.
            </p>

            <div class="mt-10 flex flex-wrap gap-4">

              <a
                href="#latest"
                class="inline-flex items-center gap-3 rounded-2xl bg-primary px-6 py-4 text-sm font-black text-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
              >
                Explore Latest Edition

                <ArrowUpRight :size="18" />
              </a>

              <NuxtLink
                to="/news"
                class="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-black text-white transition hover:bg-white hover:text-slate-950"
              >
                All Federation News

                <ArrowUpRight :size="18" />
              </NuxtLink>

            </div>

          </div>


          <!-- JOURNAL COVER -->

          <div
            class="relative mx-auto w-full max-w-[380px]"
          >

            <div
              class="absolute -inset-8 rounded-[3rem] bg-primary/20 blur-3xl"
            />

            <div
              class="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-emerald-600 to-[#08130d] p-8 shadow-2xl"
            >

              <div
                class="flex items-center justify-between"
              >
                <span
                  class="text-[9px] font-black uppercase tracking-[0.2em] text-white/60"
                >
                  Official Publication
                </span>

                <BookOpen :size="20" />
              </div>

              <img
                src="/images/hero/logo.jpeg"
                alt="Nigerian Karate Federation"
                class="mx-auto mt-10 h-28 w-28 rounded-3xl object-contain"
              >

              <div class="mt-10">

                <span
                  class="text-[9px] font-black uppercase tracking-[0.2em] text-emerald-300"
                >
                  Volume 01 · Issue 01
                </span>

                <h2
                  class="mt-4 text-4xl font-black leading-[0.95]"
                >
                  THE FUTURE OF

                  <span class="block text-emerald-300">
                    NIGERIAN KARATE.
                  </span>
                </h2>

              </div>

              <div
                class="mt-12 border-t border-white/10 pt-5"
              >
                <span
                  class="text-[8px] font-black uppercase tracking-[0.2em] text-white/40"
                >
                  Nigerian Karate Federation
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>


    <!-- LATEST EDITION -->

    <section
      id="latest"
      class="container-nkf py-20 sm:py-24"
    >

      <div
        class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
      >

        <div>

          <span
            class="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary"
          >
            <FileText :size="15" />

            Publication Archive
          </span>

          <h2
            class="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl"
          >
            Latest Editions
          </h2>

          <p
            class="mt-4 max-w-xl text-sm leading-7 text-slate-500"
          >
            Explore official publications, stories and insights from the
            Nigerian Karate Federation.
          </p>

        </div>


        <!-- SEARCH -->

        <div
          class="relative w-full lg:max-w-sm"
        >
          <Search
            :size="18"
            class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            v-model="search"
            type="search"
            placeholder="Search editions..."
            class="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-5 text-sm font-bold outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
          >
        </div>

      </div>


      <!-- EDITIONS -->

      <div
        class="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3"
      >

        <article
          v-for="edition in filteredEditions"
          :key="edition.id"
          class="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white transition duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl"
        >

          <!-- COVER -->

          <div
            class="relative aspect-[4/3.2] overflow-hidden bg-[#08130d]"
          >

            <div
              class="absolute inset-0 bg-gradient-to-br from-primary via-emerald-700 to-[#08130d]"
            />

            <img
              :src="edition.image"
              :alt="edition.title"
              class="absolute bottom-6 right-6 h-24 w-24 rounded-3xl object-contain opacity-90 transition duration-500 group-hover:scale-110"
            >

            <div
              class="relative p-7"
            >
              <span
                class="text-[9px] font-black uppercase tracking-[0.2em] text-white/60"
              >
                {{ edition.volume }}
              </span>

              <h3
                class="mt-4 max-w-[80%] text-2xl font-black leading-tight text-white"
              >
                {{ edition.title }}
              </h3>
            </div>

          </div>


          <!-- CONTENT -->

          <div class="p-7">

            <div
              class="flex items-center justify-between gap-4"
            >

              <span
                class="text-[9px] font-black uppercase tracking-[0.16em] text-primary"
              >
                {{ edition.issue }}
              </span>

              <span
                class="flex items-center gap-1.5 text-[9px] font-bold text-slate-400"
              >
                <CalendarDays :size="13" />

                {{ edition.date }}
              </span>

            </div>

            <p
              class="mt-5 text-sm leading-7 text-slate-500"
            >
              {{ edition.description }}
            </p>

            <div
              class="mt-7 flex gap-3"
            >

              <button
                type="button"
                class="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-xs font-black text-white transition hover:bg-primary"
              >
                Read Journal

                <ArrowUpRight :size="15" />
              </button>

              <button
                type="button"
                class="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-primary hover:bg-primary hover:text-white"
                aria-label="Download journal"
              >
                <Download :size="17" />
              </button>

            </div>

          </div>

        </article>

      </div>


      <!-- EMPTY -->

      <div
        v-if="filteredEditions.length === 0"
        class="mt-12 rounded-[2rem] border border-dashed border-slate-300 bg-white p-12 text-center"
      >
        <BookOpen
          :size="35"
          class="mx-auto text-slate-300"
        />

        <h3
          class="mt-5 text-xl font-black text-slate-900"
        >
          No journal editions found
        </h3>

        <p
          class="mt-2 text-sm text-slate-500"
        >
          Try searching with a different keyword.
        </p>

      </div>

    </section>

  </main>
</template>