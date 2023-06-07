<template>
    <div class="bg-black pt-2">
    <div class="flex justify-center flex-col mt-24">
        <Card v-if="showRandomPodcast" v-bind="{ ...randomPodcast}" />
        
    </div>
    <RouterLink to="podcastretry">
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
import type { PodcastResponse } from '@/pocketbase-types';
import Card from '@/components/podcastcard.vue';
import { ref, onMounted } from 'vue';

let podcastListe: PodcastResponse[] = [];
let randomPodcast: PodcastResponse | null = null;
const showRandomPodcast = ref(false);

const fetchPodcastList = async () => {
    podcastListe = await pb.collection('podcast').getFullList<PodcastResponse>();
    randomPodcast = podcastListe[Math.floor(Math.random() * podcastListe.length)];
    console.log("le film aléatoire", randomPodcast);
    showRandomPodcast.value = true;
};

onMounted(() => {
    fetchPodcastList();
});
</script>
