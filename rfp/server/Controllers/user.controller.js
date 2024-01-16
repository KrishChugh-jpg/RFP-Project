const { response } = require("express");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

// const sendEmail = require('../utils/send.email');

// create token for login
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "1d" });
};

//create token for reset-password
const createResetToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "1d" });
};

//login
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.loginUser(email, password);
    const token = createToken(user._id);
    const name = user.firstName;
    res.status(200).json({ email, name, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// signup
const signupUser = async (req, res) => {
  const { email, role } = req.body;

  try {
    const body = {
      ...req.body,
    };
    const user = await User.signup(body);
    const userId = user.userId.toString();
    console.log(userId.toString());

    const token = createToken(user._id);
    const name = user.Name;

    res.status(200).json({ email, name, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
const vendorUser = async (req, res) => {
  try {
    const vendors = await User.find({ role: "Vendor" });
    console.log(vendors);
 
    res.status(200).json({ data: vendors });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
const adminUser = async (req, res) => {
  try {
    const admins = await User.find({ role: "Admin" });
    console.log(admins);

    res.status(200).json({ data: admins });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const rfpCreate = async (req, res) => {
  const { email, vendorPrice, itemDesc, quantity, totalCost } = req.body;

  try {
    const user = await User.findOne({ email: email });
    user.vendorPrice = vendorPrice;
    user.vendorTotalCost = totalCost;
    user.vendorItemDesc = itemDesc;
    user.vendorItemQuantity = quantity;
    console.log(user);
    user.save();

    res.status(200).json({ message: user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
const categoryCreate = async (req, res) => {
  const { email, vendorCategory } = req.body;

  try {
    const user = await User.findOne({ email: email });
    user.vendorCategory = vendorCategory;
    console.log(user);
    user.save();

    res.status(200).json({ message: user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
const categoryRfpCreate = async (req, res) => {
  const {
    email,
    itemName,
    itemDesc,
    quantity,
    lastDate,
    maxPrice,
    minPrice,
    vendor,
  } = req.body;

  try {
    const user = await User.findOne({ email: email });
    user.rfpitemName = itemName;
    user.rfpitemDesc = itemDesc;
    user.rfpquantity = quantity;
    user.rfplastDate = lastDate;
    user.rfpmaxPrice = maxPrice;
    user.rfpminPrice = minPrice;
    user.rfpvendor = vendor;

    console.log(user);
    user.save();

    res.status(200).json({ message: user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//reset password link creation and email
// const resetPassword = async(req,res)=>{
//     const {email} = req.body;
//     try{
//         if(!email){
//             throw Error('Enter email-id');
//         }
//         const user = await User.findOne({email});
//         if(!user){
//             throw Error('User not found. Enter Valid email-id');
//         }
//         const userId = user._id;
//         let token = await Token.findOne({_id:userId});
//         if(!token){
//             const jwtToken = await createResetToken(user._id);
//             token =  await Token.createToken({
//                 _id:user._id,
//                 token:jwtToken,
//             })
//         }
//         const link = http://localhost:3000/auth/reset-password/${user._id}/${token.token};
//         await sendEmail(email,"Password Reset",Click on the link for reseting the passord:${link});
//         res.status(200).json({message:"reset password email sent sucessfully.",link});
//     }catch(err){
//         console.log(err);
//         res.status(401).json({error:err.message});
//     }
// }

const validateReset = async (req, res) => {
  const { id, token } = req.body;
  try {
    if (!id) {
      throw Error("Please provide id with request");
    }
    if (!token) {
      throw Error("Please provide token with request");
    }
    const { _id } = jwt.verify(token, process.env.SECRET);
    if (id === _id) {
      const user = await User.findOne({ _id: _id });
      if (!user) {
        throw Error("No user found for the id");
      }
      res.status(200).json({ message: "Validated successfully" });
    }
    if (id !== _id) {
      throw Error("Token not validated");
    }
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ error: "error occured during validation of token or id" });
  }
};

const changePassword = async (req, res) => {
  const { id, password } = req.body;
  try {
    if (!id) {
      throw Error("Please provide id with request");
    }
    if (!password) {
      throw Error("Please provide password with request");
    }
    const user = await User.changePassword(id, password);
    if (!user) {
      throw Error("Couldnt change password");
    }
    res.status(200).json({ message: "password changed sucessfully" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: "password  not changed sucessfully" });
  }
};

const getProfile = async (req, res) => {
  const email = req.params;
  try {
    const user = await User.findOne(email);
    if (!user) {
      throw Error("User does not exist");
    }

    res.status(200).json({
      user: user,
    });
  } catch (err) {
    res.status(400).json({ error: "Error occured while fetching profile" });
    console.log(err);
  }
};

//update profile
const updateProfile = async (req, res) => {
  const { email } = req.params;
  try {
    if (!email) {
      throw Error("Email not found");
    }
    const updatedUser = await User.updateProfile(email, req.body);
    if (!updatedUser) {
      throw Error("Could not change password");
    }
    res.status(200).json({ message: updatedUser });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: "Error occured in updation" });
  }
};

module.exports = {
  loginUser,
  signupUser,
  validateReset,
  changePassword,
  getProfile,
  updateProfile,
  vendorUser,
  adminUser,
  rfpCreate,
  categoryCreate,
  categoryRfpCreate,
};