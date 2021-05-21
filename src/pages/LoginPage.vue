<template>
  <div>
    <h1>Login here!!!!!!</h1>
    <div>
      <form action="submit" class="container">
        <!-- <input
          v-model="firstname"
          type="text"
          name="first-name"
          placeholder="Type here..."
        /> -->
        <!-- <label for="first-name">Enter First Name</label>
        <input
          v-model="lastname"
          type="text"
          name="last-name"
          placeholder="Type here..."
        />
        <label for="last-name">Enter Last Name</label>
        <input
          v-model="birthday"
          type="date"
          name="birthday"
          placeholder="Type here..."
        /> -->
        <!-- <label for="first-name">Enter Birthday</label> -->
        <input
          v-model="email"
          type="text"
          name="email"
          placeholder="Type here..."
        />
        <label for="email">Enter Email</label>
        <input
          v-model="password"
          type="password"
          name="password"
          placeholder="Type here..."
        />
        <label for="password">Enter your password</label>
        <button @click="onSubmit">Submit!</button>
      </form>
      <div class="error" v-if="error">{{ error.message }}</div>
      <span
        >Need to make an account? Come here to
        <router-link to="/register">Register</router-link></span
      >
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  name: "LoginPage",
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      try {
        const val = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        console.log(val);
        this.$router.replace({ name: "secret" });
      } catch (err) {
        console.log("Something went wrong!", err);
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.container > input {
  height: 2rem;
  margin-top: 2rem;
  font-weight: bold;
  border-radius: 5px;
  border: solid 1px blue;
  box-shadow: 0 3px 2px 1px;
}

.container > label {
  margin-top: 0.5rem;
}

h1 {
  text-align: center;
}
</style>
