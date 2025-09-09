<template>
  <div class="contact-page">
    <div class="contact-info">
      <contact-info />
    </div>
    <image-container class="image-container" />
  </div>
</template>

<script>
import ContactInfo from "@/components/contact-information/ContactInfo.vue";
import ImageContainer from "@/components/profile/image-container/ImageContainer.vue";

export default {
  components: { ContactInfo, ImageContainer }
};
</script>

<style lang="scss">
.contact-page {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  background-color: #f8f8f8;

  .contact-info {
    flex: 1 1 auto;
    min-width: 0;
  }

  > .image-container {
    flex: 0 0 clamp(160px, 20vw, 280px);
    align-self: flex-start;
  }
}

@media (max-width: 768px) {
  .contact-page {
    flex-direction: column;

    > .image-container {
      width: clamp(160px, 40vw, 240px);
      margin: 20px auto 0;
    }
  }
}
</style>
