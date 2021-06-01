<template>
  <div>
    <div
      @mouseover="(hover = true), (blah = false)"
      @mouseleave="(hover = false), (blah = true)"
      :class="{ active3: hover, notActive3: blah }"
    >
      <div>
        <img class="img1" src="/assets/img/japannight.jpg" alt="girl" />
      </div>
      <div
        @mouseover="(hover = true), (blah = false)"
        @mouseleave="(hover = false), (blah = true)"
        :class="{ active: hover, notActive: blah }"
      >
        <img class="img2" src="/assets/img/cafe.jpg" alt="" />
      </div>
    </div>
    <h1>Hi</h1>
  </div>
</template>

<script>
export default {
  name: "SecondRec",
  components: {},
  data() {
    return { hover: false, blah: true };
  },
  methods: {},
};
</script>

<style scoped>
.notActive3 {
  display: flex;
  box-shadow: 0 0 0 4;
  position: relative;
  top: 0;
  left: 0;
  transform: skewX(-10deg);
  animation: moveInRight2 1s;
}

.active3 {
  display: flex;
  box-shadow: 0 0 0 4;
  position: relative;
  top: 0;
  left: 0;
  border: solid 2px hotpink;
  transform: skewX(10deg);
  animation: moveInRight 1s;
}

.img1 {
  position: relative;
  top: 0;
  left: 0;
  border: 1px solid #000000;
  object-fit: cover;
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
}

@keyframes moveInRight {
  0% {
    transform: skewX(-10deg);
  }

  100% {
    opacity: 1;
    transform: translate(0);
    transform: skewX(10deg);
  }
}
@keyframes moveInRight2 {
  0% {
    transform: skewX(10deg);
  }

  100% {
    opacity: 1;
    transform: translate(0);
    transform: skewX(-10deg);
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  10% {
    opacity: 0.9;
  }

  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
}

.notActive {
  opacity: 1;
  animation: out 1s;
}

@keyframes out {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
