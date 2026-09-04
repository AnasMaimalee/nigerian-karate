<script setup lang="ts">
import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref
} from 'vue'

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
  startDate?: string
  endDate?: string
  status?: 'upcoming' | 'live' | 'completed'
  description?: string
}

/*
|--------------------------------------------------------------------------
| PROPS
|--------------------------------------------------------------------------
*/
const props = defineProps<{
  event?: EventItem | null
}>()

/*
|--------------------------------------------------------------------------
| FALLBACK EVENT
|--------------------------------------------------------------------------
|
| This prevents the section from becoming empty if no event is passed.
|
*/
const fallbackEvent: EventItem = {
  id: 'featured-event',
  slug: 'national-karate-championship-2026',
  title: 'Nigeria National Karate Championship 2026',
  description:
    'Nigeria’s leading karate athletes come together for an exciting national championship celebrating discipline, excellence and the future of Nigerian karate.',
  location: 'Abuja, Nigeria',
  venue: 'National Indoor Sports Hall',
  date: '2026-10-15T09:00:00',
  status: 'upcoming',
  image:
    'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1600&q=85'
}

/*
|--------------------------------------------------------------------------
| ACTIVE EVENT
|--------------------------------------------------------------------------
*/
const activeEvent = computed<EventItem>(() => {
  return props.event ?? fallbackEvent
})

/*
|--------------------------------------------------------------------------
| EVENT URL
|--------------------------------------------------------------------------
*/
const eventUrl = computed(() => {
  const slug = activeEvent.value.slug

  if (!slug) {
    return '/events'
  }

  return `/events/${slug}`
})

/*
|--------------------------------------------------------------------------
| EVENT DATE
|--------------------------------------------------------------------------
*/
const eventStartDate = computed(() => {
  return (
    activeEvent.value.startDate ||
    activeEvent.value.date ||
    null
  )
})

/*
|--------------------------------------------------------------------------
| FORMATTED DATE
|--------------------------------------------------------------------------
*/
const formattedDate = computed(() => {
  if (!eventStartDate.value) {
    return null
  }

  const date = new Date(eventStartDate.value)

  if (Number.isNaN(date.getTime())) {
    return eventStartDate.value
  }

  return date.toLocaleDateString('en-NG', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
})

/*
|--------------------------------------------------------------------------
| LIVE COUNTDOWN
|--------------------------------------------------------------------------
*/
const currentTime = ref(Date.now())

let countdownTimer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  countdownTimer = setInterval(() => {
    currentTime.value = Date.now()
  }, 1000)
})

onBeforeUnmount(() => {
  if (countdownTimer) {
    clearInterval(countdownTimer)
  }
})

const countdown = computed(() => {
  if (!eventStartDate.value) {
    return null
  }

  const targetTime = new Date(
    eventStartDate.value
  ).getTime()

  if (Number.isNaN(targetTime)) {
    return null
  }

  const difference =
    targetTime - currentTime.value

  if (difference <= 0) {
    return {
      expired: true,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  const totalSeconds = Math.floor(
    difference / 1000
  )

  return {
    expired: false,

    days: Math.floor(
      totalSeconds / 86400
    ),

    hours: Math.floor(
      (totalSeconds % 86400) / 3600
    ),

    minutes: Math.floor(
      (totalSeconds % 3600) / 60
    ),

    seconds:
      totalSeconds % 60
  }
})

/*
|--------------------------------------------------------------------------
| EVENT STATUS
|--------------------------------------------------------------------------
*/
const statusLabel = computed(() => {
  const status = activeEvent.value.status

  if (status === 'live') {
    return 'LIVE NOW'
  }

  if (status === 'completed') {
    return 'COMPLETED'
  }

  return 'UPCOMING'
})

const statusClass = computed(() => {
  const status = activeEvent.value.status

  if (status === 'live') {
    return 'border-red-400/40 bg-red-500 text-white'
  }

  if (status === 'completed') {
    return 'border-white/20 bg-black/70 text-white'
  }

  return 'border-green-400/30 bg-green-600 text-white'
})

/*
|--------------------------------------------------------------------------
| STATUS DOT
|--------------------------------------------------------------------------
*/
const showLiveIndicator = computed(() => {
  return activeEvent.value.status === 'live'
})
</script>

<template>
  <section
    class="relative overflow-hidden bg-slate-100 py-16 sm:py-20 lg:py-24"
  >
    <!-- BACKGROUND DECORATION -->
    <div
      class="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-green-500/10 blur-3xl"
    />

    <div
      class="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl"
    />

    <div class="container-nkf relative z-10">

      <!-- SECTION HEADER -->
      <div
        class="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
      >
        <div class="max-w-2xl">

          <span
            class="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-green-700"
          >
            Competition Calendar
          </span>

          <h2
            class="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"
          >
            FEATURED

            <span class="block text-green-600">
              EVENT.
            </span>
          </h2>

          <p
            class="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base"
          >
            Follow the next major moment in Nigerian karate and stay connected
            with national competitions, championships and federation events.
          </p>
        </div>

        <!-- ALL EVENTS BUTTON -->
        <NuxtLink
          to="/events"
          class="group inline-flex w-fit items-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-black text-slate-900 shadow-lg shadow-slate-900/5 transition duration-300 hover:-translate-y-1 hover:border-green-500 hover:bg-green-600 hover:text-white hover:shadow-xl hover:shadow-green-600/20"
        >
          All Events

          <ArrowUpRight
            :size="18"
            class="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </NuxtLink>
      </div>

      <!-- FEATURED EVENT CARD -->
      <div
        class="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-900/10"
      >
        <div
          class="grid lg:min-h-[540px] lg:grid-cols-[1.15fr_0.85fr]"
        >

          <!-- IMAGE SIDE -->
          <div
            class="relative min-h-[400px] overflow-hidden bg-slate-900"
          >
            <img
              v-if="activeEvent.image"
              :src="activeEvent.image"
              :alt="activeEvent.title"
              class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            >

            <!-- IMAGE FALLBACK -->
            <div
              v-else
              class="absolute inset-0 flex items-center justify-center bg-slate-900"
            >
              <Trophy
                :size="90"
                class="text-green-500/40"
              />
            </div>

            <!-- DARK IMAGE OVERLAY -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"
            />

            <!-- TOP BADGES -->
            <div
              class="absolute left-6 right-6 top-6 flex flex-wrap items-center justify-between gap-3"
            >
              <!-- FEATURED -->
              <span
                class="inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white shadow-xl"
              >
                <Trophy :size="14" />

                Featured Competition
              </span>

              <!-- STATUS -->
              <span
                class="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[10px] font-black uppercase tracking-widest shadow-lg backdrop-blur-xl"
                :class="statusClass"
              >
                <span
                  v-if="showLiveIndicator"
                  class="relative flex h-2 w-2"
                >
                  <span
                    class="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"
                  />

                  <span
                    class="relative inline-flex h-2 w-2 rounded-full bg-white"
                  />
                </span>

                {{ statusLabel }}
              </span>
            </div>

            <!-- EVENT TITLE -->
            <div
              class="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10"
            >
              <div
                v-if="activeEvent.location"
                class="mb-5 flex items-center gap-2 text-xs font-bold text-white/70"
              >
                <MapPin
                  :size="17"
                  class="text-green-400"
                />

                {{ activeEvent.location }}
              </div>

              <h2
                class="max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl"
              >
                {{ activeEvent.title }}
              </h2>
            </div>
          </div>

          <!-- CONTENT SIDE -->
          <div
            class="relative flex flex-col justify-center overflow-hidden bg-white p-6 sm:p-8 lg:p-10"
          >
            <!-- DECORATION -->
            <div
              class="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-500/5 blur-3xl"
            />

            <div class="relative">

              <!-- DESCRIPTION -->
              <p
                class="text-sm leading-8 text-slate-600 sm:text-base"
              >
                {{ activeEvent.description }}
              </p>

              <!-- DATE -->
              <div
                v-if="formattedDate"
                class="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <div
                  class="flex items-center gap-4"
                >
                  <div
                    class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-green-700"
                  >
                    <CalendarDays :size="24" />
                  </div>

                  <div>
                    <span
                      class="block text-[10px] font-black uppercase tracking-[0.18em] text-slate-500"
                    >
                      Competition Begins
                    </span>

                    <strong
                      class="mt-1 block text-lg font-black text-slate-950"
                    >
                      {{ formattedDate }}
                    </strong>
                  </div>
                </div>
              </div>

              <!-- COUNTDOWN -->
              <div
                v-if="activeEvent.status === 'upcoming' && countdown"
                class="mt-7"
              >
                <div
                  v-if="!countdown.expired"
                  class="grid grid-cols-4 gap-2"
                >
                  <!-- DAYS -->
                  <div
                    class="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-center"
                  >
                    <strong
                      class="block text-xl font-black text-slate-950 sm:text-2xl"
                    >
                      {{ countdown.days }}
                    </strong>

                    <span
                      class="mt-1 block text-[8px] font-black uppercase tracking-wider text-slate-500"
                    >
                      Days
                    </span>
                  </div>

                  <!-- HOURS -->
                  <div
                    class="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-center"
                  >
                    <strong
                      class="block text-xl font-black text-slate-950 sm:text-2xl"
                    >
                      {{ countdown.hours }}
                    </strong>

                    <span
                      class="mt-1 block text-[8px] font-black uppercase tracking-wider text-slate-500"
                    >
                      Hours
                    </span>
                  </div>

                  <!-- MINUTES -->
                  <div
                    class="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-center"
                  >
                    <strong
                      class="block text-xl font-black text-slate-950 sm:text-2xl"
                    >
                      {{ countdown.minutes }}
                    </strong>

                    <span
                      class="mt-1 block text-[8px] font-black uppercase tracking-wider text-slate-500"
                    >
                      Min
                    </span>
                  </div>

                  <!-- SECONDS -->
                  <div
                    class="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-center"
                  >
                    <strong
                      class="block text-xl font-black text-slate-950 sm:text-2xl"
                    >
                      {{ countdown.seconds }}
                    </strong>

                    <span
                      class="mt-1 block text-[8px] font-black uppercase tracking-wider text-slate-500"
                    >
                      Sec
                    </span>
                  </div>
                </div>

                <!-- EVENT STARTED -->
                <div
                  v-else
                  class="rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-center text-sm font-black text-green-700"
                >
                  This event has started.
                </div>
              </div>

              <!-- EVENT META -->
              <div
                v-if="activeEvent.venue"
                class="mt-6 flex items-center gap-3 border-t border-slate-100 pt-6 text-sm"
              >
                <MapPin
                  :size="18"
                  class="shrink-0 text-green-600"
                />

                <div>
                  <span
                    class="block text-[10px] font-black uppercase tracking-widest text-slate-400"
                  >
                    Venue
                  </span>

                  <span
                    class="mt-1 block font-bold text-slate-700"
                  >
                    {{ activeEvent.venue }}
                  </span>
                </div>
              </div>

              <!-- BUTTON -->
              <NuxtLink
                :to="eventUrl"
                class="group/button mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-green-600 px-6 py-4 text-sm font-black text-white shadow-xl shadow-green-600/20 transition duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-2xl"
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

      <!-- BOTTOM INFO -->
      <div
        class="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <p
          class="text-xs leading-6 text-slate-500"
        >
          Stay connected with the Nigerian Karate Federation for official
          competition schedules and event announcements.
        </p>

        <NuxtLink
          to="/events"
          class="group inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-green-700"
        >
          View Competition Calendar

          <ArrowUpRight
            :size="16"
            class="transition group-hover:translate-x-1"
          />
        </NuxtLink>
      </div>

    </div>
  </section>
</template>