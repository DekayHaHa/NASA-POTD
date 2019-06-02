<template>
  <section>
    <h2>I'm the calendar</h2>
    <div v-for="day in days" :key="day.date">
      <div v-on:click="(day) => renderDay(day)">
        <h3>{{day.date}}</h3>
        <img v-if="day.type === 'image'" :src="day.url" width="250px">
        <a v-else :href="day.url">Link to {{day.type}}</a>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { key } from "../../key";
export default {
  name: "calendar",
  data() {
    return {
      days: []
    };
  },
  mounted() {
    const today = new Date();
    const day = today.getUTCDate();
    const year = today.getUTCFullYear();
    const month = today.getUTCMonth() + 1;
    if (this.days.length === 0) {
      for (let i = day; i > 0; i--) {
        this.getPicInfo(year, month, i);
      }
    }
  },
  methods: {
    renderDay(day) {
      console.log(day);
      this.$router.push({ name: "day", params: { id: day.date } });
    },
    getPicInfo(year, month, day) {
      axios({
        method: "GET",
        url: `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${year}-${month}-${day}`
      }).then(
        response => {
          const { date, explanation, title, url, media_type } = response.data;
          const dayToAdd = {
            date,
            explanation,
            title,
            url,
            type: media_type
          };
          this.days.push(dayToAdd);
        },
        error => {
          console.error(error);
        }
      );
    }
  }
};
</script>

<style>
</style>

