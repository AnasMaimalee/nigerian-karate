<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Trophy
} from 'lucide-vue-next'

interface EventItem {
  id: number | string
  title: string
  slug?: string
  image?: string
  location?: string
  venue?: string
  date?: string
  endDate?: string
  status?: 'upcoming' | 'live' | 'completed'
  category?: string
  featured?: boolean
  description?: string
}

const props = defineProps<{
  event?: EventItem | null
}>()

/*
|--------------------------------------------------------------------------
| EVENT URL
|--------------------------------------------------------------------------
*/
const eventUrl = computed(() => {
  if (!props.event?.slug) return '/events'

  return `/events/${props.event.slug}`
})

/*
|--------------------------------------------------------------------------
| EVENT DATE
|--------------------------------------------------------------------------
*/
const eventDate = computed(() => {
  return props.event?.date ?? null
})

/*
|--------------------------------------------------------------------------
| FORMATTED DATE
|--------------------------------------------------------------------------
*/
const formattedDate = computed(() => {
  if (!eventDate.value) return ''

  const date = new Date(eventDate.value)

  if (Number.isNaN(date.getTime())) {
    return eventDate.value
  }

  return date.toLocaleDateString('en-NG', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
})

/*
|--------------------------------------------------------------------------
| COUNTDOWN
|--------------------------------------------------------------------------
*/
const now = ref(Date.now())

let timer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  timer = setInterval(() => {
    now.value = Date.now()
  }, 1000)
})

onBeforeUnmount(() => {
  if (timer) {
    clearInterval(timer)
  }
})

const countdown = computed(() => {
  if (!eventDate.value) {
    return null
  }

  const target = new Date(eventDate.value).getTime()

  if (Number.isNaN(target)) {
    return null
  }

  const difference = target - now.value

  if (difference <= 0) {
    return {
      expired: true,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  const totalSeconds = Math.floor(difference / 1000)

  return {
    expired: false,
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60
  }
})

/*
|--------------------------------------------------------------------------
| STATUS CONFIG
|--------------------------------------------------------------------------
*/
const statusConfig = computed(() => {
  const status = props.event?.status

  if (status === 'live') {
    return {
      label: 'Live Now',
      class: 'bg-red-500 text-white border-red-400/30'
    }
  }

  if (status === 'completed') {
    return {
      label: 'Completed',
      class: 'bg-slate-900/80 text-white border-white/20'
    }
  }

  return {
    label: 'Upcoming',
    class: 'bg-primary text-white border-primary/30'
  }
})
</script>

<template>
  <section class="relative overflow-hidden bg-surface py-20 sm:py-24">
    <!-- Background decoration -->
    <div
      class="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
    />

    <div
      class="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
    />

    <div class="container-nkf relative z-10">

      <!-- SECTION HEADER -->
      <div
        class="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
      >
        <div class="max-w-2xl">
          <span
            class="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.25em] text-primary"
          >
            Competition Calendar
          </span>

          <h2
            class="mt-4 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            FEATURED
            <span class="text-primary">
              EVENT.
            </span>
          </h2>

          <p
            class="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base"
          >
            Follow the next major competition, championship and unforgettable
            moment in Karate Federation of Nigeria (KFN).
          </p>
        </div>

        <NuxtLink
          to="/events"
          class="group inline-flex w-fit items-center gap-3 rounded-2xl border border-border bg-white px-6 py-4 text-sm font-black text-foreground shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary hover:shadow-xl"
        >
          View All Events

          <ArrowUpRight
            :size="18"
            class="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </NuxtLink>
      </div>

      <!-- FEATURED EVENT -->
      <div
        v-if="event"
        class="group relative overflow-hidden rounded-[2rem] border border-border bg-white shadow-card"
      >
        <div
          class="grid lg:min-h-[560px] lg:grid-cols-[1.2fr_0.8fr]"
        >

          <!-- IMAGE SIDE -->
          <div
            class="relative min-h-[380px] overflow-hidden bg-surface-dark sm:min-h-[480px] lg:min-h-full"
          >
            <img
              v-if="event.image"
              :src="event.image"
              :alt="event.title"
              class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            >

            <!-- Image fallback -->
            <div
              v-else
              class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-surface-dark via-surface-dark to-primary/30"
            >
              <Trophy
                :size="90"
                class="text-primary/40"
              />
            </div>

            <!-- Overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent"
            />

            <div
              class="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent"
            />

            <!-- Top badges -->
            <div
              class="absolute left-6 right-6 top-6 flex items-center justify-between gap-4 sm:left-8 sm:right-8 sm:top-8"
            >
              <span
                class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white backdrop-blur-xl"
              >
                <Trophy :size="14" />

                {{ event.category || 'Featured Competition' }}
              </span>

              <span
                class="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[10px] font-black uppercase tracking-widest shadow-lg backdrop-blur-xl"
                :class="statusConfig.class"
              >
                <span
                  v-if="event.status === 'live'"
                  class="relative flex h-2 w-2"
                >
                  <span
                    class="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"
                  />

                  <span
                    class="relative inline-flex h-2 w-2 rounded-full bg-white"
                  />
                </span>

                {{ statusConfig.label }}
              </span>
            </div>

            <!-- Event title -->
            <div
              class="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8 lg:p-10"
            >
              <div
                v-if="event.location"
                class="mb-5 flex items-center gap-2 text-xs font-bold text-white/70"
              >
                <MapPin
                  :size="16"
                  class="text-primary"
                />

                {{ event.location }}
              </div>

              <h2
                class="max-w-3xl text-3xl font-black leading-[1.05] tracking-tight sm:text-5xl"
              >
                {{ event.title }}
              </h2>
            </div>
          </div>

          <!-- CONTENT SIDE -->
          <div
            class="relative flex flex-col justify-center overflow-hidden bg-white p-6 sm:p-10 lg:p-12"
          >
            <!-- Decorative -->
            <div
              class="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
            />

            <div class="relative">

              <!-- Small label -->
              <div
                class="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-primary"
              >
                <span class="h-2 w-2 rounded-full bg-primary" />

                Karate Federation of Nigeria (KFN) Federation
              </div>

              <!-- Description -->
              <p
                v-if="event.description"
                class="mt-6 text-base leading-8 text-muted"
              >
                {{ event.description }}
              </p>

              <!-- DATE CARD -->
              <div
                v-if="eventDate"
                class="mt-8 rounded-2xl border border-border bg-surface p-5"
              >
                <div class="flex items-center gap-4">
                  <div
                    class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20"
                  >
                    <CalendarDays :size="24" />
                  </div>

                  <div>
                    <span
                      class="block text-[10px] font-black uppercase tracking-widest text-muted"
                    >
                      Competition Begins
                    </span>

                    <strong
                      class="mt-1 block text-lg font-black text-foreground"
                    >
                      {{ formattedDate }}
                    </strong>
                  </div>
                </div>
              </div>

              <!-- LOCATION -->
              <div
                v-if="event.venue || event.location"
                class="mt-4 flex items-start gap-3 rounded-2xl border border-border bg-white p-5"
              >
                <div
                  class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
                >
                  <MapPin :size="20" />
                </div>

                <div>
                  <span
                    class="block text-[10px] font-black uppercase tracking-widest text-muted"
                  >
                    Venue
                  </span>

                  <strong
                    class="mt-1 block text-sm font-black text-foreground"
                  >
                    {{ event.venue || event.location }}
                  </strong>

                  <span
                    v-if="event.venue && event.location"
                    class="mt-1 block text-xs text-muted"
                  >
                    {{ event.location }}
                  </span>
                </div>
              </div>

              <!-- COUNTDOWN -->
              <div
                v-if="event.status === 'upcoming' && countdown"
                class="mt-8"
              >
                <div
                  v-if="!countdown.expired"
                  class="grid grid-cols-4 gap-2"
                >
                  <div
                    class="rounded-2xl border border-border bg-surface p-3 text-center sm:p-4"
                  >
                    <strong
                      class="block text-xl font-black text-foreground sm:text-2xl"
                    >
                      {{ countdown.days }}
                    </strong>

                    <span
                      class="mt-1 block text-[9px] font-black uppercase tracking-widest text-muted"
                    >
                      Days
                    </span>
                  </div>

                  <div
                    class="rounded-2xl border border-border bg-surface p-3 text-center sm:p-4"
                  >
                    <strong
                      class="block text-xl font-black text-foreground sm:text-2xl"
                    >
                      {{ countdown.hours }}
                    </strong>

                    <span
                      class="mt-1 block text-[9px] font-black uppercase tracking-widest text-muted"
                    >
                      Hours
                    </span>
                  </div>

                  <div
                    class="rounded-2xl border border-border bg-surface p-3 text-center sm:p-4"
                  >
                    <strong
                      class="block text-xl font-black text-foreground sm:text-2xl"
                    >
                      {{ countdown.minutes }}
                    </strong>

                    <span
                      class="mt-1 block text-[9px] font-black uppercase tracking-widest text-muted"
                    >
                      Minutes
                    </span>
                  </div>

                  <div
                    class="rounded-2xl border border-border bg-surface p-3 text-center sm:p-4"
                  >
                    <strong
                      class="block text-xl font-black text-foreground sm:text-2xl"
                    >
                      {{ countdown.seconds }}
                    </strong>

                    <span
                      class="mt-1 block text-[9px] font-black uppercase tracking-widest text-muted"
                    >
                      Seconds
                    </span>
                  </div>
                </div>

                <div
                  v-else
                  class="rounded-2xl bg-primary/10 px-5 py-4 text-center text-sm font-black text-primary"
                >
                  This event has started.
                </div>
              </div>

              <!-- BUTTON -->
              <NuxtLink
                :to="eventUrl"
                class="group/button mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-primary px-7 py-5 text-sm font-black uppercase tracking-wide text-white shadow-xl shadow-primary/20 transition duration-300 hover:-translate-y-1 hover:bg-primary-dark hover:shadow-2xl"
              >
                Explore Event

                <ArrowUpRight
                  :size="19"
                  class="transition duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
                />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- EMPTY STATE -->
      <div
        v-else
        class="rounded-[2rem] border border-dashed border-border bg-white px-6 py-20 text-center shadow-sm"
      >
        <div
          class="mx-auto flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-primary/10 text-primary"
        >
          <Trophy :size="36" />
        </div>

        <h3
          class="mt-6 text-2xl font-black text-foreground"
        >
          Events Coming Soon
        </h3>

        <p
          class="mx-auto mt-3 max-w-md text-sm leading-7 text-muted"
        >
          Exciting Karate Federation of Nigeria (KFN)competitions and events will
          appear here soon.
        </p>

        <NuxtLink
          to="/events"
          class="mt-7 inline-flex items-center gap-2 font-black text-primary transition hover:gap-3"
        >
          Explore Events

          <ArrowUpRight :size="18" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>