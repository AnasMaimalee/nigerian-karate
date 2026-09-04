<script setup lang="ts">
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Eye,
  Heart,
  Share2,
  ThumbsUp,
  Newspaper,
  Check,
  Facebook,
  Linkedin,
  Link,
  X
} from 'lucide-vue-next'

definePageMeta({
  title: 'News Article | Karate Federation of Nigeria (KFN) Federation'
})

interface NewsItem {
  id: number
  title: string
  slug: string
  excerpt: string
  image: string
  category: string
  date: string
  readTime: string
  reads: number
  likes: number
  content: string[]
}

const route = useRoute()

/*
|--------------------------------------------------------------------------
| NEWS DATA
|--------------------------------------------------------------------------
*/

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'Karate Federation of Nigeria (KFN)Announces New Era of Athlete Development',
    slug: 'new-era-athlete-development',
    category: 'Federation',
    image:
      'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1800&q=90',
    excerpt:
      'The Karate Federation of Nigeria (KFN)continues its commitment to developing elite athletes, strengthening grassroots programmes and creating new opportunities for karate practitioners across Nigeria.',
    date: '2026-08-28',
    readTime: '4 min',
    reads: 2840,
    likes: 326,
    content: [
      'The Karate Federation of Nigeria (KFN)has announced a renewed commitment to athlete development as part of its long-term vision for strengthening karate across the country.',

      'The initiative focuses on creating better opportunities for athletes at different levels of development, from grassroots programmes to elite national competition.',

      'Through improved training structures, technical development programmes and stronger cooperation with coaches and state associations, the federation aims to create a sustainable pathway for Karate Federation of Nigeria (KFN) athletes.',

      'Officials believe that consistent athlete development is essential to building a stronger future for Karate Federation of Nigeria (KFN) and improving the country’s presence in international competition.',

      'The federation will continue working with athletes, coaches, technical officials and stakeholders to identify opportunities that support the growth of the sport across Nigeria.'
    ]
  },

  {
    id: 2,
    title: 'National Karate Championship Preparations Enter Final Stage',
    slug: 'national-championship-preparations',
    category: 'Championship',
    image:
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1800&q=90',
    excerpt:
      'Athletes, officials and organisers are preparing for one of the biggest karate competitions of the year.',
    date: '2026-08-24',
    readTime: '3 min',
    reads: 1920,
    likes: 214,
    content: [
      'Preparations for the upcoming National Karate Championship have entered their final stage as athletes and officials complete their arrangements.',

      'The competition is expected to bring together karate practitioners from different states across Nigeria in a celebration of discipline, excellence and sporting achievement.',

      'Organisers are working closely with technical officials to ensure that the championship is delivered according to recognised competition standards.',

      'For many athletes, the championship will provide an important opportunity to demonstrate their development and compete against some of the strongest karatekas in the country.'
    ]
  },

  {
    id: 3,
    title: 'Young Karate Federation of Nigeria (KFN) Athletes Shine at Development Camp',
    slug: 'young-athletes-development-camp',
    category: 'Athletes',
    image:
      'https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=1800&q=90',
    excerpt:
      'The next generation of Karate Federation of Nigeria (KFN) athletes continues to demonstrate discipline, determination and remarkable potential.',
    date: '2026-08-20',
    readTime: '5 min',
    reads: 1750,
    likes: 188,
    content: [
      'Young Karate Federation of Nigeria (KFN) athletes demonstrated impressive discipline and determination during a recent development programme.',

      'The camp focused on improving technical skills, physical preparation and understanding of competitive karate.',

      'Coaches worked closely with participants to help identify areas for improvement while encouraging the values of discipline, respect and perseverance.',

      'The development of young athletes remains an important part of the federation’s vision for building a sustainable future for Karate Federation of Nigeria (KFN).'
    ]
  },

  {
    id: 4,
    title: 'NKF Strengthens Technical Development Across Nigeria',
    slug: 'nkf-technical-development',
    category: 'Development',
    image:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1800&q=90',
    excerpt:
      'New technical programmes are helping coaches, officials and athletes improve their skills across Nigeria.',
    date: '2026-08-16',
    readTime: '4 min',
    reads: 2100,
    likes: 241,
    content: [
      'The Karate Federation of Nigeria (KFN)continues to strengthen technical development programmes across the country.',

      'New initiatives are focused on supporting coaches, athletes and technical officials with improved knowledge and practical experience.',

      'The federation believes that strong technical development is essential for improving the overall standard of karate in Nigeria.',

      'Through continued education and collaboration, the federation hopes to create stronger systems that support the long-term development of the sport.'
    ]
  },

  {
    id: 5,
    title: 'Karate Federation of Nigeria (KFN) Delegation Prepares for International Competition',
    slug: 'nigerian-karate-international-competition',
    category: 'International',
    image:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1800&q=90',
    excerpt:
      'Nigeria’s top karate athletes are preparing to represent the country at an upcoming international competition.',
    date: '2026-08-12',
    readTime: '4 min',
    reads: 2640,
    likes: 309,
    content: [
      'Nigeria’s leading karate athletes are preparing for an important international competition.',

      'The delegation has continued its training programme as athletes focus on technical preparation, physical conditioning and competition readiness.',

      'Representing Nigeria internationally remains an important responsibility for the athletes and the federation.',

      'The competition will provide another opportunity for Karate Federation of Nigeria (KFN) to demonstrate its continued growth on the international stage.'
    ]
  },

  {
    id: 6,
    title: 'Federation Announces New Grassroots Karate Initiative',
    slug: 'nkf-expands-grassroots-development',
    category: 'Federation',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1800&q=90',
    excerpt:
      'The Karate Federation of Nigeria (KFN)continues to expand opportunities for young athletes through grassroots development.',
    date: '2026-08-08',
    readTime: '3 min',
    reads: 2240,
    likes: 271,
    content: [
      'The Karate Federation of Nigeria (KFN)has announced a new initiative focused on strengthening grassroots karate development across the country.',

      'The programme aims to introduce more young people to karate while creating stronger development pathways for athletes with competitive potential.',

      'Grassroots development remains one of the most important foundations for the future growth of Karate Federation of Nigeria (KFN).',

      'The federation will lore.100  continue working with coaches, clubs and state associations to create more opportunities for participation and athlete development.',
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi',
 
     'Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem',

     'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut'
    ]
  },

  {
    id: 7,
    title: 'Elite Athletes Complete Intensive National Training Programme',
    slug: 'enkf-expands-grassroots-development',
    category: 'Athletes',
    image:
      'https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&w=1800&q=90',
    excerpt:
      'Nigeria’s elite karate athletes complete another intensive stage of preparation and technical development.',
    date: '2026-08-03',
    readTime: '5 min',
    reads: 1890,
    likes: 223,
    content: [
      'Nigeria’s elite karate athletes have completed another stage of intensive national preparation.',

      'The programme focused on technical improvement, physical conditioning and competition strategy.',

      'Coaches monitored athlete performance throughout the training period and identified areas requiring further development.',

      'The programme forms part of the federation’s broader commitment to preparing Nigerian athletes for major competitions.'
    ]
  },

  {
    id: 8,
    title: 'Coaches Participate in Advanced Karate Technical Seminar',
    slug: 'nkf-expands-grassroots-development',
    category: 'Development',
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=90',
    excerpt:
      'Karate coaches from different parts of Nigeria participated in an advanced technical development seminar.',
    date: '2026-07-29',
    readTime: '4 min',
    reads: 1420,
    likes: 176,
    content: [
      'Karate coaches from different parts of Nigeria participated in an advanced technical development seminar.',

      'The programme provided an opportunity for coaches to discuss modern training methods and technical development.',

      'Continuous coach education is considered essential to improving athlete performance and strengthening karate development nationwide.',

      'The federation will continue supporting initiatives that improve knowledge and professional development within the karate community.'
    ]
  },

  {
    id: 9,
    title: 'Nigeria Strengthens Presence in Global Karate Community',
    slug: 'nigeria-global-karate-community',
    category: 'International',
    image:
      'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1800&q=90',
    excerpt:
      'The federation continues to build stronger relationships and opportunities within the international karate community.',
    date: '2026-07-24',
    readTime: '3 min',
    reads: 2010,
    likes: 255,
    content: [
      'Nigeria continues to strengthen its relationship with the global karate community.',

      'International cooperation provides important opportunities for athletes, coaches and technical officials.',

      'The federation remains committed to expanding opportunities that allow Karate Federation of Nigeria (KFN) practitioners to participate in international development and competition.',

      'These relationships will continue playing an important role in the future growth of karate in Nigeria.'
    ]
  },

  {
    id: 10,
    title: 'National Referees Gather for Rules and Officiating Workshop',
    slug: 'national-referees-workshop',
    category: 'Development',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1800&q=90',
    excerpt:
      'Technical officials gathered for a workshop focused on improving officiating standards and consistency.',
    date: '2026-07-18',
    readTime: '4 min',
    reads: 1670,
    likes: 194,
    content: [
      'National karate referees gathered for a workshop focused on improving officiating standards.',

      'Participants discussed competition rules, decision-making and consistency in officiating.',

      'Technical officials play an important role in ensuring fair and professionally managed competitions.',

      'The workshop forms part of continuing efforts to strengthen technical standards within Karate Federation of Nigeria (KFN).'
    ]
  }
]

/*
|--------------------------------------------------------------------------
| ARTICLE
|--------------------------------------------------------------------------
*/

const article = computed(() => {
  return newsItems.find(
    item => item.slug === route.params.slug
  )
})

/*
|--------------------------------------------------------------------------
| 404
|--------------------------------------------------------------------------
*/

if (!article.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'News article not found'
  })
}

/*
|--------------------------------------------------------------------------
| RELATED NEWS
|--------------------------------------------------------------------------
*/

const relatedNews = computed(() => {
  return newsItems
    .filter(item =>
      item.slug !== article.value?.slug
    )
    .sort((a, b) => {
      const aSameCategory =
        a.category === article.value?.category ? 1 : 0

      const bSameCategory =
        b.category === article.value?.category ? 1 : 0

      return bSameCategory - aSameCategory
    })
    .slice(0, 3)
})

/*
|--------------------------------------------------------------------------
| DATE
|--------------------------------------------------------------------------
*/

const formattedDate = computed(() => {
  if (!article.value) return ''

  return new Date(article.value.date).toLocaleDateString(
    'en-NG',
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }
  )
})

/*
|--------------------------------------------------------------------------
| LIKES
|--------------------------------------------------------------------------
*/

const liked = ref(false)

const likes = ref(article.value.likes)

const toggleLike = () => {
  liked.value = !liked.value

  likes.value += liked.value ? 1 : -1
}

/*
|--------------------------------------------------------------------------
| SHARE
|--------------------------------------------------------------------------
*/

const copied = ref(false)

const shareArticle = async () => {
  if (!article.value) return

  const url = window.location.href

  if (navigator.share) {
    try {
      await navigator.share({
        title: article.value.title,
        text: article.value.excerpt,
        url
      })

      return
    } catch {
      //
    }
  }

  await navigator.clipboard.writeText(url)

  copied.value = true

  setTimeout(() => {
    copied.value = false
  }, 2500)
}

const copyLink = async () => {
  await navigator.clipboard.writeText(
    window.location.href
  )

  copied.value = true

  setTimeout(() => {
    copied.value = false
  }, 2500)
}

useHead(() => ({
  title: `${article.value?.title} | Karate Federation of Nigeria (KFN) Federation`,
  meta: [
    {
      name: 'description',
      content: article.value?.excerpt
    }
  ]
}))

</script>

<template>
<div class="min-h-screen overflow-hidden bg-background text-foreground">
    <!-- <HeroSection /> -->
    <main v-if="article" class="bg-surface">
  
      <!-- ========================================================= -->
      <!-- ARTICLE HERO -->
      <!-- ========================================================= -->
  
      <section
        class="relative isolate overflow-hidden bg-surface-dark text-white"
      >
        <!-- Background -->
        <div
          class="pointer-events-none absolute inset-0"
        >
          <img
            :src="article.image"
            :alt="article.title"
            class="h-full w-full object-cover opacity-[0.14]"
          />
  
          <div
            class="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/95 to-surface-dark/75"
          />
  
          <div
            class="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-black/30"
          />
  
          <div
            class="absolute -left-40 top-0 h-[40rem] w-[40rem] rounded-full bg-primary/20 blur-3xl"
          />
  
          <div
            class="absolute -right-40 bottom-0 h-[40rem] w-[40rem] rounded-full bg-primary/10 blur-3xl"
          />
        </div>
  
        <div
          class="container-nkf relative z-10 py-12 sm:py-16 lg:py-24"
        >
          <!-- BACK -->
          <NuxtLink
            to="/news"
            class="group inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-white/50 transition hover:text-white"
          >
            <span
              class="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition group-hover:border-primary/50 group-hover:bg-primary"
            >
              <ArrowLeft
                :size="17"
                class="transition group-hover:-translate-x-1"
              />
            </span>
  
            Back to News Centre
          </NuxtLink>
  
          <div
            class="mt-16 max-w-5xl"
          >
            <!-- CATEGORY -->
            <div
              class="inline-flex items-center gap-3 border-l-4 border-primary pl-4"
            >
              <span
                class="text-[10px] font-black uppercase tracking-[0.28em] text-primary-light"
              >
                {{ article.category }}
              </span>
  
              <span
                class="h-1 w-1 rounded-full bg-white/30"
              />
  
              <span
                class="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40"
              >
                Karate Federation of Nigeria (KFN) Federation
              </span>
            </div>
  
            <!-- TITLE -->
            <h1
              class="mt-8 text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-7xl xl:text-8xl"
            >
              {{ article.title }}
            </h1>
  
            <!-- EXCERPT -->
            <p
              class="mt-8 max-w-3xl text-base leading-8 text-white/60 sm:text-lg lg:text-xl lg:leading-9"
            >
              {{ article.excerpt }}
            </p>
  
            <!-- META -->
            <div
              class="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-white/10 pt-7"
            >
              <div
                class="flex items-center gap-3"
              >
                <CalendarDays
                  :size="17"
                  class="text-primary-light"
                />
  
                <span
                  class="text-xs font-bold text-white/60"
                >
                  {{ formattedDate }}
                </span>
              </div>
  
              <div
                class="flex items-center gap-3"
              >
                <Clock3
                  :size="17"
                  class="text-primary-light"
                />
  
                <span
                  class="text-xs font-bold text-white/60"
                >
                  {{ article.readTime }} read
                </span>
              </div>
  
              <div
                class="flex items-center gap-3"
              >
                <Eye
                  :size="17"
                  class="text-primary-light"
                />
  
                <span
                  class="text-xs font-bold text-white/60"
                >
                  {{ article.reads.toLocaleString() }} total reads
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- ========================================================= -->
      <!-- FEATURE IMAGE -->
      <!-- ========================================================= -->
  
      <section
        class="relative -mt-1 bg-surface-dark pb-12 sm:pb-16"
      >
        <div
          class="container-nkf"
        >
          <div
            class="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl"
          >
            <img
              :src="article.image"
              :alt="article.title"
              class="h-[320px] w-full object-cover sm:h-[500px] lg:h-[680px]"
            />
  
            <div
              class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
            />
  
            <!-- Image label -->
            <div
              class="absolute bottom-0 left-0 right-0 p-6 sm:p-8"
            >
              <span
                class="text-[10px] font-black uppercase tracking-[0.25em] text-white/50"
              >
                Karate Federation of Nigeria (KFN)News
              </span>
            </div>
          </div>
        </div>
      </section>
  
      <!-- ========================================================= -->
      <!-- ARTICLE CONTENT -->
      <!-- ========================================================= -->
  
     <!-- ARTICLE -->
  <section class="bg-[#F5F6F3] py-16 sm:py-20 lg:py-24">
    <div class="container-nkf">
  
      <div class="mx-auto max-w-3xl">
  
        <!-- ARTICLE LABEL -->
        <div class="mb-10 flex items-center gap-4">
          <span class="h-px w-10 bg-[#006B4F]" />
  
          <span
            class="text-[10px] font-black uppercase tracking-[0.28em] text-[#006B4F]"
          >
            The Full Story
          </span>
        </div>
  
        <!-- ARTICLE CONTENT -->
        <article>
          <p
            v-for="(paragraph, index) in article.content"
            :key="index"
            class="mb-8 text-[17px] leading-8 text-[#37413C] last:mb-0 sm:text-[18px] sm:leading-9"
          >
            {{ paragraph }}
          </p>
        </article>
  
        <!-- DIVIDER -->
        <div class="my-14 h-px w-full bg-[#DDE2DD]" />
  
        <!-- REACTION CARD -->
        <div
          class="rounded-[1.75rem] border border-[#DDE2DD] bg-white p-6 shadow-[0_15px_50px_rgba(23,33,29,0.08)] sm:p-7"
        >
          <div
            class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <!-- TEXT -->
            <div>
              <span
                class="text-[10px] font-black uppercase tracking-[0.22em] text-[#006B4F]"
              >
                Your Reaction
              </span>
  
              <h3
                class="mt-3 text-xl font-black tracking-tight text-[#17211D] sm:text-2xl"
              >
                Did you find this story interesting?
              </h3>
  
              <p
                class="mt-2 text-sm leading-6 text-[#66706B]"
              >
                Follow the latest updates from Karate Federation of Nigeria (KFN).
              </p>
            </div>
  
            <!-- ACTIONS -->
            <div class="flex shrink-0 items-center gap-3">
  
              <!-- LIKE -->
              <button
                class="inline-flex h-12 items-center gap-2 rounded-xl border border-[#DDE2DD] bg-[#F8F9F7] px-4 text-sm font-black text-[#17211D] transition hover:border-[#006B4F] hover:bg-[#EAF4EF] hover:text-[#006B4F]"
                aria-label="Like article"
              >
                <ThumbsUp :size="17" />
  
                <span>{{ article.likes || 271 }}</span>
  
                <span class="text-[#66706B]">
                  Likes
                </span>
              </button>
  
              <!-- SHARE -->
              <button
                class="inline-flex h-12 items-center gap-2 rounded-xl bg-[#006B4F] px-5 text-sm font-black text-white shadow-[0_10px_25px_rgba(0,107,79,0.20)] transition hover:-translate-y-0.5 hover:bg-[#00563F]"
                aria-label="Share article"
                @click="shareArticle"
              >
                <Share2 :size="17" />
  
                Share
              </button>
  
            </div>
          </div>
        </div>
  
        <!-- SHARE VIA -->
        <div class="mt-8">
  
          <span
            class="text-[10px] font-black uppercase tracking-[0.22em] text-[#66706B]"
          >
            Share Via
          </span>
  
          <div class="mt-4 flex flex-wrap items-center gap-3">
  
            <!-- FACEBOOK -->
            <button
              class="flex h-11 w-11 items-center justify-center rounded-xl border border-[#DDE2DD] bg-white text-[#17211D] transition hover:-translate-y-1 hover:border-[#006B4F] hover:text-[#006B4F]"
              aria-label="Share on Facebook"
            >
              <Facebook :size="18" />
            </button>
  
            <!-- X -->
            <button
              class="flex h-11 w-11 items-center justify-center rounded-xl border border-[#DDE2DD] bg-white text-[#17211D] transition hover:-translate-y-1 hover:border-[#006B4F] hover:text-[#006B4F]"
              aria-label="Share on X"
            >
              <Twitter :size="18" />
            </button>
  
            <!-- LINKEDIN -->
            <button
              class="flex h-11 w-11 items-center justify-center rounded-xl border border-[#DDE2DD] bg-white text-[#17211D] transition hover:-translate-y-1 hover:border-[#006B4F] hover:text-[#006B4F]"
              aria-label="Share on LinkedIn"
            >
              <Linkedin :size="18" />
            </button>
  
            <!-- COPY LINK -->
            <button
              class="inline-flex h-11 items-center gap-2 rounded-xl border border-[#DDE2DD] bg-white px-4 text-xs font-black text-[#17211D] transition hover:-translate-y-0.5 hover:border-[#006B4F] hover:text-[#006B4F]"
              @click="copyArticleLink"
            >
              <Link :size="16" />
  
              Copy Link
            </button>
  
          </div>
        </div>
  
      </div>
  
      <!-- RELATED NEWS -->
      <div
        v-if="relatedNews.length"
        class="mt-24"
      >
        <div
          class="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <div class="flex items-center gap-3">
              <span class="h-px w-8 bg-[#006B4F]" />
  
              <span
                class="text-[10px] font-black uppercase tracking-[0.25em] text-[#006B4F]"
              >
                Continue Reading
              </span>
            </div>
  
            <h2
              class="mt-5 text-3xl font-black tracking-tight text-[#17211D] sm:text-4xl"
            >
              Related News
            </h2>
          </div>
  
          <NuxtLink
            to="/news"
            class="group inline-flex items-center gap-2 text-sm font-black text-[#006B4F] transition hover:text-[#004D38]"
          >
            View All News
  
            <ArrowUpRight
              :size="18"
              class="transition group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </NuxtLink>
        </div>
  
        <NewsGrid
          :items="relatedNews"
          :columns="3"
        />
      </div>
  
    </div>
  </section>
      <!-- ========================================================= -->
      <!-- RELATED NEWS -->
      <!-- ========================================================= -->
  
      <section
        v-if="relatedNews.length"
        class="relative overflow-hidden bg-surface-dark py-20 text-white sm:py-24 lg:py-28"
      >
        <div
          class="pointer-events-none absolute -right-40 top-0 h-[35rem] w-[35rem] rounded-full bg-primary/10 blur-3xl"
        />
  
        <div
          class="container-nkf relative z-10"
        >
          <div
            class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          >
            <div
              class="max-w-2xl"
            >
              <span
                class="text-[10px] font-black uppercase tracking-[0.25em] text-primary-light"
              >
                Continue Reading
              </span>
  
              <h2
                class="mt-4 text-4xl font-black tracking-tight sm:text-5xl"
              >
                More From
                <span class="text-primary-light">
                  NKF News.
                </span>
              </h2>
  
              <p
                class="mt-5 text-sm leading-7 text-white/50 sm:text-base"
              >
                Discover more stories, athlete updates and developments from the Karate Federation of Nigeria (KFN) Federation.
              </p>
            </div>
  
            <NuxtLink
              to="/news"
              class="group inline-flex w-fit items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-black text-white transition hover:border-primary hover:bg-primary"
            >
              Explore All News
  
              <ArrowUpRight
                :size="18"
                class="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </NuxtLink>
          </div>
  
          <div
            class="mt-12"
          >
            <NewsGrid
              :items="relatedNews"
              :columns="3"
            />
          </div>
        </div>
      </section>
  
      <!-- ========================================================= -->
      <!-- BOTTOM NEWS CTA -->
      <!-- ========================================================= -->
  
      <section
        class="border-t border-white/10 bg-black py-12 text-white"
      >
        <div
          class="container-nkf"
        >
          <div
            class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <div
              class="flex items-center gap-4"
            >
              <div
                class="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white"
              >
                <Newspaper :size="24" />
              </div>
  
              <div>
                <h3
                  class="font-black"
                >
                  Karate Federation of Nigeria (KFN)News
                </h3>
  
                <p
                  class="mt-1 text-sm text-white/40"
                >
                  Stay connected with Karate Federation of Nigeria (KFN).
                </p>
              </div>
            </div>
  
            <NuxtLink
              to="/news"
              class="group inline-flex w-fit items-center gap-3 text-sm font-black text-primary-light transition hover:gap-5"
            >
              Back to News Centre
  
              <ArrowUpRight
                :size="18"
                class="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </NuxtLink>
          </div>
        </div>
      </section>
  
    </main>
</div>
</template>