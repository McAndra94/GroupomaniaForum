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
      </div>
    </form>

    <p>
      Mot de passe oublié ?<router-link to="/">&emsp;Cliquez ici</router-link>
    </p>
    <hr />
    <p>
      Pas encore de compte ?<router-link to="/signup"
        >&emsp;Inscrivez-vous</router-link
      >
    </p>
  </div>
</template>

<script>
/* import { getFirestore, collection, addDoc } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../config/firebase";
const fireApp = initializeApp(firebaseConfig);
const db = getFirestore(fireApp); */
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
