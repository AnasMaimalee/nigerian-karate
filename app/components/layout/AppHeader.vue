<script setup lang="ts">
import {
  ArrowRight,
  BellRing,
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
  Youtube
} from 'lucide-vue-next'

import {
  computed,
  nextTick,
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

/*
|--------------------------------------------------------------------------
| MOBILE DROPDOWN
|--------------------------------------------------------------------------
*/

const mobileOpenDropdown =
  ref<string | null>(null)

const toggleMobileDropdown = (
  label: string
) => {
  mobileOpenDropdown.value =
    mobileOpenDropdown.value === label
      ? null
      : label
}

/*
|--------------------------------------------------------------------------
| DESKTOP DROPDOWN
|--------------------------------------------------------------------------
*/

const desktopDropdownOpen =
  ref<string | null>(null)

const toggleDesktopDropdown = (
  label: string
) => {
  desktopDropdownOpen.value =
    desktopDropdownOpen.value === label
      ? null
      : label
}

const openDesktopDropdown = (
  label: string
) => {
  desktopDropdownOpen.value =
    label
}

const closeDesktopDropdown = () => {
  desktopDropdownOpen.value = null
}

/*
|--------------------------------------------------------------------------
| CLOSE MOBILE MENU
|--------------------------------------------------------------------------
*/

const closeMobileMenu = () => {
  mobileMenuOpen.value = false

  mobileOpenDropdown.value =
    null

  desktopDropdownOpen.value =
    null
}

/*
|--------------------------------------------------------------------------
| CLOSE ALL DROPDOWNS
|--------------------------------------------------------------------------
*/

const closeAllDropdowns = () => {
  desktopDropdownOpen.value =
    null

  mobileOpenDropdown.value =
    null
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
    dropdown: false
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
    label: 'News',
    to: '/news',
    dropdown: true,

    children: [
      {
        label: 'News & Updates',
        to: '/news'
      },

      {
        label: 'Two Weeks Bulletin',
        to: '/news/two-weeks-bulletin'
      },

      {
        label: 'Complaints / Advice',
        to: '/news/complaints-advice'
      },

      {
        label: 'Nigerian Karate Journal',
        to: '/news/journal'
      },

      {
        label: 'NKRC',
        to: '/news/nkrc'
      },

      {
        label: 'NKCA',
        to: '/news/nkca'
      }
    ]
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
  title:
    'Nigerian National Karate Championship',

  location:
    'Abuja, Federal Capital Territory',

  venue:
    'National Indoor Sports Hall',

  startDate:
    '2026-12-15T09:00:00'
}

/*
|--------------------------------------------------------------------------
| COUNTDOWN
|--------------------------------------------------------------------------
*/

const currentTime =
  ref(Date.now())

let timer:
  | ReturnType<typeof setInterval>
  | null = null

const countdown = computed(() => {
  const target =
    new Date(
      featuredEvent.startDate
    ).getTime()

  const difference =
    target - currentTime.value

  if (difference <= 0) {
    return {
      expired: true,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  const totalSeconds =
    Math.floor(
      difference / 1000
    )

  return {
    expired: false,

    days:
      Math.floor(
        totalSeconds / 86400
      ),

    hours:
      Math.floor(
        (totalSeconds % 86400) / 3600
      ),

    minutes:
      Math.floor(
        (totalSeconds % 3600) / 60
      ),

    seconds:
      totalSeconds % 60
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
| COMPACT COUNTDOWN
|--------------------------------------------------------------------------
*/

const compactCountdown =
  computed(() => {
    if (
      countdown.value.expired
    ) {
      return 'LIVE'
    }

    const {
      days,
      hours,
      minutes
    } = countdown.value

    if (days > 0) {
      return `${days}D ${String(
        hours
      ).padStart(2, '0')}H`
    }

    return `${String(
      hours
    ).padStart(
      2,
      '0'
    )}H ${String(
      minutes
    ).padStart(2, '0')}M`
  })

/*
|--------------------------------------------------------------------------
| ANNOUNCEMENTS
|--------------------------------------------------------------------------
*/

const announcementCount =
  ref(4)

/*
|--------------------------------------------------------------------------
| MOBILE MENU UPCOMING EVENT
|--------------------------------------------------------------------------
*/

const showMobileUpcoming =
  ref(true)

let lastScrollTop = 0

const handleMobileMenuScroll = (
  event: Event
) => {
  const target =
    event.target as HTMLElement

  const currentScrollTop =
    target.scrollTop

  /*
  |--------------------------------------------------------------------------
  | ALWAYS SHOW AT TOP
  |--------------------------------------------------------------------------
  */

  if (
    currentScrollTop <= 10
  ) {
    showMobileUpcoming.value =
      true

    lastScrollTop =
      currentScrollTop

    return
  }

  /*
  |--------------------------------------------------------------------------
  | SCROLL DOWN
  |--------------------------------------------------------------------------
  */

  if (
    currentScrollTop >
    lastScrollTop + 5
  ) {
    showMobileUpcoming.value =
      false
  }

  /*
  |--------------------------------------------------------------------------
  | SCROLL UP
  |--------------------------------------------------------------------------
  */

  else if (
    currentScrollTop <
    lastScrollTop - 5
  ) {
    showMobileUpcoming.value =
      true
  }

  lastScrollTop =
    currentScrollTop
}

/*
|--------------------------------------------------------------------------
| MOBILE EVENT BAR SCROLL
|--------------------------------------------------------------------------
*/

const showMobileEventBar =
  ref(true)

let lastPageScrollY = 0

let scrollTicking = false

const handlePageScroll = () => {
  if (scrollTicking) {
    return
  }

  scrollTicking = true

  window.requestAnimationFrame(() => {
    const currentScrollY =
      window.scrollY

    /*
    |--------------------------------------------------------------------------
    | ALWAYS SHOW AT TOP
    |--------------------------------------------------------------------------
    */

    if (
      currentScrollY <= 20
    ) {
      showMobileEventBar.value =
        true
    }

    /*
    |--------------------------------------------------------------------------
    | SCROLL DOWN
    |--------------------------------------------------------------------------
    */

    else if (
      currentScrollY >
      lastPageScrollY + 8
    ) {
      showMobileEventBar.value =
        false
    }

    /*
    |--------------------------------------------------------------------------
    | SCROLL UP
    |--------------------------------------------------------------------------
    */

    else if (
      currentScrollY <
      lastPageScrollY - 8
    ) {
      showMobileEventBar.value =
        true
    }

    lastPageScrollY =
      currentScrollY

    scrollTicking = false
  })
}

/*
|--------------------------------------------------------------------------
| OUTSIDE CLICK
|--------------------------------------------------------------------------
*/

const handleDocumentClick = (
  event: MouseEvent
) => {
  const target =
    event.target as HTMLElement

  if (
    !target.closest(
      '[data-desktop-dropdown]'
    )
  ) {
    closeDesktopDropdown()
  }
}

/*
|--------------------------------------------------------------------------
| ESCAPE KEY
|--------------------------------------------------------------------------
*/

const handleEscape = (
  event: KeyboardEvent
) => {
  if (
    event.key === 'Escape'
  ) {
    closeMobileMenu()

    closeDesktopDropdown()
  }
}

/*
|--------------------------------------------------------------------------
| BODY SCROLL
|--------------------------------------------------------------------------
*/

const updateBodyScroll = () => {
  if (
    typeof document === 'undefined'
  ) {
    return
  }

  document.body.style.overflow =
    mobileMenuOpen.value
      ? 'hidden'
      : ''
}

/*
|--------------------------------------------------------------------------
| WATCH MOBILE MENU
|--------------------------------------------------------------------------
*/

const openMobileMenu = async () => {
  mobileMenuOpen.value = true

  showMobileUpcoming.value =
    true

  lastScrollTop = 0

  await nextTick()

  updateBodyScroll()
}

/*
|--------------------------------------------------------------------------
| LIFECYCLE
|--------------------------------------------------------------------------
*/

onMounted(() => {
  /*
  |--------------------------------------------------------------------------
  | COUNTDOWN
  |--------------------------------------------------------------------------
  */

  timer = setInterval(() => {
    currentTime.value =
      Date.now()
  }, 1000)

  /*
  |--------------------------------------------------------------------------
  | INITIAL SCROLL
  |--------------------------------------------------------------------------
  */

  lastPageScrollY =
    window.scrollY

  /*
  |--------------------------------------------------------------------------
  | PAGE SCROLL
  |--------------------------------------------------------------------------
  */

  window.addEventListener(
    'scroll',
    handlePageScroll,
    {
      passive: true
    }
  )

  /*
  |--------------------------------------------------------------------------
  | OUTSIDE CLICK
  |--------------------------------------------------------------------------
  */

  document.addEventListener(
    'click',
    handleDocumentClick
  )

  /*
  |--------------------------------------------------------------------------
  | ESCAPE
  |--------------------------------------------------------------------------
  */

  window.addEventListener(
    'keydown',
    handleEscape
  )
})

onBeforeUnmount(() => {
  /*
  |--------------------------------------------------------------------------
  | TIMER
  |--------------------------------------------------------------------------
  */

  if (timer) {
    clearInterval(timer)

    timer = null
  }

  /*
  |--------------------------------------------------------------------------
  | PAGE SCROLL
  |--------------------------------------------------------------------------
  */

  window.removeEventListener(
    'scroll',
    handlePageScroll
  )

  /*
  |--------------------------------------------------------------------------
  | OUTSIDE CLICK
  |--------------------------------------------------------------------------
  */

  document.removeEventListener(
    'click',
    handleDocumentClick
  )

  /*
  |--------------------------------------------------------------------------
  | ESCAPE
  |--------------------------------------------------------------------------
  */

  window.removeEventListener(
    'keydown',
    handleEscape
  )

  /*
  |--------------------------------------------------------------------------
  | BODY SCROLL RESET
  |--------------------------------------------------------------------------
  */

  if (
    typeof document !==
    'undefined'
  ) {
    document.body.style.overflow =
      ''
  }
})
</script>


<template>

  <header
    class="sticky top-0 z-50 w-full bg-white shadow-[0_10px_40px_rgba(15,23,42,0.08)]"
  >


    <!-- ============================================================
         TOP FEDERATION BAR
    ============================================================ -->

    <div
      class="hidden border-b border-white/10 bg-slate-950 text-white lg:block"
    >

      <div
        class="container-nkf flex h-10 items-center justify-between"
      >


        <!-- ========================================================
             LEFT
        ========================================================= -->

        <div
          class="flex items-center gap-4"
        >

          <!-- OFFICIAL STATUS -->

          <div
            class="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white/65"
          >

            <span
              class="relative flex h-2 w-2 shrink-0"
            >
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


          <!-- MOTTO -->

          <span
            class="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55"
          >
            Strength · Discipline · Excellence
          </span>

        </div>



        <!-- ========================================================
             SOCIAL
        ========================================================= -->

        <div
          class="flex items-center gap-2"
        >

          <a
            href="#"
            class="flex h-7 w-7 items-center justify-center rounded-full text-white/50 transition duration-300 hover:bg-white/10 hover:text-white"
          >
            <Facebook
              :size="14"
            />
          </a>


          <a
            href="#"
            class="flex h-7 w-7 items-center justify-center rounded-full text-white/50 transition duration-300 hover:bg-white/10 hover:text-white"
          >
            <Instagram
              :size="14"
            />
          </a>


          <a
            href="#"
            class="flex h-7 w-7 items-center justify-center rounded-full text-white/50 transition duration-300 hover:bg-white/10 hover:text-white"
          >
            <Youtube
              :size="14"
            />
          </a>


          <a
            href="#"
            class="flex h-7 w-7 items-center justify-center rounded-full text-white/50 transition duration-300 hover:bg-white/10 hover:text-white"
          >
            <Linkedin
              :size="14"
            />
          </a>

        </div>

      </div>

    </div>



    <!-- ============================================================
         MOBILE HEADER
         IMPORTANT: THIS MUST COME BEFORE EVENT BAR
    ============================================================ -->

    <div
      class="relative z-[70] border-b border-slate-200 bg-white lg:hidden"
    >

      <div
        class="flex h-[72px] items-center justify-between gap-3 px-4"
      >


        <!-- ======================================================
             LEFT
        ======================================================= -->

        <div
          class="flex min-w-0 flex-1 items-center gap-3"
        >


          <!-- MENU -->

          <button
            type="button"
            class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-950 shadow-sm transition duration-200 hover:border-primary hover:bg-primary hover:text-white active:scale-95"
            aria-label="Open navigation"
            @click="openMobileMenu"
          >
            <Menu
              :size="23"
            />
          </button>



          <!-- LOGO -->

          <NuxtLink
            to="/"
            class="flex shrink-0 items-center"
          >

            <img
              src="/images/hero/logo.jpeg"
              alt="Nigerian Karate Federation"
              class="h-10 w-10 rounded-xl object-contain"
            />

          </NuxtLink>



          <!-- NAME -->

          <NuxtLink
            to="/"
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

          </NuxtLink>

        </div>



        <!-- ======================================================
             COUNTDOWN
        ======================================================= -->

        <div
          v-if="!countdown.expired"
          class="flex shrink-0 items-center gap-2 rounded-xl bg-primary px-3 py-2.5 text-white shadow-lg shadow-primary/20"
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
          class="flex shrink-0 items-center gap-2 rounded-xl bg-red-600 px-3 py-2.5 text-white shadow-lg"
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
         DESKTOP HEADER
    ============================================================ -->

    <div
      class="hidden border-b border-slate-200 bg-white lg:block"
    >

      <div
        class="container-nkf flex min-h-[82px] items-center gap-6"
      >


        <!-- ======================================================
             LOGO
        ======================================================= -->

        <NuxtLink
          to="/"
          class="group flex shrink-0 items-center"
        >

          <img
            src="/images/hero/logo.jpeg"
            alt="Nigerian Karate Federation"
            class="h-16 w-auto object-contain transition duration-300 group-hover:scale-105"
          />

        </NuxtLink>



        <!-- ======================================================
             DESKTOP NAVIGATION
        ======================================================= -->

        <nav
          class="hidden min-w-0 flex-1 items-center justify-center xl:flex"
        >

          <div
            class="flex items-center justify-center gap-1"
          >


            <template
              v-for="item in navigationItems"
              :key="item.label"
            >


              <!-- ==================================================
                   NORMAL NAV
              =================================================== -->

              <NuxtLink
                v-if="!item.dropdown"
                :to="item.to"
                class="group relative flex items-center gap-1.5 px-3.5 py-4 text-[12px] font-black uppercase tracking-[0.02em] text-slate-700 transition duration-300 hover:text-primary"
                active-class="text-primary"
                @click="closeAllDropdowns"
              >

                <span
                  class="relative"
                >

                  {{ item.label }}


                  <span
                    class="absolute left-1/2 -bottom-2 h-[3px] w-0 -translate-x-1/2 rounded-full bg-primary transition-all duration-300 group-hover:w-8"
                  />

                </span>

              </NuxtLink>



              <!-- ==================================================
                   DESKTOP DROPDOWN
              =================================================== -->

              <div
                v-else
                data-desktop-dropdown
                class="relative"
                @mouseenter="openDesktopDropdown(item.label)"
                @mouseleave="closeDesktopDropdown"
              >


                <!-- DROPDOWN BUTTON -->

                <button
                  type="button"
                  class="relative flex items-center gap-1.5 px-3.5 py-4 text-[12px] font-black uppercase tracking-[0.02em] transition duration-300"
                  :class="
                    desktopDropdownOpen === item.label
                      ? 'text-primary'
                      : 'text-slate-700 hover:text-primary'
                  "
                  @click.stop="toggleDesktopDropdown(item.label)"
                >

                  <span
                    class="relative"
                  >

                    {{ item.label }}


                    <span
                      class="absolute left-1/2 -bottom-2 h-[3px] -translate-x-1/2 rounded-full bg-primary transition-all duration-300"
                      :class="
                        desktopDropdownOpen === item.label
                          ? 'w-8'
                          : 'w-0'
                      "
                    />

                  </span>


                  <ChevronDown
                    :size="14"
                    class="transition duration-300"
                    :class="
                      desktopDropdownOpen === item.label
                        ? 'rotate-180'
                        : ''
                    "
                  />

                </button>



                <!-- DROPDOWN -->

                <Transition
                  enter-active-class="transition-all duration-200 ease-out"
                  enter-from-class="translate-y-2 opacity-0"
                  enter-to-class="translate-y-0 opacity-100"
                  leave-active-class="transition-all duration-150 ease-in"
                  leave-from-class="translate-y-0 opacity-100"
                  leave-to-class="translate-y-2 opacity-0"
                >

                  <div
                    v-if="
                      desktopDropdownOpen === item.label
                    "
                    class="absolute left-1/2 top-full z-[9999] w-[300px] -translate-x-1/2 pt-2"
                  >

                    <div
                      class="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-950/20"
                    >


                      <!-- HEADER -->

                      <div
                        class="border-b border-slate-100 px-4 py-3"
                      >

                        <span
                          class="text-[9px] font-black uppercase tracking-[0.18em] text-primary"
                        >
                          {{ item.label }}
                        </span>


                        <p
                          class="mt-1 text-[10px] font-medium text-slate-400"
                        >
                          Latest information & federation resources
                        </p>

                      </div>



                      <!-- LINKS -->

                      <div
                        class="py-2"
                      >

                        <NuxtLink
                          v-for="child in item.children"
                          :key="child.label"
                          :to="child.to"
                          class="group/item flex items-center justify-between gap-3 rounded-xl px-4 py-3 transition duration-200 hover:bg-primary/5"
                          @click="closeDesktopDropdown"
                        >

                          <span
                            class="flex min-w-0 items-center gap-3"
                          >

                            <span
                              class="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50 transition duration-200 group-hover/item:bg-primary"
                            />


                            <span
                              class="truncate text-[11px] font-black text-slate-700 transition duration-200 group-hover/item:text-primary"
                            >
                              {{ child.label }}
                            </span>

                          </span>


                          <ChevronRight
                            :size="14"
                            class="shrink-0 text-slate-300 transition duration-200 group-hover/item:translate-x-1 group-hover/item:text-primary"
                          />

                        </NuxtLink>

                      </div>



                      <!-- FOOTER -->

                      <NuxtLink
                        :to="item.to"
                        class="mx-2 mb-2 flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-[9px] font-black uppercase tracking-[0.12em] text-white transition duration-300 hover:bg-primary"
                        @click="closeDesktopDropdown"
                      >

                        View All {{ item.label }}

                        <ArrowRight
                          :size="13"
                        />

                      </NuxtLink>

                    </div>

                  </div>

                </Transition>

              </div>

            </template>

          </div>

        </nav>



        <!-- ======================================================
             DESKTOP ACTIONS
        ======================================================= -->

        <div
          class="hidden shrink-0 items-center gap-2 xl:flex"
        >


          <!-- SEARCH -->

          <NuxtLink
            to="/search"
            class="flex h-11 w-11 items-center justify-center rounded-xl text-slate-600 transition duration-300 hover:bg-slate-100 hover:text-primary"
          >

            <Search
              :size="20"
            />

          </NuxtLink>



          <!-- ANNOUNCEMENTS -->

          <NuxtLink
            to="/announcements"
            class="group relative flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary hover:text-white hover:shadow-lg"
          >

            <BellRing
              :size="21"
              class="transition duration-300 group-hover:rotate-12"
            />


            <span
              class="absolute right-1.5 top-1.5 flex h-3 w-3"
            >

              <span
                class="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-70"
              />

              <span
                class="relative inline-flex h-3 w-3 rounded-full border-2 border-white bg-red-500"
              />

            </span>


            <span
              class="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-white bg-red-600 px-1.5 text-[10px] font-black text-white shadow-lg"
            >
              {{ announcementCount }}
            </span>

          </NuxtLink>



          <!-- CONTACT -->

          <NuxtLink
            to="/contact"
            class="ml-1 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 text-[11px] font-black uppercase tracking-wide text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-primary"
          >

            Contact NKF

            <ChevronRight
              :size="16"
            />

          </NuxtLink>

        </div>



        <!-- ======================================================
             TABLET MENU BUTTON
        ======================================================= -->

        <button
          type="button"
          class="ml-auto flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-950 shadow-sm transition duration-300 hover:border-primary hover:bg-primary hover:text-white xl:hidden"
          @click="openMobileMenu"
        >

          <Menu
            :size="23"
          />

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

          <template
            v-for="item in navigationItems"
            :key="item.label"
          >


            <!-- NORMAL -->

            <NuxtLink
              v-if="!item.dropdown"
              :to="item.to"
              class="flex items-center gap-2 rounded-xl px-5 py-3 text-[11px] font-black uppercase tracking-[0.04em] text-slate-600 transition duration-300 hover:bg-slate-100 hover:text-primary"
              active-class="bg-green-50 text-primary"
            >
              {{ item.label }}
            </NuxtLink>



            <!-- DROPDOWN -->

            <div
              v-else
              class="relative"
              data-desktop-dropdown
            >

              <button
                type="button"
                class="flex items-center gap-2 rounded-xl px-5 py-3 text-[11px] font-black uppercase tracking-[0.04em] text-slate-600 transition duration-300 hover:bg-slate-100 hover:text-primary"
                @click.stop="toggleDesktopDropdown(item.label)"
              >

                {{ item.label }}

                <ChevronDown
                  :size="14"
                  :class="
                    desktopDropdownOpen === item.label
                      ? 'rotate-180'
                      : ''
                  "
                />

              </button>


              <Transition
                enter-active-class="transition-all duration-200"
                enter-from-class="translate-y-2 opacity-0"
                enter-to-class="translate-y-0 opacity-100"
                leave-active-class="transition-all duration-150"
                leave-from-class="translate-y-0 opacity-100"
                leave-to-class="translate-y-2 opacity-0"
              >

                <div
                  v-if="
                    desktopDropdownOpen === item.label
                  "
                  class="absolute left-0 top-full z-[9999] mt-2 w-[280px]"
                >

                  <div
                    class="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl"
                  >

                    <NuxtLink
                      v-for="child in item.children"
                      :key="child.label"
                      :to="child.to"
                      class="flex items-center justify-between rounded-xl px-4 py-3 text-[11px] font-black text-slate-700 transition hover:bg-primary/5 hover:text-primary"
                      @click="closeDesktopDropdown"
                    >

                      {{ child.label }}

                      <ChevronRight
                        :size="14"
                      />

                    </NuxtLink>

                  </div>

                </div>

              </Transition>

            </div>

          </template>

        </div>

      </div>

    </div>



    <!-- ============================================================
         UPCOMING EVENT BAR
    ============================================================ -->

    <Transition
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0 -translate-y-full"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-300"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-full"
    >

      <div
        v-show="showMobileEventBar"
        class="relative overflow-hidden bg-gradient-to-r from-primary via-primary to-emerald-700 text-white"
      >


        <!-- BACKGROUND -->

        <div
          class="pointer-events-none absolute inset-0"
        >

          <div
            class="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl"
          />

          <div
            class="absolute right-[15%] top-0 h-40 w-40 rounded-full bg-emerald-200/20 blur-3xl"
          />

        </div>



        <div
          class="relative container-nkf"
        >


          <!-- ======================================================
               DESKTOP EVENT BAR
          ======================================================= -->

          <div
            class="hidden min-h-[82px] items-center justify-between gap-8 lg:flex"
          >

            <!-- EVENT DETAILS -->

            <div
              class="flex min-w-0 items-center gap-5"
            >

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


              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-lg backdrop-blur"
              >
                <Trophy
                  :size="21"
                />
              </div>


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

                    <MapPin
                      :size="12"
                    />

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

                  <CalendarDays
                    :size="12"
                  />

                  {{ formattedDate }}

                  <span
                    class="text-white/30"
                  >
                    •
                  </span>

                  {{ featuredEvent.venue }}

                </p>

              </div>

            </div>



            <!-- COUNTDOWN -->

            <div
              v-if="!countdown.expired"
              class="flex shrink-0 items-center gap-3"
            >

              <div
                class="mr-1 flex items-center gap-2"
              >

                <Clock3
                  :size="15"
                />

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
                class="ml-2 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-[9px] font-black uppercase tracking-wide text-primary shadow-lg transition duration-300 hover:-translate-y-0.5"
              >

                Event Details

                <ChevronRight
                  :size="14"
                />

              </NuxtLink>

            </div>


            <!-- LIVE -->

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



          <!-- ======================================================
               MOBILE EVENT BAR
          ======================================================= -->

          <NuxtLink
            to="/events"
            class="group relative block py-4 lg:hidden"
          >

            <div
              class="flex items-center gap-3"
            >


              <!-- ICON -->

              <div
                class="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-lg backdrop-blur-sm"
              >

                <span
                  class="absolute inset-0 animate-pulse rounded-2xl bg-white/10"
                />

                <Trophy
                  :size="21"
                  class="relative"
                />

              </div>



              <!-- CONTENT -->

              <div
                class="min-w-0 flex-1"
              >

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


                <h3
                  class="mt-1 truncate text-[14px] font-black tracking-tight text-white"
                >
                  {{ featuredEvent.title }}
                </h3>


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

                    <span
                      class="truncate"
                    >
                      {{ featuredEvent.location }}
                    </span>

                  </span>


                  <span
                    class="h-3 w-px shrink-0 bg-white/25"
                  />


                  <span
                    class="flex shrink-0 items-center gap-1 text-[9px] font-bold text-white/70"
                  >

                    <CalendarDays
                      :size="11"
                    />

                    {{ formattedDate }}

                  </span>

                </div>

              </div>



              <!-- ARROW -->

              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 transition duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-primary"
              >

                <ChevronRight
                  :size="18"
                />

              </div>

            </div>



            <!-- LINE -->

            <div
              class="mt-3 h-px w-full overflow-hidden bg-white/15"
            >

              <div
                class="h-full w-1/3 bg-white/70 transition-all duration-700 group-hover:w-full"
              />

            </div>



            <!-- CTA -->

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

                <ChevronRight
                  :size="12"
                />

              </span>

            </div>

          </NuxtLink>

        </div>

      </div>

    </Transition>



    <!-- ============================================================
         MOBILE OVERLAY
    ============================================================ -->

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
    ============================================================ -->

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
        class="fixed right-0 top-0 z-[110] flex h-[100dvh] w-full max-w-[420px] flex-col overflow-hidden bg-white shadow-2xl"
      >


        <!-- ========================================================
             MOBILE MENU HEADER
        ========================================================= -->

        <div
          class="relative z-20 flex shrink-0 items-center justify-between border-b border-slate-200 bg-white px-6 py-5"
        >

          <div
            class="flex items-center gap-3"
          >

            <img
              src="/images/hero/logo.jpeg"
              alt="Nigerian Karate Federation"
              class="h-11 w-11 rounded-xl object-contain"
            />


            <div>

              <h2
                class="text-sm font-black uppercase tracking-tight text-slate-950"
              >
                Nigerian Karate
              </h2>


              <p
                class="mt-0.5 text-[8px] font-black uppercase tracking-[0.22em] text-primary"
              >
                Federation
              </p>

            </div>

          </div>



          <button
            type="button"
            class="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-950 shadow-sm transition duration-300 hover:bg-slate-950 hover:text-white active:scale-95"
            @click="closeMobileMenu"
          >

            <X
              :size="21"
            />

          </button>

        </div>



        <!-- ========================================================
             MOBILE UPCOMING EVENT
        ========================================================= -->

        <Transition
          enter-active-class="transition-all duration-500 ease-out"
          enter-from-class="opacity-0 -translate-y-6"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-400 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-full"
        >

          <div
            v-if="showMobileUpcoming"
            class="relative shrink-0 overflow-hidden bg-slate-950 text-white"
          >

            <div
              class="pointer-events-none absolute inset-0 overflow-hidden"
            >

              <div
                class="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/30 blur-3xl"
              />

              <div
                class="absolute -bottom-16 left-1/3 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl"
              />

            </div>



            <div
              class="relative p-6"
            >

              <div
                class="flex items-start gap-4"
              >

                <div
                  class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-primary text-white shadow-lg shadow-primary/20"
                >

                  <Trophy
                    :size="21"
                  />

                </div>



                <div
                  class="min-w-0 flex-1"
                >

                  <div
                    class="flex items-center gap-2"
                  >

                    <span
                      class="relative flex h-2 w-2"
                    >

                      <span
                        class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70"
                      />

                      <span
                        class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"
                      />

                    </span>


                    <span
                      class="text-[9px] font-black uppercase tracking-[0.2em] text-emerald-400"
                    >
                      Upcoming Championship
                    </span>

                  </div>


                  <h3
                    class="mt-2 text-lg font-black leading-tight tracking-tight text-white"
                  >
                    {{ featuredEvent.title }}
                  </h3>


                  <p
                    class="mt-3 flex items-center gap-2 text-xs font-medium text-white/55"
                  >

                    <MapPin
                      :size="14"
                      class="shrink-0 text-primary"
                    />

                    <span
                      class="truncate"
                    >
                      {{ featuredEvent.location }}
                    </span>

                  </p>

                </div>

              </div>



              <!-- COUNTDOWN -->

              <div
                v-if="!countdown.expired"
                class="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur"
              >

                <span
                  class="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-white/50"
                >

                  <Clock3
                    :size="14"
                    class="text-emerald-400"
                  />

                  Starts In

                </span>


                <strong
                  class="rounded-lg bg-black/20 px-3 py-1.5 text-sm font-black tabular-nums text-white"
                >
                  {{ compactCountdown }}
                </strong>

              </div>



              <!-- EVENT LINK -->

              <NuxtLink
                to="/events"
                class="group mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs font-black uppercase tracking-wide text-white transition duration-300 hover:bg-white hover:text-slate-950"
                @click="closeMobileMenu"
              >

                <span>
                  View Championship
                </span>


                <ChevronRight
                  :size="17"
                  class="transition duration-300 group-hover:translate-x-1"
                />

              </NuxtLink>

            </div>

          </div>

        </Transition>



        <!-- ========================================================
             MOBILE NAVIGATION
        ========================================================= -->

        <nav
          class="flex-1 overflow-y-auto overscroll-contain px-5 py-6"
          @scroll.passive="handleMobileMenuScroll"
        >


          <!-- LABEL -->

          <div
            class="mb-4 flex items-center gap-3 px-3"
          >

            <span
              class="shrink-0 text-[9px] font-black uppercase tracking-[0.22em] text-slate-400"
            >
              Federation Navigation
            </span>


            <span
              class="h-px flex-1 bg-slate-100"
            />

          </div>



          <!-- ======================================================
               NAV ITEMS
          ======================================================= -->

          <template
            v-for="item in navigationItems"
            :key="item.label"
          >


            <!-- NORMAL -->

            <NuxtLink
              v-if="!item.dropdown"
              :to="item.to"
              class="group mb-2 flex items-center justify-between rounded-xl border border-transparent px-4 py-4 text-sm font-black text-slate-700 transition duration-300 hover:border-slate-200 hover:bg-slate-50 hover:text-primary"
              active-class="border-primary/10 bg-primary/5 text-primary"
              @click="closeMobileMenu"
            >

              <span>
                {{ item.label }}
              </span>


              <ChevronRight
                :size="18"
                class="text-slate-300 transition duration-300 group-hover:translate-x-1 group-hover:text-primary"
              />

            </NuxtLink>



            <!-- MOBILE DROPDOWN -->

            <div
              v-else
              class="mb-2 overflow-hidden rounded-2xl border transition duration-300"
              :class="
                mobileOpenDropdown === item.label
                  ? 'border-primary/30 bg-primary/[0.03] shadow-lg shadow-primary/5'
                  : 'border-slate-200 bg-slate-50'
              "
            >


              <!-- BUTTON -->

              <button
                type="button"
                class="flex w-full items-center justify-between px-4 py-4 text-left transition duration-300"
                @click="toggleMobileDropdown(item.label)"
              >

                <span
                  class="flex items-center gap-3 text-sm font-black text-slate-800"
                >

                  <span
                    class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition duration-300"
                    :class="
                      mobileOpenDropdown === item.label
                        ? 'bg-primary text-white'
                        : 'bg-white text-primary shadow-sm'
                    "
                  >

                    <span
                      class="h-2 w-2 rounded-full"
                      :class="
                        mobileOpenDropdown === item.label
                          ? 'bg-white'
                          : 'bg-primary'
                      "
                    />

                  </span>


                  {{ item.label }}

                </span>


                <ChevronDown
                  :size="18"
                  class="text-primary transition duration-300"
                  :class="
                    mobileOpenDropdown === item.label
                      ? 'rotate-180'
                      : ''
                  "
                />

              </button>



              <!-- CHILDREN -->

              <Transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="max-h-0 opacity-0"
                enter-to-class="max-h-[600px] opacity-100"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="max-h-[600px] opacity-100"
                leave-to-class="max-h-0 opacity-0"
              >

                <div
                  v-if="
                    mobileOpenDropdown === item.label
                  "
                  class="overflow-hidden border-t border-primary/10 bg-white"
                >

                  <div
                    class="p-2"
                  >

                    <NuxtLink
                      v-for="child in item.children"
                      :key="child.label"
                      :to="child.to"
                      class="group flex items-center justify-between rounded-xl px-4 py-3.5 text-[11px] font-black text-slate-600 transition duration-200 hover:bg-primary/5 hover:text-primary"
                      @click="closeMobileMenu"
                    >

                      <span
                        class="flex items-center gap-3"
                      >

                        <span
                          class="h-1.5 w-1.5 rounded-full bg-primary/50 transition group-hover:bg-primary"
                        />

                        {{ child.label }}

                      </span>


                      <ChevronRight
                        :size="15"
                        class="text-slate-300 transition duration-200 group-hover:translate-x-1 group-hover:text-primary"
                      />

                    </NuxtLink>


                    <!-- VIEW ALL -->

                    <NuxtLink
                      :to="item.to"
                      class="mt-2 flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-[9px] font-black uppercase tracking-[0.12em] text-white transition hover:bg-primary"
                      @click="closeMobileMenu"
                    >

                      View All {{ item.label }}

                      <ArrowRight
                        :size="13"
                      />

                    </NuxtLink>

                  </div>

                </div>

              </Transition>

            </div>

          </template>



          <!-- EXTRA SPACE -->

          <div
            class="h-8"
          />

        </nav>



        <!-- ========================================================
             CONTACT
        ========================================================= -->

        <div
          class="shrink-0 border-t border-slate-200 bg-slate-50 p-5"
        >

          <NuxtLink
            to="/contact"
            class="group flex items-center justify-center gap-3 rounded-2xl bg-slate-950 px-5 py-4 text-sm font-black text-white shadow-xl transition duration-300 hover:bg-primary active:scale-[0.98]"
            @click="closeMobileMenu"
          >

            Contact Nigerian Karate Federation


            <ChevronRight
              :size="18"
              class="transition duration-300 group-hover:translate-x-1"
            />

          </NuxtLink>

        </div>

      </aside>

    </Transition>

  </header>

</template>