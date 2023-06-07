<template>
    <div class="bg-black pt-2">
    <div class="flex justify-center flex-col mt-24">
        <Card v-if="showRandomSeries" v-bind="{ ...randomSeries}" />
        
    </div>
    <RouterLink to="randomserie">
    <div class="text-center">
        <button
        class="w-48 bg-blue text-white mb-6 mt-8 font-bold py-2 px-4 rounded-full"
        >   
        spin again
        </button>
    </div>
    </RouterLink>
</div>
</template>

<script setup lang="ts">
import { pb } from '@/backend'
import type { SeriesResponse } from '@/pocketbase-types';
import Card from '@/components/seriecard.vue';
import { ref, onMounted } from 'vue';

let SeriesListe: SeriesResponse[] = [];
let randomSeries: SeriesResponse | null = null;
const showRandomSeries = ref(false);

const fetchSeriesList = async () => {
    SeriesListe = await pb.collection('Series').getFullList<SeriesResponse>();
    randomSeries = SeriesListe[Math.floor(Math.random() * SeriesListe.length)];
    console.log("le film aléatoire", randomSeries);
    showRandomSeries.value = true;
};

onMounted(() => {
    fetchSeriesList();
});
</script>
