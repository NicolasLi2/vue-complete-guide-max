<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <p>{{ user.name }}</p>
    <p>{{ user.age }}</p>
  </section>
</template>

<script>
import { ref, isReactive, isRef, toRefs } from 'vue';
import { reactive } from 'vue';

export default {
  setup() {
    const uAge = ref(27);
    const user = reactive({
      // reactive is only for objects
      name: 'Maximilian',
      age: 27,
    });

    console.log(isReactive(user));
    console.log(isRef(uAge));

    setTimeout(() => {
      user.name = 'Max';
      user.age = 28;
    }, 2000);

    const userRefs = toRefs(user);

    return { user: user, userName: userRefs.name, age: userRefs.age };
  },
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
