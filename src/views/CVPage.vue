<template>
  <div class="profile-page">
    <image-container class="image-container" />
    <div class="profile-content">
      <profile-section class="profile-section" />
      <slider-button @scrollToContact="scrollToContact" class="slider-button" />
    </div>
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

    const handleKeyDown = (event) => {
      if (event.keyCode === 37) {
        sliderStore.prevSlide();
      } else if (event.keyCode === 39) {
        sliderStore.nextSlide();
      }
    };

    const scrollToContact = () => {
      contactSection.value.scrollIntoView({ behavior: 'smooth' });
    };

    onMounted(() => { document.addEventListener('keydown', handleKeyDown); });
    onUnmounted(() => { document.removeEventListener('keydown', handleKeyDown); });

    return { scrollToContact, contactSection };
  },
  computed: {
    gotoPostion() {
      return usePositionStore().activeSection;
    }
  }
};
</script>

<style lang="scss">
.profile-page {
  .image-container {
    max-width: 100%;
    margin-right: 20px;
  }

  .profile-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .profile-page {
    flex-direction: column;
  }
}
</style>
