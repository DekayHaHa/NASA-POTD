<template>
  <div class="day">
    <div v-if="error" class="error">
      <h3>{{error}}</h3>
    </div>
    <div v-else-if="isLoading" class="loading">
      <img src="../assests/NASALOGO.gif">
      <p>Loading...</p>
    </div>
    <div v-else>
      <div class="title-date">
        <p class="img-title">{{ title }}</p>
        <p>{{ date }}</p>
        <button v-if="!isFav" type="button" @click="handleClick(day)" class="fav-btn">Favorite</button>
        <button v-else type="button" @click="handleClick(day)" class="fav-btn">Unfavorite</button>
      </div>
      <div class="img-cap">
        <a v-if="media != 'image'" :href="url" class="video" target="_blank">
          <img src="../assests/NASALOGO.gif" alt="NASA Logo">
          <p>Click to view {{media}}</p>
        </a>
        <img v-else :src="url">
        <p class="cap">{{ explanation }}</p>
      </div>
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
        const { date, explanation, title, url, media_type } = response.data;
        // const daysInfo = { date, explanation, title, url, media: media_type };
        // use for saving fetched data to reduce API calls
        this.date = date;
        this.explanation = explanation;
        this.title = title;
        this.url = url;
        this.media = media_type;
        this.isLoading = false;
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
.day {
  color: #fffff4;
}
.title-date {
  padding: 10px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.img-cap > img {
  width: 100%;
}
.img-cap {
  padding: 0px 60px 0px 60px;
  margin: auto;
}

.fav-btn {
  width: 100px;
  height: 25px;
  border-radius: 25px;
  font-size: 1em;
  border: 2px solid #fffff4;
  color: #fffff4;
  background: none;
}
.loading,
.error {
  padding-top: 10%;
  text-align: center;
}

a {
  color: #fffff4;
  text-decoration: none;
}

.video {
  text-align: center;
}

div > a > img {
  width: 100%;
}
</style>
