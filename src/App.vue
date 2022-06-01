<template>
  <div class="main-wrapper">
    <my-header
      @showMenu="$store.dispatch('showMenuInAnyCase')"
      @search="$store.commit('toggleSearchVisibility')" />

    <search-note v-if="$store.state.isSearchShown"/>

    <black-b-g v-if="$store.state.isBlackBgShown" @click="emptySpaceClicked" />

    <sidebar-menu :isActive='isMenuShown'/>

    <div class="note-wrapper" v-if="!$store.state.isCreationFormShown">
      <yellow-note>
        <template v-slot:title>
          {{ this.$store.state.notesArray[this.$store.state.noteToOpen].title }}
        </template>
        <template v-slot:content>
          {{
            this.$store.state.notesArray[this.$store.state.noteToOpen]
              .description
          }}
        </template>
        <template v-if="$store.state.noteToOpen > 0" v-slot:remove>
          <div class="note__remove" @click="questionDelete">
            <svg
              width="41"
              height="37"
              viewBox="0 0 41 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.75 35.8438H10.25C9.23057 35.8437 8.2529 35.4783 7.53206 34.8278C6.81122 34.1773 6.40625 33.295 6.40625 32.375V10.4062C6.40625 10.0996 6.54124 9.8055 6.78152 9.58866C7.0218 9.37182 7.34769 9.25 7.6875 9.25C8.02731 9.25 8.3532 9.37182 8.59348 9.58866C8.83376 9.8055 8.96875 10.0996 8.96875 10.4062V32.375C8.96875 32.6817 9.10374 32.9758 9.34402 33.1926C9.5843 33.4094 9.91019 33.5312 10.25 33.5312H30.75C31.0898 33.5312 31.4157 33.4094 31.656 33.1926C31.8963 32.9758 32.0312 32.6817 32.0312 32.375V10.4062C32.0312 10.0996 32.1662 9.8055 32.4065 9.58866C32.6468 9.37182 32.9727 9.25 33.3125 9.25C33.6523 9.25 33.9782 9.37182 34.2185 9.58866C34.4588 9.8055 34.5938 10.0996 34.5938 10.4062V32.375C34.5938 33.295 34.1888 34.1773 33.4679 34.8278C32.7471 35.4783 31.7694 35.8438 30.75 35.8438V35.8438Z"
                fill="#8F8E8E"
              />
              <path
                d="M35.875 8.09375H5.125C4.78519 8.09375 4.4593 7.97193 4.21902 7.75509C3.97874 7.53825 3.84375 7.24416 3.84375 6.9375C3.84375 6.63084 3.97874 6.33675 4.21902 6.11991C4.4593 5.90307 4.78519 5.78125 5.125 5.78125H35.875C36.2148 5.78125 36.5407 5.90307 36.781 6.11991C37.0213 6.33675 37.1562 6.63084 37.1562 6.9375C37.1562 7.24416 37.0213 7.53825 36.781 7.75509C36.5407 7.97193 36.2148 8.09375 35.875 8.09375Z"
                fill="#8F8E8E"
              />
              <path
                d="M25.625 8.09375C25.2852 8.09375 24.9593 7.97193 24.719 7.75509C24.4787 7.53825 24.3438 7.24416 24.3438 6.9375V3.46875H16.6562V6.9375C16.6562 7.24416 16.5213 7.53825 16.281 7.75509C16.0407 7.97193 15.7148 8.09375 15.375 8.09375C15.0352 8.09375 14.7093 7.97193 14.469 7.75509C14.2287 7.53825 14.0938 7.24416 14.0938 6.9375V2.3125C14.0938 2.00584 14.2287 1.71175 14.469 1.49491C14.7093 1.27807 15.0352 1.15625 15.375 1.15625H25.625C25.9648 1.15625 26.2907 1.27807 26.531 1.49491C26.7713 1.71175 26.9062 2.00584 26.9062 2.3125V6.9375C26.9062 7.24416 26.7713 7.53825 26.531 7.75509C26.2907 7.97193 25.9648 8.09375 25.625 8.09375Z"
                fill="#8F8E8E"
              />
              <path
                d="M20.5 30.0625C20.1602 30.0625 19.8343 29.9407 19.594 29.7238C19.3537 29.507 19.2188 29.2129 19.2188 28.9062V12.7188C19.2188 12.4121 19.3537 12.118 19.594 11.9012C19.8343 11.6843 20.1602 11.5625 20.5 11.5625C20.8398 11.5625 21.1657 11.6843 21.406 11.9012C21.6463 12.118 21.7812 12.4121 21.7812 12.7188V28.9062C21.7812 29.2129 21.6463 29.507 21.406 29.7238C21.1657 29.9407 20.8398 30.0625 20.5 30.0625Z"
                fill="#8F8E8E"
              />
              <path
                d="M26.9062 27.75C26.5664 27.75 26.2405 27.6282 26.0003 27.4113C25.76 27.1945 25.625 26.9004 25.625 26.5938V15.0312C25.625 14.7246 25.76 14.4305 26.0003 14.2137C26.2405 13.9968 26.5664 13.875 26.9062 13.875C27.2461 13.875 27.572 13.9968 27.8122 14.2137C28.0525 14.4305 28.1875 14.7246 28.1875 15.0312V26.5938C28.1875 26.9004 28.0525 27.1945 27.8122 27.4113C27.572 27.6282 27.2461 27.75 26.9062 27.75Z"
                fill="#8F8E8E"
              />
              <path
                d="M14.0938 27.75C13.7539 27.75 13.4281 27.6282 13.1878 27.4113C12.9475 27.1945 12.8125 26.9004 12.8125 26.5938V15.0312C12.8125 14.7246 12.9475 14.4305 13.1878 14.2137C13.4281 13.9968 13.7539 13.875 14.0938 13.875C14.4336 13.875 14.7594 13.9968 14.9997 14.2137C15.24 14.4305 15.375 14.7246 15.375 15.0312V26.5938C15.375 26.9004 15.24 27.1945 14.9997 27.4113C14.7594 27.6282 14.4336 27.75 14.0938 27.75Z"
                fill="#8F8E8E"
              />
            </svg>
          </div>
        </template>
        <template v-if="$store.state.noteToOpen > 0" v-slot:button>
          <div
            class="note__edit"
            @click="
              $store.dispatch('prepareCreationForm');
              $store.commit('creationIsToEdit');
            "
          >
            <svg
              width="36"
              height="34"
              viewBox="0 0 36 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.6795 2.79656C32.9847 2.14331 32.0892 1.71415 31.1207 1.5704C30.1522 1.42665 29.1604 1.57566 28.287 1.99614C28.2375 1.92956 27.7755 1.44789 27.594 1.27506C26.729 0.460053 25.5571 0.00234985 24.3352 0.00234985C23.1134 0.00234985 21.9415 0.460053 21.0765 1.27506L12.8715 9.02422C12.5903 9.28989 12.4323 9.65016 12.4323 10.0258C12.4323 10.4015 12.5903 10.7617 12.8715 11.0274C13.1551 11.2889 13.5357 11.4353 13.932 11.4353C14.3283 11.4353 14.7089 11.2889 14.9925 11.0274L23.1975 3.27822C23.4993 2.99335 23.9085 2.83332 24.3352 2.83332C24.7619 2.83332 25.1712 2.99335 25.473 3.27822L26.022 3.79814L22.6845 6.94881C22.5389 7.08688 22.4571 7.27383 22.4571 7.46872C22.4571 7.66362 22.5389 7.85057 22.6845 7.98864L28.1835 13.1751C28.3292 13.3124 28.5266 13.3896 28.7325 13.3896C28.9384 13.3896 29.1358 13.3124 29.2815 13.1751L33.6795 9.02139C34.5528 8.19556 35.0433 7.07613 35.0433 5.90897C35.0433 4.74182 34.5528 3.62238 33.6795 2.79656Z"
                fill="#8F8E8E"
              />
              <path
                d="M21.0345 9.5455C20.8886 9.40804 20.6909 9.33084 20.4848 9.33084C20.2786 9.33084 20.0809 9.40804 19.935 9.5455L7.5945 21.2032C7.37753 21.4077 7.20539 21.6506 7.08794 21.918C6.97049 22.1854 6.91003 22.4721 6.91003 22.7616C6.91003 23.0511 6.97049 23.3377 7.08794 23.6051C7.20539 23.8725 7.37753 24.1154 7.5945 24.3199L10.8945 27.4366C11.111 27.6415 11.3682 27.8041 11.6513 27.915C11.9345 28.0259 12.238 28.083 12.5445 28.083C12.851 28.083 13.1545 28.0259 13.4377 27.915C13.7208 27.8041 13.978 27.6415 14.1945 27.4366L26.5365 15.7803C26.6821 15.6424 26.7638 15.4557 26.7638 15.261C26.7638 15.0664 26.6821 14.8797 26.5365 14.7418L21.0345 9.5455Z"
                fill="#8F8E8E"
              />
              <path
                d="M5.15101 25.1614C5.06181 25.077 4.95148 25.0152 4.83027 24.9818C4.70905 24.9484 4.58087 24.9445 4.4576 24.9703C4.33433 24.9962 4.21997 25.051 4.12512 25.1297C4.03027 25.2085 3.958 25.3085 3.91501 25.4207L0.997512 33.0508C0.949299 33.1773 0.9402 33.3142 0.971277 33.4454C1.00235 33.5766 1.07232 33.6967 1.17301 33.7917C1.27468 33.8858 1.40206 33.9512 1.54088 33.9807C1.6797 34.0103 1.82448 34.0027 1.95901 33.9589L10.038 31.2049C10.1567 31.1643 10.2627 31.096 10.346 31.0065C10.4294 30.9169 10.4874 30.8089 10.5148 30.6925C10.5422 30.576 10.538 30.455 10.5026 30.3405C10.4673 30.226 10.4019 30.1218 10.3125 30.0376L5.15101 25.1614Z"
                fill="#8F8E8E"
              />
            </svg>
          </div>
        </template>
      </yellow-note>
    </div>

    <div class="note-wrapper" v-else @click="emptySpaceClicked">
      <yellow-note @click.stop class="form">
        <template v-slot:title>
          <my-auto-input
            class="auto-input--title"
            :min-height="minHeight"
            :max-height="maxHeight"
            :placeholderType="titlePlaceholder"
            v-model="title"
            v-if="!$store.state.isCreationToEdit"
          />
          <my-auto-input
            class="auto-input--title"
            :min-height="minHeight"
            :max-height="maxHeight"
            :placeholderType="titlePlaceholder"
            v-model="title"
            :value="$store.state.notesArray[$store.state.noteToOpen].title"
            v-else
          />
        </template>
        <template v-slot:content>
          <my-auto-input
            class="auto-input--content"
            :min-height="minHeight"
            :max-height="maxHeight"
            :placeholderType="descriptionPlaceholder"
            v-model="description"
            v-if="!$store.state.isCreationToEdit"
          />
          <my-auto-input
            class="auto-input--content"
            :min-height="minHeight"
            :max-height="maxHeight"
            :placeholderType="descriptionPlaceholder"
            v-model="description"
            :value="
              $store.state.notesArray[$store.state.noteToOpen].description
            "
            v-else
          />
        </template>
        <template v-slot:remove>
          <div
            v-if="$store.state.isCreationToEdit"
            class="note__remove"
            @click="questionDelete"
          >
            <svg
              width="41"
              height="37"
              viewBox="0 0 41 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.75 35.8438H10.25C9.23057 35.8437 8.2529 35.4783 7.53206 34.8278C6.81122 34.1773 6.40625 33.295 6.40625 32.375V10.4062C6.40625 10.0996 6.54124 9.8055 6.78152 9.58866C7.0218 9.37182 7.34769 9.25 7.6875 9.25C8.02731 9.25 8.3532 9.37182 8.59348 9.58866C8.83376 9.8055 8.96875 10.0996 8.96875 10.4062V32.375C8.96875 32.6817 9.10374 32.9758 9.34402 33.1926C9.5843 33.4094 9.91019 33.5312 10.25 33.5312H30.75C31.0898 33.5312 31.4157 33.4094 31.656 33.1926C31.8963 32.9758 32.0312 32.6817 32.0312 32.375V10.4062C32.0312 10.0996 32.1662 9.8055 32.4065 9.58866C32.6468 9.37182 32.9727 9.25 33.3125 9.25C33.6523 9.25 33.9782 9.37182 34.2185 9.58866C34.4588 9.8055 34.5938 10.0996 34.5938 10.4062V32.375C34.5938 33.295 34.1888 34.1773 33.4679 34.8278C32.7471 35.4783 31.7694 35.8438 30.75 35.8438V35.8438Z"
                fill="#8F8E8E"
              />
              <path
                d="M35.875 8.09375H5.125C4.78519 8.09375 4.4593 7.97193 4.21902 7.75509C3.97874 7.53825 3.84375 7.24416 3.84375 6.9375C3.84375 6.63084 3.97874 6.33675 4.21902 6.11991C4.4593 5.90307 4.78519 5.78125 5.125 5.78125H35.875C36.2148 5.78125 36.5407 5.90307 36.781 6.11991C37.0213 6.33675 37.1562 6.63084 37.1562 6.9375C37.1562 7.24416 37.0213 7.53825 36.781 7.75509C36.5407 7.97193 36.2148 8.09375 35.875 8.09375Z"
                fill="#8F8E8E"
              />
              <path
                d="M25.625 8.09375C25.2852 8.09375 24.9593 7.97193 24.719 7.75509C24.4787 7.53825 24.3438 7.24416 24.3438 6.9375V3.46875H16.6562V6.9375C16.6562 7.24416 16.5213 7.53825 16.281 7.75509C16.0407 7.97193 15.7148 8.09375 15.375 8.09375C15.0352 8.09375 14.7093 7.97193 14.469 7.75509C14.2287 7.53825 14.0938 7.24416 14.0938 6.9375V2.3125C14.0938 2.00584 14.2287 1.71175 14.469 1.49491C14.7093 1.27807 15.0352 1.15625 15.375 1.15625H25.625C25.9648 1.15625 26.2907 1.27807 26.531 1.49491C26.7713 1.71175 26.9062 2.00584 26.9062 2.3125V6.9375C26.9062 7.24416 26.7713 7.53825 26.531 7.75509C26.2907 7.97193 25.9648 8.09375 25.625 8.09375Z"
                fill="#8F8E8E"
              />
              <path
                d="M20.5 30.0625C20.1602 30.0625 19.8343 29.9407 19.594 29.7238C19.3537 29.507 19.2188 29.2129 19.2188 28.9062V12.7188C19.2188 12.4121 19.3537 12.118 19.594 11.9012C19.8343 11.6843 20.1602 11.5625 20.5 11.5625C20.8398 11.5625 21.1657 11.6843 21.406 11.9012C21.6463 12.118 21.7812 12.4121 21.7812 12.7188V28.9062C21.7812 29.2129 21.6463 29.507 21.406 29.7238C21.1657 29.9407 20.8398 30.0625 20.5 30.0625Z"
                fill="#8F8E8E"
              />
              <path
                d="M26.9062 27.75C26.5664 27.75 26.2405 27.6282 26.0003 27.4113C25.76 27.1945 25.625 26.9004 25.625 26.5938V15.0312C25.625 14.7246 25.76 14.4305 26.0003 14.2137C26.2405 13.9968 26.5664 13.875 26.9062 13.875C27.2461 13.875 27.572 13.9968 27.8122 14.2137C28.0525 14.4305 28.1875 14.7246 28.1875 15.0312V26.5938C28.1875 26.9004 28.0525 27.1945 27.8122 27.4113C27.572 27.6282 27.2461 27.75 26.9062 27.75Z"
                fill="#8F8E8E"
              />
              <path
                d="M14.0938 27.75C13.7539 27.75 13.4281 27.6282 13.1878 27.4113C12.9475 27.1945 12.8125 26.9004 12.8125 26.5938V15.0312C12.8125 14.7246 12.9475 14.4305 13.1878 14.2137C13.4281 13.9968 13.7539 13.875 14.0938 13.875C14.4336 13.875 14.7594 13.9968 14.9997 14.2137C15.24 14.4305 15.375 14.7246 15.375 15.0312V26.5938C15.375 26.9004 15.24 27.1945 14.9997 27.4113C14.7594 27.6282 14.4336 27.75 14.0938 27.75Z"
                fill="#8F8E8E"
              />
            </svg>
          </div>
          <div v-else></div>
        </template>
        <template v-slot:button>
          <div
            class="note__ok"
            @click="
              () => {
                if ($store.state.isCreationToEdit) {
                  $store.dispatch('editNote', { title, description });
                } else {
                  $store.dispatch('createNote', { title, description });
                }
              }
            "
          >
            <svg
              width="33"
              height="35"
              viewBox="0 0 33 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.98333 13.8056L6.41667 16.5278L14.6667 25.2778L33 5.83333L30.4333 3.11111L14.6667 19.8333L8.98333 13.8056ZM29.3333 31.1111H3.66667V3.88889H22V0H3.66667C1.65 0 0 1.75 0 3.88889V31.1111C0 33.25 1.65 35 3.66667 35H29.3333C31.35 35 33 33.25 33 31.1111V15.5556H29.3333V31.1111Z"
                fill="#8F8E8E"
              />
            </svg>
          </div>
        </template>
      </yellow-note>
    </div>

    <question-user
      v-if="$store.state.isQuestionShown"
      :questionType="this.questionType"
      @yesToEdit="
        () => {
          if ($store.state.isCreationToEdit) {
            $store.dispatch('editNote', { title, description });
          } else {
            $store.dispatch('createNote', { title, description });
          }
        }
      "
    >
      <template v-if="this.questionType == 'delete'">
        Заметка будет удалена.<br />
        Вы уверены?
      </template>
      <template v-else> Сохранить изменения? </template>
    </question-user>

    <add-note
      @click="
        $store.dispatch('prepareCreationForm');
        changeCurrentNote;
      "
    />
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";
import YellowNote from "@/components/YellowNote.vue";
import QuestionUser from "@/components/QuestionUser.vue";
import AddNote from "@/components/UI/AddNote.vue";
import BlackBG from "@/components/UI/BlackBG.vue";
import MyAutoInput from "@/components/UI/TextareaAutosize.vue";
import SidebarMenu from "@/components/SidebarMenu.vue";
import SearchNote from './components/SearchNote.vue';
export default {
  name: "App",
  components: {
    MyHeader,
    YellowNote,
    AddNote,
    BlackBG,
    MyAutoInput,
    QuestionUser,
    SidebarMenu,
    SearchNote
  },
  data() {
    return {
      selectedTitle:
        this.$store.state.notesArray[this.$store.state.noteToOpen].title,
      selectedContent:
        this.$store.state.notesArray[this.$store.state.noteToOpen].description,
      titlePlaceholder: 'Например: "Список покупок"',
      descriptionPlaceholder: "Описание...",

      title: "",
      description: "",
      questionType: "",

    };
  },
  methods: {
    changeCurrentNote() {
      this.selectedTitle =
        this.$store.state.notesArray[this.$store.state.noteToOpen].title;
      this.selectedContent =
        this.$store.state.notesArray[this.$store.state.noteToOpen].description;
    },
    questionChange() {
      this.questionType = "change";
      this.$store.dispatch("questionUser");
    },
    questionDelete() {
      this.questionType = "delete";
      this.$store.dispatch("questionUser");
    },
    emptySpaceClicked() {
      if (this.$store.state.isCreationFormShown) {
        this.questionChange();
      } else {
        this.$store.dispatch("showDefaultScreen");
      }
    },
  //   isFormEmpty(title,description){
  //     if (title.trim() == '' && description.trim() == '') {
  //       return true;
  //     }
  //     else{
  //       return false;
  //     }
  //   }
  },
};
</script>

<style lang="scss">
//добавить логику отображения при открытии с пк

.main-wrapper {
  max-width: 392px;
  min-height: 600px;
  width: 100%;
  margin: 0 auto;
  border: 1px solid $LB;
  border-top: 0;
  position: relative;
}
.note-wrapper {
  padding: 22px 15px;
  position: relative;
  z-index: 150;
}
.note__ok,
.note__edit,
.note__remove {
  cursor: pointer;
}
.form {
  .note {
    &__title,
    &__content {
      padding: 10px 5px;
    }
  }
}
.auto-input {
  &--title {
    font-size: 30px;
    line-height: 26px;
  }
  &--content {
    font-size: 22px;
  }
}
</style>
