<script setup lang="ts">
import { X, ChevronRight } from 'lucide-vue-next'

defineProps<{
  open: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

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
  <Transition name="fade">
    <div v-if="open" class="fixed inset-0 z-[100] bg-surface-dark lg:hidden">
      <div class="container-nkf flex h-full flex-col">
        <div class="flex h-20 items-center justify-between">
          <AppLogo />

          <button class="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white" aria-label="Close menu" @click="emit('close')">
            <X :size="23" />
          </button>
        </div>

        <nav class="flex flex-1 flex-col justify-center gap-1">
          <NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="group flex items-center justify-between border-b border-white/10 py-5 text-2xl font-black text-white transition hover:pl-2 hover:text-primary-light" @click="emit('close')">
            {{ link.label }}

            <ChevronRight :size="22" class="text-primary transition group-hover:translate-x-1" />
          </NuxtLink>
        </nav>

        <div class="pb-10">
          <NuxtLink to="/contact" class="block rounded-2xl bg-primary px-6 py-4 text-center font-black text-white shadow-xl" @click="emit('close')">
            Contact Karate Federation of Nigeria (KFN) Federation
          </NuxtLink>
        </div>
      </div>
    </div>
  </Transition>
</template>