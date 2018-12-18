import { Document, Schema, Model, model} from "mongoose";
import * as bcrypt from 'bcrypt';
import { ValidationError } from "../util/error";
import { IBank } from "./bank.model";



interface IUser {
  username?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  email?: string;
  role?: number;

}

interface IUserModel extends IUser, Document {
  fullName(): string;
}

var UserSchema: Schema = new Schema({
  username: String,
  firstName: String,
  lastName: String,
  password: String,
  email: String,
  role: {type: String, default:1},


}, { timestamps: { createdAt: true }, strict: true  });

var self:any = UserSchema;
UserSchema.pre("save", async function(next) {
  let doc:any = this as IUser;
  try {
    // only hash the password if it has been modified (or is new)
    if (!doc.isModified('password')) { return next() }

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(doc.password, salt);
    doc.password = hash
    next();
  } catch (error) {
    console.log(error)
    next(error);
  }
});
UserSchema.methods.fullName = function(): string {
  return (this.firstName.trim() + " " + this.lastName.trim());
};

const User: Model<IUserModel> = model<IUserModel>("User", UserSchema);

export { IUser, IUserModel, UserSchema, User }