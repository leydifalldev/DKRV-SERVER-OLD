"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { check, validationResult } = require('express-validator/check');
exports.PlaceValidator = () => {
    return [
        check('name').isLength({ min: 1 }),
        check('phone').isLength({ min: 9 }),
        check('address').isLength({ min: 4 })
    ];
};
