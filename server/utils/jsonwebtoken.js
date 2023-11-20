exports.sendtoken = (user, status, res) => {
  const token = user.generatetoken();

  const options = {
    expires: new Date(
      Date.now() + process.env.Cookie_Expire * 60 * 60 * 24 * 1000
    ),
    httpOnly: false, // Allow client-side JavaScript to read the cookie
    sameSite: "lax", // Change this to 'lax' or 'strict'
  };

  console.log(token);
  res.status(status).cookie("token", token, options).json({
    sucess: true,
    user: user,
  });
};
