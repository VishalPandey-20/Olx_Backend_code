
const user = require("../databaseModel/UserModel");
var jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

exports.userSignUp = async (req, res) => {
    console.log(req.body);
    const salt = await bcrypt.genSalt(5);
    const date = new Date()
    const { name, email, password, phoneNumber, state } = req.body
    const userData = await new user({
        name,
        email,
        password,
        phoneNumber,
        state,
        date
    })

    userData.password = await bcrypt.hashSync(userData.password, salt)
    userData.save((err, data) => {
        if (err) {
            console.log(err);
            return res.send({ errors: err })
        }
        else {
            console.log({ message: "User SignUp successfully", signupError: false });
            return res.send({ message: "User SignUp successfully", signupError: false })
        }
    })

}

exports.userLogin = async (req, res) => {
    await user.findOne({ email: req.body.email })
        .exec(async (err, data) => {
            // console.log("data", data);
            if (data == null) {
                return res.status(404).json({
                    "message": "first do signUp"
                })
            } else {
                bcrypt.compare(req.body.password, data.password, async (e, d) => {
                    if (e) {
                        console.log('Comparison error: ', e)
                    } else {
                        try {
                            const token = jwt.sign({ email: data.email }, "vishal")
                            // console.log(token);
                            res.cookie("token", token)
                            res.send(token);
                            console.log("logIn successful");
                            // return res.json({message:"logIn successful"})
                        } catch (er) {
                            console.log(er);
                        }
                    }
                })
            }
        })
};