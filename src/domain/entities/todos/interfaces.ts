import { IGeneralEntityProperties } from '../../interfaces/index';

export interface ITodoEntityBody {
  content: string;
}
export interface ITodosEntity extends IGeneralEntityProperties, ITodoEntityBody {}