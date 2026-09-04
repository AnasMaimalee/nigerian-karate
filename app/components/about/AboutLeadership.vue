<script setup lang="ts">
import {
  ArrowUpRight,
  ShieldCheck,
  UsersRound,
  Trophy,
  Landmark,
  Globe2,
  X,
  ZoomIn
} from 'lucide-vue-next'

const selectedLeader = ref<typeof leaders[number] | null>(null)

const openLeaderImage = (leader: typeof leaders[number]) => {
  selectedLeader.value = leader
}

const closeLeaderImage = () => {
  selectedLeader.value = null
}

const leaders = [
  {
    name: 'Engr. Dr Chukwudi Dimkpa FNSE',
    role: 'President',
    image: '/images/staff/president.jpg',
    category: 'Federation Leadership'
  },
  {
    name: 'DR (Alh) Bashir Maizare',
    role: '1st Vice President',
    image: '/images/staff/vice-president.jpg',
    category: 'Federation Leadership'
  },
  {
    name: 'Hajiya Zanian Saleh',
    role: 'AFFAN Representative',
    image: '/images/staff/AFFAN Rep.jpg',
    category: 'National Representative'
  },
  {
    name: 'Dr. Mustapha Sharif Ramadan',
    role: 'Chairman, Publicity ICT & Media Technical Support.',
    image: '/images/staff/shariff.jpeg',
    category: 'Chairman, Publicity ICT & Media Technical Support.'
  },
  {
    name: 'H.E Silas A. Agara',
    role: 'UFAK African 4th Vice President',
    image: '/images/staff/agaras.jpeg',
    category: 'African Leadership'
  },
  {
    name: 'Kehinde Fausari Yetunde Dehinde',
    role: 'North Central Representative',
    image: '/images/staff/kehinde fausari north central rep.jpg',
    category: 'National Representative'
  },
  {
    name: 'Mr. Dave Jegede (Shihan)',
    role: 'KFN. TECHNICAL DIRECTOR',
    image: '/images/staff/jede.jpeg',
    category: 'KFN. TECHNICAL DIRECTOR'
  },
  {
    name: 'Shehu Dikko',
    role: 'Chairman',
    subtitle: 'National Sports Commission',
    image: '/images/staff/sport-chairman.webp',
    category: 'National Sports Leadership'
  },
  

  {
    name: 'Hon. Bukola Olopade',
    role: 'Director General',
    subtitle: 'National Sports Commission',
    image: '/images/staff/bukola-olopade.webp',
    category: 'National Sports Leadership'
  },
  {
    name: 'His Excellency Suzuki Hideo',
    role: 'Japanese Ambassador to Nigeria',
    image: '/images/staff/suzuki.png',
    category: 'International Partnership'
  },

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
            continued development of Karate Federation of Nigeria (KFN).
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

      <!-- ============================================================
      LEADERSHIP
      ============================================================ -->

      <div
        class="mt-14 grid gap-6 sm:grid-cols-1 lg:grid-cols-2"
      >
        <article
          v-for="(leader, index) in leaders"
          :key="leader.name"
          class="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] transition duration-500 hover:-translate-y-2 hover:border-[#4ade80]/40 hover:bg-white/[0.06]"
        >

          <!-- IMAGE -->

          <button
            type="button"
            class="relative block aspect-[4/4.6] w-full overflow-hidden bg-slate-900 text-left"
            :aria-label="`View larger photo of ${leader.name}`"
            @click="openLeaderImage(leader)"
          >
            <img
              :src="leader.image"
              :alt="leader.name"
              class="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
            >

            <!-- IMAGE OVERLAY -->

            <div
              class="absolute inset-0 bg-gradient-to-t from-[#08130d] via-[#08130d]/25 to-transparent"
            />


            <!-- GREEN GLOW -->

            <div
              class="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#16a34a]/15 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"
            />


            <!-- NUMBER -->

            <div
              class="absolute left-5 top-5 flex h-11 min-w-11 items-center justify-center rounded-xl border border-[#4ade80]/40 bg-[#08130d]/75 px-3 text-xs font-black text-[#4ade80] shadow-xl backdrop-blur-xl"
            >
              0{{ index + 1 }}
            </div>


            <!-- ZOOM BUTTON -->

            <div
              class="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-black/40 text-white opacity-0 shadow-xl backdrop-blur-xl transition duration-300 group-hover:opacity-100"
            >
              <ZoomIn :size="18" />
            </div>


            <!-- CATEGORY -->

            <div
              class="absolute bottom-5 left-5 right-5"
            >
              <span
                class="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-2 text-[8px] font-black uppercase tracking-[0.16em] text-white/75 backdrop-blur-xl"
              >
                <span
                  class="h-1.5 w-1.5 shrink-0 rounded-full bg-[#4ade80]"
                />

                <span class="truncate">
                  {{ leader.category }}
                </span>
              </span>
            </div>

          </button>


          <!-- CONTENT -->

          <div
            class="relative p-6"
          >

            <!-- GREEN LINE -->

            <div
              class="h-[2px] w-12 rounded-full bg-[#4ade80] transition-all duration-500 group-hover:w-20"
            />


            <!-- NAME -->

            <h3
              class="mt-5 min-h-[3.5rem] text-lg font-black leading-tight tracking-tight text-white"
            >
              {{ leader.name }}
            </h3>


            <!-- ROLE -->

            <div
              class="mt-3"
            >
              <span
                class="block text-[10px] font-black uppercase tracking-[0.14em] text-[#4ade80]"
              >
                {{ leader.role }}
              </span>


              <span
                v-if="leader.subtitle"
                class="mt-1.5 block text-[10px] font-bold uppercase tracking-wide text-white/45"
              >
                {{ leader.subtitle }}
              </span>
            </div>


            <!-- BOTTOM -->

            <div
              class="mt-6 flex items-center justify-between border-t border-white/10 pt-4"
            >
              <span
                class="text-[8px] font-black uppercase tracking-[0.18em] text-white/30"
              >
                Karate Federation of Nigeria (KFN) Federation
              </span>

              <ArrowUpRight
                :size="16"
                class="text-white/35 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#4ade80]"
              />
            </div>

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
<!-- ============================================================
     LEADER IMAGE MODAL
     MOBILE SCROLL FIXED
============================================================ -->

<Teleport to="body">

  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >

    <!-- ========================================================
         MODAL OVERLAY

         IMPORTANT:
         overflow-y-auto allows the entire modal to scroll
         on small/mobile screens.
    ========================================================= -->

    <div
      v-if="selectedLeader"
      class="fixed inset-0 z-[9999] overflow-y-auto bg-[#020704]/95 backdrop-blur-xl"
      @click.self="closeLeaderImage"
    >

      <!-- ======================================================
           MOBILE / DESKTOP MODAL WRAPPER

           On mobile:
           - starts from top
           - allows scrolling

           On desktop:
           - vertically centered
    ======================================================= -->

      <div
        class="flex min-h-full w-full items-start justify-center p-3 py-20 sm:p-6 sm:py-20 lg:items-center lg:p-8"
      >

        <!-- ====================================================
             BACKGROUND GLOW
        ===================================================== -->

        <div
          class="pointer-events-none fixed left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#16a34a]/10 blur-[120px] sm:h-[30rem] sm:w-[30rem]"
        />


        <!-- ====================================================
             CLOSE BUTTON

             Fixed so mobile users can always close modal.
        ===================================================== -->

        <button
          type="button"
          class="fixed right-3 top-3 z-[10000] flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-black/50 text-white shadow-2xl backdrop-blur-xl transition duration-300 hover:rotate-90 hover:border-[#4ade80] hover:bg-[#16a34a] sm:right-5 sm:top-5 sm:h-12 sm:w-12 sm:rounded-2xl"
          aria-label="Close image"
          @click="closeLeaderImage"
        >
          <X :size="21" />
        </button>


        <!-- ====================================================
             MAIN MODAL CONTAINER

             KEY MOBILE FIX:

             No max-h-full restriction.

             The outer overlay scrolls naturally.
        ===================================================== -->

        <div
          class="relative z-10 my-auto flex w-full max-w-5xl flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#08130d] shadow-2xl sm:rounded-[2rem] lg:flex-row"
          @click.stop
        >


          <!-- ==================================================
               IMAGE SECTION
          =================================================== -->

          <div
            class="relative flex h-[42vh] min-h-[280px] w-full items-center justify-center overflow-hidden bg-black sm:h-[52vh] sm:min-h-[420px] lg:min-h-0 lg:h-auto lg:flex-1"
          >

            <!-- IMAGE -->

            <img
              :src="selectedLeader.image"
              :alt="selectedLeader.name"
              class="h-full w-full object-contain"
            >


            <!-- IMAGE GRADIENT -->

            <div
              class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
            />


            <!-- MOBILE IMAGE LABEL -->

            <div
              class="absolute bottom-0 left-0 right-0 p-5 lg:hidden"
            >

              <div
                class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-2 backdrop-blur-md"
              >

                <span
                  class="h-2 w-2 animate-pulse rounded-full bg-[#4ade80]"
                />

                <span
                  class="text-[8px] font-black uppercase tracking-[0.18em] text-white/70"
                >
                  NKF Leadership Profile
                </span>

              </div>

            </div>

          </div>



          <!-- ==================================================
               LEADER INFORMATION SECTION
          =================================================== -->

          <div
            class="flex w-full flex-col border-t border-white/10 p-5 sm:p-7 lg:w-[340px] lg:border-l lg:border-t-0 lg:p-9"
          >


            <!-- ================================================
                 INFORMATION CONTENT
            ================================================= -->

            <div>


              <!-- STATUS -->

              <span
                class="inline-flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.18em] text-[#4ade80] sm:text-[9px] sm:tracking-[0.2em]"
              >

                <span
                  class="h-2 w-2 animate-pulse rounded-full bg-[#4ade80]"
                />

                Leadership Profile

              </span>



              <!-- NAME -->

              <h2
                class="mt-4 text-2xl font-black leading-tight tracking-tight text-white sm:mt-6 sm:text-3xl"
              >
                {{ selectedLeader.name }}
              </h2>



              <!-- DIVIDER -->

              <div
                class="mt-5 h-[2px] w-12 rounded-full bg-[#4ade80] sm:mt-6 sm:w-14"
              />



              <!-- ROLE -->

              <p
                class="mt-5 text-[11px] font-black uppercase leading-6 tracking-[0.1em] text-[#4ade80] sm:text-sm sm:tracking-[0.12em]"
              >
                {{ selectedLeader.role }}
              </p>



              <!-- SUBTITLE -->

              <p
                v-if="selectedLeader.subtitle"
                class="mt-3 text-sm leading-6 text-white/50"
              >
                {{ selectedLeader.subtitle }}
              </p>



              <!-- ==============================================
                   INFORMATION CARD
              =============================================== -->

              <div
                class="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:mt-8 sm:p-5"
              >

                <!-- LABEL -->

                <span
                  class="text-[7px] font-black uppercase tracking-[0.14em] text-white/35 sm:text-[8px] sm:tracking-[0.18em]"
                >
                  Karate Federation of Nigeria
                </span>



                <!-- DESCRIPTION -->

                <p
                  class="mt-3 text-sm leading-7 text-white/60"
                >
                  Leadership, collaboration and commitment towards the
                  continued growth and development of karate in Nigeria.
                </p>

              </div>



              <!-- ==============================================
                   MOBILE EXTRA INFORMATION
              =============================================== -->

              <div
                class="mt-6 border-t border-white/10 pt-6 lg:hidden"
              >

                <span
                  class="text-[8px] font-black uppercase tracking-[0.18em] text-white/35"
                >
                  Federation Leadership
                </span>


                <p
                  class="mt-3 text-sm leading-7 text-white/55"
                >
                  The Nigerian Karate Federation continues to work with
                  dedicated leaders, athletes, coaches and stakeholders
                  towards strengthening the development, administration
                  and future of karate across Nigeria.
                </p>

              </div>


            </div>



            <!-- ================================================
                 ACTION AREA

                 This remains inside normal modal flow on mobile,
                 so the user can scroll down and reach it.
            ================================================= -->

            <div
              class="mt-8 border-t border-white/10 pt-5 sm:mt-10"
            >

              <button
                type="button"
                class="flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-xs font-black uppercase tracking-wide text-white transition duration-300 hover:border-[#4ade80] hover:bg-[#16a34a] active:scale-[0.98]"
                @click="closeLeaderImage"
              >

                Close Profile

                <X :size="16" />

              </button>

            </div>


          </div>


        </div>

      </div>

    </div>

  </Transition>

</Teleport>

  </section>
</template>