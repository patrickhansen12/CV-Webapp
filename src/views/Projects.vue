<script setup>
// Tom for nu
</script>

<template>
  <div class="projects-wrapper">
    <div class="projects-container">
      <!-- Header -->
      <div class="section-header">
        <h1 class="section-title">Featured Project</h1>
        <div class="title-accent"></div>
      </div>

      <!-- Main content i horizontalt grid -->
      <div class="projects-grid">
        <!-- Venstre kolonne: Projekt info -->
        <div class="project-info">
          <h2 class="project-name">MailApp</h2>
          <p class="project-tagline">Full stack email applikation</p>

          <p class="project-description">
            Full-stack email-applikation udviklet fra bunden med Vue 3 frontend (Pinia state management) og ASP.NET Core 10 backend (Entity Framework Core).
            Integration med Brevo API til email-afsendelse, PostgreSQL database til lagring af kladder og sendt historik,
            alt sammen i et responsivt og gennemtænkt design.
          </p>

          <!-- Feature chips -->
          <div class="features-grid">
            <div class="feature-item">
              <span class="feature-icon">✓</span>
              <span>Send emails via Brevo API</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">✓</span>
              <span>Gem kladder i PostgreSQL</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">✓</span>
              <span>Sendt historik med preview</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">✓</span>
              <span>Responsivt design</span>
            </div>
          </div>

          <!-- Links som cards - MED DINE KORREKTE URLS -->
          <div class="links-section">
            <h3 class="links-title">Prøv det selv</h3>
            <div class="links-grid">
              <!-- Live Demo - GitHub Pages -->
              <a
                href="https://patrickhansen12.github.io/mailposter/"
                target="_blank"
                rel="noopener noreferrer"
                class="link-card primary"
              >
                <span class="link-icon">🚀</span>
                <span class="link-text">Live Demo</span>
                <span class="link-arrow">→</span>
              </a>

              <!-- Backend kode - GitHub -->
              <a
                href="https://github.com/patrickhansen12/MailPosterAPI"
                target="_blank"
                rel="noopener noreferrer"
                class="link-card"
              >
                <span class="link-icon">📁</span>
                <span class="link-text">Backend kode</span>
                <span class="link-tech">C# / ASP.NET Core</span>
              </a>

              <!-- Frontend kode - GitHub -->
              <a
                href="https://github.com/patrickhansen12/mailposter"
                target="_blank"
                rel="noopener noreferrer"
                class="link-card"
              >
                <span class="link-icon">📁</span>
                <span class="link-text">Frontend kode</span>
                <span class="link-tech">Vue 3 / Pinia</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Højre kolonne: Tech stack og billede -->
        <div class="project-meta">
          <!-- Tech stack badges -->
          <div class="tech-stack">
            <h3 class="meta-title">Tech stack</h3>
            <div class="tech-cloud">
              <span class="tech-badge frontend">Vue 3</span>
              <span class="tech-badge frontend">Pinia</span>
              <span class="tech-badge frontend">Vite</span>
              <span class="tech-badge frontend">SCSS</span>
              <span class="tech-badge backend">ASP.NET Core</span>
              <span class="tech-badge backend">REST API</span>
              <span class="tech-badge database">PostgreSQL</span>
              <span class="tech-badge database">EF Core</span>
              <span class="tech-badge email">Brevo API</span>
              <span class="tech-badge email">SMTP</span>
              <span class="tech-badge hosting">Render</span>
              <span class="tech-badge hosting">Docker</span>
              <span class="tech-badge devops">Git</span>
              <span class="tech-badge devops">GitHub</span>
              <span class="tech-badge devops">CI/CD</span>
            </div>
          </div>

          <!-- Call to action note -->
          <div class="project-note">
            <span class="note-icon">🔗</span>
            <p>Du kan sende en test-email direkte fra demoen – prøv det!</p>
          </div>

          <!-- Profilbillede -->
          <image-container class="profile-image" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.projects-wrapper {
  width: 100%;
  padding: 32px;
  background: #f8f9fa;
}

.projects-container {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

.section-header {
  margin-bottom: 32px;

  .section-title {
    font-size: 2.2rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 12px;
  }

  .title-accent {
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    border-radius: 2px;
  }
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 40px;
  align-items: start;
}

/* Venstre kolonne */
.project-info {
  background: white;
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.project-name {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 8px;
}

.project-tagline {
  font-size: 1.2rem;
  color: #667eea;
  margin-bottom: 24px;
  font-weight: 500;
}

.project-description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: 32px;
  max-width: 800px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 40px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: #f8faff;
  border-radius: 12px;
  border: 1px solid #eaeef2;

  .feature-icon {
    color: #667eea;
    font-weight: 700;
    font-size: 1.2rem;
  }

  span:last-child {
    font-size: 0.95rem;
    color: #444;
  }
}

.links-section {
  .links-title {
    font-size: 1.3rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 20px;
  }
}

.links-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.link-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  background: #f8faff;
  border: 1px solid #eaeef2;
  border-radius: 14px;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;

  .link-icon {
    font-size: 1.5rem;
  }

  .link-text {
    flex: 1;
    font-weight: 500;
    color: #333;
  }

  .link-tech {
    font-size: 0.85rem;
    color: #667eea;
    background: white;
    padding: 4px 10px;
    border-radius: 20px;
    border: 1px solid #eaeef2;
  }

  .link-arrow {
    color: #667eea;
    font-size: 1.2rem;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover {
    border-color: #667eea;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.15);

    .link-arrow {
      opacity: 1;
    }
  }

  &.primary {
    background: linear-gradient(135deg, #667eea, #764ba2);
    border: none;

    .link-text {
      color: white;
    }

    .link-arrow {
      color: white;
      opacity: 1;
    }

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 28px rgba(102, 126, 234, 0.4);
    }
  }
}

/* Højre kolonne */
.project-meta {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.meta-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.tech-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-badge {
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &.frontend { background: #e0f2fe; color: #0369a1; }
  &.backend { background: #ede9fe; color: #5b21b6; }
  &.database { background: #dcfce7; color: #166534; }
  &.email { background: #fef9c3; color: #854d0e; }
  &.hosting { background: #ffe4e6; color: #9f1239; }
  &.devops { background: #f1f5f9; color: #334155; }
}

.project-note {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: #f0f7ff;
  border-radius: 12px;
  border-left: 4px solid #667eea;

  .note-icon {
    font-size: 1.2rem;
  }

  p {
    color: #667eea;
    font-weight: 500;
    margin: 0;
    font-size: 0.95rem;
  }
}

.profile-image {
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

/* Responsivt */
@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: 1fr 280px;
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .projects-wrapper {
    padding: 20px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .project-meta {
    order: -1;
  }

  .profile-image {
    max-width: 200px;
    margin: 0 auto;
  }
}
</style>