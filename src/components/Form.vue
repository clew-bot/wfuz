<template>
  <div>
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
    };
  },
  methods: {
    async hitBackEnd() {
      try {
        const rawResponse = await fetch("http://localhost:8000/api", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: this.firstName }),
        });
        const content = await rawResponse.json();

        console.log(content);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
