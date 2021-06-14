<template>
  <div>
    <FormulateInput
      type="text"
      label="What is your first name?"
      v-model="firstName"
    />{{ invalidInput }}

    <FormulateInput
      type="text"
      label="What is your last name?"
      v-model="lastName"
    />

    <FormulateInput
      type="text"
      label="What is your email address?"
      v-model="emailAd"
    />

    <FormulateInput
      type="text"
      label="What is your dogs name?"
      v-model="dogName"
    />

    <FormulateInput
      type="radio"
      v-model="brand"
      error-behavior="live"
      validation="in:Toyota,Honda"
      :options="{ Toyota: 'I like Toyota', Honda: 'I like Honda' }"
    />

    <button @click="hitBackEnd">Click me!!!!!!</button>
    <button @click="goHome">Login</button>
    {{ globalAuth }}
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      value: "My initial value",
      brand: "Honda",
      firstName: this.firstName,
      lastName: this.lastName,
      emailAd: this.emailAd,
      dogName: this.dogName,
      globalAuth: false,
      invalidInput: "Check All Fields Correctly!",
    };
  },
  methods: {
    async hitBackEnd() {
      try {
        const rawResponse = await fetch("http://localhost:8000/api", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: this.firstName,
            lastName: this.lastName,
            emailAd: this.emailAd,
            dogName: this.dogName,
          }),
        });
        const content = await rawResponse.json();
        if (!content.isAuth) {
          this.invalidInput = content.invalidInput;
        } else {
          this.globalAuth = content.isAuth;
          this.invalidInput = "Congratz! Redirecting in 5..";
          console.log("this is content", content);
          setTimeout(function() {
            // alert("Thanks for visiting!");
            this.$router.push({ path: "/" });
          }, 5000);
        }
      } catch (err) {
        console.log(err);
      }
    },
    goHome() {
      this.$router.replace({ name: "home" });
    },
  },
};
</script>

<style></style>
