
<script lang="ts">

import IconWheel from '@/components/icons/IconWheel.vue';
export default {
    data() {
        return {
            isRotated: false
        };
    },
    methods: {
        rotateAndRedirect() {
            this.isRotated = !this.isRotated;
            if (this.isRotated) {
                setTimeout(() => {
                    this.$router.push("random");
                }, 2000);
            }
        }
    },
    components: { IconWheel }
};
</script>


<template>
   <div class="mx-auto w-full max-w-screen-lg p-4 py-6 lg:py-8">
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="text-center">
        <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-black rounded-full bg-teal-accent-400">
            Find out more
          </p>
          <h2 class="mb-5 font-sans text-3xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none">
            NEW EXPERIENCE
            
          </h2>
          
    </div>
    
    </div>
    
      
  <div class="flex flex-col items-center">
    
    
    <IconWheel  :class="{
        'transform transition duration-1000': isRotated,
        'rotate-180': isRotated
      }"
      xmlns="http://www.w3.org/2000/svg"
  
      />
      <router-link v-if="isRotated" to="random">
    </router-link>
  
      <button
      
      @click="rotateAndRedirect"
      
      class="bg-blue text-white mb-6 mt-8 font-bold py-2 px-4 rounded-full"
    >
      spin it
    </button>
  </div>
   
</template>

<style>
.rotate-180 {
  transform: rotate(180deg);

  transition-duration: 1000ms;
};
</style>

