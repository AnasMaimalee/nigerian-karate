<script setup lang="ts">
import {
  ArrowDown,
  ShieldCheck,
  Trophy,
  Users
} from 'lucide-vue-next'

import { images } from '~/data/images'
</script>

<template>
  <section
    class="relative isolate min-h-[720px] overflow-hidden bg-[#07130e] text-white"
  >

    <!-- BACKGROUND IMAGE -->
    <div class="absolute inset-0">

      <img
        :src="images.backgrounds.darkKarate"
        alt="Karate Federation of Nigeria (KFN) Federation"
        class="h-full w-full object-cover opacity-30"
      >

      <div
        class="absolute inset-0 bg-gradient-to-r from-[#07130e] via-[#07130e]/90 to-[#07130e]/40"
      />

      <div
        class="absolute inset-0 bg-gradient-to-t from-[#07130e] via-transparent to-transparent"
      />

    </div>

    <!-- DECORATION -->
    <div
      class="pointer-events-none absolute -left-32 top-1/3 h-[32rem] w-[32rem] rounded-full bg-[#16a34a]/20 blur-3xl"
    />

    <div
      class="pointer-events-none absolute right-0 top-0 h-full w-[35%] border-l border-white/5"
    />

    <div
      class="pointer-events-none absolute right-[12%] top-0 h-full w-px bg-white/5"
    />

    <div
      class="pointer-events-none absolute right-[24%] top-0 h-full w-px bg-white/5"
    />

    <div
      class="relative mx-auto flex min-h-[720px] w-full max-w-7xl items-center px-4 pb-20 pt-24 sm:px-6 lg:px-8"
    >

      <div class="grid w-full gap-16 lg:grid-cols-[1fr_320px] lg:items-end">

        <!-- MAIN CONTENT -->
        <div class="max-w-5xl">

          <div
            class="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl"
          >
            <div
              class="flex h-7 w-7 items-center justify-center rounded-lg bg-[#16a34a] text-white"
            >
              <ShieldCheck :size="15" />
            </div>

            <span
              class="text-[10px] font-black uppercase tracking-[0.22em] text-white/70"
            >
              Karate Federation of Nigeria (KFN) Federation
            </span>
          </div>

          <h1
            class="mt-8 text-5xl font-black leading-[0.92] tracking-[-0.04em] sm:text-6xl lg:text-8xl"
          >
            BUILDING THE

            <span
              class="mt-3 block text-[#22c55e]"
            >
              FUTURE OF
            </span>

            Karate Federation of Nigeria (KFN).
          </h1>

          <p
            class="mt-8 max-w-2xl text-base leading-8 text-white/60 sm:text-lg"
          >
            The Karate Federation of Nigeria (KFN)is dedicated to developing athletes,
            strengthening competition, supporting coaches and officials and
            building a world-class future for karate across Nigeria.
          </p>

          <!-- ACTIONS -->
          <div
            class="mt-10 flex flex-col gap-4 sm:flex-row"
          >

            <NuxtLink
              to="/athletes"
              class="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#16a34a] px-7 py-4 text-sm font-black text-white shadow-2xl shadow-black/30 transition duration-300 hover:-translate-y-1 hover:bg-[#15803d]"
            >
              Explore Our Athletes

              <Trophy
                :size="18"
                class="transition duration-300 group-hover:scale-110"
              />
            </NuxtLink>

            <NuxtLink
              to="/documents"
              class="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-black text-white backdrop-blur-xl transition hover:border-white/30 hover:bg-white/10"
            >
              Federation Documents

              <ArrowDown :size="18" />
            </NuxtLink>

          </div>

        </div>

        <!-- SIDE INFORMATION -->
        <div
          class="hidden lg:block"
        >

          <div
            class="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] backdrop-blur-2xl"
          >

            <div
              class="border-b border-white/10 p-6"
            >
              <span
                class="text-[9px] font-black uppercase tracking-[0.2em] text-[#4ade80]"
              >
                Our Commitment
              </span>

              <h2
                class="mt-4 text-2xl font-black leading-tight"
              >
                Excellence Beyond Competition.
              </h2>

              <p
                class="mt-4 text-sm leading-7 text-white/50"
              >
                Developing people, building champions and strengthening karate
                from grassroots to the international stage.
              </p>
            </div>

            <div
              class="grid grid-cols-2"
            >

              <div
                class="border-r border-white/10 p-6"
              >
                <Users
                  :size="20"
                  class="text-[#4ade80]"
                />

                <strong
                  class="mt-4 block text-2xl font-black"
                >
                  500+
                </strong>

                <span
                  class="mt-1 block text-[9px] font-black uppercase tracking-widest text-white/40"
                >
                  Athletes
                </span>
              </div>

              <div
                class="p-6"
              >
                <Trophy
                  :size="20"
                  class="text-[#4ade80]"
                />

                <strong
                  class="mt-4 block text-2xl font-black"
                >
                  36
                </strong>

                <span
                  class="mt-1 block text-[9px] font-black uppercase tracking-widest text-white/40"
                >
                  States
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

    <!-- BOTTOM STRIP -->
    <div
      class="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/20 backdrop-blur-xl"
    >
      <div
        class="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8"
      >

        <div
          class="flex items-center gap-3"
        >
          <div
            class="flex gap-1"
          >
            <span class="h-2 w-2 animate-pulse rounded-full bg-white" />
            <span class="h-2 w-2 animate-pulse rounded-full bg-[#22c55e] [animation-delay:200ms]" />
            <span class="h-2 w-2 animate-pulse rounded-full bg-[#16a34a] [animation-delay:400ms]" />
          </div>

          <span
            class="text-[10px] font-black uppercase tracking-[0.2em] text-white/50"
          >
            Strength · Discipline · Excellence
          </span>
        </div>

        <NuxtLink
          to="#about-introduction"
          class="hidden items-center gap-2 text-xs font-black text-white/60 transition hover:text-white sm:flex"
        >
          Discover NKF

          <ArrowDown :size="16" />
        </NuxtLink>

      </div>
    </div>

  </section>
</template>