<script setup lang="ts">
import {
  ArrowUpRight,
  ShieldCheck,
  UsersRound
} from 'lucide-vue-next'

const leaders = [
  {
    name: 'Federation President',
    role: 'President',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'General Secretary',
    role: 'General Secretary',
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Technical Director',
    role: 'Technical Director',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80'
  }
]
</script>

<template>
  <section class="relative overflow-hidden bg-[#08130d] py-20 text-white sm:py-24 lg:py-32">

    <!-- BACKGROUND -->
    <div class="pointer-events-none absolute inset-0">
      <div
        class="absolute -left-40 bottom-0 h-[35rem] w-[35rem] rounded-full bg-[#16a34a]/10 blur-3xl"
      />

      <div
        class="absolute right-0 top-0 h-full w-[35%] border-l border-white/5"
      />

      <div
        class="absolute right-[12%] top-0 h-full w-px bg-white/5"
      />
    </div>

    <div class="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

      <!-- HEADER -->
      <div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

        <div class="max-w-3xl">

          <span
            class="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.24em] text-[#4ade80]"
          >
            <ShieldCheck :size="14" />
            Leadership & Governance
          </span>

          <h2
            class="mt-6 text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl"
          >
            LEADING WITH

            <span class="mt-2 block text-[#4ade80]">
              PURPOSE.
            </span>
          </h2>

          <p
            class="mt-7 max-w-2xl text-base leading-8 text-white/55"
          >
            Strong leadership and effective governance are essential to the
            continued development of Nigerian karate.
          </p>

        </div>

        <NuxtLink
          to="/documents"
          class="group inline-flex w-fit items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-black text-white transition hover:border-[#22c55e] hover:bg-[#16a34a]"
        >
          Federation Documents

          <ArrowUpRight
            :size="18"
            class="transition group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </NuxtLink>

      </div>

      <!-- LEADERS -->
      <div class="mt-14 grid gap-6 lg:grid-cols-3">

        <article
          v-for="(leader, index) in leaders"
          :key="leader.role"
          class="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]"
        >

          <!-- IMAGE -->
          <div class="relative aspect-[4/4.7] overflow-hidden">

            <img
              :src="leader.image"
              :alt="leader.name"
              class="h-full w-full object-cover opacity-70 grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
            >

            <div
              class="absolute inset-0 bg-gradient-to-t from-[#08130d] via-[#08130d]/20 to-transparent"
            />

            <!-- NUMBER -->
            <div
              class="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/30 text-xs font-black text-[#4ade80] backdrop-blur-xl"
            >
              0{{ index + 1 }}
            </div>

          </div>

          <!-- CONTENT -->
          <div class="relative -mt-20 p-7">

            <span
              class="inline-flex items-center gap-2 rounded-full border border-[#22c55e]/20 bg-[#16a34a]/10 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-[#4ade80]"
            >
              <span class="h-1.5 w-1.5 rounded-full bg-[#4ade80]" />

              {{ leader.role }}
            </span>

            <h3
              class="mt-5 text-2xl font-black"
            >
              {{ leader.name }}
            </h3>

            <p
              class="mt-3 text-sm leading-7 text-white/50"
            >
              Working with the Federation to strengthen systems, develop
              talent and advance Nigerian karate.
            </p>

            <NuxtLink
              to="/documents"
              class="mt-6 inline-flex items-center gap-2 text-xs font-black text-white/70 transition hover:text-[#4ade80]"
            >
              View Governance

              <ArrowUpRight :size="15" />
            </NuxtLink>

          </div>

        </article>

      </div>

      <!-- GOVERNANCE STRIP -->
      <div
        class="mt-12 grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] md:grid-cols-[auto_1fr_auto]"
      >

        <div
          class="flex items-center justify-center border-b border-white/10 p-8 md:border-b-0 md:border-r"
        >
          <div
            class="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#16a34a] text-white"
          >
            <UsersRound :size="28" />
          </div>
        </div>

        <div class="p-8">
          <span
            class="text-[9px] font-black uppercase tracking-[0.2em] text-[#4ade80]"
          >
            Governance Framework
          </span>

          <h3
            class="mt-3 text-2xl font-black"
          >
            Building a transparent and accountable federation.
          </h3>

          <p
            class="mt-4 max-w-3xl text-sm leading-7 text-white/50"
          >
            The Federation is committed to strengthening governance,
            administration and national collaboration in support of athletes
            and the continued development of karate in Nigeria.
          </p>
        </div>

        <div
          class="flex items-center p-8 md:justify-center"
        >
          <NuxtLink
            to="/documents"
            class="inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-xs font-black text-slate-950 transition hover:bg-[#4ade80]"
          >
            View Documents

            <ArrowUpRight :size="16" />
          </NuxtLink>
        </div>

      </div>

    </div>
  </section>
</template>