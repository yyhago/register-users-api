const { Router } = require("express")
const usersRouter = Router();

const UsersControllers = require("../controllers/UsersControllers.js")
const usersControllers = new UsersControllers()


function middlewareVerification(req, res, next){
    
    if(!req.body.isAdmin){
        return res.json({ message: "user unathorized" })
    }

    next()
}


usersRouter.post("/", middlewareVerification,  usersControllers.createUser)

module.exports = usersRouter