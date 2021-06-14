<template>
  <div class="container">
    <header class="header">
      <!-- <div class="icon__main">
        <router-link to="/">
          <img src="../assets/g.svg" alt="" width="100px" />
        </router-link>
      </div>
      <div class="icon__welcome">
        <h1>WFZ's Laboratories</h1>
      </div> -->
      <!-- <div class="icon__buttons">
        <SideNav></SideNav>
      </div> -->
      <!-- <div class="icon__buttons"> -->
      <md-toolbar class="toolbar">
        <!-- <h1 class="md-title" style="flex: 1">WFZ Laboratories</h1> -->
        <img src="../assets/g.svg" alt="" width="45px" />
        <div class="icons__icon">
          <router-link to="/login">
            <md-icon class="md-size-1x">login</md-icon>
          </router-link>
          <router-link to="#">
            <md-icon class="md-size-1x">space_dashboard</md-icon>
          </router-link>
          <router-link to="/secret">
            <md-icon class="md-size-1x">insert_emoticon</md-icon>
          </router-link>
          <router-link to="/">
            <md-icon class="md-size-1x">cottage</md-icon>
          </router-link>
        </div>
        <md-icon
          class="md-size-1x"
          @click.native="signout"
          style="cursor: pointer;"
          >logout</md-icon
        >
        <md-button class="md-icon-button">
          <md-icon>more_vert</md-icon>
        </md-button>
      </md-toolbar>
      <!-- </div> -->
    </header>
  </div>
</template>

<script>
// import SideNav from "../components/SideNav";
// import firebase from "firebase/app";
// import "firebase/auth";
export default {
  name: "AppHeader",
  data() {
    return { loggedIn: false };
  },
  created() {
    // firebase.auth().onAuthStateChanged((user) => {
    //   this.loggedIn == !!user;
    // if(user) {
    //   this.loggedIn = true
    // } else {
    //   this.loggedIn = false
    // }
    // });
  },
  methods: {
    // async signout() {
    //   const letgo = prompt("You sure you want to to sign out?");
    //   if (letgo !== "yes") {
    //     return;
    //   }
    //   try {
    //     const data = await firebase.auth().signOut();
    //     console.log("i'm data", data);
    //     this.$router.replace({ name: "home" });
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
  },
  // components: { SideNav },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: dashed 1px green;
  margin-top: 30px;
  width: 10;
  position: sticky;
}

.icons__icon {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-grow: 3;
}

.md-size-1x {
  pointer-events: all;
}

i {
  height: 50px;
}

.toolbar {
  border-radius: 20px;
  width: 50wv;
}
</style>
