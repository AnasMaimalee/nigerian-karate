<script setup lang="ts">
import { ArrowRight, ChevronDown, Play, Trophy, Zap } from 'lucide-vue-next'
import { images } from '~/data/images'
</script>

<template>
  <section class="relative min-h-[780px] overflow-hidden bg-surface-dark text-white">
    <div class="absolute inset-0">
      <picture class="block h-full w-full">
  <source
    media="(max-width: 640px)"
    :srcset="images.hero.mobile"
  >

  <img
    :src="images.hero.main"
    alt="Nigerian Karate Federation athletes"
    class="h-full w-full object-cover object-center sm:object-[center_35%] lg:object-[center_30%]"
  >
</picture>

      <div class="absolute inset-0 bg-surface-dark/85"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/75 to-surface-dark/20"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent"></div>
    </div>

    <div class="absolute -right-32 top-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl"></div>

    <div class="container-nkf relative z-10 flex min-h-[780px] items-center section-padding">
      <div class="grid w-full items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div class="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
            <span class="relative flex h-2.5 w-2.5">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary"></span>
            </span>

            <span class="text-xs font-black uppercase tracking-[0.25em] text-white/70">
              Nigerian Karate Federation
            </span>
          </div>

          <h1 class="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl xl:text-8xl">
            THE FUTURE OF
            <span class="mt-2 block text-primary">
              NIGERIAN KARATE.
            </span>
          </h1>

          <p class="mt-8 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
            Building champions. Empowering athletes. Connecting Nigeria to the global world of karate.
          </p>

          <div class="mt-10 flex flex-wrap gap-4">
            <NuxtLink to="/events" class="group inline-flex items-center gap-3 rounded-xl bg-primary px-7 py-4 text-sm font-black uppercase tracking-wide text-primary-foreground transition duration-300 hover:-translate-y-1 hover:bg-primary-hover hover:shadow-2xl">
              Explore Events
              <ArrowRight :size="18" class="transition duration-300 group-hover:translate-x-1" />
            </NuxtLink>

            <NuxtLink to="/rankings" class="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-sm font-black uppercase tracking-wide text-white backdrop-blur-xl transition hover:border-primary hover:bg-primary/10">
              View Rankings
              <Trophy :size="18" />
            </NuxtLink>
          </div>

          <div class="mt-14 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/10 pt-8">
            <div>
              <div class="text-2xl font-black sm:text-3xl">500+</div>
              <div class="mt-2 text-[10px] font-bold uppercase tracking-widest text-white/40">Athletes</div>
            </div>

            <div>
              <div class="text-2xl font-black sm:text-3xl">36</div>
              <div class="mt-2 text-[10px] font-bold uppercase tracking-widest text-white/40">States</div>
            </div>

            <div>
              <div class="text-2xl font-black sm:text-3xl">50+</div>
              <div class="mt-2 text-[10px] font-bold uppercase tracking-widest text-white/40">Events</div>
            </div>
          </div>
        </div>

        <div class="hidden lg:flex lg:justify-end">
          <div class="relative w-full max-w-sm">
            <div class="absolute -inset-4 rounded-[2rem] bg-primary/20 blur-2xl"></div>

            <div class="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
              <div class="flex items-center justify-between">
                <div class="rounded-xl bg-primary/20 p-3 text-primary">
                  <Zap :size="24" />
                </div>

                <span class="rounded-full bg-red-500 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white">
                  Live
                </span>
              </div>

              <h3 class="mt-8 text-2xl font-black leading-tight">
                Experience Nigerian Karate.
              </h3>

              <p class="mt-4 text-sm leading-7 text-white/60">
                Follow national competitions, discover elite athletes and watch the next generation of champions rise.
              </p>

              <div class="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                <div class="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Play :size="17" fill="currentColor" />
                </div>

                <div>
                  <div class="text-sm font-bold">NKF TV</div>
                  <div class="text-xs text-white/40">Watch latest highlights</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <a href="#federation-intro" class="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/50 transition hover:text-primary md:flex">
      <span class="text-[9px] font-black uppercase tracking-[0.3em]">
        Discover
      </span>

      <ChevronDown :size="20" class="animate-bounce" />
    </a>
  </section>
</template>