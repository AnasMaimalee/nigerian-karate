<script setup lang="ts">
import AboutHero from '~/components/about/AboutHero.vue'
import AboutIntroduction from '~/components/about/AboutIntroduction.vue'
import AboutVisionMission from '~/components/about/AboutVisionMission.vue'
import AboutStatistics from '~/components/about/AboutStatistics.vue'
import AboutTimeline from '~/components/about/AboutTimeline.vue'
import AboutLeadership from '~/components/about/AboutLeadership.vue'
import AboutNationalReach from '~/components/about/AboutNationalReach.vue'
import AboutCTA from '~/components/about/AboutCTA.vue'
</script>

<template>
  <main class="overflow-hidden bg-[#f7f8f7]">

    <!-- HERO -->
    <AboutHero />

    <!-- INTRODUCTION -->
    <AboutIntroduction />

    <!-- STATISTICS -->
    <AboutStatistics />

    <!-- MISSION / VISION -->
    <AboutVisionMission />

    <!-- TIMELINE -->
    <AboutTimeline />

    <!-- LEADERSHIP -->
    <AboutLeadership />

    <!-- NATIONAL REACH -->
    <AboutNationalReach />

    <!-- CTA -->
    <AboutCTA />

  </main>
</template>