<script setup lang="ts">
import {
  ArrowUpRight,
  Building2,
  MapPin,
  Users
} from 'lucide-vue-next'

const locations = [
  {
    city: 'Kano',
    region: 'North West',
    description: 'Supporting athletes, clubs and karate development across Kano State.',
    image:
      'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1000&q=80'
  },
  {
    city: 'Abuja',
    region: 'Federal Capital Territory',
    description: 'A national centre for federation activities and major competitions.',
    image:
      'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&w=1000&q=80'
  },
  {
    city: 'Lagos',
    region: 'South West',
    description: 'A growing community of athletes, coaches and karate clubs.',
    image:
      'https://images.unsplash.com/photo-1544989164-31dc3c645987?auto=format&fit=crop&w=1000&q=80'
  }
]
</script>

<template>
  <section class="bg-[#f7f8f7] py-20 sm:py-24 lg:py-32">

    <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

      <!-- HEADER -->
      <div
        class="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end"
      >

        <div>

          <span
            class="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#15803d]"
          >
            <MapPin :size="14" />

            National Reach
          </span>

          <h2
            class="mt-6 text-4xl font-black leading-[0.95] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"
          >
            KARATE

            <span class="mt-2 block text-[#15803d]">
              ACROSS NIGERIA.
            </span>
          </h2>

        </div>

        <p
          class="max-w-xl text-base leading-8 text-slate-600"
        >
          Karate Federation of Nigeria (KFN) is built through communities, state associations,
          clubs and athletes working together across the country.
        </p>

      </div>

      <!-- FEATURED CITIES -->
      <div
        class="mt-14 grid gap-6 lg:grid-cols-3"
      >

        <article
          v-for="location in locations"
          :key="location.city"
          class="group relative min-h-[430px] overflow-hidden rounded-[2rem] bg-slate-950"
        >

          <img
            :src="location.image"
            :alt="location.city"
            class="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-700 group-hover:scale-110 group-hover:opacity-75"
          >

          <div
            class="absolute inset-0 bg-gradient-to-t from-[#07130e] via-[#07130e]/20 to-transparent"
          />

          <!-- TOP -->
          <div
            class="absolute left-6 right-6 top-6 flex items-center justify-between"
          >

            <span
              class="rounded-full border border-white/15 bg-black/20 px-3 py-2 text-[9px] font-black uppercase tracking-[0.16em] text-white backdrop-blur-xl"
            >
              {{ location.region }}
            </span>

            <div
              class="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#4ade80] backdrop-blur-xl"
            >
              <MapPin :size="18" />
            </div>

          </div>

          <!-- CONTENT -->
          <div
            class="absolute bottom-0 left-0 right-0 p-7"
          >

            <h3
              class="text-4xl font-black tracking-tight text-white"
            >
              {{ location.city }}
            </h3>

            <p
              class="mt-4 max-w-sm text-sm leading-7 text-white/60"
            >
              {{ location.description }}
            </p>

            <NuxtLink
              to="/athletes"
              class="mt-6 inline-flex items-center gap-2 text-xs font-black text-[#4ade80]"
            >
              Explore Athletes

              <ArrowUpRight
                :size="16"
                class="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </NuxtLink>

          </div>

        </article>

      </div>

      <!-- NATIONAL NETWORK -->
      <div
        class="mt-10 grid gap-px overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-200 md:grid-cols-3"
      >

        <div class="bg-white p-7">
          <Building2
            :size="23"
            class="text-[#15803d]"
          />

          <h3 class="mt-5 text-lg font-black text-slate-950">
            State Associations
          </h3>

          <p class="mt-3 text-sm leading-7 text-slate-600">
            Connecting karate communities through organised state structures.
          </p>
        </div>

        <div class="bg-white p-7">
          <Users
            :size="23"
            class="text-[#15803d]"
          />

          <h3 class="mt-5 text-lg font-black text-slate-950">
            Clubs & Communities
          </h3>

          <p class="mt-3 text-sm leading-7 text-slate-600">
            Supporting grassroots participation and athlete development.
          </p>
        </div>

        <div class="bg-[#0b1711] p-7 text-white">
          <MapPin
            :size="23"
            class="text-[#4ade80]"
          />

          <h3 class="mt-5 text-lg font-black">
            One National Platform
          </h3>

          <p class="mt-3 text-sm leading-7 text-white/50">
            Bringing Karate Federation of Nigeria (KFN) together through a stronger national
            federation system.
          </p>
        </div>

      </div>

    </div>

  </section>
</template>