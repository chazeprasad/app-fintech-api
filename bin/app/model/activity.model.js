"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
var ActivitySchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    bank: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Bank' },
    date: { type: Date, default: Date.now }
}, { timestamps: { createdAt: true }, strict: true });
exports.ActivitySchema = ActivitySchema;
const Activity = mongoose_1.model("Activity", ActivitySchema);
exports.Activity = Activity;
