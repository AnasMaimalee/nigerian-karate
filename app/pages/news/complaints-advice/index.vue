<script setup lang="ts">
import {
  ArrowRight,
  MessageCircleHeart,
  Send,
  ShieldCheck
} from 'lucide-vue-next'

useHead({
  title: 'Complaints & Advice | Nigerian Karate Federation'
})

const form = reactive({
  name: '',
  email: '',
  category: '',
  message: ''
})

const submitted = ref(false)

const submitForm = () => {
  submitted.value = true
}
</script>

<template>
  <main class="min-h-screen bg-slate-50">

    <!-- HERO -->

    <section
      class="relative overflow-hidden bg-[#08130d] py-20 text-white sm:py-24"
    >
      <div class="relative container-nkf">

        <span
          class="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.22em] text-emerald-400"
        >
          <ShieldCheck :size="15" />

          Federation Support
        </span>

        <h1
          class="mt-6 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl"
        >
          YOUR VOICE

          <span class="block text-primary">
            MATTERS.
          </span>
        </h1>

        <p
          class="mt-7 max-w-2xl text-base leading-8 text-white/55"
        >
          Share your complaint, advice, observation or other important issue
          with the Nigerian Karate Federation.
        </p>

      </div>
    </section>


    <!-- FORM -->

    <section class="container-nkf py-20">

      <div
        class="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"
      >

        <!-- INFORMATION -->

        <div>

          <div
            class="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-xl"
          >
            <MessageCircleHeart :size="28" />
          </div>

          <h2
            class="mt-7 text-4xl font-black text-slate-950"
          >
            Speak With The Federation.
          </h2>

          <p
            class="mt-5 text-sm leading-8 text-slate-500"
          >
            We welcome constructive advice, important complaints and feedback
            that can contribute to the continued growth and improvement of
            Nigerian karate.
          </p>

        </div>


        <!-- FORM -->

        <div
          class="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl sm:p-10"
        >

          <div
            v-if="submitted"
            class="rounded-2xl bg-emerald-50 p-8 text-center"
          >
            <ShieldCheck
              :size="40"
              class="mx-auto text-primary"
            />

            <h3
              class="mt-5 text-2xl font-black text-slate-950"
            >
              Message Received
            </h3>

            <p
              class="mt-3 text-sm leading-7 text-slate-500"
            >
              Thank you for contacting the Nigerian Karate Federation.
            </p>
          </div>


          <form
            v-else
            class="space-y-6"
            @submit.prevent="submitForm"
          >

            <div
              class="grid gap-6 sm:grid-cols-2"
            >

              <input
                v-model="form.name"
                required
                placeholder="Your Name"
                class="w-full rounded-xl border border-slate-200 px-5 py-4 text-sm outline-none focus:border-primary"
              >

              <input
                v-model="form.email"
                type="email"
                required
                placeholder="Email Address"
                class="w-full rounded-xl border border-slate-200 px-5 py-4 text-sm outline-none focus:border-primary"
              >

            </div>


            <select
              v-model="form.category"
              required
              class="w-full rounded-xl border border-slate-200 px-5 py-4 text-sm outline-none focus:border-primary"
            >
              <option value="">
                Select Category
              </option>

              <option>
                Complaint
              </option>

              <option>
                Advice
              </option>

              <option>
                Observation
              </option>

              <option>
                Other Issue
              </option>
            </select>


            <textarea
              v-model="form.message"
              required
              rows="7"
              placeholder="Write your message..."
              class="w-full resize-none rounded-xl border border-slate-200 px-5 py-4 text-sm outline-none focus:border-primary"
            />


            <button
              type="submit"
              class="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-slate-950 px-6 py-4 text-sm font-black text-white transition hover:bg-primary"
            >
              Submit Message

              <Send :size="17" />
            </button>

          </form>

        </div>

      </div>

    </section>

  </main>
</template>