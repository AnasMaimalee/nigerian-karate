<script setup lang="ts">
import { ChevronRight, Medal, Minus, TrendingDown, TrendingUp } from 'lucide-vue-next'

interface RankingAthlete {
  id: number | string
  rank: number
  name: string
  country?: string
  state?: string
  points: number
  movement?: number
  image?: string
  category?: string
  weight?: string
}

const props = defineProps<{
  athlete: RankingAthlete
}>()

const emit = defineEmits<{
  select: [athlete: RankingAthlete]
}>()

const rankLabel = computed(() => {
  if (props.athlete.rank === 1) return '1st'
  if (props.athlete.rank === 2) return '2nd'
  if (props.athlete.rank === 3) return '3rd'

  return `#${props.athlete.rank}`
})

const rankClass = computed(() => {
  if (props.athlete.rank === 1) return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20'
  if (props.athlete.rank === 2) return 'bg-slate-400/10 text-slate-600 border-slate-400/20'
  if (props.athlete.rank === 3) return 'bg-orange-500/10 text-orange-600 border-orange-500/20'

  return 'bg-surface text-muted border-border'
})

const movementState = computed(() => {
  const value = props.athlete.movement || 0

  if (value > 0) return 'up'
  if (value < 0) return 'down'

  return 'same'
})
</script>

<template>
  <!-- DESKTOP ROW -->
  <button type="button" class="group hidden w-full grid-cols-[90px_minmax(240px,1.6fr)_1fr_1fr_130px_40px] items-center gap-4 border-b border-border px-5 py-4 text-left transition last:border-b-0 hover:bg-surface md:grid" @click="emit('select', athlete)">
    <div class="flex items-center gap-3">
      <span class="flex h-11 min-w-11 items-center justify-center rounded-xl border text-xs font-black" :class="rankClass">
        <Medal v-if="athlete.rank <= 3" :size="17" />
        <span v-else>{{ rankLabel }}</span>
      </span>

      <div class="min-w-0">
        <span class="block text-sm font-black text-foreground">
          #{{ athlete.rank }}
        </span>
      </div>
    </div>

    <div class="flex min-w-0 items-center gap-3">
      <img v-if="athlete.image" :src="athlete.image" :alt="athlete.name" class="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-white shadow-soft" />

      <div v-else class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-black text-primary">
        {{ athlete.name.charAt(0) }}
      </div>

      <div class="min-w-0">
        <span class="block truncate text-sm font-black text-foreground group-hover:text-primary">
          {{ athlete.name }}
        </span>

        <span class="mt-0.5 block truncate text-xs text-muted">
          {{ athlete.state || athlete.country || 'Nigeria' }}
        </span>
      </div>
    </div>

    <div class="text-sm font-bold text-muted">
      {{ athlete.category || 'Senior' }}
    </div>

    <div class="text-sm font-bold text-muted">
      {{ athlete.weight || '—' }}
    </div>

    <div class="flex items-center gap-2">
      <span v-if="movementState === 'up'" class="inline-flex items-center gap-1 rounded-lg bg-green-500/10 px-2.5 py-1.5 text-xs font-black text-green-600">
        <TrendingUp :size="14" />
        {{ athlete.movement }}
      </span>

      <span v-else-if="movementState === 'down'" class="inline-flex items-center gap-1 rounded-lg bg-red-500/10 px-2.5 py-1.5 text-xs font-black text-red-600">
        <TrendingDown :size="14" />
        {{ Math.abs(athlete.movement || 0) }}
      </span>

      <span v-else class="inline-flex items-center gap-1 rounded-lg bg-surface px-2.5 py-1.5 text-xs font-black text-muted">
        <Minus :size="14" />
        —
      </span>
    </div>

    <ChevronRight :size="18" class="text-muted transition group-hover:translate-x-1 group-hover:text-primary" />
  </button>

  <!-- MOBILE CARD -->
  <button type="button" class="block w-full border-b border-border p-4 text-left transition last:border-b-0 hover:bg-surface md:hidden" @click="emit('select', athlete)">
    <div class="flex items-start gap-3">
      <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border text-xs font-black" :class="rankClass">
        <Medal v-if="athlete.rank <= 3" :size="17" />
        <span v-else>#{{ athlete.rank }}</span>
      </span>

      <img v-if="athlete.image" :src="athlete.image" :alt="athlete.name" class="h-12 w-12 shrink-0 rounded-full object-cover shadow-soft" />

      <div v-else class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-black text-primary">
        {{ athlete.name.charAt(0) }}
      </div>

      <div class="min-w-0 flex-1">
        <div class="flex items-start justify-between gap-3">
          <div class="min-w-0">
            <h3 class="truncate text-sm font-black text-foreground">
              {{ athlete.name }}
            </h3>

            <p class="mt-1 text-xs text-muted">
              {{ athlete.state || athlete.country || 'Nigeria' }}
            </p>
          </div>

          <span class="shrink-0 text-sm font-black text-primary">
            {{ athlete.points.toLocaleString() }}
          </span>
        </div>

        <div class="mt-3 flex flex-wrap items-center gap-2">
          <span class="rounded-lg bg-surface px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-muted">
            {{ athlete.category || 'Senior' }}
          </span>

          <span v-if="athlete.weight" class="rounded-lg bg-surface px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-muted">
            {{ athlete.weight }}
          </span>

          <span v-if="movementState === 'up'" class="inline-flex items-center gap-1 rounded-lg bg-green-500/10 px-2 py-1 text-[10px] font-black text-green-600">
            <TrendingUp :size="12" />
            +{{ athlete.movement }}
          </span>

          <span v-else-if="movementState === 'down'" class="inline-flex items-center gap-1 rounded-lg bg-red-500/10 px-2 py-1 text-[10px] font-black text-red-600">
            <TrendingDown :size="12" />
            {{ athlete.movement }}
          </span>

          <span v-else class="inline-flex items-center gap-1 rounded-lg bg-surface px-2 py-1 text-[10px] font-black text-muted">
            <Minus :size="12" />
            No change
          </span>
        </div>
      </div>
    </div>
  </button>
</template>