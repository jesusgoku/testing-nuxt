<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      left
      app>
      <v-list dense>
        <v-list-tile v-for="item in mainNavItems" :key="item.path" @click="$router.push(item.path)">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.label }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>CEFO</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-container fluid>
        <nuxt/>
      </v-container>
    </v-content>

    <v-footer app></v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      mainNavItems: [
        { path: '/', label: 'Home', icon: 'home' },
        { path: '/programs', label: 'Programs', icon: 'home' },
        { path: '/news', label: 'News', icon: 'home' },
      ],
    };
  },
}
</script>


<style>
body {
  font-family: 'Roboto', sans-serif;
}
</style>
