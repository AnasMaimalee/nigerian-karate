<script setup lang="ts">
import {
  ArrowDown,
  CalendarDays,
  ChevronRight,
  Clock3,
  MapPin,
  Radio,
  Trophy,
  Users,
} from 'lucide-vue-next'

const scrollToEvents = () => {
  document.querySelector('#events-list')?.scrollIntoView({
    behavior: 'smooth',
  })
}

/*
|--------------------------------------------------------------------------
| NEXT FEATURED EVENT
|--------------------------------------------------------------------------
*/

const featuredEvent = {
  title: 'National Karate Championship',
  location: 'Abuja, Nigeria',
  venue: 'Moshood Abiola National Stadium',
  date: '20 November 2026',
  targetDate: '2026-11-20T09:00:00',
  participants: 450,
}

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
  const difference =
    new Date(featuredEvent.targetDate).getTime() - now.value

  if (difference <= 0) {
    return {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
    }
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24))

  const hours = Math.floor(
    (difference / (1000 * 60 * 60)) % 24,
  )

  const minutes = Math.floor(
    (difference / (1000 * 60)) % 60,
  )

  const seconds = Math.floor(
    (difference / 1000) % 60,
  )

  return {
    days: String(days).padStart(2, '0'),
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0'),
  }
})
</script>

<template>
  <section
    class="relative isolate overflow-hidden bg-[#06150d] text-white"
  >
    <!-- BACKGROUND -->
    <div class="absolute inset-0">

      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(22,163,74,0.28),transparent_28%)]"
      />

      <div
        class="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-green-500/10 blur-[140px]"
      />

      <div
        class="absolute inset-0 bg-gradient-to-br from-[#06150d] via-[#071b10] to-[#020604]"
      />

      <!-- GRID -->
      <div
        class="absolute inset-0 opacity-[0.035]"
        style="
          background-image:
            linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px);
          background-size: 50px 50px;
        "
      />
    </div>

    <!-- BIG DECORATION -->
    <div
      class="pointer-events-none absolute -left-20 top-1/2 hidden -translate-y-1/2 text-[340px] font-black leading-none text-white/[0.025] xl:block"
    >
      NKF
    </div>

    <div
      class="relative mx-auto grid min-h-[700px] w-full max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-28"
    >
      <!-- LEFT CONTENT -->
      <div>

        <!-- LIVE LABEL -->
        <div
          class="inline-flex items-center gap-3 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2"
        >
          <span class="relative flex h-2.5 w-2.5">
            <span
              class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
            />

            <span
              class="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400"
            />
          </span>

          <span
            class="text-[10px] font-black uppercase tracking-[0.24em] text-green-300"
          >
            Karate Federation of Nigeria (KFN) Federation
          </span>
        </div>

        <!-- TITLE -->
        <h1
          class="mt-8 text-5xl font-black leading-[0.9] tracking-[-0.05em] sm:text-6xl md:text-7xl xl:text-8xl"
        >
          THE HOME OF

          <span
            class="mt-2 block text-green-400"
          >
            NIGERIAN
          </span>

          KARATE EVENTS.
        </h1>

        <!-- DESCRIPTION -->
        <p
          class="mt-8 max-w-xl text-base leading-8 text-white/60 sm:text-lg"
        >
          Follow championships, tournaments, seminars and official
          Karate Federation of Nigeria (KFN)events happening across the country.
        </p>

        <!-- BUTTONS -->
        <div class="mt-10 flex flex-wrap gap-4">

          <button
            type="button"
            class="group inline-flex items-center gap-3 rounded-2xl bg-green-600 px-6 py-4 text-sm font-black text-white shadow-2xl shadow-green-900/40 transition duration-300 hover:-translate-y-1 hover:bg-green-500"
            @click="scrollToEvents"
          >
            Explore All Events

            <ArrowDown
              :size="18"
              class="transition group-hover:translate-y-1"
            />
          </button>

          <NuxtLink
            to="/rankings"
            class="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-black text-white transition hover:border-white/20 hover:bg-white/[0.08]"
          >
            <Trophy
              :size="18"
              class="text-green-400"
            />

            National Rankings

            <ChevronRight
              :size="17"
              class="transition group-hover:translate-x-1"
            />
          </NuxtLink>

        </div>

        <!-- STATS -->
        <div
          class="mt-14 grid max-w-xl grid-cols-3 border-t border-white/10 pt-8"
        >
          <div>
            <p class="text-2xl font-black text-white">
              24+
            </p>

            <p
              class="mt-1 text-[9px] font-black uppercase tracking-[0.18em] text-white/40"
            >
              Events
            </p>
          </div>

          <div>
            <p class="text-2xl font-black text-white">
              36
            </p>

            <p
              class="mt-1 text-[9px] font-black uppercase tracking-[0.18em] text-white/40"
            >
              States
            </p>
          </div>

          <div>
            <p class="text-2xl font-black text-white">
              1
            </p>

            <p
              class="mt-1 text-[9px] font-black uppercase tracking-[0.18em] text-white/40"
            >
              Federation
            </p>
          </div>
        </div>

      </div>

      <!-- RIGHT FEATURED EVENT -->
      <div
        class="relative"
      >

        <!-- GLOW -->
        <div
          class="absolute -inset-6 rounded-[3rem] bg-green-500/10 blur-3xl"
        />

        <article
          class="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.055] shadow-2xl backdrop-blur-xl"
        >

          <!-- CARD HEADER -->
          <div
            class="relative overflow-hidden border-b border-white/10 px-7 py-7 sm:px-9"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-green-500/15 via-transparent to-transparent"
            />

            <div
              class="relative flex items-start justify-between gap-6"
            >
              <div>

                <div
                  class="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-green-300"
                >
                  <Radio
                    :size="14"
                  />

                  Next Major Event
                </div>

                <h2
                  class="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl"
                >
                  {{ featuredEvent.title }}
                </h2>

              </div>

              <div
                class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-500 text-white shadow-lg shadow-green-900/30"
              >
                <Trophy
                  :size="24"
                />
              </div>

            </div>
          </div>

          <!-- EVENT INFORMATION -->
          <div
            class="px-7 py-7 sm:px-9"
          >

            <div
              class="grid gap-4 border-b border-white/10 pb-7 sm:grid-cols-2"
            >

              <div
                class="flex items-start gap-3"
              >
                <div
                  class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-green-400"
                >
                  <CalendarDays
                    :size="18"
                  />
                </div>

                <div>
                  <p
                    class="text-[9px] font-black uppercase tracking-[0.18em] text-white/35"
                  >
                    Competition Date
                  </p>

                  <p
                    class="mt-1 text-sm font-black text-white"
                  >
                    {{ featuredEvent.date }}
                  </p>
                </div>
              </div>

              <div
                class="flex items-start gap-3"
              >
                <div
                  class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-green-400"
                >
                  <MapPin
                    :size="18"
                  />
                </div>

                <div>
                  <p
                    class="text-[9px] font-black uppercase tracking-[0.18em] text-white/35"
                  >
                    Host Location
                  </p>

                  <p
                    class="mt-1 text-sm font-black text-white"
                  >
                    {{ featuredEvent.location }}
                  </p>
                </div>
              </div>

            </div>

            <!-- VENUE -->
            <div
              class="mt-6 flex items-center gap-3"
            >
              <div
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] text-green-400"
              >
                <MapPin
                  :size="18"
                />
              </div>

              <div>
                <p
                  class="text-[9px] font-black uppercase tracking-[0.18em] text-white/35"
                >
                  Official Venue
                </p>

                <p
                  class="mt-1 text-sm font-bold text-white/85"
                >
                  {{ featuredEvent.venue }}
                </p>
              </div>
            </div>

            <!-- COUNTDOWN TITLE -->
            <div
              class="mt-8 flex items-center gap-2"
            >
              <Clock3
                :size="16"
                class="text-green-400"
              />

              <span
                class="text-[10px] font-black uppercase tracking-[0.2em] text-white/45"
              >
                Event Starts In
              </span>
            </div>

            <!-- COUNTDOWN -->
            <div
              class="mt-4 grid grid-cols-4 gap-2 sm:gap-3"
            >

              <div
                class="rounded-2xl border border-white/10 bg-black/20 px-2 py-4 text-center"
              >
                <p
                  class="text-2xl font-black sm:text-3xl"
                >
                  {{ countdown.days }}
                </p>

                <p
                  class="mt-1 text-[8px] font-black uppercase tracking-widest text-white/35"
                >
                  Days
                </p>
              </div>

              <div
                class="rounded-2xl border border-white/10 bg-black/20 px-2 py-4 text-center"
              >
                <p
                  class="text-2xl font-black sm:text-3xl"
                >
                  {{ countdown.hours }}
                </p>

                <p
                  class="mt-1 text-[8px] font-black uppercase tracking-widest text-white/35"
                >
                  Hours
                </p>
              </div>

              <div
                class="rounded-2xl border border-white/10 bg-black/20 px-2 py-4 text-center"
              >
                <p
                  class="text-2xl font-black sm:text-3xl"
                >
                  {{ countdown.minutes }}
                </p>

                <p
                  class="mt-1 text-[8px] font-black uppercase tracking-widest text-white/35"
                >
                  Minutes
                </p>
              </div>

              <div
                class="rounded-2xl border border-green-400/20 bg-green-500/10 px-2 py-4 text-center"
              >
                <p
                  class="text-2xl font-black text-green-300 sm:text-3xl"
                >
                  {{ countdown.seconds }}
                </p>

                <p
                  class="mt-1 text-[8px] font-black uppercase tracking-widest text-green-300/50"
                >
                  Seconds
                </p>
              </div>

            </div>

            <!-- PARTICIPANTS -->
            <div
              class="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4"
            >
              <div
                class="flex items-center gap-3"
              >
                <div
                  class="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10 text-green-400"
                >
                  <Users
                    :size="18"
                  />
                </div>

                <div>
                  <p
                    class="text-sm font-black"
                  >
                    {{ featuredEvent.participants }}+ Athletes
                  </p>

                  <p
                    class="mt-0.5 text-[10px] text-white/40"
                  >
                    Expected competitors
                  </p>
                </div>
              </div>

              <span
                class="rounded-full bg-green-500/10 px-3 py-1.5 text-[9px] font-black uppercase tracking-widest text-green-300"
              >
                Upcoming
              </span>
            </div>

          </div>

        </article>

      </div>

    </div>

    <!-- BOTTOM FADE -->
    <div
      class="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent"
    />

  </section>
</template>