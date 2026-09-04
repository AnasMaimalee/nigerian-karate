import { images } from './images'

export const federation = {
  name: 'Nigerian Karate Federation',
  shortName: 'NKF',

  tagline: 'Forged By Discipline. United By Karate.',

  description: 'Developing champions, empowering athletes and building the future of karate in Nigeria.',

  founded: 'National Federation',

  headquarters: {
    city: 'Abuja',
    country: 'Nigeria'
  },

  contact: {
    email: 'info@nigeriankarate.org',
    phone: '+234 000 000 0000',
    address: 'Abuja, Federal Capital Territory, Nigeria'
  },

  images: {
    hero: images.federation.about,
    mission: images.federation.mission,
    vision: images.federation.vision
  },

  imageEffects: {
    heroOverlay: 'from-black/70 via-black/40 to-transparent',
    cardOverlay: 'from-black/10 to-black/80',
    imageHover: 'scale'
  },

  mission: {
    title: 'Our Mission',
    description: 'To promote, develop and regulate karate across Nigeria while creating opportunities for athletes, coaches and officials.'
  },

  vision: {
    title: 'Our Vision',
    description: 'To establish Nigerian karate as a globally respected sporting force and inspire future generations through discipline and excellence.'
  },

  values: [
    {
      title: 'Discipline',
      description: 'The foundation of every great karate athlete.'
    },
    {
      title: 'Respect',
      description: 'Respect for ourselves, our opponents and our communities.'
    },
    {
      title: 'Excellence',
      description: 'Continuously striving for world-class performance.'
    },
    {
      title: 'Integrity',
      description: 'Doing what is right both inside and outside competition.'
    },
    {
      title: 'Unity',
      description: 'Bringing Nigeria together through karate.'
    }
  ],

  social: {
    facebook: '#',
    instagram: '#',
    x: '#',
    youtube: '#',
    tiktok: '#',
    linkedin: '#'
  }
}