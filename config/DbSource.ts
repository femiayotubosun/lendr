import { IUser, UserSchema } from "@domain/user/user.model";
import mongoose, { Model } from "mongoose";

export class DbSource {
  _db: typeof mongoose;

  public async connect(): Promise<void> {
    try {
      this._db = await mongoose.connect(process.env.DB_URI);
      console.log("MONGODB is eating good");
      //   await this.initial();
    } catch (err) {
      console.log(`Something went wrong with MONGODB CONN`, err);
    }
  }
  public get user(): Model<IUser> {
    return this._db.model<IUser>("User", UserSchema);
  }
}
