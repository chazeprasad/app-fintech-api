"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
var AccountSchema = new mongoose_1.Schema({
    bank: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Bank' },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    accountNo: String,
    balance: Number,
    currency: String,
}, { timestamps: { createdAt: true }, strict: true });
exports.AccountSchema = AccountSchema;
const Account = mongoose_1.model("Account", AccountSchema);
exports.Account = Account;
