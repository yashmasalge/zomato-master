import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

const UserSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    address: [{ details: { type: String }, for: { type: String } }],
    phoneNumber: [{ type: Number }],
  },
  {
    timestamps: true,
  }
);

// generating new token
UserSchema.methods.generateJwtToken = function (){
  return jwt.sign({ user : this._id.toString() },"ZomatoApp");
};

// checking email and phoneNumber
UserSchema.statics.findbyEmailandPhone = async ({ email, phoneNumber }) => {
  const checkUserbyEmail =await UserModel.findOne({ email });
  const checkUserbyPhone = await UserModel.findOne( {phoneNumber });

  if(checkUserbyEmail || checkUserbyPhone){
    throw new Error("user already exists");
   }
   return false; 
};

UserSchema.statics.findbyEmailandPassword = async({ email, password }) => {
  // check if email exists
  const user = await  UserModel.findOne({ email });
  if(!user) throw new Error("User does not exists");

  const doesPasswordMatch = await bcryptjs.compare(password, user.password)
  if(!doesPasswordMatch) throw new Error("Invalid Password");

  return user;
}

UserSchema.pre("save", function (next){
  const user = this;
  // password is modified
  if(!user.isModified("password")) return next();

  // generate bcrypt salt
   bcryptjs.genSalt(8, (error,salt) =>{
    if(error) return next(error);
    //  Hash the password
    bcryptjs.hash(user.password, salt, (error,hash)=>{
      if(error) return next(error);

      // Assign hashed passowrd
      user.password= hash;

      return next();
    });
   });
});

export const UserModel = mongoose.model("Users", UserSchema);