<template>
  <div>
    <TheHeader title="RememberMe"></TheHeader>
    <TheResources></TheResources>
  </div>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheResources from './components/learning-resources/TheResources.vue';

export default {
  components: {
    TheHeader,
    TheResources,
  },
  data() {
    return {
      storedResources: [
        {
          id: 'vue',
          title: 'Official Guide',
          description: 'The official guide for Vue.js',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'The official guide for Vue.js',
          link: 'https://google.com',
        },
      ],
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
