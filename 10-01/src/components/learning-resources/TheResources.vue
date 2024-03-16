<template>
  <div>
    <BaseCard>
      <BaseButton
        @click="setSelectedTab('StoredResource')"
        :mode="storedResButtonMode"
        >Stored Resources</BaseButton
      >
      <BaseButton
        @click="setSelectedTab('AddResource')"
        :mode="addResButtonMode"
        >Add Resource</BaseButton
      >
    </BaseCard>
    <component :is="selectedTab"></component>
  </div>
</template>

<script>
import StoredResource from './StoredResource.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResource,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'stored-resources',
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
  provide() {
    return {
      resources: this.storedResources,
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'StoredResource' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'AddResource' ? null : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>
