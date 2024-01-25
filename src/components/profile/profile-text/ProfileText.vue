<template>
  <div class="background-main" v-if="slideNumber === 1">
    <h2>Professionel Baggrund</h2>
    <p>
      Jeg er en 28-årig mand fra Ribe, der har boet i Esbjerg i de seneste 5 år.  Jeg arbejder nu som udvikler hos Det Faglige Hus og har i størstedelen af mit liv været præget af teknologiens udvikling.
    </p>

    <h3>Kodning og Design Principper</h3>
    <p>
      Når jeg koder, følger jeg de designprincipper, kodestandarder og den arkitektur, som teamet er blevet enige om. Dette sikrer en ensartet tilgang og gør det nemmere at løse fejl samt skabe et bedre overblik over programmet og dets arkitektur.
    </p>

    <h3>Faglige Kompetencer</h3>
    <p>
      C#,
Java,
Python,
F#,
PHP,
Unity    </p>

    <h3>Seneste Projekter</h3>
    <p>
      Da jeg er interesseret i faglig udvikling, har jeg på det seneste arbejdet med projekter i Vue 3 med Vite, hvor der er blevet gjort brug af Pinia til store management og dotnet 8 til backend for at afprøve nogle af de nye ting som er med i den nyeste version af .net
    </p>
  </div>


   <div class="background-main" v-if="slideNumber === 2">
    <h2>Uddannelse og Arbejdserfaring</h2>
    <p>
      Jeg har boet i Esbjerg i de sidste 5 år og arbejder nu som udvikler hos Det Faglige Hus. Jeg har været præget af teknologiens udvikling og har en solid erfaring inden for softwareudvikling.
    </p>

    <h3>Projekt ansvarlig</h3>
    <p>
      Jeg har haft ansvaret for adskillige vellykkede softwareprojekter, hvor jeg har koordineret opgaver, styret tidsplaner og sikret, at vi opnåede vores mål.
    </p>

    <h3>Arbejdsmiljø</h3>
    <p>
      på arbejdet stræber jeg altid efter at være en solid holdspiller, der aktivt deltager og tilbyder min hjælp, hvor det er nødvendigt. Jeg værdsætter samarbejde, åben kommunikation og stræber efter konstant forbedring, især når det kommer til at arbejde i agile udviklingsteams."
    </p>
  </div>


  <div class="background-main" v-if="slideNumber === 3">
    <h2>Specialisering i Cloud-teknologier</h2>
    <p>
      Min specialisering inden for cloud-teknologier inkluderer arbejde med Azure, AWS Lambda og Google Functions. Jeg har designet og implementeret skalerbare og sikre skybaserede løsninger.
    </p>

    <h3>Databaseadministration</h3>
    <p>
      Jeg har erfaring med administration af både relationelle og ikke-relationelle databaser som MySQL, Azure, Amazon RDS og MongoDB.
    </p>

    <h3>Mikrotjenester</h3>
    <p>
      Jeg har arbejdet med mikrotjeneste arkitekturer og implementeret løsninger ved hjælp af Docker og Firebase.
    </p>
  </div>


  <div class="background-main" v-if="slideNumber === 4">
    <h2>Webudvikling og Frontend-teknologier</h2>
    <p>
      Min ekspertise inden for webudvikling omfatter brugen af JavaScript, TypeScript, CSS, SCSS, Node.js og HTML. Jeg har udviklet responsivt og brugervenligt frontend for flere webapplikationer.
    </p>

    <h3>Frameworks og Biblioteker</h3>
    <p>
      Jeg er fortrolig med Vue.js (2, 3), React og Angular (4-10) og har implementeret komplekse brugergrænseflader ved hjælp af disse frameworks.
    </p>

    <h3>Brugeroplevelse</h3>
    <p>
      Jeg lægger vægt på at skabe en god brugeroplevelse og har erfaring med design af moderne og intuitive brugergrænseflader.
    </p>
  </div>


  <div class="background-main" v-if="slideNumber === 5">
    <h2>Arbejdsmetoder og Værktøjer</h2>
    <p>
      Jeg følger agile principper som Scrum og Extreme Programming og har erfaring med versionsstyring ved hjælp af GitHub,Bitbucket og Azure devops. Jeg har også implementeret Continuous Integration med Travis, Azure DevOps og TeamCity.
    </p>

    <h3>Sikkerhed og Kryptografi</h3>
    <p>
      Jeg har implementeret sikkerhedsforanstaltninger som salting og hashing af adgangskoder og gjort brug af Auth0 og OAuth-protokollen for at sikre applikationers sikkerhed.
    </p>

    <h3>Andre Færdigheder</h3>
    <p>
      Udover mine kernekompetencer har jeg erfaring med parallel programmering, CUDA, JSON, smoke testing, RabbitMQ, SignalR og opsætning af DevOps-integrationer til teams og mail med fokus på pull requests.
    </p>
  </div>
</template>

<script>
import { useSliderStore } from '../../../stores/slider';

export default {
  computed: {
    slideNumber: () => useSliderStore().slideNumber,
  }
  
};
</script>

<style scoped>
.background-main {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #333;
}

h3 {
  color: #5a2f2f;
}

p {
  color: #777;
  line-height: 1.5;
  margin-bottom: 10px;
}

/* Add more styles based on your design preferences */

/* Example: Add a fade-in transition effect */
.transition-fade-enter-active, .transition-fade-leave-active {
  transition: opacity 0.5s;
}
.transition-fade-enter, .transition-fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

</style>