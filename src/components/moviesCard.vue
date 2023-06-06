<script setup lang="ts">
import { pb } from '@/backend'
import type { MoviesResponse } from '@/pocketbase-types';
import iconestar from '@/components/icons/iconestar.vue'
const MoviesInfo: MoviesResponse = defineProps<MoviesResponse>();
const img = MoviesInfo.attach
const urlImg = img && pb.getFileUrl(MoviesInfo, img, { thumb: '100x200' })

</script>
<template>
    
    <div class=" flex flex-col items-center bg-gray-800 rounded-lg shadow sm:flex-row max-w-xl self-center  ">
        <img :src="urlImg" class="object-cover w-full h-96 rounded-lg"/>
        <div class="flex flex-col justify-between px-4 leading-normal">
            <h2 class="mb-2 font-futura-bdcn-bt text-base font-bold tracking-tight text-gray-900 dark:text-white">{{ title }}</h2>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ filmer }}</p>
            <p class="mb-3 font-normal text-white ">{{ synopsis }}</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ genre }}</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ time }}min</p>
            <div class="flex flex-row grid-col-2">
                <iconestar/>
                <p class="mb-3 font-normal text-white ">{{ note }}/10</p>
                
            </div>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ release_year }}</p>
        </div>
    </div>
</template>

