<script setup lang="ts">
import HeaderPage from './components/HeaderPage.vue'
import FooterPage from './components/FooterPage.vue'
import HeroPage from './components/HeroPage.vue'
</script>

<template>
  <HeaderPage />
  <RouterView />
  <HeroPage />
  <FooterPage />
</template>
