<template>
  <li>
    <h2>
      {{ friend.name }}
    </h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <p>Phone: {{ friend.phone }}</p>
        <p>Email: {{ friend.email }}</p>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 1,
        name: 'Max',
        phone: '1234567890',
        email: 'max@email.com',
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>
