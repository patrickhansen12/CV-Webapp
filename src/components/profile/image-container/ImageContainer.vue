<template>
  <div class="image-container">
    <img src="../../../assets/cv-billede.jpg" alt="Image" />
  </div>
</template>

<script>
export default {
  
//TODO look at store to set which picture it should set and add 3 more images that makes sense
};
</script>

<style scoped>
.image-container {
  max-width: 100%;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.image-container img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
}
</style>