<script setup lang="ts">
import { computed, ref } from 'vue'

import EventHero from '~/components/events/EventHero.vue'
import EventFilters from '~/components/events/EventFilters.vue'
import EventCard from '~/components/events/EventCard.vue'

import { events } from '~/data/events'

const search = ref('')
const status = ref('all')
const type = ref('all')
const location = ref('all')

const filteredEvents = computed(() => {
  const query = search.value.toLowerCase().trim()

  return events.filter((event) => {
    const matchesSearch =
      !query ||
      event.title.toLowerCase().includes(query) ||
      event.location.toLowerCase().includes(query) ||
      event.type.toLowerCase().includes(query) ||
      event.description?.toLowerCase().includes(query)

    const matchesStatus =
      status.value === 'all' ||
      event.status === status.value

    const matchesType =
      type.value === 'all' ||
      event.type.toLowerCase() === type.value.toLowerCase()

    const matchesLocation =
      location.value === 'all' ||
      event.location
        .toLowerCase()
        .includes(location.value.toLowerCase())

    return (
      matchesSearch &&
      matchesStatus &&
      matchesType &&
      matchesLocation
    )
  })
})
</script>

<template>
  <div class="min-h-screen bg-white">
    <EventHero />

    <section id="events-list" class="py-16 lg:py-24">
      <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        <!-- PAGE HEADING -->
        <div class="max-w-3xl">
          <div
            class="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-green-700"
          >
            <span class="h-2 w-2 rounded-full bg-green-600" />
            Competition Calendar
          </div>

          <h1
            class="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"
          >
            Events &
            <span class="text-green-700">
              Championships
            </span>
          </h1>

          <p
            class="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
          >
            Stay connected with Nigerian karate competitions,
            championships, seminars and major federation events.
          </p>
        </div>

        <!-- FILTERS -->
        <div class="mt-12">
          <EventFilters
            v-model:search="search"
            v-model:status="status"
            v-model:type="type"
            v-model:location="location"
          />
        </div>

        <!-- RESULTS BAR -->
        <div
          class="mt-8 flex flex-col gap-4 border-y border-slate-200 py-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <div class="flex items-center gap-3">
            <div
              class="flex h-11 w-11 items-center justify-center rounded-xl bg-green-700 text-sm font-black text-white shadow-lg shadow-green-700/20"
            >
              {{ filteredEvents.length }}
            </div>

            <div>
              <p class="text-sm font-black text-slate-900">
                Events Found
              </p>

              <p class="mt-0.5 text-xs text-slate-500">
                Discover competitions and federation activities
              </p>
            </div>
          </div>

          <p class="text-sm font-medium text-slate-500">
            Showing
            <span class="font-black text-slate-950">
              {{ filteredEvents.length }}
            </span>
            event{{ filteredEvents.length === 1 ? '' : 's' }}
          </p>
        </div>

        <!-- EVENTS -->
        <div
          v-if="filteredEvents.length"
          class="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          <EventCard
            v-for="event in filteredEvents"
            :key="event.id"
            :event="event"
          />
        </div>

        <!-- EMPTY STATE -->
        <div
          v-else
          class="mt-8 flex min-h-[400px] flex-col items-center justify-center rounded-[2rem] border border-dashed border-slate-300 bg-slate-50 px-6 text-center"
        >
          <div
            class="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl"
          >
            🥋
          </div>

          <h2 class="mt-6 text-2xl font-black text-slate-950">
            No events found
          </h2>

          <p class="mt-3 max-w-md text-sm leading-7 text-slate-500">
            Try changing your filters or clearing your search to discover
            upcoming Nigerian Karate Federation events.
          </p>

          <button
            type="button"
            class="mt-6 rounded-xl bg-green-700 px-6 py-3 text-sm font-black text-white transition hover:bg-green-800"
            @click="search = ''; status = 'all'; type = 'all'; location = 'all'"
          >
            Clear All Filters
          </button>
        </div>

      </div>
    </section>
  </div>
</template>