<script setup lang="ts">
const links = [
  { label: 'Home', to: '/' },
  { label: 'About NKF', to: '/about' },
  { label: 'Events', to: '/events' },
  { label: 'Athletes', to: '/athletes' },
  { label: 'Rankings', to: '/rankings' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'News', to: '/news' }
]
</script>

<template>
  <nav class="flex items-center gap-6 xl:gap-8">
    <NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="relative whitespace-nowrap text-sm font-bold text-muted transition after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:text-primary hover:after:w-full">
      {{ link.label }}
    </NuxtLink>
  </nav>
</template>