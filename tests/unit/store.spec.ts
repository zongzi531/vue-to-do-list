import { expect } from 'chai';
import store from '@/store';
import { DIALOGTODOFORM, TODOS } from '@/store/types';
import { DIALOGTITLE, TODOTYPE } from '@/config';

const state = store.state;
const commit = store.commit;

describe('Check the vuex mutations properties related code', () => {

  it('DIALOGTODOFORM.SHOW when passed', () => {
    commit(DIALOGTODOFORM.SHOW);
    expect(state.dialogTodoForm.isShow).equals(true);
    commit(DIALOGTODOFORM.SHOW, { title: 't' });
    expect(state.dialogTodoForm.form.title).equals('t');
    commit(DIALOGTODOFORM.SHOW, { desc: 'd' });
    expect(state.dialogTodoForm.form.desc).equals('d');
    commit(DIALOGTODOFORM.SHOW, { title: 't1', desc: 'd1' });
    expect(state.dialogTodoForm.form.title).equals('t1');
    expect(state.dialogTodoForm.form.desc).equals('d1');
  });

  it('DIALOGTODOFORM.HIDE when passed', () => {
    commit(DIALOGTODOFORM.HIDE);
    expect(state.dialogTodoForm.isShow).equals(false);
    expect(state.dialogTodoForm.form.title).equals('');
    expect(state.dialogTodoForm.form.desc).equals('');
    expect(state.dialogTodoForm.index).equals(-1);
  });

  it('DIALOGTODOFORM.SETTITLE when passed', () => {
    commit(DIALOGTODOFORM.SETTITLE, DIALOGTITLE.EDIT);
    expect(state.dialogTodoForm.title).equals(DIALOGTITLE.EDIT);
  });

  it('DIALOGTODOFORM.SETINDEX when passed', () => {
    commit(DIALOGTODOFORM.SETINDEX, 2);
    expect(state.dialogTodoForm.index).equals(2);
  });

  it('TODOS.ADD when passed', () => {
    commit(TODOS.ADD, { title: 't1', desc: 'd1' });
    commit(TODOS.ADD, { title: 't2', desc: 'd2' });
    commit(TODOS.ADD, { title: 't3', desc: 'd3' });
    expect(state.todos[0].title).equals('t1');
    expect(state.todos[0].desc).equals('d1');
    expect(state.todos[1].title).equals('t2');
    expect(state.todos[1].desc).equals('d2');
    expect(state.todos[2].title).equals('t3');
    expect(state.todos[2].desc).equals('d3');
  });

  it('TODOS.DEL when passed', () => {
    commit(TODOS.DEL, 0);
    expect(state.todos[0].title).equals('t2');
    expect(state.todos[0].desc).equals('d2');
    expect(state.todos[1].title).equals('t3');
    expect(state.todos[1].desc).equals('d3');
  });

  it('TODOS.EDIT when passed', () => {
    commit(TODOS.EDIT, { title: 'et1', desc: 'ed1', index: 0 });
    expect(state.todos[0].title).equals('et1');
    expect(state.todos[0].desc).equals('ed1');
  });

  it('TODOS.DONE when passed', () => {
    expect(state.todos[0].type).equals(TODOTYPE.UNDO);
    commit(TODOS.DONE, 0);
    expect(state.todos[0].type).equals(TODOTYPE.HAVEDO);
    commit(TODOS.DONE, 0);
    expect(state.todos[0].type).equals(TODOTYPE.UNDO);
  });
});
