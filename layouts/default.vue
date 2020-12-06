<template>
  <v-app light style="background-color: #e4e5e5">
    <v-nav>
      <Nav v-if="false" />
      <NavDense v-else />
    </v-nav>
    <v-main>
      <nuxt />
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Nav from '~/components/Nav.vue'
import NavDense from '~/components/NavDense.vue'
export default {
  components: { Nav, NavDense },

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
