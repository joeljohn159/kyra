const jwt = require('jsonwebtoken')

const SECRET = 'secret_key';

function getJWT(data){
    const token = jwt.sign(data,SECRET,{expiresIn: '1h'})
    return token
}


function validateJWT(data){
    const res = jwt.verify(data, SECRET);
    console.log(res);
    return res
}
module.exports = {getJWT, validateJWT}