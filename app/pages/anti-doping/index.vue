<script setup lang="ts">
import {
  ShieldCheck,
  Scale,
  FileText,
  Stethoscope,
  AlertTriangle,
  BookOpen,
  ClipboardCheck,
  ExternalLink,
  ArrowRight,
  Trophy,
  GraduationCap,
  HeartPulse,
  Users,
  ChevronRight,
  CircleCheck,
} from 'lucide-vue-next'

import { images } from '~/data/images'

const heroStats = [
  {
    value: '100%',
    label: 'Commitment to Clean Sport',
  },
  {
    value: '24/7',
    label: 'Athlete Education',
  },
  {
    value: 'Fair',
    label: 'Competition for Everyone',
  },
]

const quickActions = [
  {
    title: 'Know Your Rights',
    description:
      'Understand your rights and responsibilities as a Karate Federation of Nigeria (KFN) athlete.',
    icon: Scale,
    to: '#rights',
  },
  {
    title: 'Anti-Doping Rules',
    description:
      'Learn the regulations that protect fair competition and clean sport.',
    icon: FileText,
    to: '#rules',
  },
  {
    title: 'Testing & Procedures',
    description:
      'Understand how anti-doping testing works before, during and after competition.',
    icon: ClipboardCheck,
    to: '#testing',
  },
  {
    title: 'Therapeutic Use',
    description:
      'Information about medication, exemptions and athlete responsibilities.',
    icon: Stethoscope,
    to: '#tue',
  },
]

const resourceSections = [
  {
    id: 'rights',
    eyebrow: 'ATHLETE PROTECTION',
    title: 'Rights, Rules & Responsibilities',
    description:
      'Everything Karate Federation of Nigeria (KFN) athletes need to understand about their rights and responsibilities in clean sport.',
    icon: ShieldCheck,
    items: [
      {
        title: 'Roles and Responsibilities',
        description:
          'Understand the responsibilities of athletes and athlete support personnel.',
      },
      {
        title: 'Athlete Anti-Doping Rights',
        description:
          'Know your rights during testing, education and anti-doping procedures.',
      },
    ],
  },

  {
    id: 'rules',
    eyebrow: 'KNOW THE RULES',
    title: 'Anti-Doping Rules',
    description:
      'Stay informed about the regulations and standards governing clean karate competition.',
    icon: Scale,
    items: [
      {
        title: 'Anti-Doping Rule Violations',
        description:
          'Understand actions and circumstances that may result in violations.',
      },
      {
        title: 'World Anti-Doping Code',
        description:
          'The global framework supporting fair and clean sport.',
      },
      {
        title: 'International Standards',
        description:
          'Standards supporting testing, education and athlete protection.',
      },
      {
        title: 'Principle of Strict Liability',
        description:
          'Athletes are responsible for substances found in their bodies.',
      },
    ],
  },

  {
    id: 'testing',
    eyebrow: 'TESTING & COMPLIANCE',
    title: 'Registered Testing Pool & Whereabouts',
    description:
      'Important guidance for athletes selected for registered testing and whereabouts requirements.',
    icon: ClipboardCheck,
    items: [
      {
        title: 'Testing Requirements',
        description:
          'What athletes should know when selected for anti-doping testing.',
      },
      {
        title: 'Athlete Whereabouts',
        description:
          'Learn how whereabouts information supports effective testing.',
      },
      {
        title: 'Athlete Central',
        description:
          'Access important information about athlete whereabouts and compliance.',
      },
    ],
  },

  {
    id: 'tue',
    eyebrow: 'ATHLETE HEALTH',
    title: 'Therapeutic Use Exemptions',
    description:
      'Important guidance for athletes who require prohibited medication for legitimate medical treatment.',
    icon: HeartPulse,
    items: [
      {
        title: 'TUE Process',
        description:
          'Understand how to apply for a Therapeutic Use Exemption.',
      },
      {
        title: 'TUE Frequently Asked Questions',
        description:
          'Answers to common questions about medication and exemptions.',
      },
      {
        title: 'WADA TUE Checklist',
        description:
          'Review the important requirements before submitting your application.',
      },
      {
        title: 'TUE Application Form',
        description:
          'Access information required for Therapeutic Use applications.',
      },
    ],
  },
]

const educationalResources = [
  {
    title: 'Anti-Doping Activity Pack',
    description:
      'Interactive educational resources designed to help athletes understand clean sport.',
    icon: BookOpen,
  },
  {
    title: 'Anti-Doping Education',
    description:
      'Learn about clean sport, prohibited substances and athlete responsibilities.',
    icon: GraduationCap,
  },
  {
    title: 'Play True Quiz',
    description:
      'Test your knowledge of anti-doping and clean competition.',
    icon: Trophy,
  },
  {
    title: 'Athlete Support Personnel',
    description:
      'Resources for coaches, medical teams and everyone supporting athletes.',
    icon: Users,
  },
]

const antiDopingNews = [
  {
    title:
      'Nigeria Karate Federation Strengthens Commitment to Clean Sport',
    date: 'December 19, 2025',
    image: images.news.nationalChampionship,
    featured: true,
  },
  {
    title:
      'Athlete Education and Anti-Doping Awareness Programme',
    date: 'October 23, 2025',
    image: images.news.youthAthletes,
  },
  {
    title:
      'Clean Sport Education Continues Across Karate Federation of Nigeria (KFN)',
    date: 'August 11, 2025',
    image: images.news.training,
  },
]
</script>

<template>
  <main class="min-h-screen bg-slate-50">

    <!-- HERO -->
    <section class="relative isolate overflow-hidden bg-slate-950">

      <!-- BACKGROUND -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-slate-950 via-green-950 to-slate-950"
      />

      <div
        class="absolute inset-0 opacity-30"
        :style="{
          backgroundImage: `url(${images.backgrounds.darkKarate})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }"
      />

      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.25),transparent_35%)]"
      />

      <div
        class="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-green-500/10 blur-3xl"
      />

      <div
        class="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
      >

        <div class="max-w-4xl">

          <!-- BADGE -->
          <div
            class="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-green-300"
          >
            <ShieldCheck :size="15" />
            Nigeria Karate Federation
          </div>

          <!-- TITLE -->
          <h1
            class="mt-8 text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-8xl"
          >
            CLEAN SPORT.

            <span class="block text-green-400">
              FAIR KARATE.
            </span>
          </h1>

          <p
            class="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
          >
            The Nigeria Karate Federation is committed to protecting
            athletes, promoting fair competition and building a culture
            of integrity throughout Karate Federation of Nigeria (KFN).
          </p>

          <!-- CTA -->
          <div class="mt-10 flex flex-wrap gap-4">

            <a
              href="#resources"
              class="inline-flex items-center gap-3 rounded-2xl bg-green-500 px-7 py-4 text-sm font-black text-slate-950 shadow-xl shadow-green-500/20 transition hover:-translate-y-1 hover:bg-green-400"
            >
              Explore Resources

              <ArrowRight :size="18" />
            </a>

            <a
              href="#education"
              class="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-black text-white backdrop-blur transition hover:bg-white/10"
            >
              Athlete Education

              <BookOpen :size="18" />
            </a>

          </div>

        </div>

        <!-- STATS -->
        <div
          class="mt-16 grid gap-4 sm:grid-cols-3"
        >
          <div
            v-for="stat in heroStats"
            :key="stat.label"
            class="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur"
          >
            <span class="block text-3xl font-black text-white">
              {{ stat.value }}
            </span>

            <span
              class="mt-2 block text-[10px] font-black uppercase tracking-widest text-green-300"
            >
              {{ stat.label }}
            </span>
          </div>
        </div>

      </div>

    </section>

    <!-- QUICK ACTIONS -->
    <section class="relative -mt-10 z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <div
        class="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
      >

        <a
          v-for="action in quickActions"
          :key="action.title"
          :href="action.to"
          class="group rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 transition duration-300 hover:-translate-y-2 hover:border-green-300 hover:shadow-2xl"
        >

          <div
            class="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-700 transition group-hover:bg-green-700 group-hover:text-white"
          >
            <component
              :is="action.icon"
              :size="22"
            />
          </div>

          <h3
            class="mt-6 text-lg font-black text-slate-950"
          >
            {{ action.title }}
          </h3>

          <p
            class="mt-2 text-sm leading-6 text-slate-500"
          >
            {{ action.description }}
          </p>

          <div
            class="mt-5 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-green-700"
          >
            Learn More

            <ArrowRight
              :size="16"
              class="transition group-hover:translate-x-1"
            />
          </div>

        </a>

      </div>

    </section>

    <!-- INTRO -->
    <section class="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">

      <div class="max-w-3xl">

        <p
          class="text-xs font-black uppercase tracking-[0.25em] text-green-700"
        >
          Our Commitment
        </p>

        <h2
          class="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl"
        >
          Protecting the Integrity
          <span class="block text-green-700">
            of Karate Federation of Nigeria (KFN).
          </span>
        </h2>

        <p
          class="mt-6 text-base leading-8 text-slate-600 sm:text-lg"
        >
          Clean sport protects athletes and ensures that success is earned
          through discipline, talent, preparation and respect for the rules.
          Our anti-doping programme provides athletes, coaches and support
          personnel with the information they need to compete responsibly.
        </p>

      </div>

    </section>

    <!-- RESOURCE SECTIONS -->
    <section
      id="resources"
      class="border-y border-slate-200 bg-white"
    >

      <div
        class="mx-auto max-w-7xl space-y-24 px-4 py-24 sm:px-6 lg:px-8"
      >

        <section
          v-for="section in resourceSections"
          :id="section.id"
          :key="section.id"
        >

          <!-- SECTION HEADER -->
          <div
            class="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          >

            <div class="max-w-2xl">

              <div
                class="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-green-700"
              >
                <component
                  :is="section.icon"
                  :size="18"
                />

                {{ section.eyebrow }}
              </div>

              <h2
                class="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
              >
                {{ section.title }}
              </h2>

              <p
                class="mt-4 text-base leading-7 text-slate-500"
              >
                {{ section.description }}
              </p>

            </div>

            <button
              class="inline-flex items-center gap-2 text-sm font-black text-green-700"
            >
              View All

              <ArrowRight :size="18" />
            </button>

          </div>

          <!-- RESOURCE GRID -->
          <div
            class="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
          >

            <article
              v-for="item in section.items"
              :key="item.title"
              class="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:bg-white hover:shadow-xl"
            >

              <div
                class="absolute right-0 top-0 h-32 w-32 rounded-full bg-green-100/50 blur-3xl transition group-hover:bg-green-200"
              />

              <div class="relative">

                <div
                  class="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-green-400"
                >
                  <CircleCheck :size="20" />
                </div>

                <h3
                  class="mt-8 text-xl font-black leading-tight text-slate-950"
                >
                  {{ item.title }}
                </h3>

                <p
                  class="mt-3 text-sm leading-6 text-slate-500"
                >
                  {{ item.description }}
                </p>

                <div
                  class="mt-7 flex items-center justify-between"
                >

                  <span
                    class="text-[10px] font-black uppercase tracking-widest text-green-700"
                  >
                    Anti-Doping Resource
                  </span>

                  <ChevronRight
                    :size="18"
                    class="text-slate-400 transition group-hover:translate-x-1 group-hover:text-green-700"
                  />

                </div>

              </div>

            </article>

          </div>

        </section>

      </div>

    </section>

    <!-- EDUCATION -->
    <section
      id="education"
      class="bg-slate-950 py-24"
    >

      <div
        class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >

        <div class="max-w-3xl">

          <p
            class="text-xs font-black uppercase tracking-[0.25em] text-green-400"
          >
            Athlete Education
          </p>

          <h2
            class="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl"
          >
            Learn. Understand.
            <span class="text-green-400">
              Play True.
            </span>
          </h2>

          <p
            class="mt-5 text-base leading-8 text-slate-400"
          >
            Knowledge is one of the strongest protections against accidental
            anti-doping violations.
          </p>

        </div>

        <div
          class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
        >

          <article
            v-for="resource in educationalResources"
            :key="resource.title"
            class="group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:-translate-y-2 hover:border-green-400/40 hover:bg-white/10"
          >

            <div
              class="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-400 text-slate-950"
            >
              <component
                :is="resource.icon"
                :size="24"
              />
            </div>

            <h3
              class="mt-8 text-xl font-black text-white"
            >
              {{ resource.title }}
            </h3>

            <p
              class="mt-3 text-sm leading-6 text-slate-400"
            >
              {{ resource.description }}
            </p>

            <button
              class="mt-7 inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-green-400"
            >
              Explore

              <ArrowRight
                :size="16"
                class="transition group-hover:translate-x-1"
              />
            </button>

          </article>

        </div>

      </div>

    </section>

    <!-- NEWS -->
    <section class="py-24">

      <div
        class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >

        <div
          class="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
        >

          <div>

            <p
              class="text-xs font-black uppercase tracking-[0.25em] text-green-700"
            >
              Latest Updates
            </p>

            <h2
              class="mt-3 text-4xl font-black tracking-tight text-slate-950"
            >
              Anti-Doping News
            </h2>

          </div>

          <button
            class="inline-flex items-center gap-2 text-sm font-black text-green-700"
          >
            View All News

            <ArrowRight :size="18" />
          </button>

        </div>

        <div
          class="mt-10 grid gap-6 lg:grid-cols-3"
        >

          <article
            v-for="news in antiDopingNews"
            :key="news.title"
            class="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
          >

            <div class="aspect-[16/10] overflow-hidden">

              <img
                :src="news.image"
                :alt="news.title"
                class="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              >

            </div>

            <div class="p-6">

              <p
                class="text-[10px] font-black uppercase tracking-widest text-green-700"
              >
                {{ news.date }}
              </p>

              <h3
                class="mt-3 text-xl font-black leading-tight text-slate-950"
              >
                {{ news.title }}
              </h3>

              <button
                class="mt-6 inline-flex items-center gap-2 text-sm font-black text-slate-950"
              >
                Read Article

                <ArrowRight
                  :size="17"
                  class="transition group-hover:translate-x-1"
                />
              </button>

            </div>

          </article>

        </div>

      </div>

    </section>

    <!-- FINAL CTA -->
    <section class="px-4 pb-24 sm:px-6 lg:px-8">

      <div
        class="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-green-700 px-6 py-16 sm:px-12 lg:px-20"
      >

        <div
          class="absolute right-0 top-0 h-80 w-80 rounded-full bg-green-400/30 blur-3xl"
        />

        <div class="relative max-w-3xl">

          <div
            class="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white"
          >
            <AlertTriangle :size="25" />
          </div>

          <h2
            class="mt-8 text-4xl font-black tracking-tight text-white sm:text-5xl"
          >
            Clean sport starts with
            every athlete.
          </h2>

          <p
            class="mt-5 text-base leading-8 text-green-50/80 sm:text-lg"
          >
            Stay informed, know the rules and help us protect the integrity
            of Karate Federation of Nigeria (KFN).
          </p>

          <div class="mt-9 flex flex-wrap gap-4">

            <button
              class="rounded-2xl bg-white px-7 py-4 text-sm font-black text-green-800 transition hover:-translate-y-1"
            >
              Explore Anti-Doping Resources
            </button>

            <button
              class="rounded-2xl border border-white/20 bg-white/10 px-7 py-4 text-sm font-black text-white backdrop-blur transition hover:bg-white/20"
            >
              Contact NKF
            </button>

          </div>

        </div>

      </div>

    </section>

  </main>
</template>