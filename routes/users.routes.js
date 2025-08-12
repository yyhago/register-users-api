const { Router } = require("express")
const usersRouter = Router();

usersRouter.post("/", (req, res) => {
    const {nome, email, password} = req.body;
    res.json({nome, email, password})
})

module.exports = usersRouter