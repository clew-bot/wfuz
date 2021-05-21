<template>
  <nav class="sidebar">
    <ul class="side-nav">
      <li class="side-nav__item">
        <router-link to="/login">
          <i class="copyright icon" size="massive"></i>
        </router-link>
      </li>
      <li class="side-nav__item">
        <router-link to="register">
          <i class="phone icon"></i>
        </router-link>
      </li>
      <li class="side-nav__item">
        <router-link to="/secret">
          <i class="code icon"></i>
        </router-link>
      </li>
      <li class="side-nav__item">
        <button @click="signout">
          <i class="sign out alternate icon"></i>
        </button>
      </li>
      <li>
        Logged in: <span v-if="loggedIn"> Sure</span><span v-else>No</span>
      </li>
    </ul>
  </nav>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "SideNav",
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.loggedIn == !!user;
      // if(user) {
      //   this.loggedIn = true
      // } else {
      //   this.loggedIn = false
      // }
    });
  },
  data() {
    return {
      loggedIn: false,
    };
  },
  methods: {
    async signout() {
      console.log("testing");
      prompt(
        "Are you sure you want to sign out? You will be redirected to the homepage"
      );
      try {
        const data = await firebase.auth().signOut();
        console.log(data);
        this.$router.replace({ name: "home" });
      } catch (err) {
        console.log("fuck", err);
      }
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
}

.side-nav__item {
  margin-right: 0.5rem;
  border: solid 2px black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px 10px;
  border-radius: 10px;
}

.side-nav {
  display: flex;
}

@media screen and (max-width: 500px) {
  .side-nav {
    display: none;
  }
}
</style>
