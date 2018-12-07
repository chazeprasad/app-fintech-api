import { Document, Schema, Model, model} from "mongoose";
import { IPhoto } from "./photo.model";


interface IAsset {
  isActive?: boolean;
  owner?: string;
  description?: string;
  houseNo?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: number;
  lat?: number;
  lng?: number;
  numBedrooms?: number;
  numBathrooms?: number;
  yearBuilt?: number;
  squareFootage?: number;
  occupancyStatus?: string;
  lotSize?: number;
  exteriorDetails?: string;
  foundationDetails?: string;
  roofDetails?: string;
  lotDetails?: string;
  garageDetails?: string;
  parkingDetails?: string;
  photos?: Array<any>
}

interface IAssetModel extends IAsset, Document {
  
}

var AssetSchema: Schema = new Schema({
    isActive: { type: Boolean, default: false },
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    description: String,
    houseNo: String,
    address: String,
    city: String,
    state: String,
    zip: Number,
    lat: Number,
    lng: Number,
    numBedrooms: Number,
    numBathrooms: Number,
    yearBuilt: Number,
    squareFootage: Number,
    occupancyStatus: String,
    lotSize: Number,
    exteriorDetails: String,
    foundationDetails: String,
    roofDetails: String,
    lotDetails: String,
    garageDetails: String,
    parkingDetails: String,
    photos: [{ type: Schema.Types.ObjectId, ref: 'Photo' }]

}, { timestamps: { createdAt: true }, strict: true  });
// }, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });
var self:any = AssetSchema;
AssetSchema.pre("save", async function(next) {
  let doc:IAsset = this as IAsset;

  try {
    
   
    next();
  } catch (error) {
    console.log(error)
    next(error);

  }

});


const Asset: Model<IAssetModel> = model<IAssetModel>("Asset", AssetSchema);

export { IAsset, IAssetModel, AssetSchema, Asset }