<script setup lang="ts">
import { pb } from '@/backend'
import type { MoviesResponse } from '@/pocketbase-types';
import iconestar from '@/components/icons/iconestar.vue'
const MoviesInfo: MoviesResponse = defineProps<MoviesResponse>();
const img = MoviesInfo.attach
const urlImg = img && pb.getFileUrl(MoviesInfo, img, { thumb: '100x200' })
</script>
<template>
    <div class="flex justify-center">
        <div class="w-2/3 max-w-xl">
            <div class="m-4 bg-gray-800 rounded-lg shadow-md flex flex-col sm:flex-row h-auto overflow-hidden">

                <div class="w-full sm:w-1/2 relative">
                    <div class="h-full overflow-hidden rounded-tl-lg">
                        <img :src="urlImg" class="object-cover h-full" />
                    </div>
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-50 rounded-tl-lg">
                    </div>
                </div>

                <div class="w-full sm:w-1/2 flex flex-col justify-between p-4">
                    <h2 class="mb-2 text-sm font-bold text-white dark:text-white">{{ title }}</h2>
                    <p class="mb-3 text-gray-700 dark:text-gray-400">{{ filmer }}</p>
                    <div class="flex-grow overflow-y-auto">
                        <p class="mb-3 text-white">{{ synopsis }}</p>
                    </div>
                    <p class="mb-3 text-gray-700 dark:text-gray-400">{{ genre }}</p>
                    <p class="mb-3 text-gray-700 dark:text-gray-400">{{ time }}min</p>
                    <div class="flex items-center mb-3">
                        <iconestar class="w-4 h-4 mr-1" />
                        <p class="text-white">{{ note }}/10</p>
                    </div>
                    <div class="flex justify-between items-center">

                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ release_year }}</p>
                        <a :href="trailer" target="_blank" rel="noopener noreferrer">
                            <button class="w-48 bg-blue text-white mb-6 mt-8 font-bold py-2 px-4 rounded-full">
                                Trailer
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

