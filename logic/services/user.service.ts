import { UsersRepositoryInterface } from "@domain/user";
export class UserService {
  constructor(private usersRepository: UsersRepositoryInterface) {}

  createUser() {}

  findUserById() {}

  findUserByEmail() {}

  updateUser() {}

  deleteUser() {}

  findUsers() {}
}

// # TODO
// -- SignUp Flow
// -- middleware for for unique user
// -- createUser
// -- emit event for sending Activation Code
