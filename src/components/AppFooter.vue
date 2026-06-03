<script setup>
import { Instagram, Facebook, Linkedin } from 'lucide-vue-next'
</script>

<template>
  <footer class="bg-[#F8FAFC] px-6 pb-8 pt-12 lg:px-8">
    <div
      class="w-full rounded-[32px] bg-[#6D28D9] px-8 py-10 text-white lg:px-12 lg:py-12"
    >
      <div
        class="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between"
      >
        <!-- Logo -->
        <div>
          <img
            src="/Velo-logo.svg"
            alt="Velo"
            class="h-12 w-auto brightness-0 invert"
          />

          <p class="mt-3 max-w-[220px] text-sm leading-relaxed text-white/80">
            Nutikas ja keskkonnasõbralik viis linnas liikumiseks
          </p>
        </div>

        <!-- Navigation -->
        <nav
          class="flex flex-col gap-4 text-center lg:flex-row lg:items-center lg:gap-8"
        >
          <a href="#vehicles" class="footer-link">Sõidukid</a>
          <a href="#mission" class="footer-link">Meist</a>
          <a href="#news" class="footer-link">Uudised</a>
          <a href="#offers" class="footer-link">Kampaaniad</a>
          <a href="#contact" class="footer-link">Kontakt</a>
        </nav>

        <!-- Social -->
        <div class="flex justify-center gap-4">
          <a href="#" class="social-btn">
            <Instagram :size="18" />
          </a>

          <a href="#" class="social-btn">
            <Facebook :size="18" />
          </a>

          <a href="#" class="social-btn">
            <Linkedin :size="18" />
          </a>
        </div>
      </div>

      <!-- Bottom line -->
      <div class="mt-10 border-t border-white/20 pt-6">
        <div
          class="flex flex-col items-center gap-4 text-sm text-white/70 lg:flex-row lg:items-center lg:justify-between"
        >
          <span>2026 Velo OÜ</span>

          <div class="flex flex-col gap-3 text-center lg:flex-row lg:gap-8">
            <a href="#" class="footer-link">
              Privaatsuspoliitika
            </a>

            <a href="#" class="footer-link">
              Kasutajatingimused
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-link {
  transition: all 0.2s ease;
}

.footer-link:hover {
  opacity: 0.8;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.social-btn:hover {
  transform: translateY(-2px);
  opacity: 0.8;
}
</style>