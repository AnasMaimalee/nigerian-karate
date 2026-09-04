<script setup lang="ts">
defineProps<{
  totalDocuments: number
  totalCategories: number
}>()
</script>

<template>
  <section
    class="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-green-800"
  >
    <!-- Background decorations -->
    <div
      class="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-white/5"
    />

    <div
      class="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-yellow-400/10 blur-3xl"
    />

    <div
      class="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div class="max-w-3xl">
        <div
          class="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-green-100 backdrop-blur"
        >
          <span class="text-lg">📚</span>
          Karate Federation of Nigeria (KFN) Federation
        </div>

        <h1
          class="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Rules &
          <span class="text-yellow-400">Documents</span>
        </h1>

        <p
          class="mt-6 max-w-2xl text-lg leading-8 text-green-100/80"
        >
          Explore official competition rules, regulations, policies,
          reports and important federation documents.
        </p>

        <div class="mt-10 flex flex-wrap gap-4">
          <div
            class="rounded-2xl border border-white/10 bg-white/10 px-6 py-4 backdrop-blur"
          >
            <p class="text-2xl font-black text-white">
              {{ totalDocuments }}
            </p>

            <p class="mt-1 text-sm text-green-100/70">
              Official Documents
            </p>
          </div>

          <div
            class="rounded-2xl border border-white/10 bg-white/10 px-6 py-4 backdrop-blur"
          >
            <p class="text-2xl font-black text-white">
              {{ totalCategories }}
            </p>

            <p class="mt-1 text-sm text-green-100/70">
              Categories
            </p>
          </div>

          <div
            class="rounded-2xl border border-white/10 bg-white/10 px-6 py-4 backdrop-blur"
          >
            <p class="text-2xl font-black text-yellow-400">
              2026
            </p>

            <p class="mt-1 text-sm text-green-100/70">
              Latest Updates
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>