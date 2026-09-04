<script setup lang="ts">
import {
  ArrowLeft,
  CalendarDays,
  MapPin,
  Users,
  Trophy,
  Radio,
  Clock,
  Share2,
  Play,
  CheckCircle2,
} from 'lucide-vue-next'

import { events } from '~/data/events'

const route = useRoute()

const eventSlug = computed(() => String(route.params.slug))

const event = computed(() => {
  return events.find(
    (item) => item.slug === eventSlug.value,
  )
})

const formattedStartDate = computed(() => {
  if (!event.value) return ''

  return new Intl.DateTimeFormat('en-NG', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(event.value.date))
})

const formattedEndDate = computed(() => {
  if (!event.value?.endDate) return ''

  return new Intl.DateTimeFormat('en-NG', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(event.value.endDate))
})

const eventStatus = computed(() => {
  if (!event.value) return ''

  const labels = {
    live: 'LIVE NOW',
    upcoming: 'UPCOMING EVENT',
    completed: 'EVENT COMPLETED',
    registration: 'REGISTRATION OPEN',
  }

  return labels[event.value.status]
})

const statusClass = computed(() => {
  if (!event.value) return ''

  const classes = {
    live: 'bg-red-500 text-white',
    upcoming: 'bg-primary text-white',
    completed: 'bg-slate-800 text-white',
    registration: 'bg-yellow-400 text-slate-950',
  }

  return classes[event.value.status]
})

const eventDescription = computed(() => {
  if (!event.value) return ''

  return (
    event.value.description ||
    `Stay connected with ${event.value.title}, one of the Nigerian Karate Federation's official events bringing together athletes, coaches, officials and karate supporters.`
  )
})

const shareEvent = async () => {
  if (!event.value) return

  const shareData = {
    title: event.value.title,
    text: eventDescription.value,
    url: window.location.href,
  }

  if (navigator.share) {
    try {
      await navigator.share(shareData)
    } catch {
      // User cancelled sharing
    }

    return
  }

  await navigator.clipboard.writeText(
    window.location.href,
  )
}
</script>

<template>
  <main
    v-if="event"
    class="min-h-screen bg-slate-50"
  >
    <!-- HERO -->
    <section class="relative isolate overflow-hidden bg-slate-950 text-white">

      <!-- BACKGROUND IMAGE -->
      <div class="absolute inset-0">
        <img
          :src="event.image"
          :alt="event.title"
          class="h-full w-full object-cover opacity-35"
        />

        <div
          class="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40"
        />

        <div
          class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/30"
        />
      </div>

      <!-- DECORATION -->
      <div
        class="absolute -right-20 top-10 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
      />

      <div
        class="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-8 sm:px-6 sm:pb-24 lg:px-8 lg:pb-32"
      >
        <!-- BACK -->
        <NuxtLink
          to="/events"
          class="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-bold text-white/80 backdrop-blur transition hover:bg-white/10 hover:text-white"
        >
          <ArrowLeft :size="17" />

          Back to Events
        </NuxtLink>

        <div
          class="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end"
        >
          <!-- MAIN HERO CONTENT -->
          <div>
            <div class="flex flex-wrap items-center gap-3">
              <span
                class="rounded-full px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em]"
                :class="statusClass"
              >
                <Radio
                  v-if="event.status === 'live'"
                  :size="13"
                  class="mr-2 inline"
                />

                {{ eventStatus }}
              </span>

              <span
                class="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/70 backdrop-blur"
              >
                {{ event.type }}
              </span>
            </div>

            <h1
              class="mt-7 max-w-5xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl"
            >
              {{ event.title }}
            </h1>

            <p
              class="mt-7 max-w-3xl text-base leading-8 text-white/65 sm:text-lg"
            >
              {{ eventDescription }}
            </p>
          </div>

          <!-- EVENT QUICK CARD -->
          <aside
            class="rounded-3xl border border-white/10 bg-white/[0.08] p-6 backdrop-blur-xl"
          >
            <p
              class="text-[10px] font-black uppercase tracking-[0.2em] text-primary-light"
            >
              Event Information
            </p>

            <div class="mt-6 space-y-5">

              <!-- DATE -->
              <div class="flex gap-4">
                <div
                  class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary-light"
                >
                  <CalendarDays :size="20" />
                </div>

                <div>
                  <p
                    class="text-[10px] font-bold uppercase tracking-wider text-white/40"
                  >
                    Date
                  </p>

                  <p class="mt-1 text-sm font-black">
                    {{ formattedStartDate }}
                  </p>

                  <p
                    v-if="event.endDate"
                    class="mt-1 text-xs text-white/50"
                  >
                    Until {{ formattedEndDate }}
                  </p>
                </div>
              </div>

              <!-- LOCATION -->
              <div class="flex gap-4">
                <div
                  class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary-light"
                >
                  <MapPin :size="20" />
                </div>

                <div>
                  <p
                    class="text-[10px] font-bold uppercase tracking-wider text-white/40"
                  >
                    Location
                  </p>

                  <p class="mt-1 text-sm font-black">
                    {{ event.location }}
                  </p>
                </div>
              </div>

              <!-- PARTICIPANTS -->
              <div
                v-if="event.participants"
                class="flex gap-4"
              >
                <div
                  class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary-light"
                >
                  <Users :size="20" />
                </div>

                <div>
                  <p
                    class="text-[10px] font-bold uppercase tracking-wider text-white/40"
                  >
                    Participants
                  </p>

                  <p class="mt-1 text-sm font-black">
                    {{ event.participants }} Athletes
                  </p>
                </div>
              </div>

            </div>
          </aside>
        </div>
      </div>
    </section>

    <!-- MAIN CONTENT -->
    <section class="relative -mt-8 pb-20 sm:-mt-12 sm:pb-28">
      <div
        class="relative mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8"
      >

        <!-- LEFT CONTENT -->
        <div class="space-y-8">

          <!-- EVENT IMAGE -->
          <div
            class="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl"
          >
            <div class="aspect-[16/8]">
              <img
                :src="event.image"
                :alt="event.title"
                class="h-full w-full object-cover"
              />
            </div>
          </div>

          <!-- ABOUT -->
          <article
            class="rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-10"
          >
            <div
              class="flex items-center gap-3"
            >
              <div
                class="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"
              >
                <Trophy :size="20" />
              </div>

              <div>
                <p
                  class="text-[10px] font-black uppercase tracking-[0.2em] text-primary"
                >
                  Nigerian Karate Federation
                </p>

                <h2
                  class="mt-1 text-2xl font-black text-slate-950 sm:text-3xl"
                >
                  About This Event
                </h2>
              </div>
            </div>

            <p
              class="mt-8 text-base leading-8 text-slate-600"
            >
              {{ eventDescription }}
            </p>

            <p
              class="mt-5 text-base leading-8 text-slate-600"
            >
              The event provides an opportunity for athletes to demonstrate
              their skills, compete at a high level and contribute to the
              continued development of karate in Nigeria.
            </p>
          </article>

          <!-- EVENT HIGHLIGHTS -->
          <article
            class="rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-10"
          >
            <p
              class="text-[10px] font-black uppercase tracking-[0.2em] text-primary"
            >
              Event Highlights
            </p>

            <h2
              class="mt-3 text-3xl font-black tracking-tight text-slate-950"
            >
              What to Expect
            </h2>

            <div
              class="mt-8 grid gap-4 sm:grid-cols-2"
            >
              <div
                class="rounded-2xl bg-slate-50 p-5"
              >
                <CheckCircle2
                  :size="20"
                  class="text-primary"
                />

                <h3
                  class="mt-4 font-black text-slate-950"
                >
                  Competitive Excellence
                </h3>

                <p
                  class="mt-2 text-sm leading-6 text-slate-500"
                >
                  High-level competition featuring talented karate athletes.
                </p>
              </div>

              <div
                class="rounded-2xl bg-slate-50 p-5"
              >
                <Trophy
                  :size="20"
                  class="text-primary"
                />

                <h3
                  class="mt-4 font-black text-slate-950"
                >
                  Championship Experience
                </h3>

                <p
                  class="mt-2 text-sm leading-6 text-slate-500"
                >
                  Professional organisation and exciting championship action.
                </p>
              </div>

              <div
                class="rounded-2xl bg-slate-50 p-5"
              >
                <Users
                  :size="20"
                  class="text-primary"
                />

                <h3
                  class="mt-4 font-black text-slate-950"
                >
                  National Participation
                </h3>

                <p
                  class="mt-2 text-sm leading-6 text-slate-500"
                >
                  Bringing together athletes and members of the karate
                  community.
                </p>
              </div>

              <div
                class="rounded-2xl bg-slate-50 p-5"
              >
                <Clock
                  :size="20"
                  class="text-primary"
                />

                <h3
                  class="mt-4 font-black text-slate-950"
                >
                  Official Programme
                </h3>

                <p
                  class="mt-2 text-sm leading-6 text-slate-500"
                >
                  Follow official schedules, announcements and event updates.
                </p>
              </div>
            </div>
          </article>

        </div>

        <!-- SIDEBAR -->
        <aside class="space-y-5">

          <!-- ACTION CARD -->
          <div
            class="rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl"
          >
            <p
              class="text-[10px] font-black uppercase tracking-[0.2em] text-primary-light"
            >
              Stay Connected
            </p>

            <h3
              class="mt-3 text-2xl font-black"
            >
              Follow the Event
            </h3>

            <p
              class="mt-3 text-sm leading-6 text-white/55"
            >
              Stay informed about updates, schedules and important event
              information.
            </p>

            <a
              v-if="event.status === 'live' && event.liveUrl"
              :href="event.liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-red-500 px-5 py-4 text-sm font-black text-white transition hover:bg-red-600"
            >
              <Play :size="18" />

              Watch Live
            </a>

            <button
              type="button"
              class="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-black text-white transition hover:bg-white/10"
              @click="shareEvent"
            >
              <Share2 :size="17" />

              Share Event
            </button>
          </div>

          <!-- DETAILS -->
          <div
            class="rounded-[2rem] border border-slate-200 bg-white p-6"
          >
            <h3
              class="text-lg font-black text-slate-950"
            >
              Event Details
            </h3>

            <div
              class="mt-6 space-y-5"
            >
              <div
                class="border-b border-slate-100 pb-5"
              >
                <p
                  class="text-[10px] font-black uppercase tracking-wider text-slate-400"
                >
                  Competition Type
                </p>

                <p
                  class="mt-2 font-bold text-slate-900"
                >
                  {{ event.type }}
                </p>
              </div>

              <div
                class="border-b border-slate-100 pb-5"
              >
                <p
                  class="text-[10px] font-black uppercase tracking-wider text-slate-400"
                >
                  Event Status
                </p>

                <p
                  class="mt-2 font-bold text-slate-900"
                >
                  {{ eventStatus }}
                </p>
              </div>

              <div
                v-if="event.participants"
              >
                <p
                  class="text-[10px] font-black uppercase tracking-wider text-slate-400"
                >
                  Expected Participation
                </p>

                <p
                  class="mt-2 font-bold text-slate-900"
                >
                  {{ event.participants }} Participants
                </p>
              </div>
            </div>
          </div>

        </aside>
      </div>
    </section>
  </main>

  <!-- NOT FOUND -->
  <main
    v-else
    class="flex min-h-screen items-center justify-center bg-slate-50 px-4"
  >
    <div
      class="max-w-lg text-center"
    >
      <div
        class="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 text-primary"
      >
        <Trophy :size="34" />
      </div>

      <p
        class="mt-8 text-[10px] font-black uppercase tracking-[0.25em] text-primary"
      >
        Event Not Found
      </p>

      <h1
        class="mt-3 text-4xl font-black tracking-tight text-slate-950"
      >
        This event does not exist.
      </h1>

      <p
        class="mt-4 leading-7 text-slate-500"
      >
        The event you are looking for may have been removed or the link is
        incorrect.
      </p>

      <NuxtLink
        to="/events"
        class="mt-8 inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-4 text-sm font-black text-white transition hover:bg-primary-dark"
      >
        <ArrowLeft :size="17" />

        Back to Events
      </NuxtLink>
    </div>
  </main>
</template>