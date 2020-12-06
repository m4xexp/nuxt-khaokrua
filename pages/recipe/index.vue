<template>
  <div class="recipe-container">
    <v-row no-gutters class="md-6">
      <v-sheet class="header-sheet-recipe-menu">
        <v-breadcrumbs class="recipe-breadcrumbs" large :items="breadcrumbs">
          <template v-slot:item="{ item }">
            <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
              {{ item.text.toUpperCase() }}
            </v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>

        <h1 class="header-recipe-text">บัวลอยไข่หวาน</h1>

        <div class="recipe-header-info">
          <div class="author-box">
            <v-card class="author-img" max-width="344">
              <v-img
                lazy-src="https://picsum.photos/id/11/10/6"
                max-height="150"
                max-width="150"
                src="https://picsum.photos/id/11/500/300"
              ></v-img>
            </v-card>
            <div class="auther-text">
              <div class="menu-rating">
                <v-rating
                  value="4.8"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ml-4">(413)</div>
              </div>

              <h4 id="recipeBy">
                สูตรโดย
                <span><a class="author-link" href="#">เข้าครัว</a></span>
              </h4>
            </div>
          </div>
          <!-- End Author box -->
          <div class="recipe-share-area">
            <div class="share-button">
              <i class="fab fa-facebook"></i>
              <v-btn><i class="fab fa-facebook"></i></v-btn>
              <v-btn color="primary"><v-icon>fab fa-facebook</v-icon></v-btn>
            </div>
          </div>
        </div>
      </v-sheet>
    </v-row>

    <v-row no-gutters class="md-6">
      <v-sheet class="content-sheet-recipe-menu">
        <div class="wrapper-recipe-card">
          <v-card max-width="400">
            <div class="recipe-img" style="overflow: hidden">
              <v-img
                src="https://img.kapook.com/u/2017/wanwanat/93_bualoy/loy4_1.jpg"
              >
              </v-img>
            </div>
          </v-card>
        </div>
        <div class="wraper-addto-fav-icon">
          <v-btn class="addto-fav-icon" color="success"
            ><span><v-icon>favorite_border</v-icon></span>
            เพิ่มในเมนูโปรด</v-btn
          >
        </div>
      </v-sheet>
    </v-row>

    <v-row no-gutters class="md-6" id="wraper-data-recipe">
      <v-col>
        <div class="data-recipe">
          <v-sheet class="data-sheet-recipe-menu">
            <div class="data-time-recipe">
              <div class="data-prep-time">
                <span class="prep-time">เวลาเตรียม :</span>
                <span href="#">1 ชั่วโมง</span>
              </div>
              <div class="data-cook-time">
                <span class="cook-time">เวลาทำอาหาร :</span>
                <span href="#">1 ชั่วโมง</span>
              </div>
            </div>
            <div class="data-serve-recipe">
              <div class="data-serve">
                <span class="serve-no">เสิร์ฟ :</span>
                <span href="#">1 ที่</span>
              </div>
              <div class="data-yield">
                <span class="yield-no">จำนวน :</span>
                <span>1 ชิ้น</span>
              </div>
            </div>
          </v-sheet>
        </div>
        <div class="ingredient-recipe">
          <v-sheet class="ingredient-sheet-recipe-menu">
            <span class="ingredients-header-recipe">ส่วนผสม</span>
            <v-divider style="margin: 5px 0px 20px 0px"></v-divider>
            <v-sheet v-for="(ingr, index) in Ingreds" :key="ingr.ingrNO">
            <v-divider
              v-if="index !== 0"
              :key="`${index}-divider`"
              style="margin: 15px 0px 15px 0px; width: 100%"
            ></v-divider>
            <div style="display: flex; justify-content: space-between">
              <span>{{ingr.ingred}}</span>
              <span>{{ingr.unit}}</span>
            </div>
            
          </v-sheet>
          </v-sheet>
        </div>
      </v-col>
      <v-col>
        <v-sheet class="direction-sheet-recipe-menu">
          <span class="direction-header-recipe">วิธีทำ</span>
          <v-divider style="margin: 5px 0px 20px 0px"></v-divider>
          <v-sheet v-for="(Direct, index) in Directs" :key="Direct.stepNo">
            <v-divider
              v-if="index !== 0"
              :key="`${index}-divider`"
              style="margin: 15px 0px 15px 0px; width: 100%"
            ></v-divider>
            <span>{{Direct.step}}</span>
          </v-sheet>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    breadcrumbs: [
      {
        text: 'หน้าแรก',
        disabled: false,
        href: '/',
      },
      {
        text: 'เมนู',
        disabled: true,
        href: 'favorite',
      },
    ],
    Ingreds: [
      {
        ingrNO: 1,
        ingred: 'แป้งข้าวเหนียว',
        unit: '1 ถ้วย'
      },
      {
        ingrNO: 2,
        ingred: 'น้ำเปล่า',
        unit: '1/4 ถ้วย'
      },
      {
        ingrNO: 3,
        ingred: 'เผือกนึ่งสุก',
        unit: ''
      },
      {
        ingrNO: 4,
        ingred: 'ฟักทองนึ่งสุก',
        unit: ''
      },
      {
        ingrNO: 5,
        ingred: 'น้ำใบเตยคั้นเข้มข้น',
        unit: ''
      },
      {
        ingrNO: 6,
        ingred: 'กะทิ',
        unit: '1 ถ้วย'
      },
      {
        ingrNO: 7,
        ingred: 'น้ำตาลทราย',
        unit: '1 ถ้วย'
      },
      {
        ingrNO: 8,
        ingred: 'เกลือป่น',
        unit: '1 ช้อนชา'
      },
      {
        ingrNO: 9,
        ingred: 'ไข่ไก่',
        unit: '1 ฟอง'
      },


    ],
    Directs: [
      {
        stepNo: 1,
        step: 'แบ่งแป้งออกเป็น 3 ส่วน ส่วนที่ 1 นวดผสมแป้งกับน้ำเปล่าและเผือกนึ่งสุก ส่วนที่ 2 นวดแป้งกับน้ำเปล่าและฟักทองนึ่งสุก ส่วนที่ 3 นวดแป้งกับน้ำใบเตย นวดผสมจนเข้ากันเป็นเนื้อเดียว ปั้นเป็นก้อนกลม ๆ แล้วนำไปคลุกแป้งข้าวเหนียวบาง ๆ เตรียมไว้ ',
      },
      {
        stepNo: 2,
        step: 'ใส่น้ำกะทิลงในหม้อ เติมน้ำตาลทรายและเกลือป่นคนผสมจนละลาย นำขึ้นตั้งไฟพอเดือด รีบปิดไฟ เตรียมไว้',
      },
      {
        stepNo: 3,
        step: 'ต้มน้ำเปล่าในหม้อจนเดือด นำบัวลอยลงต้มทีละสีจนลอยขึ้นมา จากนั้นตักขึ้นสะเด็ดน้ำ ใส่ลงในถ้วย ตักกะทิที่เตรียมไว้ใส่ลงไป',
      },
      {
        stepNo: 4,
        step: 'ตอกไข่ไก่ใส่ถ้วย ค่อย ๆ เทลงในหม้อน้ำกะทิ รอจนไข่สุกตามชอบ จากนั้นตักใส่ลงในถ้วยบัวลอย พร้อมเสิร์ฟ',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
.recipe-container {
  position: relative;
  justify-content: center;
  margin: 5px auto;
  width: 80%;
}

.header-sheet-recipe-menu {
  border-radius: 10px;
  width: 100%;
  padding: 20px;
}

.recipe-breadcrumbs {
  position: absolute;
  left: 0px;
  top: 0px;
}

.header-recipe-text {
  text-align: left;
  margin: 30px 10px;
  font-size: 9vh;
}

.recipe-header-info {
  display: flex;
  justify-content: space-around;
}

.author-box {
  margin: 30px auto;
  width: 30%;
  display: flex;
  position: relative;
}

.menu-rating {
  display: flex;
}

.auther-text {
  display: inline-block;
  margin: auto;
}

#recipeBy {
  display: inline-block;
  padding: 5px;
}

.author-link {
  text-decoration: none;
  color: red;
  font-weight: bold;
  transition: 0.25s ease-in-out;
  margin: 5px;
  &:hover {
    font-size: 20px;
  }
}

.content-sheet-recipe-menu {
  border-radius: 10px 10px 0px 0px;
  width: 100%;
  height: 550px;
  padding: 20px;
  margin-top: 30px;
}

.recipe-share-area {
  max-width: 300px;
  width: 50%;
  background-color: #606060;
  background: linear-gradient(180deg, #606060 40%, hsla(0, 0%, 100%, 0) 0);
  background-position: 0;
  background-size: 1px 5px;
  background-repeat: repeat-y;
}

.share-button {
  margin: 40px;
}

.wrapper-recipe-card {
  margin: 20px auto;
  width: 70%;
  display: flex;
  justify-content: center;
}

.wraper-addto-fav-icon {
  display: flex;
  justify-content: center;
  width: 50%;
  margin: 20px auto;
}

// addto-fav-icon{
//   display: flex;
//   justify-content: center;
//   width: 50%;
//   margin: 20px auto;
// }

#wraper-data-recipe {
  margin-top: 40px;
}

.data-recipe {
  display: flex;
  flex-direction: column;
}

.data-sheet-recipe-menu {
  width: 95%;
  border-radius: 10px;
  padding: 20px;
  height: 150px;
  margin-bottom: 30px;
  display: block;
}

.data-sheet-recipe-menu div > div {
  padding: 10px;
}

.data-time-recipe {
  display: flex;
}

.data-prep-time {
  width: 50%;
  text-align: left;
  padding: 10px;
  border-right: 1px solid #606060;
  border-bottom: 1px solid #606060;
}

.data-cook-time {
  width: 50%;
  text-align: right;
  border-bottom: 1px solid #606060;
}

.data-serve {
  width: 50%;

  text-align: left;
  border-right: 1px solid #606060;
}

.data-yield {
  width: 50%;
  text-align: right;
}

.data-serve-recipe {
  display: flex;
}

.ingredient-sheet-recipe-menu {
  width: 100%;
  border-radius: 10px 0px 0px 10px;
  padding: 20px;
}

.ingredients-header-recipe {
  font-weight: bold;
  font-size: 26px;
}

.direction-sheet-recipe-menu {
  width: 100%;
  border-radius: 10px;
  padding: 20px;
}

.direction-header-recipe {
  font-weight: bold;
  font-size: 26px;
}

@media only screen and (max-width: 1264px) {
  .recipe-container {
    width: 90%;
  }
  .header-recipe-text {
    font-size: 6vh;
  }
  .author-box {
    width: 40%;
  }
}

@media only screen and (max-width: 768px) {
  .recipe-container {
    width: 90%;
  }
  .header-recipe-text {
    font-size: 5vh;
  }
  .author-box {
    width: 50%;
  }
}

@media only screen and (max-width: 600px) {
  .recipe-container {
    width: 90%;
  }
  .header-recipe-text {
    font-size: 4vh;
  }
  .author-box {
    margin: 0 auto;
    width: 100%;
  }
  .recipe-share-area {
    display: none;
  }
}
</style>