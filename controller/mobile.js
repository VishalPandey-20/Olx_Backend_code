const mobile = require("../databaseModel/MobileModel")

exports.createmobile = async (req, res) => {
    try {
        const { Brand, Variant, Price, Display, Camera } = req.body
        const mobileData = await new mobile({
            Brand,
            Variant,
            Price,
            Display,
            Camera
        })
        mobileData.save()
            .then(() => {

                console.log({ message: "data save successful" });
                return res.json({ message: "data save successful" })
            }).catch((ar) => {
                console.log(ar);
            })
    } catch (er) {
        console.log(er);
    }
};

exports.getAllMobile = async (req, res) => {
    try {
        const data = await mobile.find()
        console.log(data);
        return res.json(data);
    } catch (er) {
        console.log(er);
    }
}

exports.update = async (req, res) => {
    try {
        mobile.findById({ _id: req.body._id }).updateOne(req.body)
            .then(() => {
                console.log({ message: "update succesfull" });
                return res.json({ message: "update succesfull" })
            }).catch((err) => {
                console.log(err);
            })
    } catch (er) {
        console.log(er);
    }
};


exports.delete = async (req, res) => {
    try {
        mobile.findByIdAndDelete({ _id: req.body._id })
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