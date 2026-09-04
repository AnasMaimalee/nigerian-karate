<script setup lang="ts">
import { Users, Trophy, Medal, Globe2 } from 'lucide-vue-next'

interface Stat {
  label: string
  value: string
  description: string
  icon: any
}

const stats: Stat[] = [
  {
    label: 'Registered Athletes',
    value: '2,500+',
    description: 'Karate athletes across Nigeria',
    icon: Users
  },
  {
    label: 'National Champions',
    value: '120+',
    description: 'Elite competitors and champions',
    icon: Trophy
  },
  {
    label: 'Medals Won',
    value: '300+',
    description: 'National and international success',
    icon: Medal
  },
  {
    label: 'Global Presence',
    value: '25+',
    description: 'International competitions',
    icon: Globe2
  }
]
</script>

<template>
  <section class="relative border-y border-border bg-surface">
    <div class="container-nkf py-8 sm:py-10">
      <div class="grid divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        <div v-for="stat in stats" :key="stat.label" class="group relative px-6 py-7 first:pl-0 last:pr-0 sm:first:pl-0 lg:py-4">
          <div class="flex items-start gap-4">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-light text-primary transition duration-300 group-hover:-translate-y-1 group-hover:bg-primary group-hover:text-white">
              <component :is="stat.icon" :size="21" />
            </div>

            <div>
              <p class="text-3xl font-black tracking-tight text-foreground">
                {{ stat.value }}
              </p>

              <p class="mt-1 text-sm font-bold text-foreground">
                {{ stat.label }}
              </p>

              <p class="mt-1 text-xs leading-5 text-muted">
                {{ stat.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>