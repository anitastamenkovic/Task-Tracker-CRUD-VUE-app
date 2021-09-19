<template>
  <div class="container">
    <Header
      @toggle-add-task="toggleAddTask"
      title="Task Tracker"
      :showAddTask="showAddTask"
    />
    <router-view :showAddTask="showAddTask"></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      showAddTask: false,
    };
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
  background-color: #17191b;
  color: #343a40;
}
.container {
  max-width: 500px;
  margin: 100px auto;
  overflow: auto;
  min-height: 300px;
  background-color: #f8f9fa;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0, 0.5);
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #099268;
  color: #f8f9fa;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
a {
  display: inline-block;
  color: #f8f9fa;
  background-color: #099268;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 10px 0;
  text-decoration: none;
}
</style>
