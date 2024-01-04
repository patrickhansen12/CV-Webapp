<template>
  <div class="about-page">
    <div class="about-content">
      <h2>Om mig</h2>
      <p>
        Hej, mit navn er Patrick. Jeg er en passioneret og motiveret fullstack udvikler som har en kæmpe passion for webudvikling. Jeg har en solid baggrund inden for dotnet og jeg nyder at skabe responsive og brugervenlige hjemmesider, der giver en fantastisk brugeroplevelse.
      </p>
      <h2>Evner</h2>
      <ul>
        <li>CSS / SCSS</li>
        <li>JavaScript (Vue.js, React,Node.js)</li>
        <li>.net og C#</li>
        <li>Database Management (MongoDB, MySQL)</li>
      </ul>
    </div>
    <div>
      <image-container class="image-container" />
    </div>
  </div>
</template>

<script>
import ImageContainer from "@/components/profile/image-container/ImageContainer.vue";

export default {
  components: { ImageContainer },
};
</script>

<style lang="scss">
.about-page {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f8f8f8;

  .about-content {
    max-width: 600px;
    margin-right: 20px;

    h2 {
      color: #333;
      font-size: 24px;
      margin-bottom: 10px;
    }

    p {
      color: #555;
      line-height: 1.5;
    }

    ul {
      list-style-type: none;
      padding: 0;
      margin-top: 10px;

      li {
        color: #777;
        margin-bottom: 5px;
      }
    }
  }

  .image-container {
    max-width: 100%;
    max-height: 20%;
  }
}
</style>