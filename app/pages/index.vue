<script setup lang="ts">
import { computed } from 'vue'

import HeroSection from '~/components/home/HeroSection.vue'
import AboutLeadership from '~/components/about/AboutLeadership.vue'
import FederationIntro from '~/components/home/FederationIntro.vue'
import StatisticsSection from '~/components/home/StatisticsSection.vue'
import FeaturedEventSection from '~/components/home/FeaturedEventSection.vue'
import FeaturedAthletesSection from '~/components/home/FeaturedAthletesSection.vue'
import GallerySection from '~/components/home/GallerySection.vue'
import NKFTVSection from '~/components/home/NKFTVSection.vue'
import LatestNewsSection from '~/components/home/LatestNewsSection.vue'
import RankingsPreviewSection from '~/components/home/RankingsPreviewSection.vue'
import JoinKarateSection from '~/components/home/JoinKarateSection.vue'

import { athletes } from '~/data/athletes'
import { events } from '~/data/events'
import { galleryItems } from '~/data/gallery'
import { newsItems } from '~/data/news'
import { rankings } from '~/data/rankings'
import { videos } from '~/data/videos'

/*
|--------------------------------------------------------------------------
| FEATURED EVENT
|--------------------------------------------------------------------------
*/

const featuredEvent = computed(() => {
  return (
    events.find(event => event.status === 'live') ??
    events.find(event => event.status === 'upcoming') ??
    events[0] ??
    null
  )
})

/*
|--------------------------------------------------------------------------
| FEATURED ATHLETES
|--------------------------------------------------------------------------
*/

const featuredAthletes = computed(() => {
  return athletes.slice(0, 4)
})

/*
|--------------------------------------------------------------------------
| FEATURED GALLERY
|--------------------------------------------------------------------------
*/

const featuredGallery = computed(() => {
  return galleryItems.slice(0, 8)
})

/*
|--------------------------------------------------------------------------
| NKF TV
|--------------------------------------------------------------------------
*/

const featuredVideo = computed(() => {
  return videos[0] ?? null
})

const featuredVideos = computed(() => {
  return videos.slice(1, 7)
})

/*
|--------------------------------------------------------------------------
| LATEST NEWS
|--------------------------------------------------------------------------
*/

const featuredNews = computed(() => {
  return newsItems[0] ?? null
})

const latestNews = computed(() => {
  return newsItems.slice(1, 4)
})

/*
|--------------------------------------------------------------------------
| NATIONAL RANKINGS
|--------------------------------------------------------------------------
*/

const topRankings = computed(() => {
  return rankings.slice(0, 3)
})
</script>


<template>
  <main
    class="min-h-screen overflow-hidden bg-background text-foreground"
  >

    <!-- ============================================================
         HERO
    ============================================================ -->

    <HeroSection />


    <!-- ============================================================
         NEWLY ELECTED NKF LEADERSHIP
    ============================================================ -->

    <!-- <AboutLeadership /> -->


    <!-- ============================================================
         FEDERATION INTRODUCTION
    ============================================================ -->

    <section id="federation-intro">
      <FederationIntro />
    </section>


    <!-- ============================================================
         NATIONAL STATISTICS
    ============================================================ -->

    <StatisticsSection />


    <!-- ============================================================
         FEATURED EVENT
    ============================================================ -->

    <FeaturedEventSection
      v-if="featuredEvent"
      :event="featuredEvent"
    />


    <!-- ============================================================
         FEATURED ATHLETES
    ============================================================ -->

    <FeaturedAthletesSection
      :athletes="featuredAthletes"
    />


    <!-- ============================================================
         KARATE GALLERY
    ============================================================ -->

    <GallerySection
      :items="featuredGallery"
    />


    <!-- ============================================================
         NKF TV
    ============================================================ -->

    <NKFTVSection
      v-if="featuredVideo"
      :featured-video="featuredVideo"
      :videos="featuredVideos"
    />


    <!-- ============================================================
         LATEST NEWS
    ============================================================ -->

    <LatestNewsSection
      v-if="featuredNews"
      :featured-news="featuredNews"
      :items="latestNews"
    />


    <!-- ============================================================
         NATIONAL RANKINGS
    ============================================================ -->

    <RankingsPreviewSection
      :athletes="topRankings"
    />


    <!-- ============================================================
         FINAL CALL TO ACTION
    ============================================================ -->

    <JoinKarateSection />

  </main>
</template>