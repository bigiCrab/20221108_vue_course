const app = Vue.createApp({
  data() {
    return {
      addGoalInput: "a",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      if (this.addGoalInput == "") return;
      this.goals.push(this.addGoalInput);
      this.addGoalInput = "";
    },
  },
});

app.mount("#user-goals");
