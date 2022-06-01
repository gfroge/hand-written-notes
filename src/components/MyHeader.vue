<template>
  <header class="header">
    <div @click="showMenu" class="header__menu">
      <svg
        width="52"
        height="33"
        viewBox="0 0 52 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="43"
          height="6"
          rx="3"
          fill="white"
          stroke="#3D3D3D"
        />
        <rect
          x="0.5"
          y="26.5"
          width="34"
          height="6"
          rx="3"
          fill="white"
          stroke="#3D3D3D"
        />
        <rect
          x="0.5"
          y="13.5"
          width="51"
          height="6"
          rx="3"
          fill="white"
          stroke="#3D3D3D"
        />
        <rect
          x="0.5"
          y="0.5"
          width="43"
          height="6"
          rx="3"
          fill="white"
          stroke="#3D3D3D"
        />
        <rect
          x="0.5"
          y="26.5"
          width="34"
          height="6"
          rx="3"
          fill="white"
          stroke="#3D3D3D"
        />
        <rect
          x="0.5"
          y="13.5"
          width="51"
          height="6"
          rx="3"
          fill="white"
          stroke="#3D3D3D"
        />
      </svg>
    </div>
    <div @click="$store.dispatch('showDefaultScreen')" class="header__logo-wrapper">
      <img class="header__logo" src="img/icons/logo.png" alt="" />
    </div>
    <div @click="search" class="header__search">
      <svg
        width="25"
        height="34"
        viewBox="0 0 25 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.5 9C18.5 13.6693 14.4964 17.5 9.5 17.5C4.50362 17.5 0.5 13.6693 0.5 9C0.5 4.33071 4.50362 0.5 9.5 0.5C14.4964 0.5 18.5 4.33071 18.5 9Z"
          fill="white"
          stroke="black"
        />
        <path d="M12.5 17L21.5 32.5" stroke="black" />
        <path d="M15 16L23.5 31" stroke="black" />
        <path
          d="M21.4573 32.4326C21.5491 32.5896 21.6352 32.6581 21.8069 32.7244C21.8788 32.7522 21.9454 32.7493 22.0203 32.7575C22.1463 32.7713 22.2777 32.7919 22.4043 32.7919C22.574 32.7919 22.7893 32.8312 22.937 32.7293C23.0436 32.6558 23.13 32.5212 23.1979 32.414C23.2962 32.2585 23.3871 32.1088 23.4615 31.9398C23.512 31.8251 23.5249 31.6925 23.5262 31.5682C23.5273 31.4572 23.5356 31.3409 23.5138 31.2316C23.4934 31.1299 23.4411 31.0128 23.3926 30.9212C23.3783 30.8942 23.3775 30.8799 23.3775 30.8469C23.3775 30.7996 23.3651 30.8807 23.3651 30.8965"
          stroke="black"
          stroke-linecap="round"
        />
      </svg>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    showMenu() {
      this.$emit('showMenu');
    },
    search(){
      this.$emit('search');
    }
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 70px;
  width: 100%;
  min-width: 100%;
  background-color: $BG;
  border-bottom: 1px solid $LB;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  z-index: 1000;
  &__search,
  &__menu,
  &__logo-wrapper {
    cursor: pointer;
  }
  &__logo-wrapper {
    margin-left: -10px;
  }
}
</style>