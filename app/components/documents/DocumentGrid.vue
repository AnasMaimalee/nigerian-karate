<script setup lang="ts">
import type {
  DocumentCategory,
  FederationDocument,
} from '~/composables/useDocuments'

import DocumentCard from '~/components/documents/DocumentCard.vue'

const props = defineProps<{
  documents: FederationDocument[]
  categories: DocumentCategory[]
  activeCategory: string
  searchQuery: string
}>()

const emit = defineEmits<{
  preview: [document: FederationDocument]
}>()

const getCategory = (categoryId: string) => {
  return props.categories.find(
    (category) => category.id === categoryId,
  )
}

const title = computed(() => {
  if (props.searchQuery.trim()) {
    return 'Search Results'
  }

  if (props.activeCategory === 'all') {
    return 'All Documents'
  }

  return (
    getCategory(props.activeCategory)?.name || 'Documents'
  )
})
</script>

<template>
  <section>
    <!-- HEADER -->
    <div
      class="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end"
    >
      <div>
        <p
          class="text-sm font-bold uppercase tracking-widest text-green-700"
        >
          Document Library
        </p>

        <h2
          class="mt-1 text-3xl font-black text-gray-900"
        >
          {{ title }}
        </h2>
      </div>

      <p class="text-sm text-gray-500">
        <span class="font-bold text-gray-900">
          {{ documents.length }}
        </span>

        document{{ documents.length === 1 ? '' : 's' }} found
      </p>
    </div>

    <!-- DOCUMENT GRID -->
    <div
      v-if="documents.length > 0"
      class="grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
    >
      <DocumentCard
        v-for="document in documents"
        :key="document.id"
        :document="document"
        :category="getCategory(document.category)"
        @preview="emit('preview', $event)"
      />
    </div>

    <!-- EMPTY STATE -->
    <div
      v-else
      class="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white p-8 text-center"
    >
      <div
        class="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 text-4xl"
      >
        🔍
      </div>

      <h3
        class="mt-6 text-xl font-black text-gray-900"
      >
        No documents found
      </h3>

      <p
        class="mt-2 max-w-sm text-gray-500"
      >
        Try changing your search or selecting another category.
      </p>
    </div>
  </section>
</template>