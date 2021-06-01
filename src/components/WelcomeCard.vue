<template>
  <div>
    <section>
      <div class="container">
        <h1>Something Exciting</h1>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "WelcomeCard",
};
</script>

<style scoped>
section {
  width: 100%;
  height: 80vh;
  border: solid 1px black;
  background-image: url("/assets/img/wonders.jpg");
  /* transform: skewX(20deg); */
  background-size: 100%;
  clip-path: polygon(5% 8%, 86% 3%, 95% 92%, 16% 94%);
  /* animation: normalize 2s ease-out; */
}

section div {
  height: 100%;
  width: 100%;
  border: solid 4px yellow;
  display: flex;
  justify-content: center;
  align-items: center;
}

section h1 {
  transform: skewX(-40deg);
  font-size: 5em;
  animation: popOutText 2s ease-out;
  color: black;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}

section h1:hover {
  animation: popOutText 2s ease-out;
}

@media only screen and (max-width: 600px) {
  section {
    width: 90%;
    height: 100%;
    border: solid 1px black;
    background-image: url("/assets/img/wonders.jpg");
    transform: skewX(20deg);
    background-size: 100%;
  }
  section h1 {
    transform: skewX(-40deg);
    font-size: 1em;
  }
}

@keyframes normalize {
  0% {
    clip-path: polygon(5% 8%, 86% 3%, 95% 92%, 16% 94%);
  }
  30% {
    clip-path: polygon(33% 8%, 96% 19%, 74% 75%, 8% 84%);
  }
  70% {
    clip-path: polygon(17% 34%, 81% 5%, 85% 97%, 40% 85%);
  }
  100% {
    clip-path: polygon(5% 8%, 86% 3%, 95% 92%, 16% 94%);
  }
}

@keyframes popOutText {
  0% {
    transform: scaleX(100);
    transform: scaleY(20);
  }
  30% {
    transform: skewX(50deg);
    font-size: 120px;
  }
  100% {
    transform: skewX(-40deg);
  }
}
</style>
