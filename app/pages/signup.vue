<script setup lang="ts">
import {
  ArrowRight,
  Check,
  ChevronDown,
  LockKeyhole,
  Mail,
  ShieldCheck,
  User,
  Weight,
} from 'lucide-vue-next'
import { computed, ref } from 'vue'

useSeoMeta({
  title: 'Sign Up | Karate Federation of Nigeria',
  description:
    'Register with the Karate Federation of Nigeria and join the national Karate community.',
})

const fullName = ref('')
const email = ref('')
const athleteKg = ref<number | null>(null)
const stateClub = ref('')
const kata = ref(false)
const kumite = ref(false)
const password = ref('')
const confirmPassword = ref('')

const showPassword = ref(false)
const showConfirmPassword = ref(false)

const submitting = ref(false)
const submitted = ref(false)
const errorMessage = ref('')

const nigeriaStates = [
  'Abia',
  'Adamawa',
  'Akwa Ibom',
  'Anambra',
  'Bauchi',
  'Bayelsa',
  'Benue',
  'Borno',
  'Cross River',
  'Delta',
  'Ebonyi',
  'Edo',
  'Ekiti',
  'Enugu',
  'FCT Abuja',
  'Gombe',
  'Imo',
  'Jigawa',
  'Kaduna',
  'Kano',
  'Katsina',
  'Kebbi',
  'Kogi',
  'Kwara',
  'Lagos',
  'Nasarawa',
  'Niger',
  'Ogun',
  'Ondo',
  'Osun',
  'Oyo',
  'Plateau',
  'Rivers',
  'Sokoto',
  'Taraba',
  'Yobe',
  'Zamfara',
]

const isValid = computed(() => {
  return (
    fullName.value.trim().length >= 3 &&
    email.value.trim().length > 0 &&
    athleteKg.value !== null &&
    athleteKg.value > 0 &&
    stateClub.value.trim().length > 0 &&
    (kata.value || kumite.value) &&
    password.value.length >= 8 &&
    confirmPassword.value === password.value
  )
})

const submitRegistration = async () => {
  errorMessage.value = ''

  if (!fullName.value.trim()) {
    errorMessage.value = 'Please enter your full name.'
    return
  }

  if (!email.value.trim()) {
    errorMessage.value = 'Please enter your email address.'
    return
  }

  if (!athleteKg.value || athleteKg.value <= 0) {
    errorMessage.value = 'Please enter the athlete weight in kilograms.'
    return
  }

  if (!stateClub.value.trim()) {
    errorMessage.value = 'Please enter your state or club.'
    return
  }

  if (!kata.value && !kumite.value) {
    errorMessage.value = 'Please select at least one discipline.'
    return
  }

  if (password.value.length < 8) {
    errorMessage.value = 'Password must contain at least 8 characters.'
    return
  }

  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Passwords do not match.'
    return
  }

  submitting.value = true

  try {
    /*
     * ============================================================
     * API INTEGRATION
     * ============================================================
     *
     * Replace this section with your Laravel registration endpoint.
     *
     * Example:
     *
     * await $fetch('/auth/register', {
     *   method: 'POST',
     *   body: {
     *     name: fullName.value,
     *     email: email.value,
     *     athlete_kg: athleteKg.value,
     *     state_club: stateClub.value,
     *     kata: kata.value,
     *     kumite: kumite.value,
     *     password: password.value,
     *     password_confirmation: confirmPassword.value,
     *   }
     * })
     *
     * ============================================================
     */

    await new Promise(resolve => setTimeout(resolve, 900))

    submitted.value = true
  } catch (error: any) {
    errorMessage.value =
      error?.data?.message ??
      'Unable to complete registration. Please try again.'
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <main class="min-h-screen bg-[#06130b] text-white">

    <!-- ==========================================================
         PAGE BACKGROUND
    =========================================================== -->

    <section class="relative overflow-hidden">

      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,197,94,0.18),transparent_32%),radial-gradient(circle_at_85%_80%,rgba(22,163,74,0.12),transparent_30%)]"
      />

      <div
        class="absolute -left-32 top-32 h-80 w-80 rounded-full bg-green-500/10 blur-3xl"
      />

      <div
        class="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-green-400/10 blur-3xl"
      />

      <div
        class="relative mx-auto grid min-h-[calc(100vh-72px)] w-full max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-16"
      >

        <!-- ======================================================
             LEFT CONTENT
        ======================================================= -->

        <div class="hidden lg:block">

          <div
            class="mb-6 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2"
          >
            <ShieldCheck
              :size="16"
              class="text-green-400"
            />

            <span
              class="text-xs font-black uppercase tracking-[0.2em] text-green-300"
            >
              Official Registration
            </span>
          </div>

          <h1
            class="max-w-xl text-5xl font-black leading-[1.02] tracking-tight xl:text-6xl"
          >
            Join the
            <span class="text-green-400">
              Karate Federation
            </span>
            of Nigeria.
          </h1>

          <p
            class="mt-6 max-w-lg text-base leading-8 text-white/60"
          >
            Create your KFN athlete account and register your
            participation details with the federation.
          </p>

          <div class="mt-10 space-y-5">

            <div class="flex items-start gap-4">
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-400"
              >
                <Check :size="19" />
              </div>

              <div>
                <p class="font-black">
                  Athlete Registration
                </p>

                <p class="mt-1 text-sm leading-6 text-white/50">
                  Provide your athlete information and disciplines.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-400"
              >
                <ShieldCheck :size="19" />
              </div>

              <div>
                <p class="font-black">
                  Federation Community
                </p>

                <p class="mt-1 text-sm leading-6 text-white/50">
                  Connect with the official Karate Federation
                  platform.
                </p>
              </div>
            </div>

          </div>

        </div>


        <!-- ======================================================
             REGISTRATION CARD
        ======================================================= -->

        <div class="w-full">

          <div
            class="mx-auto w-full max-w-2xl rounded-[2rem] border border-white/10 bg-white p-5 text-slate-950 shadow-2xl sm:p-8 lg:p-10"
          >

            <!-- HEADER -->

            <div class="mb-8">

              <div
                class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-700"
              >
                <ShieldCheck :size="24" />
              </div>

              <h2
                class="text-2xl font-black tracking-tight sm:text-3xl"
              >
                Create your account
              </h2>

              <p
                class="mt-2 text-sm leading-6 text-slate-500"
              >
                Register as a KFN athlete.
              </p>

            </div>


            <!-- SUCCESS -->

            <div
              v-if="submitted"
              class="rounded-2xl border border-green-200 bg-green-50 p-6"
            >

              <div
                class="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white"
              >
                <Check :size="25" />
              </div>

              <h3
                class="mt-5 text-xl font-black text-slate-950"
              >
                Registration successful
              </h3>

              <p
                class="mt-2 text-sm leading-7 text-slate-600"
              >
                Your KFN account registration has been completed.
                You can now continue to the login page.
              </p>

              <NuxtLink
                to="/login"
                class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3.5 text-sm font-black uppercase tracking-wide text-white transition hover:bg-green-700"
              >
                Continue to Login
                <ArrowRight :size="17" />
              </NuxtLink>

            </div>


            <!-- FORM -->

            <form
              v-else
              class="space-y-6"
              @submit.prevent="submitRegistration"
            >

              <!-- ERROR -->

              <div
                v-if="errorMessage"
                class="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700"
              >
                {{ errorMessage }}
              </div>


              <!-- FULL NAME -->

              <div>
                <label
                  for="full-name"
                  class="mb-2 block text-xs font-black uppercase tracking-wider text-slate-700"
                >
                  Full Name
                </label>

                <div class="relative">
                  <User
                    :size="17"
                    class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="full-name"
                    v-model="fullName"
                    type="text"
                    autocomplete="name"
                    placeholder="Enter your full name"
                    class="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm font-semibold outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-600/10"
                  />
                </div>
              </div>


              <!-- EMAIL -->

              <div>
                <label
                  for="email"
                  class="mb-2 block text-xs font-black uppercase tracking-wider text-slate-700"
                >
                  Email Address
                </label>

                <div class="relative">
                  <Mail
                    :size="17"
                    class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="email"
                    v-model="email"
                    type="email"
                    autocomplete="email"
                    placeholder="you@example.com"
                    class="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm font-semibold outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-600/10"
                  />
                </div>
              </div>


              <!-- WEIGHT + STATE/CLUB -->

              <div class="grid gap-5 sm:grid-cols-2">

                <!-- WEIGHT -->

                <div>
                  <label
                    for="athlete-kg"
                    class="mb-2 block text-xs font-black uppercase tracking-wider text-slate-700"
                  >
                    Athlete Kg
                  </label>

                  <div class="relative">
                    <Weight
                      :size="17"
                      class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="athlete-kg"
                      v-model.number="athleteKg"
                      type="number"
                      min="1"
                      step="0.1"
                      placeholder="e.g. 72"
                      class="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-12 text-sm font-semibold outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-600/10"
                    />

                    <span
                      class="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-black text-slate-400"
                    >
                      KG
                    </span>
                  </div>
                </div>


                <!-- STATE / CLUB -->

                <div>
                  <label
                    for="state-club"
                    class="mb-2 block text-xs font-black uppercase tracking-wider text-slate-700"
                  >
                    State / Club
                  </label>

                  <div class="relative">
                    <select
                      id="state-club"
                      v-model="stateClub"
                      class="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 pr-10 text-sm font-semibold outline-none transition focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-600/10"
                    >
                      <option value="">
                        Select state
                      </option>

                      <option
                        v-for="state in nigeriaStates"
                        :key="state"
                        :value="state"
                      >
                        {{ state }}
                      </option>
                    </select>

                    <ChevronDown
                      :size="17"
                      class="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                  </div>
                </div>

              </div>


              <!-- CLUB -->

              <div>
                <label
                  for="club"
                  class="mb-2 block text-xs font-black uppercase tracking-wider text-slate-700"
                >
                  Club / Association
                </label>

                <input
                  id="club"
                  type="text"
                  placeholder="Enter your club or association"
                  class="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-600/10"
                />
              </div>


              <!-- DISCIPLINES -->

              <div>
                <label
                  class="mb-3 block text-xs font-black uppercase tracking-wider text-slate-700"
                >
                  Competition Discipline
                </label>

                <div class="grid gap-3 sm:grid-cols-2">

                  <label
                    class="flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition"
                    :class="
                      kata
                        ? 'border-green-500 bg-green-50'
                        : 'border-slate-200 bg-slate-50 hover:border-green-300'
                    "
                  >
                    <input
                      v-model="kata"
                      type="checkbox"
                      class="h-5 w-5 rounded border-slate-300 text-green-600 focus:ring-green-500"
                    />

                    <div>
                      <p class="text-sm font-black">
                        KATA
                      </p>

                      <p class="mt-0.5 text-xs text-slate-500">
                        Forms / technique
                      </p>
                    </div>
                  </label>


                  <label
                    class="flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition"
                    :class="
                      kumite
                        ? 'border-green-500 bg-green-50'
                        : 'border-slate-200 bg-slate-50 hover:border-green-300'
                    "
                  >
                    <input
                      v-model="kumite"
                      type="checkbox"
                      class="h-5 w-5 rounded border-slate-300 text-green-600 focus:ring-green-500"
                    />

                    <div>
                      <p class="text-sm font-black">
                        KUMITE
                      </p>

                      <p class="mt-0.5 text-xs text-slate-500">
                        Combat / sparring
                      </p>
                    </div>
                  </label>

                </div>
              </div>


              <!-- PASSWORD -->

              <div>
                <label
                  for="password"
                  class="mb-2 block text-xs font-black uppercase tracking-wider text-slate-700"
                >
                  Password
                </label>

                <div class="relative">
                  <LockKeyhole
                    :size="17"
                    class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="password"
                    v-model="password"
                    :type="showPassword ? 'text' : 'password'"
                    autocomplete="new-password"
                    placeholder="Minimum 8 characters"
                    class="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-11 pr-16 text-sm font-semibold outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-600/10"
                  />

                  <button
                    type="button"
                    class="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-xs font-black uppercase text-slate-500 hover:text-green-700"
                    @click="showPassword = !showPassword"
                  >
                    {{ showPassword ? 'Hide' : 'Show' }}
                  </button>
                </div>
              </div>


              <!-- CONFIRM PASSWORD -->

              <div>
                <label
                  for="confirm-password"
                  class="mb-2 block text-xs font-black uppercase tracking-wider text-slate-700"
                >
                  Confirm Password
                </label>

                <div class="relative">
                  <LockKeyhole
                    :size="17"
                    class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="confirm-password"
                    v-model="confirmPassword"
                    :type="showConfirmPassword ? 'text' : 'password'"
                    autocomplete="new-password"
                    placeholder="Repeat your password"
                    class="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-11 pr-16 text-sm font-semibold outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-600/10"
                  />

                  <button
                    type="button"
                    class="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-xs font-black uppercase text-slate-500 hover:text-green-700"
                    @click="showConfirmPassword = !showConfirmPassword"
                  >
                    {{ showConfirmPassword ? 'Hide' : 'Show' }}
                  </button>
                </div>
              </div>


              <!-- SUBMIT -->

              <button
                type="submit"
                :disabled="submitting || !isValid"
                class="flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-4 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <span v-if="submitting">
                  Creating Account...
                </span>

                <span v-else>
                  Create Account
                </span>

                <ArrowRight
                  v-if="!submitting"
                  :size="18"
                />
              </button>


              <!-- LOGIN -->

              <p
                class="text-center text-sm text-slate-500"
              >
                Already have an account?

                <NuxtLink
                  to="/login"
                  class="font-black text-green-700 hover:text-green-800"
                >
                  Login
                </NuxtLink>
              </p>

            </form>

          </div>

        </div>

      </div>

    </section>

  </main>
</template>