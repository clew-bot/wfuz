<template>
  <div>
    <div class="homepage">
      <div class="abilities">
        <span>made with:</span>
        <img
          src="../assets/vue.png"
          alt="vue is better"
          class="popout"
          height="10"
        />
      </div>

      <WelcomeCard></WelcomeCard>
      <div class="images">
        <md-content>
          <AboutMe></AboutMe>

          <SecondRec></SecondRec>

          <Triangle></Triangle>
        </md-content>
      </div>
    </div>
    <div class="popout"></div>
  </div>
</template>

<script>
import WelcomeCard from "../components/WelcomeCard";
import AboutMe from "../components/AboutMe";
import Triangle from "../components/Triangle";
import SecondRec from "../components/SecondRec";
export default {
  name: "HomePage",
  components: { WelcomeCard, AboutMe, SecondRec, Triangle },
  methods: {
    clickme() {
      console.log("hello from click!");
    },
  },
};
</script>

<style scoped>
.md-content.md-theme-default {
  background-color: rgb(231, 253, 105);
}

.md-content {
  margin-top: 10vw;
  width: 100%;
  height: 500px;
  border-radius: 10px;
  justify-content: space-evenly;
  align-items: center;
  display: inline-flex;
}
.images {
  display: flex;
  justify-content: center;
  align-items: center;
  height: -10rem;
}

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

@keyframes popout2 {
  from {
    -webkit-transform: scale(1);
  }
  80% {
    -webkit-transform: scale(3);
  }
  to {
    -webkit-transform: scale(1);
  }
}

.popout:hover {
  animation: popout2 2s infinite;
}

.abilities {
  display: flex;
  justify-content: space-evenly;
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

/* .content {
  display: flex;
  align-items: center;
  justify-content: center;
} */
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
