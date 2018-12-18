import { Document, Schema, Model, model} from "mongoose";
import { IUser } from "./user.model";
import { IBank } from "./bank.model";

interface IActivity {
  user?: IUser;
  bank?: IBank;
  date?: Date;
}

interface IActivityModel extends IActivity, Document {
  
}

var ActivitySchema: Schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    bank: { type: Schema.Types.ObjectId, ref: 'Bank' },
    date: { type: Date, default: Date.now }
   
}, { timestamps: { createdAt: true }, strict: true  });


const Activity: Model<IActivityModel> = model<IActivityModel>("Activity", ActivitySchema);

export { IActivity, IActivityModel, ActivitySchema, Activity }