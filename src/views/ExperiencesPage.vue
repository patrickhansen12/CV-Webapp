<template>
  <div class="experiences-page">
    <div class="experience">
      <div class="info">
        <h1 class="experience-title">Erfaringer:</h1>
        <h2>Udvikler</h2>
        <p>Det Faglige Hus · Fuldtid</p>
        <p class="duration">{{ calculateDuration() }}</p>
        <p>Esbjerg, Syddanmark</p>
        <h3 class="skills-title">Kompetencer:</h3>
        <div>
          <div class="skills-section languages">
          <h3 class="skills-title">Programmeringssprog:</h3>
          <p>
            C# · Java · Python · F#
          </p>
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
      <p>
        Rest API · MVC · SOLID  · SignalR 
      </p>
    </h3>

    <h3 class="skills-section testing">
      <span class="skills-title">Test Frameworks:</span>
      <p>
        Jasmine · Karma · MOQ · Nsubstitute · Unit-testing (NUnit, Xunit) · Integration-testing · Jest
      </p>
    </h3>

    <h3 class="skills-section others">
      <span class="skills-title">Andet:</span>
      <p>
        Salting og hashing af adgangskoder · Hangfire jobs · Automation jobs · Azure · AWS Lambda · Google Functions ·
        Firebase · MySQL · NoSQL (Azure, Amazon RDS, MongoDB) · RabbitMQ · CUDA · JSON · Opsætning af
        DevOps integrationer til teams og mail, omkring fx pull requests  · Agile principper (Scrum, Extreme Programming) · GitHub · Bitbucket · Continuous
        Integration · Travis · Azure DevOps · TeamCity · Auth0 · OAuth · JSON · Smoke testing
      </p>
    </h3>
  </div>
    </div>
    <image-container class="image-container" />
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

   
    onMounted(() => {
      updateCurrentTime();
      setInterval(updateCurrentTime, 1000); 
    });

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
  flex-direction: row; 
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f8f8f8;
  overflow: auto; 
  .experience {
  display: flex;
  flex-grow: 1; 
  margin-right: 20px; 


    .info {
      color: #777;
      flex-grow: 1;

      .experience-title {
        font-size: 2rem;
        color: #333;
        margin-bottom: 10px;
      }

      h2 {
        font-size: 1.5rem;
        margin-bottom: 5px;
      }

      .duration {
        font-weight: bold;
        color: #555;
        margin-bottom: 15px;
      }

      h3 {
        font-size: 1.2rem;
        margin-top: 10px;
        margin-bottom: 5px;
        color: #333;
      }

      .skills-title {
        margin-top: 10px;
      }

      .skills {
        color: #777;
        margin-bottom: 10px;
        line-height: 1.5;
      }

      ul {
        margin-top: 5px;
        margin-bottom: 10px;
        padding-left: 20px;
      }
    }

    .image-container {
  max-width: 100%;
  max-height: 20%;
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

    p {
      color: #777;
      margin: 0;
      line-height: 1.5;
    }

    &.frontend {
      .skills-title {
        color: #3498db;
      }
      p {
   
        max-width: 800px; 
      }
    }

    &.backend {
      .skills-title {
        color: #e74c3c; 
        
      }
      p {
        
        max-width: 800px;
      }
    }

    &.others {
      max-width: 1120px;
      .skills-title {
        color: #2ecc71; 
      }
    }

    &.testing {
      .skills-title {
        color: #f39c12; 
      }
    }
    &.languages{
      .skills-title {
        color: #34495e; 
      }
    }
  }
  }
</style>
