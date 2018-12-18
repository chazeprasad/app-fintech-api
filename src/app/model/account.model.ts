import { Document, Schema, Model, model} from "mongoose";
import { IBank } from "./bank.model";
import { IUser } from "./user.model";

interface IAccount {
  bank?: IBank;
  user?: IUser; 
  accountNo?: string;
  balance?: number;
  currency?: string;
}

interface IAccountModel extends IAccount, Document {
  
}

var AccountSchema: Schema = new Schema({
    bank: { type: Schema.Types.ObjectId, ref: 'Bank' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    accountNo: String,
    balance: Number,
    currency: String,
   
}, { timestamps: { createdAt: true }, strict: true  });


const Account: Model<IAccountModel> = model<IAccountModel>("Account", AccountSchema);

export { IAccount, IAccountModel, AccountSchema, Account }