<template>
  <section class="calendar">
    <h2 class="headline">Days for {{currentMonth}}</h2>
    <div class="container">
      <div
        v-for="date in dates"
        :key="date.day"
        v-on:click="() => renderDay(date)"
        :class="checkFav(favorites, date)"
      >
        <h3>{{date.day}}</h3>
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
    checkFav(favorites, date) {
      return `box ${favorites.days.includes(date.day)}`;
    },
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


