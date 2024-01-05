<template>
  <div class="profile">
    <profile-section class="profile-section" />
    <slider-button @scrollToContact="scrollToContact" class="slider-button" />
  </div>
</template>

<script>
import profileSection from '../components/profile/ProfileSection.vue';
import SliderButton from '@/components/buttons/SliderButton.vue';
import { onMounted, onUnmounted, ref } from 'vue';
import { useSliderStore } from '@/stores/slider';
import { usePositionStore } from '@/stores/position';
export default {
  components: { profileSection, SliderButton },

  setup() {
    const sliderStore = useSliderStore();
    const contactSection = ref(null);

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

    // Scroll to the contact section
    const scrollToContact = () => {
      contactSection.value.scrollIntoView({ behavior: 'smooth' });
    };

    // Add event listener on component mount
    onMounted(() => {
      document.addEventListener('keydown', handleKeyDown);
    });

    // Remove event listener on component unmount
    onUnmounted(() => {
      document.removeEventListener('keydown', handleKeyDown);
    });

    return {
      scrollToContact,
      contactSection,
    };
  },
  computed:{
    gotoPostion(){
      console.log("test")
      return usePositionStore().activeSection;
    }
  }
};
</script>

<style lang="scss">
</style>