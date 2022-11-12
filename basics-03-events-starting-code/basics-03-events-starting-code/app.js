const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmName:"",
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    setName(event, postName) {
      this.name = event.target.value + postName;
    },
    confirmInput(){
      this.confirmName=this.name;
    },
    submitForm(){
      
    }
  },
});

app.mount("#events");
