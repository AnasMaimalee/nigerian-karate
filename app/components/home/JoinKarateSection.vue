<script setup lang="ts">
import {
  ArrowUpRight,
  ShieldCheck,
  UsersRound,
  Trophy,
  Play
} from 'lucide-vue-next'

import { images } from '~/data/images'
</script>

<template>
  <section class="section-padding overflow-hidden bg-[#f5f7f6]">
    <div class="container-nkf">

      <div
        class="relative isolate overflow-hidden rounded-[2rem] bg-[#071b16] text-white shadow-2xl sm:rounded-[2.5rem]"
      >

        <!-- Background Image -->
        <div class="absolute inset-0">

          <img
            :src="images.backgrounds.darkKarate"
            alt="Nigerian karate athletes"
            class="h-full w-full object-cover opacity-20 transition duration-1000 hover:scale-105"
          >

          <div
            class="absolute inset-0 bg-gradient-to-r from-[#071b16] via-[#071b16]/95 to-[#071b16]/70"
          />

          <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
          />

        </div>

        <!-- Decorative Green Glow -->
        <div
          class="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-[#0f7a4d]/20 blur-3xl"
        />

        <div
          class="absolute -bottom-32 left-1/4 h-[22rem] w-[22rem] rounded-full bg-[#158a5c]/10 blur-3xl"
        />

        <!-- Decorative Lines -->
        <div class="absolute right-0 top-0 h-full w-1/3 opacity-10">
          <div class="absolute right-10 top-10 h-full w-px bg-white" />
          <div class="absolute right-24 top-0 h-full w-px bg-white" />
          <div class="absolute right-40 top-20 h-full w-px bg-white" />
        </div>

        <div
          class="relative px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20 xl:px-20"
        >

          <div
            class="grid gap-12 lg:grid-cols-[1fr_320px] lg:items-center"
          >

            <!-- Main Content -->
            <div class="max-w-4xl">

              <!-- Eyebrow -->
              <span
                class="inline-flex items-center gap-2 rounded-full border border-[#37b77d]/30 bg-[#0f7a4d]/15 px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-[#8ee6ba] backdrop-blur-xl"
              >
                <ShieldCheck :size="15" />

                Become Part Of The Movement
              </span>

              <!-- Heading -->
              <h2
                class="mt-7 text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
              >
                YOUR KARATE JOURNEY

                <span class="mt-2 block text-[#62d49a]">
                  STARTS HERE.
                </span>
              </h2>

              <!-- Description -->
              <p
                class="mt-7 max-w-2xl text-sm leading-8 text-white/65 sm:text-base lg:text-lg"
              >
                Whether you are an athlete, coach, club, official or karate enthusiast,
                there is a place for you in the future of Nigerian karate.
              </p>

              <!-- Action Buttons -->
              <div class="mt-10 flex flex-col gap-4 sm:flex-row">

                <!-- Primary -->
                <NuxtLink
                  to="/contact"
                  class="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#168556] px-7 py-4 text-sm font-black uppercase tracking-wide text-white shadow-xl shadow-black/30 transition duration-300 hover:-translate-y-1 hover:bg-[#0f6d45] hover:shadow-2xl"
                >
                  Join The Movement

                  <ArrowUpRight
                    :size="18"
                    class="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </NuxtLink>

                <!-- Secondary -->
                <NuxtLink
                  to="/athletes"
                  class="group inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-black uppercase tracking-wide text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#3fc786]/50 hover:bg-white hover:text-[#071b16]"
                >
                  <UsersRound
                    :size="18"
                    class="transition duration-300 group-hover:scale-110"
                  />

                  Explore Athletes
                </NuxtLink>

              </div>

              <!-- Mini Stats -->
              <div
                class="mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/10 pt-8"
              >

                <div>
                  <div class="text-2xl font-black sm:text-3xl">
                    500+
                  </div>

                  <div
                    class="mt-2 text-[9px] font-black uppercase tracking-[0.18em] text-white/40"
                  >
                    Athletes
                  </div>
                </div>

                <div>
                  <div class="text-2xl font-black sm:text-3xl">
                    36
                  </div>

                  <div
                    class="mt-2 text-[9px] font-black uppercase tracking-[0.18em] text-white/40"
                  >
                    States
                  </div>
                </div>

                <div>
                  <div class="text-2xl font-black sm:text-3xl">
                    50+
                  </div>

                  <div
                    class="mt-2 text-[9px] font-black uppercase tracking-[0.18em] text-white/40"
                  >
                    Events
                  </div>
                </div>

              </div>

            </div>

            <!-- Feature Card -->
            <div class="relative hidden lg:block">

              <!-- Green Glow -->
              <div
                class="absolute -inset-6 rounded-[2rem] bg-[#168556]/15 blur-3xl"
              />

              <div
                class="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.08] p-6 backdrop-blur-2xl"
              >

                <div class="flex items-center justify-between">

                  <div
                    class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#168556] text-white shadow-lg shadow-black/30"
                  >
                    <Trophy :size="22" />
                  </div>

                  <span
                    class="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[9px] font-black uppercase tracking-widest text-white/60"
                  >
                    Nigerian Karate
                  </span>

                </div>

                <h3 class="mt-8 text-2xl font-black leading-tight">
                  Become Part Of The Next Generation.
                </h3>

                <p class="mt-4 text-sm leading-7 text-white/55">
                  Train harder, compete nationally and represent Nigeria on the global karate stage.
                </p>

                <NuxtLink
                  to="/events"
                  class="group mt-8 flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-[#3fc786]/40 hover:bg-[#168556]/10"
                >

                  <div class="flex items-center gap-3">

                    <div
                      class="flex h-10 w-10 items-center justify-center rounded-xl bg-[#168556]/20 text-[#6fe0a6]"
                    >
                      <Play
                        :size="17"
                        fill="currentColor"
                      />
                    </div>

                    <div>
                      <div class="text-sm font-black">
                        Watch NKF Live
                      </div>

                      <div class="mt-1 text-[11px] text-white/40">
                        Events & highlights
                      </div>
                    </div>

                  </div>

                  <ArrowUpRight
                    :size="18"
                    class="text-white/40 transition group-hover:text-[#6fe0a6]"
                  />

                </NuxtLink>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>