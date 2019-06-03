<template>
  <div>
    <h3>{{ title }}</h3>
    <p>{{ date }}</p>
    <button type="button" @click="saveFav({day, month, year})">Favorite</button>
    <img :src="url">
    <p>{{ explanation }}</p>
  </div>
</template>

<script>
import axios from "axios";
import { key } from "../../key";
export default {
  name: "Day",
  props: {
    saveFav: Function,
    day: Number,
    month: Number,
    year: Number
  },
  mounted() {
    const { year, month, day } = this;
    axios({
      method: "GET",
      url: `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${year}-${month}-${day}`
    }).then(
      response => {
        const { date, explanation, title, url, media_type } = response.data;
        // const daysInfo = { date, explanation, title, url, media: media_type };
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
    return {
      date: "",
      explanation: "",
      title: "",
      url: "",
      media: "",
      value: "I am the DAY"
    };
  },
  methods: {
    addToFavorites() {}
  }
};
</script>

<style>
</style>
