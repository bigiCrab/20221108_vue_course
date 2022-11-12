Vue.createApp({
  data() {
    return {
      input1: 1,
    };
  },
  methods: {
    showAlert() {
      alert("A");
    },
    inputHandler(event) {
      this.input1 = event.target.value;
    },
  },
}).mount("#assignment");
