<template>
  <div>
    <v-app-bar
      dense
      app
      dark
      absolute
      class="header-nav"
    >
      <!-- Logo KhaoKrua -->

      <div class="header-nav-logo" style="display: none">
        <div class="nav-logo">
          <v-img
            alt="khaokrua Logo"
            class="shrink mr-2"
            contain
            src="https://firebasestorage.googleapis.com/v0/b/khaokrua-e8479.appspot.com/o/KhaoKrua_logo.png?alt=media&token=ea7ca56b-be32-47da-adb5-e956ab039f73"
            transition="scale-transition"
            id="nav-logo-khakrua"
          />
        </div>
      </div>

      <div class="header-nav-logo">
        <nuxt-link to="/">
          <div class="nav-logo">
            <v-img
              alt="khaokrua Logo"
              class="shrink mr-2"
              contain
              src="https://firebasestorage.googleapis.com/v0/b/khaokrua-e8479.appspot.com/o/KhaoKrua_logo.png?alt=media&token=ea7ca56b-be32-47da-adb5-e956ab039f73"
              transition="scale-transition"
              width="360"
            />
          </div>
        </nuxt-link>
      </div>

      <!-- Seach Recipe https://i.pinimg.com/originals/13/05/4e/13054e16f995defb42e543ccc0e32f58.jpg-->

      <div class="search-field" style="display: none">
        <div class="search-text-field-bar">
          <v-text-field
            light
            style="width: 600px"
            value="Beef Wellington"
            label="ทำอะไรกินดีน้า"
            solo
          ></v-text-field>
        </div>
        <div class="btn-search-icon">
          <v-btn
            large
            height="50px"
            color="red darken-1"
            style="margin: 0 auto; left: 0px; bottom: 8px"
            class="btn-search"
          >
            <v-icon large alt="searchRecipt">search</v-icon>
          </v-btn>
        </div>
      </div>
      <ul class="nav-menu">
        <li class="btn-add-recipe">
          <nuxt-link to="/add">
            <v-icon>add</v-icon>
            <span>เพิ่มสูตรอาหาร</span>
          </nuxt-link>
        </li>

        <li class="btn-fav-recipe">
          <nuxt-link to="/favorite">
            <v-icon left>favorite</v-icon>
            <span>เมนูโปรด</span>
          </nuxt-link>
        </li>

        <!-- Login Menu -->

        <li class="btn-profile">
          <v-menu bottom min-width="200px" rounded offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                x-large
                v-bind="attrs"
                v-on="on"
                max-width="32px"
                max-height="32px"
              >
                <v-avatar>
                  <img
                    src="../assets/Profile/miew.jpg"
                    alt="miew"
                    style="max-width: 32px; max-height: 32px"
                  />
                </v-avatar>
              </v-btn>
            </template>
            <v-card>
              <v-list-item-content>
                <div class="mx-auto text-center">
                  <!-- Profile button -->
                  <v-btn x-large icon>
                    <v-avatar>
                      <img src="../assets/Profile/miew.jpg" alt="nong" />
                    </v-avatar>
                  </v-btn>
                  <div class="prfile-title" style="margin: 10px">
                    <h4 class="profile-title-name">{{ user.fullName }}</h4>
                    <p class="caption mt-1" id="profile-title-email">
                      {{ user.email }}
                    </p>
                  </div>

                  <div class="profile-items">
                    <v-divider class="my-3"></v-divider>
                    <v-btn depressed rounded text href="#">
                      <v-icon left>account_circle</v-icon>
                      <span>แก้ไขโปรไฟล์</span>
                    </v-btn>

                    <v-divider class="my-3"></v-divider>

                    <v-btn depressed rounded text href="/add">
                      <v-icon left>add</v-icon>
                      <span>สูตรอาหารของฉัน</span>
                    </v-btn>

                    <v-divider class="my-3"></v-divider>

                    <v-btn depressed rounded text href="/add">
                      <v-icon left>add</v-icon>
                      <span>เพิ่มสูตรอาหาร</span>
                    </v-btn>

                    <v-divider class="my-3"></v-divider>

                    <v-btn depressed rounded text @click="handleLogoutClicked">
                      <v-icon left>login</v-icon>
                      <span>ออกจากระบบ</span>
                    </v-btn>
                  </div>
                </div>
              </v-list-item-content>
            </v-card>
          </v-menu>
        </li>
      </ul>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    image: [{ logoPath: '' }],
    drawer: false,
    user: {
      initials: 'ploylada',
      fullName: 'Ploylada',
      email: 'priewmx1027@gmail.com',
    },
    dialog: false,
  }),

  methods: {
    login() {
      this.dialog = true
    },
    handleLogoutClicked(){
      $nuxt.$auth.logout()
    }
  },
}
</script>

<style lang="scss" scoped>
.header-nav {
  overflow: hidden;
}

.header-nav-logo {
  display: flex;
  position: absolute;
  justify-content: center;
  width: 30%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#nav-logo-khakrua {
  width: 360px;
}

@media only screen and (max-width: 600px) {
  #nav-logo-khakrua {
    width: 250px;
  }
}

.header-nav-logo .nav-logo {
  margin: 50px;
}

.header-nav .search-field {
  display: flex;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgb(0, 0, 0, 0.1);
  max-width: 1000px;
  height: 80px;
  width: 47.5%;
  padding: 15px;
  justify-content: space-between;
  border-radius: 8px;
}

@media only screen and (max-width: 1024px) {
  .header-nav .search-field {
    display: flex;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgb(0, 0, 0, 0.1);
    max-width: 1000px;
    height: 80px;
    width: 70%;
    padding: 15px;
    justify-content: space-between;
    border-radius: 8px;
  }
}

@media only screen and (max-width: 768px) {
  .header-nav .search-field {
    display: flex;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgb(0, 0, 0, 0.1);
    max-width: 1000px;
    height: 80px;
    width: 94%;
    padding: 15px;
    justify-content: space-between;
    border-radius: 8px;
  }
}

.search-field .search .btn-search-icon {
  position: absolute;
}

.header-nav .nav-menu {
  float: right;
  margin: 0 auto;
  margin-right: 0;
  /* background-color: yellow; */
}

.header-nav ul li {
  margin: 3px 5px;
  display: inline-block;
  /* background-color: red; */
  & a {
    text-decoration: none;
  }
}

span {
  vertical-align: middle;
}

// ul li a {
//   text-decoration: none;
// }

ul li {
  cursor: pointer;
}

li a span {
  font-size: 16px;
  color: rgb(255, 255, 255);
}

li div span {
  font-size: 16px;
  color: rgb(255, 255, 255);
}

.header-nav-menu .nav-menu .btn-add-recipe {
  /* background-color: blue; */
  height: 15%;
}

.header-nav-menu .nav-menu .btn-fav-recipe {
  /* background-color: blue; */
  height: 15%;
}

.btn-profile {
  display: block;
  margin: 0;
  /* background-color: black; */
}
</style>