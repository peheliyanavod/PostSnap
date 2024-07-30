const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type:String,
        required:true,
        trim: true
    },
    tokens: [
        {
            token: {
                type: String
            }
        }
    ]
    
})

UserSchema.pre("save",async function (next){
    const user = this;

    if(user.isModified("password")){
        user.password = await bcrypt.hash(user.password,8)
    }
    next();
})

UserSchema.statics.findByCredentials = async (email,password)=>{
    const user = await UserModel.findOne({email});

    if(!user){
        throw new Error();
    }

    const isMatch = await bcrypt.compare(password,user.password);

    if(!isMatch){
        throw new Error();
    }

    return user;
}

UserSchema.methods.generateToken = async function (){
    const user = this;
     
}

const UserModel = mongoose.model("user",UserSchema);

module.exports = UserModel;