

const { check , validationResult } = require("express-validator");

exports.signupvalidator = [
    check("name")
        .notEmpty()
        .withMessage("name is required"),
    check("email")
        .isEmail()
        .withMessage('Valid email is required'),
    check('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 character'),
    check('phoneNumber')
        .isLength({ min: 10 })
        .withMessage("Valid mobile number is required"),
    check("phoneNumber")
        .isNumeric()
        .withMessage("Valid mobile number is required"),
    check("phoneNumber")
        .isLength({ max: 10 })
        .withMessage("Valid mobile number is required"),
    check("state")
        .notEmpty()
        .withMessage("name is required")
]

exports.isValidation=(req,res,next)=>{
    
    const error = validationResult(req)
    // console.log(error,"errorerrorerrorerror");
    if(error.array().length>0){
        console.log({errors:error.array()[0].msg});
       return res.send({errors:error.array()[0].msg,signupError:true})
    }
        next();     
        
    
}