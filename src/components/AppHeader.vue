<template>
  <header class="sticky top-0 z-50 bg-[#F8FAFC]/95 backdrop-blur">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
      <RouterLink to="/" class="flex items-center">
        <img
          src="/Velo-logo.svg"
          alt="Velo logo"
          class="h-8 w-auto"
        />
      </RouterLink>

      <nav class="hidden items-center gap-8 text-[16px] font-semibold text-[#0F172A] lg:flex">
        <RouterLink to="/" class="nav-link">Avaleht</RouterLink>
        <RouterLink to="/vehicles" class="nav-link">Sõidukid</RouterLink>
        <a href="#mission" class="nav-link">Meist</a>
        <a href="#news" class="nav-link">Uudised</a>
        <a href="#offers" class="nav-link">Kampaaniad</a>
        <RouterLink to="/contact" class="nav-link">Kontakt</RouterLink>
      </nav>

      <RouterLink
        to="/booking"
        class="hidden rounded-xl bg-[#6D28D9] px-6 py-3 text-[16px] font-bold text-white shadow-lg transition hover:bg-[#5B21B6] md:block"
      >
        Rendi kohe
      </RouterLink>
    </div>
  </header>
</template>

<style scoped>
.nav-link {
  position: relative;
  padding-bottom: 6px;
  transition: color 0.2s ease;
}

.nav-link.router-link-active,
.nav-link:hover {
  color: #6d28d9;
}

.nav-link.router-link-active::after,
.nav-link:hover::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 100%;
  background: #6d28d9;
  border-radius: 999px;
}
</style>