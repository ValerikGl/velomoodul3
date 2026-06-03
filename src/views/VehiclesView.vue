<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import {
  SlidersHorizontal,
  Gauge,
  BatteryCharging,
  ArrowRight,
} from "lucide-vue-next";
import { RouterLink } from "vue-router";

const selectedType = ref("all");
const selectedPrice = ref("all");
const selectedRange = ref(100);
const selectedSort = ref("popular");

const isFiltersOpen = ref(false);
const isMobile = ref(false);

const checkScreen = () => {
  isMobile.value = window.innerWidth < 1024;
};

onMounted(() => {
  checkScreen();
  window.addEventListener("resize", checkScreen);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkScreen);
});

const vehicles = [
  {
    tag: "POPULAARNE",
    type: "scooter",
    price: 2,
    popularity: 6,
    name: "Velo Lite",
    desc: "Kerge elektritõukeratas lühikesteks linnasõitudeks.",
    speed: "20 km/h",
    speedValue: 20,
    range: "30 km",
    rangeValue: 30,
    img: "/vehicle-1.png",
  },
  {
    tag: "UUS",
    type: "moped",
    price: 6,
    popularity: 5,
    name: "Velo Ride",
    desc: "Elektrimopeed mugavaks liikumiseks pikematel marsruutidel.",
    speed: "45 km/h",
    speedValue: 45,
    range: "80 km",
    rangeValue: 80,
    img: "/vehicle-2.png",
  },
  {
    tag: "PREEMIUM",
    type: "bike",
    price: 4,
    popularity: 4,
    name: "Velo Urban",
    desc: "Premium elektrijalgratas aktiivseks linnakasutuseks.",
    speed: "25 km/h",
    speedValue: 25,
    range: "75 km",
    rangeValue: 75,
    img: "/vehicle-3.png",
  },
  {
    tag: "PRO",
    type: "scooter",
    price: 3,
    popularity: 3,
    name: "Velo Pro",
    desc: "Võimsam elektritõukeratas suurema sõiduulatusega.",
    speed: "25 km/h",
    speedValue: 25,
    range: "50 km",
    rangeValue: 50,
    img: "/vehicle-1.png",
  },
  {
    tag: "COMFORT",
    type: "moped",
    price: 5,
    popularity: 2,
    name: "Velo Cruise",
    desc: "Mugav istmega elektrisõiduk igapäevaseks kasutamiseks.",
    speed: "35 km/h",
    speedValue: 35,
    range: "70 km",
    rangeValue: 70,
    img: "/vehicle-2.png",
  },
  {
    tag: "ECO",
    type: "bike",
    price: 2,
    popularity: 1,
    name: "Velo City",
    desc: "Praktiline elektrijalgratas tööle ja kooli sõitmiseks.",
    speed: "25 km/h",
    speedValue: 25,
    range: "60 km",
    rangeValue: 60,
    img: "/vehicle-3.png",
  },
];

const resetFilters = () => {
  selectedType.value = "all";
  selectedPrice.value = "all";
  selectedRange.value = 100;
  selectedSort.value = "popular";
};

const filteredVehicles = computed(() => {
  let result = [...vehicles];

  if (selectedType.value !== "all") {
    result = result.filter((vehicle) => vehicle.type === selectedType.value);
  }

  if (selectedPrice.value === "under3") {
    result = result.filter((vehicle) => vehicle.price < 3);
  }

  if (selectedPrice.value === "3to5") {
    result = result.filter(
      (vehicle) => vehicle.price >= 3 && vehicle.price <= 5
    );
  }

  if (selectedPrice.value === "over5") {
    result = result.filter((vehicle) => vehicle.price > 5);
  }

  result = result.filter(
    (vehicle) => vehicle.rangeValue <= Number(selectedRange.value)
  );

  if (selectedSort.value === "popular") {
    result.sort((a, b) => b.popularity - a.popularity);
  }

  if (selectedSort.value === "cheap") {
    result.sort((a, b) => a.price - b.price);
  }

  if (selectedSort.value === "fast") {
    result.sort((a, b) => b.speedValue - a.speedValue);
  }

  if (selectedSort.value === "range") {
    result.sort((a, b) => b.rangeValue - a.rangeValue);
  }

  return result;
});
</script>

<template>
  <main class="bg-[#F8FAFC] px-5 py-12 sm:px-6 lg:py-16">
    <div
      class="mx-auto grid max-w-[1280px] items-start gap-8 lg:grid-cols-[280px_1fr]"
    >
      <aside v-reveal
        class="h-fit rounded-3xl bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.12)] lg:sticky lg:top-28 lg:p-7"
      >
        <div class="flex items-center justify-between">
          <button
            class="flex items-center gap-3"
            @click="isFiltersOpen = !isFiltersOpen"
          >
            <SlidersHorizontal class="text-[#6D28D9]" :size="22" />

            <h2 class="font-extrabold text-[#0F172A]">
              Filtreeri
            </h2>

            <svg
              class="h-4 w-4 text-[#6D28D9] transition lg:hidden"
              :class="{ 'rotate-180': isFiltersOpen }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <button
            class="text-sm font-bold text-[#6D28D9]"
            @click="resetFilters"
          >
            Kustuta filtrid
          </button>
        </div>

        <Transition name="filters">
          <div
            v-show="!isMobile || isFiltersOpen"
            class="mt-6 lg:mt-8"
          >
            <div>
              <h3 class="mb-4 font-extrabold text-[#0F172A]">Tüüp</h3>

              <div class="space-y-3">
                <label class="filter-option">
                  <input v-model="selectedType" type="radio" value="all" />
                  <span>Kõik</span>
                  <strong>6</strong>
                </label>

                <label class="filter-option">
                  <input v-model="selectedType" type="radio" value="scooter" />
                  <span>Elektritõukeratas</span>
                  <strong>2</strong>
                </label>

                <label class="filter-option">
                  <input v-model="selectedType" type="radio" value="bike" />
                  <span>Elektrijalgratas</span>
                  <strong>2</strong>
                </label>

                <label class="filter-option">
                  <input v-model="selectedType" type="radio" value="moped" />
                  <span>Elektrimopeed</span>
                  <strong>2</strong>
                </label>
              </div>
            </div>

            <div class="my-7 h-px bg-[#DDD0FF]"></div>

            <div>
              <h3 class="mb-4 font-extrabold text-[#0F172A]">Hind(€/h)</h3>

              <div class="space-y-3">
                <label class="filter-option">
                  <input v-model="selectedPrice" type="radio" value="all" />
                  <span>Kõik</span>
                  <strong>6</strong>
                </label>

                <label class="filter-option">
                  <input v-model="selectedPrice" type="radio" value="under3" />
                  <span>Kuni 3€/h</span>
                  <strong>2</strong>
                </label>

                <label class="filter-option">
                  <input v-model="selectedPrice" type="radio" value="3to5" />
                  <span>3-5€/h</span>
                  <strong>3</strong>
                </label>

                <label class="filter-option">
                  <input v-model="selectedPrice" type="radio" value="over5" />
                  <span>5+ €/h</span>
                  <strong>1</strong>
                </label>
              </div>
            </div>

            <div class="my-7 h-px bg-[#DDD0FF]"></div>

            <div>
              <div class="mb-4 flex items-center justify-between">
                <h3 class="font-extrabold text-[#0F172A]">Sõiduulatus</h3>

                <span class="text-sm font-bold text-[#6D28D9]">
                  {{ selectedRange }}KM
                </span>
              </div>

              <input
                v-model="selectedRange"
                type="range"
                min="0"
                max="100"
                step="5"
                class="w-full accent-[#6D28D9]"
              />

              <div
                class="mt-2 flex justify-between text-sm font-bold text-[#0F172A]"
              >
                <span>0KM</span>
                <span>100KM</span>
              </div>
            </div>
          </div>
        </Transition>
      </aside>

      <section v-reveal>
        <div
          class="mb-6 flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.12)] sm:flex-row sm:items-center sm:justify-between"
        >
          <p class="font-extrabold text-[#0F172A]">
            Leitud {{ filteredVehicles.length }} sõidukit
          </p>

          <label
            class="flex items-center justify-between gap-3 text-sm font-semibold text-[#0F172A] sm:justify-end"
          >
            <span class="shrink-0">Sorteeri:</span>

            <div class="relative">
              <select
                v-model="selectedSort"
                class="h-12 min-w-[220px] appearance-none rounded-xl border border-[#CBD5E1] bg-white pl-4 pr-12 text-[14px] font-extrabold text-[#0F172A]"
              >
                <option value="popular">Populaarsemad</option>
                <option value="cheap">Odavamad</option>
                <option value="fast">Kiiremad</option>
                <option value="range">Suurim sõiduulatus</option>
              </select>

              <svg
                class="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0F172A]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </label>
        </div>

        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="vehicle in filteredVehicles"
            :key="vehicle.name"
            class="rounded-[24px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.12)] transition duration-300 hover:-translate-y-2"
          >
            <span
              class="rounded-full bg-[#EDE4FF] px-4 py-2 text-[12px] font-bold text-[#6D28D9]"
            >
              {{ vehicle.tag }}
            </span>

            <img
              :src="vehicle.img"
              :alt="vehicle.name"
              class="mx-auto mt-4 h-[190px] w-full object-contain"
            />

            <h3 class="mt-4 text-[24px] font-extrabold text-[#0F172A]">
              {{ vehicle.name }}
            </h3>

            <p
              class="mt-2 min-h-[54px] text-[16px] leading-snug text-[#0F172A]"
            >
              {{ vehicle.desc }}
            </p>

            <div class="mt-6 grid grid-cols-2 gap-4">
              <div class="flex items-center gap-3">
                <Gauge class="text-[#6D28D9]" :size="28" />
                <strong class="text-[#0F172A]">{{ vehicle.speed }}</strong>
              </div>

              <div class="flex items-center gap-3">
                <BatteryCharging class="text-[#6D28D9]" :size="28" />
                <strong class="text-[#0F172A]">{{ vehicle.range }}</strong>
              </div>
            </div>

            <RouterLink
              to="/vehicles"
              class="mt-7 flex items-center justify-center gap-3 rounded-xl border border-[#6D28D9] bg-[#F3E8FF] px-5 py-3 font-bold text-[#6D28D9] transition hover:bg-[#EDE4FF]"
            >
              Vaata lähemalt
              <ArrowRight :size="18" />
            </RouterLink>
          </article>
        </div>

        <div
          v-if="filteredVehicles.length === 0"
          class="mt-8 rounded-2xl bg-white p-8 text-center font-bold text-[#0F172A] shadow-[0_18px_50px_rgba(15,23,42,0.12)]"
        >
          Ühtegi sõidukit ei leitud.
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.filter-option {
  display: grid;
  grid-template-columns: 18px 1fr auto;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #0f172a;
}

.filter-option input {
  accent-color: #6d28d9;
}

.filter-option strong {
  color: #6d28d9;
}

.filters-enter-active,
.filters-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.filters-enter-from,
.filters-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>