
import { defineStore } from 'pinia'

export const useSliderStore = defineStore('sliderStore', {
    state: () => ({
        slideNumber: 1,
    }),
    actions: {
      nextSlide() {
        this.slideNumber++
        if(this.slideNumber === 6){
            this.slideNumber = 1;
        }
      },
      prevSlide() {
        this.slideNumber--;
        if(this.slideNumber === 0){
            this.slideNumber = 5;
        }
      },
    },
  })