"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
var PaymentSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    bank: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Bank' },
    refereneceNo: String,
    amount: Number,
    fromAccount: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Account' },
    toAccount: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Account' },
    currency: String,
    date: { type: Date, default: Date.now }
}, { timestamps: { createdAt: true }, strict: true });
exports.PaymentSchema = PaymentSchema;
const Payment = mongoose_1.model("Payment", PaymentSchema);
exports.Payment = Payment;
