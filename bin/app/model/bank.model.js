"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
var BankSchema = new mongoose_1.Schema({
    bankName: String,
    accounts: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Account' }]
}, { timestamps: { createdAt: true }, strict: true });
exports.BankSchema = BankSchema;
const Bank = mongoose_1.model("Bank", BankSchema);
exports.Bank = Bank;
