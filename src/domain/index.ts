import {v4 as uuidV4} from 'uuid'
import Todos from './entities/todos'
export const TodosEntity = Todos({
  generateId: uuidV4,
})
// const q = new TodosEntity({content: "hee"})
