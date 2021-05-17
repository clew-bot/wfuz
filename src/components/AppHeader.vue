<template>
  <div class="container">
    <header class="header">
      <div class="icon__main">
        <router-link to="/">
          <img src="../assets/g.svg" alt="" width="100px" />
        </router-link>
      </div>
      <div class="icon__welcome">
        <h1>WFZ's Laboratories</h1>
      </div>
      <div class="icon__buttons">
        <SideNav></SideNav>
      </div>
    </header>
  </div>
</template>

<script>
import SideNav from "../components/SideNav";

export default {
  name: "AppHeader",
  data() {
    return {};
  },
  components: { SideNav },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: dashed 1px green;
}

.icon__buttons {
  display: flex;
  align-items: center;
}
</style>
