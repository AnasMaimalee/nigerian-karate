<script setup lang="ts">
import {
  ArrowRight,
  Building2,
  ChevronRight,
  Globe2,
  ShieldCheck,
  Users,
  Trophy,
  CalendarDays,
  MapPin,
  Mail,
  Phone
} from 'lucide-vue-next'

useHead({
  title: 'NKCA | Karate Federation of Nigeria (KFN) Federation'
})

const initiatives = [
  {
    title: 'Athlete Development',
    description:
      'Supporting the growth and development of karate athletes across Nigeria through structured programmes and opportunities.'
  },
  {
    title: 'Technical Excellence',
    description:
      'Promoting high technical standards, education and continuous development within Karate Federation of Nigeria (KFN).'
  },
  {
    title: 'National Collaboration',
    description:
      'Strengthening cooperation between karate stakeholders, clubs, associations and communities.'
  }
]
</script>

<template>
  <div class="bg-slate-50">

    <!-- ============================================================
         HERO
    ============================================================= -->

    <section
      class="relative overflow-hidden bg-[#08130d] text-white"
    >

      <!-- BACKGROUND -->

      <div class="pointer-events-none absolute inset-0">

        <div
          class="absolute -left-32 top-0 h-[32rem] w-[32rem] rounded-full bg-primary/20 blur-[120px]"
        />

        <div
          class="absolute right-0 top-0 h-full w-[35%] border-l border-white/5"
        />

        <div
          class="absolute right-[12%] top-0 h-full w-px bg-white/5"
        />

      </div>


      <div
        class="relative container-nkf py-20 sm:py-24 lg:py-32"
      >

        <!-- BREADCRUMB -->

        <div
          class="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.18em] text-white/45"
        >
          <NuxtLink
            to="/"
            class="transition hover:text-white"
          >
            Home
          </NuxtLink>

          <ChevronRight :size="12" />

          <span class="text-primary">
            NKCA
          </span>
        </div>


        <div
          class="mt-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
        >

          <!-- LEFT -->

          <div>

            <span
              class="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-[9px] font-black uppercase tracking-[0.2em] text-[#4ade80]"
            >
              <span
                class="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4ade80]"
              />

              Karate Federation of Nigeria (KFN) Community
            </span>


            <h1
              class="mt-7 max-w-4xl text-5xl font-black leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl"
            >
              NKCA

              <span
                class="mt-3 block text-[#4ade80]"
              >
                CONNECTING KARATE.
              </span>
            </h1>


            <p
              class="mt-8 max-w-2xl text-base leading-8 text-white/60 sm:text-lg"
            >
              A platform supporting collaboration, development and stronger
              connections across the Karate Federation of Nigeria (KFN) community.
            </p>


            <div
              class="mt-10 flex flex-wrap gap-4"
            >

              <NuxtLink
                to="/contact"
                class="group inline-flex items-center gap-3 rounded-2xl bg-primary px-6 py-4 text-xs font-black uppercase tracking-wide text-white shadow-xl shadow-primary/20 transition hover:-translate-y-1 hover:bg-emerald-600"
              >
                Contact NKCA

                <ArrowRight
                  :size="17"
                  class="transition group-hover:translate-x-1"
                />
              </NuxtLink>


              <NuxtLink
                to="/news"
                class="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-xs font-black uppercase tracking-wide text-white transition hover:border-white/30 hover:bg-white/10"
              >
                Latest Updates
              </NuxtLink>

            </div>

          </div>


          <!-- RIGHT CARD -->

          <div
            class="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl"
          >

            <div
              class="flex items-center justify-between"
            >

              <div
                class="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20"
              >
                <Building2 :size="25" />
              </div>


              <span
                class="text-[10px] font-black uppercase tracking-[0.2em] text-white/35"
              >
                NKCA
              </span>

            </div>


            <h2
              class="mt-8 text-2xl font-black"
            >
              Building stronger connections.
            </h2>


            <p
              class="mt-4 text-sm leading-7 text-white/55"
            >
              Bringing together people, organisations and stakeholders
              committed to the continued growth of karate in Nigeria.
            </p>


            <div
              class="mt-8 grid grid-cols-2 gap-3"
            >

              <div
                class="rounded-2xl border border-white/10 bg-black/10 p-4"
              >
                <Users
                  :size="18"
                  class="text-[#4ade80]"
                />

                <span
                  class="mt-4 block text-[9px] font-black uppercase tracking-widest text-white/40"
                >
                  Community
                </span>
              </div>


              <div
                class="rounded-2xl border border-white/10 bg-black/10 p-4"
              >
                <Globe2
                  :size="18"
                  class="text-[#4ade80]"
                />

                <span
                  class="mt-4 block text-[9px] font-black uppercase tracking-widest text-white/40"
                >
                  National
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>


    <!-- ============================================================
         ABOUT NKCA
    ============================================================= -->

    <section
      class="container-nkf py-20 sm:py-24 lg:py-28"
    >

      <div
        class="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start"
      >

        <!-- LABEL -->

        <div>

          <span
            class="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.22em] text-primary"
          >
            <ShieldCheck :size="15" />

            About NKCA
          </span>


          <h2
            class="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl"
          >
            A STRONGER

            <span class="block text-primary">
              KARATE COMMUNITY.
            </span>
          </h2>

        </div>


        <!-- CONTENT -->

        <div>

          <p
            class="text-lg leading-9 text-slate-600"
          >
            NKCA represents an important space for connection, collaboration
            and shared development within the Karate Federation of Nigeria (KFN) ecosystem.
          </p>


          <p
            class="mt-6 text-base leading-8 text-slate-500"
          >
            Through stronger relationships between stakeholders and the wider
            karate community, NKCA contributes to conversations and initiatives
            that support athletes, technical development and the future of the
            sport.
          </p>


          <div
            class="mt-10 grid gap-5 sm:grid-cols-3"
          >

            <div
              v-for="item in initiatives"
              :key="item.title"
              class="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >

              <span
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"
              >
                <ShieldCheck :size="18" />
              </span>


              <h3
                class="mt-5 text-sm font-black text-slate-950"
              >
                {{ item.title }}
              </h3>


              <p
                class="mt-3 text-xs leading-6 text-slate-500"
              >
                {{ item.description }}
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>


    <!-- ============================================================
         FEATURE STRIP
    ============================================================= -->

    <section
      class="bg-slate-950 text-white"
    >

      <div
        class="container-nkf py-16 sm:py-20"
      >

        <div
          class="grid gap-10 lg:grid-cols-[1fr_auto]"
        >

          <div>

            <span
              class="text-[9px] font-black uppercase tracking-[0.22em] text-[#4ade80]"
            >
              NKCA Focus
            </span>


            <h2
              class="mt-5 max-w-3xl text-3xl font-black leading-tight sm:text-4xl"
            >
              Supporting the people and institutions shaping Karate Federation of Nigeria (KFN).
            </h2>

          </div>


          <div
            class="flex flex-wrap items-center gap-3"
          >

            <div
              class="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4"
            >
              <Users
                :size="18"
                class="text-[#4ade80]"
              />

              <span
                class="text-[10px] font-black uppercase tracking-wide"
              >
                Community
              </span>
            </div>


            <div
              class="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4"
            >
              <Trophy
                :size="18"
                class="text-[#4ade80]"
              />

              <span
                class="text-[10px] font-black uppercase tracking-wide"
              >
                Development
              </span>
            </div>


            <div
              class="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4"
            >
              <Globe2
                :size="18"
                class="text-[#4ade80]"
              />

              <span
                class="text-[10px] font-black uppercase tracking-wide"
              >
                Collaboration
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>


    <!-- ============================================================
         CONNECT
    ============================================================= -->

    <section
      class="container-nkf py-20 sm:py-24"
    >

      <div
        class="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white lg:grid-cols-[1fr_0.8fr]"
      >

        <!-- CONTENT -->

        <div class="p-8 sm:p-12">

          <span
            class="text-[10px] font-black uppercase tracking-[0.22em] text-primary"
          >
            Stay Connected
          </span>


          <h2
            class="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
          >
            Connect with the Karate Federation of Nigeria (KFN) community.
          </h2>


          <p
            class="mt-5 max-w-xl text-sm leading-7 text-slate-500"
          >
            For enquiries, collaboration and official communication, connect
            through the Karate Federation of Nigeria (KFN) Federation.
          </p>


          <div
            class="mt-8 flex flex-wrap gap-4"
          >

            <NuxtLink
              to="/contact"
              class="inline-flex items-center gap-3 rounded-xl bg-slate-950 px-5 py-4 text-xs font-black text-white transition hover:bg-primary"
            >
              <Mail :size="16" />

              Contact Federation
            </NuxtLink>


            <NuxtLink
              to="/events"
              class="inline-flex items-center gap-3 rounded-xl border border-slate-200 px-5 py-4 text-xs font-black text-slate-700 transition hover:border-primary hover:text-primary"
            >
              <CalendarDays :size="16" />

              Upcoming Events
            </NuxtLink>

          </div>

        </div>


        <!-- SIDE -->

        <div
          class="relative overflow-hidden bg-primary p-8 text-white sm:p-12"
        >

          <div
            class="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
          />


          <div class="relative">

            <div
              class="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary shadow-xl"
            >
              <MapPin :size="24" />
            </div>


            <h3
              class="mt-8 text-2xl font-black"
            >
              Karate Federation of Nigeria (KFN) Federation
            </h3>


            <p
              class="mt-4 text-sm leading-7 text-white/70"
            >
              Working together to advance karate and strengthen its future
              across Nigeria.
            </p>


            <div
              class="mt-8 border-t border-white/15 pt-6"
            >
              <span
                class="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] text-white/60"
              >
                <Phone :size="14" />

                Official Communication
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>

  </div>
</template>