<template>
  <div>
    <div class="container">
      <md-content class="title"><h1>Dashboard - Welcome!</h1></md-content>
      <md-content class="title"><h1>Dashboard - Welcome!</h1></md-content>
      <md-content class="title"><h1>Dashboard - Welcome!</h1></md-content>
      <md-content class="title"><h1>Dashboard - Welcome!</h1></md-content>
      <md-content class="title"><h1>Dashboard - Welcome!</h1></md-content>
      <md-content class="title"><h1>Dashboard - Welcome!</h1></md-content>
      <md-content class="title"><h1>Dashboard - Welcome!</h1></md-content>
      <md-content class="title"><h1>Dashboard - Welcome!</h1></md-content>
      <md-content class="title"><h1>Dashboard - Welcome!</h1></md-content>
    </div>
    <Form></Form>
  </div>
</template>

<style scoped>
.md-toolbar + .md-toolbar {
  margin-top: 16px;
}
</style>

<script>
import Form from "../components/Form.vue";
export default {
  name: "SecretPage",
  components: { Form },
};
</script>

<style scoped>
.title {
  border-radius: 5px;
  box-shadow: 0px 0px 0.5px 1px;
  margin-bottom: 1rem;
}

.container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>
