const { find, findOne } = require("../databaseModel/CarModel")
const carScema = require("../databaseModel/CarModel")

exports.createCars = async (req, res) => {
    try {
        const { Brand, Variant, Fuel, Model, Year, No_of_Owners, imges } = req.body
        const carData = await new carScema({
            Brand,
            Variant,
            Fuel,
            Model,
            Year,
            No_of_Owners,
            imges

        })
        carData.save()
        console.log("dfghjk");
        return res.json({ message: "data save" })
    } catch (err) {
        console.log(err);
    }
}

exports.getAllCars = async (req, res) => {
    try {
        const data = await carScema.find()
        console.log(data);
        return res.json(data);
    } catch (er) {
        console.log(er);
    }
}

exports.update = async (req, res) => {
    try {
        carScema.findById({ _id: req.body._id }).updateOne(req.body)
            .then(() => {
                console.log("update succesfull");
                return res.json({ message: "update succesfull" })
            }).catch((err) => {
                console.log(err);
            })
    } catch (er) {
        console.log(er);
    }
}

exports.delete = async (req, res) => {
    try {
        carScema.findByIdAndDelete({ _id: req.body._id })
            .then(() => {
                console.log("data delete succesfull");
                return res.json({ message: "data delete succesfull" })
            }).catch((err) => {
                console.log(err);
            })
    } catch (er) {
        console.log(er);
    }
}
