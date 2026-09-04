<script setup lang="ts">
import { ArrowUpRight, UsersRound, Trophy, MapPin, Medal } from 'lucide-vue-next'

interface Athlete {
  id: number | string
  name: string
  slug: string
  image?: string
  state: string
  category: string
  discipline: string
  achievements?: string[]
  rank?: number
}

/*
|--------------------------------------------------------------------------
| ATHLETES DATA
|--------------------------------------------------------------------------
| Everything is inside this component.
| Later, you can replace these with API/database data.
*/
const athletes: Athlete[] = [
  {
    id: 1,
    name: 'Karate Federation of Nigeria (KFN) Athlete',
    slug: 'nigerian-karate-athlete-1',
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=900&q=80',
    state: 'Lagos',
    category: 'Senior',
    discipline: 'Kumite',
    rank: 1,
    achievements: ['National Champion']
  },
  {
    id: 2,
    name: 'Elite Karate Champion',
    slug: 'nigerian-karate-athlete-2',
    image: 'https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?auto=format&fit=crop&w=900&q=80',
    state: 'Abuja',
    category: 'Senior',
    discipline: 'Kata',
    rank: 2,
    achievements: ['National Medalist']
  },
  {
    id: 3,
    name: 'National Karateka',
    slug: 'nigerian-karate-athlete-3',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
    state: 'Kano',
    category: 'Senior',
    discipline: 'Kumite',
    rank: 3,
    achievements: ['Elite Athlete']
  },
  {
    id: 4,
    name: 'Future Champion',
    slug: 'nigerian-karate-athlete-4',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80',
    state: 'Rivers',
    category: 'Youth',
    discipline: 'Kata',
    rank: 4,
    achievements: ['Rising Star']
  }
]
</script>

<template>
  <section class="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28">
    <!-- Background decoration -->
    <div
      class="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
    />

    <div
      class="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
    />

    <div class="container-nkf relative z-10">

      <!-- ================= HEADER ================= -->

      <div
        class="flex flex-col gap-6 border-b border-border pb-10 lg:flex-row lg:items-end lg:justify-between"
      >
        <div class="max-w-2xl">
          <div
            class="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary"
          >
            <Medal :size="14" />

            Elite Karate Federation of Nigeria (KFN)
          </div>

          <h2
            class="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            MEET OUR
            <span class="text-primary">
              ATHLETES.
            </span>
          </h2>

          <p class="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
            Discover the discipline, determination and excellence of athletes
            representing Karate Federation of Nigeria (KFN) across national and international competitions.
          </p>
        </div>

        <NuxtLink
          to="/athletes"
          class="group inline-flex w-fit items-center gap-3 rounded-2xl border border-primary/15 bg-primary px-6 py-4 text-sm font-black text-white shadow-lg shadow-primary/20 transition duration-300 hover:-translate-y-1 hover:bg-primary-dark hover:shadow-xl"
        >
          View All Athletes

          <ArrowUpRight
            :size="18"
            class="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </NuxtLink>
      </div>

      <!-- ================= ATHLETES ================= -->

      <div
        v-if="athletes.length"
        class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <article
          v-for="athlete in athletes"
          :key="athlete.id"
          class="group relative overflow-hidden rounded-[2rem] border border-border bg-surface shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
        >
          <!-- Image -->
          <NuxtLink
            :to="`/athletes/${athlete.slug}`"
            class="relative block aspect-[4/5] overflow-hidden bg-surface-dark"
          >
            <img
              v-if="athlete.image"
              :src="athlete.image"
              :alt="athlete.name"
              class="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            >

            <!-- Gradient -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"
            />

            <!-- Rank -->
            <div
              class="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-black/40 text-sm font-black text-white backdrop-blur-xl"
            >
              #{{ athlete.rank }}
            </div>

            <!-- Discipline badge -->
            <div
              class="absolute right-5 top-5 rounded-full bg-primary px-3 py-1.5 text-[9px] font-black uppercase tracking-widest text-white shadow-lg"
            >
              {{ athlete.discipline }}
            </div>

            <!-- Athlete information on image -->
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div class="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary-light">
                <MapPin :size="13" />

                {{ athlete.state }}
              </div>

              <h3 class="mt-3 text-2xl font-black leading-tight">
                {{ athlete.name }}
              </h3>
            </div>
          </NuxtLink>

          <!-- Content -->
          <div class="p-6">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-muted">
                {{ athlete.category }}
              </span>

              <span
                class="rounded-full bg-primary/10 px-3 py-1.5 text-[9px] font-black uppercase tracking-wider text-primary"
              >
                {{ athlete.achievements?.[0] || 'NKF Athlete' }}
              </span>
            </div>

            <NuxtLink
              :to="`/athletes/${athlete.slug}`"
              class="mt-5 flex items-center justify-between border-t border-border pt-5"
            >
              <span
                class="text-xs font-black uppercase tracking-widest text-primary"
              >
                View Profile
              </span>

              <span
                class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white"
              >
                <ArrowUpRight :size="18" />
              </span>
            </NuxtLink>
          </div>
        </article>
      </div>

      <!-- ================= EMPTY STATE ================= -->

      <div
        v-else
        class="mt-10 rounded-[2rem] border border-dashed border-border bg-surface px-6 py-20 text-center"
      >
        <div
          class="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 text-primary"
        >
          <UsersRound :size="34" />
        </div>

        <h3 class="mt-6 text-2xl font-black text-foreground">
          Athletes Coming Soon
        </h3>

        <p class="mx-auto mt-3 max-w-md text-sm leading-7 text-muted">
          Karate Federation of Nigeria (KFN)athlete profiles will appear here soon.
        </p>
      </div>

      <!-- ================= BOTTOM CTA ================= -->

      <div
        class="mt-12 flex flex-col items-center justify-between gap-6 rounded-[2rem] border border-primary/10 bg-primary/5 p-7 sm:flex-row sm:p-10"
      >
        <div class="flex items-center gap-5">
          <div
            class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20"
          >
            <Trophy :size="25" />
          </div>

          <div>
            <h3 class="text-lg font-black text-foreground">
              The Future Of Karate Federation of Nigeria (KFN)
            </h3>

            <p class="mt-1 text-sm text-muted">
              Follow the journey of Nigeria's next generation of champions.
            </p>
          </div>
        </div>

        <NuxtLink
          to="/athletes"
          class="group inline-flex shrink-0 items-center gap-3 text-sm font-black text-primary"
        >
          Explore All Athletes

          <ArrowUpRight
            :size="18"
            class="transition duration-300 group-hover:translate-x-1"
          />
        </NuxtLink>
      </div>

    </div>
  </section>
</template>