<template>
  <div>
    <div
      @mouseover="(hover = true), (blah = false)"
      @mouseleave="(hover = false), (blah = true)"
      :class="{ theActive: hover, notActive3: blah }"
    >
      <div>
        <img class="img1" :src="image1" alt="girl" />
      </div>
      <div
        @mouseover="(hover = true), (blah = false)"
        @mouseleave="(hover = false), (blah = true)"
        :class="{ active: hover, notActive: blah }"
      >
        <img class="img2" :src="image2" alt="" />
      </div>
    </div>
    <h1>Hi</h1>
  </div>
</template>

<script>
export default {
  name: "ImageComponent",
  components: {},
  props: ["image1", "image2"],
  data() {
    return { hover: false, blah: true };
  },
  methods: {},
};
</script>

<style scoped>
@import "./animations.css";
@import "./believe.css";

.notActive3 {
  display: flex;
  box-shadow: 0 0 0 4;
  position: relative;
  top: 0;
  left: 0;
  transform: skewX(-10deg);
  animation: moveInRight2 1s;
}

.theActive {
  display: flex;
  box-shadow: 0 0 0 4;
  position: relative;
  top: 0;
  left: 0;
  transform: skewX(10deg);
  animation: moveInRight 1s;
}

.img1 {
  position: relative;
  top: 0;
  left: 0;
  border: 1px solid #000000;
  object-fit: cover;
  height: 50vh;
  width: 20vw;
}

.img2 {
  position: absolute;
  top: 0px;
  left: 0px;
  border: 1px solid #000000;
  object-fit: cover;
  height: 50vh;
  width: 20vw;
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

.notActive {
  opacity: 1;
  animation: out 1s;
}
</style>
