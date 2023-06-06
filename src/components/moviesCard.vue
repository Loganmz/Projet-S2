<script setup lang="ts">
import { pb } from '@/backend'
import type { MoviesResponse } from '@/pocketbase-types';

const MoviesInfo: MoviesResponse = defineProps<MoviesResponse>();
const img = MoviesInfo.attach
const urlImg = img && pb.getFileUrl(MoviesInfo, img, { thumb: '100x200' })



</script>
<template>
    <div class="flex text-center items-center flex-col ">
        <img :src="urlImg" class="flex  h-72 w-52"/>
        <h2 class="font-futura-bdcn-bt text-lg">{{ title }}</h2>
        <p class="font-futura-bdcn-bt text-sm ">{{ filmer }}</p>
        <p class="font-futura-bdcn-bt text-sm">{{ synopsis }}</p>
        <p class="font-futura-bdcn-bt text-sm">{{ genre }}</p>
        <p class="font-futura-bdcn-bt text-sm">{{ time }}min</p>
        <p class="font-futura-bdcn-bt text-sm">{{ note }}/10</p>
        <p class="font-futura-bdcn-bt text-sm">{{ release_year }}</p>

    </div>
    <RouterLink to="random">
    <div class="text-center">
        <button
        class="w-48 bg-blue text-white mb-6 mt-8 font-bold py-2 px-4 rounded-full"
        >   
        spin again
        </button>
    </div>
    </RouterLink>
</template>

