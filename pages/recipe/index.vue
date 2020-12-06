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

        <h1 class="header-recipe-text">เมนูโปรด</h1>

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
              <v-btn icon><v-icon>fa4</v-icon></v-btn>
              <v-btn color="warning">text</v-btn>
              <v-btn color="primary">text</v-btn>
            </div>
          </div>
        </div>
      </v-sheet>
    </v-row>

    <v-row no-gutters class="md-6">
      <v-sheet class="content-sheet-recipe-menu"> </v-sheet>
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
  height: 360px;
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

.share-button{
  margin: 40px;
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
}
</style>