Vue.createApp({
  data() {
    return {
      age: 50,
      name: "nnname",
      imgSrc:"https://picsum.photos/200",
      text:"123"
    };
  },
  methods: {
    getRand() {
      return Math.random();
    },
  },
}).mount("#assignment");
