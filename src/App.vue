<template>
  <div>
    <top-bar />
    <router-view />
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

</style>