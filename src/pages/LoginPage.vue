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
    <div class="league">
      <h1>Another Login</h1>
      <FormulateInput
        type="text"
        label="What is your first name?"
        v-model="firstName"
      />

      <FormulateInput
        type="text"
        label="What is your last name?"
        v-model="lastName"
      />
      <FormulateInput
        type="text"
        label="What is your dogs name?"
        v-model="dogName"
      />
      <button @click="secondaryLogin">Login</button>
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
      firstName: this.firstName,
      lastName: this.lastName,
      dogName: this.dogName,
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
    async secondaryLogin() {
      try {
        alert("yo");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.league {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.league > div {
  margin-top: 10px;
}

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
