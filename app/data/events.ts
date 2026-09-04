// app/data/events.ts

export interface EventItem {
  id: number
  title: string
  slug: string
  image: string
  date: string
  endDate?: string
  location: string
  type: string
  status: 'live' | 'upcoming' | 'completed' | 'registration'
  participants?: number
  description?: string
  liveUrl?: string
}

export const events: EventItem[] = [
  {
    id: 1,
    title: 'Nigeria National Karate Championship 2026',
    slug: 'nigeria-national-karate-championship-2026',
    image:
      'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1200&q=85',
    date: '2026-11-20T09:00:00',
    endDate: '2026-11-23T18:00:00',
    location: 'Abuja, Nigeria',
    type: 'Championship',
    status: 'upcoming',
    participants: 450,
    description:
      'Nigeria’s premier national karate championship bringing together athletes from across the federation.'
  },

  {
    id: 2,
    title: 'Kano State Karate Open',
    slug: 'kano-state-karate-open-2026',
    image:
      'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1200&q=85',
    date: '2026-10-15T09:00:00',
    endDate: '2026-10-17T18:00:00',
    location: 'Kano, Nigeria',
    type: 'Tournament',
    status: 'registration',
    participants: 250,
    description:
      'An open karate tournament bringing together promising competitors, clubs and state associations.'
  },

  {
    id: 3,
    title: 'Lagos Karate Invitational',
    slug: 'lagos-karate-invitational-2026',
    image:
      'https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?auto=format&fit=crop&w=1200&q=85',
    date: '2026-12-05T10:00:00',
    endDate: '2026-12-06T18:00:00',
    location: 'Lagos, Nigeria',
    type: 'Invitational',
    status: 'upcoming',
    participants: 320,
    description:
      'A high-level invitational competition featuring elite karate athletes from across Nigeria.'
  },

  {
    id: 4,
    title: 'National Karate Referee Seminar',
    slug: 'national-karate-referee-seminar-2026',
    image:
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=85',
    date: '2026-10-28T09:00:00',
    endDate: '2026-10-30T16:00:00',
    location: 'Abuja, Nigeria',
    type: 'Seminar',
    status: 'registration',
    participants: 120,
    description:
      'Official development and certification programme for referees and competition officials.'
  },

  {
    id: 5,
    title: 'South-West Karate Championship',
    slug: 'south-west-karate-championship-2026',
    image:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85',
    date: '2026-09-25T09:00:00',
    endDate: '2026-09-27T18:00:00',
    location: 'Ibadan, Nigeria',
    type: 'Championship',
    status: 'upcoming',
    participants: 280,
    description:
      'A regional championship featuring senior and junior athletes from the South-West zone.'
  },

  {
    id: 6,
    title: 'NKF National Coaches Course',
    slug: 'nkf-national-coaches-course-2026',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=85',
    date: '2026-10-08T09:00:00',
    endDate: '2026-10-10T17:00:00',
    location: 'Lagos, Nigeria',
    type: 'Course',
    status: 'registration',
    participants: 100,
    description:
      'A national development programme designed to strengthen karate coaching standards.'
  },

  {
    id: 7,
    title: 'Nigeria Junior Karate Championship',
    slug: 'nigeria-junior-karate-championship-2026',
    image:
      'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1200&q=85',
    date: '2027-01-15T09:00:00',
    endDate: '2027-01-17T18:00:00',
    location: 'Kano, Nigeria',
    type: 'Championship',
    status: 'upcoming',
    participants: 350,
    description:
      'A national competition focused on discovering and developing Nigeria’s next generation of karate champions.'
  },

  {
    id: 8,
    title: 'National Karate Development Camp',
    slug: 'national-karate-development-camp-2026',
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85',
    date: '2026-12-15T09:00:00',
    endDate: '2026-12-20T18:00:00',
    location: 'Abuja, Nigeria',
    type: 'Camp',
    status: 'upcoming',
    participants: 180,
    description:
      'An intensive athlete development camp for national and emerging karate competitors.'
  },

  {
    id: 9,
    title: 'North-West Karate League Finals',
    slug: 'north-west-karate-league-finals-2026',
    image:
      'https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=1200&q=85',
    date: '2026-08-12T10:00:00',
    endDate: '2026-08-14T18:00:00',
    location: 'Kaduna, Nigeria',
    type: 'League',
    status: 'completed',
    participants: 220,
    description:
      'The final stage of the North-West regional karate league.'
  }
]