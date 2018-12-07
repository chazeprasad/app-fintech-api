import { Document, Schema, Model, model} from "mongoose";
import * as bcrypt from 'bcrypt';
import { ValidationError } from "../util/error";
import { IAsset } from "./asset.model";


interface IUser {
  isActive?: boolean;
  username?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  email?: string;
  phone?: string;
  homePhone?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: number;
  role?: number;
  assets?: Array<any>;

}

interface IUserModel extends IUser, Document {
  fullName(): string;
}

var UserSchema: Schema = new Schema({
  isActive: { type: Boolean, default: false },
  username: String,
  firstName: String,
  lastName: String,
  password: String,
  email: String,
  phone: String,
  homePhone: String,
  address: String,
  city: String,
  state: String,
  zip: Number,
  role: { type: Number, default: 1 },
  assets: [{ type: Schema.Types.ObjectId, ref: 'Asset' }]

}, { timestamps: { createdAt: true }, strict: true  });
// }, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });
var self:any = UserSchema;
UserSchema.pre("save", async function(next) {
  let doc:IUser = this as IUser;
  

  try {
    
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