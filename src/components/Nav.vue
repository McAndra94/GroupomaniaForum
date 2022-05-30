<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
      <a href="/" class="navbar-left"
        ><img
          src="../assets/images/icon-left-font-monochrome-white-s.png"
          height="100"
          width="300"
          alt="logo de Groupomania"
        />
      </a>
      <p class="text-white">Réseau social interne pour pour les employés.</p>
      <br />
      <p class="text-white">{{ date }}</p>

      <form class="form-inline">
        <input
          type="search"
          class="form-control mr-3 mb-2 mb-sm-0"
          placeholder="Rechercher..."
          aria-label="Rechercher"
        />
        <button type="submit" class="btn btn-primary">Rechercher</button>
      </form>
    </div>

    <div class="navbar navbar-dark bg-light">
      <div class="container">
        <router-link to="./" class="navbar-right h4 text-primary"
          >Discussions</router-link
        >
        <span v-if="authUser">
          <router-link :to="{ name: 'Profile' }" class="navbar-right h4 text-primary"
            >{{ authUser.name }}
          </router-link>
          <br />
        </span>
        <router-link to="/login" class="navbar-right h4 text-primary"
          >Connexion</router-link
        >

        <router-link to="/" class="navbar-right h4 text-primary" @click="logOut"
          >Déconnexion
        </router-link>

        <router-link to="/signup" class="navbar-right h4 text-primary"
          >Inscription</router-link
        >
      </div>
    </div>
  </nav>
  <br />
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Nav",
  computed: {
    ...mapGetters(["authUser"]),
  },
  methods: {
    logOut() {
      localStorage.clear();
      location.replace(location.origin);
    },
  },
};
</script>

<style lang="scss"></style>
