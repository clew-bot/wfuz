<template>
  <div class="homepage">
    <div class="abilities">
      <div><img src="../assets/react.png" alt="react bb" height="60" /></div>
      <div><img src="../assets/react.png" alt="react bb" height="60" /></div>
      <div><img src="../assets/react.png" alt="react bb" height="60" /></div>
      <div><img src="../assets/react.png" alt="react bb" height="60" /></div>
    </div>
    <ImageHolder></ImageHolder>
  </div>
</template>

<script>
import ImageHolder from "../components/ImageHolder.vue";

export default {
  name: "HomePage",
  components: { ImageHolder },
};
</script>

<style scoped>
.abilities {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  flex-direction: column;
  flex-grow: 0;
  border: dashed 5px white;
  background-color: black;
}

.abilities > div {
  height: 100px;

  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: App-logo-spin 2s infinite;
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
@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-10rem);
  }
  80% {
    transform: translateX(1rem);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
