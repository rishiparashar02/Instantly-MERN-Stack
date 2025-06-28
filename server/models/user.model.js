import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true,"Provide name"]
    },
    email : {
        type : String,
        required : [true, "provide email"],
        unique : true
    },
    password : {
        type : String,
        required : [true, "provide password"]
    },
    role : {
        type : String,
        enum : ['ADMIN',"USER"],
        default : "USER"
    }
},{
    timestamps : true
})

const UserModel = mongoose.model("User",userSchema)

export default UserModel