<template>
  <div id="app" class="container my-3 text-center">
    <div class="container">
      <form name="signUpForm" method="post" autocomplete="on">
        <h1 class="h3">Inscription</h1>
        <br />
        <div class="form-group">
          <label>Pseudo</label>
          <input
            size="35"
            type="text"
            v-model="form.username"
            name="username"
            placeholder="Entrez votre pseudo"
            title="L'identifiant doit contenir entre 4 et 8 caractères, des lettres et/ou des chiffres."
            class="form-control"
            required
          />
        </div>

        <br />
        <div class="form-group">
          <label for="name">Prénom NOM</label>
          <input
            size="35"
            type="text"
            v-model="form.name"
            name="name"
            placeholder="Entrez vos prénom et nom"
            title="Entrez vos prénom et nom"
            class="form-control"
            required
          />
        </div>

        <br />
        <div class="form-group">
          <label>Email</label>
          <input
            size="35"
            type="email"
            v-model="form.email"
            name="email"
            placeholder="Entrez votre adresse email"
            title="Veuillez saisir une adresse email valide"
            class="form-control"
            required
          />
        </div>
        <br />

        <div class="form-group">
          <label>Mot de passe</label>
          <input
            size="35"
            type="password"
            name="password"
            v-model="form.password"
            placeholder="Entrez votre mot de passe"
            title="Le mot de passe doit contenir entre 6 et 8 caractères, au moins une lettre et un chiffre."
            class="form-control"
            required
          />
        </div>

        <br />
        <div class="form-group">
          <label>Confirmer le mot de passe</label><br />
          <input
            size="35"
            type="password"
            v-model="form.passwordVerify"
            name="passwordVerify"
            placeholder="Confirmer votre mot de passe"
            class="form-control"
            required
          />
        </div>

        <br />
        <button @click="signUpForm" type="button" class="btn btn-primary">
          Valider
        </button>
      </form>

      <p>
        Vous avez déjà un compte ?
        <router-link to="/">Connectez-vous </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { getFirestore, collection, addDoc } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../config/firebase";
const fireApp = initializeApp(firebaseConfig);
const db = getFirestore(fireApp);
export default {
  data() {
    return {
      avatarPreview: null,
      form: {
        name: "",
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async signUpForm() {
      console.log("Verify");
      try {
        const docRef = await addDoc(collection(db, "users"), {
          name: this.form.name,
          username: this.form.username,
          email: this.form.email,
          password: this.form.password,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      //await this.
      this.$router.push("/");
    },
  },
  created() {
    this.$emit("ready");
  },
};
</script>
