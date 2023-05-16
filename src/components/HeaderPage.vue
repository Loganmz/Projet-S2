<script setup lang="ts">
import { ref } from 'vue'
import IconLogo from '@/components/icons/IconLogo.vue'

const menuIsOpen = ref(false)
</script>

<template>
  <header class="flex items-center justify-between px-4 gap-8 h-20 border-b-2 border-b-indigo-100">
    <a href="/">
      <IconLogo />
    </a>
    <button class="h-3 w-6 flex flex-col justify-between lg:hidden"
     @pointerdown="menuIsOpen = !menuIsOpen">
      <span class="block h-[2px] w-full bg-black transition duration-300"
      :class="{'translate-y-[5px] rotate-45':menuIsOpen }"></span>
      <span class="block h-[2px] w-full bg-black transition duration-300"
      :class="{'-translate-y-[5px] -rotate-45':menuIsOpen }"></span>
    </button>
    <nav
      class="invisible opacity-0 fixed z-10 bg-indigo-50 inset-0 mt-20 flex flex-col justify-between py-12 px-6 lg:visible lg:opacity-100 lg:static lg:mt-0 lg:flex-row lg:bg-transparent lg:flex-1"
      :class="{ '!visible !opacity-100': menuIsOpen }"
    >
      <ul class="flex flex-col gap-4 lg:flex-row">
        <li>
          <a class="block p-4 rounded-lg text-gray-500 active" href="">Rent</a>
        </li>
        <li><a class="block p-4 rounded-lg text-gray-500" href="">Buy</a></li>
        <li><a class="block p-4 rounded-lg text-gray-500" href="">Sell</a></li>
        <li><a class="block p-4 rounded-lg text-gray-500" href="">Manage property</a></li>
        <li><a class="block p-4 rounded-lg text-gray-500" href="">Resources</a></li>
      </ul>
      <div class="flex items-center gap-4 px-4">
        <button class="flex-1 p-3 rounded-lg border-2 border-indigo-200 font-bold text-indigo-500 lg:flex-none lg:px-6px">
          Login
        </button>
        <button class="flex-1 p-3 rounded-lg bg-indigo-500 text-white font-bold lg:flex-none lg:px-6px">Sign up</button>
      </div>
    </nav>
  </header>
</template>
