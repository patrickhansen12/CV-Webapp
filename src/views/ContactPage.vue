<template>
  <div class="contact-page">
    <contact-info class="contact-info" />
    <image-container class="image-container" />
  </div>
</template>

<script>
import ContactInfo from "@/components/contact-information/ContactInfo.vue";
import ImageContainer from "@/components/profile/image-container/ImageContainer.vue";

export default {
  components: { ContactInfo, ImageContainer },
};
</script>

<style lang="scss">
.contact-page {
  display: flex;
  justify-content: center;
  // align-items: center;
  padding: 20px;
  background-color: #f8f8f8;
  .image-container {
    max-width: 100%; 
    margin-right: 20px;
    max-height: 20%;
  }
  .contact-info {
    height: 100%;
    margin-left: 10px;
  }
}
@media (max-width: 768px) {
  .contact-page {
    flex-direction: column;
  }
}



</style>