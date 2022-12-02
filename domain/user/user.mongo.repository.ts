import { UsersRepositoryInterface } from "./user.interface.repository";
import { DbSource } from "../../config/DbSource";
import { dbSource } from "@config/Container";

export class MongoUserRepository implements UsersRepositoryInterface {
  dbSource: DbSource;

  constructor() {
    this.dbSource = dbSource;
  }
  async findByEmail(email: string) {
    const data = await this.dbSource.user
      .findOne({
        email,
      })
      .exec();

    if (data == undefined) {
      throw new Error("No user with this email exists");
    }
    return data.toObject();
  }

  async create(dto) {
    return await this.dbSource.user.create(dto);
  }
  async update() {
    throw new Error("Method not implemented.");
  }
  async delete() {
    throw new Error("Method not implemented.");
  }
  async findById() {
    throw new Error("Method not implemented.");
  }
  async find() {
    throw new Error("Method not implemented.");
  }
}
