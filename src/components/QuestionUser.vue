<template>
  <div class="question-wrap">
    <div class="question__container">
      <h2 class="question__title"><slot></slot></h2>
      <div class="question__bttn-container">
        <button @click="deleteOrEdit" class="question__button">Да</button>
        <button @click="$store.commit('hideQuestion')" class="question__button">
          Нет
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    questionType: {
      type: String,
      required: true,
    },

  },
  methods: {
    deleteOrEdit() {
      if (this.questionType == "delete") {
        this.$store.commit("removeNote");
        this.$store.dispatch("showDefaultScreen");
      }
       else {
        this.$emit('yesToEdit')
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.question-wrap {
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid $LB;

  width: 376px;
  min-height: 180px;
  position: absolute;
  z-index: 400;
  top: 28%;
  left: 50%;
  margin-left: -188px;
}
.question {
  &__container {
    margin: 0 auto;
    padding: 25px 0;
    max-width: 255px;
  }
  &__bttn-container {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
  }
  &__title {
    text-align: center;
    font-size: 22px;
  }
  &__button {
    display: block;
    font-size: 30px;
    border-radius: 10px;
    padding: 6px 13px;
    width: 70px;
    border: 1px solid $LB;
    background-color: transparent;
  }
}
</style>