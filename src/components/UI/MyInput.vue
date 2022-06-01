<template>
  <textarea
    class="form-input"
    :placeholder="placeholderType"
    ref="textarea"
    :value="val"
    @input="adjustHeight"
    autocomplete="off"
    autofocus
    spellcheck="true"
    :style="styleInline"
    :data-scrol="scrl"
  ></textarea>
</template>

<script>
// :rows="rows"     :height="height"
export default {
  data() {
    return {
      height: 0,
      rows: 1,
      scrl: "",
      val: "",
      styleInline: "",
    };
  },
  props: {
    placeholderType: {
      type: String,
      default: "",
    },
  },
  methods: {
    // getHeight() {
    //   this.height = this.$refs.textarea.scrollHeight + 5;
    //   this.scrl = this.$refs.textarea.scrollHeight;
    // },
    adjustHeight(event) {
      this.val = event.target.value;

      //   if (this.val == "") {
      //       this.height = this.$refs.textarea.scrollHeight + 5;
      //       this.rows = 1;
      //   } else {
      //     if (this.$refs.textarea.scrollHeight > this.height) {
      //       this.rows++;
      //       this.height += 20;
      //       this.scrl = this.$refs.textarea.scrollHeight;
      //     }
      //     else if (this.$refs.textarea.scrollHeight < this.height) {
      //       this.rows--;
      //       this.height -= 20;
      //       this.scrl = this.$refs.textarea.scrollHeight;
      //     }
      //   }
    },
  },
  watch: {
    val() {
      this.styleInline = "height:auto";
      let h = this.$refs.textarea.scrollHeight;
      this.styleInline = `height:${h}px`;
    },
  },
  //   mounted() {
  //     this.getHeight();
  //   },
};
</script>

<style lang="scss" scoped>
.form-input {
  display: block;
  width: 100%;
  max-width: 100%;
  padding: 4px;
  font-size: 30px;
  line-height: 30px;
  outline: none;
  resize: none;
  overflow: hidden;
  background-color: transparent;
}
</style>