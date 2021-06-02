<template>
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

    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">Entry Card #1</div>
          <div class="md-subhead">It also have a ripple</div>
        </md-card-header>

        <md-card-content> </md-card-content>

        <md-card-actions>
          <md-button>Action</md-button>
          <md-button>Action</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
  </div>
</template>

<style scoped>
.md-toolbar + .md-toolbar {
  margin-top: 16px;
}
</style>

<script>
export default {
  name: "SecretPage",
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
