<template>
  <div id="app">
    <Header msg="NASA PICTURE OF THE DAY"/>
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Calendar from "./components/Calendar.vue";
import axios from "axios";
import { key } from "../key";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
