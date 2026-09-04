<script setup lang="ts">
defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <div class="relative">
    <div
      class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5"
    >
      <svg
        class="h-5 w-5 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m21 21-4.35-4.35m1.35-5.15a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"
        />
      </svg>
    </div>

    <input
      :value="modelValue"
      type="text"
      placeholder="Search rules, documents, policies and reports..."
      class="w-full rounded-2xl border border-gray-200 bg-white py-5 pl-14 pr-5 text-gray-800 shadow-sm outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-600/10"
      @input="
        emit(
          'update:modelValue',
          ($event.target as HTMLInputElement).value,
        )
      "
    />
  </div>
</template>