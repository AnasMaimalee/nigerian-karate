<script setup lang="ts">
import {
  useDocuments,
} from '~/composables/useDocuments'

import DocumentHero from '~/components/documents/DocumentHero.vue'
import DocumentSearch from '~/components/documents/DocumentSearch.vue'
import DocumentSidebar from '~/components/documents/DocumentSidebar.vue'
import DocumentGrid from '~/components/documents/DocumentGrid.vue'
import DocumentPreviewModal from '~/components/documents/DocumentPreviewModal.vue'

const {
  categories,
  documents,
  activeCategory,
  searchQuery,
  filteredDocuments,
  selectedDocument,
  isPreviewOpen,
  getCategoryCount,
  openPreview,
  closePreview,
} = useDocuments()
</script>

<template>
  <div class="min-h-screen bg-gray-50">

    <DocumentHero
      :total-documents="documents.length"
      :total-categories="categories.length"
    />

    <main
      class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12"
    >
      <DocumentSearch
        v-model="searchQuery"
      />

      <div
        class="mt-8 grid gap-8 lg:grid-cols-[270px_minmax(0,1fr)]"
      >

        <!-- SIDEBAR -->
        <DocumentSidebar
          :categories="categories"
          :active-category="activeCategory"
          :get-category-count="getCategoryCount"
          @select="activeCategory = $event"
        />

        <!-- DOCUMENTS -->
        <DocumentGrid
          :documents="filteredDocuments"
          :categories="categories"
          :active-category="activeCategory"
          :search-query="searchQuery"
          @preview="openPreview"
        />

      </div>
    </main>

    <!-- PREVIEW MODAL -->
    <DocumentPreviewModal
      :document="selectedDocument"
      :is-open="isPreviewOpen"
      @close="closePreview"
    />

  </div>
</template>