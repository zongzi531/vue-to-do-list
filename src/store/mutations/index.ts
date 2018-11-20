import { todosMutations } from './todos';
import { dialogTodoFormMutations } from './dialogTodoForm';

export default {
  ...todosMutations,
  ...dialogTodoFormMutations,
};
