<template>
  <v-app light style="background-color: #e4e5e5">
      <Nav v-if="$store.getters.getNavHomeState"/>
      <NavLogin v-if="$store.getters.getNavLoginState"/>
    <v-main>
      <!-- <v-overlay value="false">
        <v-progress-circular
          indeterminate
          size="64"
        ></v-progress-circular>
      </v-overlay> -->
      <nuxt />
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Nav from '~/components/Nav.vue'
import NavLogin from '~/components/NavLogin.vue'

export default {
  components: { Nav, NavLogin },

  data() {
    return {
      
      user: {
        initials: 'ploylada',
        fullName: 'Ploylada',
        email: 'priewmx1027@gmail.com',
      },
    }
  },
  mounted() {
    this.$store.dispatch({type: "defaultHome" })
    console.log(this.$store.getters.getNavHomeState)
    console.log(this.$store.getters.getNavLoginState)
  }
}
</script>
