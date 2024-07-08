const userModel = require('../models/users.js');
const bcrypt = require('bcryptjs');

const { validationResult } = require('express-validator');
const { getJWT } = require('../utils/auth.js')
exports.userSignup = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const dob = req.body.dob;
    const name = req.body.name;
    const role = req.body.role || 'user';

    const error = validationResult(req);
    if (error.array().length > 0) {
        return res.status(422).json({message : error.array()});
    }

    
    bcrypt.hash(password, 12).then(hashedPassword => {
        const newUser = new userModel({ email, password: hashedPassword, dob, name, role });
        return newUser.save()
    })
        .then(user => {
            res.status(201).json({ message: `${user.name} created succesfully with id ${user._id.toString()}` })
        })
        .catch(err => {
            let error = new Error("Unable to create user");
            error.status = 500;
            next(error);
        })


}



exports.userLogin = (req,res,next) => {
    const email = req.body.email;
    const password = req.body.password;
   
    const error = validationResult(req);
    if(error.array().length > 0 ){
        return res.status(422).json({message : error})
    }
   
    userModel.findOne({email}).then(user => {
        if(user === null){
            const error = new Error('No user found')
            error.status = 404;
            throw error;
        }
        bcrypt.compare(password, user.password).then(result => {
            if(result){
                const token = getJWT({username: user._id.toString(), email: user.email})
                console.log(token,)
                return res.status(200).json({token, message:"Logged in successfully!",role: user.role})
            }
            console.log("test")
            const error = new Error('Incorrect password.')
            error.status = 422;
            throw error;
            
        }).catch(err => {
            console.log("Do I come here")
            const error = new Error('Incorrect password.')
            error.status = 422;
            next(error)
        })
    }).catch(error =>{
        if(!error){
            let newError = new Error('Unable to Login');
            newError.status = 500
            next(newError)
        }
        next(error)
    })
}