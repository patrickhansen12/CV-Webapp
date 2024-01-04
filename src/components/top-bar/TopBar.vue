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
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
}

.menu {
  display: flex;
}

.menu-item {
  margin: 0 15px;
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
</style>