const { check } = require('express-validator')

const User = require('../models/users.js')

module.exports.signupValidation = [check('email','Please enter valid email.').isEmail().custom(value => {
    return User.findOne({email : value}).then(user =>{
      if(user){
        return Promise.reject("Email exists!");
      }

    })
  }),
    check('password','Password should be of 5 character length or more.').isLength({min:5}),
    check('confirmPassword').custom((value, {req})=>{
      if (value !== req.body.password){
        return Promise.reject("password doesn't match.")
      }
      return true;
      
    })];


    module.exports.loginValidation = [
      check('email').isEmail().withMessage('Please enter Valid email')
      // .custom((value, {req})=>{
      //   return User.findOne({email:value}).then(user=>{
      //     if(!user){
      //       return Promise.reject("no email present in DB")
      //     }
      //     return true
      //   })
        // })
        ,
      check('password').isLength({min:5}).withMessage('Invalid password')
    ]