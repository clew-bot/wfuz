<template>
  <div>
    <div v-if="error" class="error">{{ error.message }}</div>
    <form @submit.prevent="pressed">
      <div class="email">
        <input type="email" v-model="email" placeholder="email" />
      </div>
      <div class="password">
        <input type="password" v-model="password" />
      </div>
      <button type="submit">Register!</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
import "firebase/auth";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async pressed() {
      try {
        const user = firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        console.log(user);
        this.$router.replace({ name: "secret" });
      } catch (err) {
        console.log("Something went wrong!", err);
      }
    },
  },
};
</script>

<style scoped>
.error {
  border: solid 2px red;
}
</style>
