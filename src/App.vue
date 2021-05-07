<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h2 class="secondary--text">網頁標籤擷取</h2>
      </div>

      <v-spacer></v-spacer>
      <v-btn to="/" text class="secondary--text mr-2">
        <h3 class="mr-2">查詢頁面</h3>
        <v-icon>mdi-account-group</v-icon>
      </v-btn>
      <v-btn to="/about" text class="secondary--text">
        <h3 class="mr-2">組員介紹</h3>
        <v-icon>mdi-account-group</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="background">
      <router-view />
    </v-main>
    <v-footer>
      <v-spacer />
      <div>&copy;2021</div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
<style>
.background {
  background-color: #ffe6e8;
}
</style>
