<template>
    <div class="slider-container">
      <button @click="prevSlide">&lt;</button>
      <div class="slide-number">{{ currentSlide }} / 5</div>
      <button @click="nextSlide">&gt;</button>
    </div>
  </template>
  
  <script>
  import { ref,watch } from 'vue';
  import { useSliderStore } from '@/stores/slider';
  
  export default {
    setup() {
      const sliderStore = useSliderStore();
      const currentSlide = ref(sliderStore.slideNumber);

    // Watch for changes in slideNumber from the store
    watch(() => sliderStore.slideNumber, (newSlide) => {
      currentSlide.value = newSlide;
    });

      const nextSlide = () => {
          sliderStore.nextSlide();
      };
  
      const prevSlide = () => {
          sliderStore.prevSlide();
      };
  
      return {
        currentSlide,
        nextSlide,
        prevSlide,
      };
    },
  };
  </script>
  
  <style lang="scss">
  .slider-container {
    display: flex;
    align-items: center;
  
    button {
      margin: 0 10px;
      cursor: pointer;
      font-size: 1.5em;
    }
  
    .slide-number {
      font-size: 1.2em;
    }
  }
  </style>