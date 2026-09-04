import { images } from './images'

export const newsItems = [
  {
    id: 1,
    title: 'Karate Federation of Nigeria (KFN)Announces New National Championship',
    slug: 'nkf-announces-national-championship',
    image: images.news.nationalChampionship,
    imagePosition: 'center',
    imageEffect: 'zoom',
    overlay: 'from-transparent via-black/20 to-black/90',
    category: 'Championship',
    date: '2026-09-01',
    readTime: '4 min read',
    featured: true,
    excerpt: 'The Karate Federation of Nigeria (KFN)has announced plans for a major national championship bringing together athletes from across the country.'
  },
  {
    id: 2,
    title: 'Young Karate Federation of Nigeria (KFN) Athletes Prepare For National Competition',
    slug: 'young-athletes-national-competition',
    image: images.news.youthAthletes,
    imagePosition: 'center',
    imageEffect: 'zoom',
    overlay: 'from-transparent to-black/85',
    category: 'Athletes',
    date: '2026-08-27',
    readTime: '3 min read',
    featured: false,
    excerpt: 'A new generation of athletes is preparing to demonstrate their talent at upcoming national karate competitions.'
  },
  {
    id: 3,
    title: 'NKF Expands Grassroots Karate Development Programme',
    slug: 'nkf-expands-grassroots-development',
    image: images.news.grassroots,
    imagePosition: 'center',
    imageEffect: 'zoom',
    overlay: 'from-transparent to-black/85',
    category: 'Development',
    date: '2026-08-18',
    readTime: '5 min read',
    featured: false,
    excerpt: 'The federation continues its mission to strengthen karate development at grassroots level.'
  },
  {
    id: 4,
    title: 'National Team Begins Intensive Training Programme',
    slug: 'national-team-training-programme',
    image: images.news.training,
    imagePosition: 'center',
    imageEffect: 'zoom',
    overlay: 'from-transparent to-black/85',
    category: 'National Team',
    date: '2026-08-10',
    readTime: '4 min read',
    featured: false,
    excerpt: 'Nigeria’s elite karate athletes have begun an intensive training programme ahead of major competitions.'
  },
  {
    id: 5,
    title: 'Celebrating Karate Federation of Nigeria (KFN) Excellence',
    slug: 'celebrating-nigerian-karate-excellence',
    image: images.news.excellence,
    imagePosition: 'center',
    imageEffect: 'zoom',
    overlay: 'from-transparent to-black/90',
    category: 'Federation',
    date: '2026-08-02',
    readTime: '3 min read',
    featured: false,
    excerpt: 'Celebrating the athletes, coaches and officials contributing to the growth of karate in Nigeria.'
  }
]

export const newsCategories = [
  'All',
  'Championship',
  'Athletes',
  'Development',
  'National Team',
  'Federation'
]