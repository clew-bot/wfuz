<template>
  <div>
    <img src="../assets/onepiece.jpg" alt="one piece" class="op" />
    <img src="../assets/zacian.webp" alt="zacian" class="op" />
    <img
      src="../assets/oldapple.webp"
      alt="apple"
      class="op"
      style="display: flex; flex-grow: 2"
    />
    <img src="../assets/animal.jpg" alt="animal" class="op" />
  </div>
</template>

<script>
export default {
  name: "ImageHolder",
};
</script>

<style scoped>
.op {
  max-height: 400px;
  object-fit: cover;
}
</style>
