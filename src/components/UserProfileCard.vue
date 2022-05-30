<template>
  <div>
    <div class="profile-card">
      <p class="text-center"></p>

      <h1 class="title">{{ user.username }}</h1>

      <p class="text-lead">{{ user.name }}</p>
      <p class="text-justify">{{ user.postJob }}</p>

      <p class="text-justify">{{ user.description }}</p>
    </div>

    <div class="text-center">
      <hr />
      <router-link :to="{ name: 'ProfileEdit' }" class="btn-green btn-small">
        Edit Profile
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>
