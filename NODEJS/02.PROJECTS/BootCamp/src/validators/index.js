import {body} from 'express-validator';

const userRegisterValidator = ()=>{
    return [
        body('email').trim().notEmpty().withMessage("Email is required").isEmail().withMessage("Invalid email"),
        body('username').trim().notEmpty().withMessage("Username is required"),
        body('password').trim().notEmpty().withMessage("Password is required"),
        
    ]
}

export {
    userRegisterValidator
}