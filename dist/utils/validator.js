import { body } from "express-validator";
const signupValidator = [
    body("name").notEmpty().withMessage("Name is required"),
    body("password").trim().isLength({ min: 8 }).withMessage("Password Should Contain Atleast 8 characters"),
    body("email").trim().isEmail().withMessage("Email is required"),
];
//# sourceMappingURL=validator.js.map