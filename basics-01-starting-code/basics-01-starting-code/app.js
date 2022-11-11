const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Learn Vue!",
      courseGoalB: "Master Vue!",
      vueLink: "https://vuejs.org/guide/quick-start.html#using-vue-from-cdn",
    };
  },
  methods: {
    outputGoal() {
      const randomNum = Number(Math.random());
      console.log(this["[[Target]]"]);
      return randomNum < 0.5 ? this.courseGoalA : this.courseGoalB;
    },
  },
});

app.mount("#user-goal");
