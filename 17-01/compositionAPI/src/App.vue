<template>
  <section class="container">
    <!-- <h2>{{ userName }}</h2> -->
    <!-- <h3>{{ age }}</h3> -->
    <p>{{ user.name }}</p>
    <p>{{ user.age }}</p>
  </section>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    // const uName = ref('Maximilian');
    // const uAge = ref(27);
    const user = ref({
      name: 'Maximilian',
      age: 27,
    });

    console.log(user);

    setTimeout(() => {
      // uName.value = 'Max';
      // uAge.value = 28;
      user.value.name = 'Max';
      user.value.age = 28;
    }, 2000);

    // return { userName: uName, age: uAge };
    return { user: user };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
