<template>
  <div class="top-bar">
    <div class="title non-interactive">Patricks CV</div>
    <div class="menu">
      <router-link @click="setActiveSection('home')" to="/" class="menu-item">
        Forside
      </router-link>
      <router-link @click="setActiveSection('experiences')" to="/erfaringer" class="menu-item">
        Erfaringer
      </router-link>
      <router-link @click="setActiveSection('contact')" to="/kontakt" class="menu-item">
        Kontakt
      </router-link>
      
    </div>
<a href="https://github.com/patrickhansen12/CV-Webapp-" 
   target="_blank" 
   class="menu-item github-link">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" 
       viewBox="0 0 24 24">
    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.582
      0-.287-.012-1.243-.017-2.25-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757
      -1.09-.745.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605
      -2.665-.3-5.466-1.332-5.466-5.932 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176
      0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.004-.404c1.02.005 2.047.138 3.004.404
      2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.119 3.176.77.84 1.235 1.912 1.235 3.222
      0 4.61-2.804 5.63-5.476 5.922.43.372.823 1.102.823 2.222
      0 1.604-.015 2.896-.015 3.286 0 .322.217.699.825.58C20.565 22.295 24 17.795 24 12.5
      24 5.87 18.627.5 12 .5z"/>
  </svg>
  Kildekode
</a>
    <div class="menu-item dropdown download-cv">
      Printvenlig CV

      <div class="dropdown-content">

        <!-- Dansk -->
        <div class="dropdown-group">
          <div class="dropdown-title non-interactive">🇩🇰 Dansk</div>

          <a href="#" @click.prevent="openModal('/CV-Webapp/pdfs/patrick-cv-danish-full.pdf')">
            CV — fuld version
          </a>

          <a href="#" @click.prevent="openModal('/CV-Webapp/pdfs/patrick-cv-danish-short.pdf')">
            CV — kort version
          </a>
        </div>

        <!-- English -->
        <div class="dropdown-group">
          <div class="dropdown-title non-interactive">🇬🇧 English</div>
          <a href="#" @click.prevent="openModal('/CV-Webapp/pdfs/patrick-cv-english-full.pdf')">
            CV — full version
          </a>

          <a href="#" @click.prevent="openModal('/CV-Webapp/pdfs/patrick-cv-english-short.pdf')">
            CV — short version
          </a>
        </div>

      </div>
    </div>

    <pdf-modal
      v-if="pdfModalVisible"
      :selected-pdf="selectedPdf"
      @close="closeModal"
    />
  </div>
</template>

<script>
import PdfModal from "@/components/modals/PdfModal.vue";
import { usePositionStore } from '@/stores/position';

export default {
  components: { PdfModal },
  data() {
    return {
      pdfModalVisible: false,
      selectedPdf: null,
    };
  },
  methods: {
    setActiveSection(section) {
      usePositionStore().setActiveSection(section);
    },
    openModal(pdfPath) {
      this.selectedPdf = pdfPath;
      this.pdfModalVisible = true;
    },
    closeModal() {
      this.pdfModalVisible = false;
      this.selectedPdf = null;
    },
  },
};
</script>

<style scoped lang="scss">
.top-bar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;

  .title {
    font-size: 24px;
    font-weight: bold;
  }

  .menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
  }

  .menu-item {
    margin: 10px 10px 10px 0; 
    color: #f2f2f2;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.3s;
    cursor: pointer;
    
  }

  .download-cv {
    margin-top: 10px;
  }
}

/* Mobile-specifikke styles */
@media (max-width: 767px) {
  .download-cv {
    position: relative;
    width: 100%;
    margin-top: 15px;
    
    .dropdown-content {
      position: static;
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-top: 5px;
      
      a {
        padding: 12px;
        text-align: center;
        background-color: #444;
        margin-bottom: 5px;
        border-radius: 4px;
      }
    }
  }
}

@media (min-width: 768px) {
  .download-cv {
    margin-left: auto;
    
    .dropdown-content {
      display: none;
      position: absolute;
    }
    
    &:hover .dropdown-content {
      display: flex;

    }
  }
  .top-bar {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .menu {
      flex-direction: row;
      align-items: center;
      margin-left: 20px;
      flex-grow: 1;
    }

    .menu-item {
      margin: 0 15px 0 0;
    }

    .download-cv {
      margin-left: auto;
      margin-top: 0;
      position: relative;
    }
  }

  .menu-item.dropdown {
    position: relative;
    cursor: pointer;
    color: #f2f2f2;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #444;
    min-width: 160px;
    flex-direction: column;
    border-radius: 4px;
    z-index: 1000;
  }

  .menu-item.dropdown:hover .dropdown-content {
    display: flex;
  }

  .dropdown-content a {
    color: #f2f2f2;
    padding: 10px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content a:hover {
    background-color: #555;
  }

}
.dropdown-group {
  padding: 6px 0;
  border-top: 1px solid #e6e6e6;
}

.dropdown-group:first-child {
  border-top: none;
}

.dropdown-title {
  font-weight: 600;
  font-size: 0.9rem;
  opacity: 0.8;
  padding: 4px 10px;
}
/* Tilføj dette til din eksisterende CSS */

@media (min-width: 768px) {
  .dropdown-content {
    display: none;
    position: absolute;
    top: 100%;
    
    /* Vigtige ændringer her: */
    right: 0; /* Juster til højre kant */
    left: auto;
    min-width: 300px; /* Fast bredde */
    max-width: 90vw; /* Maks 90% af viewport */
    background-color: #444;
    border-radius: 4px;
    z-index: 1000;
    flex-direction: column;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    overflow: hidden;
  }

  .dropdown-group {
    padding: 8px 0;
    border-top: 1px solid #555;
  }

  .dropdown-group:first-child {
    border-top: none;
  }

  .dropdown-title {
    font-weight: 600;
    font-size: 0.9rem;
    opacity: 0.8;
    padding: 6px 12px;
    white-space: nowrap;
  }

  .dropdown-content a {
    color: #f2f2f2;
    padding: 8px 12px;
    text-decoration: none;
    display: block;
    white-space: nowrap; /* Forhindrer tekst i at gå på flere linjer */
    transition: background-color 0.2s;
  }

  .dropdown-content a:hover {
    background-color: #555;
  }
  
  /* Sørg for at dropdown ikke går ud over skærmen */
  .download-cv {
    position: relative;
    margin-left: auto;
  }
}

// Mobile 
@media (max-width: 767px) {
  .dropdown-content {
    position: static;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 5px;
    background-color: #444;
    border-radius: 4px;
    overflow: hidden;
  }

  .dropdown-group {
    padding: 10px 0;
    border-top: 1px solid #555;
  }

  .dropdown-group:first-child {
    border-top: none;
  }

  .dropdown-title {
    font-weight: 600;
    font-size: 0.9rem;
    opacity: 0.8;
    padding: 8px 16px;
  }

  .dropdown-content a {
    padding: 12px 16px;
    text-align: left;
    background-color: #444;
    margin-bottom: 0;
    border-radius: 0;
    color: #f2f2f2;
    text-decoration: none;
    border-bottom: 1px solid #555;
  }

  .dropdown-content a:last-child {
    border-bottom: none;
  }
  
  .dropdown-content a:hover {
    background-color: #555;
  }

}
.non-interactive {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  
  /* Forhindrer at man kan trække i elementet */
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
  
  /* Forhindrer kontekstmenu (højreklik) */
  -webkit-touch-callout: none;
  
  /* Forhindrer at blive markeret som tekst */
  pointer-events: auto; /* eller 'none' hvis det skal være helt inaktivt */
  
  /* Ekstra for at se bedre ud */
  cursor: default;
}</style>