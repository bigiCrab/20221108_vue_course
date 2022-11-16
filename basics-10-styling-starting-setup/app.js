Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  methods: {
    selectBox(box) {
      this[`box${box}Selected`] = !this[`box${box}Selected`] ;
      console.log('A',this.boxASelected);
      console.log('B',this.boxBSelected);
      console.log('C',this.boxCSelected);
    },
  },
}).mount("#styling");
