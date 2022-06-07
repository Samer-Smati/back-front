const { body, validationResult } = require('express-validator');


exports.registerValidation= [
    body('firstname','firstname required aaaa').notEmpty().isString(),
    body('lastname','lastname required').notEmpty().isString(),
    body('password','password required').notEmpty().isLength({min:5}),
    body('email','email required and email format').isEmail().notEmpty().normalizeEmail(),
]

exports.loginValidation= [
    body('password','password required').notEmpty().isLength({min:5}),
    body('email','email required and email format').isEmail().notEmpty().normalizeEmail(),
]

exports.validation = async(req,res,next) =>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        next()
    } catch (error) {
        return res.status(500).send({error:error})
    }
}