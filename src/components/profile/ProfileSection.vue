<template>
 <div class="profile-section">
     <text-cards class="text-cards"/>
     <image-container/>
    </div>

</template>

<script>
import ImageContainer from './image-container/ImageContainer.vue'
import TextCards from './text-cards/TextCards.vue'
export default {
  components: { TextCards, ImageContainer },

}
</script>

<style lang="scss">
.profile-section{
    display: flex;

}
.text-cards{
  width: 100%;
}
</style>