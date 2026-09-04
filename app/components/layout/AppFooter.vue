<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  Trophy,
  ChevronRight,
  ExternalLink,
  Sparkles
} from 'lucide-vue-next'

const year = new Date().getFullYear()

/*
|--------------------------------------------------------------------------
| NEXT EVENT
|--------------------------------------------------------------------------
|
| Change this date later when you connect your real event API.
|
*/

const eventDate = new Date('2026-12-15T09:00:00+01:00')

const now = ref(new Date())

let timer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  timer = setInterval(() => {
    now.value = new Date()
  }, 1000)
})

onBeforeUnmount(() => {
  if (timer) {
    clearInterval(timer)
  }
})

const countdown = computed(() => {
  const difference = eventDate.getTime() - now.value.getTime()

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24))

  const hours = Math.floor(
    (difference / (1000 * 60 * 60)) % 24
  )

  const minutes = Math.floor(
    (difference / (1000 * 60)) % 60
  )

  const seconds = Math.floor(
    (difference / 1000) % 60
  )

  return {
    days,
    hours,
    minutes,
    seconds
  }
})

const countdownItems = computed(() => [
  {
    label: 'Days',
    value: String(countdown.value.days).padStart(2, '0')
  },
  {
    label: 'Hours',
    value: String(countdown.value.hours).padStart(2, '0')
  },
  {
    label: 'Minutes',
    value: String(countdown.value.minutes).padStart(2, '0')
  },
  {
    label: 'Seconds',
    value: String(countdown.value.seconds).padStart(2, '0')
  }
])

const quickLinks = [
  { label: 'About NKF', to: '/about' },
  { label: 'National Events', to: '/events' },
  { label: 'Our Athletes', to: '/athletes' },
  { label: 'National Rankings', to: '/rankings' }
]

const mediaLinks = [
  { label: 'Photo Gallery', to: '/gallery' },
  { label: 'News & Stories', to: '/news' },
  { label: 'NKF TV', to: '/' },
  { label: 'Rules & Documents', to: '/documents' }
]

const federationLinks = [
  { label: 'Federation Leadership', to: '/about' },
  { label: 'Coaches & Officials', to: '/about' },
  { label: 'National Teams', to: '/athletes' },
  { label: 'Contact NKF', to: '/contact' }
]
</script>

<template>
  <footer
    class="relative overflow-hidden bg-[#06170f] text-white"
  >
    <!-- ========================================================= -->
    <!-- BACKGROUND -->
    <!-- ========================================================= -->

    <div class="pointer-events-none absolute inset-0 overflow-hidden">

      <!-- Main Glow -->
      <div
        class="absolute -left-64 top-0 h-[40rem] w-[40rem] rounded-full bg-emerald-500/[0.07] blur-3xl"
      />

      <div
        class="absolute -right-64 bottom-0 h-[40rem] w-[40rem] rounded-full bg-green-500/[0.06] blur-3xl"
      />

      <!-- Grid -->
      <div
        class="absolute inset-0 opacity-[0.025]"
        style="
          background-image:
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px);
          background-size: 80px 80px;
        "
      />

      <!-- Vertical decorative lines -->
      <div
        class="absolute right-[12%] top-0 hidden h-full w-px bg-white/[0.04] lg:block"
      />

      <div
        class="absolute right-[22%] top-0 hidden h-full w-px bg-white/[0.025] lg:block"
      />

    </div>

    <div class="relative">

      <!-- ===================================================== -->
      <!-- EVENT COUNTDOWN -->
      <!-- ===================================================== -->

      <section
        class="border-b border-white/[0.08]"
      >
        <div
          class="container-nkf py-12 sm:py-16 lg:py-20"
        >

          <div
            class="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.035] p-6 backdrop-blur-xl sm:p-8 lg:p-12"
          >

            <!-- Background Accent -->

            <div
              class="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/[0.08] blur-3xl"
            />

            <div
              class="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center"
            >

              <!-- EVENT INFO -->

              <div>

                <div
                  class="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-2"
                >
                  <span
                    class="relative flex h-2 w-2"
                  >
                    <span
                      class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"
                    />

                    <span
                      class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"
                    />
                  </span>

                  <span
                    class="text-[10px] font-black uppercase tracking-[0.22em] text-emerald-300"
                  >
                    Next Major Event
                  </span>
                </div>

                <h2
                  class="mt-6 max-w-2xl text-3xl font-black leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl"
                >
                  THE NEXT CHAPTER OF

                  <span
                    class="mt-1 block text-emerald-300"
                  >
                    NIGERIAN KARATE.
                  </span>
                </h2>

                <p
                  class="mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base"
                >
                  Follow Nigeria's karate journey as athletes, coaches and
                  officials prepare for another unforgettable national event.
                </p>

                <div
                  class="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-semibold text-white/50"
                >

                  <span
                    class="inline-flex items-center gap-2"
                  >
                    <CalendarDays
                      :size="16"
                      class="text-emerald-300"
                    />

                    December 15, 2026
                  </span>

                  <span
                    class="inline-flex items-center gap-2"
                  >
                    <MapPin
                      :size="16"
                      class="text-emerald-300"
                    />

                    Nigeria
                  </span>

                </div>

              </div>

              <!-- COUNTDOWN -->

              <div
                class="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:w-[440px]"
              >

                <div
                  v-for="item in countdownItems"
                  :key="item.label"
                  class="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-black/20 px-5 py-6 text-center transition duration-300 hover:-translate-y-1 hover:border-emerald-400/20 hover:bg-white/[0.04]"
                >

                  <div
                    class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent opacity-0 transition group-hover:opacity-100"
                  />

                  <div
                    class="text-3xl font-black tracking-tight text-white sm:text-4xl"
                  >
                    {{ item.value }}
                  </div>

                  <div
                    class="mt-2 text-[9px] font-black uppercase tracking-[0.18em] text-white/35"
                  >
                    {{ item.label }}
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      <!-- ===================================================== -->
      <!-- MAIN FOOTER -->
      <!-- ===================================================== -->

      <section
        class="container-nkf py-16 sm:py-20 lg:py-24"
      >

        <div
          class="grid gap-14 lg:grid-cols-[1.5fr_1fr_1fr_1fr]"
        >

          <!-- BRAND -->

          <div>

            <AppLogo dark />

            <p
              class="mt-7 max-w-sm text-sm leading-7 text-white/55"
            >
              Developing athletes, strengthening communities and building a
              stronger future for karate in Nigeria through discipline,
              excellence and national unity.
            </p>

            <!-- Federation Badge -->

            <div
              class="mt-8 inline-flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4"
            >

              <div
                class="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/[0.08] text-emerald-300"
              >
                <ShieldCheck :size="20" />
              </div>

              <div>

                <p
                  class="text-xs font-black text-white"
                >
                  Official Federation Platform
                </p>

                <p
                  class="mt-1 text-[11px] text-white/40"
                >
                  Nigerian Karate Federation
                </p>

              </div>

            </div>

            <!-- SOCIAL -->

            <div
              class="mt-8"
            >

              <p
                class="mb-4 text-[9px] font-black uppercase tracking-[0.24em] text-white/30"
              >
                Follow Nigerian Karate
              </p>

              <SocialLinks />

            </div>

          </div>

          <!-- FEDERATION -->

          <div>

            <div
              class="flex items-center gap-3"
            >
              <div
                class="h-px w-7 bg-emerald-400"
              />

              <span
                class="text-[9px] font-black uppercase tracking-[0.22em] text-emerald-300"
              >
                Federation
              </span>
            </div>

            <h3
              class="mt-4 text-xl font-black"
            >
              Explore NKF
            </h3>

            <nav
              class="mt-7 space-y-2"
            >

              <NuxtLink
                v-for="link in quickLinks"
                :key="link.to"
                :to="link.to"
                class="group flex items-center justify-between rounded-xl py-2 text-sm text-white/50 transition hover:text-white"
              >

                <span>
                  {{ link.label }}
                </span>

                <ChevronRight
                  :size="15"
                  class="translate-x-0 text-white/20 transition group-hover:translate-x-1 group-hover:text-emerald-300"
                />

              </NuxtLink>

            </nav>

          </div>

          <!-- MEDIA -->

          <div>

            <div
              class="flex items-center gap-3"
            >
              <div
                class="h-px w-7 bg-emerald-400"
              />

              <span
                class="text-[9px] font-black uppercase tracking-[0.22em] text-emerald-300"
              >
                Media
              </span>
            </div>

            <h3
              class="mt-4 text-xl font-black"
            >
              Discover
            </h3>

            <nav
              class="mt-7 space-y-2"
            >

              <NuxtLink
                v-for="link in mediaLinks"
                :key="link.to"
                :to="link.to"
                class="group flex items-center justify-between rounded-xl py-2 text-sm text-white/50 transition hover:text-white"
              >

                <span>
                  {{ link.label }}
                </span>

                <ChevronRight
                  :size="15"
                  class="text-white/20 transition group-hover:translate-x-1 group-hover:text-emerald-300"
                />

              </NuxtLink>

            </nav>

          </div>

          <!-- CONTACT -->

          <div>

            <div
              class="flex items-center gap-3"
            >
              <div
                class="h-px w-7 bg-emerald-400"
              />

              <span
                class="text-[9px] font-black uppercase tracking-[0.22em] text-emerald-300"
              >
                Contact
              </span>
            </div>

            <h3
              class="mt-4 text-xl font-black"
            >
              Get In Touch
            </h3>

            <div
              class="mt-7 space-y-5"
            >

              <div
                class="flex gap-4"
              >

                <div
                  class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-emerald-300"
                >
                  <MapPin :size="17" />
                </div>

                <div>

                  <p
                    class="text-xs font-black"
                  >
                    Head Office
                  </p>

                  <p
                    class="mt-1 text-sm leading-6 text-white/45"
                  >
                    Abuja, Federal Capital Territory, Nigeria
                  </p>

                </div>

              </div>

              <a
                href="mailto:info@nigeriankarate.org"
                class="group flex gap-4"
              >

                <div
                  class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-emerald-300 transition group-hover:border-emerald-400/30 group-hover:bg-emerald-400/[0.08]"
                >
                  <Mail :size="17" />
                </div>

                <div>

                  <p
                    class="text-xs font-black"
                  >
                    Email NKF
                  </p>

                  <p
                    class="mt-1 text-sm text-white/45 transition group-hover:text-white"
                  >
                    info@nigeriankarate.org
                  </p>

                </div>

              </a>

              <a
                href="tel:+2340000000000"
                class="group flex gap-4"
              >

                <div
                  class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-emerald-300 transition group-hover:border-emerald-400/30 group-hover:bg-emerald-400/[0.08]"
                >
                  <Phone :size="17" />
                </div>

                <div>

                  <p
                    class="text-xs font-black"
                  >
                    Call Federation
                  </p>

                  <p
                    class="mt-1 text-sm text-white/45 transition group-hover:text-white"
                  >
                    +234 000 000 0000
                  </p>

                </div>

              </a>

            </div>

          </div>

        </div>

      </section>

      <!-- ===================================================== -->
      <!-- BOTTOM -->
      <!-- ===================================================== -->

      <section
        class="border-t border-white/[0.08]"
      >

        <div
          class="container-nkf py-7"
        >

          <div
            class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
          >

            <!-- COPYRIGHT -->

            <div>

              <p
                class="text-sm text-white/45"
              >
                © {{ year }} Nigerian Karate Federation.
                All rights reserved.
              </p>

              <p
                class="mt-1 text-[11px] text-white/25"
              >
                Strength · Discipline · Excellence
              </p>

            </div>

            <!-- LEGAL -->

            <div
              class="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs"
            >

              <a
                href="#"
                class="text-white/35 transition hover:text-white"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                class="text-white/35 transition hover:text-white"
              >
                Terms of Use
              </a>

              <a
                href="#"
                class="text-white/35 transition hover:text-white"
              >
                Accessibility
              </a>

              <NuxtLink
                to="/contact"
                class="group inline-flex items-center gap-2 font-bold text-emerald-300 transition hover:text-white"
              >
                Contact NKF

                <ArrowUpRight
                  :size="14"
                  class="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />

              </NuxtLink>

            </div>

          </div>

        </div>

      </section>

    </div>
  </footer>
</template>