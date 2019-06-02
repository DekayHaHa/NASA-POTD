<template>
  <div>
    <h3>{{date}}</h3>
    <img
      src="https://images.homedepot-static.com/productImages/879b164e-75d0-44e5-a37d-21533a967081/svn/renogy-solar-panels-rng-300d-64_1000.jpg"
    >
  </div>
</template>

<script>
export default {
  name: "Day",
  props: {
    date: String,
    img: String
  },
  mounted() {
    const today = new Date();
    const day = today.getUTCDate();
    const year = today.getUTCFullYear();
    const month = today.getUTCMonth() + 1;
  }
};
</script>

<style>
</style>
