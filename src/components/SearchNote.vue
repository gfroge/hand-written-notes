<template>
  <div class="search__bg">
    <div class="search">
      <div class="search__container">
        <textarea-autosize
          class="search__input"
          :min-height="20"
          :max-height="1160"
          :placeholderType="'Введите запрос...'"
          v-model="searchQuery"
          @input="getNotes"
        />
        <span v-if="notesArray != []">
          <div
            v-for="note in notesArray"
            :key="note.id"
            @click="openNote(note)"
            @load="ale"
            class="search__item"
          >
            <div v-if="note.title.trim() != ''">
              {{ note.title.slice(0, 88) + '...' }}
            </div>
            <div v-else>
              {{ note.description.slice(0, 88) + '...' }}
            </div>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import TextareaAutosize from "@/components/UI/TextareaAutosize.vue";
export default {
  data() {
    return {
      searchQuery: "",
      notesArray: [],
    };
  },
  methods: {
    getNotes() {
      let query = this.searchQuery;
      this.notesArray = this.$store.getters.getSortedNotes(query);
    },
    openNote(data) {
      let t = data.id;
      let num = this.$store.state.notesArray
        .map(function (e) {
          return e.id;
        })
        .indexOf(t);
      this.$store.commit("changeNoteToOpen", num);
      this.$store.dispatch("showDefaultScreen");
    },
    ale() {
      alert("a");
    },
  },
  computed: {
    shortSearchRezult(note) {
      console.log(note);
      if (note.title.trim() != "") {
        if (note.title.length > 90) {
          let returnedText = note.title.slice(0, 88);
          returnedText += "...";
          return returnedText;
        } else {
          return note.title;
        }
      } else {
        if (note.description.length > 90) {
          let returnedText = note.description.slice(0, 88);
          returnedText += "...";
          return returnedText;
        } else {
          return note.description;
        }
      }
    },
  },

  components: {
    TextareaAutosize,
  },
};
</script>

<style lang="scss" scoped>
.search {
  position: relative;
  background-color: #fff;
  height: 100%;
  padding-top: 70px;
  &__container{
    max-width: 95%;
    margin: 0 auto;
  }
  overflow-y: scroll;
  scrollbar-color: rgb(198, 198, 198) #e6e6e6;
  scrollbar-width: thin;  
*::-webkit-scrollbar {
  width: 12px;
}
*::-webkit-scrollbar-track {
  background: #e6e6e6;
}
*::-webkit-scrollbar-thumb {
  background-color: #fff;
  border-radius: 20px;
}
  &__bg {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-color: #fff;
    z-index: 600;
  }
  &__input {
    font-size: 26px;
    margin-top: 15px;
    background-color: #fff;
    border: 1px solid $LB;
    border-radius: 10px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__item {
    min-height: 45px;
    margin-top: 15px;
    border: 1px solid $LB;
    border-radius: 10px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    &:last-child {
      margin-bottom: 15px;
    }
  }
}
</style>