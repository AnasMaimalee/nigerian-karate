<script setup lang="ts">
import {
  AlertCircle,
  Bell,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Megaphone,
  Search,
  Trophy,
  X
} from 'lucide-vue-next'

import {
  computed,
  ref
} from 'vue'

useHead({
  title: 'Announcements | Nigerian Karate Federation'
})

/*
|--------------------------------------------------------------------------
| FILTER STATE
|--------------------------------------------------------------------------
*/

const search = ref('')
const activeCategory = ref('All')
const selectedAnnouncement = ref<number | null>(null)

/*
|--------------------------------------------------------------------------
| CATEGORIES
|--------------------------------------------------------------------------
*/

const categories = [
  'All',
  'Championship',
  'Registration',
  'Rankings',
  'Training',
  'Federation',
  'Important'
]

/*
|--------------------------------------------------------------------------
| ANNOUNCEMENTS
|--------------------------------------------------------------------------
|
| Demo data for now.
| Later this can come from Laravel API.
|
*/

const announcements = ref([
  {
    id: 1,
    title: 'Registration Now Open for the 2026 Nigerian National Karate Championship',
    excerpt:
      'The Nigerian Karate Federation announces the official opening of registration for athletes, coaches and state associations participating in the upcoming National Karate Championship.',
    category: 'Championship',
    date: 'September 4, 2026',
    time: '09:30 AM',
    important: true,
    isNew: true,
    read: false,
    icon: Trophy
  },

  {
    id: 2,
    title: 'Updated National Athlete Rankings Published',
    excerpt:
      'The latest Nigerian national rankings for Kata and Kumite athletes have now been officially published following recent sanctioned competitions.',
    category: 'Rankings',
    date: 'September 2, 2026',
    time: '02:15 PM',
    important: false,
    isNew: true,
    read: false,
    icon: Trophy
  },

  {
    id: 3,
    title: 'Call for State Associations to Submit Athlete Registration Documents',
    excerpt:
      'All affiliated state karate associations are requested to complete and submit outstanding athlete registration documentation before the announced deadline.',
    category: 'Registration',
    date: 'August 30, 2026',
    time: '11:00 AM',
    important: true,
    isNew: false,
    read: false,
    icon: AlertCircle
  },

  {
    id: 4,
    title: 'National Coaches Development and Technical Training Programme',
    excerpt:
      'The federation will organise a national technical development programme for coaches and technical officials as part of its athlete development strategy.',
    category: 'Training',
    date: 'August 27, 2026',
    time: '04:30 PM',
    important: false,
    isNew: false,
    read: true,
    icon: Trophy
  },

  {
    id: 5,
    title: 'Important Notice on Federation Membership Renewal',
    excerpt:
      'State associations, clubs and registered members are advised to begin their membership renewal process for the upcoming federation cycle.',
    category: 'Federation',
    date: 'August 24, 2026',
    time: '10:00 AM',
    important: true,
    isNew: false,
    read: true,
    icon: Bell
  },

  {
    id: 6,
    title: 'Technical Officials Seminar Scheduled for Abuja',
    excerpt:
      'The Nigerian Karate Federation will host a technical seminar for referees, judges and competition officials in preparation for future national competitions.',
    category: 'Training',
    date: 'August 20, 2026',
    time: '01:45 PM',
    important: false,
    isNew: false,
    read: true,
    icon: Megaphone
  },

  {
    id: 7,
    title: 'Official Championship Calendar for the Upcoming Season',
    excerpt:
      'The federation has released an updated calendar containing major championships, development programmes and technical activities.',
    category: 'Championship',
    date: 'August 16, 2026',
    time: '08:00 AM',
    important: false,
    isNew: false,
    read: true,
    icon: CalendarDays
  },

  {
    id: 8,
    title: 'Important Reminder on Athlete Eligibility Requirements',
    excerpt:
      'Athletes and state associations are reminded to ensure all registration and eligibility requirements are completed before participating in sanctioned competitions.',
    category: 'Important',
    date: 'August 12, 2026',
    time: '03:20 PM',
    important: true,
    isNew: false,
    read: true,
    icon: AlertCircle
  }
])

/*
|--------------------------------------------------------------------------
| FILTERED ANNOUNCEMENTS
|--------------------------------------------------------------------------
*/

const filteredAnnouncements = computed(() => {
  const query = search.value.trim().toLowerCase()

  return announcements.value.filter((announcement) => {
    const matchesCategory =
      activeCategory.value === 'All' ||
      announcement.category === activeCategory.value

    const matchesSearch =
      !query ||
      announcement.title.toLowerCase().includes(query) ||
      announcement.excerpt.toLowerCase().includes(query)

    return matchesCategory && matchesSearch
  })
})

/*
|--------------------------------------------------------------------------
| STATS
|--------------------------------------------------------------------------
*/

const unreadCount = computed(() => {
  return announcements.value.filter(
    announcement => !announcement.read
  ).length
})

const importantCount = computed(() => {
  return announcements.value.filter(
    announcement => announcement.important
  ).length
})

/*
|--------------------------------------------------------------------------
| FEATURED ANNOUNCEMENT
|--------------------------------------------------------------------------
*/

const featuredAnnouncement = computed(() => {
  return announcements.value.find(
    announcement => announcement.important
  )
})

/*
|--------------------------------------------------------------------------
| OPEN ANNOUNCEMENT
|--------------------------------------------------------------------------
*/

const openAnnouncement = (id: number) => {
  selectedAnnouncement.value = id

  const announcement = announcements.value.find(
    item => item.id === id
  )

  if (announcement) {
    announcement.read = true
    announcement.isNew = false
  }
}

const closeAnnouncement = () => {
  selectedAnnouncement.value = null
}

const selectedItem = computed(() => {
  return announcements.value.find(
    item => item.id === selectedAnnouncement.value
  )
})

const resetFilters = () => {
  search.value = ''
  activeCategory.value = 'All'
}
</script>

<template>
  <main class="min-h-screen bg-slate-50 text-slate-900">

    <!-- ============================================================
         HERO
    ============================================================= -->

    <section
      class="relative overflow-hidden bg-gradient-to-br from-slate-950 via-green-950 to-green-800"
    >

      <!-- BACKGROUND -->

      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.22),transparent_30%)]"
      />

      <div
        class="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-green-500/10 blur-3xl"
      />

      <div
        class="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      >

        <div
          class="max-w-3xl"
        >

          <!-- BADGE -->

          <div
            class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-green-300 backdrop-blur"
          >
            <Bell :size="14" />

            Federation Communication Centre
          </div>


          <!-- TITLE -->

          <h1
            class="mt-7 text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl"
          >
            OFFICIAL
            <span
              class="block text-green-400"
            >
              ANNOUNCEMENTS.
            </span>
          </h1>


          <!-- DESCRIPTION -->

          <p
            class="mt-6 max-w-2xl text-base leading-8 text-green-50/70 sm:text-lg"
          >
            Stay informed with the latest official announcements,
            championship updates, registration notices and important
            communications from the Nigerian Karate Federation.
          </p>


          <!-- STATS -->

          <div
            class="mt-9 flex flex-wrap gap-4"
          >

            <!-- TOTAL -->

            <div
              class="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur"
            >
              <span
                class="block text-2xl font-black text-white"
              >
                {{ announcements.length }}
              </span>

              <span
                class="mt-1 block text-[9px] font-black uppercase tracking-widest text-green-200"
              >
                Total Announcements
              </span>
            </div>


            <!-- UNREAD -->

            <div
              class="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur"
            >
              <span
                class="block text-2xl font-black text-white"
              >
                {{ unreadCount }}
              </span>

              <span
                class="mt-1 block text-[9px] font-black uppercase tracking-widest text-green-200"
              >
                New Updates
              </span>
            </div>


            <!-- IMPORTANT -->

            <div
              class="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur"
            >
              <span
                class="block text-2xl font-black text-white"
              >
                {{ importantCount }}
              </span>

              <span
                class="mt-1 block text-[9px] font-black uppercase tracking-widest text-green-200"
              >
                Important Notices
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>


    <!-- ============================================================
         CONTENT
    ============================================================= -->

    <section
      class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16"
    >

      <!-- ==========================================================
           FEATURED ANNOUNCEMENT
      =========================================================== -->

      <section
        v-if="featuredAnnouncement"
        class="relative overflow-hidden rounded-[2rem] border border-red-100 bg-white shadow-sm"
      >

        <!-- LEFT ACCENT -->

        <div
          class="absolute inset-y-0 left-0 w-1.5 bg-red-500"
        />


        <div
          class="relative grid gap-8 p-6 md:grid-cols-[auto_1fr_auto] md:items-center md:p-10"
        >

          <!-- ICON -->

          <div
            class="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-600"
          >
            <AlertCircle :size="30" />
          </div>


          <!-- CONTENT -->

          <div>

            <div
              class="flex flex-wrap items-center gap-3"
            >

              <span
                class="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1.5 text-[9px] font-black uppercase tracking-widest text-red-600"
              >
                <span
                  class="relative flex h-2 w-2"
                >
                  <span
                    class="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"
                  />

                  <span
                    class="relative inline-flex h-2 w-2 rounded-full bg-red-500"
                  />
                </span>

                Important Announcement
              </span>


              <span
                class="text-xs font-bold text-slate-400"
              >
                {{ featuredAnnouncement.date }}
              </span>

            </div>


            <h2
              class="mt-4 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl"
            >
              {{ featuredAnnouncement.title }}
            </h2>


            <p
              class="mt-3 max-w-3xl text-sm leading-7 text-slate-500"
            >
              {{ featuredAnnouncement.excerpt }}
            </p>

          </div>


          <!-- BUTTON -->

          <button
            type="button"
            class="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-red-600"
            @click="openAnnouncement(featuredAnnouncement.id)"
          >
            Read Notice

            <ChevronRight :size="16" />
          </button>

        </div>

      </section>


      <!-- ==========================================================
           SEARCH + FILTER
      =========================================================== -->

      <section
        class="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
      >

        <div
          class="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between"
        >

          <!-- SEARCH -->

          <div
            class="relative w-full lg:max-w-xl"
          >
            <Search
              :size="18"
              class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              v-model="search"
              type="text"
              placeholder="Search announcements..."
              class="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm font-medium text-slate-900 outline-none transition focus:border-green-500 focus:bg-white"
            >
          </div>


          <!-- COUNT -->

          <div
            class="flex shrink-0 items-center gap-3"
          >

            <div
              class="relative flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-700"
            >
              <Bell :size="18" />

              <span
                v-if="unreadCount"
                class="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-black text-white"
              >
                {{ unreadCount }}
              </span>
            </div>

            <div>
              <span
                class="block text-sm font-black text-slate-950"
              >
                {{ filteredAnnouncements.length }}
              </span>

              <span
                class="block text-[9px] font-black uppercase tracking-widest text-slate-400"
              >
                Announcements Found
              </span>
            </div>

          </div>

        </div>


        <!-- CATEGORIES -->

        <div
          class="mt-5 flex gap-2 overflow-x-auto pb-1"
        >

          <button
            v-for="category in categories"
            :key="category"
            type="button"
            class="whitespace-nowrap rounded-xl px-4 py-2.5 text-xs font-black transition"
            :class="
              activeCategory === category
                ? 'bg-green-700 text-white shadow-lg shadow-green-700/20'
                : 'bg-slate-50 text-slate-500 hover:bg-green-50 hover:text-green-700'
            "
            @click="activeCategory = category"
          >
            {{ category }}
          </button>

        </div>

      </section>


      <!-- ==========================================================
           ANNOUNCEMENT LIST
      =========================================================== -->

      <section
        class="mt-10"
      >

        <!-- HEADING -->

        <div
          class="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end"
        >

          <div>
            <p
              class="text-xs font-black uppercase tracking-[0.2em] text-green-700"
            >
              Latest Updates
            </p>

            <h2
              class="mt-2 text-3xl font-black tracking-tight text-slate-950"
            >
              Federation Announcements
            </h2>
          </div>


          <div
            class="flex items-center gap-2 text-sm font-bold text-slate-400"
          >
            <Clock3 :size="16" />

            Official NKF Communications
          </div>

        </div>


        <!-- GRID -->

        <div
          v-if="filteredAnnouncements.length"
          class="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >

          <article
            v-for="announcement in filteredAnnouncements"
            :key="announcement.id"
            class="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl"
            :class="
              !announcement.read
                ? 'ring-1 ring-green-100'
                : ''
            "
          >

            <!-- NEW DOT -->

            <span
              v-if="announcement.isNew"
              class="absolute right-5 top-5 flex items-center gap-1.5 rounded-full bg-red-50 px-2.5 py-1 text-[8px] font-black uppercase tracking-widest text-red-600"
            >
              <span
                class="relative flex h-1.5 w-1.5"
              >
                <span
                  class="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400"
                />

                <span
                  class="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500"
                />
              </span>

              New
            </span>


            <!-- ICON -->

            <div
              class="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-700 transition group-hover:bg-green-700 group-hover:text-white"
            >
              <component
                :is="announcement.icon"
                :size="21"
              />
            </div>


            <!-- CATEGORY -->

            <div
              class="mt-6 flex items-center justify-between gap-3"
            >

              <span
                class="rounded-lg bg-slate-100 px-3 py-1.5 text-[9px] font-black uppercase tracking-widest text-slate-500"
              >
                {{ announcement.category }}
              </span>

              <span
                v-if="announcement.important"
                class="text-[9px] font-black uppercase tracking-widest text-red-500"
              >
                Important
              </span>

            </div>


            <!-- TITLE -->

            <h3
              class="mt-5 text-xl font-black leading-snug tracking-tight text-slate-950 transition group-hover:text-green-700"
            >
              {{ announcement.title }}
            </h3>


            <!-- EXCERPT -->

            <p
              class="mt-3 line-clamp-3 text-sm leading-7 text-slate-500"
            >
              {{ announcement.excerpt }}
            </p>


            <!-- FOOTER -->

            <div
              class="mt-auto flex items-center justify-between border-t border-slate-100 pt-5"
            >

              <div
                class="flex items-center gap-2 text-xs font-bold text-slate-400"
              >
                <CalendarDays :size="14" />

                {{ announcement.date }}
              </div>


              <button
                type="button"
                class="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 text-slate-400 transition group-hover:bg-green-700 group-hover:text-white"
                @click="openAnnouncement(announcement.id)"
              >
                <ChevronRight :size="17" />
              </button>

            </div>

          </article>

        </div>


        <!-- EMPTY STATE -->

        <div
          v-else
          class="rounded-[2rem] border border-dashed border-slate-300 bg-white px-6 py-20 text-center"
        >

          <div
            class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400"
          >
            <Search :size="27" />
          </div>

          <h3
            class="mt-5 text-xl font-black text-slate-950"
          >
            No announcements found
          </h3>

          <p
            class="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500"
          >
            Try changing your search or selecting another announcement category.
          </p>


          <button
  type="button"
  class="mt-6 rounded-xl bg-green-700 px-5 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:bg-green-800"
  @click="resetFilters"
>
  Reset Filters
</button>

        </div>

      </section>

    </section>


    <!-- ============================================================
         ANNOUNCEMENT MODAL
    ============================================================= -->

    <Transition
      enter-active-class="transition duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >

      <div
        v-if="selectedItem"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
        @click.self="closeAnnouncement"
      >

        <div
          class="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] bg-white shadow-2xl"
        >

          <!-- MODAL HEADER -->

          <div
            class="flex items-start justify-between gap-5 border-b border-slate-100 p-6 sm:p-8"
          >

            <div
              class="flex items-start gap-4"
            >

              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-green-700"
              >
                <component
                  :is="selectedItem.icon"
                  :size="22"
                />
              </div>


              <div>

                <span
                  class="text-[9px] font-black uppercase tracking-[0.18em] text-green-700"
                >
                  {{ selectedItem.category }}
                </span>

                <h2
                  class="mt-2 text-xl font-black leading-snug text-slate-950 sm:text-2xl"
                >
                  {{ selectedItem.title }}
                </h2>

              </div>

            </div>


            <button
              type="button"
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500 transition hover:bg-red-50 hover:text-red-600"
              @click="closeAnnouncement"
            >
              <X :size="19" />
            </button>

          </div>


          <!-- MODAL CONTENT -->

          <div
            class="p-6 sm:p-8"
          >

            <div
              class="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-400"
            >
              <span
                class="flex items-center gap-2"
              >
                <CalendarDays :size="15" />

                {{ selectedItem.date }}
              </span>

              <span
                class="flex items-center gap-2"
              >
                <Clock3 :size="15" />

                {{ selectedItem.time }}
              </span>
            </div>


            <div
              class="mt-7 rounded-2xl bg-slate-50 p-6"
            >
              <p
                class="text-base leading-8 text-slate-600"
              >
                {{ selectedItem.excerpt }}
              </p>

              <p
                class="mt-5 text-base leading-8 text-slate-600"
              >
                The Nigerian Karate Federation remains committed to providing
                timely and accurate information to athletes, coaches, state
                associations, officials and members of the Nigerian karate
                community.
              </p>

              <p
                class="mt-5 text-base leading-8 text-slate-600"
              >
                Further updates and official instructions regarding this
                announcement will be communicated through the federation's
                official channels.
              </p>
            </div>


            <!-- ACTIONS -->

            <div
              class="mt-8 flex justify-end"
            >
              <button
                type="button"
                class="rounded-xl bg-slate-950 px-6 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:bg-green-700"
                @click="closeAnnouncement"
              >
                Close Announcement
              </button>
            </div>

          </div>

        </div>

      </div>

    </Transition>

  </main>
</template>