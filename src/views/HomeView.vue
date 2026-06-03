<template>
  <section class="bg-[#f5f6fa] text-[#12182f]">
    <!-- HERO -->
    <section class="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2">
      <div>
        <h1 class="text-5xl lg:text-6xl font-extrabold">
          Liigu linnas <br />
          kiiremini <span class="text-violet-700">velo'ga</span>
        </h1>

        <p class="mt-6 max-w-xl text-lg text-slate-600">
          Jätkusuutlik, kiire ja mugav viis linnaruumi navigeerimiseks.
          Lae alla äpp või rendi veebis ja alusta sõitu juba täna.
        </p>

        <div class="mt-8 flex gap-4">
          <RouterLink to="/booking" class="rounded-xl bg-violet-700 px-6 py-3 font-semibold text-white">
            Rendi välja
          </RouterLink>
          <RouterLink to="/vehicles" class="rounded-xl border border-violet-700 px-6 py-3 font-semibold text-violet-700">
            Vaata sõidukeid
          </RouterLink>
        </div>

        <div class="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div>
            <div class="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-violet-200 text-violet-700">⚡</div>
            <h3 class="font-bold">Kiire ja lihtne</h3>
            <p class="text-sm text-slate-500">Broneeri minutiga</p>
          </div>
          <div>
            <div class="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-violet-200 text-violet-700">🌿</div>
            <h3 class="font-bold">Keskkonnasõbralik</h3>
            <p class="text-sm text-slate-500">Roheline liikumine</p>
          </div>
          <div>
            <div class="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-violet-200 text-violet-700">🛡️</div>
            <h3 class="font-bold">Turvaline</h3>
            <p class="text-sm text-slate-500">Usaldusväärne alati</p>
          </div>
        </div>
      </div>

      <div class="relative">
        <img
          src="/images/hero-scooter.jpg"
          alt="Velo elektritõukeratas linnas"
          class="h-[520px] w-full rounded-2xl object-cover shadow-xl"
        />

        <div class="absolute left-[-40px] top-16 rounded-2xl bg-white px-8 py-5 shadow-xl">
          <strong class="text-violet-700">⚡ 50 km</strong>
          <p class="text-sm">Max sõiduulatus</p>
        </div>

        <div class="absolute bottom-20 left-[-20px] rounded-2xl bg-white px-8 py-5 shadow-xl">
          <strong class="text-violet-700">👤 12 000</strong>
          <p class="text-sm">Rahulolevat kasutajat</p>
        </div>

        <div class="absolute bottom-32 right-[-35px] rounded-2xl bg-white px-8 py-5 shadow-xl">
          <strong class="text-violet-700">🛴 350+</strong>
          <p class="text-sm">Sõidukit</p>
        </div>
      </div>
    </section>

    <!-- MISSIOON -->
    <section class="mx-auto max-w-7xl px-6 py-20 text-center">
      <h2 class="text-4xl font-extrabold">Meie <span class="text-violet-700">Missioon</span></h2>
      <p class="mx-auto mt-5 max-w-3xl text-slate-600">
        Oleme pühendunud nutika ja jätkusuutliku linnaliikuvuse loomisele.
      </p>

      <div class="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div class="rounded-2xl bg-white p-12 shadow-xl">
          <div class="text-6xl">🌿</div>
          <h3 class="mt-6 text-2xl font-bold">Keskkonnasõbralik</h3>
          <div class="mx-auto my-6 h-1 w-24 bg-violet-700"></div>
          <p class="text-slate-600">Elektrilised sõidukid aitavad muuta linna puhtamaks.</p>
        </div>

        <div class="rounded-2xl bg-white p-12 shadow-xl">
          <div class="text-6xl text-violet-700">⚡</div>
          <h3 class="mt-6 text-2xl font-bold">Kiire ja mugav</h3>
          <div class="mx-auto my-6 h-1 w-24 bg-violet-700"></div>
          <p class="text-slate-600">Väldi ummikuid ja jõua sihtkohta mugavalt.</p>
        </div>

        <div class="rounded-2xl bg-white p-12 shadow-xl">
          <div class="text-6xl">🛡️</div>
          <h3 class="mt-6 text-2xl font-bold">Turvaline kasutus</h3>
          <div class="mx-auto my-6 h-1 w-24 bg-violet-700"></div>
          <p class="text-slate-600">Kõik tõukerattad läbivad regulaarse kontrolli.</p>
        </div>
      </div>
    </section>

    <!-- UUSIMAD SÕIDUKID -->
    <section class="mx-auto max-w-7xl px-6 py-16">
      <div class="flex items-end justify-between">
        <div>
          <h2 class="text-4xl font-extrabold">Uusimad <span class="text-violet-700">sõidukid</span></h2>
          <p class="mt-3 text-slate-600">Kaasaegsed ja hooldatud elektritõukerattad.</p>
        </div>

        <RouterLink to="/vehicles" class="hidden rounded-xl bg-violet-700 px-5 py-3 text-white md:block">
          Vaata kõiki sõidukeid →
        </RouterLink>
      </div>

      <div class="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        <article
          v-for="vehicle in vehicles"
          :key="vehicle.id"
          class="rounded-2xl bg-white p-6 shadow-xl"
        >
          <span class="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-700">
            {{ vehicle.tag }}
          </span>

          <img :src="vehicle.image" :alt="vehicle.name" class="mx-auto mt-6 h-44 object-contain" />

          <h3 class="mt-6 text-xl font-bold">{{ vehicle.name }}</h3>
          <p class="mt-2 text-sm text-slate-600">{{ vehicle.description }}</p>

          <div class="mt-5 grid grid-cols-3 gap-3 text-sm">
            <div>⚡ {{ vehicle.speed }}</div>
            <div>🔋 {{ vehicle.range }}</div>
            <div>📍 {{ vehicle.location }}</div>
          </div>

          <RouterLink
            :to="`/vehicles/${vehicle.id}`"
            class="mt-6 block rounded-xl border border-violet-300 py-3 text-center font-semibold text-violet-700"
          >
            Vaata lähemalt →
          </RouterLink>
        </article>
      </div>
    </section>

    <!-- BLOG -->
    <section class="mx-auto max-w-7xl px-6 py-16">
      <h2 class="text-4xl font-extrabold">Blogi & Uudised</h2>
      <p class="mt-3 text-slate-600">Hoia end kursis Velo uusimate uudiste ja sündmustega.</p>

      <div class="mt-10 overflow-hidden rounded-2xl bg-white shadow-xl md:grid md:grid-cols-2">
        <img src="/images/blog-main.jpg" alt="Velo uudis" class="h-full w-full object-cover" />

        <div class="p-10">
          <p class="text-sm font-bold text-violet-700">01.06.2026</p>
          <h3 class="mt-4 text-3xl font-extrabold">Uus Velo ride nüüd saadaval!</h3>
          <p class="mt-5 text-slate-600">
            Tutvustame meie uusimat elektrimopeedi mudelit, mis pakub kuni 80 km sõiduulatust.
          </p>
          <button class="mt-8 rounded-xl bg-violet-700 px-6 py-3 text-white">Loe rohkem →</button>
        </div>
      </div>
    </section>

    <!-- PAKKUMISED -->
    <section class="mx-auto max-w-7xl px-6 py-16">
      <h2 class="text-4xl font-extrabold">Pakkumised</h2>
      <p class="mt-3 text-slate-600">Säästa rohkem meie parimate kampaaniate ja eripakkumistega.</p>

      <div class="mt-10 rounded-3xl bg-gradient-to-r from-violet-100 to-white p-12 shadow-xl md:flex md:items-center md:justify-between">
        <div>
          <span class="rounded-full bg-white px-4 py-2 text-sm font-bold text-violet-700">
            ☀️ SUVEKAMPAANIA
          </span>
          <h3 class="mt-8 text-7xl font-extrabold text-violet-700">-20%</h3>
          <p class="mt-4 text-2xl font-bold">kõik elektritõukerattad</p>
          <p class="mt-3 text-slate-600">Sõida rohkem, maksa vähem.</p>
          <button class="mt-8 rounded-xl bg-violet-700 px-7 py-3 text-white">Kasuta pakkumist →</button>
        </div>

        <img src="/images/scooter-offer.png" alt="Pakkumine" class="mt-10 max-h-96 md:mt-0" />
      </div>
    </section>

    <!-- APP -->
    <section class="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2">
      <div>
        <h2 class="text-4xl font-extrabold">Sõida nutikamalt</h2>
        <p class="mt-5 text-slate-600">
          Meie rakendus teeb sõiduki leidmise, broneerimise ja avamise lihtsaks.
        </p>

        <div class="mt-10 space-y-6">
          <div class="flex gap-4">
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-violet-200 text-violet-700">📍</div>
            <div>
              <h3 class="font-bold">Leia lähim sõiduk</h3>
              <p class="text-sm text-slate-500">Näed reaalajas kõiki sõidukeid.</p>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-violet-200 text-violet-700">🔒</div>
            <div>
              <h3 class="font-bold">Broneeri sekunditega</h3>
              <p class="text-sm text-slate-500">Broneeri või ava sõiduk ühe klikiga.</p>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-violet-200 text-violet-700">⚡</div>
            <div>
              <h3 class="font-bold">Ava sõit ühe puudutusega</h3>
              <p class="text-sm text-slate-500">Kiire ja mugav liikumine.</p>
            </div>
          </div>
        </div>
      </div>

      <img src="/images/app-preview.png" alt="Velo rakendus" class="mx-auto max-h-[520px]" />
    </section>
  </section>
</template>

<script setup>
const vehicles = [
  {
    id: 1,
    tag: 'populaarne',
    name: 'Velo Pro',
    description: 'Võimas elektritõukeratas igapäevaseks linnasõiduks.',
    speed: '25 km/h',
    range: '50 km',
    location: 'Kesklinn',
    image: '/images/scooter-1.png',
  },
  {
    id: 2,
    tag: 'uus',
    name: 'Velo Lite',
    description: 'Kerge ja mugav tõukeratas lühikesteks sõitudeks.',
    speed: '25 km/h',
    range: '40 km',
    location: 'Kadriorg',
    image: '/images/scooter-2.png',
  },
  {
    id: 3,
    tag: 'premium',
    name: 'Velo Urban',
    description: 'Kaasaegne elektrijalgratas kiireks linnaliikumiseks.',
    speed: '28 km/h',
    range: '75 km',
    location: 'Rotermanni',
    image: '/images/scooter-3.png',
  },
]
</script>