<template>
  <div class="experiences-page">
 Ikke lavet færdig endnu, men kommer senere
  </div>

  <div>
    <image-container class="image-container" />
  </div>
</template>

<script>
import ImageContainer from "@/components/profile/image-container/ImageContainer.vue";

export default {
  components: { ImageContainer },
};
</script>

<style lang="scss">
.experiences-page {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f8f8f8;

  .image-container {
    max-width: 100%;
    margin-right: 20px;
    max-height: 20%;
  }

  .experiences-info {
    height: 100%;
    min-width: 500px;
    margin-right: 40px;
  }
}
</style>