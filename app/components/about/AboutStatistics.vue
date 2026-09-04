<script setup lang="ts">
const statistics = [
  {
    value: '500+',
    label: 'Registered Athletes',
    description: 'Athletes competing and developing across Nigeria'
  },
  {
    value: '36',
    label: 'States & FCT',
    description: 'National reach across the federation'
  },
  {
    value: '50+',
    label: 'Competitions',
    description: 'Events and competitive opportunities'
  },
  {
    value: '100+',
    label: 'Coaches & Officials',
    description: 'Supporting the development of karate'
  }
]
</script>

<template>
  <section
    class="bg-[#0b1711] py-16 text-white"
  >

    <div
      class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
    >

      <div
        class="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4"
      >

        <div
          v-for="stat in statistics"
          :key="stat.label"
          class="bg-[#0b1711] p-8 transition hover:bg-[#101f17]"
        >

          <strong
            class="text-4xl font-black tracking-tight text-[#4ade80]"
          >
            {{ stat.value }}
          </strong>

          <h3
            class="mt-5 text-sm font-black"
          >
            {{ stat.label }}
          </h3>

          <p
            class="mt-2 text-xs leading-6 text-white/40"
          >
            {{ stat.description }}
          </p>

        </div>

      </div>

    </div>

  </section>
</template>