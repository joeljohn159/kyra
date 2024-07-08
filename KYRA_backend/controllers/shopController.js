const {validateJWT} = require('../utils/auth');

const shopProducts = (req,res,next) => {
    console.log(req.headers)
    const token = req.headers.authorization.split(" ")[1];
    const response = validateJWT(token);
    console.log("Inside shop controller ",response)
    res.send(token);
}

module.exports = shopProducts;