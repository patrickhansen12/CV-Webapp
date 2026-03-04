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
      Jeg har for nylig arbejdet med et større mail system i Vue 3, hvor Pinia er brugt til state management
      og .NET 10 til backend, primært for at afprøve nye features i den nyeste .NET-version.
      Systemet understøtter afsendelse af emails via Brevo API, gemme kladder i PostgreSQL,
      og har en sendt mails historik.
    </p>

    <div class="project-showcase">
      <div class="project-links">
        <a
          href="https://patrickhansen12.github.io/mailposter"
          target="_blank"
          rel="noopener noreferrer"
          class="project-link live"
        >
          <span class="link-icon">🚀</span>
          Prøv Live Demo
        </a>
        <a
          href="https://github.com/patrickhansen12/MailPosterAPI"
          target="_blank"
          rel="noopener noreferrer"
          class="project-link code"
        >
          <span class="link-icon">📁</span>
          Backend på GitHub
        </a>
        <a
          href="https://github.com/patrickhansen12/mailposter"
          target="_blank"
          rel="noopener noreferrer"
          class="project-link code"
        >
          <span class="link-icon">📁</span>
          Frontend på GitHub
        </a>
      </div>

      <p class="demo-note">
        👆 Du kan sende en test-email direkte fra demoen – prøv det!
      </p>
    </div>

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
.project-showcase {
  margin: 25px 0;
  padding: 20px;
  background: white;  /* Hvide bokse som de andre sider */
  border-radius: 14px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
}

.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 15px;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;

  .link-icon {
    font-size: 1.2rem;
  }

  &.live {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
    }
  }

  &.code {
    background: #f1f5f9;
    color: #2563eb;
    border: 1px solid #e1e5e9;

    &:hover {
      background: #e0e7ff;
      transform: translateY(-2px);
    }
  }
}

.demo-note {
  color: #666;
  font-style: italic;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px dashed #e1e5e9;
}


</style>
