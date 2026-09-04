<script setup lang="ts">
import {
  ArrowUpRight,
  CalendarDays,
  FileText,
  Trophy,
  UsersRound
} from 'lucide-vue-next'
</script>

<template>
  <section class="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">

    <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

      <div
        class="relative isolate overflow-hidden rounded-[2.5rem] bg-[#08130d] text-white shadow-2xl"
      >

        <!-- BACKGROUND -->
        <div class="pointer-events-none absolute inset-0">

          <div
            class="absolute -left-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-[#16a34a]/20 blur-3xl"
          />

          <div
            class="absolute -bottom-40 -right-40 h-[35rem] w-[35rem] rounded-full bg-[#22c55e]/10 blur-3xl"
          />

          <div
            class="absolute right-[12%] top-0 h-full w-px bg-white/5"
          />

          <div
            class="absolute right-[24%] top-0 h-full w-px bg-white/5"
          />

        </div>

        <div
          class="relative px-6 py-16 sm:px-10 lg:px-16 lg:py-20 xl:px-20"
        >

          <div
            class="grid gap-14 lg:grid-cols-[1fr_340px] lg:items-center"
          >

            <!-- CONTENT -->
            <div class="max-w-4xl">

              <span
                class="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#4ade80]"
              >
                <span
                  class="relative flex h-2.5 w-2.5"
                >
                  <span
                    class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ade80] opacity-70"
                  />

                  <span
                    class="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#4ade80]"
                  />
                </span>

                The Future Is Being Built Now
              </span>

              <h2
                class="mt-8 text-4xl font-black leading-[0.94] tracking-tight sm:text-5xl lg:text-7xl"
              >
                READY TO BE PART

                <span
                  class="mt-2 block text-[#4ade80]"
                >
                  OF THE MOVEMENT?
                </span>
              </h2>

              <p
                class="mt-7 max-w-2xl text-base leading-8 text-white/60 sm:text-lg"
              >
                Explore Nigerian karate, discover our athletes, follow national
                competitions and learn more about the systems shaping the
                future of the sport.
              </p>

              <!-- BUTTONS -->
              <div
                class="mt-10 flex flex-col gap-4 sm:flex-row"
              >

                <NuxtLink
                  to="/athletes"
                  class="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#16a34a] px-7 py-4 text-sm font-black text-white shadow-xl shadow-black/30 transition duration-300 hover:-translate-y-1 hover:bg-[#15803d]"
                >
                  <UsersRound :size="18" />

                  Explore Athletes

                  <ArrowUpRight
                    :size="17"
                    class="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </NuxtLink>

                <NuxtLink
                  to="/events"
                  class="group inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-slate-950"
                >
                  <CalendarDays :size="18" />

                  Explore Events
                </NuxtLink>

              </div>

            </div>

            <!-- QUICK DIRECTORY -->
            <div
              class="rounded-[2rem] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl"
            >

              <span
                class="px-2 text-[9px] font-black uppercase tracking-[0.2em] text-white/40"
              >
                Explore NKF
              </span>

              <div class="mt-4 space-y-2">

                <NuxtLink
                  to="/athletes"
                  class="group flex items-center gap-4 rounded-2xl border border-transparent p-4 transition hover:border-white/10 hover:bg-white/5"
                >
                  <div
                    class="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-[#4ade80]"
                  >
                    <Trophy :size="19" />
                  </div>

                  <div class="flex-1">
                    <span class="text-sm font-black">
                      National Athletes
                    </span>

                    <span class="mt-1 block text-[11px] text-white/40">
                      Meet Nigeria's competitors
                    </span>
                  </div>

                  <ArrowUpRight
                    :size="17"
                    class="text-white/30 transition group-hover:text-[#4ade80]"
                  />
                </NuxtLink>

                <NuxtLink
                  to="/events"
                  class="group flex items-center gap-4 rounded-2xl border border-transparent p-4 transition hover:border-white/10 hover:bg-white/5"
                >
                  <div
                    class="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-[#4ade80]"
                  >
                    <CalendarDays :size="19" />
                  </div>

                  <div class="flex-1">
                    <span class="text-sm font-black">
                      Competitions
                    </span>

                    <span class="mt-1 block text-[11px] text-white/40">
                      Events and championships
                    </span>
                  </div>

                  <ArrowUpRight
                    :size="17"
                    class="text-white/30 transition group-hover:text-[#4ade80]"
                  />
                </NuxtLink>

                <NuxtLink
                  to="/documents"
                  class="group flex items-center gap-4 rounded-2xl border border-transparent p-4 transition hover:border-white/10 hover:bg-white/5"
                >
                  <div
                    class="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-[#4ade80]"
                  >
                    <FileText :size="19" />
                  </div>

                  <div class="flex-1">
                    <span class="text-sm font-black">
                      Rules & Documents
                    </span>

                    <span class="mt-1 block text-[11px] text-white/40">
                      Federation resources
                    </span>
                  </div>

                  <ArrowUpRight
                    :size="17"
                    class="text-white/30 transition group-hover:text-[#4ade80]"
                  />
                </NuxtLink>

              </div>

            </div>

          </div>

          <!-- BOTTOM MESSAGE -->
          <div
            class="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between"
          >

            <p
              class="text-xs font-medium text-white/40"
            >
              Strengthening Nigerian karate through unity, discipline and
              excellence.
            </p>

            <NuxtLink
              to="/contact"
              class="group inline-flex items-center gap-2 text-xs font-black text-[#4ade80]"
            >
              Contact The Federation

              <ArrowUpRight
                :size="16"
                class="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </NuxtLink>

          </div>

        </div>

      </div>

    </div>

  </section>
</template>