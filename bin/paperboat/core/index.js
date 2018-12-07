"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug = require("debug");
class Paper {
    constructor() {
        this.name = this.constructor.name;
        this.log = debug(`${this.name}::LOG`);
        debug.enable(`${this.name}::LOG`);
    }
}
exports.Paper = Paper;
