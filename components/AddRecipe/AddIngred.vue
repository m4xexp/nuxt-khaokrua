<template>
  <div>
    <v-sheet
      class="sheet-ingredients"
      v-for="(task, index) in tasks"
      :key="task.id"
    >
      <div class="ingredients-field" style="position: relative; height: 50px">
        <div
          class="ingredient-item-label"
          v-if="!task.editing"
          @dblclick="edit(task)"
        >
          <v-divider
            v-if="index !== 0"
            :key="`${index}-divider`"
            style="margin: 15px 0px 15px 0px; width: 100%"
          ></v-divider>

          <div
            class="text-label"
            style="display: flex; justify-content: space-between"
          >
            <span style="margin-left: 10px">{{ task.text }}</span>
            <span class="delete-ingredient" @click="deleteIngredient"
              ><v-icon>delete</v-icon></span
            >
          </div>
        </div>

        <div v-else class="ingredient-item-edit">
          <v-text-field
            autofocus
            outlined
            clearable
            @blur="doneEdit(task)"
            @keydown.enter="doneEdit(task)"
            v-model="task.text"
            style="margin: 0px"
          ></v-text-field>
        </div>
      </div>
    </v-sheet>

    <v-textarea
      v-model="newTask"
      outlined
      clearable
      placeholder="เช่น น้ำมะนาว 2 ช้อนโต๊ะ"
      @keydown.enter="create"
      style="margin-top: 25px"
    ></v-textarea>
  </div>
</template>

<style lang="scss" scoped>


</style>