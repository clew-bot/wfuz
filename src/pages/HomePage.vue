<template>
  <div class="homepage">
    <div class="content">
      <SideNav></SideNav>
    </div>
    <div class="abilities">
      <h1></h1>
      <h1>Software Development</h1>
      <h1>Agile Methodologies</h1>
      <h1>Exquisite Problem Solving</h1>
      <h1>Alpha</h1>
    </div>
    <ImageHolder></ImageHolder>
  </div>
</template>

<script>
import SideNav from "../components/SideNav.vue";
import ImageHolder from "../components/ImageHolder.vue";

export default {
  name: "HomePage",
  components: { SideNav, ImageHolder },
};
</script>

<style scoped>
h1:first-child {
  margin-top: 0 !important;
}

.abilities {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  border: solid 5px blue;
  background-color: pink;
}

.homepage {
  display: flex;
  /* flex-direction: column; */
  border: solid 10px green;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
