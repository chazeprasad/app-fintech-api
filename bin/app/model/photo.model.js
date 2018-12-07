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
var PhotoSchema = new mongoose_1.Schema({
    url: String,
    thumbnailUrl: String,
    originalUrl: String,
    title: String,
    altText: String,
    asset: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Asset' }
}, { timestamps: { createdAt: true }, strict: true });
exports.PhotoSchema = PhotoSchema;
// }, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });
var self = PhotoSchema;
PhotoSchema.pre("save", function (next) {
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
const Photo = mongoose_1.model("Photo", PhotoSchema);
exports.Photo = Photo;
