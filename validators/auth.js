const { check } = require("express-validator");
const validateEmail = require("./validateEmail");

const signupValidator = [
  check("name").notEmpty().withMessage("Name is required"),

  check("email")
    .isEmail()
    .withMessage("Invalid email")
    .notEmpty()
    .withMessage("Email is required"),

  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must 6 character long")
    .notEmpty()
    .withMessage("Password is required"),
];

const signinValidator = [
  check("email")
    .isEmail()
    .withMessage("Invalid email")
    .notEmpty()
    .withMessage("Email is required"),

  check("password").notEmpty().withMessage("Password is required"),
];

const emailValidator = [
  check("email")
    .isEmail()
    .withMessage("Invalid email")
    .notEmpty()
    .withMessage("Email is required"),
];

const verifyUserValidator = [
  check("email")
    .isEmail()
    .withMessage("Invalid email")
    .notEmpty()
    .withMessage("Email is required"),

  check("code").notEmpty().withMessage("Code is required"),
];

const recoverPasswordValidator = [
  check("email")
    .isEmail()
    .withMessage("Invalid Email")
    .notEmpty()
    .withMessage("Email is required"),

  check("code").notEmpty().withMessage("Code is Required"),

  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must 6 character long")
    .notEmpty()
    .withMessage("Password is required"),
];

const changePasswordValidator = [
  check("oldPassword").notEmpty().withMessage("Old password is required"),

  check("newPassword").notEmpty().withMessage("New password is required"),
];

const updateProfileValidator = [
  check("email").custom(async (email) => {
    if (email) {
      const isValidateEmail = validateEmail(email);
      if (!isValidateEmail) {
        throw "Invalid Email";
      }
    }
  }),
];

module.exports = {
  signupValidator,
  signinValidator,
  emailValidator,
  verifyUserValidator,
  recoverPasswordValidator,
  changePasswordValidator,
  updateProfileValidator,
};
