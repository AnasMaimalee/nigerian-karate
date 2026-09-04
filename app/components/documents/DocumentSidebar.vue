<script setup lang="ts">
import type { DocumentCategory } from '~/composables/useDocuments'

defineProps<{
  categories: DocumentCategory[]
  activeCategory: string
  getCategoryCount: (categoryId: string) => number
}>()

const emit = defineEmits<{
  select: [categoryId: string]
}>()
</script>

<template>
  <aside>
    <div
      class="sticky top-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
    >
      <div class="border-b border-gray-100 px-5 py-5">
        <p class="text-xs font-bold uppercase tracking-widest text-gray-400">
          Browse Documents
        </p>

        <h2 class="mt-1 text-xl font-black text-gray-900">
          Categories
        </h2>
      </div>

      <div class="max-h-[70vh] overflow-y-auto p-3">
        <button
          type="button"
          class="mb-1 flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition"
          :class="
            activeCategory === 'all'
              ? 'bg-green-700 text-white shadow-lg shadow-green-700/20'
              : 'text-gray-600 hover:bg-gray-50'
          "
          @click="emit('select', 'all')"
        >
          <span class="flex items-center gap-3 font-semibold">
            <span class="text-lg">📚</span>
            All Documents
          </span>

          <span
            class="rounded-lg px-2 py-1 text-xs"
            :class="
              activeCategory === 'all'
                ? 'bg-white/15 text-white'
                : 'bg-gray-100 text-gray-500'
            "
          >
            {{
              categories.reduce(
                (total, category) =>
                  total + getCategoryCount(category.id),
                0,
              )
            }}
          </span>
        </button>

        <button
          v-for="category in categories"
          :key="category.id"
          type="button"
          class="mb-1 flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition"
          :class="
            activeCategory === category.id
              ? 'bg-green-700 text-white shadow-lg shadow-green-700/20'
              : 'text-gray-600 hover:bg-gray-50'
          "
          @click="emit('select', category.id)"
        >
          <span class="flex items-center gap-3 font-medium">
            <span class="text-lg">
              {{ category.icon }}
            </span>

            <span>
              {{ category.name }}
            </span>
          </span>

          <span
            class="rounded-lg px-2 py-1 text-xs"
            :class="
              activeCategory === category.id
                ? 'bg-white/15 text-white'
                : 'bg-gray-100 text-gray-500'
            "
          >
            {{ getCategoryCount(category.id) }}
          </span>
        </button>
      </div>
    </div>
  </aside>
</template>