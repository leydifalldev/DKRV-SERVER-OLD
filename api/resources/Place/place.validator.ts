const { check, validationResult } = require('express-validator/check');

export const PlaceValidator = () => {
  return [
    check('name').isLength({ min: 1 }),
    check('phone').isLength({ min: 9 }),
    check('address').isLength({ min: 4 })
  ]
}