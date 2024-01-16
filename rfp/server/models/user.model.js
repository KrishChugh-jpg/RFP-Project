const mongoose = require("mongoose");
const schema = mongoose.Schema;
// const bcrypt = require('bcrypt');
const validator = require("validator");

const userSchema = new schema({
  userId: {
    type: schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: false,
  },

  role: {
    type: String,
    required: true,
  },

  revenue: {
    type: String,
  },
  employees: {
    type: String,
  },

  gst: {
    type: String,
  },

  pan: {
    type: String,
  },

  phone: {
    type: String,
    required:true,
  },

  // categories: {
  //   type: String,
  // },

  // vendorPrice:{
  //   type : Number
  // },
  // vendorItemDesc:{
  //   type : String
  // },
  // vendorItemQuantity:{
  //   type : Number
  // },
  // vendorTotalCost:{
  //   type : Number
  // },
  // vendorCategory:{
  //   type : String
  // },
  // rfpitemName:{
  //   type:String
  // },
  // rfpquantity:{
  //   type:String
  // },
  // rfpitemDesc:{
  //   type:String
  // },
  // rfplastDate:{
  //   type:Date
  // },
  // rfpmaxPrice:{
  //   type:String
  // },
  // rfpminPrice:{
  //   type:String
  // },
  // rfpminPrice:{
  //   type:String
  // },
  // rfpvendor:{
  //   type:String
  // },

},{
  strict:false,
  toJSON: { 
    transform: function(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
    }
  }
});

// static signup method
userSchema.statics.signup = async function (userObject) {
  // validation
  const email = userObject.email;
  const roles = userObject.role;
  const password = userObject.password;
  if (!email || !password) {
    console.log(email, password);
    throw Error("All fields must be filled");
  }
 
  if (!validator.isEmail(email)) {
    throw Error("Enter a valid Email");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not Strong enough");
  }
  if (roles !=="Admin" && roles !=="Vendor") {
    throw Error("role error");
  }
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("This email is already in use. Use another");
  }
 
  
  // const salt = await bcrypt.genSalt(10);
  // const hash = await bcrypt.hash(password,salt);
  const User = this.create(userObject);
  return User;
};

// static method for login
userSchema.statics.loginUser = async function (email, password) {
  // validator
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect email/password");
  }

  const match = password === user.password;
  if (!match) {
    throw Error("Incorrect email/password");
  }
  return user;
};

//static method for changing password
userSchema.statics.changePassword = async function (id, password) {
  if (!id || !password) {
    throw Error("Fill the password");
  }
  const user = await this.findOne({ _id: id });
  if (!user) {
    throw Error("No existing user check again");
  }
  const updatedUser = await this.updateOne(
    { _id: id },
    { $set: { password: password } }
  );
  if (!updatedUser) {
    throw Error("Not able to change password");
  }
  return updatedUser;
};

//update profile
userSchema.statics.updateProfile = async function (email, updateObject) {
  if (!email || !updateObject) {
    throw Error("Enter email");
  }
  const user = await this.findOne({ email });
  if (!user) {
    throw Error("No email found, enter Correct Email");
  }
  const updatedUser = await this.updateOne(
    { email },
    {
      $set: updateObject,
    }
  );
  return updatedUser;
};

module.exports = mongoose.model("User", userSchema);