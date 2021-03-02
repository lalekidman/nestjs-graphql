import {ITodosEntity} from './interfaces'
import {
  IGeneralEntityDependencies
} from '../../interfaces/index'
interface IDependencies extends IGeneralEntityDependencies {}
export default ({
  generateId
}: IDependencies) => (
  class TodoEntity implements ITodosEntity {
    public readonly _id: string;
    public _content: string = '';
    public readonly createdAt: number;
    public readonly updatedAt: number;
    constructor(todoData: Partial<ITodosEntity>) {
      let {
        _id = '',
        content = '',
        createdAt = Date.now(),
        updatedAt = Date.now(),
      } = todoData;
      if (!_id) {
        _id = generateId()
      }
      this._id = _id
      this.content = content
      this.createdAt = createdAt
      this.updatedAt = updatedAt
    }
    /**
     * Getter content
     * @return {string }
     */
    public get content(): string {
      return this._content;
    }

    /**
     * Setter content
     * @param {string } value
     */
    public set content(value: string) {
      this._content = value;
    }
  }
)
