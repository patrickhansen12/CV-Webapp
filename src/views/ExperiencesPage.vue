<template>
  <pdf-modal
    v-if="pdfModalVisible"
    :selected-pdf="selectedPdf"
    @close="closeModal"
  />

  <div class="experiences-page">
    <section class="experience-card">
      <header class="experience-header">
        <h1>Erfaring</h1>
        <h2>Udvikler</h2>
        <p class="company">Det Faglige Hus · Fuldtid</p>
        <p class="duration">{{ calculateDuration() }}</p>
        <p class="location">Esbjerg, Syddanmark</p>
      </header>

      <!-- Ansvar -->
      <section class="card">
        <h3>Ansvar og arbejdsopgaver</h3>
        <ul class="responsibilities">
          <li>Udvikling og vedligeholdelse af interne og eksterne webapplikationer</li>
          <li>Fullstack-udvikling med fokus på frontend og API-integrationer</li>
          <li>Samarbejde med forretning og udviklere i agile teams</li>
          <li>Fejlfinding, refaktorering og performanceforbedringer</li>
          <li>Opsætning af CI/CD og DevOps-integrationer</li>
        </ul>
      </section>

      <!-- Anbefalinger -->
      <section class="card">
        <h3>Anbefalinger og udtalelser</h3>

        <a
          class="pdf-entry"
          @click="openModal('/CV-Webapp/pdfs/DetFagligeHus.pdf')"
        >
          Udtalelse – Det Faglige Hus (2021–2024)
        </a>

        <a
          class="pdf-entry"
          @click="openModal('/CV-Webapp/pdfs/Anbefaling%20praktik%20VirtualLab.pdf')"
        >
          Anbefaling – VirtualLabs praktik (2018)
        </a>
      </section>

      <!-- Kompetencer -->
      <section class="skills-grid">
        <div class="skill-card languages">
          <h4>Programmeringssprog</h4>
          <p>C# · Java · Python · F#</p>
        </div>

        <div class="skill-card frontend">
          <h4>Frontend</h4>
          <p>
            JavaScript · TypeScript · HTML · CSS · Webdesign · Responsivt design ·
            Angular (4–10) · React · Vue (2, 3) · Pinia · Bootstrap
          </p>
        </div>

        <div class="skill-card backend">
          <h4>Backend</h4>
          <p>REST API · MVC · SOLID · SignalR</p>
        </div>

        <div class="skill-card testing">
          <h4>Test & kvalitet</h4>
          <p>
            Jasmine · Karma · Jest · NUnit · xUnit · MOQ · NSubstitute ·
            Unit- og integrationstests
          </p>
        </div>

        <div class="skill-card others">
          <h4>Øvrige teknologier</h4>
          <p>
            Azure · AWS Lambda · Google Functions · Firebase · MySQL · NoSQL
            (MongoDB, RDS) · RabbitMQ · Auth0 · OAuth · Git · GitHub · Bitbucket ·
            CI/CD · Azure DevOps · TeamCity
          </p>
        </div>
      </section>
    </section>

    <image-container class="image-container" />
  </div>
</template>

<script>
import ImageContainer from "@/components/profile/image-container/ImageContainer.vue";
import PdfModal from "@/components/modals/PdfModal.vue";
import { ref } from "vue";

export default {
  components: { ImageContainer, PdfModal },

  setup() {
    const pdfModalVisible = ref(false);
    const selectedPdf = ref(null);

    const startDate = new Date("2021-03-22");
    const endDate = new Date("2024-10-31");

    const calculateDuration = () => {
      let years = endDate.getFullYear() - startDate.getFullYear();
      let months = endDate.getMonth() - startDate.getMonth();

      if (months < 0) {
        years--;
        months += 12;
      }

      return `${years} år og ${months} måneder`;
    };

    const openModal = (pdf) => {
      selectedPdf.value = pdf;
      pdfModalVisible.value = true;
    };

    const closeModal = () => {
      pdfModalVisible.value = false;
      selectedPdf.value = null;
    };

    return {
      pdfModalVisible,
      selectedPdf,
      calculateDuration,
      openModal,
      closeModal,
    };
  },
};
</script>

<style lang="scss">
.experiences-page {
  display: flex;
  gap: 32px;
  padding: 24px;
  background: #f6f7f9;
}

.experience-card {
  flex: 1;
}

.experience-header {
  margin-bottom: 24px;

  h1 {
    font-size: 2rem;
    margin-bottom: 4px;
  }

  h2 {
    font-size: 1.4rem;
    margin-bottom: 6px;
  }

  .company,
  .location {
    color: #666;
  }

  .duration {
    font-weight: bold;
    margin: 6px 0;
  }
}

.card {
  background: #fff;
  border-radius: 14px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
}

.responsibilities {
  padding-left: 18px;

  li {
    margin-bottom: 6px;
    line-height: 1.5;
  }
}

.pdf-entry {
  display: block;
  padding: 10px 14px;
  border-radius: 10px;
  background: #f1f5f9;
  margin-bottom: 8px;
  cursor: pointer;
  color: #2563eb;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}

.skill-card {
  background: #fff;
  border-radius: 14px;
  padding: 18px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);

  h4 {
    margin-bottom: 6px;
  }

  p {
    color: #666;
    line-height: 1.5;
  }
}

.image-container {
  flex: 0 0 clamp(160px, 20vw, 260px);
}

@media (max-width: 768px) {
  .experiences-page {
    flex-direction: column;
  }

  .image-container {
    margin: 0 auto;
  }
}
</style>
