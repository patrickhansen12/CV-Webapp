<template>
    <div>

      <ProfileText />
    </div>
  </template>
  
  <script>
  import ProfileText from '../profile-text/ProfileText.vue';

  
  export default {
    components: {
      ProfileText,
    },
    data() {
      return {
        slideNumber: 1,
      };
    },
    methods: {
    },
  };
  </script>
  
  <style scoped>
  /* Add styling for your main component */
  </style>