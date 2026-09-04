<script setup lang="ts">
import {
  CalendarDays,
  ChevronDown,
  ChevronRight,
  Clock3,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Menu,
  Search,
  Trophy,
  X,
  Youtube,
  BellRing
} from 'lucide-vue-next'

import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref
} from 'vue'

/*
|--------------------------------------------------------------------------
| MOBILE MENU
|--------------------------------------------------------------------------
*/

const mobileMenuOpen = ref(false)

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

/*
|--------------------------------------------------------------------------
| NAVIGATION
|--------------------------------------------------------------------------
*/

const navigationItems = [
  {
    label: 'Home',
    to: '/'
  },
  {
    label: 'About NKF',
    to: '/about'
  },
  {
    label: 'Events',
    to: '/events',
    dropdown: true
  },
  {
    label: 'Athletes',
    to: '/athletes'
  },
  {
    label: 'Rankings',
    to: '/rankings'
  },
  {
    label: 'News Centre',
    to: '/news'
  },
  {
    label: 'Gallery',
    to: '/gallery'
  },
  {
    label: 'Documents',
    to: '/documents'
  },
  {
    label: 'Anti Doping',
    to: '/anti-doping'
  },
  {
    label: 'Contact',
    to: '/contact'
  }
]

/*
|--------------------------------------------------------------------------
| FEATURED EVENT
|--------------------------------------------------------------------------
*/

const featuredEvent = {
  title: 'Nigerian National Karate Championship',
  location: 'Abuja, Federal Capital Territory',
  venue: 'National Indoor Sports Hall',
  startDate: '2026-12-15T09:00:00'
}

/*
|--------------------------------------------------------------------------
| COUNTDOWN
|--------------------------------------------------------------------------
*/

const currentTime = ref(Date.now())

let timer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  timer = setInterval(() => {
    currentTime.value = Date.now()
  }, 1000)
})

onBeforeUnmount(() => {
  if (timer) {
    clearInterval(timer)
  }
})

const countdown = computed(() => {
  const target = new Date(
    featuredEvent.startDate
  ).getTime()

  const difference = target - currentTime.value

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
    seconds: totalSeconds % 60
  }
})

/*
|--------------------------------------------------------------------------
| FORMATTED DATE
|--------------------------------------------------------------------------
*/

const formattedDate = computed(() => {
  return new Date(
    featuredEvent.startDate
  ).toLocaleDateString(
    'en-NG',
    {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
  )
})

/*
|--------------------------------------------------------------------------
| COMPACT MOBILE COUNTDOWN
|--------------------------------------------------------------------------
|
| Mobile should not show:
|
| DAYS | HOURS | MIN | SEC
|
| Instead:
|
| 102D 08H
|
*/

const compactCountdown = computed(() => {
  if (countdown.value.expired) {
    return 'LIVE'
  }

  const days = countdown.value.days
  const hours = countdown.value.hours
  const minutes = countdown.value.minutes

  if (days > 0) {
    return `${days}D ${String(hours).padStart(2, '0')}H`
  }

  return `${String(hours).padStart(2, '0')}H ${String(minutes).padStart(2, '0')}M`
})

const announcementCount = ref(4)

</script>


<template>
  <header
    class="sticky top-0 z-50 w-full bg-white shadow-[0_10px_40px_rgba(15,23,42,0.08)]"
  >

    <!-- ============================================================
         TOP FEDERATION BAR
    ============================================================= -->

    <div
      class="hidden border-b border-white/10 bg-slate-950 text-white lg:block"
    >
      <div
        class="container-nkf flex h-10 items-center justify-between"
      >

        <!-- LEFT -->

        <!-- LEFT -->
        <div class="flex items-center gap-4 text-white">

          <!-- OFFICIAL STATUS -->
          <div
            class="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white/65"
          >
            <!-- SUBTLE STATUS DOT -->
            <span class="relative flex h-2 w-2 shrink-0">
              <span
                class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"
              />
            </span>

            <span>
              Official Nigerian Karate Federation
            </span>
          </div>

          <!-- DIVIDER -->
          <span
            class="h-4 w-px bg-white/15"
          />

          <!-- FEDERATION MOTTO -->
          <span
            class="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55"
          >
            Strength · Discipline · Excellence
          </span>

        </div>

        <!-- SOCIAL -->
        <div
          class="flex items-center gap-2"
        >
          <a
            href="#"
            class="flex h-7 w-7 items-center justify-center rounded-full text-white/50 transition hover:bg-white/10 hover:text-white"
          >
            <Facebook :size="14" />
          </a>

          <a
            href="#"
            class="flex h-7 w-7 items-center justify-center rounded-full text-white/50 transition hover:bg-white/10 hover:text-white"
          >
            <Instagram :size="14" />
          </a>

          <a
            href="#"
            class="flex h-7 w-7 items-center justify-center rounded-full text-white/50 transition hover:bg-white/10 hover:text-white"
          >
            <Youtube :size="14" />
          </a>

          <a
            href="#"
            class="flex h-7 w-7 items-center justify-center rounded-full text-white/50 transition hover:bg-white/10 hover:text-white"
          >
            <Linkedin :size="14" />
          </a>
        </div>

      </div>
    </div>


    <!-- ============================================================
         MOBILE HEADER
    ============================================================= -->

    <div
      class="border-b border-slate-200 bg-white lg:hidden"
    >
      <div
        class="flex h-[72px] items-center justify-between px-4"
      >

        <!-- LEFT SIDE -->

      <!-- LEFT SIDE -->

<div
  class="flex min-w-0 items-center gap-3"
>

  <!-- MENU -->

  <button
    type="button"
    class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-950 shadow-sm transition duration-200 hover:border-primary hover:bg-primary hover:text-white active:scale-95"
    aria-label="Open menu"
    @click="mobileMenuOpen = true"
  >
    <Menu :size="23" />
  </button>


  <!-- LOGO -->

  <img
    src="/images/hero/logo.jpeg"
    alt="Nigerian Karate Federation"
    class="h-10 w-10 shrink-0 rounded-xl object-contain"
  >


  <!-- FEDERATION NAME -->

  <div
    class="min-w-0"
  >
    <span
      class="block truncate text-[13px] font-black uppercase leading-tight tracking-tight text-slate-950"
    >
      Nigerian Karate
    </span>

    <span
      class="mt-0.5 block text-[8px] font-black uppercase tracking-[0.22em] text-primary"
    >
      Federation
    </span>
  </div>

</div>

        <!-- COMPACT COUNTDOWN -->

        <div
          v-if="!countdown.expired"
          class="ml-3 flex shrink-0 items-center gap-2 rounded-xl bg-primary px-3 py-2.5 text-white shadow-lg shadow-primary/20"
        >
          <Clock3
            :size="14"
            class="opacity-90"
          />

          <span
            class="text-[11px] font-black tabular-nums tracking-wide"
          >
            {{ compactCountdown }}
          </span>
        </div>


        <!-- LIVE -->

        <div
          v-else
          class="ml-3 flex shrink-0 items-center gap-2 rounded-xl bg-red-600 px-3 py-2.5 text-white shadow-lg"
        >
          <span
            class="relative flex h-2 w-2"
          >
            <span
              class="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-70"
            />

            <span
              class="relative inline-flex h-2 w-2 rounded-full bg-white"
            />
          </span>

          <span
            class="text-[10px] font-black uppercase tracking-wider"
          >
            Live
          </span>
        </div>

      </div>
    </div>


    <!-- ============================================================
     DESKTOP NAVIGATION
============================================================ -->

<div
  class="hidden border-b border-slate-200 bg-white lg:block"
>
  <div
    class="container-nkf flex min-h-[82px] items-center gap-6"
  >

    <!-- LOGO -->

  <NuxtLink
  to="/"
  class="group flex shrink-0 items-center"
>
  <img
    src="/images/hero/logo.jpeg"
    alt="Nigerian Karate Federation"
    class="h-16 w-auto object-contain transition duration-300 group-hover:scale-105"
  >
</NuxtLink>


    <!-- DESKTOP NAV -->

    <nav
      class="hidden min-w-0 flex-1 items-center justify-center xl:flex"
    >
      <div
        class="flex items-center justify-center gap-1"
      >
        <NuxtLink
          v-for="item in navigationItems"
          :key="item.label"
          :to="item.to"
          class="group relative flex items-center gap-1.5 px-3.5 py-4 text-[12px] font-black uppercase tracking-[0.02em] text-slate-700 transition duration-300 hover:text-primary"
          active-class="text-primary"
        >

          <span class="relative">
            {{ item.label }}

            <!-- HOVER / ACTIVE UNDERLINE -->
            <span
              class="absolute left-1/2 -bottom-2 h-[3px] w-0 -translate-x-1/2 rounded-full bg-primary transition-all duration-300 group-hover:w-8 group-[.router-link-active]:w-8"
            />
          </span>

          <ChevronDown
            v-if="item.dropdown"
            :size="14"
            class="transition duration-300 group-hover:translate-y-0.5"
          />

        </NuxtLink>
      </div>
    </nav>


    <!-- DESKTOP ACTIONS -->

    <!-- DESKTOP ACTIONS -->

<div
  class="hidden shrink-0 items-center gap-2 xl:flex"
>
  <!-- SEARCH -->

  <NuxtLink
    to="/search"
    class="flex h-11 w-11 items-center justify-center rounded-xl text-slate-600 transition duration-300 hover:bg-slate-100 hover:text-primary"
    aria-label="Search"
  >
    <Search :size="20" />
  </NuxtLink>


  <!-- ANNOUNCEMENTS -->

  <NuxtLink
  to="/announcements"
  class="group relative flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary hover:text-white hover:shadow-lg"
  aria-label="Announcements"
>
  <!-- BELL -->
  <Bell
    :size="23"
    class="transition duration-300 group-hover:rotate-12"
  />

  <!-- BLINKING INDICATOR -->
  <span
    class="absolute right-1.5 top-1.5 flex h-3 w-3"
  >
    <span
      class="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-70"
    />

    <span
      class="relative inline-flex h-3 w-3 rounded-full border-2 border-white bg-red-500 shadow-sm"
    />
  </span>

  <!-- ANNOUNCEMENT COUNT -->
  <span
    class="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-white bg-red-600 px-1.5 text-[10px] font-black text-white shadow-lg"
  >
    {{ announcementCount }}
  </span>

  <!-- TOOLTIP ABOVE -->
  <div
    class="pointer-events-none absolute bottom-full left-1/2 z-[9999] mb-4 w-max -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
  >
    <div
      class="relative rounded-2xl bg-slate-950 px-5 py-3 text-center shadow-2xl"
    >
      <div
        class="flex items-center justify-center gap-2"
      >
        <Bell
          :size="14"
          class="text-emerald-400"
        />

        <span
          class="text-[11px] font-black uppercase tracking-[0.12em] text-white"
        >
          {{ announcementCount }} New Announcements
        </span>
      </div>

      <!-- TOOLTIP ARROW -->
      <span
        class="absolute left-1/2 top-full -translate-x-1/2 border-x-[8px] border-t-[8px] border-x-transparent border-t-slate-950"
      />
    </div>
  </div>
</NuxtLink>

  <!-- CONTACT -->

  <NuxtLink
    to="/contact"
    class="ml-1 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 text-[11px] font-black uppercase tracking-wide text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-primary"
  >
    Contact NKF

    <ChevronRight :size="16" />
  </NuxtLink>
</div>


    <!-- TABLET MENU -->

    <button
      class="ml-auto flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-950 shadow-sm transition hover:border-primary hover:bg-primary hover:text-white xl:hidden"
      aria-label="Open navigation"
      @click="mobileMenuOpen = true"
    >
      <Menu :size="23" />
    </button>

  </div>


  <!-- ==========================================================
       TABLET NAVIGATION
  =========================================================== -->

  <div
    class="overflow-x-auto border-t border-slate-100 xl:hidden"
  >
    <div
      class="container-nkf flex min-w-max items-center gap-1.5 py-2.5"
    >
      <NuxtLink
        v-for="item in navigationItems"
        :key="item.label"
        :to="item.to"
        class="flex items-center gap-2 rounded-xl px-5 py-3 text-[11px] font-black uppercase tracking-[0.04em] text-slate-600 transition duration-300 hover:bg-slate-100 hover:text-primary"
        active-class="bg-green-50 text-primary"
      >
        {{ item.label }}

        <ChevronDown
          v-if="item.dropdown"
          :size="14"
        />
      </NuxtLink>
    </div>
  </div>

</div>


    <!-- ============================================================
         UPCOMING EVENT BAR
    ============================================================= -->

    <!-- ============================================================
     UPCOMING EVENT BAR
============================================================ -->

<div
  class="relative overflow-hidden bg-gradient-to-r from-primary via-primary to-emerald-700 text-white"
>

  <!-- PREMIUM BACKGROUND EFFECTS -->

  <div
    class="pointer-events-none absolute inset-0"
  >
    <div
      class="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl"
    />

    <div
      class="absolute right-[15%] top-0 h-40 w-40 rounded-full bg-emerald-200/20 blur-3xl"
    />

    <div
      class="absolute inset-0 opacity-[0.08]"
      style="
        background-image:
          linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px);
        background-size: 36px 36px;
      "
    />
  </div>


  <div
    class="relative container-nkf"
  >

    <!-- ========================================================
         DESKTOP EVENT BAR
    ========================================================= -->

    <div
      class="hidden min-h-[82px] items-center justify-between gap-8 lg:flex"
    >

      <!-- EVENT DETAILS -->

      <div
        class="flex min-w-0 items-center gap-5"
      >

        <!-- LIVE ACTIVITY -->

        <div
          class="flex shrink-0 items-center gap-1.5"
        >
          <span
            class="h-2.5 w-2.5 animate-pulse rounded-full bg-white"
          />

          <span
            class="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-200 [animation-delay:200ms]"
          />

          <span
            class="h-2.5 w-2.5 animate-pulse rounded-full bg-white/70 [animation-delay:400ms]"
          />
        </div>


        <!-- TROPHY -->

        <div
          class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-lg backdrop-blur"
        >
          <Trophy :size="21" />
        </div>


        <!-- EVENT INFORMATION -->

        <div
          class="min-w-0"
        >
          <div
            class="flex items-center gap-3"
          >
            <span
              class="text-[9px] font-black uppercase tracking-[0.22em] text-white/65"
            >
              Next Upcoming Championship
            </span>

            <span
              class="h-3 w-px bg-white/30"
            />

            <span
              class="inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider text-white"
            >
              <MapPin :size="12" />

              {{ featuredEvent.location }}
            </span>
          </div>


          <h3
            class="mt-1 truncate text-[17px] font-black tracking-tight text-white"
          >
            {{ featuredEvent.title }}
          </h3>


          <p
            class="mt-1.5 flex items-center gap-2 text-[10px] font-semibold text-white/65"
          >
            <CalendarDays :size="12" />

            {{ formattedDate }}

            <span class="text-white/30">
              •
            </span>

            {{ featuredEvent.venue }}
          </p>
        </div>

      </div>


      <!-- FULL COUNTDOWN -->

      <div
        v-if="!countdown.expired"
        class="flex shrink-0 items-center gap-3"
      >

        <div
          class="mr-1 flex items-center gap-2"
        >
          <Clock3 :size="15" />

          <span
            class="text-[9px] font-black uppercase tracking-[0.18em] text-white/70"
          >
            Countdown
          </span>
        </div>


        <div
          class="min-w-[58px] rounded-xl border border-white/15 bg-black/10 px-3 py-2 text-center backdrop-blur-sm"
        >
          <strong
            class="block text-lg font-black tabular-nums leading-none"
          >
            {{ countdown.days }}
          </strong>

          <span
            class="mt-1 block text-[7px] font-black uppercase tracking-widest text-white/60"
          >
            Days
          </span>
        </div>


        <div
          class="min-w-[58px] rounded-xl border border-white/15 bg-black/10 px-3 py-2 text-center backdrop-blur-sm"
        >
          <strong
            class="block text-lg font-black tabular-nums leading-none"
          >
            {{ countdown.hours }}
          </strong>

          <span
            class="mt-1 block text-[7px] font-black uppercase tracking-widest text-white/60"
          >
            Hours
          </span>
        </div>


        <div
          class="min-w-[58px] rounded-xl border border-white/15 bg-black/10 px-3 py-2 text-center backdrop-blur-sm"
        >
          <strong
            class="block text-lg font-black tabular-nums leading-none"
          >
            {{ countdown.minutes }}
          </strong>

          <span
            class="mt-1 block text-[7px] font-black uppercase tracking-widest text-white/60"
          >
            Min
          </span>
        </div>


        <div
          class="min-w-[58px] rounded-xl border border-white/15 bg-black/10 px-3 py-2 text-center backdrop-blur-sm"
        >
          <strong
            class="block text-lg font-black tabular-nums leading-none"
          >
            {{ countdown.seconds }}
          </strong>

          <span
            class="mt-1 block text-[7px] font-black uppercase tracking-widest text-white/60"
          >
            Sec
          </span>
        </div>


        <NuxtLink
          to="/events"
          class="ml-2 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-[9px] font-black uppercase tracking-wide text-primary shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
        >
          Event Details

          <ChevronRight :size="14" />
        </NuxtLink>

      </div>


      <!-- EVENT LIVE -->

      <div
        v-else
        class="flex items-center gap-3 rounded-xl border border-white/20 bg-black/10 px-5 py-3"
      >
        <span
          class="relative flex h-3 w-3"
        >
          <span
            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-70"
          />

          <span
            class="relative inline-flex h-3 w-3 rounded-full bg-white"
          />
        </span>

        <span
          class="text-xs font-black uppercase tracking-widest"
        >
          Championship In Progress
        </span>
      </div>

    </div>



    <!-- ========================================================
         PREMIUM MOBILE EVENT BAR
    ========================================================= -->

    <NuxtLink
      to="/events"
      class="group relative block py-4 lg:hidden"
    >

      <div
        class="flex items-center gap-3"
      >

        <!-- EVENT ICON -->

        <div
          class="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-lg backdrop-blur-sm"
        >
          <!-- GLOW -->

          <span
            class="absolute inset-0 animate-pulse rounded-2xl bg-white/10"
          />

          <Trophy
            :size="21"
            class="relative"
          />
        </div>


        <!-- EVENT CONTENT -->

        <div
          class="min-w-0 flex-1"
        >

          <!-- TOP LABEL -->

          <div
            class="flex items-center gap-2"
          >
            <span
              class="relative flex h-2 w-2"
            >
              <span
                class="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70"
              />

              <span
                class="relative inline-flex h-2 w-2 rounded-full bg-white"
              />
            </span>


            <span
              class="text-[8px] font-black uppercase tracking-[0.2em] text-white/65"
            >
              Upcoming Championship
            </span>
          </div>


          <!-- TITLE -->

          <h3
            class="mt-1 truncate text-[14px] font-black tracking-tight text-white"
          >
            {{ featuredEvent.title }}
          </h3>


          <!-- META -->

          <div
            class="mt-2 flex items-center gap-3 overflow-hidden"
          >

            <span
              class="flex min-w-0 items-center gap-1 text-[9px] font-bold text-white/70"
            >
              <MapPin
                :size="11"
                class="shrink-0"
              />

              <span class="truncate">
                {{ featuredEvent.location }}
              </span>
            </span>


            <span
              class="h-3 w-px shrink-0 bg-white/25"
            />


            <span
              class="flex shrink-0 items-center gap-1 text-[9px] font-bold text-white/70"
            >
              <CalendarDays :size="11" />

              {{ formattedDate }}
            </span>

          </div>

        </div>


        <!-- ARROW -->

        <div
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 transition duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-primary"
        >
          <ChevronRight :size="18" />
        </div>

      </div>


      <!-- MOBILE EVENT PROGRESS LINE -->

      <div
        class="mt-3 h-px w-full overflow-hidden bg-white/15"
      >
        <div
          class="h-full w-1/3 bg-white/70 transition-all duration-700 group-hover:w-full"
        />
      </div>


      <!-- MOBILE CTA -->

      <div
        class="mt-2 flex items-center justify-between"
      >
        <span
          class="text-[8px] font-bold uppercase tracking-[0.18em] text-white/45"
        >
          Nigerian Karate Federation
        </span>


        <span
          class="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-wide text-white"
        >
          View Event

          <ChevronRight :size="12" />
        </span>
      </div>

    </NuxtLink>

  </div>
</div>

    <!-- ============================================================
         MOBILE MENU OVERLAY
    ============================================================= -->

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="mobileMenuOpen"
        class="fixed inset-0 z-[100] bg-slate-950/70 backdrop-blur-sm"
        @click="closeMobileMenu"
      />
    </Transition>


    <!-- ============================================================
         MOBILE MENU PANEL
    ============================================================= -->

    <Transition
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <aside
        v-if="mobileMenuOpen"
        class="fixed right-0 top-0 z-[110] flex h-screen w-full max-w-[420px] flex-col bg-white shadow-2xl"
      >

        <!-- MENU HEADER -->

        <div
          class="flex items-center justify-between border-b border-slate-200 px-6 py-5"
        >
          <AppLogo />

          <button
            type="button"
            class="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 transition hover:bg-slate-950 hover:text-white"
            aria-label="Close menu"
            @click="closeMobileMenu"
          >
            <X :size="21" />
          </button>
        </div>


        <!-- EVENT -->

        <div
          class="bg-slate-950 p-6 text-white"
        >
          <div
            class="flex items-start gap-4"
          >
            <div
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-lg"
            >
              <Trophy :size="20" />
            </div>

            <div
              class="min-w-0"
            >
              <span
                class="text-[9px] font-black uppercase tracking-[0.2em] text-emerald-400"
              >
                Upcoming Championship
              </span>

              <h3
                class="mt-2 text-lg font-black leading-tight"
              >
                {{ featuredEvent.title }}
              </h3>

              <p
                class="mt-2 flex items-center gap-2 text-xs text-white/50"
              >
                <MapPin :size="14" />

                {{ featuredEvent.location }}
              </p>
            </div>
          </div>


          <!-- COMPACT MENU COUNTDOWN -->

          <div
            v-if="!countdown.expired"
            class="mt-5 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
          >
            <span
              class="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-white/50"
            >
              <Clock3 :size="13" />

              Starts In
            </span>

            <strong
              class="text-sm font-black tabular-nums"
            >
              {{ compactCountdown }}
            </strong>
          </div>

        </div>


        <!-- NAVIGATION -->

        <nav
          class="flex-1 overflow-y-auto px-5 py-6"
        >
          <NuxtLink
            v-for="item in navigationItems"
            :key="item.label"
            :to="item.to"
            class="group mb-2 flex items-center justify-between rounded-xl border border-transparent px-4 py-4 text-sm font-black text-slate-700 transition hover:border-slate-200 hover:bg-slate-50 hover:text-primary"
            @click="closeMobileMenu"
          >
            <span>
              {{ item.label }}
            </span>

            <ChevronRight
              :size="18"
              class="text-slate-300 transition group-hover:translate-x-1 group-hover:text-primary"
            />
          </NuxtLink>
        </nav>


        <!-- CONTACT -->

        <div
          class="border-t border-slate-200 bg-slate-50 p-5"
        >
          <NuxtLink
            to="/contact"
            class="flex items-center justify-center gap-3 rounded-2xl bg-slate-950 px-5 py-4 text-sm font-black text-white shadow-xl transition hover:bg-primary"
            @click="closeMobileMenu"
          >
            Contact Nigerian Karate Federation

            <ChevronRight :size="18" />
          </NuxtLink>
        </div>

      </aside>
    </Transition>

  </header>
</template>