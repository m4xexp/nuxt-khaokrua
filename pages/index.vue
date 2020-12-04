<template>
  <div class="home-container">
    <v-row
      no-gutters
      class="md-6"
      style="width: 97%; margin-left: 20px; margin-top: 50px"
    >
      <v-col>
        <v-sheet
          color="white"
          height="230"
          width="500"
          style="
            border-radius: 10px 10px 0px 0px;
            padding: 80px;
            margin-top: 14px;
          "
        >
          <h1 style="text-align: center">เมนูเเนะนำสำหรับคุณ</h1>
        </v-sheet>
      </v-col>

      <!-- Tag box -->

      <v-col>
        <v-sheet
          class="py-16 px-5"
          width="700px"
          height="80%"
          style="
            border-radius: 10px;
            margin-top: 26px;
            margin-right: 60px;
            position: relative;
          "
        >
          <nuxt-link to="#" class="view-all-tag">
            <span> ดูทั้งหมด </span>
          </nuxt-link>

          <v-chip-group active-class="primary--text" style="margin-top: 20px">
            <v-chip
              large
              color="red"
              outlined
              link
              v-for="tag in tags"
              :key="tag.tagName"
            >
              {{ tag.tagName }}
            </v-chip>
          </v-chip-group>
        </v-sheet>
      </v-col>
    </v-row>

    <!-- Card menu -->

    <div class="menu-card-box">
      <v-layout row wrap class="menu-card-cober-each-card">
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
                <v-icon class="btn-fav-recipe-icon" style=""
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
          </v-card>
        </v-flex>
      </v-layout>
    </div>

    <!-- Button All recipe -->

    <div class="wraper-btn-see-all-recipe">
      <v-btn large color="success" class="btn-see-all-recipe">
        <span class="all-recipe-text">สูตรอื่นๆ</span>
      </v-btn>
    </div>

    <!-- Menu of the day card -->

    <!-- <div class="header-menu-class-boox-2">

    </div> -->
    <v-row
      no-gutters
      class="md-6"
      style="width: 97%; margin-left: 20px; margin-top: 50px"
    >
      <v-col>
        <v-sheet
          color="white"
          height="230"
          width="700"
          style="
            border-radius: 10px 10px 0px 0px;
            padding: 80px;
            margin-top: 14px;
          "
        >
          <h1 style="text-align: left">เมนูเเนะนำสำหรับคุณ</h1>
        </v-sheet>
      </v-col>
    </v-row>

    <div class="menu-card-box-2">
      <v-layout row wrap class="menu-card-cober-each-card">
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
                <v-icon class="btn-fav-recipe-icon" @click="FavBtn()"
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

                <div class="grey--text ml-4">4.5 (413)</div>
              </v-row>
            </v-card-text>

            <v-card-actions>
              <v-btn block dark href="recipe/tomyum">
                <span>ทำอาหาร</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
// import Pagination from "./Pagination.vue";
// import Searchrecipe from "./SearchRecipe.vue";

export default {
  name: 'Home',

  components: {},

  pagination() {
    return {
      page: 1,
    }
  },

  data: () => ({
    loading: false,
    selection: 1,
    menus: [
      {
        Name: 'Beef Welling Ton',
        Author: 'KhaoKrua',
        time: '2',
        rate: 1,
        src:
          'https://www.thedorsetmeatcompany.co.uk/theme-content/uploads/2020/08/Beef-Wellington_004.jpg',
      },
      {
        Name: 'ต้มยำกุ้ง',
        Author: 'KhaoKrua',
        time: '1',
        rate: 4.7,
        src:
          'https://d12man5gwydfvl.cloudfront.net/wp-content/uploads/2019/06/shutterstock_430308484.jpg',
        link: "tomyum"
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
      {
        Name: 'ชาเขียวปั่น',
        Author: 'KhaoKrua',
        time: '1',
        rate: 4.7,
        src:
          'https://www.pholfoodmafia.com/wp-content/uploads/2019/03/Matcha-Frappe-big.jpg',
      },
      {
        Name: 'สปาเก็ตตี้',
        Author: 'KhaoKrua',
        time: '1',
        rate: 4.7,
        src:
          'https://i.pinimg.com/564x/ab/18/4b/ab184bd478b50aa6468b59b5d90c00e3.jpg',
      },
      {
        Name: 'แฮมเบอร์เกอร์',
        Author: 'KhaoKrua',
        time: '1',
        rate: 4.7,
        src: 'https://blogs.psychcentral.com/nlp/files/2013/09/overeating.jpg',
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
    
  }),
  methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@200&display=swap');

* {
  margin: 0;
  padding: 0;
  outline: none;
  font-family: 'Kanit', sans-serif;
  box-sizing: border-box;
}

.home-container {
  margin: 5px auto;
  width: 90%;
  position: relative;
}

.menu-tag-box {
  margin-top: 10px;
  margin-right: 20px;
  height: 50px;
  display: flex;
  position: absolute;
}

.home-container .wraper-btn-see-all-recipe {
  height: 100px;
  padding: 50px;
  background-color: white;
  position: relative;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 0px 0px 10px 10px;
}

.wraper-btn-see-all-recipe .btn-see-all-recipe {
  position: absolute;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
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
}

.menu-card-each-card .btn-fav-recipe .btn-fav-recipe-icon:hover {
  background: red;
  color: white;
  transform: scale(1.1);
}

.header-menu-tag {
  height: 150px;
  padding: 35px 20px 10px;
  border-radius: 10px;
  width: 62%;
  max-height: 120px;
  background-color: white;
  position: relative;
  margin: auto;
  margin-top: 63px;
}

.header-menu-tag .btn-views-all-tag {
  position: absolute;
  left: 88%;
  top: 2%;
  right: 20%;
  width: 100px;
  margin: 5px auto;
  justify-content: center;
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

#card-recipe {
  transition: 0.25s ease;
  overflow: hidden;
  // cursor: pointer;
}

#card-recipe:hover {
  transform: scale(1.05);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
}

#card-recipe .card-recipe-img {
  transition: 0.25s ease;
}

#card-recipe:hover .card-recipe-img {
  transform: scale(1.2);
}

.menu-card-box {
  background-color: white;
  margin-left: 20px;
  margin-right: 20px;
  padding: 20px;
  border-radius: 0px 10px 0px 0px;
}

.menu-card-box-2 {
  background-color: white;
  margin-top: 50px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 20px;
  border-radius: 0px 10px 10px 10px;
}

.card-data .box-card-data {
  display: flex;
  justify-content: flex-start;
  margin: 10px auto;
}

.view-all-tag {
  position: absolute;
  left: 38rem;
  top: 10px;
  width: 60px;
  margin-right: 20px;
  width: 90px;
  font-size: 14px;
  text-align: center;
  color: #000000;
  // transition: 0.5s ease-in-out;
}

.view-all-tag:hover {
  transition: 0.5s ease-in-out;
  text-decoration: underline;
}
</style>


