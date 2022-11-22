const app = Vue.createApp({
  data() {
    return {
      addGoalInput: "new goal",
      goals: ["a", "b", "c"],
    };
  },
  methods: {
    addGoal() {
      if (this.addGoalInput == "") return;
      this.goals.push(this.addGoalInput);
      this.addGoalInput = "";
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
  },
});

app.mount("#user-goals");
