<template>
  <section>
    <h2>Favorites for {{currentMonth}}</h2>
    <div v-for="fav in favorites.days" :key="fav">
      <div v-on:click="() => renderDay(fav)">
        <h3 class="favorite-day">{{fav}}</h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "favorites",
  props: {
    favorites: Object,
    currentMonth: String
  },
  methods: {
    renderDay(day) {
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1;
      const favorite = this.favorites.days.includes(day) ? true : false;
      const params = { id: day, day, month, year, favorite };
      this.$router.push({ name: "day", params });
    }
  }
};
</script>

<style>
</style>


