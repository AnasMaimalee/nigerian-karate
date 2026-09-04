<script setup lang="ts">
import { ArrowUpRight, CalendarDays, MapPin, Users, PlayCircle } from 'lucide-vue-next'

interface EventItem {
  id: number
  title: string
  slug: string
  image: string
  date: string
  endDate?: string
  location: string
  type: string
  status: 'live' | 'upcoming' | 'completed' | 'registration'
  participants?: number
  description?: string
  liveUrl?: string
}

const props = defineProps<{
  event: EventItem
}>()

const formattedDate = computed(() => {
  const start = new Date(props.event.date)

  return new Intl.DateTimeFormat('en-NG', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(start)
})
</script>

<template>
  <article class="group relative overflow-hidden rounded-3xl border border-border bg-white shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-card">
    <div class="relative aspect-[16/10] overflow-hidden bg-surface-dark">
      <img :src="event.image" :alt="event.title" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />

      <div class="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-surface-dark/20 to-transparent"></div>

      <div class="absolute left-4 top-4">
        <EventStatusBadge :status="event.status" />
      </div>

      <div v-if="event.status === 'live'" class="absolute bottom-4 left-4 right-4">
        <a v-if="event.liveUrl" :href="event.liveUrl" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2 rounded-xl bg-red-500 px-4 py-3 text-sm font-black text-white shadow-xl transition hover:bg-red-600">
          <PlayCircle :size="18" />
          Watch Live Event
        </a>
      </div>
    </div>

    <div class="p-5 md:p-6">
      <div class="flex flex-wrap items-center gap-2">
        <span class="rounded-full bg-primary-light px-3 py-1 text-[10px] font-black uppercase tracking-wider text-primary">
          {{ event.type }}
        </span>

        <span class="text-xs font-medium text-muted">
          {{ formattedDate }}
        </span>
      </div>

      <h3 class="mt-4 text-xl font-black leading-snug tracking-tight text-foreground transition group-hover:text-primary md:text-2xl">
        {{ event.title }}
      </h3>

      <p
        v-if="event.description"
        class="mt-3 line-clamp-2 text-sm font-medium leading-6 text-slate-700"
      >
        {{ event.description }}
      </p>

      <div class="mt-5 grid gap-3 border-t border-border pt-5 sm:grid-cols-2">
        <div class="flex items-center gap-2 text-xs font-semibold text-primary">
          <CalendarDays :size="16" class="text-primary" />
          {{ formattedDate }}
        </div>

        <div class="flex items-center gap-2 text-xs font-semibold text-primary">
          <MapPin :size="16" class="text-primary" />
          <span class="truncate">{{ event.location }}</span>
        </div>

        <div v-if="event.participants" class="flex items-center gap-2 text-xs font-semibold text-primary">
          <Users :size="16" class="text-primary" />
          {{ event.participants }} Participants
        </div>
      </div>

      <EventCountdown v-if="event.status === 'upcoming' || event.status === 'registration'" :target-date="event.date" compact class="mt-5 rounded-xl bg-surface-dark px-4 py-3" />

      <NuxtLink :to="`/events/${event.slug}`" class="mt-5 flex items-center justify-between rounded-2xl border border-border px-4 py-3.5 text-sm font-black text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white">
        <span>View Event Details</span>

        <ArrowUpRight :size="18" class="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </NuxtLink>
    </div>
  </article>
</template>