const jwt = require("jsonwebtoken")
const dotEnv = require("dotenv")

dotEnv.config()

const jwt_check = (req, res, next) => {

    try{
        let headerJwt = req.headers["authorization"]
        let isJwt = jwt.verify(headerJwt, process.env.SECRET_JWT)
        next()
    }
    catch{
    
        res.json({ "estado": false, "info": "token invalido" })
    }
}

module.exports = jwt_check