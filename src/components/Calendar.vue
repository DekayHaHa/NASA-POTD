<template>
  <section>
    <h2>I'm the calendar</h2>
    <div v-for="date in days" :key="date.day">
      <div v-on:click="() => renderDay(date)">
        <h3>{{date.day}}</h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "calendar",
  data() {
    return {
      days: []
    };
  },
  mounted() {
    const today = new Date();
    const day = today.getDate();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    for (let i = 1; i <= day; i++) {
      this.days.push({ year, month, day: i });
    }
  },
  methods: {
    renderDay({ year, month, day }) {
      const params = { id: day, day, month, year };
      this.$router.push({ name: "day", params });
    }
  }
};
</script>

<style>
</style>

