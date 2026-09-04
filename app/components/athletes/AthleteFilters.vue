<script setup lang="ts">
import { Search, SlidersHorizontal, X } from 'lucide-vue-next'

interface FilterOption {
  label: string
  value: string
}

const search = defineModel<string>('search', { default: '' })
const gender = defineModel<string>('gender', { default: 'all' })
const category = defineModel<string>('category', { default: 'all' })
const state = defineModel<string>('state', { default: 'all' })

const genderOptions: FilterOption[] = [
  { label: 'All Athletes', value: 'all' },
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' }
]

const categoryOptions: FilterOption[] = [
  { label: 'All Categories', value: 'all' },
  { label: 'Kumite', value: 'kumite' },
  { label: 'Kata', value: 'kata' }
]

const stateOptions: FilterOption[] = [
  { label: 'All States', value: 'all' },
  { label: 'Abuja', value: 'abuja' },
  { label: 'Lagos', value: 'lagos' },
  { label: 'Kano', value: 'kano' },
  { label: 'Rivers', value: 'rivers' },
  { label: 'Ogun', value: 'ogun' }
]

const hasFilters = computed(() => {
  return search.value || gender.value !== 'all' || category.value !== 'all' || state.value !== 'all'
})

const clearFilters = () => {
  search.value = ''
  gender.value = 'all'
  category.value = 'all'
  state.value = 'all'
}
</script>

<template>
  <div class="rounded-3xl border border-border bg-white p-4 shadow-soft md:p-5">
    <div class="flex flex-col gap-4 xl:flex-row xl:items-center">
      <div class="relative flex-1">
        <Search :size="19" class="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />

        <input v-model="search" type="search" placeholder="Search athletes by name..." class="h-12 w-full rounded-xl border border-border bg-surface pl-11 pr-4 text-sm font-medium text-foreground outline-none transition placeholder:text-muted focus:border-primary focus:ring-4 focus:ring-primary/10" />
      </div>

      <div class="grid grid-cols-1 gap-3 sm:grid-cols-3 xl:w-[580px]">
        <div class="relative">
          <select v-model="gender" class="h-12 w-full appearance-none rounded-xl border border-border bg-white px-4 pr-10 text-sm font-bold text-foreground outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10">
            <option v-for="option in genderOptions" :key="option.value" :value="option.value">
              {{ option.label }}
            </option>
          </select>

          <SlidersHorizontal :size="16" class="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted" />
        </div>

        <select v-model="category" class="h-12 w-full rounded-xl border border-border bg-white px-4 text-sm font-bold text-foreground outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10">
          <option v-for="option in categoryOptions" :key="option.value" :value="option.value">
            {{ option.label }}
          </option>
        </select>

        <select v-model="state" class="h-12 w-full rounded-xl border border-border bg-white px-4 text-sm font-bold text-foreground outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10">
          <option v-for="option in stateOptions" :key="option.value" :value="option.value">
            {{ option.label }}
          </option>
        </select>
      </div>

      <button v-if="hasFilters" class="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl border border-danger/20 bg-danger/5 px-4 text-sm font-black text-danger transition hover:bg-danger hover:text-white" @click="clearFilters">
        <X :size="17" />
        Clear
      </button>
    </div>

    <div v-if="hasFilters" class="mt-4 flex flex-wrap items-center gap-2 border-t border-border pt-4">
      <span class="text-xs font-bold text-muted">Active filters:</span>

      <span v-if="search" class="rounded-full bg-primary-light px-3 py-1 text-xs font-bold text-primary">
        "{{ search }}"
      </span>

      <span v-if="gender !== 'all'" class="rounded-full bg-primary-light px-3 py-1 text-xs font-bold capitalize text-primary">
        {{ gender }}
      </span>

      <span v-if="category !== 'all'" class="rounded-full bg-primary-light px-3 py-1 text-xs font-bold capitalize text-primary">
        {{ category }}
      </span>

      <span v-if="state !== 'all'" class="rounded-full bg-primary-light px-3 py-1 text-xs font-bold capitalize text-primary">
        {{ state }}
      </span>
    </div>
  </div>
</template>