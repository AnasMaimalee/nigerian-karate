<script setup lang="ts">
import { Facebook, Instagram, Youtube, Linkedin, Twitter, Music2, MessageCircle, Send } from 'lucide-vue-next'

interface SocialLink {
  name: string
  icon: Component
  href: string
  hoverClass: string
}

const socialLinks: SocialLink[] = [
  {
    name: 'Facebook',
    icon: Facebook,
    href: '#',
    hoverClass: 'hover:bg-[#1877F2] hover:border-[#1877F2]'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: '#',
    hoverClass: 'hover:bg-[#E4405F] hover:border-[#E4405F]'
  },
  {
    name: 'X (Twitter)',
    icon: Twitter,
    href: '#',
    hoverClass: 'hover:bg-black hover:border-white'
  },
  {
    name: 'TikTok',
    icon: Music2,
    href: '#',
    hoverClass: 'hover:bg-black hover:border-white'
  },
  {
    name: 'YouTube',
    icon: Youtube,
    href: '#',
    hoverClass: 'hover:bg-[#FF0000] hover:border-[#FF0000]'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: '#',
    hoverClass: 'hover:bg-[#0A66C2] hover:border-[#0A66C2]'
  },
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    href: '#',
    hoverClass: 'hover:bg-[#25D366] hover:border-[#25D366]'
  },
  {
    name: 'Telegram',
    icon: Send,
    href: '#',
    hoverClass: 'hover:bg-[#229ED9] hover:border-[#229ED9]'
  }
]
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <a v-for="social in socialLinks" :key="social.name" :href="social.href" :aria-label="`Follow Nigerian Karate Federation on ${social.name}`" target="_blank" rel="noopener noreferrer" :class="['group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-lg', social.hoverClass]">
      <component :is="social.icon" :size="18" stroke-width="2.2" class="relative z-10 transition-transform duration-300 group-hover:scale-110" />

      <span class="absolute inset-0 translate-y-full bg-white/10 transition-transform duration-300 group-hover:translate-y-0" />
    </a>
  </div>
</template>