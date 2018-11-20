import { MutationTree } from 'vuex';
import { DIALOGTODOFORM } from '@/store/types/dialogTodoForm';
import { IStore, IForm } from '@/store/interface';
import { DIALOGTITLE } from '@/config';

export const dialogTodoFormMutations: MutationTree<IStore> = {
  [DIALOGTODOFORM.SHOW](state, payload: IForm = { title: '', desc: '' }) {
    const { title, desc } = payload;
    if (title || desc) {
      state.dialogTodoForm.form.title = title;
      state.dialogTodoForm.form.desc = desc;
    }
    state.dialogTodoForm.isShow = true;
  },
  [DIALOGTODOFORM.HIDE](state) {
    state.dialogTodoForm.isShow = false;
    state.dialogTodoForm.form.title = '';
    state.dialogTodoForm.form.desc = '';
    state.dialogTodoForm.index = -1;
  },
  [DIALOGTODOFORM.SETTITLE](state, title: DIALOGTITLE) {
    state.dialogTodoForm.title = title;
  },
  [DIALOGTODOFORM.SETINDEX](state, index: number) {
    state.dialogTodoForm.index = index;
  },
};
