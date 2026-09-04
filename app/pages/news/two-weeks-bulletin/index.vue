<script setup lang="ts">
import {
  ArrowUpRight,
  CalendarDays,
  Newspaper,
  Search
} from 'lucide-vue-next'

useHead({
  title: 'Two Weeks Bulletin | Karate Federation of Nigeria (KFN) Federation'
})

const search = ref('')

const bulletins = [
  {
    id: 1,
    title: 'NKF Two Weeks Bulletin',
    period: 'Current Bulletin',
    description:
      'Official updates, activities, competitions and developments from across the Karate Federation of Nigeria (KFN) Federation.',
    date: 'Latest Publication'
  },
  {
    id: 2,
    title: 'Federation Activities & Development',
    period: 'Previous Bulletin',
    description:
      'A summary of federation programmes, athlete activities and important national developments.',
    date: 'Previous Edition'
  },
  {
    id: 3,
    title: 'Championship & Technical Updates',
    period: 'Archive Bulletin',
    description:
      'Important updates relating to championships, technical programmes and karate development.',
    date: 'Archive'
  }
]

const filteredBulletins = computed(() => {
  const query = search.value.toLowerCase().trim()

  if (!query) return bulletins

  return bulletins.filter((bulletin) =>
    `${bulletin.title} ${bulletin.period}`
      .toLowerCase()
      .includes(query)
  )
})
</script>

<template>
  <main class="min-h-screen bg-slate-50">

    <!-- HERO -->

    <section
      class="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24"
    >
      <div
        class="absolute inset-0 opacity-20"
      >
        <div
          class="absolute left-0 top-0 h-80 w-80 rounded-full bg-primary blur-3xl"
        />
      </div>

      <div class="relative container-nkf">

        <span
          class="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.22em] text-emerald-400"
        >
          <Newspaper :size="15" />

          Official Federation Updates
        </span>

        <h1
          class="mt-6 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl"
        >
          TWO WEEKS

          <span class="block text-primary">
            BULLETIN.
          </span>
        </h1>

        <p
          class="mt-7 max-w-2xl text-base leading-8 text-white/55"
        >
          Stay informed with important activities, announcements,
          championships and developments from the Karate Federation of Nigeria (KFN) Federation.
        </p>

      </div>

    </section>


    <!-- CONTENT -->

    <section class="container-nkf py-20">

      <div
        class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
      >

        <div>
          <h2 class="text-3xl font-black text-slate-950">
            Bulletin Archive
          </h2>

          <p class="mt-3 text-sm text-slate-500">
            Browse official NKF bulletins and updates.
          </p>
        </div>

        <div class="relative w-full lg:max-w-sm">

          <Search
            :size="18"
            class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            v-model="search"
            placeholder="Search bulletins..."
            class="w-full rounded-xl border border-slate-200 bg-white py-4 pl-12 pr-5 text-sm outline-none focus:border-primary"
          >

        </div>

      </div>


      <div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        <article
          v-for="bulletin in filteredBulletins"
          :key="bulletin.id"
          class="group rounded-[1.75rem] border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl"
        >

          <div
            class="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary"
          >
            <Newspaper :size="25" />
          </div>

          <span
            class="mt-6 block text-[9px] font-black uppercase tracking-[0.18em] text-primary"
          >
            {{ bulletin.period }}
          </span>

          <h3
            class="mt-3 text-xl font-black text-slate-950"
          >
            {{ bulletin.title }}
          </h3>

          <p
            class="mt-4 text-sm leading-7 text-slate-500"
          >
            {{ bulletin.description }}
          </p>

          <div
            class="mt-6 flex items-center justify-between border-t border-slate-100 pt-5"
          >
            <span
              class="flex items-center gap-2 text-[9px] font-bold text-slate-400"
            >
              <CalendarDays :size="13" />

              {{ bulletin.date }}
            </span>

            <button
              class="inline-flex items-center gap-1 text-xs font-black text-primary"
            >
              Read

              <ArrowUpRight :size="15" />
            </button>
          </div>

        </article>

      </div>

    </section>

  </main>
</template>