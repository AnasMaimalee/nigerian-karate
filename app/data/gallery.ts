import { images } from './images'

export const galleryItems = [
  {
    id: 1,
    title: 'National Championship Action',
    image: images.gallery.championship1,
    category: 'Competition',
    description: 'Elite athletes competing during a national karate championship.',
    imagePosition: 'center',
    imageEffect: 'zoom',
    overlay: 'from-transparent via-transparent to-black/90',
    featured: true
  },
  {
    id: 2,
    title: 'Kumite In Action',
    image: images.gallery.kumite1,
    category: 'Competition',
    description: 'A powerful moment during a Kumite contest.',
    imagePosition: 'center',
    imageEffect: 'zoom',
    overlay: 'from-black/10 to-black/80',
    featured: true
  },
  {
    id: 3,
    title: 'Kata Excellence',
    image: images.gallery.kata1,
    category: 'Kata',
    description: 'Technical precision and discipline during a Kata performance.',
    imagePosition: 'center',
    imageEffect: 'zoom',
    overlay: 'from-transparent to-black/90',
    featured: true
  },
  {
    id: 4,
    title: 'Victory Celebration',
    image: images.gallery.victory1,
    category: 'Awards',
    description: 'Celebrating achievement and excellence.',
    imagePosition: 'center',
    imageEffect: 'zoom',
    overlay: 'from-transparent to-black/85',
    featured: false
  },
  {
    id: 5,
    title: 'National Team Training',
    image: images.gallery.training1,
    category: 'Training',
    description: 'Athletes preparing for upcoming competitions.',
    imagePosition: 'center',
    imageEffect: 'zoom',
    overlay: 'from-black/10 to-black/90',
    featured: false
  },
  {
    id: 6,
    title: 'Future Champions',
    image: images.gallery.youth1,
    category: 'Youth',
    description: 'The next generation of Karate Federation of Nigeria (KFN) athletes.',
    imagePosition: 'center',
    imageEffect: 'zoom',
    overlay: 'from-transparent to-black/85',
    featured: false
  },
  {
    id: 7,
    title: 'Medal Ceremony',
    image: images.gallery.medal1,
    category: 'Awards',
    description: 'Recognising outstanding performances.',
    imagePosition: 'center',
    imageEffect: 'zoom',
    overlay: 'from-transparent to-black/90',
    featured: false
  },
  {
    id: 8,
    title: 'Team Nigeria',
    image: images.gallery.teamNigeria,
    category: 'Team',
    description: 'United by discipline and national pride.',
    imagePosition: 'center',
    imageEffect: 'zoom',
    overlay: 'from-transparent to-black/90',
    featured: true
  },
  {
    id: 9,
    title: 'Karate Development',
    image: images.gallery.development1,
    category: 'Training',
    description: 'Building stronger karate communities across Nigeria.',
    imagePosition: 'center',
    imageEffect: 'zoom',
    overlay: 'from-black/20 to-black/90',
    featured: false
  },
  {
    id: 10,
    title: 'Championship Moment',
    image: images.gallery.championship2,
    category: 'Competition',
    description: 'Another unforgettable competition moment.',
    imagePosition: 'center',
    imageEffect: 'zoom',
    overlay: 'from-transparent to-black/90',
    featured: true
  }
]

export const galleryCategories = [
  'All',
  'Competition',
  'Kata',
  'Training',
  'Youth',
  'Awards',
  'Team'
]