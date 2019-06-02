<template>
  <div>
    <h3>{{ $route.params.day.title }}</h3>
    <img :src="url">
  </div>
</template>

<script>
export default {
  name: "Day",
  props: {
    date: String,
    url: String,
    explanation: String,
    title: String,
    type: String
  },
  mounted() {}
};
</script>

<style>
</style>
