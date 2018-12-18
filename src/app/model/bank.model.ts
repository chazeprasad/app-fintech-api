import { Document, Schema, Model, model} from "mongoose";
import { IAccount } from "./account.model";


interface IBank {
  bankName?: string;
  accounts?: Array<IAccount>
}

interface IBankModel extends IBank, Document {
  
}

var BankSchema: Schema = new Schema({
    bankName: String,
    accounts: [{ type: Schema.Types.ObjectId, ref: 'Account' }]
   
}, { timestamps: { createdAt: true }, strict: true  });


const Bank: Model<IBankModel> = model<IBankModel>("Bank", BankSchema);

export { IBank, IBankModel, BankSchema, Bank }