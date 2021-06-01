<template>
  <div>
    <div class="container">
      <div>
        <img class="img1" src="/assets/img/girl1.jpg" alt="girl" />
      </div>
      <div
        @mouseover="(hover = true), (blah = false)"
        @mouseleave="(hover = false), (blah = true)"
        :class="{ active: hover, notActive: blah }"
      >
        <img class="img2" src="/assets/img/girl2.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChinaKorea",
};
</script>

<style scoped>
.container {
  margin: 10vw 20% 10vw 20%;
  display: flex;
  box-shadow: 0 0 0 4;
  position: relative;
  top: 0;
  left: 0;
}
.img1 {
  position: relative;
  top: 0;
  left: 0;
  border: 1px solid #000000;
}

.img2 {
  position: absolute;
  top: 0px;
  left: 0px;
  border: 1px solid #000000;
}

.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}

.active {
  animation: fadeOut 1s ease-in;
  animation-fill-mode: forwards;
  border: solid 2px pink;
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  10% {
    opacity: 0.9;
  }
  20% {
    opacity: 0.8;
  }
  30% {
    opacity: 0.7;
  }
  40% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 0;
  }
}

.notActive {
  opacity: 0.8;
  animation: out 1s;
}

@keyframes out {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.8;
  }
}
</style>
