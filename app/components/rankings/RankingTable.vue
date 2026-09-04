<script setup lang="ts">
import {
  Trophy,
  ArrowUp,
  ArrowDown,
  Minus,
  MapPin,
  Medal
} from 'lucide-vue-next'

interface RankingAthlete {
  id: number | string
  rank: number
  previousRank?: number
  rankChange?: number
  name: string
  country?: string
  state?: string
  points: number
  image?: string
  category?: string
  discipline?: string
  weight?: string
}

defineProps<{
  athletes: RankingAthlete[]
}>()

const emit = defineEmits<{
  select: [athlete: RankingAthlete]
}>()

const getRankStyle = (rank: number) => {
  if (rank === 1) {
    return 'bg-yellow-400 text-yellow-950'
  }

  if (rank === 2) {
    return 'bg-slate-300 text-slate-800'
  }

  if (rank === 3) {
    return 'bg-orange-400 text-orange-950'
  }

  return 'bg-slate-100 text-slate-700'
}
</script>

<template>
  <div
    class="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-950/[0.04]"
  >

    <!-- TABLE HEADER -->
    <div
      class="hidden grid-cols-[90px_minmax(260px,1.8fr)_1fr_1.2fr_130px_110px_50px] items-center gap-4 border-b border-slate-200 bg-slate-50 px-6 py-5 lg:grid"
    >
      <span
        class="text-[10px] font-black uppercase tracking-widest text-slate-500"
      >
        Rank
      </span>

      <span
        class="text-[10px] font-black uppercase tracking-widest text-slate-500"
      >
        Athlete
      </span>

      <span
        class="text-[10px] font-black uppercase tracking-widest text-slate-500"
      >
        State
      </span>

      <span
        class="text-[10px] font-black uppercase tracking-widest text-slate-500"
      >
        Division
      </span>

      <span
        class="text-[10px] font-black uppercase tracking-widest text-slate-500"
      >
        Points
      </span>

      <span
        class="text-[10px] font-black uppercase tracking-widest text-slate-500"
      >
        Movement
      </span>

      <span></span>
    </div>

    <!-- MOBILE HEADER -->
    <div
      class="flex items-center gap-3 border-b border-slate-200 bg-slate-50 px-5 py-5 lg:hidden"
    >
      <div
        class="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-700 text-white"
      >
        <Trophy :size="19" />
      </div>

      <div>
        <h3 class="text-base font-black text-slate-950">
          National Rankings
        </h3>

        <p class="text-xs font-bold text-slate-500">
          {{ athletes.length }} ranked athletes
        </p>
      </div>
    </div>

    <!-- ROWS -->
    <div
      v-if="athletes.length"
    >
      <button
        v-for="athlete in athletes"
        :key="athlete.id"
        type="button"
        class="group grid w-full items-center gap-4 border-b border-slate-100 px-5 py-5 text-left transition last:border-b-0 hover:bg-green-50/60 lg:grid-cols-[90px_minmax(260px,1.8fr)_1fr_1.2fr_130px_110px_50px] lg:px-6"
        @click="emit('select', athlete)"
      >

        <!-- RANK -->
        <div class="flex items-center gap-3">
          <div
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-base font-black"
            :class="getRankStyle(athlete.rank)"
          >
            {{ athlete.rank }}
          </div>

          <div class="lg:hidden">
            <span
              class="text-[10px] font-black uppercase tracking-widest text-slate-400"
            >
              National Rank
            </span>
          </div>
        </div>

        <!-- ATHLETE -->
        <div
          class="flex min-w-0 items-center gap-4"
        >
          <div
            class="h-14 w-14 shrink-0 overflow-hidden rounded-2xl bg-slate-100"
          >
            <img
              v-if="athlete.image"
              :src="athlete.image"
              :alt="athlete.name"
              class="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            >

            <div
              v-else
              class="flex h-full w-full items-center justify-center bg-green-50 text-lg font-black text-green-700"
            >
              {{ athlete.name.charAt(0) }}
            </div>
          </div>

          <div class="min-w-0">
            <h3
              class="truncate text-base font-black text-slate-950 transition group-hover:text-green-700"
            >
              {{ athlete.name }}
            </h3>

            <div
              class="mt-1 flex flex-wrap items-center gap-2"
            >
              <span
                class="rounded-full bg-green-50 px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-green-700"
              >
                {{ athlete.discipline }}
              </span>

              <span
                class="text-[10px] font-bold text-slate-500"
              >
                {{ athlete.category }}
              </span>
            </div>
          </div>
        </div>

        <!-- STATE -->
        <div
          class="hidden items-center gap-2 text-sm font-bold text-slate-600 lg:flex"
        >
          <MapPin
            :size="15"
            class="text-green-700"
          />

          {{ athlete.state || 'Nigeria' }}
        </div>

        <!-- DIVISION -->
        <div
          class="hidden lg:block"
        >
          <div
            class="flex flex-col"
          >
            <span
              class="font-black text-slate-800"
            >
              {{ athlete.category }}
            </span>

            <span
              class="mt-1 text-xs font-bold text-slate-400"
            >
              {{ athlete.discipline }}
            </span>
          </div>
        </div>

        <!-- POINTS -->
        <div
          class="flex flex-col lg:block"
        >
          <span
            class="text-[10px] font-black uppercase tracking-widest text-slate-400 lg:hidden"
          >
            Ranking Points
          </span>

          <span
            class="text-lg font-black text-slate-950"
          >
            {{ athlete.points.toLocaleString() }}
          </span>

          <span
            class="ml-1 text-[10px] font-bold text-slate-400"
          >
            PTS
          </span>
        </div>

        <!-- MOVEMENT -->
        <div
          class="flex items-center gap-2"
        >
          <template
            v-if="athlete.rankChange && athlete.rankChange > 0"
          >
            <span
              class="flex h-9 w-9 items-center justify-center rounded-xl bg-green-100 text-green-700"
            >
              <ArrowUp :size="17" />
            </span>

            <span
              class="font-black text-green-700"
            >
              +{{ athlete.rankChange }}
            </span>
          </template>

          <template
            v-else-if="athlete.rankChange && athlete.rankChange < 0"
          >
            <span
              class="flex h-9 w-9 items-center justify-center rounded-xl bg-red-100 text-red-600"
            >
              <ArrowDown :size="17" />
            </span>

            <span
              class="font-black text-red-600"
            >
              {{ athlete.rankChange }}
            </span>
          </template>

          <template
            v-else
          >
            <span
              class="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-500"
            >
              <Minus :size="17" />
            </span>

            <span
              class="font-black text-slate-500"
            >
              —
            </span>
          </template>
        </div>

        <!-- ACTION -->
        <div
          class="hidden justify-end lg:flex"
        >
          <span
            class="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-400 transition group-hover:border-green-700 group-hover:bg-green-700 group-hover:text-white"
          >
            <Medal :size="17" />
          </span>
        </div>

      </button>
    </div>

    <!-- EMPTY -->
    <div
      v-else
      class="px-6 py-20 text-center"
    >
      <div
        class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-green-700"
      >
        <Trophy :size="28" />
      </div>

      <h3
        class="mt-5 text-xl font-black text-slate-950"
      >
        No rankings found
      </h3>

      <p
        class="mx-auto mt-2 max-w-md text-sm font-medium leading-6 text-slate-500"
      >
        No athletes match the selected ranking filters.
      </p>
    </div>

  </div>
</template>