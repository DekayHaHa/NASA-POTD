<template>
  <section>
    <h2>Pick a day for {{currentMonth}}</h2>
    <div v-for="date in dates" :key="date.day">
      <div v-on:click="() => renderDay(date)">
        <h3 v-if="favorites.days.includes(date.day)" class="favorite-day">{{date.day}}</h3>
        <h3 v-else>{{date.day}}</h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "calendar",
  props: {
    favorites: Object,
    currentMonth: String
  },
  data() {
    return {
      dates: []
    };
  },
  mounted() {
    const today = new Date();
    const day = today.getDate();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    for (let i = 1; i <= day; i++) {
      this.dates.push({ year, month, day: i });
    }
  },
  methods: {
    renderDay({ year, month, day }) {
      const favorite = this.favorites.days.includes(day) ? true : false;
      const params = { id: day, day, month, year, favorite };
      this.$router.push({ name: "day", params });
    }
  }
};
</script>

<style scoped>
</style>


