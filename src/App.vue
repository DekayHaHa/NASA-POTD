<template>
  <div id="app">
    <div>
      <router-link to="/">
        <h1>NASA PICTURES BY DAY</h1>
      </router-link>
    </div>
    <router-view v-bind:saveFav="saveFav" v-bind:favorites="favorites"/>
  </div>
</template>

 <script>
export default {
  mounted() {
    const oldFavs = JSON.parse(localStorage.getItem("favoriteDates"));
    if (oldFavs) {
      this.favorites = oldFavs;
    }
  },
  data() {
    return {
      favorites: []
    };
  },
  methods: {
    saveFav: function(day) {
      if (!this.favorites.includes(day)) {
        this.favorites.push(day);
        localStorage.setItem("favoriteDates", JSON.stringify(this.favorites));
      }
    }
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
