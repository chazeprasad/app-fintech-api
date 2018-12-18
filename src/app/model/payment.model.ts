import { Document, Schema, Model, model} from "mongoose";
import * as Faker from 'faker'

interface IPayment {
    user?: string;
    bank?: string;
    refereneceNo?: string;
    amount?: number;
    fromAccount?: number;
    toAccount?: string;
    currency?: string;
    date?: Date;
}

interface IPaymentModel extends IPayment, Document {
  
}

var PaymentSchema: Schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    bank: { type: Schema.Types.ObjectId, ref: 'Bank' },
    refereneceNo: String ,
    amount: Number,
    fromAccount: { type: Schema.Types.ObjectId, ref: 'Account' },
    toAccount: { type: Schema.Types.ObjectId, ref: 'Account' },
    currency: String,
    date: { type: Date, default: Date.now }
   
}, { timestamps: { createdAt: true }, strict: true  });


const Payment: Model<IPaymentModel> = model<IPaymentModel>("Payment", PaymentSchema);

export { IPayment, IPaymentModel, PaymentSchema, Payment }