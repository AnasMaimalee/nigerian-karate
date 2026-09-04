<script setup lang="ts">
import { Trophy, Users, ChevronRight } from 'lucide-vue-next'

interface Props {
  athleteCount?: number
  title?: string
  description?: string
}

withDefaults(defineProps<Props>(), {
  athleteCount: 2500,
  title: 'Nigeria’s Champions. One Fighting Spirit.',
  description: 'Meet the athletes representing the strength, discipline and determination of Nigerian karate on national and international stages.'
})
</script>

<template>
  <section class="relative isolate overflow-hidden bg-surface-dark text-white">
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-br from-surface-dark via-surface-dark/95 to-primary-dark/80"></div>
      <div class="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/30 blur-3xl"></div>
      <div class="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl"></div>
      <div class="absolute left-0 top-0 h-full w-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:42px_42px]"></div>
    </div>

    <div class="relative container-nkf py-20 sm:py-24 lg:py-32">
      <div class="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div class="max-w-3xl">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
            <Trophy :size="15" class="text-accent" />
            <span class="text-[10px] font-black uppercase tracking-[0.25em] text-white/70">Nigerian Karate Federation</span>
          </div>

          <h1 class="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            {{ title }}
          </h1>

          <p class="mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
            {{ description }}
          </p>

          <div class="mt-9 flex flex-col gap-4 sm:flex-row">
            <NuxtLink to="/rankings" class="group inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-sm font-black text-white shadow-xl shadow-primary/25 transition-all duration-300 hover:-translate-y-1 hover:bg-primary-dark">
              Explore Rankings
              <ChevronRight :size="18" class="transition-transform duration-300 group-hover:translate-x-1" />
            </NuxtLink>

            <a href="#athletes" class="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-black text-white transition-all duration-300 hover:bg-white hover:text-surface-dark">
              Meet Our Athletes
            </a>
          </div>
        </div>

        <div class="relative mx-auto w-full max-w-md lg:max-w-none">
          <div class="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl sm:p-9">
            <div class="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl"></div>

            <div class="relative">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-[10px] font-black uppercase tracking-[0.25em] text-white/40">National Community</p>
                  <p class="mt-2 text-5xl font-black tracking-tight text-white sm:text-6xl">{{ athleteCount.toLocaleString() }}+</p>
                </div>

                <div class="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/30">
                  <Users :size="28" />
                </div>
              </div>

              <div class="mt-8 h-px bg-white/10"></div>

              <div class="mt-7 grid grid-cols-2 gap-4">
                <div class="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p class="text-2xl font-black">36+</p>
                  <p class="mt-1 text-[10px] font-bold uppercase tracking-wider text-white/45">States Represented</p>
                </div>

                <div class="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p class="text-2xl font-black">National</p>
                  <p class="mt-1 text-[10px] font-bold uppercase tracking-wider text-white/45">Elite Programme</p>
                </div>
              </div>
            </div>
          </div>

          <div class="absolute -bottom-5 -left-5 hidden h-24 w-24 rounded-full border border-primary/30 bg-primary/10 blur-sm sm:block"></div>
        </div>
      </div>
    </div>
  </section>
</template> 