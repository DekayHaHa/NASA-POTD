<template>
  <div>
    <h3>{{ title }}</h3>
    <p>{{ date }}</p>
    <img :src="url">
    <p>{{ explanation }}</p>
  </div>
</template>

<script>
import axios from "axios";
import { key } from "../../key";
export default {
  name: "Day",
  mounted() {
    const { year, month, day } = this.$route.params;
    axios({
      method: "GET",
      url: `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${year}-${month}-${day}`
    }).then(
      response => {
        const { date, explanation, title, url, media_type } = response.data;
        this.date = date;
        this.explanation = explanation;
        this.title = title;
        this.url = url;
        this.media = media_type;
      },
      error => {
        console.error(error);
      }
    );
  },
  data() {
    return { date: "", explanation: "", title: "", url: "", media: "" };
  },
  methods: {}
};
</script>

<style>
</style>
