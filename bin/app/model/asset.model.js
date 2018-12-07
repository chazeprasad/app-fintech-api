"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
var AssetSchema = new mongoose_1.Schema({
    isActive: { type: Boolean, default: false },
    owner: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
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
    photos: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Photo' }]
}, { timestamps: { createdAt: true }, strict: true });
exports.AssetSchema = AssetSchema;
// }, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });
var self = AssetSchema;
AssetSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        let doc = this;
        try {
            next();
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    });
});
const Asset = mongoose_1.model("Asset", AssetSchema);
exports.Asset = Asset;
