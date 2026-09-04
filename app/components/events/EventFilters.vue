<script setup lang="ts">
import { CalendarDays, Search, SlidersHorizontal, X } from 'lucide-vue-next'

const search = defineModel<string>('search', { default: '' })
const status = defineModel<string>('status', { default: 'all' })
const type = defineModel<string>('type', { default: 'all' })
const location = defineModel<string>('location', { default: 'all' })

const statusOptions = [
  { label: 'All Events', value: 'all' },
  { label: 'Live Now', value: 'live' },
  { label: 'Upcoming', value: 'upcoming' },
  { label: 'Registration Open', value: 'registration' },
  { label: 'Completed', value: 'completed' }
]

const typeOptions = [
  { label: 'All Types', value: 'all' },
  { label: 'Championship', value: 'championship' },
  { label: 'Tournament', value: 'tournament' },
  { label: 'Seminar', value: 'seminar' },
  { label: 'Training Camp', value: 'training' }
]

const locationOptions = [
  { label: 'All Locations', value: 'all' },
  { label: 'Abuja', value: 'abuja' },
  { label: 'Lagos', value: 'lagos' },
  { label: 'Kano', value: 'kano' },
  { label: 'Port Harcourt', value: 'port-harcourt' },
  { label: 'International', value: 'international' }
]

const hasFilters = computed(() => search.value || status.value !== 'all' || type.value !== 'all' || location.value !== 'all')

const clearFilters = () => {
  search.value = ''
  status.value = 'all'
  type.value = 'all'
  location.value = 'all'
}
</script>

<template>
  <div class="rounded-3xl border border-border bg-white p-4 shadow-soft md:p-5">
    <div class="flex flex-col gap-4 xl:flex-row xl:items-center">
      <div class="relative flex-1">
        <Search :size="19" class="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />

        <input v-model="search" type="search" placeholder="Search events..." class="h-12 w-full rounded-xl border border-border bg-surface pl-11 pr-4 text-sm font-medium text-foreground outline-none transition placeholder:text-muted focus:border-primary focus:ring-4 focus:ring-primary/10" />
      </div>

      <div class="grid grid-cols-1 gap-3 sm:grid-cols-3 xl:w-[680px]">
        <div class="relative">
          <select v-model="status" class="h-12 w-full appearance-none rounded-xl border border-border bg-white px-4 pr-10 text-sm font-bold text-foreground outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10">
            <option v-for="option in statusOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
          </select>

          <SlidersHorizontal :size="16" class="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted" />
        </div>

        <select v-model="type" class="h-12 w-full rounded-xl border border-border bg-white px-4 text-sm font-bold text-foreground outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10">
          <option v-for="option in typeOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
        </select>

        <select v-model="location" class="h-12 w-full rounded-xl border border-border bg-white px-4 text-sm font-bold text-foreground outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10">
          <option v-for="option in locationOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
        </select>
      </div>

      <button v-if="hasFilters" class="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl border border-red-500/20 bg-red-500/5 px-4 text-sm font-black text-red-600 transition hover:bg-red-500 hover:text-white" @click="clearFilters">
        <X :size="17" />
        Clear
      </button>
    </div>

    <div v-if="hasFilters" class="mt-4 flex flex-wrap items-center gap-2 border-t border-border pt-4">
      <CalendarDays :size="15" class="text-primary" />

      <span class="text-xs font-bold text-muted">Active filters:</span>

      <span v-if="search" class="rounded-full bg-primary-light px-3 py-1 text-xs font-bold text-primary">"{{ search }}"</span>
      <span v-if="status !== 'all'" class="rounded-full bg-primary-light px-3 py-1 text-xs font-bold capitalize text-primary">{{ status }}</span>
      <span v-if="type !== 'all'" class="rounded-full bg-primary-light px-3 py-1 text-xs font-bold capitalize text-primary">{{ type }}</span>
      <span v-if="location !== 'all'" class="rounded-full bg-primary-light px-3 py-1 text-xs font-bold capitalize text-primary">{{ location }}</span>
    </div>
  </div>
</template>