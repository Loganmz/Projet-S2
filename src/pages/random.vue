<template>
    <div class="bg-black pt-2">
    <div class="flex justify-center flex-col mt-24">
        <Card v-if="showRandomMovie" v-bind="{ ...randomMovie }" />
        
    </div>
    <RouterLink to="retry">
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
import type { MoviesResponse } from '@/pocketbase-types';
import Card from '@/components/moviesCard.vue';
import { ref, onMounted } from 'vue';

let movieListe: MoviesResponse[] = [];
let randomMovie: MoviesResponse | null = null;
const showRandomMovie = ref(false);

const fetchMovieList = async () => {
    movieListe = await pb.collection('movies').getFullList<MoviesResponse>();
    randomMovie = movieListe[Math.floor(Math.random() * movieListe.length)];
    console.log("le film aléatoire", randomMovie);
    showRandomMovie.value = true; // Affiche le film aléatoire après le chargement des données
};

onMounted(() => {
    fetchMovieList();
});
</script>
