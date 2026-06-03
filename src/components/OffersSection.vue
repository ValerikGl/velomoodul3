<script setup>
import { ref } from 'vue'
import { ArrowLeft, ArrowRight } from 'lucide-vue-next'

const currentOffer = ref(0)

const offers = [
  '/offer-1.png',
  '/offer-2.png',
  '/offer-3.png',
  '/offer-4.png',
  '/offer-5.png',
]

const nextOffer = () => {
  currentOffer.value = (currentOffer.value + 1) % offers.length
}

const prevOffer = () => {
  currentOffer.value =
    currentOffer.value === 0
      ? offers.length - 1
      : currentOffer.value - 1
}

// Swipe support
const touchStartX = ref(0)
const touchEndX = ref(0)

const handleTouchStart = (event) => {
  touchStartX.value = event.changedTouches[0].screenX
}

const handleTouchEnd = (event) => {
  touchEndX.value = event.changedTouches[0].screenX

  const diff = touchStartX.value - touchEndX.value

  if (Math.abs(diff) < 50) return

  if (diff > 0) {
    nextOffer()
  } else {
    prevOffer()
  }
}
</script>

<template>
  <section id="offers" class="overflow-hidden bg-[#F8FAFC] py-20 lg:py-24">
    <div class="mx-auto max-w-[1280px] px-5 sm:px-6">
      <div class="flex items-start justify-between gap-6">
        <div>
          <h2
            class="text-[38px] font-extrabold text-[#0F172A] sm:text-[56px]"
          >
            Pakkumised
          </h2>

          <p
            class="mt-4 text-[18px] font-semibold text-[#0F172A] sm:text-[22px]"
          >
            Säästa rohkem meie parimate kampaaniate ja eripakkumistega.
          </p>
        </div>

        <div class="hidden gap-4 lg:flex">
          <button
            class="flex h-14 w-14 items-center justify-center rounded-full bg-[#6D28D9] text-white shadow-xl transition hover:scale-110"
            @click="prevOffer"
          >
            <ArrowLeft :size="30" />
          </button>

          <button
            class="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#6D28D9] shadow-xl transition hover:scale-110"
            @click="nextOffer"
          >
            <ArrowRight :size="30" />
          </button>
        </div>
      </div>

      <div
        class="mt-12"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
      >
        <Transition name="offer-slide" mode="out-in">
          <div :key="currentOffer" class="relative">
            <img
              :src="offers[currentOffer]"
              alt="Velo pakkumine"
              class="mx-auto w-full max-w-[1120px] rounded-3xl object-cover shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
            />
          </div>
        </Transition>
      </div>

      <div class="mt-8 flex justify-center gap-4">
        <button
          v-for="(_, index) in offers"
          :key="index"
          class="h-4 w-4 rounded-full transition"
          :class="
            index === currentOffer
              ? 'bg-[#6D28D9]'
              : 'bg-[#DDD0FF]'
          "
          @click="currentOffer = index"
        />
      </div>

      
    </div>
  </section>
</template>

<style scoped>
.offer-slide-enter-active,
.offer-slide-leave-active {
  transition:
    opacity 0.45s ease,
    transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}

.offer-slide-enter-from {
  opacity: 0;
  transform: translateX(80px) scale(0.98);
}

.offer-slide-leave-to {
  opacity: 0;
  transform: translateX(-80px) scale(0.98);
}
</style>