<template>
  <Nav />
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
export default {
  name: "App",
  components: { Nav },
  data: () => ({
    date: "",
  }),
  methods: {
    showDate: function () {
      return new Date().toLocaleDateString();
    },
  },
  mounted: function () {
    this.date = this.showDate();
  },
};
</script>

<style>
body {
  background: url(./assets/images/icon-bg.png);
  background-position: center;
  background-size: cover;
}
</style>
