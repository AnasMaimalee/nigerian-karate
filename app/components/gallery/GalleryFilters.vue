<script setup lang="ts">
import {
  Images,
  Search,
  X
} from 'lucide-vue-next'

const search = defineModel<string>('search', {
  default: ''
})

const category = defineModel<string>('category', {
  default: 'all'
})

const categories = [
  {
    label: 'All Photos',
    value: 'all'
  },
  {
    label: 'Championships',
    value: 'championships'
  },
  {
    label: 'Athletes',
    value: 'athletes'
  },
  {
    label: 'Training',
    value: 'training'
  },
  {
    label: 'Seminars',
    value: 'seminars'
  },
  {
    label: 'Community',
    value: 'community'
  }
]

const hasFilters = computed(() => {
  return (
    search.value ||
    category.value !== 'all'
  )
})

const clearFilters = () => {
  search.value = ''
  category.value = 'all'
}
</script>
<template>
  <div class="mx-auto w-full max-w-3xl">
    <div
      class="rounded-2xl border border-[#dbe5dd] bg-white p-3 shadow-lg shadow-green-950/[0.04] sm:p-4"
    >
      <!-- SEARCH -->
      <div class="relative mx-auto w-full max-w-xl">
        <Search
          :size="17"
          class="absolute left-4 top-1/2 -translate-y-1/2 text-green-700"
        />

        <input
          v-model="search"
          type="search"
          placeholder="Search gallery moments..."
          class="h-11 w-full rounded-xl border border-[#dbe5dd] bg-[#f8faf9] pl-10 pr-4 text-sm font-semibold text-[#18231c] outline-none transition-all placeholder:text-[#7d8981] focus:border-green-700 focus:bg-white focus:ring-4 focus:ring-green-700/10"
        >
      </div>

      <!-- FILTERS -->
      <div
        class="mt-3 flex items-center justify-center gap-2 overflow-x-auto pb-1 scrollbar-hide"
      >
        <div
          class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700"
        >
          <Images :size="16" />
        </div>

        <button
          v-for="item in categories"
          :key="item.value"
          type="button"
          class="shrink-0 rounded-lg px-3.5 py-2 text-[11px] font-black transition-all duration-300"
          :class="
            category === item.value
              ? 'bg-green-700 text-white shadow-md shadow-green-900/20'
              : 'bg-[#f3f6f4] text-[#526057] hover:bg-green-50 hover:text-green-800'
          "
          @click="category = item.value"
        >
          {{ item.label }}
        </button>

        <button
          v-if="hasFilters"
          type="button"
          class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600 transition hover:bg-red-500 hover:text-white"
          aria-label="Clear filters"
          @click="clearFilters"
        >
          <X :size="16" />
        </button>
      </div>
    </div>
  </div>
</template>