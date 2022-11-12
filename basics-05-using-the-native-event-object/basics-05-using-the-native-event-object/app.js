const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    outputFullName() {
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
  computed: {
    fullname(){
      console.log("🚀 ~ file: app.js ~ line 31 ~ fullname ~ fullname")
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "!!!";
    }
  },
});

app.mount("#events");
