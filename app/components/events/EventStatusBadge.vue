<script setup lang="ts">
import { Radio, Clock3, CheckCircle2, ClipboardCheck } from 'lucide-vue-next'

type EventStatus = 'live' | 'upcoming' | 'completed' | 'registration'

const props = withDefaults(defineProps<{
  status: EventStatus
  label?: string
}>(), {
  label: ''
})

const statusConfig = computed(() => {
  const config = {
    live: {
      label: props.label || 'LIVE NOW',
      icon: Radio,
      class: 'border-red-500/20 bg-red-500/10 text-red-600'
    },
    upcoming: {
      label: props.label || 'UPCOMING',
      icon: Clock3,
      class: 'border-primary/20 bg-primary/10 text-primary'
    },
    completed: {
      label: props.label || 'COMPLETED',
      icon: CheckCircle2,
      class: 'border-border bg-surface text-muted'
    },
    registration: {
      label: props.label || 'REGISTRATION OPEN',
      icon: ClipboardCheck,
      class: 'border-accent/20 bg-accent/10 text-accent'
    }
  }

  return config[props.status]
})
</script>

<template>
  <span :class="['inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-black uppercase tracking-widest', statusConfig.class]">
    <span v-if="status === 'live'" class="relative flex h-2 w-2">
      <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
      <span class="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
    </span>

    <component v-else :is="statusConfig.icon" :size="13" />

    {{ statusConfig.label }}
  </span>
</template>