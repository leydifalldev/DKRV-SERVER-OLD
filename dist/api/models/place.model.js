"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shortid = require("shortid");
const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@$';
class Place {
    constructor(name, address, phone, step) {
        shortid.characters(characters);
        this.step = step;
        this.ref = shortid.generate();
        this.name = name;
        this.address = address;
        //this.schedule = schedule;
        this.phone = phone;
    }
}
exports.Place = Place;
