<template>
    <div class="bg-black pt-2">
        <div class="flex justify-center flex-col mt-24">
            <Card v-if="showRandomBooks" v-bind="{ ...randomBook }" />

        </div>
        <RouterLink to="randombooks">
            <div class="text-center">
                <button class="w-48 bg-blue text-white mb-6 mt-8 font-bold py-2 px-4 rounded-full">
                    spin again
                </button>
            </div>
        </RouterLink>
    </div>
</template>

<script setup lang="ts">
import { pb } from '@/backend'
import type { BooksResponse } from '@/pocketbase-types';
import Card from '@/components/booksCard.vue';
import { ref, onMounted } from 'vue';

let bookListe: BooksResponse[] = [];
let randomBook: BooksResponse | null = null;
const showRandomBooks = ref(false);

const fetchMovieList = async () => {
    bookListe = await pb.collection('books').getFullList<BooksResponse>();
    randomBook = bookListe[Math.floor(Math.random() * bookListe.length)];
    console.log("le film aléatoire", randomBook);
    showRandomBooks.value = true; // Affiche le film aléatoire après le chargement des données
};

onMounted(() => {
    fetchMovieList();
});
</script>
