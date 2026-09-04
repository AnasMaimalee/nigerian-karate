export interface Athlete {
  name: string
  slug: string
  category: string
  discipline: 'Kata' | 'Kumite'
  gender: 'Male' | 'Female'
  state: string
  image?: string
  rank?: number
  medals?: number
  bio?: string
  achievements?: string[]
}