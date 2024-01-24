<template>
  <div class="total-view">
    <top-bar />
    <router-view class="router-view"  />
  </div>
</template>

<script>
// import CVPage from './views/CVPage.vue'
import TopBar from './components/top-bar/TopBar.vue';
export default {
  components: { TopBar },
}

</script>

<style>
.total-view{
overflow: hidden;
}
.router-view{
  max-width: 100%;
}
</style>