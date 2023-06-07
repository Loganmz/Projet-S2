<script setup lang="ts">
import { pb } from '@/backend'
import type { BooksResponse } from '@/pocketbase-types';
import iconestar from '@/components/icons/iconestar.vue'
const BooksInfo: BooksResponse = defineProps<BooksResponse>();
</script>
<template>
    <div class="mx-auto">
      <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">{{ BooksInfo.title }}</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">{{ BooksInfo.authors }}</p>
        <p class="font-normal text-gray-700 dark:text-gray-400">{{ BooksInfo.num_pages }} pages</p>
        <div class="flex items-center mb-3">
          <iconestar class="w-4 h-4 mr-1" />
          <p class="text-white">{{ BooksInfo.average_rating }}/10</p>
        </div>
        <p class="font-normal text-gray-700 dark:text-gray-400">{{ BooksInfo.publication_date }}</p>
      </div>
    </div>

</template>

