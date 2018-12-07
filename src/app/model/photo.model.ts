import { Document, Schema, Model, model} from "mongoose";
import * as bcrypt from 'bcrypt';
import { ValidationError } from "../util/error";


interface IPhoto {
  url?: string;
  thumbnailUrl?: string;
  originalUrl?: string;
  title?: string;
  altText?: string;
  asset?: string;
}

interface IPhotoModel extends IPhoto, Document {
  
}

var PhotoSchema: Schema = new Schema({
  url: String,
  thumbnailUrl: String,
  originalUrl: String,
  title: String,
  altText: String,
  asset: { type: Schema.Types.ObjectId, ref: 'Asset' }

}, { timestamps: { createdAt: true }, strict: true  });
// }, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });
var self:any = PhotoSchema;
PhotoSchema.pre("save", async function(next) {
  let doc:IPhoto = this as IPhoto;

  try {
   
    next();
  } catch (error) {
    console.log(error)
    next(error);

  }

});


const Photo: Model<IPhotoModel> = model<IPhotoModel>("Photo", PhotoSchema);

export { IPhoto, IPhotoModel, PhotoSchema, Photo }