<template>
  <div class="background-main">
    <h2>Professionel Baggrund</h2>
    <p>
      Jeg er {{ age }} år og bosat i Esbjerg. Jeg har tidligere arbejdet som udvikler hos
      Det Faglige Hus og har gennem størstedelen af mit liv haft en stærk interesse for teknologi og softwareudvikling.
    </p>

    <h3>Kodning og designprincipper</h3>
    <p>
      I mit arbejde lægger jeg vægt på at følge aftalte designprincipper, kodestandarder
      og arkitektur. Det giver mere overskuelig kode, nemmere fejlfinding og bedre samarbejde i teamet.
    </p>

    <h3>Faglige kompetencer</h3>
    <p>
      C#, Java, Python, F#, PHP og Unity.
    </p>

    <h3>Seneste projekter</h3>
    <p>
      Jeg har for nylig arbejdet med projekter i Vue 3 og Vite, hvor Pinia er brugt til state management
      og .NET 10 til backend, primært for at afprøve nye features i den nyeste .NET-version.
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const age = computed(() => {
  const birthDate = new Date(1996, 0, 12)
  const today = new Date()

  let age = today.getFullYear() - birthDate.getFullYear()
  const diff = today.getMonth() - birthDate.getMonth()

  if (diff < 0 || (diff === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }

  return age
})
</script>

<style scoped>
.background-main {
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.08);
}
</style>
