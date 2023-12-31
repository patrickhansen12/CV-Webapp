<template>
    <div class="profile">
      <top-bar />
      <profile-section class="profile-section" />
      <SliderButton  class="slider-button" />
    </div>
    <div>
      <contacts/>
    </div>
  </template>
  
  <script>
  import TopBar from '../components/top-bar/TopBar.vue';
  import profileSection from '../components/profile/ProfileSection.vue';
  import SliderButton from '@/components/buttons/SliderButton.vue';
  import Contacts from '@/components/contacts/Contacts.vue';
  import {onMounted, onUnmounted } from 'vue';
  import { useSliderStore } from '@/stores/slider';
  
  export default {
    components: { TopBar, profileSection, SliderButton, Contacts },
  
    setup() {
      const sliderStore = useSliderStore();
  
  
      // Handle key presses globally for this component
      const handleKeyDown = (event) => {
        // Check the keyCode and perform actions accordingly
        if (event.keyCode === 37) {
          // Left arrow key
          sliderStore.prevSlide();
        } else if (event.keyCode === 39) {
          // Right arrow key
          sliderStore.nextSlide();
        }
      };
  
      // Add event listener on component mount
      onMounted(() => {
        document.addEventListener('keydown', handleKeyDown);
      });
  
      // Remove event listener on component unmount
      onUnmounted(() => {
        document.removeEventListener('keydown', handleKeyDown);
      });
    },
  };
  </script>
  
  <style lang="scss">
  .slider-button {
    margin-bottom: 75px;
  }
  </style>