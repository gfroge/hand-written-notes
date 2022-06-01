<template>
  <div class="top-layer"></div>
  <div :class="{ 'menu-wrapper': true, active: $store.state.isMenuShown }">
    <div class="menu">
      <div class="menu__alt" v-if="$store.state.notesArray.length == 1">
        Здесь появятся все ваши заметки
      </div>
      <div class="menu__list-wrap">
        <div
          class="menu__list"
          v-for="(note, index) in $store.state.notesArray.slice(
            1,
            $store.state.notesArray.length
          )"
          :key="note.id"
        >
          <div
            @click="$store.dispatch('showClickedNote', {index})"
            class="menu__note"
          >
            <div>
              <span v-if="note.title.trim() != ''">{{ getShorterText(note.title) }}</span>
              <span v-else>{{ getShorterText(note.description) }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="menu-line"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getShorterText(text) {
      if (text.length > 90) {
        let returnedText = text.slice(0,88);
        returnedText+='...';
        return returnedText;
      }
      else{
        return text;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.top-layer {
  position: absolute;
  top: 0;
  left: -100.15%;
  z-index: 1000;
  background-color: #fff;
  height: 100%;
  width: 100%;
}
.menu-wrapper {
  position: absolute;
  top: 0;
  left: -100%;
  &.active {
    left: 0;
  }
  z-index: 400;
  background-color: rgb(76, 108, 76);
  height: 100%;
  width: 80%;
  padding-top: 70px;
  min-width: 318px;
  max-width: 550px;
  transition: all 0.45s ease 0s;
}
.menu {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 500;
  background-color: $BG;
  border-right: 2px solid $LINES;
  font-size: 26px;
  &__alt {
    margin-left: 10px;
    padding-right: 38px;
    color: $G;
  }
  &__list:first-child {
    margin-top: 13px;
  }
  &__list:last-child {
    margin-bottom: 13px;
  }
  &__list:not(:first-child) {
    margin-top: 7px;
  }
  &__list-wrap {
    max-height: 100%;
    overflow-y: scroll;
    scrollbar-color: transparent transparent;
    scrollbar-width: thin;
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: transparent;
    }
  }
  &__note {
    cursor: pointer;
    > div {
      margin-left: 10px;
      padding-right: 38px;
    }
    &::after {
      content: "";
      display: block;
      height: 1px;
      width: 100%;
      margin-top: 2px;
      background-color: $LINES;
    }
  }
}
.menu-line {
  height: 100%;
  width: 2px;
  top: 0;
  right: 35px;
  position: absolute;
  background-color: $MENU-LINE;
}
</style>