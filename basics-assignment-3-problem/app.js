const app = Vue.createApp({
  data() {
    return {
      result: 0,
    };
  },
  methods: {
    addNum(val) {
      this.result += val;
    },
  },
  computed: {
    resultView(val) {
      console.log(this.result);
      if (this.result === 37) return this.result;
      return this.result > 37 ? "Too much!" : "Not there yet";
    },
  },
  watch: {
    result(now, pass, fn) {
      console.log("🚀 ~ file: app.js ~ line 21 ~ result ~ val", {
        ...arguments,
      });
      clearTimeout(this.preTimerNo);
      this.preTimerNo = setTimeout(() => {
        console.log("set result to 0");
        this.result = 0;
      }, 5000);
    },
  },
}).mount("#assignment");
