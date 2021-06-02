<template>
  <div>
    <section class="container">
      <div class="push">
        <div
          @mouseover="(hover = true), (sing = false)"
          @mouseleave="(hover = false), (sing = true)"
          :class="{ active: hover, notActive: sing }"
        >
          H
        </div>
        <div
          @mouseover="(eLet = true), (eNot = false)"
          @mouseleave="(eLet = false), (eNot = true)"
          :class="{ E: eLet, notE: eNot }"
        >
          E
        </div>
        <div
          @mouseover="(lLet = true), (lNot = false)"
          @mouseleave="(lLet = false), (lNot = true)"
          :class="{ L: lLet, notl: lNot }"
        >
          L
        </div>
        <div
          @mouseover="(iLet = true), (iNot = false)"
          @mouseleave="(iLet = false), (iNot = true)"
          :class="{ I: iLet, notI: iNot }"
        >
          L
        </div>
        <div
          @mouseover="(eeLet = true), (eeNot = false)"
          @mouseleave="(eeLet = false), (eeNot = true)"
          :class="{ EE: eeLet, notEE: eeNot }"
        >
          O
        </div>
        <!-- <div>V</div>
        <div>E</div> -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "WelcomeCard",
  data() {
    return {
      hover: false,
      sing: true,
      eLet: false,
      eNot: true,
      lLet: false,
      lNot: true,
      iLet: false,
      iNot: true,
      eeLet: false,
      eeNot: true,
    };
  },
};
</script>

<style scoped>
@import "./animations.css";
@import "./believe.css";

section {
  width: 100vw;
  height: 80vh;
  border: solid 1px black;
  background-color: #f4b349;
  background-image: url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.push {
  text-align: center;
  height: 80vh;
  width: 100vw;
  letter-spacing: 0.8em;
  font-size: 10rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.push > div {
  -webkit-text-stroke: 3px white;
}
</style>
