import { MongoUserRepository } from "@domain/user";
import { container } from "tsyringe";
import { UsersRepositoryInterface } from "../domain/user/user.interface.repository";
import { DbSource } from "./DbSource";

container.register<UsersRepositoryInterface>("UsersRepository", {
  useClass: MongoUserRepository,
});

container.register<DbSource>("DbSource", {
  useClass: DbSource,
});

export const UsersRepository: UsersRepositoryInterface =
  container.resolve("UsersRepository");
export const dbSource: DbSource = container.resolve("DBSourrce");
