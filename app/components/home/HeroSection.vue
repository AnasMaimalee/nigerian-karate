<script setup lang="ts">
import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-vue-next'

import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref,
} from 'vue'

/*
|--------------------------------------------------------------------------
| KFN HERO LEADERSHIP CAROUSEL
|--------------------------------------------------------------------------
|
| All images come directly from:
|
| public/images/staff/
|
|--------------------------------------------------------------------------
*/

interface HeroLeader {
  image: string
  name: string
  role: string
  description: string
}

/*
|--------------------------------------------------------------------------
| LEADERSHIP SLIDES
|--------------------------------------------------------------------------
|
| The descriptions are written around each person's official role
| and responsibilities without inventing specific achievements.
|
|--------------------------------------------------------------------------
*/

const slides: HeroLeader[] = [
  {
    image: '/images/staff/president.jpg',
    name: 'Engr. Dr Chukwudi Dimkpa FNSE',
    role: 'President',
    description:
      'Providing strategic leadership and direction for the Karate Federation of Nigeria while driving the development and growth of the sport across the country.',
  },

  {
    image: '/images/staff/vice-president.jpg',
    name: 'DR (Alh) Bashir Maizare',
    role: '1st Vice President',
    description:
      'Supporting the federation’s leadership and contributing to effective administration, coordination and continued development of Karate in Nigeria.',
  },

  {
    image: '/images/staff/AFFAN Rep.jpg',
    name: 'Hajiya Zanian Saleh',
    role: 'AFFAN Representative',
    description:
      'Representing the interests of the federation through national stakeholder engagement and strengthening collaboration within Nigeria’s sporting community.',
  },

  {
    image: '/images/staff/shariff.jpeg',
    name: 'Dr. Mustapha Sharif Ramadan',
    role: 'Chairman, Publicity ICT & Media Technical Support',
    description:
      'Supporting the federation through publicity, information technology and media coordination while helping connect the federation with athletes, supporters and the wider public.',
  },

  {
    image: '/images/staff/agaras.jpeg',
    name: 'H.E Silas A. Agara',
    role: 'UFAK African 4th Vice President',
    description:
      'Providing continental leadership and representation while strengthening Nigeria’s connection with the wider African Karate community.',
  },

  {
    image: '/images/staff/kehinde fausari north central rep.jpg',
    name: 'Kehinde Fausari Yetunde Dehinde',
    role: 'North Central Representative',
    description:
      'Representing the North Central region and supporting stronger participation, coordination and development of Karate across the region.',
  },

  {
    image: '/images/staff/jede.jpeg',
    name: 'Mr. Dave Jegede (Shihan)',
    role: 'KFN Technical Director',
    description:
      'Providing technical direction and supporting the development of athletes, coaches and competitive Karate standards within the federation.',
  },

  {
    image: '/images/staff/sport-chairman.webp',
    name: 'Shehu Dikko',
    role: 'Chairman, National Sports Commission',
    description:
      'Providing leadership within Nigeria’s national sports administration and supporting the broader development and organisation of sport in the country.',
  },

  {
    image: '/images/staff/bukola-olopade.webp',
    name: 'Hon. Bukola Olopade',
    role: 'Director General, National Sports Commission',
    description:
      'Leading the administrative direction of the national sports system and supporting initiatives that contribute to the advancement of Nigerian sport.',
  },

  {
    image: '/images/staff/suzuki.png',
    name: 'His Excellency Suzuki Hideo',
    role: 'Japanese Ambassador to Nigeria',
    description:
      'Representing Japan in Nigeria and contributing to the diplomatic relationship and international cooperation that can strengthen sporting and cultural connections.',
  },
]

/*
|--------------------------------------------------------------------------
| CAROUSEL STATE
|--------------------------------------------------------------------------
*/

const currentSlide = ref(0)

const touchStartX = ref(0)
const touchEndX = ref(0)

let carouselTimer: ReturnType<typeof setInterval> | null = null

/*
|--------------------------------------------------------------------------
| CURRENT SLIDE
|--------------------------------------------------------------------------
*/

const currentLeader = computed(() => {
  return slides[currentSlide.value] ?? slides[0]
})

/*
|--------------------------------------------------------------------------
| NEXT SLIDE
|--------------------------------------------------------------------------
*/

const nextSlide = () => {
  currentSlide.value =
    (currentSlide.value + 1) % slides.length
}

/*
|--------------------------------------------------------------------------
| PREVIOUS SLIDE
|--------------------------------------------------------------------------
*/

const previousSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + slides.length) %
    slides.length
}

/*
|--------------------------------------------------------------------------
| GO TO SLIDE
|--------------------------------------------------------------------------
*/

const goToSlide = (index: number) => {
  if (
    index < 0 ||
    index >= slides.length
  ) {
    return
  }

  currentSlide.value = index

  restartCarousel()
}

/*
|--------------------------------------------------------------------------
| START AUTOMATIC CAROUSEL
|--------------------------------------------------------------------------
|
| IMPORTANT:
| The carousel does NOT pause on mouse hover.
|
| It will continue moving automatically.
|
|--------------------------------------------------------------------------
*/

const startCarousel = () => {
  stopCarousel()

  carouselTimer = setInterval(() => {
    nextSlide()
  }, 5000)
}

/*
|--------------------------------------------------------------------------
| STOP CAROUSEL
|--------------------------------------------------------------------------
*/

const stopCarousel = () => {
  if (carouselTimer) {
    clearInterval(carouselTimer)
    carouselTimer = null
  }
}

/*
|--------------------------------------------------------------------------
| RESTART AFTER MANUAL CONTROL
|--------------------------------------------------------------------------
*/

const restartCarousel = () => {
  startCarousel()
}

/*
|--------------------------------------------------------------------------
| TOUCH START
|--------------------------------------------------------------------------
*/

const handleTouchStart = (event: TouchEvent) => {
  if (!event.touches.length) return

  touchStartX.value =
    event.touches[0].clientX

  touchEndX.value =
    event.touches[0].clientX
}

/*
|--------------------------------------------------------------------------
| TOUCH MOVE
|--------------------------------------------------------------------------
*/

const handleTouchMove = (event: TouchEvent) => {
  if (!event.touches.length) return

  touchEndX.value =
    event.touches[0].clientX
}

/*
|--------------------------------------------------------------------------
| TOUCH END
|--------------------------------------------------------------------------
*/

const handleTouchEnd = () => {
  const distance =
    touchStartX.value -
    touchEndX.value

  const minimumSwipeDistance = 50

  /*
   * Swipe left
   */
  if (distance > minimumSwipeDistance) {
    nextSlide()
    restartCarousel()
  }

  /*
   * Swipe right
   */
  if (distance < -minimumSwipeDistance) {
    previousSlide()
    restartCarousel()
  }

  touchStartX.value = 0
  touchEndX.value = 0
}

/*
|--------------------------------------------------------------------------
| KEYBOARD CONTROL
|--------------------------------------------------------------------------
*/

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'ArrowRight') {
    nextSlide()
    restartCarousel()
  }

  if (event.key === 'ArrowLeft') {
    previousSlide()
    restartCarousel()
  }
}

/*
|--------------------------------------------------------------------------
| LIFECYCLE
|--------------------------------------------------------------------------
*/

onMounted(() => {
  startCarousel()

  window.addEventListener(
    'keydown',
    handleKeydown
  )
})

onBeforeUnmount(() => {
  stopCarousel()

  window.removeEventListener(
    'keydown',
    handleKeydown
  )
})
</script>

<template>
  <!-- =========================================================
       KFN LEADERSHIP HERO
  ========================================================== -->

  <section
    class="relative h-[calc(100vh-196px)] min-h-[620px] w-full overflow-hidden bg-[#020805] sm:min-h-[680px] lg:h-[780px]"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >

    <!-- =======================================================
         BACKGROUND BLURRED IMAGE
         
         This creates a premium background using the same
         photograph without cropping the main portrait.
    ======================================================== -->

    <Transition
      mode="out-in"
      enter-active-class="transition-opacity duration-1000 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-700 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >

      <div
        :key="`background-${currentLeader.image}`"
        class="absolute inset-0 overflow-hidden"
      >

        <img
          :src="currentLeader.image"
          alt=""
          aria-hidden="true"
          class="absolute inset-[-10%] h-[120%] w-[120%] scale-110 object-cover object-center blur-3xl"
        />

        <div
          class="absolute inset-0 bg-[#06130b]/65"
        />

      </div>

    </Transition>

    <!-- =======================================================
         MAIN IMAGE
         
         object-contain ensures that the person's head,
         shoulders and body are not unnecessarily cropped.
    ======================================================== -->

    <Transition
      mode="out-in"
      enter-active-class="transition-opacity duration-1000 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-700 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >

      <div
        :key="`main-${currentLeader.image}`"
        class="absolute inset-0 flex items-center justify-center"
      >

        <img
          :src="currentLeader.image"
          :alt="currentLeader.name"
          class="h-full w-full object-contain object-center"
        />

      </div>

    </Transition>

    <!-- =======================================================
         DARK CINEMATIC OVERLAY
    ======================================================== -->

    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#020805]/75 via-transparent to-[#020805]/35"
    />

    <!-- =======================================================
         BOTTOM GRADIENT
    ======================================================== -->

    <div
      class="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-[#020805] via-[#020805]/45 to-transparent"
    />

    <!-- =======================================================
         GREEN CINEMATIC GLOW
    ======================================================== -->

    <div
      class="pointer-events-none absolute bottom-[-180px] right-[-100px] h-[500px] w-[500px] rounded-full bg-green-500/15 blur-[120px]"
    />

    <!-- =======================================================
         TEXT INFORMATION
         
         This changes automatically with every image.
    ======================================================== -->

    <Transition
      mode="out-in"
      enter-active-class="transition-all duration-700 ease-out"
      enter-from-class="translate-y-5 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-3 opacity-0"
    >

      <div
        :key="`text-${currentLeader.image}`"
        class="absolute bottom-24 left-0 right-0 z-20"
      >

        <div
          class="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12"
        >

          <div
            class="max-w-3xl"
          >

            <!-- =================================================
                 CATEGORY
            ================================================== -->

            <div
              class="mb-4 flex items-center gap-3"
            >

              <span
                class="h-1 w-10 rounded-full bg-green-400"
              />

              <span
                class="text-[10px] font-black uppercase tracking-[0.25em] text-green-300 sm:text-xs"
              >
                Karate Federation of Nigeria
              </span>

            </div>

            <!-- =================================================
                 NAME
            ================================================== -->

            <h2
              class="text-3xl font-black leading-[1.05] tracking-tight text-white drop-shadow-2xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
              {{ currentLeader.name }}
            </h2>

            <!-- =================================================
                 ROLE
            ================================================== -->

            <p
              class="mt-3 text-base font-black uppercase tracking-wide text-green-400 sm:text-lg"
            >
              {{ currentLeader.role }}
            </p>

            <!-- =================================================
                 DESCRIPTION
            ================================================== -->

            <p
              class="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8"
            >
              {{ currentLeader.description }}
            </p>

          </div>

        </div>

      </div>

    </Transition>

    <!-- =======================================================
         PREVIOUS BUTTON
    ======================================================== -->

    <button
      type="button"
      aria-label="Previous leadership image"
      class="absolute left-4 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white shadow-2xl backdrop-blur-md transition duration-300 hover:border-green-400 hover:bg-green-500 sm:left-7 sm:h-14 sm:w-14"
      @click.stop="previousSlide(); restartCarousel()"
    >

      <ChevronLeft
        :size="24"
      />

    </button>

    <!-- =======================================================
         NEXT BUTTON
    ======================================================== -->

    <button
      type="button"
      aria-label="Next leadership image"
      class="absolute right-4 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white shadow-2xl backdrop-blur-md transition duration-300 hover:border-green-400 hover:bg-green-500 sm:right-7 sm:h-14 sm:w-14"
      @click.stop="nextSlide(); restartCarousel()"
    >

      <ChevronRight
        :size="24"
      />

    </button>

    <!-- =======================================================
         SLIDE INDICATORS
    ======================================================== -->

    <div
      class="absolute bottom-8 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/15 bg-black/35 px-4 py-3 shadow-xl backdrop-blur-md"
    >

      <button
        v-for="(slide, index) in slides"
        :key="slide.image"
        type="button"
        :aria-label="`Show ${slide.name}`"
        class="h-2 rounded-full transition-all duration-300"
        :class="
          currentSlide === index
            ? 'w-8 bg-green-400'
            : 'w-2 bg-white/35 hover:bg-white/70'
        "
        @click.stop="goToSlide(index)"
      />

    </div>

    <!-- =======================================================
         SLIDE NUMBER
    ======================================================== -->

    <div
      class="absolute bottom-9 right-7 z-40 hidden text-right md:block"
    >

      <div
        class="text-2xl font-black tabular-nums text-white"
      >
        {{ String(currentSlide + 1).padStart(2, '0') }}
      </div>

      <div
        class="text-[9px] font-black uppercase tracking-[0.25em] text-white/40"
      >
        / {{ String(slides.length).padStart(2, '0') }}
      </div>

    </div>

  </section>
</template>