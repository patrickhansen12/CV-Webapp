<template>
  <div class="pdf-modal" @click="$emit('close')">
    <div class="modal-content">
      <iframe :src="pdfSrc" width="100%" height="600px" style="border: none;"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // Tilføj event listener for 'Escape' tasten
    document.addEventListener("keydown", this.handleEscape);
  },
  unmounted() {
    // Fjern event listener når komponenten unmountes
    document.removeEventListener("keydown", this.handleEscape);
  },
  methods: {
    handleEscape(e) {
      if (e.key === "Escape" || e.keyCode === 27) {
        this.$emit('close');
      }
    }
  },
  props: {
    selectedPdf: {
      type: String,
      required: true
    }
  },
  computed: {
    pdfSrc() {
      return this.selectedPdf;
    }
  }
};
</script>
  
  <style>
.pdf-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7); /* Makes the background ligther */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensures that the modal is shown above all else */
}

.modal-content {
  background: white;
  padding: 10px;
  width: 90%; 
  height: 80%; 
  max-width: 1200px;
  max-height: 95vh; 
  position: relative;
  overflow: hidden;
}
@media (max-width: 768px) {
  .pdf-modal {
    width: 100%;
    height: 100%;
    padding: 10px;
    
  }
  .modal-content {
    width: 100%;
    height: 90vh;
  }
}
  </style>