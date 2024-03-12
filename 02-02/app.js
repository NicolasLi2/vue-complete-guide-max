const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
      // fullName: '',
      lastName: '',
    };
  },
  // watch: {
  //   name(value) {
  //     if (value === '') {
  //       this.fullName = '';
  //     } else {
  //       this.fullName = value + ' ' + this.lastName;
  //     }
  //   },
  //   lastName(value) {
  //     if (value === '') {
  //       this.fullName = '';
  //     } else {
  //       this.fullName = this.name + ' ' + value;
  //     }
  //   },
  // },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
  },
  computed: {
    fullName() {
      console.log('running again...');
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    },
  },
  methods: {
    // add() {
    //   this.counter = this.counter + 1;
    // },
    // reduce() {
    //   this.counter--;
    // },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    // setName(event) {
    //   this.name = event.target.value;
    // },
    // setName(event, lastName) {
    //   this.name = event.target.value + ' ' + lastName;
    // },
    setName(event) {
      this.name = event.target.value;
    },
    // submitForm(event) {
    //   event.preventDefault();
    //   alert('Submitted!');
    // },
    submitForm() {
      alert('Submitted!');
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = '';
    },
    outputFullName() {
      console.log('running again...');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Doe';
    },
  },
});

app.mount('#events');
