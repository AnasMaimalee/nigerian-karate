<script setup lang="ts">
import { computed } from 'vue'
import {
  ArrowUpRight,
  Medal,
  Trophy,
  MapPin,
  TrendingUp,
  TrendingDown,
  Minus,
  Users,
  Award,
  Target
} from 'lucide-vue-next'

interface RankingAthlete {
  id: number | string
  rank: number
  name: string
  state?: string
  points: number
  image?: string
  discipline?: string
  category?: string
  movement?: number
}

const props = withDefaults(
  defineProps<{
    athletes?: RankingAthlete[]
  }>(),
  {
    athletes: () => []
  }
)

const topAthletes = computed(() => {
  return [...props.athletes]
    .sort((a, b) => a.rank - b.rank)
    .slice(0, 3)
})

const rankLabel = (rank: number) => {
  if (rank === 1) return 'National Leader'
  if (rank === 2) return 'Second Position'
  if (rank === 3) return 'Third Position'

  return `Rank #${rank}`
}

const medalClass = (rank: number) => {
  if (rank === 1) {
    return 'border-emerald-200 bg-emerald-50 text-emerald-700'
  }

  if (rank === 2) {
    return 'border-slate-200 bg-slate-50 text-slate-700'
  }

  if (rank === 3) {
    return 'border-teal-200 bg-teal-50 text-teal-700'
  }

  return 'border-slate-200 bg-slate-50 text-slate-600'
}

const rankNumberClass = (rank: number) => {
  if (rank === 1) return 'text-emerald-600'
  if (rank === 2) return 'text-slate-500'
  if (rank === 3) return 'text-teal-600'

  return 'text-slate-300'
}

const movementIcon = (movement?: number) => {
  if (!movement) return Minus

  return movement > 0
    ? TrendingUp
    : TrendingDown
}

const movementClass = (movement?: number) => {
  if (!movement) {
    return 'border-slate-200 bg-slate-50 text-slate-500'
  }

  if (movement > 0) {
    return 'border-emerald-200 bg-emerald-50 text-emerald-700'
  }

  return 'border-rose-200 bg-rose-50 text-rose-600'
}

const movementLabel = (movement?: number) => {
  if (!movement) return 'No change'

  return movement > 0
    ? `Up ${movement}`
    : `Down ${Math.abs(movement)}`
}
</script>

<template>
  <section
    class="relative isolate overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28"
  >
    <!-- BACKGROUND -->
    <div
      class="pointer-events-none absolute inset-0"
    >
      <div
        class="absolute -left-40 top-0 h-[34rem] w-[34rem] rounded-full bg-emerald-100/50 blur-3xl"
      />

      <div
        class="absolute -right-40 bottom-0 h-[38rem] w-[38rem] rounded-full bg-teal-100/40 blur-3xl"
      />

      <div
        class="absolute inset-0 opacity-[0.025]"
        style="
          background-image:
            linear-gradient(to right, #0f172a 1px, transparent 1px),
            linear-gradient(to bottom, #0f172a 1px, transparent 1px);
          background-size: 72px 72px;
        "
      />
    </div>

    <div
      class="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16"
    >
      <!-- HEADER -->
      <div
        class="flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between"
      >
        <div
          class="max-w-3xl"
        >
          <!-- EYEBROW -->
          <div
            class="inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-white px-4 py-2 shadow-sm"
          >
            <span
              class="relative flex h-2.5 w-2.5"
            >
              <span
                class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-50"
              />

              <span
                class="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600"
              />
            </span>

            <span
              class="text-[10px] font-black uppercase tracking-[0.25em] text-emerald-700"
            >
              Official National Rankings
            </span>
          </div>

          <!-- TITLE -->
          <h2
            class="mt-7 text-4xl font-black leading-[0.95] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            NIGERIA'S

            <span
              class="block text-emerald-700"
            >
              TOP ATHLETES.
            </span>
          </h2>

          <!-- DESCRIPTION -->
          <p
            class="mt-7 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base lg:text-lg"
          >
            Celebrating the athletes setting the standard for performance,
            discipline and excellence across Karate Federation of Nigeria (KFN) competitions.
          </p>
        </div>

        <!-- CTA -->
        <NuxtLink
          to="/rankings"
          class="group inline-flex w-fit items-center gap-3 rounded-2xl bg-slate-950 px-7 py-4 text-sm font-black text-white shadow-xl shadow-slate-950/10 transition duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-2xl"
        >
          Explore Full Rankings

          <ArrowUpRight
            :size="18"
            class="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </NuxtLink>
      </div>

      <!-- SUMMARY STRIP -->
      <div
        class="mt-12 grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/40 sm:grid-cols-2 xl:grid-cols-4"
      >
        <!-- ATHLETES -->
        <div
          class="flex items-center gap-5 border-b border-slate-100 p-6 sm:p-8 xl:border-b-0 xl:border-r"
        >
          <div
            class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700"
          >
            <Users :size="25" />
          </div>

          <div>
            <strong
              class="block text-2xl font-black text-slate-950"
            >
              500+
            </strong>

            <span
              class="mt-1 block text-[10px] font-black uppercase tracking-[0.16em] text-slate-500"
            >
              Ranked Athletes
            </span>
          </div>
        </div>

        <!-- STATES -->
        <div
          class="flex items-center gap-5 border-b border-slate-100 p-6 sm:p-8 xl:border-b-0 xl:border-r"
        >
          <div
            class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-700"
          >
            <MapPin :size="25" />
          </div>

          <div>
            <strong
              class="block text-2xl font-black text-slate-950"
            >
              36+
            </strong>

            <span
              class="mt-1 block text-[10px] font-black uppercase tracking-[0.16em] text-slate-500"
            >
              States Represented
            </span>
          </div>
        </div>

        <!-- DISCIPLINES -->
        <div
          class="flex items-center gap-5 border-b border-slate-100 p-6 sm:p-8 xl:border-b-0 xl:border-r"
        >
          <div
            class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-700"
          >
            <Target :size="25" />
          </div>

          <div>
            <strong
              class="block text-2xl font-black text-slate-950"
            >
              Kata & Kumite
            </strong>

            <span
              class="mt-1 block text-[10px] font-black uppercase tracking-[0.16em] text-slate-500"
            >
              Ranking Disciplines
            </span>
          </div>
        </div>

        <!-- PERFORMANCE -->
        <div
          class="flex items-center gap-5 p-6 sm:p-8"
        >
          <div
            class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700"
          >
            <Award :size="25" />
          </div>

          <div>
            <strong
              class="block text-2xl font-black text-slate-950"
            >
              Updated
            </strong>

            <span
              class="mt-1 block text-[10px] font-black uppercase tracking-[0.16em] text-slate-500"
            >
              Official Performance Table
            </span>
          </div>
        </div>
      </div>

      <!-- MAIN RANKING AREA -->
      <div
        v-if="topAthletes.length"
        class="mt-12"
      >
        <!-- SECTION LABEL -->
        <div
          class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <span
              class="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700"
            >
              National Leaders
            </span>

            <h3
              class="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl"
            >
              Current Top Three
            </h3>
          </div>

          <div
            class="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[10px] font-black uppercase tracking-widest text-slate-500 shadow-sm"
          >
            <span
              class="h-2 w-2 rounded-full bg-emerald-500"
            />

            Official Ranking Table
          </div>
        </div>

        <!-- CARDS -->
        <div
          class="grid gap-6 xl:grid-cols-3"
        >
          <article
            v-for="athlete in topAthletes"
            :key="athlete.id"
            class="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg shadow-slate-200/50 transition duration-500 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-2xl"
          >
            <!-- TOP ACCENT -->
            <div
              class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-700 via-emerald-500 to-teal-500"
            />

            <!-- LARGE BACKGROUND NUMBER -->
            <div
              class="pointer-events-none absolute -right-5 -top-12 select-none text-[11rem] font-black leading-none text-slate-50 transition duration-500 group-hover:scale-110 group-hover:text-emerald-50"
            >
              0{{ athlete.rank }}
            </div>

            <!-- CONTENT -->
            <div
              class="relative p-7 sm:p-8"
            >
              <!-- TOP ROW -->
              <div
                class="flex items-start justify-between"
              >
                <div>
                  <div
                    class="flex h-15 w-15 items-center justify-center rounded-2xl border p-3 shadow-sm"
                    :class="medalClass(athlete.rank)"
                  >
                    <Medal :size="27" />
                  </div>

                  <span
                    class="mt-4 block text-[10px] font-black uppercase tracking-[0.18em] text-slate-500"
                  >
                    {{ rankLabel(athlete.rank) }}
                  </span>
                </div>

                <div
                  class="text-right"
                >
                  <span
                    class="block text-[10px] font-black uppercase tracking-[0.16em] text-slate-400"
                  >
                    National Rank
                  </span>

                  <strong
                    class="mt-2 block text-5xl font-black leading-none"
                    :class="rankNumberClass(athlete.rank)"
                  >
                    #{{ athlete.rank }}
                  </strong>
                </div>
              </div>

              <!-- ATHLETE -->
              <div
                class="mt-9 flex items-center gap-5"
              >
                <div
                  class="relative shrink-0"
                >
                  <img
                    v-if="athlete.image"
                    :src="athlete.image"
                    :alt="athlete.name"
                    class="h-24 w-24 rounded-[1.75rem] border border-slate-100 object-cover shadow-lg transition duration-500 group-hover:scale-105"
                  >

                  <div
                    v-else
                    class="flex h-24 w-24 items-center justify-center rounded-[1.75rem] bg-slate-950 text-3xl font-black text-white shadow-lg"
                  >
                    {{ athlete.name.charAt(0) }}
                  </div>

                  <!-- RANK BADGE -->
                  <div
                    class="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-emerald-700 text-xs font-black text-white shadow-lg"
                  >
                    {{ athlete.rank }}
                  </div>
                </div>

                <div
                  class="min-w-0"
                >
                  <h3
                    class="truncate text-2xl font-black tracking-tight text-slate-950 transition group-hover:text-emerald-700"
                  >
                    {{ athlete.name }}
                  </h3>

                  <div
                    class="mt-3 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500"
                  >
                    <span
                      class="inline-flex items-center gap-1.5"
                    >
                      <MapPin
                        :size="14"
                        class="text-emerald-600"
                      />

                      {{ athlete.state || 'Nigeria' }}
                    </span>
                  </div>

                  <span
                    v-if="athlete.category"
                    class="mt-4 inline-flex rounded-lg bg-emerald-50 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-emerald-700"
                  >
                    {{ athlete.category }}
                  </span>
                </div>
              </div>

              <!-- DIVIDER -->
              <div
                class="mt-8 border-t border-slate-100"
              />

              <!-- DETAILS -->
              <div
                class="mt-6 grid grid-cols-2 gap-4"
              >
                <!-- POINTS -->
                <div
                  class="rounded-2xl bg-slate-50 p-5"
                >
                  <span
                    class="block text-[9px] font-black uppercase tracking-[0.16em] text-slate-500"
                  >
                    Ranking Points
                  </span>

                  <strong
                    class="mt-3 block text-3xl font-black tracking-tight text-slate-950"
                  >
                    {{ athlete.points.toLocaleString() }}
                  </strong>
                </div>

                <!-- MOVEMENT -->
                <div
                  class="rounded-2xl border p-5"
                  :class="movementClass(athlete.movement)"
                >
                  <span
                    class="block text-[9px] font-black uppercase tracking-[0.16em]"
                  >
                    Position
                  </span>

                  <div
                    class="mt-3 flex items-center gap-2"
                  >
                    <component
                      :is="movementIcon(athlete.movement)"
                      :size="20"
                    />

                    <strong
                      class="text-xl font-black"
                    >
                      {{ movementLabel(athlete.movement) }}
                    </strong>
                  </div>
                </div>
              </div>

              <!-- FOOTER -->
              <div
                class="mt-6 flex items-center justify-between border-t border-slate-100 pt-6"
              >
                <div>
                  <span
                    class="block text-[9px] font-black uppercase tracking-[0.16em] text-slate-400"
                  >
                    Discipline
                  </span>

                  <strong
                    class="mt-1 block text-sm font-black text-slate-800"
                  >
                    {{ athlete.discipline || 'Karate' }}
                  </strong>
                </div>

                <NuxtLink
                  to="/rankings"
                  class="group/link inline-flex items-center gap-2 text-xs font-black uppercase tracking-wide text-emerald-700 transition hover:text-slate-950"
                >
                  Profile

                  <ArrowUpRight
                    :size="16"
                    class="transition group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                  />
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>
      </div>

      <!-- EMPTY STATE -->
      <div
        v-else
        class="relative mt-12 overflow-hidden rounded-[2rem] border border-dashed border-slate-300 bg-white px-6 py-24 text-center shadow-lg"
      >
        <div
          class="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-100 blur-3xl"
        />

        <div
          class="relative"
        >
          <div
            class="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-50 text-emerald-700"
          >
            <Trophy :size="34" />
          </div>

          <h3
            class="mt-7 text-3xl font-black tracking-tight text-slate-950"
          >
            Rankings Coming Soon
          </h3>

          <p
            class="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-500"
          >
            Official Karate Federation of Nigeria (KFN)rankings and athlete performance
            data will appear here as competition results are updated.
          </p>

          <NuxtLink
            to="/rankings"
            class="mt-8 inline-flex items-center gap-3 rounded-2xl bg-slate-950 px-6 py-4 text-xs font-black uppercase tracking-wide text-white transition hover:-translate-y-1 hover:bg-emerald-700"
          >
            Explore Rankings

            <ArrowUpRight :size="17" />
          </NuxtLink>
        </div>
      </div>

      <!-- FOOTNOTE -->
      <div
        v-if="topAthletes.length"
        class="mt-12 flex flex-col gap-5 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between"
      >
        <p
          class="max-w-2xl text-sm leading-7 text-slate-500"
        >
          Rankings are determined using official competition results,
          athlete performance and federation-approved ranking criteria.
        </p>

        <NuxtLink
          to="/rankings"
          class="group inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-emerald-700 transition hover:text-slate-950"
        >
          View National Table

          <ArrowUpRight
            :size="16"
            class="transition group-hover:translate-x-1"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>