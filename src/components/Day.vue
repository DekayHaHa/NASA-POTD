<template>
  <div>
    <div v-if="error" class="error">
      <h3>{{error}}</h3>
    </div>
    <div v-else-if="isLoading" class="loading">
      <img src="../assests/NASALOGO.gif">
      <p>Loading...</p>
    </div>
    <div v-else>
      <h3>{{ title }}</h3>
      <p>{{ date }}</p>
      <button v-if="!isFav" type="button" @click="handleClick(day)">Favorite</button>
      <button v-else type="button" @click="handleClick(day)">Unfavorite</button>
      <img :src="url">
      <p>{{ explanation }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { key } from "../../key";
export default {
  name: "Day",
  props: {
    handleFav: Function,
    day: Number,
    month: Number,
    year: Number,
    favorite: Boolean
  },
  mounted() {
    this.isFav = this.favorite;
    const { year, month, day } = this;
    this.isLoading = true;
    axios({
      method: "GET",
      url: `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${year}-${month}-${day}`
    }).then(
      response => {
        this.isLoading = false;
        const { date, explanation, title, url, media_type } = response.data;
        // const daysInfo = { date, explanation, title, url, media: media_type };
        // use for saving fetched data to reduce API calls
        this.date = date;
        this.explanation = explanation;
        this.title = title;
        this.url = url;
        this.media = media_type;
      },
      error => {
        this.error = error;
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
      isLoading: false,
      error: "",
      isFav: false
    };
  },
  methods: {
    handleClick: function(day) {
      this.isFav = !this.isFav;
      this.handleFav(day);
    }
  }
};
</script>

<style scoped>
.loading,
.error {
  padding-top: 10%;
  text-align: center;
}
</style>
