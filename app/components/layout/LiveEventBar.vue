<script setup lang="ts">
import { Radio, ChevronRight } from 'lucide-vue-next'
</script>

<template>
  <div class="relative z-50 overflow-hidden bg-surface-dark text-white">
    <div class="absolute inset-y-0 left-0 w-1/3 bg-primary/20 blur-3xl" />

    <div class="container-nkf relative flex min-h-11 flex-wrap items-center justify-between gap-x-6 gap-y-2 py-2 text-xs sm:flex-nowrap">
      <div class="flex items-center gap-3">
        <span class="flex shrink-0 items-center gap-2 rounded-full bg-danger px-3 py-1 font-black tracking-wider text-white">
          <span class="live-dot h-2 w-2 rounded-full bg-white" />
          LIVE
        </span>

        <span class="font-semibold text-white/90">
          Nigerian National Karate Championship
        </span>
      </div>

      <NuxtLink to="/events" class="group flex items-center gap-2 font-semibold text-white/70 transition hover:text-white">
        <Radio :size="14" class="text-accent" />

        <span>Follow live events</span>

        <ChevronRight :size="14" class="transition group-hover:translate-x-1" />
      </NuxtLink>
    </div>
  </div>
</template>