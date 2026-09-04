<script setup lang="ts">
import {
  Award,
  Search,
  Trophy,
  X
} from 'lucide-vue-next'

// MANUAL COMPONENT IMPORT
import RankingTable from '~/components/rankings/RankingTable.vue'

// DATA
import { rankings } from '~/data/rankings'

const search = ref('')
const gender = ref('all')
const weight = ref('all')
const discipline = ref('kata')

const weights = [
  '-50 kg',
  '-55 kg',
  '-60 kg',
  '-67 kg',
  '-75 kg',
  '-84 kg',
  '+84 kg'
]

const filteredAthletes = computed(() => {
  return rankings.filter((athlete) => {
    const matchesSearch =
      athlete.name
        .toLowerCase()
        .includes(search.value.toLowerCase()) ||
      athlete.state
        .toLowerCase()
        .includes(search.value.toLowerCase())

    const matchesDiscipline =
      athlete.discipline.toLowerCase() === discipline.value

    const athleteGender =
      athlete.category.toLowerCase().includes('female')
        ? 'female'
        : 'male'

    const matchesGender =
      gender.value === 'all' ||
      athleteGender === gender.value

    const matchesWeight =
      discipline.value !== 'kumite' ||
      weight.value === 'all' ||
      athlete.weight === weight.value

    return (
      matchesSearch &&
      matchesDiscipline &&
      matchesGender &&
      matchesWeight
    )
  })
})

const topThree = computed(() => {
  return [...filteredAthletes.value]
    .sort((a, b) => a.rank - b.rank)
    .slice(0, 3)
})

const resetFilters = () => {
  search.value = ''
  gender.value = 'all'
  weight.value = 'all'
}
</script>

<template>
  <main class="min-h-screen bg-[#f6f8f7] text-slate-900">

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
          class="absolute -left-32 top-[-120px] h-[420px] w-[420px] rounded-full bg-green-500/15 blur-[120px]"
        />

        <div
          class="absolute -right-32 bottom-[-150px] h-[450px] w-[450px] rounded-full bg-[#d7b96d]/15 blur-[130px]"
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

        <div
          class="absolute -bottom-10 -right-10 hidden select-none text-[180px] font-black leading-none tracking-tighter text-white/[0.025] lg:block"
        >
          NKF
        </div>

      </div>

      <div
        class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div class="max-w-4xl">

          <!-- BADGE -->
          <div
            class="inline-flex items-center gap-3 rounded-full border border-[#d7b96d]/25 bg-white/[0.06] px-4 py-2.5 backdrop-blur-md"
          >
            <span
              class="flex h-7 w-7 items-center justify-center rounded-full bg-[#d7b96d]/15 text-[#e5ca83]"
            >
              <Award :size="14" />
            </span>

            <span
              class="text-[10px] font-black uppercase tracking-[0.22em] text-[#e5ca83]"
            >
              Official NKF Rankings
            </span>
          </div>

          <!-- TITLE -->
          <h1
            class="mt-8 text-5xl font-black leading-[0.9] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            NIGERIA'S

            <span
              class="mt-3 block bg-gradient-to-r from-[#e5ca83] via-[#fff0b8] to-[#d7b96d] bg-clip-text text-transparent"
            >
              KARATE RANKINGS.
            </span>
          </h1>

          <p
            class="mt-8 max-w-2xl text-base font-medium leading-8 text-white/85 sm:text-lg"
          >
            Follow Nigeria's leading karate athletes and explore the latest
            national rankings across Kata and Kumite competitions.
          </p>

          <!-- STATS -->
          <div
            class="mt-10 flex flex-wrap gap-4"
          >
            <div
              class="min-w-[160px] rounded-2xl border border-white/10 bg-white/[0.08] px-6 py-4 backdrop-blur"
            >
              <span
                class="block text-3xl font-black text-white"
              >
                {{ filteredAthletes.length }}
              </span>

              <span
                class="mt-1 block text-[10px] font-black uppercase tracking-widest text-[#e5ca83]"
              >
                Ranked Athletes
              </span>
            </div>

            <div
              class="min-w-[160px] rounded-2xl border border-white/10 bg-white/[0.08] px-6 py-4 backdrop-blur"
            >
              <span
                class="block text-2xl font-black text-white"
              >
                {{ discipline === 'kata' ? 'KATA' : 'KUMITE' }}
              </span>

              <span
                class="mt-2 block text-[10px] font-black uppercase tracking-widest text-[#e5ca83]"
              >
                Active Discipline
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>


    <!-- CONTENT -->
    <section
      class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20"
    >

      <!-- DISCIPLINE SWITCHER -->
      <div
        class="rounded-[2rem] border border-[#dbe5dd] bg-white p-3 shadow-xl shadow-green-950/[0.04]"
      >
        <div
          class="grid grid-cols-1 gap-3 sm:grid-cols-2"
        >

          <!-- KATA -->
          <button
            type="button"
            class="rounded-2xl px-6 py-5 text-left transition-all duration-300"
            :class="
              discipline === 'kata'
                ? 'bg-green-700 text-white shadow-xl shadow-green-900/20'
                : 'bg-[#f5f8f6] text-[#26332b] hover:bg-green-50'
            "
            @click="discipline = 'kata'"
          >
            <div class="flex items-center gap-4">

              <div
                class="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl"
                :class="
                  discipline === 'kata'
                    ? 'bg-white/10'
                    : 'bg-white text-green-700'
                "
              >
                🥋
              </div>

              <div>
                <span class="block text-xl font-black">
                  Kata
                </span>

                <span
                  class="mt-1 block text-sm font-bold opacity-80"
                >
                  Forms & technical rankings
                </span>
              </div>

            </div>
          </button>


          <!-- KUMITE -->
          <button
            type="button"
            class="rounded-2xl px-6 py-5 text-left transition-all duration-300"
            :class="
              discipline === 'kumite'
                ? 'bg-green-700 text-white shadow-xl shadow-green-900/20'
                : 'bg-[#f5f8f6] text-[#26332b] hover:bg-green-50'
            "
            @click="discipline = 'kumite'"
          >
            <div class="flex items-center gap-4">

              <div
                class="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl"
                :class="
                  discipline === 'kumite'
                    ? 'bg-white/10'
                    : 'bg-white text-green-700'
                "
              >
                🥊
              </div>

              <div>
                <span class="block text-xl font-black">
                  Kumite
                </span>

                <span
                  class="mt-1 block text-sm font-bold opacity-80"
                >
                  Combat competition rankings
                </span>
              </div>

            </div>
          </button>

        </div>
      </div>


      <!-- FILTERS -->
      <div
        class="mt-6 rounded-[2rem] border border-[#dbe5dd] bg-white p-5 shadow-xl shadow-green-950/[0.04]"
      >
        <div
          class="grid gap-4 lg:grid-cols-[minmax(0,1fr)_190px_190px_auto]"
        >

          <!-- SEARCH -->
          <div class="relative">
            <Search
              :size="19"
              class="absolute left-5 top-1/2 -translate-y-1/2 text-green-700"
            />

            <input
              v-model="search"
              type="search"
              placeholder="Search athlete or state..."
              class="h-14 w-full rounded-2xl border border-[#dbe5dd] bg-[#f8faf9] pl-13 pr-5 text-sm font-bold text-[#172019] outline-none transition placeholder:text-[#718077] focus:border-green-700 focus:bg-white focus:ring-4 focus:ring-green-700/10"
            >
          </div>


          <!-- GENDER -->
          <select
            v-model="gender"
            class="h-14 rounded-2xl border border-[#dbe5dd] bg-[#f8faf9] px-5 text-sm font-black text-[#26332b] outline-none focus:border-green-700"
          >
            <option value="all">
              All Athletes
            </option>

            <option value="male">
              Male
            </option>

            <option value="female">
              Female
            </option>
          </select>


          <!-- WEIGHT -->
          <select
            v-if="discipline === 'kumite'"
            v-model="weight"
            class="h-14 rounded-2xl border border-[#dbe5dd] bg-[#f8faf9] px-5 text-sm font-black text-[#26332b] outline-none focus:border-green-700"
          >
            <option value="all">
              All Weights
            </option>

            <option
              v-for="item in weights"
              :key="item"
              :value="item"
            >
              {{ item }}
            </option>
          </select>

          <div
            v-else
            class="hidden lg:block"
          />


          <!-- RESET -->
          <button
            type="button"
            class="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-red-500/15 bg-red-50 px-6 text-sm font-black text-red-700 transition hover:bg-red-500 hover:text-white"
            @click="resetFilters"
          >
            <X :size="17" />

            Reset
          </button>

        </div>
      </div>


      <!-- TOP THREE -->
      <section
        v-if="topThree.length"
        class="mt-14"
      >

        <div
          class="mb-8 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left"
        >
          <div>

            <p
              class="text-[10px] font-black uppercase tracking-[0.25em] text-green-700"
            >
              Leading Athletes
            </p>

            <h2
              class="mt-3 text-4xl font-black tracking-tight text-[#152019]"
            >
              Top Ranked Competitors
            </h2>

          </div>

          <div
            class="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-black text-green-800"
          >
            <Trophy :size="17" />

            National Ranking
          </div>

        </div>


        <div
          class="grid gap-6 md:grid-cols-3"
        >

          <article
            v-for="athlete in topThree"
            :key="athlete.id"
            class="group relative overflow-hidden rounded-[2rem] border border-[#dbe5dd] bg-white p-7 shadow-lg shadow-green-950/[0.04] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-950/[0.1]"
          >

            <!-- BIG BACKGROUND RANK -->
            <div
              class="absolute right-4 top-2 text-[9rem] font-black leading-none text-green-50"
            >
              0{{ athlete.rank }}
            </div>


            <div class="relative">

              <div
                class="flex items-start justify-between gap-4"
              >

                <div
                  class="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-700 text-2xl font-black text-white shadow-lg shadow-green-900/20"
                >
                  {{ athlete.rank }}
                </div>

                <img
                  v-if="athlete.image"
                  :src="athlete.image"
                  :alt="athlete.name"
                  class="h-20 w-20 rounded-2xl border-4 border-white object-cover shadow-lg"
                />

              </div>


              <p
                class="mt-8 text-[10px] font-black uppercase tracking-[0.22em] text-green-700"
              >
                {{ athlete.state }} • {{ athlete.country }}
              </p>


              <h3
                class="mt-3 text-3xl font-black tracking-tight text-[#152019]"
              >
                {{ athlete.name }}
              </h3>


              <div
                class="mt-7 grid grid-cols-2 gap-4 border-t border-[#edf1ee] pt-6"
              >

                <div>

                  <span
                    class="block text-3xl font-black text-[#152019]"
                  >
                    {{ athlete.points.toLocaleString() }}
                  </span>

                  <span
                    class="mt-1 block text-[10px] font-black uppercase tracking-widest text-[#718077]"
                  >
                    Ranking Points
                  </span>

                </div>


                <div
                  class="text-right"
                >

                  <span
                    class="inline-flex rounded-xl bg-green-50 px-4 py-2 text-sm font-black text-green-800"
                  >
                    #{{ athlete.rank }}
                  </span>

                  <span
                    class="mt-2 block text-[10px] font-black uppercase tracking-widest text-[#718077]"
                  >
                    National Rank
                  </span>

                </div>

              </div>

            </div>

          </article>

        </div>

      </section>


      <!-- COMPLETE RANKINGS -->
      <section class="mt-16">

        <div
          class="mb-8 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left"
        >

          <div>

            <p
              class="text-[10px] font-black uppercase tracking-[0.25em] text-green-700"
            >
              Complete Rankings
            </p>

            <h2
              class="mt-3 text-4xl font-black tracking-tight text-[#152019]"
            >
              {{
                discipline === 'kata'
                  ? 'Kata Rankings'
                  : 'Kumite Rankings'
              }}
            </h2>

          </div>


          <div
            class="inline-flex items-center gap-3 rounded-full border border-green-700/10 bg-white px-5 py-3 shadow-sm"
          >

            <div class="flex items-center gap-1">

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

            <span
              class="text-sm font-black text-[#26332b]"
            >
              {{ filteredAthletes.length }}

              {{
                filteredAthletes.length === 1
                  ? ' Athlete'
                  : ' Athletes'
              }}
            </span>

          </div>

        </div>


        <!-- RANKING TABLE -->
        <RankingTable
          :athletes="filteredAthletes"
        />

      </section>

    </section>

  </main>
</template>