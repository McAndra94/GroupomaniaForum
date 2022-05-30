<template>
  <h1>Welcome to the Forum</h1>
  <ForumList :forums="forums" />
</template>

<script>
import ForumList from "../components/ForumList.vue";

export default {
  components: {
    ForumList,
  },
  computed: {
    forums() {
      return this.$store.state.forums;
    },
  },
  beforeCreate() {
    console.log("before create", this.forums);
  },
  created() {
    console.log("created", this.forums);
  },
  beforeMount() {
    console.log("beforeMount", this.forums);
  },
  mounted() {
    console.log("mounted", this.forums, this.$el);
  },
  beforeUnmount() {
    console.log("beforeUnmount", this.forums, this.$el);
  },
  unmounted() {
    console.log("unmounted", this.forums);
  },
};
</script>

<style lang="">
/* scoped : limited to this page */
</style>
