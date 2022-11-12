const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    outputFullName() {
      console.log("🚀 ~ file: app.js ~ line 10 ~ outputFullName ~ outputFullName")
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "!!!";
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetName() {
      this.name = "";
    },
  },
});

app.mount("#events");
