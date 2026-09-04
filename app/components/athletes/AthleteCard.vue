<script setup lang="ts">
import { ArrowUpRight, Award, MapPin, Trophy } from 'lucide-vue-next'

interface Athlete {
  id: number
  name: string
  slug: string
  image: string
  category: string
  gender: string
  state: string
  rank: number
  medals: number
  achievements?: string[]
}

defineProps<{
  athlete: Athlete
}>()
</script>

<template>
  <article class="group relative overflow-hidden rounded-3xl border border-border bg-white shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-card">
    <div class="relative aspect-[4/5] overflow-hidden bg-surface">
      <img :src="athlete.image" :alt="athlete.name" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />

      <div class="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-surface-dark/10 to-transparent"></div>

      <div class="absolute left-4 top-4 flex items-center gap-2">
        <span class="rounded-full border border-white/20 bg-surface-dark/70 px-3 py-1.5 text-xs font-black text-white backdrop-blur-md">#{{ athlete.rank }} National</span>
      </div>

      <div class="absolute right-4 top-4">
        <span class="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-black text-white shadow-lg">#{{ athlete.rank }}</span>
      </div>

      <div class="absolute bottom-0 left-0 right-0 p-5 text-white">
        <div class="flex items-center gap-2 text-xs font-bold text-white/70">
          <MapPin :size="14" class="text-primary-light" />
          <span>{{ athlete.state }}</span>
        </div>

        <h3 class="mt-2 text-2xl font-black tracking-tight">
          {{ athlete.name }}
        </h3>

        <p class="mt-1 text-sm text-white/70">
          {{ athlete.category }} • {{ athlete.gender }}
        </p>
      </div>
    </div>

    <div class="p-5">
      <div class="grid grid-cols-2 gap-3">
        <div class="rounded-2xl bg-surface p-3">
          <div class="flex items-center gap-2 text-primary">
            <Trophy :size="16" />
            <span class="text-[10px] font-black uppercase tracking-wider">Medals</span>
          </div>

          <p class="mt-2 text-xl font-black text-foreground">
            {{ athlete.medals }}
          </p>
        </div>

        <div class="rounded-2xl bg-surface p-3">
          <div class="flex items-center gap-2 text-accent">
            <Award :size="16" />
            <span class="text-[10px] font-black uppercase tracking-wider">Status</span>
          </div>

          <p class="mt-2 truncate text-sm font-black text-foreground">
            {{ athlete.achievements?.[0] || 'National Team' }}
          </p>
        </div>
      </div>

      <NuxtLink :to="`/athletes/${athlete.slug}`" class="mt-5 flex items-center justify-between rounded-2xl border border-border px-4 py-3 text-sm font-black text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white">
        <span>View Athlete Profile</span>
        <ArrowUpRight :size="18" class="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </NuxtLink>
    </div>
  </article>
</template>