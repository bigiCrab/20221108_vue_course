const app = Vue.createApp({
  data() {
    return {
      taskInput: "",
      tasks: [],
      showTasks:true
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.taskInput);
      this.taskInput = "";
    },
  },
});
app.mount("#assignment");
