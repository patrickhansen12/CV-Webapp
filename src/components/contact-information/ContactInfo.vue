<template>
  <section class="contact-section">
    <h2>Kontakt</h2>
    <p class="intro">
      Har du spørgsmål eller vil du tage en uforpligtende snak,
      er du meget velkommen til at kontakte mig.
    </p>

    <div class="contact-grid">
      <a
        class="contact-card"
        href="mailto:patrickbroehansenwork@gmail.com"
      >
        <span class="icon">✉️</span>
        <div>
          <h3>Email</h3>
          <p>patrickbroehansenwork@gmail.com</p>
        </div>
      </a>

      <a
        class="contact-card"
        href="tel:+4531704479"
      >
        <span class="icon">📞</span>
        <div>
          <h3>Telefon</h3>
          <p>+45 3170 4479</p>
        </div>
      </a>

      <a
        class="contact-card wide"
        href="https://www.linkedin.com/in/patrick-hansen-01460617a/"
        target="_blank"
      >
        <span class="icon">🔗</span>
        <div>
          <h3>LinkedIn</h3>
          <p>linkedin.com/in/patrick-hansen</p>
        </div>
      </a>
    </div>
  </section>
</template>


<script>
export default {};
</script>
<style scoped lang="scss">
.contact-section {
  max-width: 800px;
  margin: 0 auto;
  padding: 60px 20px;
  text-align: center;
}

h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.intro {
  color: #666;
  margin-bottom: 40px;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 14px;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.contact-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
}

.contact-card.wide {
  grid-column: span 2;
}

.icon {
  font-size: 1.8rem;
}

h3 {
  margin: 0;
  font-size: 1rem;
  color: #333;
}

p {
  margin: 4px 0 0;
  color: #555;
}

@media (max-width: 640px) {
  .contact-section {
    padding: 40px 16px;
  }

  .contact-card {
    padding: 18px;
  }
}
@media (max-width: 640px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .contact-card.wide {
    grid-column: span 1;
  }
}

</style>
