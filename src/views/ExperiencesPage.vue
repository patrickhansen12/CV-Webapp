<template>
  <pdf-modal v-if="pdfModalVisible" :selected-pdf="selectedPdf" @close="closeModal"/>
  <div class="experiences-page">
    <div class="experience">
      <div class="info">
        <h1 class="experience-title">Erfaringer:</h1>
        <h2>Udvikler</h2>
        <p>Det Faglige Hus · Fuldtid</p>
        <p class="duration">{{ calculateDuration() }}</p>
        <p>Esbjerg, Syddanmark</p>

        <h3 class="header-pdf">Anbefalinger/Udtagelser:</h3>
        <a class="pdf-entry"
           v-text="'Udtagelse Det Faglige Hus Udvikler 22.03.2021 - 31.10.2024'"
           @click="openModal('/CV-Webapp/pdfs/DetFagligeHus.pdf')"></a>
        <br>
        <a class="pdf-entry"
           v-text="'Anbefaling VirtualLabs Praktik 6.8.2018 - 12.10.2018'"
           @click="openModal('/CV-Webapp/pdfs/Anbefaling%20praktik%20VirtualLab.pdf')"></a>

        <h3 class="skills-title">Kompetencer:</h3>
        <div>
          <div class="skills-section languages">
            <h3 class="skills-title">Programmeringssprog:</h3>
            <p>C# · Java · Python · F#</p>
          </div>

          <h3 class="skills-section frontend">
            <span class="skills-title">Frontend:</span>
            <p>
              Javascript - Typescript · Webdesign · Responsiv webdesign · Fejlretning · Debug · CSS · HTML · Angular (4-10) · React ·
              Vue (2, 3) · Pinia · Bootstrap
            </p>
          </h3>

          <h3 class="skills-section backend">
            <span class="skills-title">Backend:</span>
            <p>Rest API · MVC · SOLID · SignalR</p>
          </h3>

          <h3 class="skills-section testing">
            <span class="skills-title">Test Frameworks:</span>
            <p>Jasmine · Karma · MOQ · Nsubstitute · Unit-testing (NUnit, Xunit) · Integration-testing · Jest</p>
          </h3>

          <h3 class="skills-section others">
            <span class="skills-title">Andet:</span>
            <p>
              Salting og hashing af adgangskoder · Hangfire jobs · Automation jobs · Azure · AWS Lambda · Google Functions ·
              Firebase · MySQL · NoSQL (Azure, Amazon RDS, MongoDB) · RabbitMQ · CUDA · JSON · Opsætning af
              DevOps integrationer til teams og mail, omkring fx pull requests · Agile principper (Scrum, Extreme Programming) · GitHub · Bitbucket · Continuous
              Integration · Travis · Azure DevOps · TeamCity · Auth0 · OAuth · JSON · Smoke testing
            </p>
          </h3>
        </div>
      </div>
    </div>
    <image-container class="image-container" />
  </div>
</template>

<script>
import ImageContainer from "@/components/profile/image-container/ImageContainer.vue";
import PdfModal from "@/components/modals/PdfModal.vue";
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  inheritAttrs: false,
  components: { ImageContainer, PdfModal },
  data() {
    return {
      pdfModalVisible: false,
      selectedPdf: null
    };
  },
  setup() {
    const startDateDFH = new Date('2021-03-22');
    const endDateDFH = new Date('2024-10-31');
    const currentTime = ref(new Date());
    let intervalId = null;

    const calculateDuration = () => {
      const start = new Date(startDateDFH);
      const end = endDateDFH || currentTime.value;

      let years = end.getFullYear() - start.getFullYear();
      let months = end.getMonth() - start.getMonth();
      let days = end.getDate() - start.getDate();

      if (days < 0) {
        months -= 1;
        const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
        days += prevMonth.getDate();
      }
      if (months < 0) {
        years -= 1;
        months += 12;
      }
      return `${years} år, ${months} måneder`;
    };

    const updateCurrentTime = () => {
      if (!endDateDFH) currentTime.value = new Date();
    };

    onMounted(() => {
      if (!endDateDFH) {
        updateCurrentTime();
        intervalId = setInterval(updateCurrentTime, 1000);
      }
    });

    onUnmounted(() => {
      if (intervalId) clearInterval(intervalId);
    });

    return { calculateDuration };
  },
  methods: {
    openModal(pdfPath) {
      if (pdfPath) {
        this.selectedPdf = pdfPath;
        this.pdfModalVisible = true;
      }
    },
    closeModal() {
      this.pdfModalVisible = false;
      this.selectedPdf = null;
    }
  }
};
</script>

<style lang="scss">
.experiences-page {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  background-color: #f8f8f8;

  .experience {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    min-width: 0;
  }

  .info {
    color: #777;
    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;

    .header-pdf { color: orangered; }

    .experience-title {
      font-size: 2rem;
      color: #333;
      margin-bottom: 10px;
    }

    h2 { font-size: 1.5rem; margin-bottom: 5px; }
    .duration { font-weight: bold; color: #555; margin-bottom: 15px; }
    h3 { font-size: 1.2rem; margin: 10px 0 5px; color: #333; }
  }

  > .image-container {
    flex: 0 0 clamp(160px, 20vw, 280px);
    max-width: 30%;
    align-self: flex-start;
  }
}

.skills-section {
  margin-bottom: 20px;

  .skills-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 5px;
    display: block;
  }

  p { color: #777; margin: 0; line-height: 1.5; max-width: 800px; }

  &.frontend .skills-title { color: #3498db; }
  &.backend .skills-title { color: #e74c3c; }
  &.others .skills-title { color: #2ecc71; }
  &.testing .skills-title { color: #f39c12; }
  &.languages .skills-title { color: #34495e; }
}

@media (max-width: 768px) {
  .experiences-page {
    flex-direction: column;
    align-items: stretch;

    > .image-container {
      width: clamp(160px, 40vw, 240px);
      margin: 20px auto 0;
    }
  }
}

.pdf-entry { cursor: pointer; color: #3498db; }
</style>
