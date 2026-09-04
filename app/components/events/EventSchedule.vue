<script setup lang="ts">
import { CalendarDays, Clock3, MapPin, Users } from 'lucide-vue-next'

interface ScheduleItem {
  time: string
  title: string
  description?: string
  venue?: string
  category?: string
}

const props = withDefaults(defineProps<{
  schedule: ScheduleItem[]
  title?: string
  date?: string
}>(), {
  title: 'Event Schedule',
  date: ''
})

const formatDate = (date: string) => {
  if (!date) return ''

  return new Intl.DateTimeFormat('en-NG', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  }).format(new Date(date))
}
</script>

<template>
  <section class="rounded-3xl border border-border bg-white p-5 shadow-soft md:p-7">
    <div class="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div class="flex items-center gap-2 text-primary">
          <CalendarDays :size="18" />

          <p class="text-[10px] font-black uppercase tracking-[0.2em]">Programme</p>
        </div>

        <h2 class="mt-2 text-2xl font-black tracking-tight text-foreground">
          {{ props.title }}
        </h2>
      </div>

      <div v-if="date" class="rounded-xl bg-primary-light px-4 py-2 text-xs font-black text-primary">
        {{ formatDate(date) }}
      </div>
    </div>

    <div class="mt-7 space-y-0">
      <div v-for="(item, index) in schedule" :key="`${item.time}-${item.title}`" class="group relative grid gap-5 pb-8 last:pb-0 md:grid-cols-[100px_1fr]">
        <div class="relative flex items-start gap-4 md:block">
          <div class="flex h-11 w-20 items-center justify-center rounded-xl bg-surface text-sm font-black text-primary">
            {{ item.time }}
          </div>

          <div v-if="index !== schedule.length - 1" class="absolute left-10 top-11 hidden h-[calc(100%-20px)] w-px bg-border md:block"></div>
        </div>

        <div class="rounded-2xl border border-transparent bg-surface p-5 transition duration-300 group-hover:border-primary/15 group-hover:bg-primary-light/30">
          <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 class="text-lg font-black text-foreground">
                {{ item.title }}
              </h3>

              <p v-if="item.description" class="mt-2 text-sm leading-7 text-muted">
                {{ item.description }}
              </p>
            </div>

            <span v-if="item.category" class="w-fit rounded-full bg-white px-3 py-1 text-[10px] font-black uppercase tracking-wider text-primary shadow-sm">
              {{ item.category }}
            </span>
          </div>

          <div v-if="item.venue" class="mt-4 flex items-center gap-2 text-xs font-semibold text-muted">
            <MapPin :size="15" class="text-primary" />
            {{ item.venue }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>