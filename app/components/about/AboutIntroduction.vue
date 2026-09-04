<script setup lang="ts">
import {
  ArrowUpRight,
  Building2,
  Globe2,
  ShieldCheck
} from 'lucide-vue-next'
</script>

<template>
  <section
    id="about-introduction"
    class="bg-white py-20 sm:py-24 lg:py-32"
  >
    <div
      class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
    >

      <div
        class="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"
      >

        <!-- LEFT -->
        <div>

          <span
            class="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#15803d]"
          >
            <span class="h-2 w-2 rounded-full bg-[#16a34a]" />

            About The Federation
          </span>

          <h2
            class="mt-6 text-4xl font-black leading-[0.95] tracking-tight text-slate-950 sm:text-5xl"
          >
            ONE FEDERATION.

            <span
              class="mt-2 block text-[#15803d]"
            >
              ONE NATIONAL
            </span>

            KARATE MOVEMENT.
          </h2>

        </div>

        <!-- RIGHT -->
        <div>

          <p
            class="text-xl font-bold leading-9 text-slate-900 sm:text-2xl"
          >
            The Karate Federation of Nigeria (KFN)serves as the national platform
            for the development, organisation and advancement of karate
            across Nigeria.
          </p>

          <p
            class="mt-7 text-base leading-8 text-slate-600"
          >
            We work to create opportunities for athletes, coaches, officials
            and karate organisations while promoting discipline, excellence,
            respect and fair competition.
          </p>

          <p
            class="mt-5 text-base leading-8 text-slate-600"
          >
            From grassroots development to national championships and
            international representation, the Federation is committed to
            creating a sustainable pathway for the next generation of
            Karate Federation of Nigeria (KFN) athletes.
          </p>

          <!-- FEATURES -->
          <div
            class="mt-10 grid gap-4 sm:grid-cols-3"
          >

            <div
              class="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
            >
              <ShieldCheck
                :size="22"
                class="text-[#16a34a]"
              />

              <h3
                class="mt-5 text-sm font-black text-slate-950"
              >
                National Standards
              </h3>

              <p
                class="mt-2 text-xs leading-6 text-slate-500"
              >
                Building trusted systems and stronger competition.
              </p>
            </div>

            <div
              class="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
            >
              <Globe2
                :size="22"
                class="text-[#16a34a]"
              />

              <h3
                class="mt-5 text-sm font-black text-slate-950"
              >
                Global Ambition
              </h3>

              <p
                class="mt-2 text-xs leading-6 text-slate-500"
              >
                Preparing athletes for international success.
              </p>
            </div>

            <div
              class="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
            >
              <Building2
                :size="22"
                class="text-[#16a34a]"
              />

              <h3
                class="mt-5 text-sm font-black text-slate-950"
              >
                Stronger System
              </h3>

              <p
                class="mt-2 text-xs leading-6 text-slate-500"
              >
                Connecting states, clubs and communities.
              </p>
            </div>

          </div>

          <NuxtLink
            to="/documents"
            class="group mt-10 inline-flex items-center gap-3 text-sm font-black text-slate-950"
          >
            Explore Federation Documents

            <ArrowUpRight
              :size="18"
              class="text-[#16a34a] transition group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </NuxtLink>

        </div>

      </div>

    </div>
  </section>
</template>