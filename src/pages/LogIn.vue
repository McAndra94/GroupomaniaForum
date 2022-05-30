<template>
  <div class="container my-3 text-center">
    <form action="/login" method="post">
      <div class="container">
        <h1 class="h3">Connexion à mon espace</h1>
        <div class="form-group">
          <label for="username">Pseudo</label>
          <br />
          <input
            size="35"
            type="text"
            placeholder="Entrez votre identifiant"
            name="username"
            class="form-control"
            required
          />
        </div>

        <br />
        <div class="form-group">
          <label for="password">Mot de passe</label>
          <br />
          <input
            size="35"
            type="password"
            placeholder="Entrez votre mot de passe"
            name="password"
            class="form-control"
            required
          />
        </div>

        <br />
        <button
          type="submit"
          class="btn btn-primary"
          @click="onLogin"
          id="submit"
        >
          Valider
        </button>

        <br />
        <p>
          Mot de passe oublié ?<router-link to="/">Cliquez ici</router-link>
        </p>
        <p>
          Pas encore de compte ?<router-link to="/signup"
            >Inscrivez-vous</router-link
          >
        </p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    /*  onLogin() {
        method: "password",
        username: this.username,
        password: this.password,
      }, */
  },
};
</script>
