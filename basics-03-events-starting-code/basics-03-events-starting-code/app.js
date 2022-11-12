const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    setName(event, postName) {
      this.name = event.target.value + postName;
    },
  },
});

app.mount("#events");
