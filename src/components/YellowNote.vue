<template>
  <div class="note">
    <div>
    <div class="note__title-wrapper">
      <h1 class="note__title">
        <slot name="title"></slot>
      </h1>
    </div>
    <div class="note__content">
      <slot name="content"></slot>
    </div>
    </div>
    <div class="note__buttons">
      <slot name="remove" class="button"></slot>
      <slot name="button" class="button"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.note {
  @extend %br;
  border: 1px solid $LB;
  background-color: $NOTE-BG;
  min-height: 300px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  color: $B;
  &__title-wrapper {
    border-bottom: 1px solid $LB;
  }
  &__title,
  &__content {
    padding: 17px 10px;
  }
  &__title {
    font-size: 30px;
    line-height: 20px;
  }
  &__buttons {
    display: flex;
    justify-content: space-between;
    padding: 0 15px 17px 15px;
    div {
      cursor: pointer;
    }
  }
}
</style>