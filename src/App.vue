<template>
  <div id="app">
    <div class="header">
      <router-link class="route title" to="/" exact>NASA PICTURES BY DAY</router-link>
      <router-link class="route favs-btn" to="/favorites" exact>Vue Favs</router-link>
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
    if (savedFavs && this.currentMonth == savedFavs.monthSaved) {
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
*,
*:before,
*:after {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
  background: #5c00bf;
  color: #1f0040;
}

.favorite-day {
  color: gold;
}

.title {
  font-size: 36px;
  font-weight: 900;
}

.favs-btn {
  font-size: 24px;
}

.route {
  margin: auto 0px;
  text-decoration: none;
  color: #1f0040;
}

.header {
  padding: 0px 60px;
  height: 100px;
  background: #7b00ff;
  display: flex;
  justify-content: space-between;
}

.router-link-exact-active {
  border-bottom: 2px solid #1f0040;
}

.headline {
  text-align: center;
}

h2 {
  font-weight: 400;
}

.favorites,
.calendar {
  color: #fffff4;
  padding: 0px 60px;
}

.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

h3 {
  margin: 35px 0px 0px 0px;
}

.box:hover {
  cursor: pointer;
}

.box {
  border: 2px solid #fffff4;
  border-radius: 25px;
  width: 150px;
  height: 150px;
  text-align: center;
  font-size: 60px;
}

.box.true {
  background: url("./assests/star-regular.svg") center / 150px 150px no-repeat;
}
</style>
