<script setup lang="ts">
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col bg-[#f8fafc] text-slate-950">

    <!-- HEADER -->
    <AppHeader />

    <!-- PAGE CONTENT -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- FOOTER -->
    <AppFooter />

  </div>
</template>