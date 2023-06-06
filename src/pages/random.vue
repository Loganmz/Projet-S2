<script setup lang="ts">
import { RandomMovies } from '@/backend';
import moviesCard from '@/components/movies-card.vue';

const unMovies = await RandomMovies()
console.log("les movies", unMovies)
</script>

<template>
    <div>
        <moviesCard v-bind="unMovies"/>
    </div>
</template>