const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorhandler");
const aysnchandler = require("./aysnchandler");
const UserModel = require("../models/usermodel");

exports.Authorization = aysnchandler(async (req, res, next) => {
  // console.log("cookie", req.cookies.token);
  const token = req.cookies.token;
  // console.log("token", token);
  if (!token) {
    return next(
      new ErrorHandler("Please Login First before Moving further", 400)
    );
  }

  const decode = jwt.verify(token, process.env.JWT);
  console.log("decode", decode);
  req.user = await UserModel.findById(decode._id);

  next();
});

exports.authorizerole = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler("You are not Allowed to Access This Route", 300)
      );
    }
    next();
  };
};
