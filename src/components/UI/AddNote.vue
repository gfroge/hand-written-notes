<template>
  <button
    v-if="$store.state.AddNoteVisible"
    class="add-button">
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="30" cy="30" r="29.5" fill="white" stroke="#3D3D3D" />
      <rect
        x="11.5"
        y="28.5"
        width="37"
        height="6"
        rx="3"
        fill="white"
        stroke="#3D3D3D"
      />
      <rect
        x="32.5"
        y="13.5"
        width="37"
        height="6"
        rx="3"
        transform="rotate(90 32.5 13.5)"
        fill="white"
        stroke="#3D3D3D"
      />
      <path
        d="M26.4922 29.5434C26.4922 29.4726 26.4922 29.2956 26.4922 29.1632C26.4922 29.1129 26.4922 28.9619 26.4922 29.0123C26.4922 29.0691 26.4922 29.126 26.4922 29.1829C26.4922 29.5986 26.4922 30.0142 26.4922 30.4299C26.4922 31.6212 26.4922 32.8126 26.4922 34.004"
        stroke="white"
      />
      <path d="M32.4836 29.0061V34.004" stroke="white" />
      <path
        d="M32.9804 33.9026C32.9804 33.7784 32.9804 33.8611 32.9804 33.9178C32.9804 33.9888 32.9804 33.8628 32.9804 33.8418C32.9804 33.8029 32.9804 33.9195 32.9804 33.9584C32.9804 34.0353 32.9804 33.8837 32.9804 33.8621C32.9804 33.3552 32.9804 32.8483 32.9804 32.3414C32.9804 31.2364 32.9804 30.1314 32.9804 29.0264"
        stroke="white"
      />
      <path d="M26.9789 29.0669V33.9026" stroke="white" />
    </svg>
  </button>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.add-button {
  position: sticky;
  z-index: 200;
  left: 50%;
  bottom: 10px;
  border-radius: 50%;
  background-color: transparent;
  svg{
    display: block;
    margin-left: -30px;
  }
}
</style>