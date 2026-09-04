<script setup lang="ts">
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Twitter
} from 'lucide-vue-next'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitted = ref(false)

const submitForm = async () => {
  if (
    !form.name ||
    !form.email ||
    !form.subject ||
    !form.message
  ) {
    return
  }

  isSubmitting.value = true

  // Replace this with your API call later
  await new Promise((resolve) => setTimeout(resolve, 1000))

  isSubmitting.value = false
  submitted.value = true

  form.name = ''
  form.email = ''
  form.phone = ''
  form.subject = ''
  form.message = ''
}
</script>

<template>
  <main class="min-h-screen bg-[#f6f8f6]">

    <!-- HERO -->
    <section
      class="relative isolate overflow-hidden bg-[#062b1a] py-20 text-white sm:py-24 lg:py-32"
    >
      <!-- BACKGROUND -->
      <div class="pointer-events-none absolute inset-0">

        <div
          class="absolute inset-0 bg-gradient-to-br from-[#075c34] via-[#062b1a] to-[#02160d]"
        />

        <div
          class="absolute -left-32 top-[-100px] h-[420px] w-[420px] rounded-full bg-green-500/20 blur-[120px]"
        />

        <div
          class="absolute -right-32 bottom-[-140px] h-[480px] w-[480px] rounded-full bg-[#d7b96d]/15 blur-[130px]"
        />

        <!-- GRID -->
        <div
          class="absolute inset-0 opacity-[0.035]"
          style="
            background-image:
              linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px);
            background-size: 72px 72px;
          "
        />

        <!-- BACKGROUND TEXT -->
        <div
          class="absolute -bottom-12 -right-10 hidden select-none text-[190px] font-black leading-none tracking-tighter text-white/[0.025] lg:block"
        >
          NKF
        </div>
      </div>

      <!-- CONTENT -->
      <div class="container-nkf relative z-10">

        <div class="max-w-4xl">

          <!-- EYEBROW -->
          <div
            class="inline-flex items-center gap-3 rounded-full border border-[#d7b96d]/25 bg-white/[0.06] px-4 py-2.5 backdrop-blur-md"
          >
            <span
              class="flex h-8 w-8 items-center justify-center rounded-full bg-[#d7b96d]/15 text-[#f0d88f]"
            >
              <Mail :size="15" />
            </span>

            <span
              class="text-[10px] font-black uppercase tracking-[0.22em] text-[#f0d88f]"
            >
              Karate Federation of Nigeria (KFN) Federation
            </span>
          </div>

          <!-- TITLE -->
          <h1
            class="mt-8 text-5xl font-black leading-[0.9] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            LET'S START A

            <span
              class="mt-3 block bg-gradient-to-r from-[#f0d88f] via-[#fff3c7] to-[#d7b96d] bg-clip-text text-transparent"
            >
              CONVERSATION.
            </span>
          </h1>

          <!-- DESCRIPTION -->
          <p
            class="mt-8 max-w-2xl text-base font-medium leading-8 text-white sm:text-lg"
          >
            Have a question, enquiry or important information to share?
            Reach out to the Karate Federation of Nigeria (KFN)and our team
            will be happy to assist you.
          </p>

          <!-- INFO -->
          <div class="mt-10 flex flex-wrap items-center gap-6">

            <div class="flex items-center gap-3">
              <span
                class="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.08] text-[#f0d88f]"
              >
                <ShieldCheck :size="18" />
              </span>

              <div>
                <p class="text-sm font-black">
                  Official Federation
                </p>

                <p
                  class="text-[10px] font-black uppercase tracking-[0.16em] text-white/80"
                >
                  Verified Communication
                </p>
              </div>
            </div>

            <div class="hidden h-10 w-px bg-white/20 sm:block" />

            <div class="flex items-center gap-3">
              <span
                class="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.08] text-green-300"
              >
                <Clock3 :size="18" />
              </span>

              <div>
                <p class="text-sm font-black">
                  We're Here to Help
                </p>

                <p
                  class="text-[10px] font-black uppercase tracking-[0.16em] text-white/80"
                >
                  Send Us Your Enquiry
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

      <div
        class="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent"
      />
    </section>


    <!-- CONTACT CONTENT -->
    <section
      class="relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <!-- BACKGROUND DECORATION -->
      <div
        class="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-green-500/[0.05] blur-3xl"
      />

      <div
        class="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#d7b96d]/[0.07] blur-3xl"
      />

      <div class="container-nkf relative z-10">

        <!-- SECTION HEADER -->
        <div
          class="max-w-3xl"
        >
          <span
            class="inline-flex items-center gap-2 rounded-full bg-green-700/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-green-800"
          >
            <Send :size="13" />

            Contact NKF
          </span>

          <h2
            class="mt-5 text-4xl font-black tracking-tight text-[#172019] sm:text-5xl"
          >
            Send us a message
          </h2>

          <p
            class="mt-5 max-w-2xl text-base font-medium leading-8 text-[#435047] sm:text-lg"
          >
            Whether you have questions about competitions, athlete
            development, registration, events or federation activities,
            our team is ready to hear from you.
          </p>
        </div>


        <!-- CONTACT GRID -->
        <div
          class="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
        >

          <!-- LEFT -->
          <div class="space-y-5">

            <!-- EMAIL -->
            <div
              class="group rounded-[1.75rem] border border-[#dce5df] bg-white p-6 shadow-lg shadow-green-950/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div class="flex gap-4">

                <div
                  class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-700/10 text-green-700"
                >
                  <Mail :size="23" />
                </div>

                <div>
                  <h3
                    class="text-lg font-black text-[#172019]"
                  >
                    Email Us
                  </h3>

                  <p
                    class="mt-2 text-sm font-medium leading-6 text-[#435047]"
                  >
                    Send us your enquiry and our team will respond as soon
                    as possible.
                  </p>

                  <a
                    href="mailto:info@nigeriankaratefederation.org"
                    class="mt-4 inline-flex items-center gap-2 text-sm font-black text-green-700 transition hover:text-green-900"
                  >
                    info@nigeriankaratefederation.org

                    <ArrowRight :size="16" />
                  </a>
                </div>

              </div>
            </div>


            <!-- PHONE -->
            <div
              class="group rounded-[1.75rem] border border-[#dce5df] bg-white p-6 shadow-lg shadow-green-950/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div class="flex gap-4">

                <div
                  class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-700/10 text-green-700"
                >
                  <Phone :size="23" />
                </div>

                <div>
                  <h3
                    class="text-lg font-black text-[#172019]"
                  >
                    Call Us
                  </h3>

                  <p
                    class="mt-2 text-sm font-medium leading-6 text-[#435047]"
                  >
                    Speak directly with the federation office for official
                    enquiries and important information.
                  </p>

                  <a
                    href="tel:+234000000000"
                    class="mt-4 inline-flex items-center gap-2 text-sm font-black text-green-700 transition hover:text-green-900"
                  >
                    +234 000 000 0000

                    <ArrowRight :size="16" />
                  </a>
                </div>

              </div>
            </div>


            <!-- LOCATION -->
            <div
              class="group rounded-[1.75rem] border border-[#dce5df] bg-white p-6 shadow-lg shadow-green-950/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div class="flex gap-4">

                <div
                  class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#d7b96d]/15 text-[#a88738]"
                >
                  <MapPin :size="23" />
                </div>

                <div>
                  <h3
                    class="text-lg font-black text-[#172019]"
                  >
                    Federation Office
                  </h3>

                  <p
                    class="mt-2 text-sm font-medium leading-6 text-[#435047]"
                  >
                    Abuja, Federal Capital Territory,
                    Nigeria.
                  </p>

                  <p
                    class="mt-4 text-xs font-black uppercase tracking-[0.16em] text-[#647168]"
                  >
                    Karate Federation of Nigeria (KFN) Federation
                  </p>
                </div>

              </div>
            </div>


            <!-- SOCIAL -->
            <div
              class="rounded-[1.75rem] border border-[#dce5df] bg-[#062b1a] p-6 text-white shadow-xl"
            >
              <p
                class="text-[10px] font-black uppercase tracking-[0.2em] text-[#f0d88f]"
              >
                Follow NKF
              </p>

              <h3
                class="mt-3 text-xl font-black"
              >
                Stay connected with Karate Federation of Nigeria (KFN).
              </h3>

              <div class="mt-5 flex flex-wrap gap-3">

                <a
                  href="#"
                  class="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07] transition hover:bg-white hover:text-[#062b1a]"
                >
                  <Facebook :size="18" />
                </a>

                <a
                  href="#"
                  class="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07] transition hover:bg-white hover:text-[#062b1a]"
                >
                  <Instagram :size="18" />
                </a>

                <a
                  href="#"
                  class="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07] transition hover:bg-white hover:text-[#062b1a]"
                >
                  <Twitter :size="18" />
                </a>

              </div>
            </div>

          </div>


          <!-- FORM -->
          <div
            class="rounded-[2rem] border border-[#dce5df] bg-white p-6 shadow-xl shadow-green-950/[0.04] sm:p-8"
          >

            <!-- SUCCESS -->
            <div
              v-if="submitted"
              class="mb-6 flex gap-4 rounded-2xl border border-green-200 bg-green-50 p-5"
            >
              <div
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-700 text-white"
              >
                <CheckCircle2 :size="21" />
              </div>

              <div>
                <h3
                  class="font-black text-green-900"
                >
                  Message sent successfully
                </h3>

                <p
                  class="mt-1 text-sm font-medium leading-6 text-green-800"
                >
                  Thank you for contacting the Karate Federation of Nigeria (KFN) Federation.
                  We will get back to you as soon as possible.
                </p>
              </div>
            </div>


            <div class="mb-8">

              <p
                class="text-[10px] font-black uppercase tracking-[0.2em] text-green-800"
              >
                Send a Message
              </p>

              <h2
                class="mt-3 text-3xl font-black tracking-tight text-[#172019]"
              >
                How can we help you?
              </h2>

              <p
                class="mt-3 text-sm font-medium leading-7 text-[#435047]"
              >
                Fill in the form below and send your message directly
                to the federation.
              </p>

            </div>


            <form
              class="space-y-5"
              @submit.prevent="submitForm"
            >

              <!-- NAME -->
              <div>
                <label
                  class="mb-2 block text-sm font-black text-[#172019]"
                >
                  Full Name
                </label>

                <input
                  v-model="form.name"
                  type="text"
                  placeholder="Enter your full name"
                  class="h-14 w-full rounded-2xl border border-[#dce5df] bg-[#f8faf9] px-5 text-sm font-medium text-[#172019] outline-none transition placeholder:text-[#89958d] focus:border-green-700 focus:bg-white focus:ring-4 focus:ring-green-700/10"
                >
              </div>


              <!-- EMAIL + PHONE -->
              <div
                class="grid gap-5 sm:grid-cols-2"
              >

                <div>
                  <label
                    class="mb-2 block text-sm font-black text-[#172019]"
                  >
                    Email Address
                  </label>

                  <input
                    v-model="form.email"
                    type="email"
                    placeholder="you@example.com"
                    class="h-14 w-full rounded-2xl border border-[#dce5df] bg-[#f8faf9] px-5 text-sm font-medium text-[#172019] outline-none transition placeholder:text-[#89958d] focus:border-green-700 focus:bg-white focus:ring-4 focus:ring-green-700/10"
                  >
                </div>


                <div>
                  <label
                    class="mb-2 block text-sm font-black text-[#172019]"
                  >
                    Phone Number
                  </label>

                  <input
                    v-model="form.phone"
                    type="tel"
                    placeholder="+234..."
                    class="h-14 w-full rounded-2xl border border-[#dce5df] bg-[#f8faf9] px-5 text-sm font-medium text-[#172019] outline-none transition placeholder:text-[#89958d] focus:border-green-700 focus:bg-white focus:ring-4 focus:ring-green-700/10"
                  >
                </div>

              </div>


              <!-- SUBJECT -->
              <div>
                <label
                  class="mb-2 block text-sm font-black text-[#172019]"
                >
                  Subject
                </label>

                <input
                  v-model="form.subject"
                  type="text"
                  placeholder="What is your message about?"
                  class="h-14 w-full rounded-2xl border border-[#dce5df] bg-[#f8faf9] px-5 text-sm font-medium text-[#172019] outline-none transition placeholder:text-[#89958d] focus:border-green-700 focus:bg-white focus:ring-4 focus:ring-green-700/10"
                >
              </div>


              <!-- MESSAGE -->
              <div>
                <label
                  class="mb-2 block text-sm font-black text-[#172019]"
                >
                  Your Message
                </label>

                <textarea
                  v-model="form.message"
                  rows="6"
                  placeholder="Write your message here..."
                  class="w-full resize-none rounded-2xl border border-[#dce5df] bg-[#f8faf9] px-5 py-4 text-sm font-medium leading-7 text-[#172019] outline-none transition placeholder:text-[#89958d] focus:border-green-700 focus:bg-white focus:ring-4 focus:ring-green-700/10"
                />
              </div>


              <!-- SUBMIT -->
              <button
                type="submit"
                :disabled="isSubmitting"
                class="group flex w-full items-center justify-center gap-3 rounded-2xl bg-green-700 px-6 py-4 text-sm font-black text-white shadow-lg shadow-green-900/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <span>
                  {{
                    isSubmitting
                      ? 'Sending Message...'
                      : 'Send Message'
                  }}
                </span>

                <Send
                  :size="18"
                  class="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>

  </main>
</template>