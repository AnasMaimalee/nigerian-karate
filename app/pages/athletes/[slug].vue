<script setup lang="ts">
import {
  ArrowLeft,
  Award,
  ChevronRight,
  MapPin,
  Medal,
  ShieldCheck,
  Trophy,
  UserRound
} from 'lucide-vue-next'

const route = useRoute()

/*
|--------------------------------------------------------------------------
| ATHLETES DATA
|--------------------------------------------------------------------------
|
| Later we will move this into:
|
| app/data/athletes.ts
|
| Then both index.vue and [slug].vue will use the same data.
|
*/

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

/*
|--------------------------------------------------------------------------
| CURRENT ATHLETE
|--------------------------------------------------------------------------
*/

const athlete = computed(() => {
  return athletes.find(
    item => item.slug === route.params.slug
  )
})

/*
|--------------------------------------------------------------------------
| RELATED ATHLETES
|--------------------------------------------------------------------------
*/

const relatedAthletes = computed(() => {
  if (!athlete.value) {
    return []
  }

  return athletes
    .filter(
      item =>
        item.id !== athlete.value?.id &&
        item.category === athlete.value?.category
    )
    .slice(0, 3)
})

/*
|--------------------------------------------------------------------------
| PAGE META
|--------------------------------------------------------------------------
*/

useHead(() => ({
  title: athlete.value
    ? `${athlete.value.name} | Karate Federation of Nigeria (KFN) Federation`
    : 'Athlete Not Found | Karate Federation of Nigeria (KFN) Federation'
}))
</script>




<template>
  <main
    v-if="athlete"
    class="min-h-screen bg-slate-50"
  >
    <!-- ============================================================
         HERO
    ============================================================= -->

    <section class="relative overflow-hidden bg-slate-950">
      <!-- Background Effects -->
      <div class="pointer-events-none absolute inset-0">
        <div
          class="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px]"
        />

        <div
          class="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px]"
        />

        <div
          class="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px]"
        />
      </div>

      <div class="relative container-nkf py-8 sm:py-12 lg:py-16">

        <!-- BACK BUTTON -->

        <NuxtLink
          to="/athletes"
          class="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-black text-white/70 transition hover:border-emerald-400/40 hover:bg-white/10 hover:text-white"
        >
          <ArrowLeft
            :size="16"
            class="transition group-hover:-translate-x-1"
          />

          Back to Athletes
        </NuxtLink>


        <!-- PROFILE HERO -->

        <div
          class="mt-10 grid gap-10 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-end"
        >

          <!-- IMAGE -->

          <div class="relative mx-auto w-full max-w-[360px] lg:mx-0">

            <div
              class="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-emerald-400/20 to-transparent blur-xl"
            />

            <div
              class="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl"
            >
              <div class="aspect-[4/5] overflow-hidden">
                <img
                  :src="athlete.image"
                  :alt="athlete.name"
                  class="h-full w-full object-cover transition duration-700 hover:scale-105"
                >
              </div>

              <!-- STATE -->

              <div
                class="absolute left-4 top-4 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2 text-xs font-black text-white backdrop-blur-xl"
              >
                <MapPin
                  :size="14"
                  class="text-emerald-400"
                />

                {{ athlete.state }}
              </div>


              <!-- RANK -->

              <div
                class="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-slate-950/85 p-4 backdrop-blur-xl"
              >
                <div class="flex items-center gap-3">

                  <div
                    class="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-lg"
                  >
                    <Trophy :size="22" />
                  </div>

                  <div>
                    <p
                      class="text-[9px] font-black uppercase tracking-[0.18em] text-white/40"
                    >
                      National Ranking
                    </p>

                    <p
                      class="mt-1 text-lg font-black text-white"
                    >
                      #{{ athlete.rank }}
                    </p>
                  </div>

                </div>
              </div>

            </div>

          </div>


          <!-- INFORMATION -->

          <div class="pb-4">

            <div
              class="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-emerald-400"
            >
              <span
                class="relative flex h-2 w-2"
              >
                <span
                  class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"
                />

                <span
                  class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"
                />
              </span>

              Karate Federation of Nigeria (KFN) Athlete
            </div>


            <h1
              class="mt-5 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              {{ athlete.name }}
            </h1>


            <p
              class="mt-5 max-w-2xl text-base leading-8 text-white/55"
            >
              {{ rankMessage }}
              Competing in
              <span class="font-bold text-white">
                {{ athlete.category }}
              </span>
              and proudly representing
              <span class="font-bold text-white">
                {{ athlete.state }} State
              </span>
              in Karate Federation of Nigeria (KFN).
            </p>


            <!-- TAGS -->

            <div class="mt-7 flex flex-wrap gap-3">

              <div
                class="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <Target
                  :size="16"
                  class="text-emerald-400"
                />

                <div>
                  <p
                    class="text-[8px] font-black uppercase tracking-wider text-white/35"
                  >
                    Discipline
                  </p>

                  <p
                    class="mt-0.5 text-xs font-black text-white"
                  >
                    {{ athlete.category }}
                  </p>
                </div>
              </div>


              <div
                class="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <UserRound
                  :size="16"
                  class="text-emerald-400"
                />

                <div>
                  <p
                    class="text-[8px] font-black uppercase tracking-wider text-white/35"
                  >
                    Category
                  </p>

                  <p
                    class="mt-0.5 text-xs font-black text-white"
                  >
                    {{ athlete.gender }}
                  </p>
                </div>
              </div>


              <div
                class="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <Flag
                  :size="16"
                  class="text-emerald-400"
                />

                <div>
                  <p
                    class="text-[8px] font-black uppercase tracking-wider text-white/35"
                  >
                    State
                  </p>

                  <p
                    class="mt-0.5 text-xs font-black text-white"
                  >
                    {{ athlete.state }}
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>


    <!-- ============================================================
         PERFORMANCE STATISTICS
    ============================================================= -->

    <section class="relative z-10">
      <div class="container-nkf">

        <div
          class="-mt-8 grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl sm:grid-cols-3"
        >

          <!-- RANK -->

          <div
            class="flex items-center gap-4 border-b border-slate-200 p-6 sm:border-b-0 sm:border-r"
          >
            <div
              class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white"
            >
              <Trophy :size="23" />
            </div>

            <div>
              <p
                class="text-[9px] font-black uppercase tracking-[0.16em] text-slate-400"
              >
                National Rank
              </p>

              <p
                class="mt-1 text-2xl font-black text-slate-950"
              >
                #{{ athlete.rank }}
              </p>
            </div>
          </div>


          <!-- MEDALS -->

          <div
            class="flex items-center gap-4 border-b border-slate-200 p-6 sm:border-b-0 sm:border-r"
          >
            <div
              class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white"
            >
              <Medal :size="23" />
            </div>

            <div>
              <p
                class="text-[9px] font-black uppercase tracking-[0.16em] text-slate-400"
              >
                Medals & Honours
              </p>

              <p
                class="mt-1 text-2xl font-black text-slate-950"
              >
                {{ athlete.medals }}
              </p>
            </div>
          </div>


          <!-- STATUS -->

          <div
            class="flex items-center gap-4 p-6"
          >
            <div
              class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600"
            >
              <ShieldCheck :size="23" />
            </div>

            <div>
              <p
                class="text-[9px] font-black uppercase tracking-[0.16em] text-slate-400"
              >
                Federation Status
              </p>

              <p
                class="mt-1 text-sm font-black text-slate-950"
              >
                Active Competitor
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>


    <!-- ============================================================
         MAIN CONTENT
    ============================================================= -->

    <section class="section-padding">

      <div
        class="container-nkf grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]"
      >

        <!-- LEFT CONTENT -->

        <div class="space-y-8">


          <!-- ATHLETE PROFILE -->

          <article
            class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
          >

            <div
              class="flex items-center gap-3"
            >
              <div
                class="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600"
              >
                <UserRound :size="20" />
              </div>

              <div>
                <p
                  class="text-[9px] font-black uppercase tracking-[0.18em] text-emerald-600"
                >
                  Athlete Profile
                </p>

                <h2
                  class="mt-1 text-2xl font-black tracking-tight text-slate-950"
                >
                  About {{ athlete.name.split(' ')[0] }}
                </h2>
              </div>
            </div>


            <p
              class="mt-7 text-sm leading-8 text-slate-600"
            >
              {{ athlete.name }} is a Karate Federation of Nigeria (KFN) athlete competing in
              <strong class="font-black text-slate-950">
                {{ athlete.category }}
              </strong>.
              Representing
              <strong class="font-black text-slate-950">
                {{ athlete.state }} State
              </strong>,
              the athlete continues to contribute to the growth and development
              of karate across Nigeria through competitive excellence,
              discipline and commitment.
            </p>


            <p
              class="mt-5 text-sm leading-8 text-slate-600"
            >
              As a
              <strong class="font-black text-slate-950">
                {{ rankLabel }}
              </strong>,
              {{ athlete.name.split(' ')[0] }} remains part of the growing
              generation of Nigerian athletes competing at national and
              international levels.
            </p>

          </article>


          <!-- ACHIEVEMENTS -->

          <article
            class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
          >

            <div
              class="flex items-center gap-3"
            >
              <div
                class="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600"
              >
                <Award :size="20" />
              </div>

              <div>
                <p
                  class="text-[9px] font-black uppercase tracking-[0.18em] text-amber-600"
                >
                  Recognition
                </p>

                <h2
                  class="mt-1 text-2xl font-black tracking-tight text-slate-950"
                >
                  Career Highlights
                </h2>
              </div>
            </div>


            <div
              class="mt-7 grid gap-4 sm:grid-cols-2"
            >
              <div
                v-for="(achievement, index) in athlete.achievements"
                :key="achievement"
                class="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-50/40 hover:shadow-lg"
              >
                <div
                  class="flex items-center justify-between"
                >
                  <div
                    class="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm"
                  >
                    <Award :size="18" />
                  </div>

                  <span
                    class="text-xs font-black text-slate-300"
                  >
                    0{{ index + 1 }}
                  </span>
                </div>

                <p
                  class="mt-5 text-sm font-black text-slate-950"
                >
                  {{ achievement }}
                </p>

                <p
                  class="mt-2 text-xs leading-6 text-slate-500"
                >
                  Recognised achievement in Karate Federation of Nigeria (KFN) competition.
                </p>
              </div>


              <!-- MEDALS CARD -->

              <div
                class="rounded-2xl border border-slate-200 bg-slate-950 p-5 text-white"
              >
                <div
                  class="flex items-center justify-between"
                >
                  <div
                    class="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-emerald-400"
                  >
                    <Medal :size="18" />
                  </div>

                  <span
                    class="text-xs font-black text-white/30"
                  >
                    TOTAL
                  </span>
                </div>

                <p
                  class="mt-5 text-3xl font-black"
                >
                  {{ athlete.medals }}
                </p>

                <p
                  class="mt-1 text-xs font-bold text-white/50"
                >
                  Recorded medals and competitive honours
                </p>
              </div>

            </div>

          </article>

        </div>


        <!-- ========================================================
             SIDEBAR
        ========================================================= -->

        <aside class="space-y-6">


          <!-- COMPETITOR INFO -->

          <div
            class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >

            <p
              class="text-[9px] font-black uppercase tracking-[0.18em] text-emerald-600"
            >
              Competition Details
            </p>

            <h3
              class="mt-2 text-xl font-black text-slate-950"
            >
              Athlete Information
            </h3>


            <div class="mt-6 space-y-1">

              <div
                class="flex items-center justify-between gap-5 border-b border-slate-100 py-4"
              >
                <span class="text-xs font-medium text-slate-500">
                  Discipline
                </span>

                <span class="text-xs font-black text-slate-950">
                  {{ athlete.category }}
                </span>
              </div>


              <div
                class="flex items-center justify-between gap-5 border-b border-slate-100 py-4"
              >
                <span class="text-xs font-medium text-slate-500">
                  Gender
                </span>

                <span class="text-xs font-black text-slate-950">
                  {{ athlete.gender }}
                </span>
              </div>


              <div
                class="flex items-center justify-between gap-5 border-b border-slate-100 py-4"
              >
                <span class="text-xs font-medium text-slate-500">
                  Representing
                </span>

                <span class="text-right text-xs font-black text-slate-950">
                  {{ athlete.state }} State
                </span>
              </div>


              <div
                class="flex items-center justify-between gap-5 py-4"
              >
                <span class="text-xs font-medium text-slate-500">
                  National Rank
                </span>

                <span
                  class="rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-black text-emerald-700"
                >
                  #{{ athlete.rank }}
                </span>
              </div>

            </div>

          </div>


          <!-- FEDERATION CARD -->

          <div
            class="relative overflow-hidden rounded-3xl bg-emerald-700 p-6 text-white shadow-lg"
          >

            <div
              class="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10"
            />

            <div
              class="relative"
            >

              <div
                class="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10"
              >
                <ShieldCheck :size="21" />
              </div>


              <h3
                class="mt-6 text-xl font-black"
              >
                Karate Federation of Nigeria (KFN) Federation
              </h3>


              <p
                class="mt-3 text-sm leading-7 text-white/70"
              >
                Discover more athletes, rankings and national karate events.
              </p>


              <NuxtLink
                to="/athletes"
                class="group mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-black text-emerald-700 transition hover:bg-slate-950 hover:text-white"
              >
                Explore Athletes

                <ChevronRight
                  :size="16"
                  class="transition group-hover:translate-x-1"
                />
              </NuxtLink>

            </div>

          </div>


          <!-- LAST UPDATED -->

          <div
            class="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4"
          >
            <CalendarDays
              :size="18"
              class="text-slate-400"
            />

            <div>
              <p
                class="text-[9px] font-black uppercase tracking-wider text-slate-400"
              >
                Athlete Profile
              </p>

              <p
                class="mt-1 text-xs font-bold text-slate-700"
              >
                Official NKF athlete information
              </p>
            </div>
          </div>

        </aside>

      </div>

    </section>

  </main>
</template>