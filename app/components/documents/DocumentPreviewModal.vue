<script setup lang="ts">
import type { FederationDocument } from '~/composables/useDocuments'

defineProps<{
  document: FederationDocument | null
  isOpen: boolean
}>()

const emit = defineEmits<{
  close: []
}>()
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen && document"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4"
      >
        <!-- Overlay -->
        <div
          class="absolute inset-0 bg-black/60 backdrop-blur-sm"
          @click="emit('close')"
        />

        <!-- Modal -->
        <div
          class="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl"
        >
          <div
            class="relative overflow-hidden bg-gradient-to-br from-green-950 to-green-700 px-6 py-10 text-white sm:px-10"
          >
            <div
              class="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-yellow-400/10"
            />

            <button
              type="button"
              class="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl transition hover:bg-white/20"
              @click="emit('close')"
            >
              ×
            </button>

            <div
              class="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-3xl"
            >
              📄
            </div>

            <span
              class="mt-6 inline-block rounded-lg bg-yellow-400 px-3 py-1 text-xs font-black uppercase text-green-950"
            >
              {{ document.format }}
            </span>

            <h2
              class="mt-4 max-w-xl text-3xl font-black leading-tight"
            >
              {{ document.title }}
            </h2>
          </div>

          <div class="p-6 sm:p-10">
            <p class="leading-7 text-gray-600">
              {{ document.description }}
            </p>

            <div
              class="mt-8 grid gap-4 sm:grid-cols-3"
            >
              <div
                class="rounded-2xl bg-gray-50 p-4"
              >
                <p
                  class="text-xs font-bold uppercase tracking-wider text-gray-400"
                >
                  Version
                </p>

                <p class="mt-2 font-bold text-gray-900">
                  {{ document.year }}
                </p>
              </div>

              <div
                class="rounded-2xl bg-gray-50 p-4"
              >
                <p
                  class="text-xs font-bold uppercase tracking-wider text-gray-400"
                >
                  Format
                </p>

                <p class="mt-2 font-bold text-gray-900">
                  {{ document.format }}
                </p>
              </div>

              <div
                class="rounded-2xl bg-gray-50 p-4"
              >
                <p
                  class="text-xs font-bold uppercase tracking-wider text-gray-400"
                >
                  Language
                </p>

                <p class="mt-2 font-bold text-gray-900">
                  {{
                    document.languages
                      .map((language) => language.code)
                      .join(', ')
                  }}
                </p>
              </div>
            </div>

            <!-- Dummy preview -->
            <div
              class="mt-8 rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center"
            >
              <div class="text-5xl">
                📑
              </div>

              <h3 class="mt-4 text-lg font-black text-gray-900">
                Document Preview
              </h3>

              <p class="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
                This document is currently displayed as a demonstration.
                PDF preview and download functionality can be connected
                later.
              </p>
            </div>

            <div
              class="mt-8 flex justify-end"
            >
              <button
                type="button"
                class="rounded-xl bg-green-700 px-6 py-3 font-bold text-white transition hover:bg-green-800"
                @click="emit('close')"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}

.modal-enter-active > div:last-child,
.modal-leave-active > div:last-child {
  transition:
    transform 0.25s ease,
    opacity 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from > div:last-child,
.modal-leave-to > div:last-child {
  opacity: 0;
  transform: translateY(20px) scale(0.97);
}
</style>