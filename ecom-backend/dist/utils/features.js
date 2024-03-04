import mongoose from "mongoose";
export const connectDB = () => {
    mongoose.connect("", {
        dbName: "Ecom 24",
    })
        .then((c) => console.log(`DB Connected to ${c.connection.host}`))
        .catch((e) => console.log(e));
};
