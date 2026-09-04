<script setup lang="ts">
import { computed, ref } from 'vue'

const search = ref('')
const gender = ref('all')
const category = ref('all')
const state = ref('all')

const athletes = [
  {
    id: 1,
    name: 'Ibrahim Musa',
    slug: 'ibrahim-musa',
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80',
    category: 'Kumite',
    gender: 'Male',
    state: 'Kano',
    rank: 1,
    medals: 12,
    achievements: ['National Champion']
  },
  {
    id: 2,
    name: 'Amina Bello',
    slug: 'amina-bello',
    image: 'https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?auto=format&fit=crop&w=800&q=80',
    category: 'Kata',
    gender: 'Female',
    state: 'Abuja',
    rank: 2,
    medals: 9,
    achievements: ['African Medalist']
  },
  {
    id: 3,
    name: 'Chinedu Okafor',
    slug: 'chinedu-okafor',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80',
    category: 'Kumite',
    gender: 'Male',
    state: 'Lagos',
    rank: 3,
    medals: 7,
    achievements: ['National Team']
  },
  {
    id: 4,
    name: 'Fatima Yusuf',
    slug: 'fatima-yusuf',
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80',
    category: 'Kata',
    gender: 'Female',
    state: 'Kano',
    rank: 4,
    medals: 6,
    achievements: ['National Finalist']
  },
  {
    id: 5,
    name: 'Emeka Nwosu',
    slug: 'emeka-nwosu',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=800&q=80',
    category: 'Kumite',
    gender: 'Male',
    state: 'Enugu',
    rank: 5,
    medals: 8,
    achievements: ['West African Champion']
  },
  {
    id: 6,
    name: 'Zainab Abdullahi',
    slug: 'zainab-abdullahi',
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=80',
    category: 'Kata',
    gender: 'Female',
    state: 'Kaduna',
    rank: 6,
    medals: 5,
    achievements: ['National Team']
  },
  {
    id: 7,
    name: 'Tunde Adeyemi',
    slug: 'tunde-adeyemi',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    category: 'Kumite',
    gender: 'Male',
    state: 'Oyo',
    rank: 7,
    medals: 10,
    achievements: ['National Silver Medalist']
  },
  {
    id: 8,
    name: 'Blessing Okoro',
    slug: 'blessing-okoro',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    category: 'Kata',
    gender: 'Female',
    state: 'Rivers',
    rank: 8,
    medals: 4,
    achievements: ['Rising Star']
  },
  {
    id: 9,
    name: 'Sani Garba',
    slug: 'sani-garba',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80',
    category: 'Kumite',
    gender: 'Male',
    state: 'Kano',
    rank: 9,
    medals: 6,
    achievements: ['National Bronze Medalist']
  },
  {
    id: 10,
    name: 'Esther Johnson',
    slug: 'esther-johnson',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
    category: 'Kata',
    gender: 'Female',
    state: 'Lagos',
    rank: 10,
    medals: 7,
    achievements: ['African Championship Participant']
  }
]

const filteredAthletes = computed(() => {
  return athletes.filter((athlete) => {
    const matchesSearch =
      athlete.name
        .toLowerCase()
        .includes(search.value.toLowerCase())

    const matchesGender =
      gender.value === 'all' ||
      athlete.gender.toLowerCase() === gender.value

    const matchesCategory =
      category.value === 'all' ||
      athlete.category.toLowerCase() === category.value

    const matchesState =
      state.value === 'all' ||
      athlete.state.toLowerCase() === state.value

    return (
      matchesSearch &&
      matchesGender &&
      matchesCategory &&
      matchesState
    )
  })
})
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-950">

    <!-- HERO -->
    <AthleteHero />

    <!-- STATS -->
    <AthleteStats />

    <!-- ATHLETES DIRECTORY -->
    <section
      id="athletes-list"
      class="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24"
    >
      <!-- BACKGROUND DECORATION -->
      <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          class="absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-500/5 blur-3xl"
        />

        <div
          class="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-emerald-600/5 blur-3xl"
        />
      </div>

      <div class="container-nkf relative">

        <!-- SECTION HEADER -->
        <div class="max-w-3xl">

          <div
            class="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2"
          >
            <span
              class="relative flex h-2.5 w-2.5"
            >
              <span
                class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70"
              />

              <span
                class="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600"
              />
            </span>

            <span
              class="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700"
            >
              Nigeria's Finest
            </span>
          </div>

          <h2
            class="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
          >
            Explore Our
            <span class="text-emerald-600">
              Athletes
            </span>
          </h2>

          <p
            class="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
          >
            Meet the competitors representing Karate Federation of Nigeria (KFN) across
            national and international competitions.
          </p>
        </div>

        <!-- FILTERS -->
        <div class="mt-10">
          <AthleteFilters
            v-model:search="search"
            v-model:gender="gender"
            v-model:category="category"
            v-model:state="state"
          />
        </div>

        <!-- ============================================================
     RESULTS SUMMARY BAR
============================================================ -->
<div
  class="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
>
  <div
    class="flex flex-col gap-5 px-5 py-5 sm:flex-row sm:items-center sm:justify-between"
  >

    <!-- LEFT: ATHLETE COUNT -->
    <div class="flex items-center gap-4">

      <!-- NUMBER -->
      <div
        class="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-slate-950 text-white shadow-lg"
      >
        <div
          class="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-transparent to-transparent"
        />

        <span
          class="relative text-lg font-black tabular-nums"
        >
          {{ filteredAthletes.length }}
        </span>
      </div>

      <!-- TEXT -->
      <div>
        <div
          class="flex items-center gap-2"
        >
          <p
            class="text-sm font-black tracking-tight text-slate-950"
          >
            Athletes Found
          </p>

          <!-- LIVE DOTS -->
          <div
            class="flex items-center gap-1"
          >
            <span
              class="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500"
            />

            <span
              class="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 [animation-delay:150ms]"
            />

            <span
              class="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300 [animation-delay:300ms]"
            />
          </div>
        </div>

        <p
          class="mt-1 text-xs font-medium text-slate-500"
        >
          Explore Nigeria's national karate talent
        </p>
      </div>
    </div>


    <!-- RIGHT: CURRENT RESULT -->
    <div
      class="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
    >
      <div
        class="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700"
      >
        <span
          class="text-xs font-black"
        >
          {{ filteredAthletes.length }}
        </span>
      </div>

      <div>
        <p
          class="text-[9px] font-black uppercase tracking-[0.18em] text-slate-400"
        >
          Directory Results
        </p>

        <p
          class="mt-0.5 text-xs font-bold text-slate-900"
        >
          Showing
          <span class="text-emerald-600">
            {{ filteredAthletes.length }}
          </span>

          {{
            filteredAthletes.length === 1
              ? 'athlete'
              : 'athletes'
          }}
        </p>
      </div>
    </div>

  </div>


  <!-- BOTTOM ACCENT -->
  <div
    class="h-1 bg-gradient-to-r from-emerald-600 via-emerald-400 to-transparent"
  />
</div>

      
       <!-- ATHLETES GRID -->
<div
  v-if="filteredAthletes.length"
  class="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
>
  <NuxtLink
    v-for="athlete in filteredAthletes"
    :key="athlete.id"
    :to="`/athletes/${athlete.slug}`"
    class="group relative block overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400 hover:shadow-2xl"
  >
    <!-- IMAGE -->
    <div class="relative h-[300px] overflow-hidden bg-slate-200">

      <img
        :src="athlete.image"
        :alt="athlete.name"
        class="h-full w-full object-cover transition duration-700 group-hover:scale-110"
      >

      <!-- DARK GRADIENT -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"
      />

      <!-- RANK -->
      <div
        class="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950/90 text-white shadow-xl backdrop-blur"
      >
        <div class="text-center">
          <span
            class="block text-[8px] font-black uppercase tracking-wider text-emerald-400"
          >
            Rank
          </span>

          <span
            class="block text-lg font-black leading-none"
          >
            #{{ athlete.rank }}
          </span>
        </div>
      </div>

      <!-- STATE -->
      <div
        class="absolute right-4 top-4 rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-[9px] font-black uppercase tracking-wider text-white backdrop-blur-xl"
      >
        {{ athlete.state }}
      </div>

      <!-- CATEGORY -->
      <div
        class="absolute bottom-4 left-4"
      >
        <span
          class="inline-flex rounded-full bg-emerald-500 px-3 py-1.5 text-[9px] font-black uppercase tracking-wider text-white shadow-lg"
        >
          {{ athlete.category }}
        </span>
      </div>

    </div>

    <!-- CONTENT -->
    <div class="p-6">

      <!-- NAME -->
      <h3
        class="text-xl font-black tracking-tight text-slate-950 transition group-hover:text-emerald-700"
      >
        {{ athlete.name }}
      </h3>

      <!-- GENDER -->
      <p
        class="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400"
      >
        {{ athlete.gender }} Athlete · {{ athlete.state }}
      </p>

      <!-- ACHIEVEMENT -->
      <div
        class="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-5"
      >
        <div>
          <p
            class="text-[9px] font-black uppercase tracking-[0.16em] text-slate-400"
          >
            Achievement
          </p>

          <p
            class="mt-1 text-sm font-black text-slate-800"
          >
            {{ athlete.achievements[0] }}
          </p>
        </div>

        <!-- MEDALS -->
        <div
          class="flex h-12 min-w-12 flex-col items-center justify-center rounded-xl bg-emerald-50 px-3"
        >
          <span
            class="text-sm font-black text-emerald-700"
          >
            {{ athlete.medals }}
          </span>

          <span
            class="text-[7px] font-black uppercase tracking-wider text-emerald-600"
          >
            Medals
          </span>
        </div>
      </div>

      <!-- VIEW PROFILE -->
      <div
        class="mt-6 flex items-center justify-between border-t border-slate-100 pt-5"
      >
        <span
          class="text-[10px] font-black uppercase tracking-[0.15em] text-slate-500"
        >
          View Profile
        </span>

        <span
          class="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-white transition duration-300 group-hover:bg-emerald-600 group-hover:translate-x-1"
        >
          →
        </span>
      </div>

    </div>

  </NuxtLink>
</div>

        <!-- EMPTY STATE -->
        <div
          v-else
          class="mt-10 rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm"
        >
          <div
            class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-2xl"
          >
            🥋
          </div>

          <h3
            class="mt-6 text-xl font-black text-slate-950"
          >
            No athletes found
          </h3>

          <p
            class="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-500"
          >
            Try changing or clearing your filters to discover more
            Karate Federation of Nigeria (KFN) athletes.
          </p>

          <button
            class="mt-6 rounded-xl bg-emerald-600 px-5 py-3 text-xs font-black text-white transition hover:bg-emerald-700"
            @click="
              search = '';
              gender = 'all';
              category = 'all';
              state = 'all';
            "
          >
            Clear All Filters
          </button>
        </div>

      </div>
    </section>

  </div>
</template>