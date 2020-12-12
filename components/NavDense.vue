<template>
  <div>
    <v-app-bar
      prominent
      fixed
      app
      dark
      class="header-nav"
      height="280px"
      shrink-on-scroll
      fade-img-on-scroll
      src="https://firebasestorage.googleapis.com/v0/b/khaokrua-e8479.appspot.com/o/cover_khaokrua.jpg?alt=media&token=7ba8172c-25e6-4585-8dde-9b108eb98054"
    >
      <div class="header-nav-icon">
        <div class="nav-nav-icon">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        </div>
      </div>

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
              src="../assets/KhaoKrua_logo.png"
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

        <li class="btn-fav-recipe">
          <div @click="login">
            <v-icon left>face</v-icon>
            <span>เข้าสู่ระบบ</span>
          </div>
        </li>

        <v-row justify="center">
          <v-dialog v-model="dialog" persistent max-width="600px">
            <v-card>
              <v-card-title>
                <span>เข้าสู่ระบบ</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field label="Email*" required></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="Password*"
                        type="password"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" style="text-lign: right">
                      <span>ลืมรหัสผ่าน?</span>
                    </v-col>
                  </v-row>
                  <v-col cols="12">
                    <v-btn color="success" rounded width="100%">เข้าสู่ระบบ</v-btn>
                  </v-col>
                  <v-col cols="12">
                    <span>หรือเข้าสู่ระบบด้วย</span>
                  </v-col>
                </v-container>
              </v-card-text>
              <v-card-actions>
                
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">
                  Close
                </v-btn>
                <v-btn color="blue darken-1" text @click="dialog = false">
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>

        <!-- Profile Menu -->

        <li class="btn-profile" style="display: none">
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
                      <span>เพิ่มสูตรอาหาร</span>
                    </v-btn>

                    <v-divider class="my-3"></v-divider>

                    <v-row justify="center">
                      <v-dialog v-model="dialog" persistent max-width="600px">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn color="primary" dark v-bind="attrs" v-on="on">
                            Open Dialog
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="headline">User Profile</span>
                          </v-card-title>
                          <v-card-text>
                            <v-container>
                              <v-row>
                                <v-col cols="12" sm="6" md="4">
                                  <v-text-field
                                    label="Legal first name*"
                                    required
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                  <v-text-field
                                    label="Legal middle name"
                                    hint="example of helper text only on focus"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                  <v-text-field
                                    label="Legal last name*"
                                    hint="example of persistent helper text"
                                    persistent-hint
                                    required
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-text-field
                                    label="Email*"
                                    required
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-text-field
                                    label="Password*"
                                    type="password"
                                    required
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                  <v-select
                                    :items="['0-17', '18-29', '30-54', '54+']"
                                    label="Age*"
                                    required
                                  ></v-select>
                                </v-col>
                                <v-col cols="12" sm="6">
                                  <v-autocomplete
                                    :items="[
                                      'Skiing',
                                      'Ice hockey',
                                      'Soccer',
                                      'Basketball',
                                      'Hockey',
                                      'Reading',
                                      'Writing',
                                      'Coding',
                                      'Basejump',
                                    ]"
                                    label="Interests"
                                    multiple
                                  ></v-autocomplete>
                                </v-col>
                              </v-row>
                            </v-container>
                            <small>*indicates required field</small>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="blue darken-1"
                              text
                              @click="dialog = false"
                            >
                              Close
                            </v-btn>
                            <v-btn
                              color="blue darken-1"
                              text
                              @click="dialog = false"
                            >
                              Save
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-row>

                    <v-divider class="my-3"></v-divider>

                    <v-btn depressed rounded text href="#">
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

    <v-navigation-drawer v-model="drawer" absolute app temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> Application </v-list-item-title>
          <v-list-item-subtitle> subtext </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
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
    dialog: false,
  }),

  methods: {
    login() {
      this.dialog = true
    }
  }
}
</script>

<style lang="scss">
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

ul li{
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