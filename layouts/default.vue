<template>
  <v-app light style="background-color: #e4e5e5">
    <Nav />
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
export default {
  components: { Nav },

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
