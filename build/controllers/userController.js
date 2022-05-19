"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { createUserValidation, updateUserValidation } = require("../joiValidation");
const user = require("../models/user");
const app = (0, express_1.default)();
let array = [];
app.use(express_1.default.json());
const userControllers = {
    allUsers: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const users = yield user.findAll();
        res.send({
            status_code: 200,
            message: "Success",
            data: users
        });
    }),
    getUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = req.params.id;
        const oneUser = yield user.findOne({ where: { id: id } });
        if (oneUser === null) {
            res.send({
                status_code: 400,
                message: "User Not Existed",
                data: null
            });
        }
        else {
            res.send({
                status_code: 200,
                message: "Success",
                data: oneUser
            });
        }
    }),
    addUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield createUserValidation.validateAsync(req.body);
            const postedUser = yield user.create({ name: result.name, number: result.number, mail: result.mail, address: result.address });
            res.status(200).send(postedUser);
        }
        catch (err) {
            res.status(422).send(err.message);
            console.log(err);
        }
    }),
    updateUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const result = yield updateUserValidation.validateAsync(req.body);
            yield user.update({
                name: result.name,
                number: result.number,
                mail: result.mail,
                address: result.address
            }, { where: { id: id } });
            res.status(200).send("User updated Successfully");
        }
        catch (err) {
            res.status(422).send(err.message);
            console.log(err);
        }
    }),
    deleteUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        yield user.destroy({
            where: { id: req.params.id }
        });
        res.status(200).send("User Deleted Successfully");
    })
};
module.exports = userControllers;
