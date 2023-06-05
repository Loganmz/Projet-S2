<script setup lang="ts">
import { RandomMovies } from '@/backend';
import moviesCard from '@/components/movies-card.vue';

const unMovie = await RandomMovies()
console.log("les movies", unMovie)
</script>

<template>
    <div>
        <moviesCard v-bind="unMovie"/>
    </div>
</template>