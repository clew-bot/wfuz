<template>
  <div>
    <AppHeader></AppHeader>
    <router-link to="/login">Login</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";

export default {
  name: "App",
  components: { AppHeader },
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  margin-left: 1000px;
}
</style>
