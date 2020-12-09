<template>
  <v-app light style="background-color: #e4e5e5">
      <Nav v-if="false" />
      <NavDense v-if="false" />
      <NavLogin v-if="true"/>
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
import NavDense from '~/components/NavDense.vue'
import NavLogin from '~/components/NavLogin.vue'

export default {
  components: { Nav, NavDense, NavLogin },

  data() {
    return {
      image: [{ logoPath: '' }],
      drawer: false,
      items: [
        { icon: 'dashboard', title: 'แดชบอร์ด', route: '/dashboard' },
        { icon: 'folder', title: 'โปรเจค', route: '/project' },
      ],
      user: {
        initials: 'ploylada',
        fullName: 'Ploylada',
        email: 'priewmx1027@gmail.com',
      },
    }
  },
}
</script>
