<template>
  <div class="experiences-page">
    <div class="experience">
      <div class="info">
        <h1>Erfaringer:</h1>
        <h2>Udvikler</h2>
        <p>Det Faglige Hus · Fuldtid</p>
        <p>{{ calculateDuration() }}</p>
        <p>Esbjerg, Syddanmark, Danmark</p>
        <h3>Kompetencer igennem arbejde:</h3>
        <p>Softwaredokumentation · Databaser · Versionskontrol · Kommunikation · Webdesign · Responsiv webdesign · Fejlretning · Debug · CSS · HTML</p>
      </div>
      <image-container class="image-container"  />
    </div>
  </div>
</template>

<script>
import ImageContainer from "@/components/profile/image-container/ImageContainer.vue";
import { ref, onMounted, onUnmounted } from 'vue';
export default {
  components: { ImageContainer },
  setup() {
    const startDate = new Date('2021-03-22');
    const currentTime = ref(new Date());

    const calculateDuration = () => {
      const duration = currentTime.value - startDate;
      const years = Math.floor(duration / (365 * 24 * 60 * 60 * 1000));
      const months = Math.floor((duration % (365 * 24 * 60 * 60 * 1000)) / (30 * 24 * 60 * 60 * 1000));
      const days = Math.floor((duration % (30 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
      const hours = Math.floor((duration % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
      const minutes = Math.floor((duration % (60 * 60 * 1000)) / (60 * 1000));
      const seconds = Math.floor((duration % (60 * 1000)) / 1000);

      return `${years} år, ${months} måneder, ${days} dage, ${hours} timer, ${minutes} minutter, ${seconds} sekunder`;
    };

    const updateCurrentTime = () => {
      currentTime.value = new Date();
    };

    // Add event listener on component mount
    onMounted(() => {
      updateCurrentTime(); // Initial update
      setInterval(updateCurrentTime, 1000); // Update every second
    });

    // Remove event listener on component unmount
    onUnmounted(() => {
      clearInterval(updateCurrentTime);
    });

    return {
      calculateDuration,
    };
  },
};
</script>

<style lang="scss">
.experiences-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f8f8f8;

  .experience {
    display: flex;
    // margin-bottom: 20px;

    .info {
      color: #777;
      flex-grow: 1;

      h2 {
        font-size: 1.5rem;
        margin-bottom: 5px;
      }

      h3 {
        font-size: 1.2rem;
        margin-top: 10px;
        margin-bottom: 5px;
      }

      p {
        margin: 0;
      }

      ul {
        margin-top: 5px;
        margin-bottom: 10px;
        padding-left: 20px;
      }
    }

    .image-container {
      margin-right: 20px;
    }
  }
}
</style>