"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connectWithSequelize = require("./connectiondb");
const sync = connectWithSequelize.sync({ alter: true })
    .then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});
exports.default = sync;
