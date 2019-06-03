<template>
  <div id="app">
    <div>
      <router-link to="/">
        <h1>NASA PICTURES BY DAY</h1>
      </router-link>
      <router-link to="/favorites">Vue Favs</router-link>
    </div>
    <router-view
      v-bind:handleFav="handleFav"
      v-bind:favorites="favorites"
      v-bind:currentMonth="currentMonth"
    />
  </div>
</template>

 <script>
export default {
  mounted() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const months = [
      "Januaray",
      "Febuaray",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    this.currentMonth = months.find((mnth, ind) => ind == month - 1);
    const savedFavs = JSON.parse(localStorage.getItem("favoriteDates"));
    if (savedFavs && today.getMonth() + 1 == savedFavs.monthSaved) {
      return (this.favorites = savedFavs);
    } else if (savedFavs && savedFavs.monthSaved != this.currentMonth) {
      localStorage.removeItem("favoriteDates");
    }
  },
  data() {
    return {
      favorites: {
        monthSaved: "",
        days: []
      },
      currentMonth: ""
    };
  },
  methods: {
    handleFav: function(day) {
      this.favorites.monthSaved = this.currentMonth;
      if (!this.favorites.days.includes(day)) {
        this.favorites.days.push(day);
      } else {
        this.favorites.days = this.favorites.days.filter(fav => fav != day);
      }
      localStorage.setItem("favoriteDates", JSON.stringify(this.favorites));
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
