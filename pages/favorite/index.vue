<template>
  <div class="fav-container">
    <v-row no-gutters class="md-6">
      <v-sheet color="white" height="150" class="sheet-fav-menu">
        <v-breadcrumbs
          :items="breadcrumbs"
          style="position: absolute; left: 0px; top: 0px"
          large
        >
          <template v-slot:item="{ item }">
            <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
              {{ item.text.toUpperCase() }}
            </v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>

        <h1 style="text-align: center; margin-top: 60px">เมนูโปรด</h1>

        <v-btn
          color="success"
          absolute
          outlined
          text
          style="right: 20px; top: 15px"
          @click="overlay = !overlay"
          ><span>แก้ไข</span></v-btn
        >
      </v-sheet>
    </v-row>

    <v-dialog v-model="dialog" class="popup-submit-delete" width="600px">
      <v-card class="card-popup" width="100%">
        <div style="text-align: center; padding: 20px">
          <span style="font-size: 24px; font-weight: bold">จะลบสูตรนี้ออกจากเมนูโปรดหรือไม่?</span>
        </div>

        <div class="div-action" style="display: block; width: 60%; margin: 0px auto; padding: 20px" >
          <v-btn color="success" class="submit">ยืนยัน</v-btn>
          <v-btn color="warning" class="cancel">ยกเลิก</v-btn>
        </div>
      </v-card>
    </v-dialog>

    <!-- Card menu -->

    <div class="menu-card-box-fav">
      <v-layout row wrap class="menu-card-cober-each-card">
        <v-card
          class="mx-auto"
          max-width="400"
          style="margin: 15px 15px; padding: 30px 30px; position: relative"
          id="card-add-recipe"
        >
          <v-btn
            x-large
            elevation="5"
            icon
            raised
            class="icon-in-add-fav"
            href="/search"
          >
            <v-icon>add</v-icon>
          </v-btn>
          <v-card-title
            ><span class="text-in-add-fav">ค้นหาสูตรที่ใช่</span>
          </v-card-title>
          <v-card-action>
            <span class="footer-in-add-fav">
              <h5>----- หรือ -----</h5>
              <a href="/add">เพื่มสูตรของคุณเอง!</a>
            </span>
          </v-card-action>
        </v-card>

        <!-- Main favorite card -->

        <v-flex
          xs12
          sm6
          md4
          lg3
          v-for="recipe in menus"
          :key="recipe.Name"
          class="menu-card-each-card"
        >
          <!-- Card -->

          <v-card
            :loading="loading"
            class="mx-auto"
            max-width="400"
            id="card-recipe"
          >
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <!-- Img for recipe card -->

            <div class="card-recipe-zoom" style="overflow: hidden">
              <v-img
                class="card-recipe-img"
                height="200"
                :src="recipe.src"
              ></v-img>
            </div>

            <div class="btn-fav-recipe">
              <div>
                <v-icon class="btn-fav-recipe-icon"
                  >favorite_border</v-icon
                >
              </div>
            </div>

            <v-card-title style="font-size: 28px">{{
              recipe.Name
            }}</v-card-title>

            <v-card-text class="card-data">
              <div class="box-card-data">
                <div class="card-data-cook-time">
                  <v-icon left>schedule</v-icon>
                  <span style="vertical-align: middle"
                    >{{ recipe.time }} ชั่วโมง</span
                  >
                </div>
                <div class="card-data-cook-time" style="margin-left: 15px">
                  <v-icon left>group</v-icon>
                  <span style="vertical-align: middle">สำหรับ 2 ที่</span>
                </div>
              </div>

              <v-row align="center" class="mx-0">
                <v-rating
                  :value="recipe.rate"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ml-4">{{ recipe.rate }} (413)</div>
              </v-row>
            </v-card-text>

            <v-card-actions>
              <v-btn
                block
                dark
                text
                @click="reserve"
                style="background-color: #ff7043"
              >
                <span>ทำอาหาร</span>
              </v-btn>
            </v-card-actions>

            <v-overlay :absolute="absolute" :value="overlay">
              <v-btn color="warning" @click="overlay = false">
                <span @click="AddDialog">ลบออกจากเมนูโปรด</span>
              </v-btn>
            </v-overlay>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
// import Pagination from "./Pagination.vue";
// import Searchrecipe from "./SearchRecipe.vue";
import popup from '~/components/Popup/popup.vue'

export default {

  middleware: 'auth',
  name: 'Favorite',

  components: { popup },

  pagination() {
    return {
      page: 1,
    }
  },

  data: () => ({
    loading: false,
    selection: 1,
    absolute: true,
    overlay: false,
    dialog: false,
    menus: [
      {
        Name: 'ต้มยำกุ้ง',
        Author: 'KhaoKrua',
        time: '1',
        rate: 4.7,
        src:
          'https://d12man5gwydfvl.cloudfront.net/wp-content/uploads/2019/06/shutterstock_430308484.jpg',
      },
      {
        Name: 'ข้าวผัด',
        Author: 'KhaoKrua',
        time: '1',
        rate: 4.7,
        src:
          'https://i.pinimg.com/originals/8b/52/0c/8b520ccac4a4372d62d33770ece3c529.jpg',
      },
      {
        Name: 'กะเพราทะเล',
        Author: 'KhaoKrua',
        time: '1',
        rate: 4.7,
        src: 'https://f.ptcdn.info/206/064/000/ps7ec58xwloZzLEw1eDJ-o.jpg',
      },
      {
        Name: 'พิซซ่า',
        Author: 'KhaoKrua',
        time: '1',
        rate: 4.7,
        src:
          'https://caffedolcemissoula.com/wp-content/uploads/2019/09/Pizza.jpg',
      },
    ],
    tags: [
      { tagName: 'Drink' },
      { tagName: 'Main Disc' },
      { tagName: 'Burger' },
      { tagName: 'Noodle' },
      { tagName: 'Fruit' },
      { tagName: 'Cheese' },
      { tagName: 'Cream' },
      { tagName: 'Soft Drink' },
      { tagName: 'Steak' },
      { tagName: 'Milk' },
      { tagName: 'Ice cream' },
    ],
    breadcrumbs: [
      {
        text: 'หน้าแรก',
        disabled: false,
        href: '/',
      },
      {
        text: 'เมนูโปรด',
        disabled: true,
        href: 'favorite',
      },
    ],
  }),
  methods: {
    reserve() {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
    AddDialog() {
      this.dialog = true
    },
  },
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@200&display=swap');

* {
  list-style: none;
  outline: none;
  font-family: 'Kanit', sans-serif;
  box-sizing: border-box;
}

.fav-container {
  margin: 5px auto;
  width: 90%;
  position: relative;
}

// .sheet-fav-menu {
//   border-radius: 10px 10px 0px 0px;
//   padding: 50px;
//   margin-top: 0 auto;
//   width: 100%;
// }

.sheet-fav-menu {
  border-radius: 10px 10px 0px 0px;
  width: 100%;
  padding: 20px;
}

.icon-in-add-fav {
  position: absolute;
  text-align: center;
  width: 100%;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  top: 40%;
}

.text-in-add-fav {
  position: absolute;
  text-align: center;
  width: 100%;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
  font-weight: bold;
  margin: 20px auto;
}

.footer-in-add-fav {
  position: absolute;
  text-align: center;
  width: 100%;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  bottom: 0;
  font-weight: bold;
  margin: 20px auto;
}

.footer-in-add-fav a {
  color: rgb(0, 0, 0);
  text-decoration: none;
  transition: 0.25s ease-in-out;
  &:hover {
    font-size: 20px;
  }
}

.menu-card-cober-each-card .menu-card-each-card {
  padding: 15px 15px 15px 15px;
}

.menu-card-each-card .btn-fav-recipe .btn-fav-recipe-icon {
  position: absolute;
  left: 80%;
  bottom: 43%;
  background: red;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  padding: 15px;
  border-radius: 50%;
  transition: 0.3s ease-in-out;
  &:hover {
    background: red;
    color: white;
    transform: scale(1.1);
  }
}

.menu-card-each-card .btn-fav-recipe .btn-fav-recipe-icon:hover {
  transform: scale(1.1);
}

.header-menu-card-box {
  background-color: white;
  height: 150px;
  margin-top: 50px;
  padding: 20px;
  border-radius: 10px 10px 0px 0px;
  width: 30%;
}

.header-menu-card-box .header-text {
  margin: 30px auto;
  background-color: white;
  text-align: center;
}

#card-add-recipe {
  width: 300px;
}

#card-recipe {
  transition: 0.25s ease;
  overflow: hidden;
  // cursor: pointer;
  &:hover {
    transform: scale(1.05);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
  }
}

#card-recipe .card-recipe-img {
  transition: 0.25s ease;
  &:hover .card-recipe-img {
    transform: scale(1.2);
  }
}

#card-recipe .menu-card-box-fav {
  background-color: white;
  margin-left: 20px;
  margin-right: 20px;
  padding: 20px;
}

.menu-card-box-fav {
  background-color: white;
  padding: 20px;
  border-radius: 0px 0px 10px 10px;
}

.card-data .box-card-data {
  display: flex;
  justify-content: flex-start;
  margin: 10px auto;
}

@media only screen and (max-width: 600px) {
  .sheet-fav-menu {
    width: 100%;
  }
  #card-add-recipe {
    height: 300px;
  }
}

@media only screen and (max-width: 1264px) {
  .sheet-fav-menu {
    width: 100%;
  }
  #card-add-recipe {
    width: 258.52px;
  }
}

@media only screen and (max-width: 768px) {
  #card-add-recipe {
    width: 300px;
  }
}

.popup-submit-delete {
  // width: 500px;
}
</style>


