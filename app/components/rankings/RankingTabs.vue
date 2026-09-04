<script setup lang="ts">
import { Trophy, Users, ShieldCheck } from 'lucide-vue-next'

export type RankingDiscipline = 'kata' | 'kumite'
export type RankingGender = 'male' | 'female'

const props = withDefaults(defineProps<{
  modelValue: RankingDiscipline
  gender?: RankingGender
}>(), {
  gender: 'male'
})

const emit = defineEmits<{
  'update:modelValue': [value: RankingDiscipline]
}>()

const tabs: {
  value: RankingDiscipline
  label: string
  description: string
  icon: typeof Trophy
}[] = [
  {
    value: 'kata',
    label: 'Kata',
    description: 'Forms & technique',
    icon: Trophy
  },
  {
    value: 'kumite',
    label: 'Kumite',
    description: 'Combat rankings',
    icon: ShieldCheck
  }
]
</script>

<template>
  <div class="rounded-3xl border border-border bg-white p-2 shadow-soft">
    <div class="grid grid-cols-2 gap-2">
      <button v-for="tab in tabs" :key="tab.value" type="button" class="group relative flex min-h-20 items-center gap-3 rounded-2xl px-4 text-left transition-all duration-300 sm:px-5" :class="modelValue === tab.value ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-muted hover:bg-surface hover:text-foreground'" @click="emit('update:modelValue', tab.value)">
        <component :is="tab.icon" :size="22" class="shrink-0 transition group-hover:scale-110" />

        <div>
          <span class="block text-sm font-black">
            {{ tab.label }}
          </span>

          <span class="mt-0.5 block text-[10px] font-bold uppercase tracking-wider opacity-60">
            {{ tab.description }}
          </span>
        </div>

        <span v-if="modelValue === tab.value" class="absolute bottom-3 right-3 h-2 w-2 rounded-full bg-white"></span>
      </button>
    </div>

    <div v-if="gender" class="mt-3 flex items-center justify-center gap-2 border-t border-border pt-3 text-[10px] font-black uppercase tracking-[0.18em] text-muted">
      <Users :size="13" />
      {{ gender === 'male' ? "Men's Rankings" : "Women's Rankings" }}
    </div>
  </div>
</template>