<script setup lang="ts">
import {
  ArrowUpRight,
  ShieldCheck,
  Trophy,
  Users
} from 'lucide-vue-next'

useHead({
  title: 'NKRC | Nigerian Karate Federation'
})

const activities = [
  'National karate development',
  'Competition programmes',
  'Technical development',
  'Athlete support'
]
</script>

<template>
  <main class="min-h-screen bg-slate-50">

    <section
      class="relative overflow-hidden bg-[#08130d] py-24 text-white lg:py-32"
    >
      <div class="relative container-nkf">

        <span
          class="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.22em] text-emerald-400"
        >
          <ShieldCheck :size="15" />

          Nigerian Karate Federation
        </span>

        <h1
          class="mt-7 text-6xl font-black tracking-tight sm:text-7xl lg:text-8xl"
        >
          NKRC.
        </h1>

        <p
          class="mt-7 max-w-2xl text-base leading-8 text-white/55"
        >
          Information, activities and developments relating to NKRC and its
          contribution to the continued growth of karate in Nigeria.
        </p>

      </div>
    </section>


    <section class="container-nkf py-20">

      <div
        class="grid gap-7 md:grid-cols-2"
      >

        <div
          v-for="activity in activities"
          :key="activity"
          class="rounded-[1.75rem] border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
        >

          <div
            class="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary"
          >
            <Trophy :size="25" />
          </div>

          <h2
            class="mt-6 text-2xl font-black text-slate-950"
          >
            {{ activity }}
          </h2>

          <p
            class="mt-4 text-sm leading-7 text-slate-500"
          >
            Official information and updates from the Nigerian Karate
            Federation.
          </p>

          <NuxtLink
            to="/contact"
            class="mt-6 inline-flex items-center gap-2 text-xs font-black text-primary"
          >
            Learn More

            <ArrowUpRight :size="15" />
          </NuxtLink>

        </div>

      </div>

    </section>

  </main>
</template>