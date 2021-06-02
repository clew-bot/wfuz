<template>
  <div>
    <section class="container">
      <div class="push">
        <div
          @mouseover="(hover = true), (sing = false)"
          @mouseleave="(hover = false), (sing = true)"
          :class="{ active: hover, notActive: sing }"
        >
          B
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
          I
        </div>
        <div
          @mouseover="(eeLet = true), (eeNot = false)"
          @mouseleave="(eeLet = false), (eeNot = true)"
          :class="{ EE: eeLet, notEE: eeNot }"
        >
          E
        </div>
        <div>V</div>
        <div>E</div>
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

.notActive {
  color: red;
  transform: skewX(-40deg);
  animation: skewLeft 1s ease-in;
}
.active {
  color: blue;
  animation: skewRight 1s ease-in;
  transform: skewX(-40deg);
  animation-fill-mode: forwards;
}

.notE {
  color: red;
  transform: skewY(-20deg);
  animation: moveDown 1s ease-in;
}
.E {
  color: blue;
  animation: moveUp 1s ease-in;

  animation-fill-mode: forwards;
}

.notl {
  color: red;
  transform: skewY(12deg);

  animation: letterLin 1s ease-in;
}
.L {
  color: blue;
  animation: letterLout 1s ease-in;

  animation-fill-mode: forwards;
}

.notI {
  color: red;
  transform: skewY(-20deg);

  animation: letterIin 1s ease-in;
}
.I {
  color: blue;
  animation: letterIout 1s ease-in;

  animation-fill-mode: forwards;
}

.notEE {
  color: red;
  transform: skewY(15deg);

  animation: letterEEin 1s ease-in;
}
.EE {
  color: blue;
  animation: letterEEout 1s ease-in;

  animation-fill-mode: forwards;
}

section {
  width: 100vw;
  height: 80vh;
  border: solid 1px black;
  background-image: url("/assets/img/wonders.jpg");
  /* transform: skewX(20deg); */
  background-size: 100%;
  clip-path: polygon(5% 8%, 86% 3%, 95% 92%, 16% 94%);
  /* animation: normalize 2s ease-out; */
}

.push {
  text-align: center;
  height: 80vh;
  width: 100vw;
  letter-spacing: 0.8em;
  font-size: 3rem;
  border: solid 4px yellow;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

/* section h1 {
  transform: skewX(-40deg);
  font-size: 3vw;
  animation: normalize2 2s ease-out;

  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
} */

/* section h1:hover {
  animation: popOutText 2s ease-out;
} */

h1 span:hover {
  animation: moveUp 2s ease-in;
}

@media only screen and (max-width: 600px) {
  section {
    width: 90%;
    height: 100%;
    border: solid 1px black;
    background-image: url("/assets/img/wonders.jpg");
    transform: scaleX(10);
    background-size: 100%;
  }
  section h1 {
    transform: skewX(-40deg);
    font-size: 1em;
  }
}
</style>
