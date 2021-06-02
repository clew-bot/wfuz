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
          <ImageComponent
            image1="/assets/img/snow.jpg"
            alt="The snow is truly amazing"
            image2="/assets/img/snow2.jpg"
            alt2="Who doesn't love the snow"
          ></ImageComponent>
          <ImageComponent
            image1="/assets/img/japannight.jpg"
            image2="/assets/img/cafe.jpg"
          ></ImageComponent>
          <ImageComponent
            image1="/assets/img/desert.jpg"
            image2="/assets/img/valley.jpg"
          ></ImageComponent>
        </md-content>
      </div>
    </div>
    <div class="popout"></div>
  </div>
</template>

<script>
import WelcomeCard from "../components/WelcomeCard";
import ImageComponent from "../components/ImageComponent";
export default {
  name: "HomePage",
  components: { WelcomeCard, ImageComponent },
  methods: {
    clickme() {
      console.log("hello from click!");
    },
  },
};
</script>

<style scoped>
@import "../components/animations.css";

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
</style>
