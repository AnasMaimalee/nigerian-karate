<script setup lang="ts">
import { computed } from 'vue'
import { ArrowUpRight, CalendarDays, Clock3, Newspaper, Tag } from 'lucide-vue-next'

interface NewsItem {
  id: number | string
  title: string
  slug?: string
  excerpt?: string
  image?: string
  category?: string
  date?: string
  readTime?: string
}

const props = defineProps<{
  news: NewsItem
}>()

const formattedDate = computed(() => {
  if (!props.news?.date) return ''

  const date = new Date(props.news.date)

  if (Number.isNaN(date.getTime())) return props.news.date

  return new Intl.DateTimeFormat('en-NG', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date)
})

const newsUrl = computed(() => {
  if (props.news?.slug) return `/news/${props.news.slug}`

  return '/news'
})
</script>

<template>
  <article v-if="news" class="group relative overflow-hidden rounded-[2rem] border border-border bg-white shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-2xl">
    <div class="grid lg:grid-cols-[1.3fr_0.9fr]">
      <NuxtLink :to="newsUrl" class="relative block min-h-[320px] overflow-hidden bg-surface-dark sm:min-h-[430px] lg:min-h-full">
        <img v-if="news.image" :src="news.image" :alt="news.title" class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />

        <div v-else class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary via-primary-dark to-surface-dark">
          <Newspaper :size="60" class="text-white/30" />
        </div>

        <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent lg:bg-gradient-to-r lg:from-black/10 lg:via-transparent lg:to-black/50"></div>

        <div class="absolute left-5 top-5 flex flex-wrap items-center gap-3 sm:left-7 sm:top-7">
          <span v-if="news.category" class="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white shadow-lg shadow-primary/30">
            <Tag :size="13" />
            {{ news.category }}
          </span>

          <span class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white backdrop-blur-md">
            <Newspaper :size="13" />
            NKF News
          </span>
        </div>

        <div class="absolute bottom-0 left-0 right-0 p-6 text-white lg:hidden">
          <h2 class="max-w-2xl text-2xl font-black leading-tight tracking-tight sm:text-3xl">
            {{ news.title }}
          </h2>
        </div>
      </NuxtLink>

      <div class="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
        <div class="flex flex-wrap items-center gap-4 text-xs font-semibold text-muted">
          <span v-if="formattedDate" class="inline-flex items-center gap-2">
            <CalendarDays :size="15" class="text-primary" />
            {{ formattedDate }}
          </span>

          <span v-if="news.readTime" class="inline-flex items-center gap-2">
            <Clock3 :size="15" class="text-primary" />
            {{ news.readTime }} read
          </span>
        </div>

        <NuxtLink :to="newsUrl" class="mt-6 block">
          <h2 class="text-3xl font-black leading-tight tracking-tight text-foreground transition duration-300 group-hover:text-primary sm:text-4xl">
            {{ news.title }}
          </h2>
        </NuxtLink>

        <p v-if="news.excerpt" class="mt-5 text-sm leading-7 text-muted sm:text-base">
          {{ news.excerpt }}
        </p>

        <NuxtLink :to="newsUrl" class="mt-8 inline-flex w-fit items-center gap-3 rounded-2xl bg-primary px-6 py-4 text-sm font-black text-white shadow-xl shadow-primary/20 transition duration-300 hover:-translate-y-1 hover:bg-primary-dark">
          Read Full Story
          <ArrowUpRight :size="18" class="transition duration-300 group-hover:rotate-45" />
        </NuxtLink>
      </div>
    </div>
  </article>
</template>