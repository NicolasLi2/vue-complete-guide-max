<template>
  <div>
    <TheHeader title="RememberMe"></TheHeader>
    <StoredResource :resources="storedResources"></StoredResource>
  </div>
</template>

<script>
import StoredResource from './components/learning-resources/StoredResource.vue';
import TheHeader from './components/layouts/TheHeader.vue';

export default {
  components: {
    StoredResource,
    TheHeader,
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
