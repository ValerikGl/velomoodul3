<script setup>
import {
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-vue-next";
</script>

<template>
  <footer class="bg-[#F8FAFC] px-5 pb-8 pt-12 sm:px-6 lg:px-8">
    <div
      class="w-full overflow-hidden rounded-[32px] bg-[#6D28D9] text-white shadow-[0_24px_70px_rgba(109,40,217,0.25)]"
    >
      <!-- Top -->
      <div class="grid gap-10 px-7 py-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:px-12 lg:py-12">
        <!-- Brand -->
        <div>
          <img
            src="/Velo-logo.svg"
            alt="Velo"
            class="h-12 w-auto brightness-0 invert"
          />

          <p class="mt-4 max-w-[260px] text-sm leading-relaxed text-white/80">
            Nutikas ja keskkonnasõbralik viis linnas liikumiseks. Leia sõiduk,
            broneeri sekunditega ja liigu mugavalt üle Tallinna.
          </p>

          <div class="mt-6 flex gap-3">
            <a href="#" class="social-btn" aria-label="Instagram">
              <Instagram :size="18" />
            </a>

            <a href="#" class="social-btn" aria-label="Facebook">
              <Facebook :size="18" />
            </a>

            <a href="#" class="social-btn" aria-label="LinkedIn">
              <Linkedin :size="18" />
            </a>
          </div>
        </div>

        <!-- Navigation -->
        <div>
          <h3 class="footer-title">
            Navigatsioon
          </h3>

          <nav class="mt-5 flex flex-col gap-3">
            <RouterLink to="/vehicles" class="footer-link">
              Sõidukid
            </RouterLink>

            <RouterLink to="/mission" class="footer-link">
              Meist
            </RouterLink>

            <RouterLink to="/news" class="footer-link">
              Uudised
            </RouterLink>

            <RouterLink to="/offers" class="footer-link">
              Kampaaniad
            </RouterLink>

            <RouterLink to="/contact" class="footer-link">
              Kontakt
            </RouterLink>
          </nav>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="footer-title">
            Kontakt
          </h3>

          <div class="mt-5 space-y-4 text-sm text-white/80">
            <div class="flex gap-3">
              <MapPin class="mt-0.5 shrink-0 text-white" :size="18" />
              <div>
                <p class="font-bold text-white">Narva mnt 5</p>
                <p>Tallinn, Estonia</p>
              </div>
            </div>

            <div class="flex gap-3">
              <Phone class="mt-0.5 shrink-0 text-white" :size="18" />
              <div>
                <p class="font-bold text-white">+372 5432 1234</p>
                <p>Klienditugi</p>
              </div>
            </div>

            <div class="flex gap-3">
              <Mail class="mt-0.5 shrink-0 text-white" :size="18" />
              <div>
                <p class="font-bold text-white">info@velo.ee</p>
                <p>Vastame 24h jooksul</p>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div>
          <h3 class="footer-title">
            Rendi Velo juba täna
          </h3>

          <p class="mt-5 text-sm leading-relaxed text-white/80">
            Vali sobiv elektritõukeratas, elektrijalgratas või elektrimopeed ja
            alusta sõitu kiirelt.
          </p>

          <div class="mt-5 flex items-center gap-3 text-sm text-white/80">
            <Clock :size="18" class="shrink-0 text-white" />
            <span>E-R 09:00 - 19:00</span>
          </div>

          <RouterLink
            to="/vehicles"
            class="mt-6 inline-flex h-[46px] items-center justify-center gap-3 rounded-xl bg-white px-6 text-sm font-extrabold text-[#6D28D9] shadow-lg transition hover:scale-105"
          >
            Vaata sõidukeid
            <ArrowRight :size="18" />
          </RouterLink>
        </div>
      </div>

      <!-- Bottom -->
      <div class="border-t border-white/20 px-7 py-6 lg:px-12">
        <div
          class="flex flex-col items-center gap-4 text-sm text-white/70 lg:flex-row lg:items-center lg:justify-between"
        >
          <span>© 2026 Velo OÜ. Kõik õigused kaitstud.</span>

          <div class="flex flex-col gap-3 text-center sm:flex-row sm:gap-8">
            <a href="#" class="footer-link">
              Privaatsuspoliitika
            </a>

            <a href="#" class="footer-link">
              Kasutajatingimused
            </a>

            <a href="#" class="footer-link">
              Küpsised
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-title {
  font-size: 16px;
  font-weight: 800;
  color: white;
}

.footer-link {
  color: rgba(255, 255, 255, 0.78);
  transition:
    color 0.2s ease,
    transform 0.2s ease,
    opacity 0.2s ease;
}

.footer-link:hover {
  color: white;
  transform: translateX(3px);
}

.social-btn {
  display: flex;
  height: 38px;
  width: 38px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  color: white;
  transition:
    transform 0.2s ease,
    background 0.2s ease;
}

.social-btn:hover {
  transform: translateY(-3px);
  background: rgba(255, 255, 255, 0.22);
}
</style>