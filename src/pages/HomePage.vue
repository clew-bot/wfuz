<template>
  <div>
    <div class="homepage">
      <div class="abilities">
        <!-- <div><img src="../assets/react.png" alt="react bb" height="60" /></div>
        <div><img src="../assets/react.png" alt="react bb" height="60" /></div>
        <div><img src="../assets/react.png" alt="react bb" height="60" /></div>
        <div><img src="../assets/react.png" alt="react bb" height="60" /></div> -->

        <img
          src="../assets/vue.png"
          alt="vue is better"
          class="popout"
          height="10"
        />
      </div>

      <WelcomeCard></WelcomeCard>
    </div>
    <div class="popout"></div>
  </div>
</template>

<script>
import WelcomeCard from "../components/WelcomeCard";
export default {
  name: "HomePage",
  components: { WelcomeCard },
  methods: {
    clickme() {
      console.log("hello from click!");
    },
  },
};
</script>

<style scoped>
.popout {
  height: 30px;
  animation: popout 2s infinite;
  -webkit-animation: popout 2s infinite;
}
@keyframes popout {
  from {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  to {
    transform: scale(1);
  }
}
@-webkit-keyframes popout {
  from {
    -webkit-transform: scale(1);
  }
  80% {
    -webkit-transform: scale(1.2);
  }
  to {
    -webkit-transform: scale(1);
  }
}

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
