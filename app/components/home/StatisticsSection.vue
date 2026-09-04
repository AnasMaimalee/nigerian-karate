<script setup lang="ts">
import { computed } from 'vue'
import { Trophy, Users, MapPin, Medal } from 'lucide-vue-next'

interface Statistic {
  value: string
  label: string
  description?: string
  icon?: 'users' | 'map' | 'medal' | 'trophy'
}

const defaultStats: Statistic[] = [
  {
    value: '500+',
    label: 'Registered Athletes',
    description: 'Karatekas competing across Nigeria',
    icon: 'users'
  },
  {
    value: '36+',
    label: 'States Represented',
    description: 'Building karate across the nation',
    icon: 'map'
  },
  {
    value: '50+',
    label: 'National Medals',
    description: 'Celebrating excellence and achievement',
    icon: 'medal'
  },
  {
    value: '25+',
    label: 'Major Events',
    description: 'Competitions, championships and development programmes',
    icon: 'trophy'
  }
]

const props = defineProps<{
  stats?: Statistic[]
}>()

const displayStats = computed(() => {
  return props.stats?.length
    ? props.stats
    : defaultStats
})

const iconMap = {
  users: Users,
  map: MapPin,
  medal: Medal,
  trophy: Trophy
}
</script>

<template>
  <section
    class="relative isolate overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-28"
  >
    <!-- BACKGROUND ATMOSPHERE -->
    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-slate-950 to-slate-950"
    />

    <div
      class="pointer-events-none absolute -left-40 top-0 h-[32rem] w-[32rem] rounded-full bg-emerald-500/10 blur-3xl"
    />

    <div
      class="pointer-events-none absolute -right-40 bottom-0 h-[32rem] w-[32rem] rounded-full bg-green-500/10 blur-3xl"
    />

    <!-- GRID DECORATION -->
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.05]"
      style="
        background-image:
          linear-gradient(to right, white 1px, transparent 1px),
          linear-gradient(to bottom, white 1px, transparent 1px);
        background-size: 72px 72px;
      "
    />

    <div class="container-nkf relative z-10">

      <!-- HEADER -->
      <div
        class="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
      >
        <div class="max-w-3xl">

          <!-- EYEBROW -->
          <div
            class="inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 backdrop-blur-sm"
          >
            <span class="relative flex h-2.5 w-2.5">
              <span
                class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"
              />

              <span
                class="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400"
              />
            </span>

            <span
              class="text-[10px] font-black uppercase tracking-[0.25em] text-emerald-300"
            >
              Nigerian Karate At A Glance
            </span>
          </div>

          <!-- TITLE -->
          <h2
            class="mt-6 text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            A NATION OF

            <span
              class="mt-2 block text-emerald-400"
            >
              CHAMPIONS.
            </span>
          </h2>

          <!-- DESCRIPTION -->
          <p
            class="mt-6 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base"
          >
            From grassroots development to elite competition, Nigerian karate
            continues to grow, inspire and compete on the world stage.
          </p>
        </div>

        <!-- SIDE MESSAGE -->
        <div
          class="hidden max-w-xs border-l border-white/10 pl-6 lg:block"
        >
          <span
            class="text-[10px] font-black uppercase tracking-[0.25em] text-emerald-400"
          >
            Strength · Discipline · Excellence
          </span>

          <p
            class="mt-3 text-sm leading-7 text-slate-500"
          >
            Building a stronger future for karate across Nigeria.
          </p>
        </div>
      </div>

      <!-- STATISTICS GRID -->
      <div
        class="grid overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 shadow-2xl backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4"
      >
        <article
          v-for="(stat, index) in displayStats"
          :key="stat.label"
          class="group relative min-h-[280px] overflow-hidden border-b border-white/10 p-8 transition duration-500 hover:bg-slate-800 sm:p-10 lg:border-b-0"
          :class="{
            'lg:border-r': index < displayStats.length - 1,
            'sm:border-r': index % 2 === 0
          }"
        >

          <!-- BACKGROUND NUMBER -->
          <div
            class="pointer-events-none absolute -right-3 -top-8 select-none text-[8rem] font-black leading-none text-white/[0.03] transition duration-500 group-hover:scale-110 group-hover:text-emerald-400/[0.08]"
          >
            0{{ index + 1 }}
          </div>

          <!-- GLOW -->
          <div
            class="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-transparent blur-3xl transition duration-500 group-hover:bg-emerald-500/10"
          />

          <!-- ICON -->
          <div
            class="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 shadow-lg transition duration-500 group-hover:-translate-y-1 group-hover:scale-110 group-hover:border-emerald-400 group-hover:bg-emerald-500 group-hover:text-white"
          >
            <component
              :is="iconMap[stat.icon || 'trophy']"
              :size="28"
            />
          </div>

          <!-- VALUE -->
          <div
            class="relative mt-10 text-5xl font-black leading-none tracking-tight text-white sm:text-6xl"
          >
            {{ stat.value }}
          </div>

          <!-- LABEL -->
          <h3
            class="relative mt-5 text-sm font-black uppercase tracking-[0.12em] text-white"
          >
            {{ stat.label }}
          </h3>

          <!-- DESCRIPTION -->
          <p
            v-if="stat.description"
            class="relative mt-4 max-w-[15rem] text-sm leading-7 text-slate-400 transition duration-300 group-hover:text-slate-300"
          >
            {{ stat.description }}
          </p>

          <!-- BOTTOM ACCENT -->
          <div
            class="absolute bottom-0 left-0 h-1 w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full"
          />

          <!-- INDEX -->
          <span
            class="absolute bottom-6 right-7 text-[10px] font-black tracking-[0.2em] text-white/20"
          >
            0{{ index + 1 }}
          </span>
        </article>
      </div>

      <!-- BOTTOM MESSAGE -->
      <div
        class="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between"
      >
        <p
          class="text-xs font-medium uppercase tracking-[0.18em] text-slate-500"
        >
          Empowering athletes. Developing champions. Representing Nigeria.
        </p>

        <div
          class="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-400"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-emerald-400" />

          Nigerian Karate Federation
        </div>
      </div>

    </div>
  </section>
</template>