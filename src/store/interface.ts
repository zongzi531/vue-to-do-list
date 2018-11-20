import { DIALOGTITLE, TODOTYPE } from '@/config';

export interface IForm {
  title: string;
  desc: string;
}

export interface ITodo extends IForm {
  type: TODOTYPE;
}

export type todos = ITodo[];

export interface ITodoAndIndex extends ITodo {
  index: number;
}

export interface IDialogTodoForm {
  isShow: boolean;
  title: DIALOGTITLE;
  form: IForm;
  index?: number;
}

export interface IStore {
  dialogTodoForm: IDialogTodoForm;
  todos: todos;
}
