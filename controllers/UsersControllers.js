const AppError = require("../utils/AppError")

class UsersControllers{

    createUser(req, res) {
        const {nome, email, password} = req.body;

        if(!nome){
            throw new AppError("Nome é obrigatorio!")
        }

        res.status(201).json({nome, email, password})
    }

}


module.exports = UsersControllers