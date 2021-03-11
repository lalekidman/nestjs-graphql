import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { IUserInputEntity } from "./users.interfaces";
import { UserService } from "./users.services";


@Controller('users')
export class UserController {
  constructor (private readonly userService: UserService) {}

  @Get()
  public getUsers () {
    return this.userService.getUsers()
  }
  @Post()
  public createUser (@Body() userInput: IUserInputEntity) {
    return this.userService.saveUser(userInput)
  }
  @Patch('/:userId')
  public updateUser (@Param('userId') userId: string, @Body() userInput: IUserInputEntity) {
    return this.userService.updateUser(userId, userInput)
  }
  @Delete('/:userId')
  public removeUser (@Param('userId') userId: string) {
    return this.userService.removeUser(userId)
  }
}