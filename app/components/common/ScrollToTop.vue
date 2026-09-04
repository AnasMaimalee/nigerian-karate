<script setup lang="ts">
import { ArrowUp } from 'lucide-vue-next'

const visible = ref(false)

const checkScroll = () => {
  visible.value = window.scrollY > 500
}

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<template>
  <Transition name="fade">
    <button v-if="visible" class="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-xl transition hover:-translate-y-1 hover:bg-primary-dark" aria-label="Scroll to top" @click="scrollTop">
      <ArrowUp :size="20" />
    </button>
  </Transition>
</template>