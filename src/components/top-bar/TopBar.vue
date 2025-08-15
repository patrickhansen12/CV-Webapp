<template>
  <div class="top-bar">
    <div class="title">Patricks CV</div>
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

    <div class="menu-item dropdown download-cv">
      Printvenlig CV
      <div class="dropdown-content">
        <a href="#" @click.prevent="openModal('/CV-Webapp/pdfs/cv-danish.pdf')">Dansk CV</a>
        <a href="#" @click.prevent="openModal('/CV-Webapp/pdfs/cv-english.pdf')">Engelsk CV</a>
      </div>
    </div>

    <pdf-modal v-if="pdfModalVisible" :selected-pdf="selectedPdf" @close="closeModal" />
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

@media (min-width: 768px) {
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

/* Desktop-styles */
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
}
</style>