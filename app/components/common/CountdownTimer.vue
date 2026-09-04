<script setup lang="ts">
interface Props {
  targetDate?: string
}

const props = withDefaults(defineProps<Props>(), {
  targetDate: '2026-12-20T09:00:00'
})

const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})

const calculateTime = () => {
  const difference = new Date(props.targetDate).getTime() - Date.now()

  if (difference <= 0) {
    timeLeft.value = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }

    return
  }

  timeLeft.value = {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  }
}

let timer: ReturnType<typeof setInterval>

onMounted(() => {
  calculateTime()

  timer = setInterval(calculateTime, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})

const format = (value: number) => String(value).padStart(2, '0')
</script>

<template>
  <div class="grid grid-cols-4 gap-2 sm:gap-4">
    <div v-for="item in [{ label: 'Days', value: timeLeft.days }, { label: 'Hours', value: timeLeft.hours }, { label: 'Minutes', value: timeLeft.minutes }, { label: 'Seconds', value: timeLeft.seconds }]" :key="item.label" class="rounded-2xl border border-white/15 bg-white/10 px-2 py-3 text-center backdrop-blur sm:px-4 sm:py-4">
      <p class="text-xl font-black tabular-nums sm:text-3xl">
        {{ format(item.value) }}
      </p>

      <p class="mt-1 text-[9px] font-bold uppercase tracking-widest text-white/60 sm:text-[10px]">
        {{ item.label }}
      </p>
    </div>
  </div>
</template>