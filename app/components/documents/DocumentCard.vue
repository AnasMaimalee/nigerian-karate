<script setup lang="ts">
import { computed } from 'vue'

import type {
  DocumentCategory,
  FederationDocument,
} from '~/composables/useDocuments'

const props = defineProps<{
  document: FederationDocument
  category?: DocumentCategory
}>()

const emit = defineEmits<{
  preview: [document: FederationDocument]
}>()

const categoryIcon = computed(() => {
  return props.category?.icon || '📄'
})
</script>

<template>
  <article
    class="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl hover:shadow-green-900/5"
  >
    <div class="flex items-start justify-between gap-4">

      <div
        class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-2xl transition group-hover:scale-110 group-hover:bg-green-100"
      >
        {{ categoryIcon }}
      </div>

      <span
        class="rounded-lg bg-red-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-red-700"
      >
        {{ document.format }}
      </span>

    </div>

    <div class="mt-6">

      <p
        v-if="category"
        class="text-xs font-bold uppercase tracking-widest text-green-700"
      >
        {{ category.name }}
      </p>

      <h3
        class="mt-2 text-xl font-black leading-snug text-gray-900"
      >
        {{ document.title }}
      </h3>

      <p
        class="mt-3 line-clamp-3 text-sm leading-6 text-gray-500"
      >
        {{ document.description }}
      </p>

    </div>

    <div class="mt-auto pt-6">

      <div
        class="flex items-center justify-between border-t border-gray-100 pt-5"
      >
        <div
          class="flex items-center gap-2"
        >
          <span
            v-for="language in document.languages"
            :key="language.code"
            class="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-bold text-gray-600"
          >
            {{ language.code }}
          </span>

          <span
            class="text-xs text-gray-400"
          >
            {{ document.year }}
          </span>
        </div>

        <button
          type="button"
          class="group/button inline-flex items-center gap-2 rounded-xl bg-green-700 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-green-800"
          @click="emit('preview', document)"
        >
          View

          <svg
            class="h-4 w-4 transition group-hover/button:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7"
            />
          </svg>
        </button>

      </div>

    </div>
  </article>
</template>