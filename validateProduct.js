const { body, validationResult } = require('express-validator');

const productValidationRules = [
  body('name').notEmpty().withMessage('Name is required'),
  body('price').isNumeric().withMessage('Price must be a number'),
  body('inStock').isBoolean().withMessage('inStock must be a boolean'),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  productValidationRules,
  validate,
};
