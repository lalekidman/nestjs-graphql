import { IUserEntity } from "./users.interfaces";

class UserEntity implements IUserEntity {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}