<template>
  <div>
    <div
      @mouseover="(hover = true), (noHover = false)"
      @mouseleave="(hover = false), (noHover = true)"
      :class="{ isActiveContainer: hover, noActiveContainer: noHover }"
    >
      <div>
        <img class="img1" :src="image1" v-bind:alt="alt" />
      </div>
      <div
        @mouseover="(hover = true), (noHover = false)"
        @mouseleave="(hover = false), (noHover = true)"
        :class="{ activeImage: hover, notActiveImage: noHover }"
      >
        <img class="img2" :src="image2" v-bind:alt="alt2" />
      </div>
    </div>
    <h1>Hi</h1>
  </div>
</template>

<script>
export default {
  name: "ImageComponent",
  components: {},
  props: ["image1", "image2", "alt", "alt2"],
  data() {
    return {
      hover: false,
      noHover: true,
    };
  },
  methods: {},
};
</script>

<style scoped>
@import "./animations.css";
@import "./believe.css";

.noActiveContainer {
  display: flex;
  box-shadow: 0 0 0 4;
  position: relative;
  top: 0;
  left: 0;
  transform: skewX(-10deg);
  animation: moveInRight2 1s;
}

.isActiveContainer {
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

.activeImage {
  animation: fadeOut 1s ease-in;
  animation-fill-mode: forwards;
}

.notActiveImage {
  opacity: 1;
  animation: out 1s;
}
</style>
