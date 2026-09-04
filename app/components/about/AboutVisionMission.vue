<script setup lang="ts">
import {
  Eye,
  Target,
  HeartHandshake
} from 'lucide-vue-next'
</script>

<template>
  <section
    class="bg-[#f7f8f7] py-20 sm:py-24 lg:py-32"
  >

    <div
      class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
    >

      <div
        class="max-w-3xl"
      >
        <span
          class="text-[10px] font-black uppercase tracking-[0.22em] text-[#15803d]"
        >
          Our Foundation
        </span>

        <h2
          class="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl"
        >
          PURPOSE THAT MOVES

          <span class="text-[#15803d]">
            THE FEDERATION FORWARD.
          </span>
        </h2>
      </div>

      <div
        class="mt-14 grid gap-6 lg:grid-cols-3"
      >

        <article
          class="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
        >

          <div
            class="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-[#4ade80]"
          >
            <Eye :size="25" />
          </div>

          <span
            class="mt-8 block text-[9px] font-black uppercase tracking-[0.2em] text-[#15803d]"
          >
            Vision
          </span>

          <h3
            class="mt-3 text-2xl font-black text-slate-950"
          >
            A stronger future for Nigerian karate.
          </h3>

          <p
            class="mt-5 text-sm leading-7 text-slate-600"
          >
            To build a respected and sustainable karate ecosystem that
            develops world-class athletes and strengthens Nigeria's presence
            on the global stage.
          </p>

        </article>

        <article
          class="group rounded-[2rem] bg-[#0b1711] p-8 text-white shadow-xl transition duration-500 hover:-translate-y-2"
        >

          <div
            class="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#16a34a] text-white"
          >
            <Target :size="25" />
          </div>

          <span
            class="mt-8 block text-[9px] font-black uppercase tracking-[0.2em] text-[#4ade80]"
          >
            Mission
          </span>

          <h3
            class="mt-3 text-2xl font-black"
          >
            Develop people. Build champions.
          </h3>

          <p
            class="mt-5 text-sm leading-7 text-white/55"
          >
            To organise, promote and develop karate through strong
            competitions, athlete development, education and national
            collaboration.
          </p>

        </article>

        <article
          class="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
        >

          <div
            class="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ecfdf5] text-[#15803d]"
          >
            <HeartHandshake :size="25" />
          </div>

          <span
            class="mt-8 block text-[9px] font-black uppercase tracking-[0.2em] text-[#15803d]"
          >
            Values
          </span>

          <h3
            class="mt-3 text-2xl font-black text-slate-950"
          >
            Discipline. Respect. Excellence.
          </h3>

          <p
            class="mt-5 text-sm leading-7 text-slate-600"
          >
            Our work is guided by integrity, inclusion, respect, teamwork and
            a commitment to excellence in everything we do.
          </p>

        </article>

      </div>

    </div>

  </section>
</template>