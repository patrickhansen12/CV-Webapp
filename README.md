[![Netlify Status](https://api.netlify.com/api/v1/badges/909ea762-bfc7-476b-8ddf-43b4030883df/deploy-status)](https://app.netlify.com/projects/patrick-cv/deploys)(https://patrick-cv.netlify.app)
![Vue 3](https://img.shields.io/badge/Vue-3-4fc08d)
![Pinia](https://img.shields.io/badge/state-Pinia-yellow)
![Vite](https://img.shields.io/badge/build-Vite-646cff)

Et moderne, responsivt CV bygget med Vue 3 og Pinia. Designet til at præsentere mine kompetencer og projekter på en visuelt appellerende måde – med fokus på brugeroplevelse og clean code.

🔗 **Live demo:** [patrick-cv.netlify.app](https://patrick-cv.netlify.app)

---

## ✨ Features

- 📱 **Fuldt responsivt design** – virker på telefon, tablet og desktop
- 🧭 **SPA-routing** med Vue Router (history mode – ingen `#` i URL'er)
- 🎨 **Modulær SCSS** – genanvendelige styles og komponenter
- 🌗 **Dark mode support** – respekterer brugerens systemindstillinger
- 📄 **PDF-visning** – integreret modal til anbefalinger og udtalelser
- 🚀 **Featured projekt-sektion** – fremhæver mit fullstack MailApp projekt

---

## 🛠️ Tech Stack

| Område | Teknologier |
|--------|-------------|
| **Frontend** | Vue 3, Pinia, Vue Router, SCSS |
| **Build tool** | Vite |
| **Hosting** | Netlify (med SPA-redirects) |
| **Version control** | Git, GitHub |

---

## 📂 Projektstruktur

```
src/
├── assets/          # Billeder, fonte, globale styles
├── components/      # Genanvendelige Vue komponenter
│   ├── contact-information/
│   ├── modals/
│   └── profile/
├── router/          # Vue Router konfiguration
├── stores/          # Pinia stores (auth, drafts, mail)
├── views/           # Side-komponenter
│   ├── CVPage.vue
│   ├── ExperiencesPage.vue
│   ├── ContactPage.vue
│   └── Projects.vue
└── App.vue          # Root komponent
```

---

## 🚀 Kom i gang lokalt

```bash
# Klon repository
git clone https://github.com/patrickhansen12/CV-Webapp.git

# Gå til projektmappe
cd CV-Webapp

# Installer dependencies
npm install

# Start dev-server
npm run dev
```

Byg til produktion:
```bash
npm run build
# Dist-mappen er klar til upload
```

---

## 🌐 Deployment

Sitet er hostet på **Netlify** med automatisk SPA-understøttelse via `_redirects`-fil:

```
/* /index.html 200
```

Ved hvert push til `main` branch, deployes ny version automatisk via Netlify's GitHub integration.

---

## 📬 Kontakt

Har du spørgsmål, feedback eller bare lyst til at snakke?

- 📧 **Email:** patrickbroehansenwork@gmail.com
- 📱 **Telefon:** +45 3170 4479
- 🔗 **LinkedIn:** [linkedin.com/in/patrick-hansen](https://linkedin.com/in/patrick-hansen)

---

## 📄 Licens

Dette projekt er udviklet som en del af min personlige portfolio. Koden er offentligt tilgængelig til inspiration, men må ikke kopieres direkte uden tilladelse.

---

*Bygget med ☕ og dedikation af Patrick Hansen*
