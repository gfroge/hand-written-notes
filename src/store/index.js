import { createStore } from 'vuex'

export default createStore({
  state: () => ({
    AddNoteVisible: true,
    isBlackBgShown: false,
    isCreationFormShown: false,
    isCreationToEdit: false,
    isQuestionShown: false,
    isMenuShown: false,
    isSearchShown: false,
    notesArray: [
      {
        title: 'Создайте свою первую заметку!',
        description: '',
        id: 0
      },
    ],
    noteToOpen: 0,
  }),
  getters: {
    getSortedNotes: (state) => (query) => {
      if (query.trim() == '') {
        return [];
      }
      let arr = state.notesArray.slice(1, state.notesArray.length);
      let lowerQuery = query.toLowerCase();
      arr = arr.filter(smartFilter);
      function smartFilter(note) {
        if ((note.title.trim() != '') && (note.description.trim() != '')) {
          return (note.title.toLowerCase().includes(lowerQuery) || note.description.toLowerCase().includes(lowerQuery));
        }
        else if (note.title.trim() != '') {
          return note.title.toLowerCase().includes(lowerQuery);
        }
        else {
          return note.description.toLowerCase().includes(lowerQuery)
        }
      }
      return arr;
    }
  },
  mutations: {
    //add note
    showAddNote(state) {
      state.AddNoteVisible = true;
    },
    hideAddNote(state) {
      state.AddNoteVisible = false;
    },
    //bg
    showBlackBG(state) {
      state.isBlackBgShown = true;
    },
    hideBlackBG(state) {
      state.isBlackBgShown = false;
    },
    //creation form
    showCreationForm(state) {
      state.isCreationFormShown = true;
    },
    hideCreationForm(state) {
      state.isCreationFormShown = false;
    },
    //note
    showLastNote(state) {
      state.noteToOpen = state.notesArray.length - 1;
    },
    removeNote(state) {
      if (state.noteToOpen > 0) {
        state.notesArray.splice(state.noteToOpen, 1);
        if (state.notesArray.length == 1) {
          state.noteToOpen--;
        }
        else if (state.noteToOpen == state.notesArray.length) {
          state.noteToOpen--;
        }
      }
    },
    //creation
    creationIsToEdit(state) {
      state.isCreationToEdit = true;
    },
    creationNotToEdit(state) {
      state.isCreationToEdit = false;
    },
    //question
    hideQuestion(state) {
      state.isQuestionShown = false;
    },
    //menu
    toggleMenuVisibility(state) {
      state.isMenuShown = !state.isMenuShown;
    },
    hideMenu(state) {
      state.isMenuShown = false;
    },
    //search
    toggleSearchVisibility(state) {
      state.isSearchShown = !state.isSearchShown;
    },
    hideSearch(state) {
      state.isSearchShown = false;
    },
    changeNoteToOpen(state, id) {
      state.noteToOpen = id;
    }
  },
  actions: {
    showDefaultScreen({ commit }) {
      commit('showAddNote');
      commit('hideBlackBG');
      commit('hideCreationForm');
      commit('hideQuestion');
      commit('hideMenu');
      commit('hideSearch');
    },
    prepareCreationForm({ commit }) {
      commit('hideAddNote');
      commit('showBlackBG');
      commit('showCreationForm');
    },
    createNote({ state, commit, dispatch }, { title, description }) {
      dispatch('showDefaultScreen');
      //if note not empty
      if (title.trim() != '' || description.trim() != '') {
        state.notesArray.push({
          title: title,
          description: description,
          id: Date.now()
        });
      }
      commit('showLastNote');
    },
    editNote({ state, commit, dispatch }, { title, description }) {
      dispatch('showDefaultScreen');
      //if note not empty
      if (title.trim() != '' || description.trim() != '') {
        state.notesArray[state.noteToOpen].title = title;
        state.notesArray[state.noteToOpen].description = description;
      }
      commit('creationNotToEdit');
    },
    questionUser({ state }) {
      state.isQuestionShown = true;
    },
    showClickedNote({ state, dispatch }, { index }) {
      state.noteToOpen = index + 1;
      dispatch('showDefaultScreen');
    },
    showMenuInAnyCase({state, dispatch, commit }) {
      if (state.isMenuShown) {
        commit('toggleMenuVisibility');
      }
      else{
        dispatch('showDefaultScreen');
        setTimeout(() => {
          commit('toggleMenuVisibility')
        }, 3);
  
      }
    }
  }
})
