<template>
  <div class="add-container">
    <v-row id="row-first" no-gutters class="md-6" justify="center">
      <v-sheet color="white" height="100" class="header-sheet-add-menu">
        <h1 style="text-align: center">เพิ่มสูตรอาหาร</h1>
      </v-sheet>
    </v-row>

    <v-row id="row-first" no-gutters class="md-6" justify="center">
      <v-sheet class="sheet-add-menu">
        <!-- For menu title and Description -->

        <div class="field-recipe-title">
          <v-text-field
            outlined
            label="ชื่อเมนู"
            append-icon="help_outline"
          ></v-text-field>
          <v-textarea outlined name="input-7-4" label="รายละเอียด"></v-textarea>
        </div>

        <!-- For categlory -->

        <div class="field-recipe-categlories" style="height: 200px">
          <span class="categlory-header">หมวดหมู่</span>
          <v-divider style="margin: 5px 0px 20px 0px"></v-divider>
          <div class="auto-tag-field">
            <v-autocomplete
              v-model="model"
              chips
              deletable-chips
              outlined
              multiple
              :items="states"
              :readonly="!isEditing"
              label="ทำไรกินดีน้า"
            >
            </v-autocomplete>
            <v-btn icon><v-icon>more_horiz</v-icon></v-btn>
          </div>
        </div>

        <!-- For recipe data like prep time -->

        <div class="field-recipe-detail">
          <div class="div-card-add-recipe-img">
            <v-card
              class="mx-auto"
              max-width="400"
              style="
                margin-top: 15px;
                margin-left: 100px;
                padding: 30px 30px;
                position: relative;
              "
              id="card-add-recipe-img"
              height="200px"
              width="240px"
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
                ><span class="text-in-add-fav">เพิ่มรูปภาพ</span>
              </v-card-title>
            </v-card>
          </div>

          <div class="all-data" style="display: block">
            <div class="recipe-data">
              <span>เวลาเตรียม :</span>
              <div class="prep-time">
                <div class="prep-time-input">
                  <v-text-field solo> </v-text-field>
                </div>
                <div class="prep-time-select">
                  <v-text-field solo> </v-text-field>
                </div>
              </div>
            </div>
            <div class="recipe-data">
              <span>เวลาทำอาหาร :</span>
              <div class="cook-time">
                <div class="cook-time-input">
                  <v-text-field solo> </v-text-field>
                </div>
                <div class="cook-time-select">
                  <v-text-field solo> </v-text-field>
                </div>
              </div>
            </div>

            <v-divider class="divider-between-prep"></v-divider>

            <div class="recipe-data">
              <span>เสิร์ฟ :</span>
              <div class="for-serve">
                <div class="serve-input">
                  <v-text-field solo> </v-text-field>
                </div>
              </div>
            </div>
            <div class="recipe-data" style="display: block">
              <span>จำนวน :</span>
              <div class="for-yield">
                <div class="yield-input">
                  <v-text-field solo> </v-text-field>
                </div>
                <div class="yield-select">
                  <v-text-field solo> </v-text-field>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="field-recipe-ingrediants"></div>
        <div class="field-recipe-step"></div>
      </v-sheet>
    </v-row>
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
    isEditing: true,
    model: null,
    states: [
      'ไข่ดาว',
      'ไข่เจียว',
      'ต้มยำกุ้ง',
      'กะเพราหมูสับ',
      'เบอร์เกอร์',
      'ก๋วยเตี๋ยว',
    ],
    methods: {
      reserve() {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }),
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

#row-header {
  width: 97%;
  margin-left: 20px;
  display: flex;
}

#row-container {
  width: 97%;
  margin-left: 20px;
  display: flex;
}

.add-container {
  margin: 15px auto;
  width: 90%;
  position: relative;
}

.header-sheet-add-menu {
  border-radius: 10px 10px 0px 0px;
  width: 100%;
  padding: 20px;
}

.sheet-add-menu {
  border-radius: 0px 0px 0px 0px;
  width: 100%;
  padding: 20px;
}

.auto-tag-field {
  height: 70px;
  display: flex;
  position: relative;
}

.categlory-header {
  font-size: 45px;
  margin: 20px auto;
}

.field-recipe-detail {
  display: flex;
  justify-content: space-around;
}

.field-recipe-detail .all-data {
  width: 50%;
}

.recipe-data {
  display: block;
}

.recipe-data .prep-time {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.prep-time .prep-time-input {
  width: 20%;
  margin-left: 20px;
}

.prep-time-select {
  width: 65%;
  margin-right: 40px;
}

.recipe-data .cook-time {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.cook-time .cook-time-input {
  width: 20%;
  margin-left: 20px;
}

.cook-time-select {
  width: 65%;
  margin-right: 40px;
}

.recipe-data .for-serve {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.serve-input {
  width: 20%;
  margin-left: 20px;
}

.recipe-data .for-yield {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.yield-input {
  width: 20%;
  margin-left: 20px;
}

.yield-select {
  width: 65%;
  margin-right: 40px;
}

.divider-between-prep {
  margin: 10px auto;
  margin-bottom: 25px;
  width: 90%;
}

.div-card-add-recipe-img {
  margin-left: 40px;
}

@media only screen and (max-width: 768px) {
  #card-add-recipe-img {
    width: 200px;
  }
  .div-card-add-recipe-img {
    margin-left: 20px;
  }
  .yield-select {
    margin-right: 20px;
  }
  .serve-select {
    margin-right: 20px;
  }
  .cook-time-select {
    margin-right: 20px;
  }
  .prep-time-select {
    margin-right: 20px;
  }
}

@media only screen and (max-width: 1024px) {
  #card-add-recipe-img {
    width: 200px;
  }
  .div-card-add-recipe-img {
    margin-left: 20px;
  }
  .yield-select {
    margin-right: 20px;
  }
  .serve-select {
    margin-right: 20px;
  }
  .cook-time-select {
    margin-right: 20px;
  }
  .prep-time-select {
    margin-right: 20px;
  }
}

@media only screen and (max-width: 376px) {
  #card-add-recipe-img {
    width: 200px;
  }
  .div-card-add-recipe-img {
    margin: 25px auto;
  }
  .yield-select {
    margin-right: 20px;
  }
  .serve-select {
    margin-right: 20px;
  }
  .cook-time-select {
    margin-right: 20px;
  }
  .prep-time-select {
    margin-right: 20px;
  }
  .field-recipe-detail .all-data {
    width: 100%;
  }
  .field-recipe-detail {
  display: block;
}
}
</style>


