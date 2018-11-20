import Vue from 'vue';
import Vuex from 'vuex';
import { IStore } from './interface';
import mutations from '@/store/mutations';
import { DIALOGTITLE } from '@/config';

Vue.use(Vuex);

export default new Vuex.Store<IStore>({
  state: {
    dialogTodoForm: {
      isShow: false,
      title: DIALOGTITLE.NEW,
      form: {
        title: '',
        desc: '',
      },
      index: -1,
    },
    todos: [],
  },
  mutations,
  actions: {},
});
