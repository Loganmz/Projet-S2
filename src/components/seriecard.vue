<script setup lang="ts">
import { pb } from '@/backend'
import type { SeriesResponse } from '@/pocketbase-types';
import iconestar from '@/components/icons/iconestar.vue'
const SerieInfo: SeriesResponse = defineProps<SeriesResponse>();
const img = SerieInfo.attach
const urlImg = img && pb.getFileUrl(SerieInfo, img, { thumb: '100x200' })
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
                    <h2 class="mb-2 text-sm font-bold text-white dark:text-white">{{ name }}</h2>
                    <p class="mb-3 text-gray-700 dark:text-gray-400">{{ realisator }}</p>
                    <div class="flex-grow overflow-y-auto">
                        <p class="mb-3 text-white">{{ synopsis }}</p>
                    </div>
                    <p class="mb-3 text-gray-400 dark:text-gray-200">{{ seasons }} Seasons</p>
                    <p class="mb-3 text-gray-400 dark:text-gray-200">{{ episodes }} Episodes</p>
                    <div class="flex items-center mb-3">
                        <iconestar class="w-4 h-4 mr-1" />
                        <p class="text-white">{{ rating }}/10</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
</template>

