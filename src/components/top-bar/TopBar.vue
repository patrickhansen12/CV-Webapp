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
      <router-link @click="setActiveSection('about')" to="/om-mig" class="menu-item">
        Om mig
      </router-link>
    </div>
  </div>
</template>

<script>
import { usePositionStore } from '@/stores/position';

export default {
  methods: {
    setActiveSection(section) {
      usePositionStore().setActiveSection(section);
    },
  },
};
</script>

<style lang="scss">
.top-bar {
  display: flex;
  flex-direction: column; // Change to column for mobile view
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;

  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px; // Add margin for spacing
  }

  .menu {
    display: flex;
    flex-direction: column; // Change to column for mobile view
    align-items: center;
  }

  .menu-item {
    margin: 10px 0; // Add margin for spacing
    color: #f2f2f2;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.3s;
    cursor: pointer;
  }

  .menu-item:hover {
    color: #ddd;
  }

  .menu-item.router-link-exact-active {
    color: #04aa6d;
  }
}

// Media Queries for Responsive Design
@media (min-width: 768px) {
  .top-bar {
    flex-direction: row;
    .menu {
      flex-direction: row;
      align-items: center;
    }

    .title {
      margin-bottom: 0; // Reset margin for larger screens
    }

    .menu-item {
      margin: 0 15px; // Reset margin for larger screens
    }
  }
}
</style>