<template>
  <div class="container">
    <header class="header">
      <div class="icon__main">
        <img src="../assets/g.svg" alt="" width="100px" />
      </div>
      <div class="icon__welcome">
        <h1>WFZ's Laboratories</h1>
      </div>
      <div class="icon__buttons">
        <button class="icn-btn">Click Here</button>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: dashed 1px green;
}
</style>
