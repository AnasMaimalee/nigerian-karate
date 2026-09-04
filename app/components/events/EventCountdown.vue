<script setup lang="ts">
import { CalendarClock } from 'lucide-vue-next'

const props = defineProps<{
  targetDate: string | Date
  compact?: boolean
}>()

const target = computed(() => {
  return new Date(props.targetDate).getTime()
})

const now = ref(Date.now())

let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  timer = setInterval(() => {
    now.value = Date.now()
  }, 1000)
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})

const difference = computed(() => Math.max(target.value - now.value, 0))

const days = computed(() => Math.floor(difference.value / (1000 * 60 * 60 * 24)))
const hours = computed(() => Math.floor((difference.value / (1000 * 60 * 60)) % 24))
const minutes = computed(() => Math.floor((difference.value / (1000 * 60)) % 60))
const seconds = computed(() => Math.floor((difference.value / 1000) % 60))

const items = computed(() => [
  { label: 'Days', value: days.value },
  { label: 'Hours', value: hours.value },
  { label: 'Minutes', value: minutes.value },
  { label: 'Seconds', value: seconds.value }
])

const format = (value: number) => String(value).padStart(2, '0')
</script>

<template>
  <div v-if="difference > 0" :class="compact ? 'flex items-center gap-2' : 'rounded-3xl border border-border bg-white p-5 shadow-soft'">
    <div v-if="!compact" class="mb-4 flex items-center gap-2">
      <CalendarClock :size="17" class="text-primary" />
      <p class="text-xs font-black uppercase tracking-widest text-foreground">Event Starts In</p>
    </div>

    <div class="flex items-center gap-2 sm:gap-3">
      <template v-for="(item, index) in items" :key="item.label">
        <div :class="compact ? 'min-w-[42px] text-center' : 'min-w-[58px] flex-1 rounded-2xl bg-surface px-3 py-3 text-center'">
          <p :class="compact ? 'text-lg font-black text-white' : 'text-2xl font-black text-foreground'">
            {{ format(item.value) }}
          </p>

          <p :class="compact ? 'mt-0.5 text-[8px] font-bold uppercase tracking-wider text-white/50' : 'mt-1 text-[9px] font-black uppercase tracking-wider text-muted'">
            {{ item.label }}
          </p>
        </div>

        <span v-if="index < items.length - 1" :class="compact ? 'pb-4 text-white/40' : 'pb-5 text-lg font-black text-muted/50'">
          :
        </span>
      </template>
    </div>
  </div>

  <div v-else class="inline-flex items-center gap-2 rounded-xl bg-primary/10 px-4 py-3 text-sm font-bold text-primary">
    <CalendarClock :size="17" />
    Event time has arrived
  </div>
</template>