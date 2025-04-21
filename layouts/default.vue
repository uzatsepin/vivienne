<template>
  <div class="min-h-screen flex flex-col">
    <SiteHeader />
    <main class="flex-1 pt-16 md:pt-20">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>