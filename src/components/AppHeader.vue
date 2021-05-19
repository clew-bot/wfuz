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
      <!-- <div class="icon__buttons">
        <SideNav></SideNav>
      </div> -->
      <div class="icon__buttons">
        <md-toolbar class="toolbar">
          <h1 class="md-title" style="flex: 1">PEANUTS</h1>

          <md-icon class="md-size-1x">login</md-icon>
          <md-icon class="md-size-1x">space_dashboard</md-icon>
          <md-icon class="md-size-1x">insert_emoticon</md-icon>
          <md-icon class="md-size-1x">cottage</md-icon>
          <md-icon class="md-size-1x">logout</md-icon>

          <md-button class="md-icon-button">
            <md-icon>more_vert</md-icon>
            <img src="../assets/g.svg" alt="" width="100px" />
          </md-button>
        </md-toolbar>
      </div>
    </header>
  </div>
</template>

<script>
// import SideNav from "../components/SideNav";

export default {
  name: "AppHeader",
  data() {
    return {};
  },
  // components: { SideNav },
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
  justify-content: space-around;
  flex-grow: 2;
}

.toolbar {
  border-radius: 20px;
}
</style>
