<template>
  <div class="top-bar">
    <div class="title">Patricks CV</div>
    <div class="menu">
      <router-link to="/" class="menu-item" exact>
        Home
      </router-link>
      <router-link to="/about" class="menu-item">
        About
      </router-link>
      <router-link to="/services" class="menu-item">
        Services
      </router-link>
      <router-link to="/contact" class="menu-item">
        Contact
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
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
}

.menu-item:hover {
  color: #ddd;
}

.menu-item.router-link-exact-active {
  color: #04aa6d;
}


</style>
