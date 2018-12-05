import { MutationTree } from 'vuex';
import { TODOS } from '@/store/types';
import { IStore, ITodo, ITodoAndIndex } from '@/store/interface';
import { TODOTYPE } from '@/config';

export const todosMutations: MutationTree<IStore> = {
  [TODOS.ADD](state, payload: ITodo) {
    const { title, desc } = payload;
    state.todos.push({
      title,
      desc,
      type: TODOTYPE.UNDO,
    });
  },
  [TODOS.DEL](state, index: number) {
    return state.todos.splice(index, 1);
  },
  [TODOS.EDIT](state, payload: ITodoAndIndex) {
    const { title, desc, index } = payload;
    const todos = state.todos;
    todos[index] = {
      title,
      desc,
      type: todos[index].type,
    };
    state.todos = [...todos];
  },
  [TODOS.DONE](state, index: number) {
    const type = state.todos[index].type;
    if (type === TODOTYPE.UNDO) {
      state.todos[index].type = TODOTYPE.HAVEDO;
    } else {
      state.todos[index].type = TODOTYPE.UNDO;
    }
  },
};
