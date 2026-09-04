<script setup lang="ts">
import {
  ArrowUpRight,
  CalendarDays,
  Flag,
  Trophy
} from 'lucide-vue-next'

const milestones = [
  {
    year: 'Foundation',
    title: 'Building the National Karate Movement',
    description:
      'The Karate Federation of Nigeria (KFN)continues to strengthen the national structure for karate development, competition and athlete participation across Nigeria.',
    icon: Flag
  },
  {
    year: 'Growth',
    title: 'Expanding Across Nigeria',
    description:
      'Karate continues to grow through state associations, clubs, coaches, officials and athletes working together to develop the sport.',
    icon: Trophy
  },
  {
    year: 'Today',
    title: 'A New Generation of Champions',
    description:
      'The Federation is focused on stronger competitions, athlete development, improved administration and greater international participation.',
    icon: CalendarDays
  }
]
</script>

<template>
  <section class="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
    <!-- BACKGROUND -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        class="absolute -right-40 top-20 h-[30rem] w-[30rem] rounded-full bg-[#dcfce7] blur-3xl"
      />
    </div>

    <div class="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

      <!-- HEADER -->
      <div class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

        <div>
          <span
            class="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.24em] text-[#15803d]"
          >
            <span class="h-2 w-2 rounded-full bg-[#16a34a]" />
            Our Journey
          </span>

          <h2
            class="mt-6 text-4xl font-black leading-[0.95] tracking-tight text-slate-950 sm:text-5xl"
          >
            A MOVEMENT

            <span class="mt-2 block text-[#15803d]">
              BUILT FOR
            </span>

            THE FUTURE.
          </h2>
        </div>

        <div>
          <p class="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Karate Federation of Nigeria (KFN) continues to evolve through the collective effort
            of athletes, coaches, officials, clubs and state associations.
          </p>

          <p class="mt-5 max-w-2xl text-sm leading-7 text-slate-500">
            Our journey is defined by progress, participation and a shared
            ambition to build a stronger platform for future generations.
          </p>
        </div>

      </div>

      <!-- TIMELINE -->
      <div class="relative mt-16">

        <!-- DESKTOP LINE -->
        <div
          class="absolute left-0 right-0 top-[52px] hidden h-px bg-slate-200 lg:block"
        />

        <div class="grid gap-8 lg:grid-cols-3">

          <article
            v-for="(item, index) in milestones"
            :key="item.year"
            class="group relative"
          >

            <!-- NUMBER -->
            <div
              class="relative z-10 flex h-[105px] items-center"
            >
              <div
                class="flex h-[105px] w-[105px] items-center justify-center rounded-[2rem] border border-slate-200 bg-white shadow-lg transition duration-500 group-hover:-translate-y-2 group-hover:border-[#16a34a] group-hover:shadow-2xl"
              >
                <component
                  :is="item.icon"
                  :size="30"
                  class="text-[#15803d]"
                />
              </div>
            </div>

            <!-- CONTENT -->
            <div
              class="mt-8 rounded-[2rem] border border-slate-200 bg-[#fafcfb] p-7 transition duration-500 group-hover:-translate-y-1 group-hover:bg-white group-hover:shadow-xl"
            >
              <span
                class="text-[10px] font-black uppercase tracking-[0.2em] text-[#15803d]"
              >
                {{ item.year }}
              </span>

              <h3
                class="mt-4 text-2xl font-black leading-tight text-slate-950"
              >
                {{ item.title }}
              </h3>

              <p
                class="mt-5 text-sm leading-7 text-slate-600"
              >
                {{ item.description }}
              </p>

              <NuxtLink
                to="/events"
                class="group/link mt-7 inline-flex items-center gap-2 text-xs font-black text-slate-900"
              >
                Discover NKF

                <ArrowUpRight
                  :size="16"
                  class="text-[#16a34a] transition group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                />
              </NuxtLink>
            </div>

            <!-- INDEX -->
            <!-- INDEX -->
<span
  class="absolute right-6 top-[125px] text-7xl font-black leading-none text-[#16a34a] transition duration-500 group-hover:scale-110 group-hover:text-[#166534]"
>
  0{{ index + 1 }}
</span>

          </article>

        </div>

      </div>

    </div>
  </section>
</template>