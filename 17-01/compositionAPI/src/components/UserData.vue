<template>
  <div>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';

export default {
  props: ['firstName', 'lastName'],
  setup(props, context) {
    const uName = computed(() => {
      return props.firstName + ' ' + props.lastName;
    });

    const age = inject('userAge');

    console.log(context);
    // context.emit('save-data', 1); // this.$emit('save-data',1)

    onBeforeMount(function () {
      console.log('Before Mount');
    });

    onMounted(function () {
      console.log('Mounted');
    });

    onBeforeUpdate(function () {
      console.log('Before Update');
    });

    onUpdated(function () {
      console.log('Updated');
    });

    onBeforeUnmount(function () {
      console.log('Before Unmount');
    });

    onUnmounted(function () {
      console.log('Unmounted');
    });

    return {
      userName: uName,
      age,
    };
  },
  // computed: {
  //   userName() {
  //     return this.firstName + ' ' + this.lastName;
  //   },
  // },
};
</script>
