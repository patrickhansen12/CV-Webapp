<template>
  <Transition name="slide-fade" mode="out-in">
    <component :is="currentSlideComponent" :key="slideNumber" />
  </Transition>
</template>

<script setup>
import { computed } from 'vue'
import { useSliderStore } from '@/stores/slider'

import SlideIntro from '../slides/SlideIntro.vue'
import SlideExperience from '../slides/SlideExperience.vue'
import SlideCloud from '../slides/SlideCloud.vue'
import SlideFrontend from '../slides/SlideFrontend.vue'
import SlideMethods from '../slides/SlideMethods.vue'
import SlideContact from '../slides/SlideContact.vue'

const sliderStore = useSliderStore()

const slideNumber = computed(() => sliderStore.slideNumber)

const slides = {
  1: SlideIntro,
  2: SlideExperience,
  3: SlideCloud,
  4: SlideFrontend,
  5: SlideMethods,
  6: SlideContact
}

const currentSlideComponent = computed(() => slides[slideNumber.value])
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.35s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
