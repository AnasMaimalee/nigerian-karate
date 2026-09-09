<script setup lang="ts">
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from 'lucide-vue-next'
import { ref } from 'vue'

useSeoMeta({
  title: 'Login | Karate Federation of Nigeria',
  description:
    'Login to your Karate Federation of Nigeria athlete account.',
})

const email = ref('')
const password = ref('')

const showPassword = ref(false)
const rememberMe = ref(false)

const submitting = ref(false)
const errorMessage = ref('')

const submitLogin = async () => {
  errorMessage.value = ''

  if (!email.value.trim()) {
    errorMessage.value = 'Please enter your email address.'
    return
  }

  if (!password.value) {
    errorMessage.value = 'Please enter your password.'
    return
  }

  submitting.value = true

  try {
    /*
     * ============================================================
     * LARAVEL API
     * ============================================================
     *
     * Connect your authentication endpoint here.
     *
     * Example:
     *
     * const response = await $fetch('/auth/login', {
     *   method: 'POST',
     *   body: {
     *     email: email.value,
     *     password: password.value,
     *   },
     * })
     *
     * ============================================================
     */

    await new Promise(resolve => setTimeout(resolve, 900))

    console.log({
      email: email.value,
      password: password.value,
      remember: rememberMe.value,
    })

    // Temporary until your backend endpoint is connected.
    errorMessage.value =
      'Login endpoint is not connected yet. Connect this form to your Laravel authentication API.'
  } catch (error: any) {
    errorMessage.value =
      error?.data?.message ??
      'Unable to login. Please check your credentials and try again.'
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <main class="min-h-screen bg-[#06130b] text-white">

    <!-- ==========================================================
         BACKGROUND
    =========================================================== -->

    <section class="relative min-h-[calc(100vh-72px)] overflow-hidden">

      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.18),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(22,163,74,0.12),transparent_30%)]"
      />

      <div
        class="absolute left-[-120px] top-20 h-96 w-96 rounded-full bg-green-500/10 blur-3xl"
      />

      <div
        class="absolute bottom-[-150px] right-[-100px] h-[500px] w-[500px] rounded-full bg-green-400/10 blur-3xl"
      />


      <!-- ========================================================
           CONTENT
      ========================================================= -->

      <div
        class="relative mx-auto flex min-h-[calc(100vh-72px)] w-full max-w-6xl items-center justify-center px-4 py-10 sm:px-6 lg:px-8"
      >

        <div class="grid w-full max-w-5xl items-center gap-12 lg:grid-cols-2">

          <!-- ====================================================
               LEFT
          ===================================================== -->

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
                KFN Member Portal
              </span>
            </div>

            <h1
              class="max-w-xl text-5xl font-black leading-[1.02] tracking-tight xl:text-6xl"
            >
              Welcome back to
              <span class="text-green-400">
                KFN.
              </span>
            </h1>

            <p
              class="mt-6 max-w-lg text-base leading-8 text-white/60"
            >
              Access your Karate Federation of Nigeria athlete
              account and manage your federation registration.
            </p>

            <div
              class="mt-10 border-l-2 border-green-500/40 pl-5"
            >
              <p
                class="text-sm font-bold leading-7 text-white/70"
              >
                Karate Federation of Nigeria
              </p>

              <p
                class="mt-1 text-xs font-black uppercase tracking-[0.18em] text-green-400"
              >
                Official Member Platform
              </p>
            </div>

          </div>


          <!-- ====================================================
               LOGIN CARD
          ===================================================== -->

          <div
            class="w-full"
          >

            <div
              class="mx-auto w-full max-w-md rounded-[2rem] border border-white/10 bg-white p-6 text-slate-950 shadow-2xl sm:p-9"
            >

              <!-- LOGO -->

              <div
                class="mb-7 flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <img
                  src="/images/hero/logo.jpeg"
                  alt="Karate Federation of Nigeria"
                  class="h-full w-full object-contain"
                />
              </div>


              <!-- HEADER -->

              <div>
                <h2
                  class="text-2xl font-black tracking-tight sm:text-3xl"
                >
                  Welcome back
                </h2>

                <p
                  class="mt-2 text-sm leading-6 text-slate-500"
                >
                  Login to your KFN account.
                </p>
              </div>


              <!-- ERROR -->

              <div
                v-if="errorMessage"
                class="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold leading-6 text-red-700"
              >
                {{ errorMessage }}
              </div>


              <!-- FORM -->

              <form
                class="mt-7 space-y-5"
                @submit.prevent="submitLogin"
              >

                <!-- EMAIL -->

                <div>
                  <label
                    for="login-email"
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
                      id="login-email"
                      v-model="email"
                      type="email"
                      autocomplete="email"
                      placeholder="you@example.com"
                      class="h-13 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm font-semibold outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-600/10"
                    />
                  </div>
                </div>


                <!-- PASSWORD -->

                <div>
                  <div
                    class="mb-2 flex items-center justify-between"
                  >
                    <label
                      for="login-password"
                      class="block text-xs font-black uppercase tracking-wider text-slate-700"
                    >
                      Password
                    </label>

                    <button
                      type="button"
                      class="text-xs font-black text-green-700 hover:text-green-800"
                    >
                      Forgot Password?
                    </button>
                  </div>

                  <div class="relative">
                    <LockKeyhole
                      :size="17"
                      class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="login-password"
                      v-model="password"
                      :type="showPassword ? 'text' : 'password'"
                      autocomplete="current-password"
                      placeholder="Enter your password"
                      class="h-13 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-14 text-sm font-semibold outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-600/10"
                    />

                    <button
                      type="button"
                      class="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition hover:bg-green-50 hover:text-green-700"
                      :aria-label="
                        showPassword
                          ? 'Hide password'
                          : 'Show password'
                      "
                      @click="showPassword = !showPassword"
                    >
                      <EyeOff
                        v-if="showPassword"
                        :size="18"
                      />

                      <Eye
                        v-else
                        :size="18"
                      />
                    </button>
                  </div>
                </div>


                <!-- REMEMBER -->

                <label
                  class="flex cursor-pointer items-center gap-3"
                >
                  <input
                    v-model="rememberMe"
                    type="checkbox"
                    class="h-4 w-4 rounded border-slate-300 text-green-600 focus:ring-green-500"
                  />

                  <span
                    class="text-sm font-semibold text-slate-600"
                  >
                    Remember me
                  </span>
                </label>


                <!-- LOGIN -->

                <button
                  type="submit"
                  :disabled="submitting"
                  class="flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-4 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
                >

                  <span v-if="submitting">
                    Signing In...
                  </span>

                  <span v-else>
                    Login
                  </span>

                  <ArrowRight
                    v-if="!submitting"
                    :size="18"
                  />

                </button>

              </form>


              <!-- DIVIDER -->

              <div
                class="my-7 flex items-center gap-4"
              >
                <div class="h-px flex-1 bg-slate-200" />

                <span
                  class="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400"
                >
                  KFN
                </span>

                <div class="h-px flex-1 bg-slate-200" />
              </div>


              <!-- SIGN UP -->

              <p
                class="text-center text-sm text-slate-500"
              >
                Don't have an account?

                <NuxtLink
                  to="/signup"
                  class="font-black text-green-700 hover:text-green-800"
                >
                  Create Account
                </NuxtLink>
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  </main>
</template>