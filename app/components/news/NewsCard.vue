<script setup lang="ts">
import { computed } from 'vue'
import { ArrowUpRight, CalendarDays } from 'lucide-vue-next'

interface NewsItem {
  id?: number | string
  slug?: string
  title?: string
  excerpt?: string
  date?: string
  category?: string
  image?: string
}

const props = defineProps<{
  item?: NewsItem
}>()

const newsItem = computed<NewsItem>(() => {
  return props.item ?? {
    id: 'news',
    slug: 'latest-news',
    title: 'Latest Nigerian Karate News',
    excerpt:
      'Stay informed with the latest news, events and developments from the Nigerian Karate Federation.',
    date: 'Latest Update',
    category: 'News',
    image: ''
  }
})

const newsUrl = computed(() => {
  if (newsItem.value.slug) {
    return `/news/${newsItem.value.slug}`
  }

  if (newsItem.value.id) {
    return `/news/${newsItem.value.id}`
  }

  return '/news'
})
</script>

<template>
  <article
    class="group h-full overflow-hidden rounded-3xl border border-border bg-surface shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl"
  >
    <NuxtLink
      :to="newsUrl"
      class="block h-full"
    >
      <!-- Image -->
      <div class="relative aspect-[16/10] overflow-hidden bg-muted">
        <img
          v-if="newsItem.image"
          :src="newsItem.image"
          :alt="newsItem.title || 'NKF News'"
          class="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        >

        <!-- Fallback -->
        <div
          v-else
          class="flex h-full items-center justify-center bg-gradient-to-br from-primary/20 to-surface-dark"
        >
          <span class="text-4xl font-black text-primary/30">
            NKF
          </span>
        </div>

        <!-- Overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
        />

        <!-- Category -->
        <span
          v-if="newsItem.category"
          class="absolute left-5 top-5 rounded-full bg-primary px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-primary-foreground shadow-lg"
        >
          {{ newsItem.category }}
        </span>
      </div>

      <!-- Content -->
      <div class="flex min-h-[320px] flex-col p-6">
        <!-- Date -->
        <div
          class="flex items-center gap-2 text-xs font-semibold text-muted-foreground"
        >
          <CalendarDays
            :size="15"
            class="text-primary"
          />

          <span>
            {{ newsItem.date || 'Latest Update' }}
          </span>
        </div>

        <!-- Title -->
        <h3
          class="mt-4 text-xl font-black leading-tight tracking-tight text-foreground transition group-hover:text-primary"
        >
          {{ newsItem.title || 'Latest Nigerian Karate News' }}
        </h3>

        <!-- Description -->
        <p
          v-if="newsItem.excerpt"
          class="mt-4 line-clamp-3 text-sm leading-7 text-muted-foreground"
        >
          {{ newsItem.excerpt }}
        </p>

        <!-- Footer -->
        <div
          class="mt-auto flex items-center justify-between pt-7"
        >
          <span
            class="text-xs font-black uppercase tracking-widest text-primary"
          >
            Read Story
          </span>

          <span
            class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
          >
            <ArrowUpRight :size="18" />
          </span>
        </div>
      </div>
    </NuxtLink>
  </article>
</template>