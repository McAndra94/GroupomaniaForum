<template>
  <div class="container">
    <div class="push-top">
      <UserProfileCard v-if="!edit" :user="user" />
      <UserProfileCardEditor v-else :user="user" />
    </div>
  </div>
</template>

<script>
import UserProfileCard from "../components/UserProfileCard";
import UserProfileCardEditor from "../components/UserProfileCardEditor";
import { mapGetters } from "vuex";
export default {
  components: {
    UserProfileCard,
    UserProfileCardEditor,
  },
  props: {
    edit: { type: Boolean, default: false },
  },
  computed: {
    ...mapGetters({ user: "authUser" }),
  },
};
</script>
